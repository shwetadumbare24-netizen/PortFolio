import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles, FileDown, Mail, ArrowRight, Code, Brain, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalProfile } from '../data/portfolioData';
import DeveloperVisual from './DeveloperVisual';

interface HeroProps {
  onOpenResumeModal: () => void;
}

const rotatingRoles = [
  'Software Developer',
  'Python & Backend Engineer',
  'AI & ML Engineering Student',
  'LangChain & RAG Builder',
  'React & Full-Stack Creator',
];

export default function Hero({ onOpenResumeModal }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = rotatingRoles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % rotatingRoles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

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
      {/* Background Animated Gradient Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
          y: [0, 25, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-600/15 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Pitch */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Small introduction badge & Availability status */}
            <div className="flex flex-wrap items-center gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide uppercase bg-purple-500/10 border border-purple-500/30 text-purple-300 shadow-sm shadow-purple-900/20"
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-spin" style={{ animationDuration: '6s' }} />
                <span>HELLO, I'M SHWETALI DUMBARE</span>
              </motion.div>

              {personalProfile.isAvailable && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 shadow-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{personalProfile.availabilityStatus}</span>
                </motion.div>
              )}
            </div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]"
            >
              Building Software.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-cyan-300">
                Exploring AI.
              </span>{' '}
              Solving Real Problems.
            </motion.h1>

            {/* Headline Subtitle / Dynamic Typewriter Role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-xl font-mono text-purple-300/90 flex items-center gap-2.5 h-8"
            >
              <span className="text-cyan-400 font-bold">&gt;</span>
              <span className="text-white font-semibold">{displayedText}</span>
              <span className="w-2 h-5 bg-purple-400 inline-block animate-pulse" />
            </motion.div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl font-normal"
            >
              {personalProfile.shortBio}
            </motion.p>

            {/* Location & Quick Meta */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4 text-xs sm:text-sm text-slate-400 pt-1"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>{personalProfile.location}</span>
              </div>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300">B.Tech AI &amp; ML (Pune)</span>
            </motion.div>

            {/* Action Buttons with Hover Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center gap-3 pt-3"
            >
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                onClick={scrollToProjects}
                className="group px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 shadow-xl shadow-purple-900/30 transition-all border border-purple-400/30 cursor-pointer flex items-center gap-2"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                onClick={scrollToContact}
                className="px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/40 transition-all cursor-pointer flex items-center gap-2 shadow-md"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenResumeModal}
                className="px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-white/10 transition-all hover:border-cyan-400/40 cursor-pointer flex items-center gap-2 shadow-md"
                title="Download Resume PDF"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </motion.button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4 pt-4 border-t border-white/5"
            >
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Connect:</span>
              <div className="flex items-center gap-3">
                <motion.a
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={personalProfile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-purple-500/40 transition-colors shadow-sm"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={personalProfile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-cyan-400 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/40 transition-colors shadow-sm"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </motion.a>
              </div>

              {/* Quick floating pill */}
              <div className="hidden sm:flex items-center gap-2 ml-auto text-[11px] font-mono text-slate-400 bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/5">
                <Terminal className="w-3 h-3 text-purple-400" />
                <span>Python 3.12 • React 19 • FastAPI</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Code Terminal & Developer Visual with Floating Tech Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            {/* Floating Tech Badges */}
            <motion.div
              animate={{ y: [-6, 6, -6], rotate: [-2, 2, -2] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-5 -left-5 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0e111a]/95 border border-purple-500/40 shadow-xl shadow-purple-950/40 backdrop-blur-md"
            >
              <Brain className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-mono font-semibold text-purple-200">AI / RAG Pipeline</span>
            </motion.div>

            <motion.div
              animate={{ y: [6, -6, 6], rotate: [2, -2, 2] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-5 -right-3 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0e111a]/95 border border-cyan-500/40 shadow-xl shadow-cyan-950/40 backdrop-blur-md"
            >
              <Code className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono font-semibold text-cyan-200">Full-Stack Python &amp; React</span>
            </motion.div>

            <DeveloperVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
