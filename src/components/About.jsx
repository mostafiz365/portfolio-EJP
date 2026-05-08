"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import HeroImg from '@/assets/images/my-photo-2.png';

const About = () => {
  return (
    <section id="about" className="max-w-container-max mx-auto px-8 py-section-gap">
      <div className="flex flex-col gap-stack-sm mb-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">About  Me</h2>
        {/* <p className="text-sm uppercase tracking-[0.2em] text-on-surface-variant font-medium">My Introduction</p> */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-[40px] overflow-hidden border-2 border-white/5 group shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-primary-container/10 z-10 group-hover:bg-transparent transition-all duration-700"></div>
            <Image
              src={HeroImg}
              alt="Mostafizur Rahman"
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 filter brightness-90 contrast-110 group-hover:brightness-110"
              width={500}
              height={500}
            />
            <div className="absolute inset-0 border-[12px] border-white/5 rounded-[40px] z-20 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700 z-10"></div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <div className="flex flex-col space-y-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: 'history_edu', title: 'Experience', sub: '1+ Year Learning' },
              { icon: 'code_blocks', title: 'Projects', sub: '12+ Completed' },
              { icon: 'terminal', title: 'Stack', sub: '10+ Technologies' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                viewport={{ once: true }}
                className="glass-card p-5 rounded-2xl border border-white/10 flex flex-col items-center text-center group hover:border-primary-container/50 transition-all cursor-default"
              >
                <span className="material-symbols-outlined text-primary-container mb-2 group-hover:scale-110 group-hover:rotate-6 transition-transform">{stat.icon}</span>
                <h4 className="text-sm font-bold text-white">{stat.title}</h4>
                <p className="text-[10px] text-on-surface-variant uppercase mt-1">{stat.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-lg text-on-surface-variant leading-relaxed"
          >
            I’m a passionate and self-motivated web developer who enjoys building modern, responsive, and user-friendly web applications. My primary focus is frontend development, where I work with technologies like React and JavaScript to create clean and interactive user experiences. At the same time, I’m continuously learning backend and full-stack development using Node.js, Express.js, and MongoDB.
            I enjoy solving problems, writing clean code, and exploring new technologies that help me grow as a developer. Beyond programming, I love traveling, reading books, playing sports, and learning new things. I’m a disciplined, hardworking, and ambitious person who believes in continuous improvement and consistency. My goal is to become a skilled full-stack developer and contribute to meaningful real-world projects.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button className="px-8 py-4 bg-primary-container text-on-primary-container rounded-full text-label-sm font-bold flex items-center gap-3 hover:opacity-90 transition-all active:scale-95 shadow-[0_0_20px_rgba(0,122,255,0.2)] group">
              Download Resume
              <span className="material-symbols-outlined text-lg group-hover:translate-y-1 transition-transform">description</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
