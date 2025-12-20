import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <>
      <section className="rounded-b-3xl relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F1662]">
        {/* Grid Background */}
        {/* <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#00CAFF 1px, transparent 1px), linear-gradient(90deg, #00CAFF 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div> */}

        {/* Gradient Overlays */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F1662]/50 to-[#0F1662]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1662]/30 to-transparent" /> */}

        {/* Top African Pattern Border */}
        {/* <div className="absolute top-0 left-0 right-0 h-16 flex items-center justify-around overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-8 h-8 border-2 border-white/30 rotate-45" />
              <div className="w-3 h-3 rounded-full bg-[#00CAFF]/30" />
            </div>
          ))}
        </div> */}

        <motion.div
          className="container relative z-10 px-4 md:px-6 lg:px-8 pt-32 md:pt-40 pb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-balance text-white leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              Shaping the future of <span className="text-[#00CAFF]">AI</span>{' '}
              in Africa
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed text-pretty mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            >
              Uzawi Initiative works at the intersection of Artificial
              Intelligence, Society and Democracy in Africa advocating for
              democratic governance in the age of AI.
            </motion.p>

            <motion.div
              className="flex flex-row items-center justify-center gap-3 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/work"
                  className="inline-block rounded-sm px-4 py-2 text-sm font-medium border border-gray-100 bg-transparent text-white hover:bg-white/5 transition-colors"
                >
                  Focus Areas
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/publications"
                  className="inline-block rounded-sm px-4 py-2 text-sm font-medium bg-white text-[#0F1662] hover:bg-gray-100 transition-colors"
                >
                  Publications
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-8 md:gap-12 opacity-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
            >
              {/* Megaphone Icon - represents sensitizing/educating citizens */}
              <motion.svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <path
                  d="M10 20L30 10V40L10 30V20Z"
                  stroke="#00CAFF"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M30 15L40 12V38L30 35"
                  stroke="#4065FF"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="15" cy="25" r="3" fill="#00CAFF" opacity="0.8" />
                <path
                  d="M8 30C8 30 5 32 5 35C5 38 8 40 8 40"
                  stroke="#4065FF"
                  strokeWidth="1.5"
                  fill="none"
                />
              </motion.svg>

              {/* Document/Policy Icon - represents policy advocacy */}
              <motion.svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <rect
                  x="15"
                  y="8"
                  width="20"
                  height="34"
                  rx="2"
                  stroke="#4065FF"
                  strokeWidth="2"
                  fill="none"
                />
                <line
                  x1="20"
                  y1="16"
                  x2="30"
                  y2="16"
                  stroke="#00CAFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="20"
                  y1="22"
                  x2="30"
                  y2="22"
                  stroke="#00CAFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="20"
                  y1="28"
                  x2="28"
                  y2="28"
                  stroke="#4065FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity="0.7"
                />
                <circle cx="22" cy="35" r="1.5" fill="#00CAFF" />
                <path
                  d="M26 35L28 37L32 33"
                  stroke="#4065FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>

              {/* Book/Research Icon - represents research and knowledge */}
              <motion.svg
                width="55"
                height="55"
                viewBox="0 0 55 55"
                fill="none"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <path
                  d="M12 15C12 15 17 12 27.5 12C38 12 43 15 43 15V40C43 40 38 37 27.5 37C17 37 12 40 12 40V15Z"
                  stroke="#00CAFF"
                  strokeWidth="2"
                  fill="none"
                />
                <line
                  x1="27.5"
                  y1="12"
                  x2="27.5"
                  y2="37"
                  stroke="#4065FF"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
                <path
                  d="M18 20C18 20 21 19 27.5 19"
                  stroke="#4065FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity="0.7"
                />
                <path
                  d="M18 25C18 25 21 24 27.5 24"
                  stroke="#4065FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity="0.7"
                />
                <path
                  d="M37 20C37 20 34 19 27.5 19"
                  stroke="#4065FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity="0.7"
                />
                <path
                  d="M37 25C37 25 34 24 27.5 24"
                  stroke="#4065FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity="0.7"
                />
              </motion.svg>

              {/* Balance/Democracy Icon - represents democracy and fairness */}
              <motion.svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <line
                  x1="25"
                  y1="10"
                  x2="25"
                  y2="35"
                  stroke="#4065FF"
                  strokeWidth="2"
                />
                <line
                  x1="10"
                  y1="15"
                  x2="40"
                  y2="15"
                  stroke="#00CAFF"
                  strokeWidth="2"
                />
                <path d="M10 15L13 25H17L10 15Z" fill="#4065FF" opacity="0.7" />
                <path d="M40 15L37 25H33L40 15Z" fill="#4065FF" opacity="0.7" />
                <rect
                  x="15"
                  y="35"
                  width="20"
                  height="3"
                  fill="#00CAFF"
                  opacity="0.8"
                />
                <circle cx="25" cy="10" r="2" fill="#00CAFF" />
              </motion.svg>

              {/* Connected People Icon - represents society and community */}
              <motion.svg
                width="55"
                height="55"
                viewBox="0 0 55 55"
                fill="none"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
              >
                <circle
                  cx="20"
                  cy="18"
                  r="5"
                  stroke="#00CAFF"
                  strokeWidth="2"
                  fill="none"
                />
                <circle
                  cx="35"
                  cy="18"
                  r="5"
                  stroke="#4065FF"
                  strokeWidth="2"
                  fill="none"
                />
                <circle
                  cx="27.5"
                  cy="32"
                  r="5"
                  stroke="#00CAFF"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M20 23C20 23 18 28 18 32C18 36 20 40 20 40"
                  stroke="#4065FF"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.6"
                />
                <path
                  d="M35 23C35 23 37 28 37 32C37 36 35 40 35 40"
                  stroke="#4065FF"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.6"
                />
                <line
                  x1="22"
                  y1="20"
                  x2="25"
                  y2="29"
                  stroke="#00CAFF"
                  strokeWidth="1.5"
                  opacity="0.5"
                />
                <line
                  x1="33"
                  y1="20"
                  x2="30"
                  y2="29"
                  stroke="#00CAFF"
                  strokeWidth="1.5"
                  opacity="0.5"
                />
              </motion.svg>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom African Pattern Border */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-16 flex items-center justify-around overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#4065FF]/30" />
              <div className="w-3 h-3 rounded-full bg-white/30" />
              <div className="w-4 h-8 bg-[#00CAFF]/30 rotate-12" />
            </div>
          ))}
        </div> */}
      </section>
    </>
  );
}

export default Hero;
