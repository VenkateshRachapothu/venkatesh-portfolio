import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-slate-800/60 bg-slate-950/80">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <p className="text-sm font-semibold text-slate-300">
            © {currentYear} Venkatesh Rachapothu
          </p>
          <p className="text-xs text-slate-400 mt-0.5">
            Python • AI & ML • Generative AI
          </p>
        </div>

        <p className="text-xs text-slate-400">
          Designed & Built with React, Tailwind CSS & Framer Motion
        </p>
      </div>
    </footer>
  );
};
