"use client";
import { useState, useMemo } from "react";
import type { Snippet } from "@prisma/client";
import SnippetCard from "./SnippetCard";
import SearchFilter from "./SearchFilter";
import { FiInbox } from "react-icons/fi";

type SnippetListProps = {
    snippets: Snippet[];
};

export default function SnippetList({ snippets }: SnippetListProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("all");
    const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

    const filteredSnippets = useMemo(() => {
        return snippets.filter((snippet) => {
            // Search filter
            const matchesSearch =
                snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                snippet.tags?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                snippet.description?.toLowerCase().includes(searchQuery.toLowerCase());

            // Language filter
            const matchesLanguage =
                selectedLanguage === "all" || snippet.language === selectedLanguage;

            // Favorites filter
            const matchesFavorites = !showFavoritesOnly || snippet.isFavorite;

            return matchesSearch && matchesLanguage && matchesFavorites;
        });
    }, [snippets, searchQuery, selectedLanguage, showFavoritesOnly]);

    return (
        <div className="space-y-6">
            <SearchFilter
                onSearchChange={setSearchQuery}
                onLanguageChange={setSelectedLanguage}
                onFavoriteToggle={() => setShowFavoritesOnly(!showFavoritesOnly)}
                showFavoritesOnly={showFavoritesOnly}
            />

            {filteredSnippets.length === 0 ? (
                <div className="text-center py-16">
                    <FiInbox className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        No snippets found
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                        {searchQuery || selectedLanguage !== "all" || showFavoritesOnly
                            ? "Try adjusting your filters"
                            : "Create your first snippet to get started"}
                    </p>
                </div>
            ) : (
                <>
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Showing {filteredSnippets.length} of {snippets.length} snippet
                            {snippets.length !== 1 ? "s" : ""}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredSnippets.map((snippet) => (
                            <SnippetCard key={snippet.id} snippet={snippet} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
