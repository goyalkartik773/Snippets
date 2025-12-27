"use client";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { FiSun, FiMoon, FiCode } from "react-icons/fi";
import { Button } from "./ui/button";

export default function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 group-hover:scale-110 transition-transform">
                            <FiCode className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                                CodeSnippets
                            </h1>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                Manage your code
                            </p>
                        </div>
                    </Link>

                    <div className="flex items-center gap-4">
                        <Link href="/snippet/new">
                            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                                + New Snippet
                            </Button>
                        </Link>

                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? (
                                <FiSun className="w-5 h-5 text-yellow-500" />
                            ) : (
                                <FiMoon className="w-5 h-5 text-gray-700" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
