import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, ArrowUpRight, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, CodechefIcon } from './Icons';

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/venkatesh-rachapothu',
    handle: 'in/venkatesh-rachapothu',
    icon: LinkedinIcon,
    color: 'hover:text-blue-400 hover:border-blue-500/40',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/VenkateshRachapothu',
    handle: 'VenkateshRachapothu',
    icon: GithubIcon,
    color: 'hover:text-cyan-400 hover:border-cyan-500/40',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/VenkateshRachapothu/',
    handle: 'u/VenkateshRachapothu',
    icon: LeetcodeIcon,
    color: 'hover:text-amber-400 hover:border-amber-500/40',
  },
  {
    name: 'CodeChef',
    url: 'https://www.codechef.com/users/venkatesh42a2',
    handle: 'venkatesh42a2',
    icon: CodechefIcon,
    color: 'hover:text-amber-600 hover:border-amber-600/40',
  },
];

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = 'venkateshrachapothu9@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 border-t border-slate-800/40">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's build something meaningful.
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto" />
        </div>

        {/* Main Contact Container */}
        <motion.div
          className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800/80 max-w-4xl mx-auto text-center shadow-xl space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-normal">
            I'm open to opportunities, internships, collaborations, and conversations around Python, AI, Machine Learning, and Generative AI.
          </p>

          {/* Email Action Area */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2.5 px-7 py-4 text-base font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 rounded-xl hover:from-cyan-300 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/25 active:scale-95 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
            >
              <Send className="w-5 h-5" />
              <span>Send Me an Email</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-5 py-4 text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700 rounded-xl hover:bg-slate-800 hover:text-white transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
              aria-label="Copy email address to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-cyan-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          <p className="text-sm text-slate-400 font-mono">
            {email}
          </p>

          {/* Social Links Cards Grid */}
          <div className="pt-8 border-t border-slate-800/60">
            <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-6">
              Connect Across Developer Platforms
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SOCIAL_LINKS.map((platform) => {
                const IconComponent = platform.icon;
                return (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`glass-card p-4 rounded-xl border border-slate-800/80 flex items-center justify-between text-left transition-all duration-200 ${platform.color} group focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">
                          {platform.name}
                        </p>
                        <p className="text-xs text-slate-400 truncate max-w-[120px]">
                          {platform.handle}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
