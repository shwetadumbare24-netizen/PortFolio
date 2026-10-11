import { ArrowUp, Mail, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalProfile } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#05060a] border-t border-white/5 py-12 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/5">
          {/* Logo & Tagline */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-purple-950/60 border border-purple-500/30 flex items-center justify-center">
                <Code2 className="w-3.5 h-3.5 text-purple-400" />
              </div>
              <span className="font-mono text-lg font-bold text-slate-100">
                SHWETA<span className="text-purple-400">.</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm">
              Crafting reliable software and exploring intelligent AI applications. B.Tech AI &amp; ML, Pune.
            </p>
          </div>

          {/* Navigation Shortcuts */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-400">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-purple-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalProfile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/5"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalProfile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-cyan-400 hover:text-cyan-300 transition-colors border border-white/5"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalProfile.email}`}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-purple-400 hover:text-purple-300 transition-colors border border-white/5"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 transition-colors cursor-pointer"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <div>
            &copy; {currentYear} {personalProfile.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-[11px] text-slate-400 font-mono">
            <span>Built with React, TypeScript &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
