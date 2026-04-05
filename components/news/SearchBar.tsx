"use client";

export function SearchBar({ onChange }: { onChange: (v: string) => void }) {
  return (
    <input
      className="border p-2 w-full"
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search..."
    />
  );
}
