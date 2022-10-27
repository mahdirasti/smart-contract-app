export interface IBlog {
  body: string;
  created_at?: string;
  id: number;
  meta: any[];
  media: any[];
  categories: any[];
  tags: any[];
  reading_time: number | null;
  short_url: string | null;
  slug: string;
  status: BlogArticleStatus;
  title: string;
  type: string;
  updated_at: string;
}

export type BlogArticleStatus = "published" | "draft" | "archived";
