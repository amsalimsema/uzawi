import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0e2e] rounded-b-2xl">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0e2e]/50 to-[#0a0e2e]" />

      <motion.div
        className="container relative z-10 px-4 md:px-6 lg:px-8 py-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-3xl mx-auto text-center">
          {/* 404 number with accent */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <h1 className="text-8xl md:text-9xl font-bold text-[#00CAFF] mb-4">
              404
            </h1>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-[#4065FF] to-[#00CAFF] rounded-full" />
          </motion.div>

          {/* Main heading */}
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl  font-normal tracking-tight text-balance text-white leading-[1.2] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            Page Not Found
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed text-pretty mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          >
            The page you're looking for doesn't exist or has been moved. Let's
            get you back on track.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          >
            <Link to="/">
              <motion.button
                className="px-6 py-3 text-base font-medium  bg-[#00CAFF] text-[#0F1662] hover:bg-[#00CAFF]/90 transition-colors w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Go to Homepage
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                className="px-6 py-3 text-base font-medium border border-gray-700 bg-transparent text-white hover:bg-white/5 transition-colors w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            className="mt-16 flex items-center justify-center gap-8 opacity-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle
                cx="20"
                cy="20"
                r="15"
                stroke="#00CAFF"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M12 20L18 26L28 14"
                stroke="#4065FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect
                x="10"
                y="10"
                width="20"
                height="20"
                rx="3"
                stroke="#4065FF"
                strokeWidth="2"
                fill="none"
              />
              <line
                x1="15"
                y1="16"
                x2="25"
                y2="16"
                stroke="#00CAFF"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="15"
                y1="20"
                x2="25"
                y2="20"
                stroke="#00CAFF"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="15"
                y1="24"
                x2="22"
                y2="24"
                stroke="#00CAFF"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path
                d="M20 10L25 18H15L20 10Z"
                stroke="#00CAFF"
                strokeWidth="2"
                fill="none"
              />
              <rect
                x="18"
                y="18"
                width="4"
                height="12"
                fill="#4065FF"
                opacity="0.7"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0e2e] to-transparent" />
    </section>
  );
}
