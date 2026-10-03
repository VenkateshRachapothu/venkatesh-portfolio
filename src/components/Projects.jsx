import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Clock, CheckCircle2, Bot, Layers, Sparkles, Check, Workflow } from 'lucide-react';
import { GithubIcon } from './Icons';

const PROJECTS = [
  {
    name: 'Enterprise Workflow Automation Platform',
    status: 'Completed',
    isMain: true,
    description:
      'AI-agent-based workflow automation platform designed to coordinate planning, research, analysis, and decision-making across complex multi-step business workflows.',
    agentConcepts: [
      'Planning Agent',
      'Research Agent',
      'Analysis Agent',
      'Decision Agent',
      'Shared Workflow State',
    ],
    technologies: ['Python', 'FastAPI', 'LangGraph', 'LangChain', 'LLMs', 'AI Agents'],
  },
  {
    name: 'Smart Interview Coach',
    status: 'Completed',
    isMain: false,
    description:
      'AI-powered mock interview platform that analyzes resumes, creates role-based interview questions, and provides intelligent feedback to help candidates improve their interview performance.',
    workflowSteps: [
      '1. Resume Upload',
      '2. Resume Analysis',
      '3. ATS Score',
      '4. Select Interview Role',
      '5. Generate Questions',
      '6. Conduct Mock Interview',
      '7. AI Evaluation',
      '8. Personalized Feedback',
    ],
    technologies: ['React.js', 'FastAPI', 'Python', 'Groq', 'LLM'],
    liveUrl: 'https://smart-interview-coach-final.vercel.app/',
    githubUrl: 'https://github.com/VenkateshRachapothu/smart-interview-coach-final',
  },
  {
    name: 'Personal Portfolio Website',
    status: 'Completed',
    isMain: false,
    description:
      'Responsive personal portfolio website showcasing my skills, experience, projects, education, certifications, and professional links.',
    keyFeatures: [
      'Responsive Design',
      'Resume Showcase',
      'Project Showcase',
      'Skills & Experience',
      'Certifications',
      'Professional Links',
      'Smooth Animations',
    ],
    technologies: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://venkatesh-portfolio-two.vercel.app/',
  },
  {
  name: 'AI-Powered Lost and Found System',
  status: 'Completed',
  isMain: false,
  description:
    'AI-powered platform that helps users report lost and found items, automatically matches related reports using intelligent similarity analysis, and provides match results to help users recover lost belongings.',
  workflowSteps: [
    '1. User Registration / Login',
    '2. Report Lost Item',
    '3. Report Found Item',
    '4. Item Details Analysis',
    '5. AI Similarity Matching',
    '6. Match Score Generation',
    '7. Matching Results',
    '8. Contact / Recovery',
  ],
  technologies: ['React.js', 'FastAPI', 'Python', 'SQLite', 'AI/ML'],
  liveUrl: 'https://ai-powered-lost-and-found-system.vercel.app/',
  githubUrl:
    'https://github.com/VenkateshRachapothu/ai-powered-lost-and-found-system',
},
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 border-t border-slate-800/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Things I've built
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PROJECTS.map((project, index) => {
            const isInProgress = project.status === 'In Progress';
            return (
              <motion.div
                key={project.name}
                className={`glass-panel p-6 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between group relative overflow-hidden h-full ${
                  project.isMain
                    ? 'border-cyan-500/40 shadow-xl shadow-cyan-950/20 bg-gradient-to-b from-slate-900/90 to-slate-950/90'
                    : 'border-slate-800/80 hover:border-cyan-500/30'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Top Accent Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                    project.isMain
                      ? 'from-cyan-400 via-sky-400 to-blue-500'
                      : isInProgress
                      ? 'from-cyan-400 to-blue-500'
                      : 'from-slate-700 to-slate-800 group-hover:from-cyan-400 group-hover:to-blue-500'
                  } transition-all duration-300`}
                />

                <div className="flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Header Row: Title + Status */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div>
                        {project.isMain && (
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-2">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Main Project</span>
                          </div>
                        )}
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                          {project.name}
                        </h3>
                      </div>

                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold shrink-0 ${
                          isInProgress
                            ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                            : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                        }`}
                      >
                        {isInProgress ? (
                          <Clock className="w-3.5 h-3.5 animate-pulse" />
                        ) : (
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        )}
                        <span>{project.status}</span>
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>

                    {/* 1. AI Agent Concepts */}
                    {project.agentConcepts && (
                      <div className="mb-6 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
                          <Bot className="w-4 h-4" />
                          <span>AI Agent Concepts</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.agentConcepts.map((concept) => (
                            <span
                              key={concept}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 border border-slate-700/80"
                            >
                              <Layers className="w-3 h-3 text-cyan-400" />
                              <span>{concept}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 2. Key Features / Workflow Steps (Smart Interview Coach) */}
                    {project.workflowSteps && (
                      <div className="mb-6 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
                          <Workflow className="w-4 h-4" />
                          <span>Key Features & AI Workflow</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.workflowSteps.map((step) => (
                            <div
                              key={step}
                              className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-800/80 text-xs font-medium text-slate-200 border border-slate-700/60"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                              <span className="truncate">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 3. Key Features (Personal Portfolio) */}
                    {project.keyFeatures && (
                      <div className="mb-6 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
                          <Sparkles className="w-4 h-4" />
                          <span>Key Features</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.keyFeatures.map((feat) => (
                            <span
                              key={feat}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 border border-slate-700/60"
                            >
                              <Check className="w-3 h-3 text-cyan-400 shrink-0" />
                              <span>{feat}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer: Tech Stack + Links */}
                <div className="space-y-4 pt-4 border-t border-slate-800/40 mt-auto">
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  {(project.liveUrl || project.githubUrl) && (
                    <div className="flex items-center gap-3 pt-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg hover:from-cyan-300 hover:to-blue-400 transition-all shadow-md active:scale-95 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
                        >
                          <span>Live Project</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700 rounded-lg hover:bg-slate-800 hover:text-white transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
                        >
                          <GithubIcon className="w-4 h-4" />
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
