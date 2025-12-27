"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useActionState } from "react";
import * as actions from "@/actions";
import { FiCode, FiFileText, FiTag } from "react-icons/fi";

const LANGUAGES = [
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

const CreateSnippetPage = () => {
  const [formStateData, formAction] = useActionState(actions.createSnippet, {
    message: "",
  });

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          Create New Snippet
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Save your code snippets for easy access and reuse
        </p>
      </div>

      <form action={formAction} className="space-y-6">
        {/* Title */}
        <div className="space-y-2">
          <Label htmlFor="title" className="flex items-center gap-2">
            <FiFileText className="w-4 h-4" />
            Title *
          </Label>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="e.g., React Custom Hook for API Calls"
            className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
            required
          />
        </div>

        {/* Language */}
        <div className="space-y-2">
          <Label htmlFor="language" className="flex items-center gap-2">
            <FiCode className="w-4 h-4" />
            Language *
          </Label>
          <select
            name="language"
            id="language"
            className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            {LANGUAGES.map((lang) => (
              <option key={lang} value={lang} className="capitalize">
                {lang}
              </option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Label htmlFor="description">Description (Optional)</Label>
          <Textarea
            name="description"
            id="description"
            placeholder="Brief description of what this snippet does..."
            className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 min-h-[80px]"
          />
        </div>

        {/* Tags */}
        <div className="space-y-2">
          <Label htmlFor="tags" className="flex items-center gap-2">
            <FiTag className="w-4 h-4" />
            Tags (Optional)
          </Label>
          <Input
            type="text"
            name="tags"
            id="tags"
            placeholder="react, hooks, api (comma-separated)"
            className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Separate tags with commas
          </p>
        </div>

        {/* Code */}
        <div className="space-y-2">
          <Label htmlFor="code">Code *</Label>
          <Textarea
            name="code"
            id="code"
            placeholder="Paste your code here..."
            className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 font-mono text-sm min-h-[300px]"
            required
          />
        </div>

        {/* Error Message */}
        {formStateData.message && (
          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-2 border-red-500 rounded-lg text-red-700 dark:text-red-400">
            {formStateData.message}
          </div>
        )}

        {/* Submit Button */}
        <div className="flex gap-3">
          <Button
            type="submit"
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
          >
            Create Snippet
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => window.history.back()}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateSnippetPage;

