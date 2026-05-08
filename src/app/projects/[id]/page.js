"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../../data/projects';
import Link from 'next/link';

export default function ProjectDetailsPage({ params }) {
  const [project, setProject] = useState(null);

  useEffect(() => {
    // In Next.js App Router, params is an object containing dynamic route parameters.
    // If we use React.use() or await params in newer Next.js versions, it might be an async process,
    // but typically unwrapping params directly is fine in client components if it's not async.
    // However, since Next.js 15, params in client components might be a Promise.
    // To be safe, we can resolve it using React.use(params) if it's a promise,
    // or just assume standard Next.js 14 behavior. We'll handle both by resolving if necessary.
    const unwrapParams = async () => {
      const resolvedParams = await params;
      const foundProject = projects.find(p => p.id === resolvedParams.id);
      setProject(foundProject);
    };
    unwrapParams();
  }, [params]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#080808]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-container"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#080808] flex items-center justify-center py-10 px-0 md:p-8">
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="w-full h-auto md:min-h-[90vh] max-w-6xl bg-[#080808] border-x md:border border-white/10 md:rounded-[3rem] overflow-hidden shadow-2xl relative flex flex-col lg:flex-row mt-20 md:mt-0"
      >
        {/* Back Button */}
        <Link href="/#projects" scroll={true}>
          <button
            className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:-translate-x-1 transition-all duration-300"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
        </Link>

        {/* Left: Cinematic Image Section */}
        <div className="lg:w-3/5 h-[350px] lg:h-auto relative overflow-hidden">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-transparent hidden lg:block"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent lg:hidden"></div>

          <div className="absolute bottom-8 left-8 right-8 lg:left-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="px-3 py-1 bg-primary-container/20 border border-primary-container/30 rounded-full text-[10px] font-bold text-primary-container uppercase tracking-widest">
                {project.category}
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold text-gradient tracking-tighter"
            >
              {project.title}
            </motion.h2>
          </div>
        </div>

        {/* Right: Content Section */}
        <div className="lg:w-2/5 p-8 lg:p-14 space-y-10 bg-surface-container/30 relative z-10">
          <div>
            <h4 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Introduction</h4>
            <p className="text-on-surface-variant text-lg leading-relaxed font-medium">
              {project.desc}
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">Core Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-2xl text-xs text-white/70 font-semibold hover:border-primary-container/50 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-red-400 text-sm">priority_high</span>
                </span>
                <h4 className="text-white font-bold text-sm uppercase tracking-widest">Challenges Faced</h4>
              </div>
              <p className="text-sm text-on-surface-variant/80 leading-relaxed italic border-l-2 border-red-500/20 pl-6">
                {project.challenges}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-green-400 text-sm">trending_up</span>
                </span>
                <h4 className="text-white font-bold text-sm uppercase tracking-widest">Future Roadmap</h4>
              </div>
              <p className="text-sm text-on-surface-variant/80 leading-relaxed italic border-l-2 border-green-500/20 pl-6">
                {project.improvements}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-8 py-4 bg-primary-container text-on-primary-container rounded-[1.5rem] text-center font-bold text-sm hover:scale-[1.02] hover:shadow-lg hover:shadow-primary-container/20 transition-all flex items-center justify-center gap-3"
            >
              Experience Live
              <span className="material-symbols-outlined text-base">arrow_outward</span>
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-[1.5rem] text-center font-bold text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-3"
            >
              Source Code
              <span className="material-symbols-outlined text-base">terminal</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
