'use client';

import { motion } from 'framer-motion';
import { FaBullseye, FaBullhorn } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <>
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
              Get To know
              <span className="text-[#00CAFF]"> Uzawi Better</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto leading-relaxed text-pretty mb-1">
              Advocating for Africa's perspective in shaping responsible AI
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
      {/* </CHANGE> */}

      <section className="max-w-5xl mx-auto relative min-h-screen bg-white py-20 px-6 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#0F1662"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Content container with max width */}
        <div className="relative max-w-7xl mx-auto">
          {/* Bento grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* About Us - Large card spanning 2 columns */}
            <motion.div
              className="lg:col-span-2 bg-gradient-to-br from-[#0F1662] to-[#4065FF] p-8 md:p-10 text-white shadow-xl rounded-tl-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-[#00CAFF] rounded-full"></div>
                <h2 className="text-3xl ">About Us</h2>
              </div>
              <div className="space-y-4 text-white/90 leading-relaxed">
                <p>
                  Uzawi Initiative Ltd is a non-profit organization based in
                  Uganda focused on advancing research and advocacy at the
                  intersection of Artificial Intelligence (AI), society and
                  democracy in Africa. As AI technologies continue to transform
                  societies, their distinct implications on African countries
                  remain understudied and underrepresented in global discussions
                  on responsible AI. Yet these technologies risk repeating
                  patterns of a dark colonial history that once silenced
                  Africa’s voice.
                </p>
                <p>
                  Our goal is to research and address the societal, ethical and
                  governance challenges that stem from AI deployment on the
                  African continent. We aim to empower citizens and governments
                  with the knowledge to address the negative impacts of AI
                  systems in order to safeguard democratic values in the age of
                  AI. Our work focuses on protecting the civic space from AI
                  enabled surveillance, promoting information integrity on
                  social media platforms, exposing exploitative practices in the
                  AI industry, safeguarding democracy and preserving state
                  sovereignty from digital expansionism.
                </p>
              </div>
            </motion.div>

            <div className="space-y-6">
              {/* Vision card with icon */}
              <motion.div
                className="bg-white border-2 border-gray-100 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-tr-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#00CAFF]/10 flex items-center justify-center">
                    <FaBullseye className="w-6 h-6 text-[#00CAFF]" />
                  </div>
                  <h3 className="text-2xl  text-[#0F1662] uppercase tracking-wide">
                    Vision
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To empower the African people, uphold democratic values and
                  preserve the sovereignty of African states in the age of AI.
                </p>
              </motion.div>

              {/* Mission card with icon */}
              <motion.div
                className="bg-white border-2 border-gray-100 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#4065FF]/10 flex items-center justify-center">
                    <FaBullhorn className="w-6 h-6 text-[#4065FF]" />
                  </div>
                  <h3 className="text-2xl  text-[#0F1662] uppercase tracking-wide">
                    Mission
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To amplify the African voice by researching and highlighting
                  the impact of AI technologies on Africa, equipping citizens
                  with knowledge and advocating for policies that uphold
                  democratic governance and safeguard human rights in the age of
                  AI.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Core Values grid */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl  text-[#0F1662] text-center mb-10">
              Our Core Values
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {/* Ubuntu */}
              <div className="group relative bg-white border border-gray-100 p-6 hover:border-[#00CAFF] hover:shadow-lg transition-all duration-300">
                <div className="absolute top-0 left-0 w-1 h-0 bg-[#00CAFF] group-hover:h-full transition-all duration-300"></div>
                <h3 className="text-lg  text-[#0F1662] mb-2 tracking-wide">
                  Ubuntu
                </h3>
                <div className="w-12 h-1 bg-[#00CAFF] mb-3"></div>
                {/* <p className="text-sm text-gray-600 leading-relaxed">
                  I am because we are
                </p> */}
              </div>

              {/* Human Dignity */}
              <div className="group relative bg-white border border-gray-100 p-6 hover:border-[#00CAFF] hover:shadow-lg transition-all duration-300">
                <div className="absolute top-0 left-0 w-1 h-0 bg-[#00CAFF] group-hover:h-full transition-all duration-300"></div>
                <h3 className="text-lg  text-[#0F1662] mb-2 tracking-wide">
                  Human Dignity
                </h3>
                <div className="w-12 h-1 bg-[#00CAFF] mb-3"></div>
                {/* <p className="text-sm text-gray-600 leading-relaxed">
                  Respect for all people
                </p> */}
              </div>

              {/* Fairness */}
              <div className="group relative bg-white border border-gray-100 p-6 hover:border-[#00CAFF] hover:shadow-lg transition-all duration-300">
                <div className="absolute top-0 left-0 w-1 h-0 bg-[#00CAFF] group-hover:h-full transition-all duration-300"></div>
                <h3 className="text-lg  text-[#0F1662] mb-2 tracking-wide">
                  Fairness
                </h3>
                <div className="w-12 h-1 bg-[#00CAFF] mb-3"></div>
                {/* <p className="text-sm text-gray-600 leading-relaxed">
                  Justice and equality
                </p> */}
              </div>

              {/* Inclusivity */}
              <div className="group relative bg-white border border-gray-100 p-6 hover:border-[#00CAFF] hover:shadow-lg transition-all duration-300">
                <div className="absolute top-0 left-0 w-1 h-0 bg-[#00CAFF] group-hover:h-full transition-all duration-300"></div>
                <h3 className="text-lg  text-[#0F1662] mb-2 tracking-wide">
                  Inclusivity
                </h3>
                <div className="w-12 h-1 bg-[#00CAFF] mb-3"></div>
                {/* <p className="text-sm text-gray-600 leading-relaxed">
                  Everyone has a voice
                </p> */}
              </div>

              {/* Accountability */}
              <div className="group relative bg-white border border-gray-100 p-6 hover:border-[#00CAFF] hover:shadow-lg transition-all duration-300">
                <div className="absolute top-0 left-0 w-1 h-0 bg-[#00CAFF] group-hover:h-full transition-all duration-300"></div>
                <h3 className="text-lg  text-[#0F1662] mb-2 tracking-wide">
                  Accountability
                </h3>
                <div className="w-12 h-1 bg-[#00CAFF] mb-3"></div>
                {/* <p className="text-sm text-gray-600 leading-relaxed">
                  Transparency in action
                </p> */}
              </div>
            </div>
          </motion.div>

          {/* Focus Areas - Quote style card */}
          <motion.div
            className="bg-gray-50 border-l-4 border-[#4065FF] p-8 md:p-10 mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-4xl text-[#4065FF] mb-4">"</div>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              We advocate for democratic governance in the age of AI on the
              African continent. Our focus includes challenging AI-enabled
              surveillance, advocating for transparency and information
              integrity on social media platforms, ensuring fair and ethical use
              of African data, labour and natural resources within the AI
              industry and safeguarding state sovereignty from digital
              expansionism
            </p>
            <div className="flex items-center gap-2">
              <FaBullseye className="w-5 h-5 text-[#4065FF]" />
              <span className="text-sm text-gray-600 uppercase tracking-wide">
                Our Focus Areas
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export { AboutSection };
