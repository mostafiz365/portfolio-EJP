"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="max-w-container-max mx-auto px-8 py-section-gap">
      <div className="flex flex-col gap-stack-sm mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Get in Touch</h2>
        <p className="text-sm uppercase tracking-[0.2em] text-on-surface-variant font-medium">Contact Me</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
        {/* Left: Talk to me */}
        <div className="flex flex-col gap-8">
          <h3 className="text-2xl font-bold text-white text-center mb-4">Talk to me</h3>
          
          {[
            { icon: 'mail', title: 'EMAIL', val: 'nuradnan@gmail.com', link: 'mailto:nuradnan@gmail.com' },
            { icon: 'link', title: 'LINKEDIN', val: 'mostafizur-rahman', link: '#' },
            { icon: 'github', title: 'GITHUB', val: '@mostafizur', link: '#' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center group hover:border-primary-container/50 transition-all cursor-default"
            >
              <span className="material-symbols-outlined text-primary-container text-4xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform">{item.icon}</span>
              <h4 className="text-lg font-bold text-white">{item.title}</h4>
              <p className="text-sm text-on-surface-variant mt-2">{item.val}</p>
              <a href={item.link} className="flex items-center gap-2 text-sm text-primary-container mt-6 hover:underline transition-all">
                Write me
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Right: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-4">Write me your project</h3>
          
          <form className="flex flex-col gap-6">
            {['Name', 'Email'].map((field) => (
              <div key={field} className="relative group">
                <label className="absolute -top-3 left-6 bg-background px-2 text-xs text-on-surface-variant group-focus-within:text-primary-container transition-colors">
                  {field}
                </label>
                <input 
                  type={field === 'Email' ? 'email' : 'text'} 
                  placeholder={`Insert your ${field.toLowerCase()}`} 
                  className="w-full bg-transparent border border-white/10 rounded-2xl p-6 text-white outline-none focus:border-primary-container transition-colors placeholder:text-white/20"
                />
              </div>
            ))}

            <div className="relative group">
              <label className="absolute -top-3 left-6 bg-background px-2 text-xs text-on-surface-variant group-focus-within:text-primary-container transition-colors">Project</label>
              <textarea 
                rows="6"
                placeholder="Write your project" 
                className="w-full bg-transparent border border-white/10 rounded-2xl p-6 text-white outline-none focus:border-primary-container transition-colors placeholder:text-white/20 resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="px-10 py-5 bg-primary-container text-on-primary-container rounded-2xl font-bold flex items-center justify-center gap-3 hover:opacity-90 transition-all active:scale-95 shadow-[0_0_20px_rgba(0,122,255,0.2)] group"
            >
              Send Message
              <span className="material-symbols-outlined group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">send</span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
