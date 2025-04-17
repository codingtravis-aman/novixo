import { useParams, Link } from 'wouter';
import { motion } from 'framer-motion';

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
};

const blogPosts: BlogPost[] = [
  { id: 1, title: 'Design Trends 2025', excerpt: 'Explore the latest UI/UX design trends of the year.', date: '2025-03-15', image: '/images/blog1.jpg' },
  { id: 2, title: 'Performance in React', excerpt: 'Tips to optimize your React applications for speed.', date: '2025-02-20', image: '/images/blog2.jpg' }
];

const Blog = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === Number(id));
  if (!post) {
    return (
      <motion.main className="bg-dark text-white font-inter min-h-screen flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
        <div className="text-2xl">Blog post not found.</div>
      </motion.main>
    );
  }

  return (
    <motion.main className="bg-dark text-white font-inter min-h-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <section className="py-20 md:py-32 bg-dark">
        <div className="container mx-auto px-4 md:px-8">
          <Link href="/insights" className="text-primary hover:underline">← Back to Insights</Link>
          <h1 className="text-4xl md:text-6xl font-poppins font-bold mt-4 mb-2">{post.title}</h1>
          <div className="text-sm text-white/50 mb-6">{new Date(post.date).toLocaleDateString()}</div>
          <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-2xl mb-8" />
          <p className="text-xl text-white/70 mb-4">{post.excerpt}</p>
          <p className="text-white/70">[Full blog content would go here.]</p>
        </div>
      </section>
    </motion.main>
  );
};

export default Blog;
