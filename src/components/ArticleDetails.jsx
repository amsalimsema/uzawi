'use client';

import { motion } from 'framer-motion';
import { FaCalendar, FaUser, FaArrowLeft } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchBlogPostBySlug } from './Contentful';
import emailjs from '@emailjs/browser';

// Helper function to convert slug back to title
function slugToTitle(slug) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function ArticleDetails() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const openNewsletterModal = () => {
    setIsNewsletterModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeNewsletterModal = () => {
    setIsNewsletterModalOpen(false);
    setEmail(''); // Reset email input
    // Re-enable body scrolling when modal is closed
    document.body.style.overflow = 'unset';
  };

  const validateEmail = (email) => {
    // Check if email is empty
    if (!email.trim()) {
      return 'Email address is required';
    }

    // Check email format with regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }

    // Check for common typos
    const commonDomains = [
      'gmail.com',
      'yahoo.com',
      'outlook.com',
      'hotmail.com',
    ];
    const domain = email.split('@')[1]?.toLowerCase();
    if (domain && !domain.includes('.')) {
      return 'Email domain appears to be invalid';
    }

    return '';
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors and success messages
    setEmailError('');
    setSubmitSuccess(false);

    // Validate email with custom validation
    const validationError = validateEmail(email);
    if (validationError) {
      setEmailError(validationError);
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: email,
          from_name: 'Newsletter Subscription',
          reply_to: email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitSuccess(true);
        setEmail('');

        // Close modal after 2 seconds
        setTimeout(() => {
          closeNewsletterModal();
          setSubmitSuccess(false);
        }, 2000);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setEmailError('Failed to subscribe. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const loadArticle = async () => {
      setLoading(true);
      const post = await fetchBlogPostBySlug(slug);
      setArticle(post);
      setLoading(false);
    };

    loadArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-[#4065FF] text-xl">Loading article...</div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-gray-800 mb-4">
            Article Not Found
          </h1>
          <Link to="/blog" className="text-[#00CAFF] hover:underline">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full h-[50vh] relative overflow-hidden"
        >
          <img
            src={article.image || '/placeholder.svg'}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </motion.div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 uppercase text-gray-600 hover:text-[#00CAFF] transition-colors mb-8 text-xs"
            >
              <FaArrowLeft className="text-xs" />
              <span>Back to Blog</span>
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <FaUser className="text-[#00CAFF]" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendar className="text-[#00CAFF]" />
                <span>{article.date}</span>
              </div>
            </div>
          </motion.div>

          {/* Article Body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="prose prose-lg max-w-none"
          >
            {article.content && article.content.length > 0 ? (
              article.content.map((block, index) => {
                if (block.type === 'heading') {
                  return (
                    <h2
                      key={index}
                      className="text-2xl font-serif text-gray-900 mt-8 mb-4"
                    >
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === 'paragraph') {
                  return (
                    <p
                      key={index}
                      className="text-gray-700 leading-relaxed mb-6"
                    >
                      {block.text}
                    </p>
                  );
                }
                return null;
              })
            ) : (
              <p className="text-gray-700 leading-relaxed mb-6">
                Content is being loaded...
              </p>
            )}
          </motion.div>

          {/* Related Articles / Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <div className="bg-gradient-to-r from-[#0F1662] to-[#4065FF] rounded-t-md rounded-b-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-serif mb-4">Stay Informed</h3>
              <p className="mb-6 text-white/90">
                Subscribe to our newsletter for the latest insights on AI,
                democracy, and digital rights in Africa.
              </p>
              <button
                onClick={openNewsletterModal}
                className="bg-[#00CAFF] text-[#0F1662] px-8 py-3 hover:bg-white transition-colors"
              >
                Subscribe Now
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {isNewsletterModalOpen && (
        <>
          {/* Modal backdrop with dark shadow overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeNewsletterModal}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Modal content container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          >
            {/* Modal card */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg shadow-2xl max-w-md w-full p-8 relative"
            >
              {/* Close button */}
              <button
                onClick={closeNewsletterModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Modal header */}
              <div className="mb-6">
                <h2 className="text-2xl text-[#0F1662] mb-2">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-gray-600 text-sm">
                  Stay updated with the latest insights on AI, democracy, and
                  digital rights in Africa.
                </p>
              </div>

              {/* Newsletter form */}
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      // Clear error when user starts typing
                      if (emailError) setEmailError('');
                    }}
                    disabled={isSubmitting || submitSuccess}
                    placeholder="your.email@example.com"
                    className={`w-full px-4 py-3 border rounded-sm focus:ring-2 focus:ring-[#00CAFF] focus:border-transparent outline-none transition-all ${
                      emailError ? 'border-red-500' : 'border-gray-300'
                    } ${
                      isSubmitting || submitSuccess
                        ? 'bg-gray-100 cursor-not-allowed'
                        : ''
                    }`}
                  />
                  {emailError && (
                    <p className="mt-2 text-sm text-red-600">{emailError}</p>
                  )}
                  {submitSuccess && (
                    <p className="mt-2 text-sm text-green-600">
                      Successfully subscribed! Thank you.
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || submitSuccess}
                  className={`w-full py-3 rounded-sm transition-colors ${
                    isSubmitting || submitSuccess
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-[#0F1662] hover:bg-gray-800'
                  } text-white`}
                >
                  {isSubmitting
                    ? 'Subscribing...'
                    : submitSuccess
                    ? 'Subscribed!'
                    : 'Subscribe'}
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
}

export default ArticleDetails;
