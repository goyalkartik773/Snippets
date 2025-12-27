"use client";
import { useState } from "react";
import { FiSearch, FiFilter, FiStar } from "react-icons/fi";
import { Input } from "./ui/input";

type SearchFilterProps = {
    onSearchChange: (search: string) => void;
    onLanguageChange: (language: string) => void;
    onFavoriteToggle: () => void;
    showFavoritesOnly: boolean;
};

const LANGUAGES = [
    "all",
    "javascript",
    "typescript",
    "python",
    "java",
    "cpp",
    "csharp",
    "go",
    "rust",
    "php",
    "ruby",
    "swift",
    "kotlin",
    "html",
    "css",
    "sql",
    "bash",
    "other",
];

export default function SearchFilter({
    onSearchChange,
    onLanguageChange,
    onFavoriteToggle,
    showFavoritesOnly,
}: SearchFilterProps) {
    const [showFilters, setShowFilters] = useState(false);

    return (
        <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
                {/* Search Bar */}
                <div className="relative flex-1">
                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                        type="text"
                        placeholder="Search snippets by title or tags..."
                        className="pl-10 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                </div>

                {/* Filter Toggle */}
                <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
                >
                    <FiFilter className="w-4 h-4" />
                    Filters
                </button>

                {/* Favorites Toggle */}
                <button
                    onClick={onFavoriteToggle}
                    className={`px-4 py-2 rounded-lg border transition-colors flex items-center gap-2 ${showFavoritesOnly
                            ? "bg-yellow-500 text-white border-yellow-500"
                            : "border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
                        }`}
                >
                    <FiStar className={`w-4 h-4 ${showFavoritesOnly ? "fill-current" : ""}`} />
                    Favorites
                </button>
            </div>

            {/* Filters Panel */}
            {showFilters && (
                <div className="p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 animate-in slide-in-from-top-2">
                    <h3 className="text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">
                        Filter by Language
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {LANGUAGES.map((lang) => (
                            <button
                                key={lang}
                                onClick={() => onLanguageChange(lang)}
                                className="px-3 py-1.5 text-sm rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-500 dark:hover:border-blue-500 transition-colors capitalize"
                            >
                                {lang}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
