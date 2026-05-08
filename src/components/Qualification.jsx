"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const education = [
  {
    title: 'B.A in Islamic Studies',
    subtitle: 'University of Chittagong',
    year: '2021-2025',
  },
  {
    title: 'HSC/Alim',
    subtitle: 'Sonahajra Mufiziya Fazil (Degree) Madrasah',
    year: '2020',
  },
  {
    title: 'SSC/Dakhil',
    subtitle: 'Nawabganj Dakhil Madrasah',
    year: '2018',
  },
];

const experience = [
  {
    title: 'Front-End Developer',
    subtitle: 'Freelance / Projects',
    date: '2023 - Present',
  },
  {
    title: 'Web Design Intern',
    subtitle: 'Tech Solutions',
    date: '2022 - 2023',
  },
];

const Qualification = () => {
  const [activeTab, setActiveTab] = useState('education');

  const currentData = activeTab === 'education' ? education : experience;

  return (
    <section id="qualification" className="max-w-container-max mx-auto px-8 py-section-gap relative">
      <div className="flex flex-col gap-stack-sm mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Qualification</h2>
        <p className="text-sm uppercase tracking-[0.2em] text-on-surface-variant font-medium">My personal journey</p>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Tabs */}
        <div className="flex justify-center gap-8 md:gap-16 mb-16">
          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-3 transition-all duration-300 ${activeTab === 'education' ? 'text-primary-container scale-110' : 'text-on-surface-variant opacity-50 hover:opacity-100'}`}
          >
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: activeTab === 'education' ? "'FILL' 1" : "'FILL' 0" }}>school</span>
            <span className="text-lg font-bold">Education</span>
          </button>

          <button
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-3 transition-all duration-300 ${activeTab === 'experience' ? 'text-primary-container scale-110' : 'text-on-surface-variant opacity-50 hover:opacity-100'}`}
          >
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: activeTab === 'experience' ? "'FILL' 1" : "'FILL' 0" }}>work</span>
            <span className="text-lg font-bold">Experience</span>
          </button>
        </div>

        {/* Timeline Content */}
        <div className="relative">
          {/* Vertical Center Line - Hidden on small mobile, visible from md up */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-container/50 via-white/10 to-transparent"></div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-12 md:space-y-16"
            >
              {currentData.map((item, index) => (
                <div key={index} className={`relative flex items-center w-full md:justify-between ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Dot on line */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary-container z-10 shadow-[0_0_15px_rgba(75,142,255,0.5)]"></div>

                  {/* Content Box */}
                  <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <motion.div
                      initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.8 }}
                      viewport={{ once: true }}
                      className="glass-card p-6 rounded-2xl border border-white/10 hover:border-primary-container/30 transition-all group"
                    >
                      <h4 className="text-xl font-bold text-white group-hover:text-primary-container transition-colors">{item.title}</h4>
                      <p className="text-sm text-on-surface-variant mt-1">{item.subtitle}</p>
                      <div className={`flex items-center gap-2 text-xs text-on-surface-variant opacity-60 mt-4 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                        <span className="material-symbols-outlined text-sm">calendar_month</span>
                        {item.year || item.date}
                      </div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
