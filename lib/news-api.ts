import { NewsApiResponse } from "@/types/news";

export async function getTopNews(): Promise<NewsApiResponse> {
  const res = await fetch("/api/news");
  return res.json();
}

export async function searchNews(query: string): Promise<NewsApiResponse> {
  const res = await fetch(`/api/news?q=${encodeURIComponent(query)}`);
  return res.json();
}
