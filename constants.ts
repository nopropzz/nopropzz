
import { Project, Post, Event, Talent } from './types';

export const APP_VERSION = '1.4.0';

export interface Product {
  id: string;
  name: string;
  price: number;
  type: string;
  category: string;
  image: string;
  description: string;
  story?: string;
  specs?: string[];
  availableSizes?: string[];
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'GANGSTA',
    price: 125,
    type: 'Limited Print',
    category: 'Prints',
    image: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&q=80&w=800',
    description: 'High-contrast monochrome print on 300gsm raw archival paper. Hand-numbered.',
    story: 'Captured during a mid-winter expedition in the Nordic wilderness. The shadow cast by the brutalist structure perfectly mirrored the jagged mountain peaks in the distance, creating a moment of absolute structural symmetry.',
    specs: ['300gsm Archival Paper', 'Giclée Fine Art Print', 'Hand-signed & Numbered', 'Limited Edition of 50'],
    availableSizes: ['A3', 'A2', '50x70cm']
  },
  {
    id: 'p2',
    name: 'REAL SUGAR',
    price: 85,
    type: 'Gallery Edition',
    category: 'Prints',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800',
    description: 'Captured during the Vita Earth campaign drop. Raw, unedited film stock.',
    story: 'The Atlantic ocean meets the brutalist sea walls of Ericeira. This frame was captured on the final day of the production, as the sun broke through a week of heavy fog, illuminating the textures of the concrete against the salt spray.',
    specs: ['250gsm Silk Finish Paper', 'Digital Offset Print', 'Open Edition', 'Certified Label'],
    availableSizes: ['A4', 'A3', 'A2']
  },
  {
    id: 'p5',
    name: 'ACT NORMAL',
    price: 150,
    type: 'Limited Print',
    category: 'Prints',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800',
    description: 'Original study in architectural tension and human silhouette.',
    story: 'A moment of intentional stillness in an otherwise chaotic urban environment. The subject blends into the hard concrete lines of the city, posing the question: where does the architecture end and the human begin?',
    specs: ['Premium Archival Paper', 'Certified Release', 'Hand Signed', 'Limited Edition of 25'],
    availableSizes: ['A3', 'A2']
  },
  {
    id: 'p3',
    name: 'BRUTAL_DECK_01',
    price: 240,
    type: 'Partner Work',
    category: 'Paintings',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
    description: 'Original acrylic on concrete-textured canvas. A study in architectural tension.',
    story: 'The first piece in a series exploring the heavy presence of Soviet-era architecture. Each layer of paint was applied to mimic the weathering of raw concrete over decades.',
    specs: ['Acrylic on Canvas', 'Custom Concrete Texture', 'Original Work (1/1)', 'Solid Wood Floating Frame'],
    availableSizes: ['60x90cm']
  }
];

export const MOCK_PROJECTS: Project[] = [
  {
    id: 'pr1',
    title: 'Vita Earth Campaign',
    slug: 'vita-earth',
    category: 'Fashion',
    client: 'Vita Earth',
    year: 2024,
    description: 'A sustainable fashion campaign shot in the raw landscapes of Portugal.',
    featured_image_url: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=1200',
    status: 'published',
    brief: 'Capture the essence of earth-conscious fashion in a brutalist environment.',
    strategy: 'Utilize monochrome photography to emphasize texture and form.',
    result: 'Campaign led to a 40% increase in brand engagement.',
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1200'
    ],
    testimonial: {
      quote: 'The vision for this shoot was perfectly executed.',
      author: 'Sarah Chen',
      role: 'Creative Director'
    }
  },
  {
    id: 'pr2',
    title: 'Brutal Echoes',
    slug: 'brutal-echoes',
    category: 'Architecture',
    client: 'Stockholm Design Week',
    year: 2023,
    description: 'Visual exploration of brutalist architecture in the Nordics.',
    featured_image_url: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&q=80&w=1200',
    status: 'published'
  },
  {
    id: 'pr3',
    title: 'Sonic Void',
    slug: 'sonic-void',
    category: 'Music',
    client: 'Void Records',
    year: 2024,
    description: 'Visual identity and cover art for a Stockholm-based techno label.',
    featured_image_url: 'https://images.unsplash.com/photo-1514525253361-bee8d48700ef?auto=format&fit=crop&q=80&w=1200',
    status: 'published'
  }
];

export const MOCK_POSTS: Post[] = [
  {
    id: 'post1',
    title: 'The Brutalist Ethos',
    slug: 'brutalist-ethos',
    excerpt: 'Exploring the intersection of raw materials and digital storytelling.',
    content: 'Brutalism in design is more than just raw concrete. It is a philosophy of honesty...',
    featured_image_url: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=1200',
    tags: ['Theory', 'Design'],
    status: 'published',
    published_at: '2024-03-15'
  }
];

export const MOCK_EVENTS: Event[] = [
  {
    id: 'ev1',
    name: 'Concrete Pulse',
    description: 'An immersive exhibition of Scandinavian brutalism.',
    event_type: 'Exhibition',
    start_date: '2026-05-20',
    location: 'Oslo, Norway',
    featured_image_url: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&q=80&w=800',
    status: 'upcoming'
  }
];

export const MOCK_TALENT: Talent[] = [
  {
    id: 't1',
    name: 'Marleen Muhuste',
    slug: 'marleen-muhuste',
    bio: 'Lead photographer and founder of noPROPZZ. Scandinavian visual storyteller.',
    role: 'Artist',
    profile_image_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
    featured: true
  },
  {
    id: 't2',
    name: 'Kätlin Klaus',
    slug: 'katlin-klaus',
    bio: 'Visual artist and orchestrator. Co-founder specializing in structural soul.',
    role: 'Artist',
    profile_image_url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800',
    featured: true
  },
  {
    id: 't4',
    name: 'Anastasiia Liundrynska',
    slug: 'anastasiia-liundrynska',
    bio: 'Editorial talent focused on sculptural silhouettes and high-fidelity aesthetics.',
    role: 'Talent',
    profile_image_url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
    featured: true
  },
  {
    id: 't5',
    name: 'Sonya Christina Tomson',
    slug: 'sonya-christina-tomson',
    bio: 'High-performance editorial talent specializing in punk-inflected luxury and structural movement.',
    role: 'Talent',
    profile_image_url: 'https://images.unsplash.com/photo-1502323777036-f29e3972d82f?auto=format&fit=crop&q=80&w=800',
    featured: true
  }
];
