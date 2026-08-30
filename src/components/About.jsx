import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Brain, GraduationCap } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 border-t border-slate-800/40">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Building practical solutions with AI and software.
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto" />
        </div>

        {/* Content Box */}
        <motion.div
          className="glass-panel p-8 md:p-12 rounded-3xl border border-slate-800/80 max-w-4xl mx-auto shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed text-center font-normal">
            I am a final-year Computer Science & Engineering student specializing in Artificial Intelligence and Machine Learning. I enjoy building practical applications using Python, modern backend technologies, APIs, and Generative AI.
          </p>

          {/* Compact Quick Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 pt-8 border-t border-slate-800/60">
            
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase font-semibold">Location</p>
                <p className="text-sm font-semibold text-white">Andhra Pradesh, India</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase font-semibold">Role</p>
                <p className="text-sm font-semibold text-white">Python Developer</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase font-semibold">Focus</p>
                <p className="text-sm font-semibold text-white">AI & Generative AI</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase font-semibold">Academic CGPA</p>
                <p className="text-sm font-semibold text-white">9.04 / 10</p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
