"use client";

import React from 'react';
import { motion } from 'framer-motion';

const frontendStack = [
  { name: 'HTML', icon: 'https://skillicons.dev/icons?i=html' },
  { name: 'CSS', icon: 'https://skillicons.dev/icons?i=css' },
  { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js' },
  { name: 'React', icon: 'https://skillicons.dev/icons?i=react' },
  { name: 'Next.js', icon: 'https://skillicons.dev/icons?i=nextjs' },
  { name: 'Tailwind CSS', icon: 'https://skillicons.dev/icons?i=tailwind' },
];

const backendStack = [
  { name: 'Node.js', icon: 'https://skillicons.dev/icons?i=nodejs' },
  { name: 'Express', icon: 'https://skillicons.dev/icons?i=express' },
  { name: 'MongoDB', icon: 'https://skillicons.dev/icons?i=mongodb' },
  { name: 'Git', icon: 'https://skillicons.dev/icons?i=git' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const TechnologyGroup = ({ title, stack }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="glass-card p-10 rounded-[2.5rem] border border-white/10 bg-white/5 relative overflow-hidden group/card"
  >
    {/* Decorative background glow */}
    <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-container/10 blur-[80px] group-hover/card:bg-primary-container/20 transition-colors"></div>
    
    <div className="relative z-10">
      <h3 className="text-2xl font-bold text-white mb-10 text-center tracking-tight flex items-center justify-center gap-3">
        <span className="w-8 h-[2px] bg-primary-container/30"></span>
        {title}
        <span className="w-8 h-[2px] bg-primary-container/30"></span>
      </h3>
      
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-10">
        {stack.map((tech) => (
          <motion.div
            key={tech.name}
            variants={itemVariants}
            className="flex flex-col items-center group/item cursor-default"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-4 group-hover/item:border-primary-container/50 group-hover/item:bg-primary-container/5 transition-all duration-300 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-primary-container/10 opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-full h-full object-contain relative z-10 group-hover/item:scale-110 group-hover/item:rotate-6 transition-transform duration-300"
              />
            </div>
            <span className="mt-4 text-xs font-medium text-on-surface-variant group-hover/item:text-white transition-colors">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

const Technologies = () => {
  return (
    <section id="technologies" className="max-w-container-max mx-auto px-8 py-section-gap">
      <div className="flex flex-col gap-stack-sm mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Technologies</h2>
        <p className="text-sm uppercase tracking-[0.2em] text-on-surface-variant font-medium">My Tech Stack</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
        <TechnologyGroup title="Frontend" stack={frontendStack} />
        <TechnologyGroup title="Backend" stack={backendStack} />
      </div>
    </section>
  );
};

export default Technologies;
