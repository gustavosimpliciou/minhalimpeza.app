export interface User {
  id: string;
  email: string;
  name: string;
  plan: string | null;
}

export interface AuthError {
  message: string;
  code?: string;
}

export type Platform = 'twitter' | 'instagram' | 'tiktok' | 'youtube' | 'google';

export interface TrendItem {
  hashtag: string;
  mentions: number;
  growth: number;
}