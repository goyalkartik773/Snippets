import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";
import * as actions from "@/actions";
import { notFound } from "next/navigation";
import SnippetDetailClient from "@/components/SnippetDetailClient";
import { FiArrowLeft, FiEdit, FiTrash2 } from "react-icons/fi";

type SnippetDetailsProps = {
  params: Promise<{ id: string }>;
};

const SnippetDetailPage: React.FC<SnippetDetailsProps> = async ({
  params,
}) => {
  const id = parseInt((await params).id);

  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });

  if (!snippet) notFound();

  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);
  const toggleFavoriteAction = actions.toggleFavorite.bind(
    null,
    snippet.id,
    !snippet.isFavorite
  );

  return (
    <div className="space-y-6">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link href="/">
          <Button variant="ghost" className="flex items-center gap-2">
            <FiArrowLeft className="w-4 h-4" />
            Back to Snippets
          </Button>
        </Link>

        <div className="flex items-center gap-2">
          <Link href={`/snippet/${snippet.id}/edit`}>
            <Button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              <FiEdit className="w-4 h-4" />
              Edit
            </Button>
          </Link>
          <form action={deleteSnippetAction}>
            <Button
              variant="destructive"
              type="submit"
              className="flex items-center gap-2"
            >
              <FiTrash2 className="w-4 h-4" />
              Delete
            </Button>
          </form>
        </div>
      </div>

      {/* Snippet Detail */}
      <SnippetDetailClient
        snippet={snippet}
        onDelete={deleteSnippetAction}
        onToggleFavorite={toggleFavoriteAction}
      />
    </div>
  );
};

export default SnippetDetailPage;

export const generateStaticParams = async () => {
  const snippets = await prisma.snippet.findMany();

  return snippets.map((snippet) => {
    return { id: snippet.id.toString() };
  });
};


