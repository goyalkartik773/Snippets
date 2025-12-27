import { prisma } from "@/lib/prisma";
import SnippetList from "@/components/SnippetList";
import { FiCode } from "react-icons/fi";

export default async function Home() {
  const snippets = await prisma.snippet.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12 px-4">
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6">
          <FiCode className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
          Your Code Snippet Library
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Store, organize, and access your code snippets from anywhere. Never
          lose that perfect piece of code again.
        </p>
      </div>

      {/* Snippets List */}
      <SnippetList snippets={snippets} />
    </div>
  );
}

