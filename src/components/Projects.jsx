"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: "DigiTools – Digital Marketplace",
    category: "Full-Stack • Digital Commerce",
    desc: "A premium digital marketplace designed to empower creators. It features a curated collection of AI-powered software, design assets, and productivity tools with a focus on a seamless, mobile-first user experience.",
    img: "/assets/projects/digitools_final.png",
    live: "https://digitools-website.netlify.app",
    github: "https://github.com/mostafiz365/A6-DigiTools-Website",
    stack: ["React.js v19", "Tailwind CSS", "DaisyUI", "React Icons", "Vite", "React Toastify"],
    challenges: "Architecting a real-time dynamic cart system that synchronizes instantaneously across the navigation and product catalog was a primary technical hurdle. Ensuring high-performance animations for interactive pricing cards while maintaining a strict mobile-first adaptive layout required meticulous state management and CSS optimization.",
    improvements: "The roadmap includes integrating Firebase authentication for user-specific dashboards, implementing a multi-vendor module for independent creators, and adding a secure Stripe-powered payment ecosystem."
  },
  {
    title: "SkillSphere – Online Learning",
    category: "EdTech • Next.js Platform",
    desc: "A sophisticated e-learning platform designed for skill-based mastery. It features a dynamic course catalog, secure authentication via Better Auth, and a fluid search system to help users navigate their learning journey with ease.",
    img: "/assets/projects/skillsphere_final.png",
    live: "https://skillsphere-website-nextjs.vercel.app",
    github: "https://github.com/mostafiz365/skillsphere-website-nextjs",
    stack: ["Next.js (App Router)", "Hero UI", "Better Auth", "Tailwind CSS", "Framer Motion", "React Toastify"],
    challenges: "Integrating a secure and seamless authentication flow using Better Auth while managing complex protected routes for dynamic course content was a major technical hurdle. Additionally, optimizing the responsive grid system for a heavy course catalog while maintaining a smooth user experience across all devices required meticulous performance tuning.",
    improvements: "The future roadmap includes implementing a real-time progress tracking dashboard for students, integrating a peer-to-peer discussion forum using WebSockets, and launching an automated certification system upon course completion."
  },
  {
    title: "Friend Pulse – Relationship Manager",
    category: "Social • React 19 App",
    desc: "A modern relationship management platform designed to help users nurture their connections. It features smart contact tracking, interactive catch-up timelines, and insightful statistics to maintain meaningful relationships.",
    img: "/assets/projects/friendpulse_final.png",
    live: "https://keen-keeper-website-dusky.vercel.app",
    github: "https://github.com/mostafiz365/keen-keeper-website",
    stack: ["React 19", "Vite", "Tailwind CSS", "Recharts", "React Router", "Context API"],
    challenges: "Developing a dynamic status calculation engine that accurately tracks contact frequency relative to user-defined goals was a complex logical challenge. Additionally, integrating Recharts for real-time relationship insights while ensuring high performance on mobile devices required careful optimization of React's rendering lifecycle.",
    improvements: "Future updates will feature automated catch-up reminders via email/push notifications, an AI-powered 'Ice-Breaker' suggestion engine, and a dedicated mobile application for on-the-go relationship management."
  }
];

const ProjectDetailsModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-8 backdrop-blur-2xl bg-black/80"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="w-full h-full md:h-[90vh] max-w-6xl bg-[#080808] border-x md:border border-white/10 md:rounded-[3rem] overflow-hidden shadow-2xl relative flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:rotate-90 transition-all duration-500"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

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
              className="text-4xl md:text-6xl font-bold text-white tracking-tighter"
            >
              {project.title}
            </motion.h2>
          </div>
        </div>

        {/* Right: Content Section */}
        <div className="lg:w-2/5 p-8 lg:p-14 overflow-y-auto lg:max-h-[90vh] space-y-10 custom-scrollbar bg-surface-container/30 relative z-10 overscroll-contain">
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
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
                  <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-none mb-6">
                    {project.title.split(' ').map((word, idx) => (
                      <span key={idx} className="inline-block mr-3 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500" style={{ transitionDelay: `${idx * 50 + 200}ms` }}>
                        {word}
                      </span>
                    ))}
                  </h3>

                  <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-500 translate-y-4 group-hover:translate-y-0">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-8 py-4 bg-white text-black rounded-2xl text-xs font-black hover:bg-primary-container hover:text-white transition-all active:scale-95 flex items-center gap-2"
                    >
                      VIEW DETAILS
                      <span className="material-symbols-outlined text-sm">open_in_full</span>
                    </button>
                    {/* <div className="flex gap-2">
                      {project.stack.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] text-white/40 font-bold backdrop-blur-sm">
                          {tech[0]}
                        </span>
                      ))}
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailsModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
