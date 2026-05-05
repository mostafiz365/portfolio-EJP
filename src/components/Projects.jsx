"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="max-w-container-max mx-auto px-8 py-section-gap border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-[1px] bg-primary-container"></span>
            <span className="text-label-sm text-primary-container uppercase tracking-widest font-bold">Featured Projects</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight">
            Crafting Digital <br /><span className="text-primary-container">Masterpieces</span>
          </h2>
          <p className="text-lg text-on-surface-variant mt-6 leading-relaxed">
            A collection of selected works where design meets functionality. Every pixel is intentional, every interaction is seamless.
          </p>
        </div>
        <button className="px-8 py-4 rounded-full border border-white/10 text-white text-label-sm font-bold hover:bg-white/5 hover:border-primary-container transition-all flex items-center gap-3 group">
          Explore All Work
          <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {[
          {
            title: "QuantX Finance Platform",
            category: "Fintech • Web App",
            desc: "A real-time financial dashboard with advanced data visualization and live market updates.",
            img: "https://images.unsplash.com/photo-1611974714658-058e1c7a8117?q=80&w=2070&auto=format&fit=crop",
            tags: ["Next.js", "Tailwind", "D3.js", "Firebase"]
          },
          {
            title: "Nova SaaS Ecosystem",
            category: "SaaS • Design System",
            desc: "A robust design system and management platform for multi-tenant enterprise applications.",
            img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
            tags: ["React", "TypeScript", "Framer Motion", "Node.js"]
          }
        ].map((project, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="group relative"
          >
            <div className="relative aspect-[16/11] rounded-3xl overflow-hidden bg-surface-container-highest border border-white/10 transition-all duration-700 group-hover:border-primary-container/30 group-hover:shadow-[0_20px_80px_-20px_rgba(0,122,255,0.2)]">
              {/* Project Image */}
              <img
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                alt={project.title}
                src={project.img}
              />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] text-white font-medium border border-white/10 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="material-symbols-outlined font-bold">north_east</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-3 px-2">
              <div className="flex items-center gap-2 text-primary-container text-[11px] font-bold uppercase tracking-[0.2em]">
                {project.category}
              </div>
              <h3 className="text-3xl font-bold text-white group-hover:text-primary-container transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-base text-on-surface-variant leading-relaxed line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity">
                {project.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
