
export type ProjectStatus = 'draft' | 'published';
export type PostStatus = 'draft' | 'published' | 'archived';
export type EventStatus = 'upcoming' | 'ongoing' | 'past' | 'cancelled';

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  client: string;
  year: number;
  description: string;
  featured_image_url: string;
  images?: string[];
  status: ProjectStatus;
  // Case Study Fields
  brief?: string;
  strategy?: string;
  result?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image_url: string;
  tags: string[];
  status: PostStatus;
  published_at: string;
}

export interface Event {
  id: string;
  name: string;
  description: string;
  event_type: string;
  start_date: string;
  location: string;
  featured_image_url: string;
  status: EventStatus;
}

export interface Talent {
  id: string;
  name: string;
  slug: string;
  bio: string;
  role: 'Model' | 'Artist' | 'Creative';
  profile_image_url: string;
  featured: boolean;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: {
    name: string;
    email: string;
    role: string;
  } | null;
}
