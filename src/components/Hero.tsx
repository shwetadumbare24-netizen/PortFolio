import { ArrowDown, MapPin, Sparkles, FileDown, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalProfile } from '../data/portfolioData';
import DeveloperVisual from './DeveloperVisual';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export default function Hero({ onOpenResumeModal }: HeroProps) {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Grid & Ambient Lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Pitch */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Small introduction badge & Availability status */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase bg-purple-500/10 border border-purple-500/25 text-purple-300">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>HELLO, I'M SHWETALI DUMBARE</span>
              </div>

              {personalProfile.isAvailable && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{personalProfile.availabilityStatus}</span>
                </div>
              )}
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Building Software.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-cyan-300">
                Exploring AI.
              </span>{' '}
              Solving Real Problems.
            </h1>

            {/* Headline Subtitle / Role Badge */}
            <div className="text-sm sm:text-base font-mono text-purple-300/90 flex items-center gap-2">
              <span className="text-slate-400">&gt;</span>
              <span>{personalProfile.headline}</span>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl font-normal">
              {personalProfile.shortBio}
            </p>

            {/* Location & Quick Meta */}
            <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>{personalProfile.location}</span>
              </div>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">B.Tech AI &amp; ML</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-900/30 transition-all border border-purple-400/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                Explore My Work
              </a>

              <a
                href="#contact"
                onClick={scrollToContact}
                className="px-6 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/30 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={onOpenResumeModal}
                className="px-5 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-white/10 transition-all hover:border-cyan-400/40 cursor-pointer flex items-center gap-2"
                title="Download Resume PDF"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href={personalProfile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={personalProfile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                </a>

                <a
                  href={`mailto:${personalProfile.email}`}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                  aria-label="Direct Email"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4 text-purple-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Sophisticated Developer Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <DeveloperVisual />
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="pt-16 pb-4 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-1.5 text-xs text-slate-400 hover:text-purple-300 transition-colors"
            aria-label="Scroll to About section"
          >
            <span className="font-mono text-[11px] tracking-wider uppercase">Scroll to learn more</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-purple-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
