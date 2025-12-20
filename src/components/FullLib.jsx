import { motion } from 'framer-motion';
import { FiEye, FiDownload, FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { fetchResearchItems, fetchResearchCategories } from './Contentful';

export default function ResearchLibrary() {
  // State for PDF preview modal
  const [previewPdf, setPreviewPdf] = useState(null);

  // State for active category filter
  const [activeCategory, setActiveCategory] = useState('All');

  const [categories, setCategories] = useState(['All']);
  const [researchItems, setResearchItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const [items, cats] = await Promise.all([
        fetchResearchItems(),
        fetchResearchCategories(),
      ]);
      setResearchItems(items);
      setCategories(cats);
      setLoading(false);
    }
    fetchData();
  }, []);

  const filteredResearch =
    activeCategory === 'All'
      ? researchItems
      : researchItems.filter((item) => item.category === activeCategory);

  // PDF preview handler - opens modal and prevents body scroll
  const handlePreview = (pdfUrl) => {
    setPreviewPdf(pdfUrl);
    document.body.style.overflow = 'hidden';
  };

  // Close preview handler - closes modal and restores body scroll
  const handleClosePreview = () => {
    setPreviewPdf(null);
    document.body.style.overflow = 'unset';
  };

  // Download handler - creates temporary link and triggers download
  const handleDownload = async (pdfUrl, title) => {
    try {
      const response = await fetch(pdfUrl);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `${title.replace(/\s+/g, '-').toLowerCase()}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up the blob URL
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback to direct link if fetch fails
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = `${title.replace(/\s+/g, '-').toLowerCase()}.pdf`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="relative bg-[#0F1662] overflow-hidden">
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
              Research
              <span className="text-[#00CAFF]"> Library</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto leading-relaxed text-pretty mb-1">
              Explore our comprehensive collection of research
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

      <div className="bg-gray-50 border-b border-gray-200 py-6 rounded-bl-3xl rounded-br-3xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center md:justify-center gap-3 overflow-x-auto scrollbar-hide pb-2 px-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm transition-all duration-200 rounded-sm whitespace-nowrap flex-shrink-0 ${
                  activeCategory === category
                    ? 'bg-[#4065FF] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Research items grid section */}
      <div className="relative py-16">
        {/* Background grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#00CAFF 1px, transparent 1px), linear-gradient(90deg, #00CAFF 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <motion.div
          className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory}
        >
          {loading ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">Loading research...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredResearch.map((item) => (
                <motion.div
                  key={item.id}
                  className="relative bg-white p-5 border hover:shadow-lg transition-all duration-300 text-center md:text-left rounded-r-3xl"
                  style={{
                    borderLeftColor: item.borderColor,
                    borderLeftWidth: '1px',
                  }}
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                >
                  {/* Research image thumbnail */}
                  <div className="w-full h-40 mb-4 overflow-hidden flex items-center justify-center md:justify-start">
                    <img
                      src={item.image || '/placeholder.svg'}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Research title */}
                  <h3
                    className="text-xl mb-2 font-serif"
                    style={{ color: '#0F1662' }}
                  >
                    {item.title}
                  </h3>

                  {/* Research description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Action buttons for preview and download */}
                  <div className="flex items-center justify-center md:justify-start gap-6 mt-4">
                    <button
                      onClick={() => handlePreview(item.pdfUrl)}
                      className="flex items-center gap-2 text-gray-600 hover:text-[#4065FF] transition-colors duration-200 p-2 -m-2"
                      aria-label={`Preview ${item.title}`}
                    >
                      <FiEye size={22} className="md:w-5 md:h-5" />
                      <span className="text-sm md:text-base">Preview</span>
                    </button>

                    <button
                      onClick={() => handleDownload(item.pdfUrl, item.title)}
                      className="flex items-center gap-2 text-gray-600 hover:text-[#00CAFF] transition-colors duration-200 p-2 -m-2"
                      aria-label={`Download ${item.title}`}
                    >
                      <FiDownload size={22} className="md:w-5 md:h-5" />
                      <span className="text-sm md:text-base">Download</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {!loading && filteredResearch.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-gray-500 text-lg">
                No research found in this category.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* PDF Preview Modal */}
      {previewPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-0 sm:p-4">
          {/* Close button with larger touch target for mobile */}
          <button
            onClick={handleClosePreview}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 text-white hover:text-gray-300 transition-colors p-2 bg-black/50 rounded-full"
            aria-label="Close preview"
          >
            <FiX size={28} className="sm:w-8 sm:h-8" />
          </button>

          {/* PDF iframe viewer with responsive sizing */}
          <div className="w-full h-full sm:max-w-6xl sm:max-h-[90vh] bg-white sm:rounded-lg overflow-hidden">
            <iframe
              src={previewPdf}
              className="w-full h-full"
              title="PDF Preview"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}

export { ResearchLibrary };
