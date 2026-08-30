import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, CodechefIcon } from './Icons';

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 flex items-center min-h-[90vh] overflow-hidden"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/10 to-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Desktop 2-column layout: Left ~55-60% Text, Right ~40-45% Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: TEXT CONTENT */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* 1. Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wide uppercase shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span>Available for Opportunities</span>
            </div>

            {/* 2. Greeting & Name */}
            <div className="space-y-2">
              <p className="text-slate-400 text-lg md:text-xl font-medium">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Venkatesh{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                  Rachapothu
                </span>
              </h1>
            </div>

            {/* 3. Professional Title */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/50 border border-slate-700/60 text-slate-200 text-base sm:text-lg font-semibold tracking-wide">
              <Code2 className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>Python Developer • AI & ML • Generative AI</span>
            </div>

            {/* 4. Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Final-year Computer Science & Engineering student focused on building AI-powered applications, intelligent backend systems, and LLM-based solutions.
            </p>

            {/* 5. Action CTA Buttons with clear gap */}
            <div className="flex flex-wrap items-center gap-5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-base font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 rounded-xl hover:from-cyan-300 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/25 active:scale-95 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
              >
                <span>View Projects</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="/Venkatesh_Rachapothu_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                download="Venkatesh_Rachapothu_Resume.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-base font-semibold text-slate-200 bg-slate-900/90 border border-slate-700/80 rounded-xl hover:bg-slate-800 hover:text-white hover:border-slate-600 transition-all duration-200 shadow-md active:scale-95 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
              >
                <Download className="w-5 h-5 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* 7. Social Links */}
            <div className="flex items-center gap-4 pt-4 text-slate-400 border-t border-slate-800/60 w-full max-w-md">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">Connect:</span>
              <a
                href="https://github.com/VenkateshRachapothu"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/venkatesh-rachapothu"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="https://leetcode.com/u/VenkateshRachapothu/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
                aria-label="LeetCode Profile"
              >
                <LeetcodeIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.codechef.com/users/venkatesh42a2"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
                aria-label="CodeChef Profile"
              >
                <CodechefIcon className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: CIRCULAR PROFILE PHOTO */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative group p-3">
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-sky-400 opacity-40 group-hover:opacity-75 blur-md transition duration-500" />
              
              {/* Secondary thin decorative ring */}
              <div className="absolute inset-0 rounded-full border border-cyan-400/30 pointer-events-none" />

              {/* Photo Container - PERFECT CIRCLE */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-84 lg:h-84 rounded-full overflow-hidden border-2 border-slate-700/80 bg-slate-900 shadow-2xl shadow-cyan-950/40">
                <img
                  src="/profile.jpg"
                  alt="Venkatesh Rachapothu"
                  loading="eager"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-4 -left-2 glass-panel px-3.5 py-2 rounded-xl border border-cyan-500/30 flex items-center gap-2 shadow-lg">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-semibold text-slate-200">AI & GenAI Engineer</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
