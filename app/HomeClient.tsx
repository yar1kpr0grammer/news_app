"use client";

import { useEffect, useState } from "react";
import { Article } from "@/types/news";
import { getTopNews, searchNews } from "@/lib/news-api";
import { SearchBar } from "@/components/news/SearchBar";
import { NewsList } from "@/components/news/NewsList";
import { NewsSkeleton } from "@/components/news/NewsSkeleton";
import { useFavorites } from "@/hooks/useFavorites";

export default function HomeClient() {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);

  const { add, isFavorite } = useFavorites();

  useEffect(() => {
    const load = async () => {
      setLoading(true);

      try {
        const data = query ? await searchNews(query) : await getTopNews();

        setArticles(data.articles);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [query]);

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <SearchBar onChange={setQuery} />

      {loading ? (
        <NewsSkeleton />
      ) : (
        <NewsList
          articles={articles}
          onSave={add}
          isFavorite={isFavorite} // ✅ ВОТ ЭТО ГЛАВНОЕ
        />
      )}
    </main>
  );
}
