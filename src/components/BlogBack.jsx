import { motion } from 'framer-motion';
import { FaCalendar, FaTag } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { HiUserCircle } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Blog post data with mock content
const blogPosts = [
  {
    id: 1,
    title: 'AI Governance in African Democracies',
    excerpt:
      'Exploring how African nations can shape AI policies that reflect their unique cultural and democratic values.',
    author: 'Dr. Amina Okafor',
    date: 'March 15, 2024',
    category: 'AI & Democracy',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    title: 'Digital Sovereignty: Why Africa Must Control Its Data',
    excerpt:
      'Understanding the implications of data colonialism and pathways to digital independence.',
    author: 'Prof. Kwame Mensah',
    date: 'March 10, 2024',
    category: 'Digital Rights',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    title: 'Social Media and Democracy: Lessons from Recent African Elections',
    excerpt:
      'Case study on balancing free expression with information integrity in East Africa.',
    author: 'Sarah Wanjiku',
    date: 'March 5, 2024',
    category: 'Media & Society',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    title: 'The Future of Work in Africa: Balancing Automation and Employment',
    excerpt:
      'How automation and AI technologies are reshaping employment landscapes across the continent.',
    author: 'Dr. Tunde Adebayo',
    date: 'February 28, 2024',
    category: 'AI & Society',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&h=600&fit=crop',
  },
  {
    id: 5,
    title: 'Building Trustworthy AI Systems for Public Services in Africa',
    excerpt:
      'Examining transparency initiatives and citizen engagement in African e-governance.',
    author: 'Grace Mwangi',
    date: 'February 20, 2024',
    category: 'Governance',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&h=600&fit=crop',
  },
  {
    id: 6,
    title: 'Data Rights as Human Rights: A Framework for Africa',
    excerpt:
      'Investigating data extraction patterns and advocating for equitable data partnerships.',
    author: 'Dr. Amina Okafor',
    date: 'February 15, 2024',
    category: 'Data Rights',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&h=600&fit=crop',
  },
  {
    id: 7,
    title: 'Data Rights as Human Rights: A Framework for Africa',
    excerpt:
      'Investigating data extraction patterns and advocating for equitable data partnerships.',
    author: 'Dr. Amina Okafor',
    date: 'February 15, 2024',
    category: 'Data Rights',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&h=600&fit=crop',
  },
  {
    id: 8,
    title: 'Data Rights as Human Rights: A Framework for Africa',
    excerpt:
      'Investigating data extraction patterns and advocating for equitable data partnerships.',
    author: 'Dr. Amina Okafor',
    date: 'February 15, 2024',
    category: 'Data Rights',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&h=600&fit=crop',
  },
];

export default function Blog() {
  const [visiblePosts, setVisiblePosts] = useState(6);

  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleTogglePosts = () => {
    if (visiblePosts < blogPosts.length - 1) {
      setVisiblePosts((prev) => prev + 6);
    } else {
      setVisiblePosts(6);
    }
  };

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);
  const hasMorePosts = visiblePosts < regularPosts.length;

  return (
    <div className="min-h-screen bg-white">
      {/* Blog Posts Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {featuredPost && (
            <Link
              key={featuredPost.id}
              to={`/blog/${createSlug(featuredPost.title)}`}
              className="group relative overflow-hidden rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 block"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-64 md:h-full overflow-hidden">
                  <img
                    src={featuredPost.image || '/placeholder.svg'}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#00CAFF] text-[#0F1662] px-4 py-2 text-sm rounded-md">
                      FEATURED
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex items-center gap-2 text-[#4065FF] text-sm">
                      <FaTag className="w-3 h-3" />
                      {featuredPost.category}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-serif text-[#0F1662] mb-4 group-hover:text-[#4065FF] transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <HiUserCircle className="w-5 h-5 text-[#4065FF]" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCalendar className="w-4 h-4 text-[#4065FF]" />
                      <span>{featuredPost.date}</span>
                    </div>
                  </div>

                  <span className="flex items-center gap-2 text-[#4065FF] group-hover:text-[#00CAFF] transition-colors group-hover:gap-3 duration-300">
                    <span>Read Article</span>
                    <FiArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          )}
        </motion.div>

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.slice(0, visiblePosts).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={`/blog/${createSlug(post.title)}`}
                className="group rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden block h-full"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || '/placeholder.svg'}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-[#4065FF] px-3 py-1 text-xs rounded-md">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col">
                  <h3 className="text-xl font-serif text-[#0F1662] mb-3 group-hover:text-[#4065FF] transition-colors leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="mt-auto pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <HiUserCircle className="w-5 h-5 text-[#4065FF]" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <FaCalendar className="w-4 h-4 text-[#4065FF]" />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    <span className="flex items-center gap-2 text-[#4065FF] group-hover:text-[#00CAFF] text-sm transition-colors group-hover:gap-3 duration-300">
                      <span>Read More</span>
                      <FiArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Load More / Show Less Section */}
        {regularPosts.length >= 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <button
              onClick={handleTogglePosts}
              className="rounded-md px-8 py-4 border-2 border-[#4065FF] text-[#4065FF] hover:bg-[#4065FF] hover:text-white transition-all duration-300"
            >
              {hasMorePosts ? 'Load More Articles' : 'Show Less'}
            </button>
          </motion.div>
        )}
      </section>
    </div>
  );
}

export { Blog };
