import { Project, Post, Event, Talent } from './types';

export const APP_VERSION = '1.4.0';

export const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'VITA_ACTIVEWEAR',
    slug: 'vita-activewear',
    category: 'Sustainable Fashion',
    client: 'Vita Earth',
    year: 2025,
    description: 'A global campaign production in Ericeira focused on high-performance ethical activewear.',
    featured_image_url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=1975',
    images: [
      'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=2070',
      'https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&q=80&w=2128'
    ],
    status: 'published',
    brief: 'Vita Earth needed to bridge the gap between technical outdoor performance and high-fashion aesthetics while maintaining their 100% recycled commitment.',
    strategy: 'Our team deployed to Ericeira to capture raw, high-contrast visuals using local athletes. We utilized natural lighting and brutalist architecture to emphasize the structural integrity of the garments.',
    result: 'The campaign resulted in a 45% increase in pre-orders and a significant shift in brand perception within the Northern European market.',
    testimonial: {
      quote: "noPROPZZ didn't just take photos; they built a world for our brand that feels impossible to ignore.",
      author: "Elena S.",
      role: "Founder, Vita Earth"
    }
  },
  {
    id: '2',
    title: 'LUMINA_SKINCARE',
    slug: 'lumina-skincare',
    category: 'Clean Beauty',
    client: 'Lumina Organics',
    year: 2024,
    description: 'Clean cosmetics campaign leveraging the AI Spark Kit for rapid social assets.',
    featured_image_url: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1974',
    status: 'published',
    brief: 'Launch a new product line across 4 countries simultaneously with a limited budget but high quality requirements.',
    strategy: 'We implemented the AI Spark Kit to generate hyper-realistic campaign environments, reducing travel costs by 70% while maintaining a high-ticket look.',
    result: 'Successfully launched in 4 territories with 120+ unique assets delivered in under 10 days.',
    testimonial: {
      quote: "The efficiency of the Spark Kit allowed us to scale our launch without compromising on the luxury feel we required.",
      author: "Marcus J.",
      role: "Head of Digital, Lumina"
    }
  },
  {
    id: '3',
    title: 'ORION_JEWELRY',
    slug: 'orion-jewelry',
    category: 'Ethical Goods',
    client: 'Orion Studio',
    year: 2024,
    description: 'Hand-made ethical jewelry story produced in the mountains of Morocco.',
    featured_image_url: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1974',
    status: 'published',
    brief: 'Showcase the intricate, raw beauty of hand-forged silver in a way that resonates with a younger, design-conscious demographic.',
    strategy: 'We took the production to the Atlas Mountains, using the rugged terrain as a juxtaposition to the delicate jewelry. The narrative focused on the intersection of ancient craft and modern design.',
    result: 'The story was featured in 3 major design publications and sold out the first limited run within 48 hours.',
    testimonial: {
      quote: "They captured the soul of our craft. Every frame feels intentional and heavy with meaning.",
      author: "Sami A.",
      role: "Lead Craftsman, Orion Studio"
    }
  }
];

export const MOCK_POSTS: Post[] = [
  {
    id: '1',
    title: 'Real Art in an AI World',
    slug: 'real-art-ai-world',
    excerpt: 'Why noPROPZZ prioritizes real-world campaigns before digital expansion.',
    content: 'In tough times when artists battle fast-changing tools, we create the community we dreamed of...',
    featured_image_url: 'https://images.unsplash.com/photo-1492691523567-61707d2e5ef4?auto=format&fit=crop&q=80&w=2070',
    tags: ['Manifesto', 'Theory'],
    status: 'published',
    published_at: '2025-01-10'
  }
];

export const MOCK_TALENT: Talent[] = [
  {
    id: '1',
    name: 'Marleen Muhuste',
    slug: 'marleen-muhuste',
    bio: 'Founder & Visual Director. Estonian photographer specialized in high-ticket campaign production.',
    role: 'Creative',
    profile_image_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964',
    featured: true
  },
  {
    id: '2',
    name: 'Kätlin Klaus',
    slug: 'katlin-klaus',
    bio: 'Founder & Production Director. Orchestrating global shoots for sustainable brands.',
    role: 'Creative',
    profile_image_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=2070',
    featured: true
  },
  {
    id: '3',
    name: 'Jürgen S.',
    slug: 'jurgen-s',
    bio: 'The Orchestrator. Designing the digital landscape and systems for the agency.',
    role: 'Creative',
    profile_image_url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1974',
    featured: true
  }
];

export const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    name: 'Morocco Drop Q3',
    description: '2 Brands. 5 Days. Unrivaled production in the Atlas Mountains.',
    event_type: 'Production Drop',
    start_date: '2025-09-15T09:00:00',
    location: 'Marrakech, Morocco',
    featured_image_url: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&q=80&w=2067',
    status: 'upcoming'
  }
];