'use client';

import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaBullseye,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const scrollToForm = (e) => {
    e.preventDefault();
    const formElement = document.getElementById('form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
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
              Get in
              <br />
              <span className="text-[#00CAFF]">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto leading-relaxed text-pretty mb-1">
              Let&apos;s collaborate to shape a responsible AI future for Africa
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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Office Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block relative h-[500px] rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=1000&fit=crop"
              alt="Uzawi Office"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right: Contact Information with light cyan background */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#E8F7FB] rounded-2xl p-8 h-[500px] flex flex-col justify-center relative overflow-hidden"
          >
            {/* Email Section */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <FaEnvelope className="text-[#00CAFF] text-lg" />
                <h3 className="font-semibold text-gray-900">Email</h3>
              </div>
              <div className="pl-9">
                <div className="flex items-baseline gap-1">
                  <span className="text-gray-600 text-sm">
                    General questions:
                  </span>
                  <a
                    href="mailto:info@uzawi.org"
                    className="text-[#00CAFF] hover:underline text-sm"
                  >
                    info@uzawi.org
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Section */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <FaPhone className="text-[#00CAFF] text-lg" />
                <h3 className="font-semibold text-gray-900">Phone</h3>
              </div>
              <div className="pl-9">
                <a
                  href="tel:+256394753521"
                  className="text-[#00CAFF] hover:underline text-sm"
                >
                  +256 (0) 394753521
                </a>
              </div>
            </div>

            {/* Office Addresses Section */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <FaMapMarkerAlt className="text-[#00CAFF] text-lg" />
                <h3 className="font-semibold text-gray-900">
                  Office addresses
                </h3>
              </div>
              <div className="pl-9">
                {/* Kampala Office */}
                <div>
                  <p className="text-[#00CAFF] font-semibold text-xs mb-2 uppercase tracking-wide">
                    Kampala
                  </p>
                  <div className="text-gray-700 text-sm leading-relaxed">
                    <p>Uzawi Initiative Ltd</p>
                    <p>P.O Box 131221</p>
                    <p>Kampala, Uganda</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Icons Section */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Follow Us</h3>
              <div className="flex items-center gap-4">
                <a
                  href="https://twitter.com/uzawi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00CAFF] hover:text-[#0F1662] transition-colors"
                  aria-label="X (formerly Twitter)"
                >
                  <FaXTwitter className="text-2xl" />
                </a>
                <a
                  href="https://linkedin.com/company/uzawi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00CAFF] hover:text-[#0F1662] transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                <a
                  href="https://github.com/uzawi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00CAFF] hover:text-[#0F1662] transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-2xl" />
                </a>
              </div>
            </div>

            <div className="bg-white/50 rounded-lg p-4 border border-[#00CAFF]/20">
              <div className="flex items-center justify-center gap-3">
                <div className="w-5 h-5 rounded-full border-2 border-[#00CAFF] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#00CAFF] text-xs ">i</span>
                </div>
                <p className="text-gray-700 text-sm">
                  Alternatively send us a message{' '}
                  <button
                    onClick={scrollToForm}
                    className="text-[#00CAFF] hover:underline font-medium cursor-pointer bg-transparent border-none p-0"
                  >
                    send us a message
                  </button>
                  .
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
          id="form"
        >
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl text-[#0F1662] mb-4">Send us a message</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we&apos;ll get back to you as soon as
              possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#00CAFF] focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#00CAFF] focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#00CAFF] focus:border-transparent outline-none transition-all"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#00CAFF] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-[#00CAFF] text-white font-semibold rounded-sm hover:bg-[#00B8E6] transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
