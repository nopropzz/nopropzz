
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_POSTS } from '../constants';
import { ArrowLeft } from 'lucide-react';

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = MOCK_POSTS.find(p => p.slug === slug);

  if (!post) return <div>Post not found</div>;

  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <Link to="/blog" className="inline-flex items-center space-x-4 text-xs font-bold uppercase tracking-widest mb-16 hover:opacity-50 transition-all">
        <ArrowLeft size={16} />
        <span>Back to Insights</span>
      </Link>

      <header className="mb-20">
        <div className="flex items-center space-x-4 text-[10px] font-bold uppercase tracking-widest opacity-40 mb-8">
          <span>{new Date(post.published_at).toLocaleDateString()}</span>
          <span>/</span>
          <span>WRITTEN BY NOPROPZZ</span>
        </div>
        <h1 className="text-7xl font-black mb-10 leading-none">{post.title}</h1>
        <div className="aspect-video brutalist-border overflow-hidden mb-16">
          <img src={post.featured_image_url} alt={post.title} className="w-full h-full object-cover" />
        </div>
      </header>

      <div className="prose prose-xl max-w-none font-mono leading-relaxed space-y-8 opacity-80">
        <p className="text-2xl font-black text-black not-italic font-sans mb-12">
          {post.excerpt}
        </p>
        <p>{post.content}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
        <div className="bg-black text-white p-12 my-16 brutalist-shadow">
          <h3 className="text-3xl font-black mb-4">THE BRUTALIST ETHOS</h3>
          <p className="text-sm italic opacity-70">"In the raw state of materials, we find the purest expression of digital existence."</p>
        </div>

        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
      </div>

      <footer className="mt-24 pt-12 border-t-2 border-black flex justify-between items-center">
        <div className="flex space-x-4">
          {post.tags.map(t => <span key={t} className="text-[10px] font-bold uppercase border border-black px-2 py-1">#{t}</span>)}
        </div>
        <div className="flex space-x-8 text-[10px] font-bold uppercase">
          <span className="underline cursor-pointer">SHARE ON X</span>
          <span className="underline cursor-pointer">SHARE ON FB</span>
        </div>
      </footer>
    </article>
  );
};

export default BlogDetail;
