"use client";

import { Article } from "@/types/news";
import { NewsCard } from "./NewsCard";

export function NewsList({
  articles,
  onSave,
  isFavorite, // ✅ добавили
}: {
  articles: Article[];
  onSave: (a: Article) => void;
  isFavorite: (url: string) => boolean; // ✅ тип
}) {
  console.log(isFavorite);
  return (
    <div>
      {articles.map((a) => (
        <NewsCard
          key={a.url}
          article={a}
          onSave={() => onSave(a)}
          isSaved={isFavorite(a.url)} // ✅ теперь работает
        />
      ))}
    </div>
  );
}
