import { NextResponse } from "next/server";

const API_KEY = process.env.NEWS_API_KEY;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q");

  const url = q
    ? `https://newsapi.org/v2/everything?q=${q}&apiKey=${API_KEY}`
    : `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

  const res = await fetch(url, {
    next: { revalidate: 60 },
  });

  const data = await res.json();

  return NextResponse.json(data);
}
