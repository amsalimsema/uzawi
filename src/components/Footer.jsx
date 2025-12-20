'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaXTwitter, FaLinkedin, FaGithub } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import LOGO from '../assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const openNewsletterModal = () => {
    setIsNewsletterModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeNewsletterModal = () => {
    setIsNewsletterModalOpen(false);
    setEmail('');
    setEmailError('');
    setSubmitSuccess(false);
    document.body.style.overflow = 'unset';
  };

  const validateEmail = (email) => {
    if (!email || email.trim() === '') {
      return 'Email address is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }

    const domainRegex = /^[^\s@]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!domainRegex.test(email)) {
      return 'Please enter a valid email domain';
    }

    return '';
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateEmail(email);
    if (validationError) {
      setEmailError(validationError);
      return;
    }

    setEmailError('');
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: email,
          from_name: 'Uzawi Newsletter',
          message: 'Thank you for subscribing to our newsletter!',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitSuccess(true);
      setEmail('');

      setTimeout(() => {
        closeNewsletterModal();
      }, 2000);
    } catch (error) {
      setEmailError('Failed to subscribe. Please try again.');
      console.error('EmailJS error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Main footer container with dark navy background from Uzawi palette */}
      <footer className="relative bg-[#0F1662] text-white overflow-hidden rounded-t-3xl">
        {/* Top section with links organized in three columns */}
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {/* Logo/Icon section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={LOGO || '/placeholder.svg'}
                alt="Uzawi Initiative Logo"
                className="w-24 invert brightness-0"
              />
            </motion.div>

            {/* Column 1: The Good - Main navigation links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-white text-base mb-6">The Organisation</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 hover:text-[#00CAFF] transition-colors duration-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/work"
                    className="text-gray-400 hover:text-[#00CAFF] transition-colors duration-200"
                  >
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-[#00CAFF] transition-colors duration-200"
                  >
                    Work with us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-[#00CAFF] transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Column 2: The Boring - Legal and policy links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-white text-base mb-6">Library</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/publications"
                    className="text-gray-400 hover:text-[#00CAFF] transition-colors duration-200"
                  >
                    Publications
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-gray-400 hover:text-[#00CAFF] transition-colors duration-200"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <button
                    onClick={openNewsletterModal}
                    className="text-gray-400 hover:text-[#00CAFF] transition-colors duration-200"
                  >
                    Newsletter
                  </button>
                </li>
              </ul>
            </motion.div>

            {/* Column 3: The Cool - Social media links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-white text-base mb-6">Social Media</h3>
              <div className="flex items-center gap-4">
                <a
                  href="https://twitter.com/uzawi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00CAFF] transition-colors duration-200"
                >
                  <FaXTwitter className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/company/uzawi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00CAFF] transition-colors duration-200"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/uzawi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00CAFF] transition-colors duration-200"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        <p className="my-5 text-center text-white text-sm z-10">
          © {currentYear} Uzawi Initiative. All rights reserved.
        </p>
        {/* Large "Uzawi" text at bottom - signature element */}
        <motion.div
          className="relative h-24 md:h-32 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Oversized text that creates visual impact */}
          <h2 className="absolute -bottom-[70%] left-0 text-[120px] sm:text-[180px] md:text-[240px] lg:text-[300px] xl:text-[360px] font-serif leading-none text-white px-6 select-none">
            Uzawi
          </h2>
        </motion.div>

        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1662] via-transparent to-transparent pointer-events-none opacity-50"></div>
      </footer>

      <AnimatePresence>
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
                  <h2 className="text-2xl text-[#0F1662] mb-2">Get Involved</h2>
                  <p className="text-gray-600 text-sm">
                    Join our newsletter to stay updated on our work and how you
                    can contribute to protecting digital rights in Africa.
                  </p>
                </div>

                {submitSuccess ? (
                  <div className="text-center py-4">
                    <div className="text-green-600 mb-2">
                      <svg
                        className="w-16 h-16 mx-auto"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700 font-medium">
                      Thank you for subscribing!
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      Check your email for confirmation.
                    </p>
                  </div>
                ) : (
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
                          setEmailError('');
                        }}
                        placeholder="your.email@example.com"
                        className={`w-full px-4 py-3 border ${
                          emailError ? 'border-red-500' : 'border-gray-300'
                        } rounded-sm focus:ring-2 focus:ring-[#00CAFF] focus:border-transparent outline-none transition-all`}
                      />
                      {emailError && (
                        <p className="mt-1 text-sm text-red-600">
                          {emailError}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#0F1662] text-white py-3 rounded-sm hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// Named export for flexibility
export { Footer };
