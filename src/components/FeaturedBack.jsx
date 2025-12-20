import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiEye, FiDownload, FiX } from 'react-icons/fi';
import { useState } from 'react';

export default function FeaturedLib() {
  const [previewPdf, setPreviewPdf] = useState(null);

  // Research data with PDF URLs
  const researchItems = [
    {
      id: 1,
      title: 'Surveillance & Civic Space',
      description:
        'Examining the impact of surveillance technologies on civic freedoms and democratic participation across African nations.',
      image:
        'https://images.unsplash.com/photo-1722974611253-d9ecd8d03b48?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
      borderColor: '#00CAFF',
      pdfUrl:
        'https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf',
    },
    {
      id: 2,
      title: 'Information Integrity',
      description:
        'Analyzing social media platforms and their role in shaping public discourse, misinformation, and democratic processes.',
      image:
        'https://images.unsplash.com/photo-1722974611253-d9ecd8d03b48?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
      borderColor: '#4065FF',
      pdfUrl:
        'https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf',
    },
    {
      id: 3,
      title: 'AI & Resource Exploitation',
      description:
        'Investigating how AI systems contribute to resource extraction patterns and their implications for sustainable development.',
      image:
        'https://images.unsplash.com/photo-1722974611253-d9ecd8d03b48?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
      borderColor: '#0F1662',
      pdfUrl:
        'https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf',
    },
    {
      id: 4,
      title: 'Digital Colonialism',
      description:
        'Analyzing big tech dominance and its effects on state sovereignty, digital self-determination, and technological independence.',
      image:
        'https://images.unsplash.com/photo-1722974611253-d9ecd8d03b48?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
      borderColor: '#00CAFF',
      pdfUrl:
        'https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf',
    },
  ];

  const handlePreview = (pdfUrl) => {
    setPreviewPdf(pdfUrl);
    document.body.style.overflow = 'hidden';
  };

  const handleClosePreview = () => {
    setPreviewPdf(null);
    document.body.style.overflow = 'unset';
  };

  const handleDownload = (pdfUrl, title) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${title.replace(/\s+/g, '-').toLowerCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
    <section className="relative bg-white py-10 overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #00CAFF 1px, transparent 1px),
            linear-gradient(to bottom, #00CAFF 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <motion.div variants={itemVariants} className="mb-24">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-serif mb-3"
              style={{ color: '#0F1662' }}
            >
              Featured Research Papers
            </h2>
            <p className="text-base text-gray-500 max-w-2xl mx-auto">
              Critical investigations into AI, democracy, and digital
              sovereignty in Africa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Map through research items */}
            {researchItems.map((item) => (
              <motion.div
                key={item.id}
                className="relative bg-white p-5 border hover:shadow-lg transition-all duration-300 text-center md:text-left  rounded-r-3xl"
                style={{ borderLeftColor: item.borderColor }}
                whileHover={{ x: 4 }}
              >
                {/* Research image thumbnail */}
                <div className="w-full h-40 mb-4 overflow-hidden flex items-center justify-center md:justify-start">
                  <img
                    src={item.image || '/placeholder.svg'}
                    alt={item.title}
                    className="h-full w-full object-cover rounded-lg"
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

                <div className="flex items-center justify-center md:justify-start gap-6 mt-4">
                  {/* Preview icon button with larger touch target for mobile */}
                  <button
                    onClick={() => handlePreview(item.pdfUrl)}
                    className="flex items-center gap-2 text-gray-600 hover:text-[#4065FF] transition-colors duration-200 p-2 -m-2"
                    aria-label={`Preview ${item.title}`}
                  >
                    <FiEye size={22} className="md:w-5 md:h-5" />
                    <span className="text-sm md:text-base">Preview</span>
                  </button>

                  {/* Download icon button with larger touch target for mobile */}
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
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="relative overflow-hidden p-8 md:p-12 text-center max-w-5xl mx-auto rounded-t-md rounded-b-3xl"
          style={{
            background: 'linear-gradient(135deg, #0F1662 0%, #4065FF 100%)',
          }}
        >
          <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">
            Explore Research Papers
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Access comprehensive reports, policy briefs, and research papers on
            AI, democracy, and digital rights in Africa.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/publications"
              className="px-6 py-2 bg-white text-[#0F1662] hover:bg-white/90 transition-colors duration-200"
            >
              All Research Papers
            </Link>

            {/* <Link
              to="/publications"
              className="px-6 py-2 border border-white text-white hover:bg-white/10 transition-colors duration-200"
            >
              Subscribe to Updates
            </Link> */}
          </div>
        </motion.div>
      </motion.div>

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

export { FeaturedLib };
