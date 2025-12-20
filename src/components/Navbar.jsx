'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import LOGO from '../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  const [isLibraryDropdownOpen, setIsLibraryDropdownOpen] = useState(false);
  const [isActivitiesDropdownOpen, setIsActivitiesDropdownOpen] =
    useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const openNewsletterModal = () => {
    setIsNewsletterModalOpen(true);
    setIsMobileMenuOpen(false);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeNewsletterModal = () => {
    setIsNewsletterModalOpen(false);
    setEmail(''); // Reset email input
    setEmailError('');
    setSubmitSuccess(false);
    // Re-enable body scrolling when modal is closed
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

    // Custom validation
    const validationError = validateEmail(email);
    if (validationError) {
      setEmailError(validationError);
      return;
    }

    setEmailError('');
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
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

      // Close modal after 2 seconds
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
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 bg-white backdrop-blur-md border border-white/20 z-50 rounded-xl mt-4"
      >
        <div className="w-full md:w-[90vw] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo on the left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/">
                <span className="w-20">
                  <img
                    src={LOGO || '/placeholder.svg'}
                    alt="Uzawi Logo"
                    className="w-24"
                  />
                </span>
              </Link>
            </motion.div>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-[#0F1662]  transition-colors"
              aria-label="Toggle menu"
            >
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={isMobileMenuOpen ? 'open' : 'closed'}
              >
                {isMobileMenuOpen ? (
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3 }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3 }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </motion.svg>
            </motion.button>

            {/* Navigation links on the right - hidden on mobile, visible on desktop */}
            <div className="hidden md:flex items-center gap-8 uppercase">
              {[
                { name: 'Home', to: '/' },
                { name: 'About', to: '/about' },
                { name: 'Work', to: '/work' },
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link
                    to={item.to}
                    className="text-[#0F1662] hover:text-gray-900 text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* Activities dropdown menu */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="relative"
                onMouseEnter={() => setIsActivitiesDropdownOpen(true)}
                onMouseLeave={() => setIsActivitiesDropdownOpen(false)}
              >
                <button className="text-[#0F1662] hover:text-gray-900 text-sm font-medium transition-colors flex items-center gap-1">
                  ACTIVITIES
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isActivitiesDropdownOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <AnimatePresence>
                  {isActivitiesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-sm shadow-lg min-w-[200px]"
                    >
                      <Link
                        to="/policy-advocacy"
                        className="block px-4 py-2 text-sm text-[#0F1662] hover:bg-gray-100 transition-colors"
                      >
                        Policy Advocacy
                      </Link>
                      <Link
                        to="/citizen-sensitization"
                        className="block px-4 py-2 text-sm text-[#0F1662] hover:bg-gray-100 transition-colors"
                      >
                        Citizen Sensitization
                      </Link>
                      <Link
                        to="/capacity-building"
                        className="block px-4 py-2 text-sm text-[#0F1662] hover:bg-gray-100 transition-colors"
                      >
                        Capacity Building
                      </Link>
                      <Link
                        to="/research"
                        className="block px-4 py-2 text-sm text-[#0F1662] hover:bg-gray-100 transition-colors"
                      >
                        Research
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="relative"
                onMouseEnter={() => setIsLibraryDropdownOpen(true)}
                onMouseLeave={() => setIsLibraryDropdownOpen(false)}
              >
                <button className="text-[#0F1662] hover:text-gray-900 text-sm font-medium transition-colors flex items-center gap-1">
                  LIBRARY
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isLibraryDropdownOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <AnimatePresence>
                  {isLibraryDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-sm shadow-lg min-w-[150px]"
                    >
                      <Link
                        to="/blog"
                        className="block px-4 py-2 text-sm text-[#0F1662] hover:bg-gray-100 transition-colors"
                      >
                        Blog
                      </Link>
                      <Link
                        to="/publications"
                        className="block px-4 py-2 text-sm text-[#0F1662] hover:bg-gray-100 transition-colors"
                      >
                        Publications
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {[{ name: 'Contact', to: '/contact' }].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link
                    to={item.to}
                    className="text-[#0F1662] hover:text-gray-900 text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  to="/donate"
                  className="rounded-sm px-6 py-2.5 text-sm bg-[#0F1662] text-white hover:bg-gray-800 transition-colors inline-block"
                >
                  DONATE
                </Link>
              </motion.div>
            </div>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="md:hidden py-4 space-y-3 border-t border-white/20 overflow-hidden"
              >
                {[
                  { name: 'Home', to: '/' },
                  { name: 'About', to: '/about' },
                  { name: 'Work', to: '/work' },
                ].map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      to={item.to}
                      onClick={handleMobileLinkClick}
                      className="block text-[#0F1662] hover:text-gray-900 text-sm font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Activities dropdown menu for mobile */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className="text-[#0F1662] text-sm font-medium mb-2">
                    Activities
                  </div>
                  <div className="pl-4 space-y-2">
                    <Link
                      to="/policy-advocacy"
                      onClick={handleMobileLinkClick}
                      className="block text-[#0F1662] hover:text-gray-900 text-sm transition-colors"
                    >
                      Policy Advocacy
                    </Link>
                    <Link
                      to="/citizen-sensitization"
                      onClick={handleMobileLinkClick}
                      className="block text-[#0F1662] hover:text-gray-900 text-sm transition-colors"
                    >
                      Citizen Sensitization
                    </Link>
                    <Link
                      to="/capacity-building"
                      onClick={handleMobileLinkClick}
                      className="block text-[#0F1662] hover:text-gray-900 text-sm transition-colors"
                    >
                      Capacity Building
                    </Link>
                    <Link
                      to="/research"
                      onClick={handleMobileLinkClick}
                      className="block text-[#0F1662] hover:text-gray-900 text-sm transition-colors"
                    >
                      Research
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                >
                  <div className="text-[#0F1662] text-sm font-medium mb-2">
                    Library
                  </div>
                  <div className="pl-4 space-y-2">
                    <Link
                      to="/blog"
                      onClick={handleMobileLinkClick}
                      className="block text-[#0F1662] hover:text-gray-900 text-sm transition-colors"
                    >
                      Blog
                    </Link>
                    <Link
                      to="/publications"
                      onClick={handleMobileLinkClick}
                      className="block text-[#0F1662] hover:text-gray-900 text-sm transition-colors"
                    >
                      Publications
                    </Link>
                  </div>
                </motion.div>

                {[{ name: 'Contact', to: '/contact' }].map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <Link
                      to={item.to}
                      onClick={handleMobileLinkClick}
                      className="block text-[#0F1662] hover:text-gray-900 text-sm font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <Link
                    to="/donate"
                    onClick={handleMobileLinkClick}
                    className="rounded-sm mt-10 w-full px-6 py-2.5 text-sm bg-[#0F1662] text-white hover:bg-gray-800 transition-colors block text-center"
                  >
                    DONATE
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

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
                          setEmailError(''); // Clear error on input change
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

                {/* Additional info */}
                {/* <p className="mt-4 text-xs text-gray-500 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p> */}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export { Navbar };
