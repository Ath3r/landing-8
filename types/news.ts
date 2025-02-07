export interface NewsItem {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  imageUrl: string;
  author: string;
  readTime: string;
}

export interface NewsData {
  news: NewsItem[];
}
