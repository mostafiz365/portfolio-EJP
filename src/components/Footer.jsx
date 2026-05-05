import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-12 border-t border-white/5 bg-transparent overflow-hidden">
      <div className="max-w-container-max mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8">
              Let's build <br />
              <span className="text-primary-container">something great.</span>
            </h2>
            <p className="text-xl text-on-surface-variant max-w-md leading-relaxed mb-10">
              I'm always open to discussing new projects, creative ideas or original visions.
            </p>
            <a 
              href="mailto:hello@mostafiz.com" 
              className="text-2xl md:text-3xl font-medium text-white hover:text-primary-container transition-colors underline underline-offset-8 decoration-white/20 hover:decoration-primary-container"
            >
              hello@mostafiz.com
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:justify-items-end">
            <div className="space-y-6">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Social</h4>
              <ul className="space-y-4">
                {['Github', 'LinkedIn', 'Twitter', 'Instagram'].map(link => (
                  <li key={link}>
                    <a href="#" className="text-on-surface-variant hover:text-white transition-colors text-sm font-medium">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Navigation</h4>
              <ul className="space-y-4">
                {['Home', 'About', 'Services', 'Projects'].map(link => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-on-surface-variant hover:text-white transition-colors text-sm font-medium">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6 col-span-2 md:col-span-1">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Availability</h4>
              <p className="text-on-surface-variant text-sm leading-loose">
                Currently taking <br />
                freelance projects <br />
                & collaborations.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            </div>
            <span className="text-xs text-on-surface-variant font-medium tracking-wider uppercase">
              © 2024 MOSTAFIZ. DESIGNED BY HAND.
            </span>
          </div>
          
          <div className="flex gap-8">
            <button className="text-xs text-on-surface-variant hover:text-white transition-colors uppercase tracking-widest font-bold">Privacy Policy</button>
            <button className="text-xs text-on-surface-variant hover:text-white transition-colors uppercase tracking-widest font-bold">Terms of Use</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
