"use client";
import { Editor } from "@monaco-editor/react";
import React, { useState } from "react";
import type { Snippet } from "@prisma/client";
import { Button } from "./ui/button";
import { saveSnippet } from "@/actions";
import { Label } from "./ui/label";

const LANGUAGES = [
  { value: "javascript", label: "JavaScript", monacoLang: "javascript" },
  { value: "typescript", label: "TypeScript", monacoLang: "typescript" },
  { value: "python", label: "Python", monacoLang: "python" },
  { value: "java", label: "Java", monacoLang: "java" },
  { value: "cpp", label: "C++", monacoLang: "cpp" },
  { value: "csharp", label: "C#", monacoLang: "csharp" },
  { value: "go", label: "Go", monacoLang: "go" },
  { value: "rust", label: "Rust", monacoLang: "rust" },
  { value: "php", label: "PHP", monacoLang: "php" },
  { value: "ruby", label: "Ruby", monacoLang: "ruby" },
  { value: "swift", label: "Swift", monacoLang: "swift" },
  { value: "kotlin", label: "Kotlin", monacoLang: "kotlin" },
  { value: "html", label: "HTML", monacoLang: "html" },
  { value: "css", label: "CSS", monacoLang: "css" },
  { value: "sql", label: "SQL", monacoLang: "sql" },
  { value: "bash", label: "Bash", monacoLang: "shell" },
  { value: "other", label: "Other", monacoLang: "plaintext" },
];

const EditSnippetForm = ({ snippet }: { snippet: Snippet }) => {
  const [code, setCode] = useState(snippet.code);
  const [language, setLanguage] = useState(snippet.language);

  const changeEventHandler = (value: string = "") => {
    setCode(value);
  };

  const saveSnippetAction = saveSnippet.bind(null, snippet.id, code, language);

  const selectedLang =
    LANGUAGES.find((l) => l.value === language) || LANGUAGES[0];

  return (
    <div className="flex flex-col gap-4">
      <form
        action={saveSnippetAction}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <div className="flex-1">
          <h1 className="font-bold text-xl text-gray-900 dark:text-white">
            Edit Your Code
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Make changes and save when ready
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex flex-col gap-1">
            <Label htmlFor="language" className="text-xs">
              Language
            </Label>
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {LANGUAGES.map((lang) => (
                <option key={lang.value} value={lang.value}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <Label className="text-xs opacity-0">Save</Label>
            <Button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              Save Changes
            </Button>
          </div>
        </div>
      </form>

      <div className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
        <Editor
          height="60vh"
          theme="vs-dark"
          language={selectedLang.monacoLang}
          defaultValue={code}
          onChange={changeEventHandler}
          options={{
            minimap: { enabled: true },
            fontSize: 14,
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 2,
          }}
        />
      </div>
    </div>
  );
};

export default EditSnippetForm;

