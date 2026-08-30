import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Clock } from 'lucide-react';

const EXPERIENCES = [
  {
    organization: 'Infosys Springboard',
    role: 'Backend Developer Intern',
    period: 'Jul 2026 – Present',
    status: 'In Progress',
    statusType: 'in-progress',
    description:
      'Working on an Enterprise Workflow Automation Platform focused on AI-agent coordination, multi-step workflows, decision automation, FastAPI, LangGraph, and LLM-based systems.',
    technologies: ['Python', 'FastAPI', 'LangGraph', 'LLMs', 'AI Agents'],
  },
  {
    organization: 'Huebits Tech Pvt. Ltd.',
    role: 'Team Lead — AI Project',
    period: 'May 2026 – Jul 2026',
    project: 'Smart Interview Coach',
    status: 'Completed',
    statusType: 'completed',
    description:
      'Worked on Smart Interview Coach, an AI-powered mock interview platform that analyzes resumes, generates role-based interview questions, and provides AI-driven feedback.',
    technologies: ['Python', 'React.js', 'FastAPI', 'LLMs', 'AI'],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 border-t border-slate-800/40">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Work Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional journey
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto" />
        </div>

        {/* Timeline List */}
        <div className="max-w-4xl mx-auto space-y-8">
          {EXPERIENCES.map((exp, index) => {
            const isInProgress = exp.statusType === 'in-progress';
            return (
              <motion.div
                key={exp.organization + exp.role}
                className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {/* Status Indicator Bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                    isInProgress
                      ? 'from-cyan-400 to-blue-500'
                      : 'from-emerald-400 to-teal-500'
                  }`}
                />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                          isInProgress
                            ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                            : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                        }`}
                      >
                        {isInProgress ? (
                          <Clock className="w-3.5 h-3.5 animate-pulse" />
                        ) : (
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        )}
                        <span>{exp.status}</span>
                      </span>
                    </div>

                    <p className="text-base font-medium text-cyan-400 mt-1 flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.organization}</span>
                      {exp.project && (
                        <span className="text-slate-400 font-normal">
                          • {exp.project}
                        </span>
                      )}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 self-start sm:self-auto">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-base leading-relaxed mb-6 font-normal">
                  "{exp.description}"
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/40">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
