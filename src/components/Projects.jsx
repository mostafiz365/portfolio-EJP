"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '../data/projects';

const Projects = () => {

  return (
    <section id="projects" className="max-w-container-max mx-auto px-8 py-section-gap border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-[1px] bg-primary-container"></span>
            <span className="text-label-sm text-primary-container uppercase tracking-widest font-bold">Showcase</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9]">
            My <br /><span className="text-gradient">Projects</span>
          </h2>
        </div>
        <p className="max-w-xs text-on-surface-variant text-sm leading-relaxed mb-2 opacity-60">
          A collection of digital experiences that combine innovative engineering with aesthetic precision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group relative"
          >
            {/* Project Card */}
            <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden bg-surface-container border border-white/5 transition-all duration-700 hover:border-primary-container/30 group">
              {/* Background Image */}
              <img
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                alt={project.title}
                src={project.img}
              />

              {/* Animated Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_120%,rgba(173,198,255,0.15),transparent_70%)]"></div>

              {/* Card Content */}
              <div className="absolute bottom-0 left-0 right-0 p-10 flex flex-col justify-end h-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-[1px] bg-primary-container transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100"></span>
                    <span className="text-primary-container text-[10px] font-bold uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-none mb-10">
                    {project.title.split(' ').map((word, idx) => (
                      <span key={idx} className="inline-block mr-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500" style={{ transitionDelay: `${idx * 50 + 200}ms` }}>
                        {word}
                      </span>
                    ))}
                  </h3>

                  <div className="flex items-center gap-4 transition-all duration-500 mt-6">
                    <Link
                      href={`/projects/${project.id}`}
                      className="px-8 py-4 bg-white text-black rounded-2xl text-xs font-black hover:bg-primary-container hover:text-white transition-all active:scale-95 flex items-center gap-2"
                    >
                      VIEW DETAILS
                      <span className="material-symbols-outlined text-sm">open_in_full</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Projects;
