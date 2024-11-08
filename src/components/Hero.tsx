import React from 'react';
import { motion } from 'framer-motion';
import Image from '../assets/Girrpoto.jpg';

const Hero: React.FC = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <motion.img
        src={Image}
        alt="Profile"
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        whileHover={{ scale: 1.05 }}
      />
      <motion.h1
        className="text-4xl font-bold"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.3 }}
      >
        <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          I'm Muhammad Girtianda Lubis
        </span>
        <span className="text-3xl">
          , Full-Stack Developer
        </span>
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-gray-300"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
      >
        I specialize in building modern and responsive web applications.
      </motion.p>
      <motion.div
        className="mt-8 space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.7 }}
      >
        {/* Tombol untuk mengunduh CV */}
        <motion.a
          href="/cv-muhammad-lubis.pdf"  // Pastikan path file sesuai dengan lokasi file CV Anda
          download="Muhammad_Girtianda_Lubis_CV.pdf"  // Nama file yang akan diunduh
        >
          <motion.button
            className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
              transform transition-transform duration-300 px-4 py-2 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            Download CV
          </motion.button>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Hero;
