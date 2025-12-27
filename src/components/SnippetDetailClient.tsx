"use client";
import { Button } from "@/components/ui/button";
import type { Snippet } from "@prisma/client";
import { FiCopy, FiCheck, FiCalendar, FiCode, FiTag, FiStar } from "react-icons/fi";
import { useState } from "react";
import toast from "react-hot-toast";
import { formatDistanceToNow } from "date-fns";

type SnippetDetailClientProps = {
    snippet: Snippet;
    onToggleFavorite: () => void;
};

const LANGUAGE_COLORS: Record<string, string> = {
    javascript: "bg-yellow-500",
    typescript: "bg-blue-500",
    python: "bg-green-500",
    java: "bg-red-500",
    cpp: "bg-purple-500",
    csharp: "bg-indigo-500",
    go: "bg-cyan-500",
    rust: "bg-orange-500",
    php: "bg-violet-500",
    ruby: "bg-rose-500",
    swift: "bg-orange-400",
    kotlin: "bg-purple-400",
    html: "bg-orange-600",
    css: "bg-blue-600",
    sql: "bg-teal-500",
    bash: "bg-gray-600",
    other: "bg-gray-500",
};

export default function SnippetDetailClient({
    snippet,
    onToggleFavorite,
}: SnippetDetailClientProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(snippet.code);
            setCopied(true);
            toast.success("Code copied to clipboard!");
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            toast.error("Failed to copy code");
            console.error(error);
        }
    };

    const tags = snippet.tags ? snippet.tags.split(",").filter(Boolean) : [];

    return (
        <div className="max-w-5xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-gray-200 dark:border-gray-800">
                <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {snippet.title}
                    </h1>
                    {snippet.description && (
                        <p className="text-gray-600 dark:text-gray-400">
                            {snippet.description}
                        </p>
                    )}
                </div>

                <div className="flex items-center gap-2">
                    <Button
                        onClick={onToggleFavorite}
                        variant="outline"
                        className="flex items-center gap-2"
                    >
                        <FiStar
                            className={`w-4 h-4 ${snippet.isFavorite ? "fill-yellow-500 text-yellow-500" : ""
                                }`}
                        />
                        {snippet.isFavorite ? "Unfavorite" : "Favorite"}
                    </Button>
                </div>
            </div>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                    <FiCode className="w-4 h-4 text-gray-500" />
                    <span
                        className={`px-3 py-1 text-xs font-medium rounded-md text-white ${LANGUAGE_COLORS[snippet.language] || LANGUAGE_COLORS.other
                            }`}
                    >
                        {snippet.language}
                    </span>
                </div>

                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <FiCalendar className="w-4 h-4" />
                    <span>
                        Created {formatDistanceToNow(new Date(snippet.createdAt), { addSuffix: true })}
                    </span>
                </div>

                {snippet.updatedAt && snippet.updatedAt.toString() !== snippet.createdAt.toString() && (
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <span>•</span>
                        <span>
                            Updated {formatDistanceToNow(new Date(snippet.updatedAt), { addSuffix: true })}
                        </span>
                    </div>
                )}
            </div>

            {/* Tags */}
            {tags.length > 0 && (
                <div className="flex items-center gap-2 flex-wrap">
                    <FiTag className="w-4 h-4 text-gray-400" />
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                        >
                            {tag.trim()}
                        </span>
                    ))}
                </div>
            )}

            {/* Code Block */}
            <div className="relative group">
                <div className="absolute top-3 right-3 z-10">
                    <Button
                        onClick={handleCopy}
                        size="sm"
                        variant="secondary"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        {copied ? (
                            <>
                                <FiCheck className="w-4 h-4 mr-2" />
                                Copied!
                            </>
                        ) : (
                            <>
                                <FiCopy className="w-4 h-4 mr-2" />
                                Copy
                            </>
                        )}
                    </Button>
                </div>

                <pre className="p-6 bg-gray-900 dark:bg-gray-950 rounded-lg border border-gray-700 overflow-x-auto">
                    <code className="text-sm text-gray-100 font-mono leading-relaxed">
                        {snippet.code}
                    </code>
                </pre>
            </div>
        </div>
    );
}
