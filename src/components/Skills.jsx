import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Brain, Server, Layout } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: 'Programming',
    icon: Terminal,
    color: 'from-blue-500 to-cyan-400',
    iconColor: 'text-cyan-400',
    skills: ['Python', 'SQL'],
  },
  {
    title: 'AI & ML',
    icon: Brain,
    color: 'from-cyan-400 to-sky-500',
    iconColor: 'text-sky-400',
    skills: ['Machine Learning', 'LLMs', 'Generative AI', 'Prompt Engineering'],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'from-sky-500 to-blue-600',
    iconColor: 'text-blue-400',
    skills: ['FastAPI', 'REST APIs'],
  },
  {
    title: 'Frontend / Tools',
    icon: Layout,
    color: 'from-blue-400 to-cyan-300',
    iconColor: 'text-cyan-300',
    skills: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 border-t border-slate-800/40">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Skills & Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technologies I work with
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300 group flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div>
                  {/* Category Title */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-xl bg-slate-900 border border-slate-800 ${category.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-2 rounded-xl text-sm font-medium bg-slate-900/90 text-slate-200 border border-slate-800 group-hover:border-slate-700 hover:text-cyan-400 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/40">
                  <div className={`h-1 w-full bg-gradient-to-r ${category.color} rounded-full opacity-30 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
