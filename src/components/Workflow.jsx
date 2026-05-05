"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Workflow = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const steps = [
    {
      icon: 'devices',
      title: 'Responsive Web Design',
      desc: 'Converting Figma designs into pixel-perfect, fully responsive websites that work flawlessly across all screen sizes.'
    },
    {
      icon: 'view_quilt',
      title: 'Component Development',
      desc: 'Building reusable, modular, and maintainable UI components using React and Next.js to speed up development cycles.'
    },
    {
      icon: 'api',
      title: 'API Integration',
      desc: 'Connecting front-end interfaces with RESTful APIs to fetch and display dynamic data seamlessly in real-time.'
    },
    {
      icon: 'speed',
      title: 'Performance & SEO',
      desc: 'Optimizing web applications for maximum speed, accessibility, and search engine visibility using modern best practices.'
    }
  ];

  return (
    <section id="workflow" className="max-w-container-max mx-auto px-8 py-section-gap border-t border-white/5">
      <div className="flex flex-col items-center text-center mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="px-4 py-1 rounded-full bg-primary-container/10 border border-primary-container/20 text-primary-container text-[10px] font-bold uppercase tracking-widest mb-4"
        >
          My Process
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
          How I Bring <span className="text-primary-container">Ideas</span> to Life
        </h2>
        <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          My development workflow is built on efficiency, precision, and a relentless focus on creating the best possible user experience.
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {steps.map((step, i) => (
          <motion.div 
            key={i}
            variants={itemVariants}
            className="group relative glass-card p-8 rounded-3xl border border-white/10 hover:border-primary-container/30 transition-all duration-500 hover:shadow-[0_20px_50px_-10px_rgba(0,122,255,0.15)] overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="text-8xl font-bold text-white italic">0{i + 1}</span>
            </div>
            
            <div className="w-14 h-14 rounded-2xl bg-primary-container/10 flex items-center justify-center text-primary-container mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
              <span className="material-symbols-outlined text-3xl font-light">{step.icon}</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-container transition-colors">
              {step.title}
            </h3>
            
            <p className="text-sm text-on-surface-variant leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
              {step.desc}
            </p>
            
            <div className="absolute bottom-0 left-0 h-1 bg-primary-container/30 w-0 group-hover:w-full transition-all duration-700"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Workflow;
