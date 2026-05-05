"use client";

import React from 'react';
import { motion } from 'framer-motion';

const techStack = [
  { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js' },
  { name: 'TypeScript', icon: 'https://skillicons.dev/icons?i=ts' },
  { name: 'React', icon: 'https://skillicons.dev/icons?i=react' },
  { name: 'Next.js', icon: 'https://skillicons.dev/icons?i=nextjs' },
  { name: 'Node.js', icon: 'https://skillicons.dev/icons?i=nodejs' },
  { name: 'Express', icon: 'https://skillicons.dev/icons?i=express' },
  { name: 'MongoDB', icon: 'https://skillicons.dev/icons?i=mongodb' },
  { name: 'PostgreSQL', icon: 'https://skillicons.dev/icons?i=postgres' },
  { name: 'Tailwind CSS', icon: 'https://skillicons.dev/icons?i=tailwind' },
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

const Technologies = () => {
  return (
    <section id="technologies" className="max-w-container-max mx-auto px-8 py-section-gap">
      <div className="flex flex-col gap-stack-sm mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Technologies</h2>
        <p className="text-sm uppercase tracking-[0.2em] text-on-surface-variant font-medium">My Tech Stack</p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-x-12 gap-y-16 max-w-5xl mx-auto"
      >
        {techStack.map((tech) => (
          <motion.div
            key={tech.name}
            variants={itemVariants}
            className="flex flex-col items-center group cursor-default"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center p-5 group-hover:border-primary-container/50 group-hover:bg-primary-container/5 transition-all duration-300 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-primary-container/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-full h-full object-contain relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
              />
            </div>
            <span className="mt-4 text-xs md:text-sm font-medium text-on-surface-variant group-hover:text-white transition-colors">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Technologies;
