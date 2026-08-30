import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const CERTIFICATIONS = [
  {
    title: 'Python Essentials 1 & 2',
    organization: 'Cisco Networking Academy',
    badge: 'Certification',
  },
  {
    title: 'Database Management System (Part 1 & 2)',
    organization: 'Infosys Springboard',
    badge: 'Certification',
  },
  {
    title: 'AI & ML Certification',
    organization: 'National Institute of Technology (NIT) Tiruchirappalli',
    badge: 'Certification',
  },
  {
    title: 'Data Analytics Job Simulation',
    organization: 'Deloitte',
    badge: 'Job Simulation',
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 border-t border-slate-800/40">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Certification Details
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300 group flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {cert.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>
              </div>

              <div className="pt-4 border-t border-slate-800/40 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{cert.organization}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
