"use client"

import { motion } from "framer-motion"
import { FaBrain, FaBalanceScale, FaHandPeace, FaNetworkWired } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function Work() {
  return (
    <>
      {/* Hero Section with African Pattern */}
      <div className="rounded-b-3xl relative bg-[#0F1662] overflow-hidden">
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-balance text-white leading-[1.1] my-8">
              Our Work in
              <span className="text-[#00CAFF]"> Action</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto leading-relaxed text-pretty mb-1">
              Exploring the future of democratic governance on the African continent in the age of AI
            </p>
          </motion.div>
        </div>

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
      </div>

      {/* Main Content Section - Vertical Timeline Approach */}
      <section className="relative min-h-screen bg-white py-24 max-w-5xl mx-auto px-6 overflow-hidden">
        {/* Subtle diagonal lines pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diagonalWork" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 0 0 L 40 40 M 40 0 L 0 40" stroke="#0F1662" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonalWork)" />
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Timeline with Alternating Cards */}
          <div className="space-y-24">
            {/* Protecting civic space from AI enabled surveillance - Left Aligned */}
            <motion.div
              className="flex flex-col md:flex-row gap-8 items-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* Number Badge */}
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#4065FF] to-[#00CAFF] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl font-bold text-white">01</span>
              </div>

              {/* Content Card */}
              <div className="flex-1 bg-white border-l-4 border-[#4065FF] p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <FaBrain className="w-10 h-10 text-[#4065FF]" />
                  <h3 className="text-2xl font-serif text-[#0F1662]">
                    Protecting civic space from AI enabled surveillance
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We aim to safeguard civic freedoms by monitoring, researching and challenging the unlawful use of AI
                  powered surveillance technologies across Africa. Our goal is to ensure that AI technologies strengthen
                  rather than restrict democratic participation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#4065FF]/10 text-[#4065FF] rounded-full text-sm font-medium">
                    AI Surveillance
                  </span>
                  <span className="px-3 py-1 bg-[#4065FF]/10 text-[#4065FF] rounded-full text-sm font-medium">
                    Freedom
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Promoting Information Integrity on social media platforms - Right Aligned */}
            <motion.div
              className="flex flex-col md:flex-row-reverse gap-8 items-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* Number Badge */}
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#00CAFF] to-[#4065FF] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl font-bold text-white">02</span>
              </div>

              {/* Content Card */}
              <div className="flex-1 bg-white border-r-4 border-[#00CAFF] p-8 shadow-lg hover:shadow-xl transition-all duration-300 md:text-right">
                <div className="flex items-center gap-4 mb-4 md:justify-end">
                  <h3 className="text-2xl font-serif text-[#0F1662]">
                    Promoting Information Integrity on social media platforms
                  </h3>
                  <FaBalanceScale className="w-10 h-10 text-[#00CAFF]" />
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We research and advocate for transparent and accountable social media platforms in Africa. By raising
                  awareness and influencing policy, we aim to combat mis/disinformation and harmful online practices
                  that undermine trust, public engagement and civic freedoms.
                </p>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  <span className="px-3 py-1 bg-[#00CAFF]/10 text-[#00CAFF] rounded-full text-sm font-medium">
                    Misinformation
                  </span>
                  <span className="px-3 py-1 bg-[#00CAFF]/10 text-[#00CAFF] rounded-full text-sm font-medium">
                    Disinformation
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Ensuring Fair Use of Resources within the AI industry - Left Aligned */}
            <motion.div
              className="flex flex-col md:flex-row gap-8 items-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* Number Badge */}
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#4065FF] to-[#00CAFF] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl font-bold text-white">03</span>
              </div>

              {/* Content Card */}
              <div className="flex-1 bg-white border-l-4 border-[#4065FF] p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <FaHandPeace className="w-10 h-10 text-[#4065FF]" />
                  <h3 className="text-2xl font-serif text-[#0F1662]">
                    Ensuring fair use of resources within the AI industry
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We monitor and address unfair practices within the AI industry -including the exploitation of African
                  labour, personal data and raw materials. Our work advocates for fairness, accountability and
                  protection of human rights throughout the AI lifecycle.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#4065FF]/10 text-[#4065FF] rounded-full text-sm font-medium">
                    Resource exploitation
                  </span>
                  <span className="px-3 py-1 bg-[#4065FF]/10 text-[#4065FF] rounded-full text-sm font-medium">
                    Accountability
                  </span>
                  <span className="px-3 py-1 bg-[#4065FF]/10 text-[#4065FF] rounded-full text-sm font-medium">
                    State sovereignty
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Preserving state sovereignty and democratic governance - Right Aligned */}
            <motion.div
              className="flex flex-col md:flex-row-reverse gap-8 items-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* Number Badge */}
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#00CAFF] to-[#4065FF] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl font-bold text-white">04</span>
              </div>

              {/* Content Card */}
              <div className="flex-1 bg-white border-r-4 border-[#00CAFF] p-8 shadow-lg hover:shadow-xl transition-all duration-300 md:text-right">
                <div className="flex items-center gap-4 mb-4 md:justify-end">
                  <h3 className="text-2xl font-serif text-[#0F1662]">
                    Preserving state sovereignty and democratic governance
                  </h3>
                  <FaNetworkWired className="w-10 h-10 text-[#00CAFF]" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We research and raise awareness on the growing influence of Big Tech companies on African governance
                  systems. Our work aims to protect democracy, rule of law and human rights in the age of AI.
                </p>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  <span className="px-3 py-1 bg-[#00CAFF]/10 text-[#00CAFF] rounded-full text-sm font-medium">
                    Digital expansionism
                  </span>
                  <span className="px-3 py-1 bg-[#00CAFF]/10 text-[#00CAFF] rounded-full text-sm font-medium">
                    Big Tech dominance
                  </span>
                  <span className="px-3 py-1 bg-[#00CAFF]/10 text-[#00CAFF] rounded-full text-sm font-medium">
                    State sovereignty
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Activities section */}
            <motion.div
              className="mt-16 bg-white border-2 border-[#4065FF]/20 p-10 md:p-12 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-serif text-[#0F1662] mb-6">Activities</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">We do our work through:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-center gap-3 p-4 bg-[#4065FF]/5 rounded-lg">
                    <div className="w-2 h-2 bg-[#4065FF] rounded-full flex-shrink-0" />
                    <span className="text-gray-800 font-medium">Policy Advocacy</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-[#00CAFF]/5 rounded-lg">
                    <div className="w-2 h-2 bg-[#00CAFF] rounded-full flex-shrink-0" />
                    <span className="text-gray-800 font-medium">Citizen Sensitization</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-[#4065FF]/5 rounded-lg">
                    <div className="w-2 h-2 bg-[#4065FF] rounded-full flex-shrink-0" />
                    <span className="text-gray-800 font-medium">Capacity Building</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-[#00CAFF]/5 rounded-lg">
                    <div className="w-2 h-2 bg-[#00CAFF] rounded-full flex-shrink-0" />
                    <span className="text-gray-800 font-medium">Research</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Impact Statement with Gradient Background */}
          <motion.div
            className="mt-24 bg-gradient-to-r from-[#0F1662] to-[#1a1f4d] p-10 md:p-12 rounded-t-lg rounded-b-2xl shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-1 bg-[#00CAFF] mx-auto mb-6" />
              <p className="text-white/90 leading-relaxed text-lg md:text-xl mb-8 text-balance">
                Through evidence-based research we examine the impact of AI technologies on the African continent and
                ensure that technological advancement in Africa serves the interests of the African people and supports
                democratic governance.
              </p>
              <Link
                to="/publications"
                className="bg-[#00CAFF] text-[#0F1662] w-full sm:w-auto
                px-6 py-3 sm:px-8 sm:py-4
                text-sm sm:text-base
                hover:bg-[#00CAFF]/90
                transition-colors duration-300
                shadow-md
                text-center "
              >
                Explore Research Papers
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export { Work }
