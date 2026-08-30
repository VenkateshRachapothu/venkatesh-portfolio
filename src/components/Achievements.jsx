import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Sparkles } from 'lucide-react';

const ACHIEVEMENTS = [
  {
    title: 'NPTEL Certification Excellence',
    text: 'Secured 84% in the NPTEL Introduction to Internet of Things (IoT) course.',
    badge: '84% Score',
    icon: Award,
  },
  {
    title: 'Academic Performance',
    text: 'Consistently maintained a 9+ CGPA across the first six semesters of the B.Tech program.',
    badge: '9+ CGPA',
    icon: Trophy,
  },
];

export const Achievements = () => {
  return (
    <section className="py-16 border-t border-slate-800/40">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Key Highlights
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Achievements
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto" />
        </div>

        {/* 2 Clean Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {ACHIEVEMENTS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-900 text-cyan-400 border border-cyan-500/20 mb-2">
                      <Sparkles className="w-3 h-3" />
                      <span>{item.badge}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
