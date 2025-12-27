"use client";
import Link from "next/link";
import { FiStar, FiCode, FiCalendar, FiTag } from "react-icons/fi";
import { formatDistanceToNow } from "date-fns";
import type { Snippet } from "@prisma/client";
import { toggleFavorite } from "@/actions";
import { useState } from "react";
import toast from "react-hot-toast";

type SnippetCardProps = {
    snippet: Snippet;
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

export default function SnippetCard({ snippet }: SnippetCardProps) {
    const [isFavorite, setIsFavorite] = useState(snippet.isFavorite);
    const [isToggling, setIsToggling] = useState(false);

    const handleFavoriteToggle = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (isToggling) return;

        setIsToggling(true);
        try {
            await toggleFavorite(snippet.id, !isFavorite);
            setIsFavorite(!isFavorite);
            toast.success(isFavorite ? "Removed from favorites" : "Added to favorites");
        } catch (error) {
            toast.error("Failed to update favorite status");
            console.error(error);
        } finally {
            setIsToggling(false);
        }
    };

    const tags = snippet.tags ? snippet.tags.split(",").filter(Boolean) : [];

    return (
        <Link href={`/snippet/${snippet.id}`}>
            <div className="group relative p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden">
                {/* Gradient Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                                {snippet.title}
                            </h3>
                            {snippet.description && (
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                                    {snippet.description}
                                </p>
                            )}
                        </div>

                        <button
                            onClick={handleFavoriteToggle}
                            disabled={isToggling}
                            className="ml-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                            <FiStar
                                className={`w-5 h-5 transition-colors ${isFavorite
                                    ? "fill-yellow-500 text-yellow-500"
                                    : "text-gray-400 hover:text-yellow-500"
                                    }`}
                            />
                        </button>
                    </div>

                    {/* Language Badge */}
                    <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1.5">
                            <FiCode className="w-4 h-4 text-gray-500" />
                            <span
                                className={`px-2 py-1 text-xs font-medium rounded-md text-white ${LANGUAGE_COLORS[snippet.language] || LANGUAGE_COLORS.other
                                    }`}
                            >
                                {snippet.language}
                            </span>
                        </div>
                    </div>

                    {/* Tags */}
                    {tags.length > 0 && (
                        <div className="flex items-center gap-2 mb-3 flex-wrap">
                            <FiTag className="w-4 h-4 text-gray-400" />
                            {tags.slice(0, 3).map((tag: string, index: number) => (
                                <span
                                    key={index}
                                    className="px-2 py-0.5 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                                >
                                    {tag.trim()}
                                </span>
                            ))}
                            {tags.length > 3 && (
                                <span className="text-xs text-gray-500">+{tags.length - 3}</span>
                            )}
                        </div>
                    )}

                    {/* Code Preview */}
                    <div className="mb-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                        <pre className="text-xs text-gray-700 dark:text-gray-300 overflow-hidden line-clamp-3 font-mono">
                            {snippet.code}
                        </pre>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                            <FiCalendar className="w-3 h-3" />
                            <span>
                                {formatDistanceToNow(new Date(snippet.createdAt), {
                                    addSuffix: true,
                                })}
                            </span>
                        </div>
                        <span className="text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                            View details →
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
