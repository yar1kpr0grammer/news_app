export interface Article {
  source: { name: string };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  content: string | null;
}

export interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}
