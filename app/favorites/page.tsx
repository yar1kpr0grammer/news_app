"use client";

import { useFavorites } from "@/hooks/useFavorites";

export default function FavoritesPage() {
  const { favorites, remove } = useFavorites();

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-xl font-bold mb-4">⭐ Favorites</h1>

      {favorites.length === 0 && <p>No favorites yet</p>}

      {favorites.map((a) => (
        <div key={a.url} className="border p-3 mb-2 flex flex-row justify-between">
          <a href={a.url} target="_blank">
            {a.title}
          </a>

          <button
            className="hover:scale-125 duration-100 cursor-pointer"
            onClick={() => remove(a.url)}
          >
            🗑️
          </button>
        </div>
      ))}
    </main>
  );
}
