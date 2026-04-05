"use client";

import { Article } from "@/types/news";

export function NewsCard({
  article,
  onSave,
  isSaved,
}: {
  article: Article;
  onSave: () => void;
  isSaved: boolean;
}) {
  return (
    <div className="border p-4 rounded mb-3 transition">
      <h2 className="font-bold">{article.title}</h2>

      <p className="text-sm opacity-60">{article.source.name}</p>

      <p className="mt-2">{article.description}</p>

      <div className="flex gap-3 mt-3 items-center">
        <a href={article.url} target="_blank">
          📖 Read
        </a>

        <button
          onClick={onSave}
          disabled={isSaved}
          className={`px-2 py-1 rounded transition ${
            isSaved ? "bg-green-200 text-green-800 cursor-not-allowed" : ""
          }`}
        >
          {isSaved ? "✅ Saved" : "⭐ Save"}
        </button>
      </div>
    </div>
  );
}
