import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const EDUCATION_ITEMS = [
  {
    degree: 'B.Tech — Computer Science & Engineering',
    specialization: 'Artificial Intelligence & Machine Learning',
    institution: 'Sasi Institute of Technology and Engineering',
    period: '2023 – 2027',
    isBTech: true,
    scoreNum: '9.04',
    scoreLabel: 'CGPA',
    scoreMax: '/ 10',
    location: 'Andhra Pradesh',
  },
  {
    degree: 'Intermediate (Class XII)',
    specialization: 'MPC (Maths, Physics, Chemistry)',
    institution: 'SFS Junior College',
    period: '2021 – 2023',
    isBTech: false,
    score: '92.7%',
    location: 'Andhra Pradesh',
  },
  {
    degree: 'Secondary School (Class X)',
    specialization: 'General Education',
    institution: 'ZPH School, Settipeta',
    period: '2021',
    isBTech: false,
    score: '98.6%',
    location: 'Andhra Pradesh',
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-24 border-t border-slate-800/40">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Academic Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto" />
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {EDUCATION_ITEMS.map((item, index) => (
            <motion.div
              key={item.degree}
              className={`glass-panel p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                item.isBTech
                  ? 'border-cyan-500/40 bg-gradient-to-b from-slate-900/95 to-slate-950/95 shadow-xl shadow-cyan-950/20'
                  : 'border-slate-800/80 hover:border-slate-700'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-xl ${
                      item.isBTech
                        ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                        : 'bg-slate-900 text-slate-400 border border-slate-800'
                    }`}
                  >
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-medium text-slate-400 flex items-center gap-1 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.period}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                  {item.degree}
                </h3>

                {item.specialization && (
                  <p className="text-xs font-semibold text-cyan-400 mb-3">
                    {item.specialization}
                  </p>
                )}

                <p className="text-sm font-medium text-slate-300 mb-4">
                  {item.institution}
                </p>

                {/* Prominent Academic Score Card for B.Tech */}
                {item.isBTech && (
                  <div className="my-4 p-4 rounded-xl bg-slate-900/90 border border-cyan-500/30 flex items-center justify-between shadow-inner">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold text-cyan-400 tracking-tight">
                        {item.scoreNum}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-white uppercase tracking-wider">
                          {item.scoreLabel}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          {item.scoreMax}
                        </span>
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <Award className="w-5 h-5" />
                    </div>
                  </div>
                )}
              </div>

              {/* Footer location & score display for non-BTech */}
              <div className="pt-4 border-t border-slate-800/40 flex items-center justify-between mt-2">
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </span>
                {!item.isBTech && (
                  <span className="text-sm font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-lg border border-cyan-500/20">
                    {item.score}
                  </span>
                )}
                {item.isBTech && (
                  <span className="text-xs font-semibold text-cyan-400">
                    Distinction
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
