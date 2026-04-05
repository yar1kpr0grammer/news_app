"use client";

import { useState } from "react";
import type { Article } from "@/types/news";

const KEY = "favorites";

function safeLoad(): Article[] {
  // 👇 важно: проверка ТОЛЬКО при вызове
  if (typeof window === "undefined") return [];

  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

function save(data: Article[]) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<Article[]>(() => safeLoad());

  const isFavorite = (url: string) => {
    return favorites.some((a) => a.url === url);
  };

  const add = (article: Article) => {
    setFavorites((prev) => {
      if (prev.some((a) => a.url === article.url)) return prev;

      const updated = [...prev, article];
      save(updated);
      return updated;
    });
  };

  const remove = (url: string) => {
    setFavorites((prev) => {
      const updated = prev.filter((a) => a.url !== url);
      save(updated);
      return updated;
    });
  };

  return { favorites, add, remove, isFavorite };
}
