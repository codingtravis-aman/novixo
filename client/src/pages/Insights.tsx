import { motion } from 'framer-motion';
import ThreeDScene from '../components/3DScene';
import { BookOpen, Image, Bell } from 'lucide-react';
import { Link } from 'wouter';

// Dummy data
const blogPosts = [
  { id: 1, title: 'Design Trends 2025', excerpt: 'Explore the latest UI/UX design trends of the year.', date: '2025-03-15', image: '/images/blog1.jpg' },
  { id: 2, title: 'Performance in React', excerpt: 'Tips to optimize your React applications for speed.', date: '2025-02-20', image: '/images/blog2.jpg' }
];
const memes = [
  { id: 1, title: 'Developer Life', image: '/memes/dev-meme1.jpg' },
  { id: 2, title: 'Debugging Mode', image: '/memes/debug-meme.jpg' }
];
const updates = [
  { id: 1, title: 'New Office Space', description: 'We moved to a bigger office for our growing team.', date: '2025-04-01' }
];

const Insights = () => (
  <motion.main
    className="bg-dark text-white font-inter min-h-screen"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    {/* Hero */}
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <ThreeDScene />
      <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-poppins font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >Insights & Updates</motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-white/70 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >Explore our latest blogs, memes, and company news.</motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#blogs" className="magnetic-btn bg-primary hover:bg-opacity-90 text-white font-medium py-4 px-8 rounded-full">
            See Blogs
          </a>
        </motion.div>
      </div>
      {/* Floating icons */}
      <motion.div
        className="absolute right-10 top-1/3 space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <BookOpen className="w-12 h-12 text-primary/30" />
        <Image className="w-10 h-10 text-primary/30" />
        <Bell className="w-8 h-8 text-primary/30" />
      </motion.div>
    </section>

    {/* Blogs */}
    <section id="blogs" className="py-20 md:py-32 bg-darker relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Latest Blogs</h2>
          <p className="text-xl text-white/70">Fresh perspectives from our team</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-dark/60 border border-white/10 hover:border-primary/30 transition-all duration-300 shadow-lg backdrop-blur-sm rounded-2xl overflow-hidden flex flex-col"
              >
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex-1 flex flex-col">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary mb-3 self-start">Blog</span>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-white/70 mb-4 flex-1">{post.excerpt}</p>
                  <div className="text-sm text-white/50">{new Date(post.date).toLocaleDateString()}</div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Meme Gallery */}
    <section className="py-20 md:py-32 bg-dark relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Meme Gallery</h2>
          <p className="text-xl text-white/70">A little fun from our creative side</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {memes.map((meme, i) => (
            <motion.div
              key={meme.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="overflow-hidden rounded-2xl bg-dark/60 border border-white/10 hover:border-primary/30 transition-all duration-300 shadow-lg backdrop-blur-sm"
            >
              <img src={meme.image} alt={meme.title} className="w-full h-48 object-cover rounded-t-2xl" />
              <div className="p-4 text-center">{meme.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Updates */}
    <section className="py-20 md:py-32 bg-darker relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Latest Updates</h2>
          <p className="text-xl text-white/70">What’s new at Novixo</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {updates.map((upd, i) => (
            <motion.div
              key={upd.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-dark/60 border border-white/10 hover:border-primary/30 transition-all duration-300 shadow-lg backdrop-blur-sm rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="p-6 flex-1 flex flex-col">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary mb-3 self-start">Update</span>
                <h3 className="text-xl font-bold mb-2">{upd.title}</h3>
                <p className="text-white/70 mb-4 flex-1">{upd.description}</p>
                <div className="text-sm text-white/50">{new Date(upd.date).toLocaleDateString()}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </motion.main>
);

export default Insights;