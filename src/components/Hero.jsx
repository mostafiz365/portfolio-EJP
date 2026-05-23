"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import HeroImg from '@/assets/images/my-photo-2.png';
import Image from 'next/image';

const Hero = () => {
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const ctaRef = useRef(null);
  const visualRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Clean reveal for headline
    tl.fromTo(headlineRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2 }
    )
      .fromTo(subtextRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 },
        "-=0.8"
      )
      .fromTo(ctaRef.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 },
        "-=0.8"
      )
      .fromTo(visualRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5 },
        "-=1.2"
      )
      .fromTo(cardsRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, stagger: 0.1, ease: "back.out(2)" },
        "-=1"
      );

    // Parallax effect on mouse move
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 30;
      const yPos = (clientY / window.innerHeight - 0.5) * 30;

      gsap.to(visualRef.current, {
        x: xPos,
        y: yPos,
        duration: 2,
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative overflow-hidden pt-32 md:pt-44 pb-20">
      {/* Hero Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] hero-gradient pointer-events-none z-0"></div>

      <div className="max-w-container-max mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="flex flex-col space-y-stack-md">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-label-sm text-on-surface-variant uppercase tracking-widest">Available for hire</span>
            </motion.div>

            <h1 ref={headlineRef} className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tighter opacity-0">
              Hi! I'm Mostafizur Rahman, I'm <span className='text-blue-400'>Front-End Developer.</span>
            </h1>

            <p ref={subtextRef} className="text-lg text-on-surface-variant max-w-xl leading-relaxed opacity-0">
              I'm a passionate Junior Front-End Developer dedicated to crafting clean, responsive, and user-friendly web experiences. Focused on building modern web applications with React and Next.js.
            </p>

            <div ref={ctaRef} className="flex flex-wrap items-center gap-5 pt-4">
              {/* Download Resume Button */}
              <a
                href="#"
                download
                className="px-8 py-4 bg-primary-container text-on-primary-container rounded-full text-label-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all active:scale-95 shadow-[0_0_30px_rgba(0,122,255,0.3)] group overflow-hidden relative border-glow opacity-0"
              >
                <span className="relative z-10">Download Resume</span>
                <span className="material-symbols-outlined text-sm relative z-10 group-hover:translate-y-1 transition-transform">download</span>
              </a>

              {/* Social Links - Individual children for GSAP stagger */}
              <a
                href="https://www.linkedin.com/in/mostafiz365"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white/5 border border-white/10 text-white rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/10 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,122,255,0.2)] transition-all active:scale-95 group opacity-0"
                title="LinkedIn"
              >
                <img
                  src="https://skillicons.dev/icons?i=linkedin"
                  alt="LinkedIn"
                  className="w-6 h-6 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </a>
              <a
                href="https://github.com/mostafiz365"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white/5 border border-white/10 text-white rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/10 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,122,255,0.2)] transition-all active:scale-95 group opacity-0"
                title="GitHub"
              >
                <img
                  src="https://skillicons.dev/icons?i=github"
                  alt="GitHub"
                  className="w-6 h-6 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </a>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div ref={visualRef} className="relative w-[280px] h-[330px] md:w-[380px] md:h-[430px]">
              <div className="absolute inset-0 rounded-[3rem] border-4 border-white/5 overflow-hidden shadow-2xl rotate-3 group hover:rotate-0 transition-transform duration-700">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/20 to-transparent z-10"></div>
                <Image
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
                  alt="Mostafizur Rahman"
                  src={HeroImg}
                  width={500}
                  height={550}
                />
              </div>
              <div className="absolute -inset-4 border border-white/10 rounded-[2.5rem] -z-10 animate-pulse"></div>

              {/* Floating Glass Cards */}
              {[
                { icon: 'code', title: '200+', sub: 'Hours of Code', class: '-top-4 -left-12' },
                { icon: 'layers', title: '10+', sub: 'Projects Build', class: 'bottom-1 -left-12' },
                // { icon: 'terminal', title: '10+', sub: 'Tools Mastered', class: 'bottom-20 -right-20' }
              ].map((card, i) => (
                <div
                  key={i}
                  ref={el => cardsRef.current[i] = el}
                  className={`absolute ${card.class} glass-card p-4 rounded-2xl border border-white/10 shadow-lg opacity-0 z-20 hover:border-primary-container hover:shadow-[0_0_20px_rgba(0,122,255,0.2)] transition-all`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary-container">
                      <span className="material-symbols-outlined">{card.icon}</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{card.title}</div>
                      <div className="text-[10px] text-on-surface-variant uppercase font-medium">{card.sub}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
