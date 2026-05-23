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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group"
          >
            {/* Project Card */}
            <div className="flex flex-col h-full bg-surface-container-low/20 backdrop-blur-sm border border-white/5 rounded-[2.5rem] p-5 transition-all duration-500 hover:border-primary/20 hover:bg-surface-container-low/40 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,122,255,0.05)] relative overflow-hidden">
              {/* Background Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_0%,rgba(173,198,255,0.08),transparent_50%)] pointer-events-none"></div>

              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full rounded-[1.8rem] overflow-hidden bg-surface-variant/20 mb-6">
                <img
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  alt={project.title}
                  src={project.img}
                />
                <span className="absolute top-4 left-4 px-3.5 py-1.5 bg-black/60 backdrop-blur-md text-primary text-[10px] font-extrabold uppercase tracking-widest rounded-full border border-white/10 shadow-lg">
                  {project.category}
                </span>
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight transition-colors duration-300 group-hover:text-primary-fixed-dim">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-on-surface-variant/80 text-sm leading-relaxed mt-3 mb-5 line-clamp-3">
                  {project.desc}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-[11px] bg-white/5 border border-white/5 rounded-full text-on-surface-variant font-medium transition-all duration-300 hover:bg-primary-container/10 hover:border-primary-container/30 hover:text-primary-fixed-dim"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Details Link */}
                <div className="pt-5 border-t border-white/5 flex items-center justify-between">
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 text-xs font-black tracking-wider uppercase text-white hover:text-primary transition-all duration-300 group/btn"
                  >
                    View Details
                    <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover/btn:translate-x-1">
                      arrow_right_alt
                    </span>
                  </Link>
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
