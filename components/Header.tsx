"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="flex gap-4 p-4 sticky top-0 backdrop-blur-xs ">
      <Link href="/" className={isActive("/") ? "text-blue-600 font-bold" : ""}>
        News
      </Link>

      <Link
        href="/favorites"
        className={isActive("/favorites") ? "text-blue-600 font-bold" : ""}
      >
        Favorites
      </Link>
    </header>
  );
}
