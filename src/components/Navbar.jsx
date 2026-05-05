"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const navPadding = useTransform(scrollY, [0, 100], ["24px 0px", "12px 0px"]);
  const navScale = useTransform(scrollY, [0, 100], [1, 0.95]);

  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ padding: navPadding, scale: navScale }}
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 flex justify-center"
    >
      <div className={`w-full rounded-full border border-white/20 flex justify-between items-center px-6 py-3 transition-all duration-500 ${isScrolled ? 'bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]' : 'bg-transparent'}`}>
        <div className="text-lg font-bold tracking-tighter text-white">MOSTAFIZ</div>

        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'About', id: 'about' },
            { name: 'Skills', id: 'skills' },
            { name: 'Qualification', id: 'qualification' },
            { name: 'Process', id: 'workflow' },
            { name: 'Projects', id: 'projects' },
            { name: 'Contact', id: 'contact' }
          ].map((item) => (
            <a
              key={item.id}
              className="group relative font-inter text-xs tracking-wider uppercase font-medium text-gray-400 hover:text-white transition-all duration-300"
              href={`#${item.id}`}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary-container transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full text-label-sm scale-95 active:scale-90 transition-transform hover:shadow-[0_0_20px_rgba(0,122,255,0.4)]">
          Let's Talk
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
