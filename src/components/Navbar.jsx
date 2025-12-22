"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import LOGO from "../assets/logo.png"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLibraryDropdownOpen, setIsLibraryDropdownOpen] = useState(false)
  const [isGetInvolvedDropdownOpen, setIsGetInvolvedDropdownOpen] = useState(false)

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
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
                  <img src={LOGO || "/placeholder.svg"} alt="Uzawi Logo" className="w-24" />
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
                animate={isMobileMenuOpen ? "open" : "closed"}
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
                { name: "Home", to: "/" },
                { name: "About", to: "/about" },
                { name: "Work", to: "/work" },
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

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="relative"
                onMouseEnter={() => setIsLibraryDropdownOpen(true)}
                onMouseLeave={() => setIsLibraryDropdownOpen(false)}
              >
                <button className="text-[#0F1662] hover:text-gray-900 text-sm font-medium transition-colors flex items-center gap-1">
                  LIBRARY
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isLibraryDropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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

              {[{ name: "Contact", to: "/contact" }].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
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
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="relative"
                onMouseEnter={() => setIsGetInvolvedDropdownOpen(true)}
                onMouseLeave={() => setIsGetInvolvedDropdownOpen(false)}
              >
                <button className="rounded-sm px-6 py-2.5 text-sm bg-[#0F1662] text-white hover:bg-gray-800 transition-colors flex items-center gap-2">
                  GET INVOLVED
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isGetInvolvedDropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {isGetInvolvedDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-sm shadow-lg min-w-[150px]"
                    >
                      <Link
                        to="/workwithus"
                        className="block px-4 py-2 text-sm text-[#0F1662] hover:bg-gray-100 transition-colors"
                      >
                        Work with us
                      </Link>
                      <Link
                        to="/donate"
                        className="block px-4 py-2 text-sm text-[#0F1662] hover:bg-gray-100 transition-colors"
                      >
                        Donate
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden py-4 space-y-3 border-t border-white/20 overflow-hidden"
              >
                {[
                  { name: "Home", to: "/" },
                  { name: "About", to: "/about" },
                  { name: "Work", to: "/work" },
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

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className="text-[#0F1662] text-sm font-medium mb-2">Library</div>
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

                {[{ name: "Contact", to: "/contact" }].map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
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
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <div className="text-[#0F1662] text-sm font-medium mb-2">Get Involved</div>
                  <div className="pl-4 space-y-2">
                    <Link
                      to="/workwithus"
                      onClick={handleMobileLinkClick}
                      className="block text-[#0F1662] hover:text-gray-900 text-sm transition-colors"
                    >
                      Work with us
                    </Link>
                    <Link
                      to="/donate"
                      onClick={handleMobileLinkClick}
                      className="block text-[#0F1662] hover:text-gray-900 text-sm transition-colors"
                    >
                      Donate
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  )
}

export { Navbar }
