import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { featuredProjects } from '../data/portfolioData';
import type { Project } from '../types';
import ProjectMockup from './ProjectMockup';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'AI & GenAI', 'Full-Stack', 'Python & Data', 'Frontend'];

  const filteredProjects = activeCategory === 'All'
    ? featuredProjects
    : featuredProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative bg-[#090b12] border-t border-white/5 overflow-hidden">
      {/* Ambient glow animatics */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.06, 0.12, 0.06],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-700/10 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase bg-purple-500/10 border border-purple-500/20 text-purple-300 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              <span>Engineered Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
              Real-world systems, intelligent AI pipelines, and responsive web applications.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none relative">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-4 py-2 text-xs font-medium rounded-xl whitespace-nowrap transition-all cursor-pointer z-10 ${
                    isActive
                      ? 'text-white shadow-md'
                      : 'bg-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectFilterPill"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl -z-10 shadow-lg shadow-purple-900/30 border border-purple-400/30"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span>{category}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const hasDirectRepo = project.githubUrl && (
                project.githubUrl.includes('RAG-Customer-Support') ||
                project.githubUrl.includes('Student-Management')
              );

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group rounded-2xl bg-[#0e111a] border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl shadow-black/30"
                >
                  <div>
                    {/* Aspect Ratio Preview with Bespoke UI Mockup */}
                    <div className="relative overflow-hidden cursor-pointer" onClick={() => setSelectedProject(project)}>
                      <ProjectMockup project={project} />

                      {/* Quick view overlay button */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                        <motion.span 
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-600 text-white text-xs font-medium shadow-lg"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Inspect Architecture</span>
                        </motion.span>
                      </div>

                      {/* Category pill on top right */}
                      <div className="absolute top-3 right-3 z-10 pointer-events-none">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-[#08090d]/90 text-purple-300 border border-white/10 backdrop-blur-md">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 text-left">
                      {/* Title */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 
                          onClick={() => setSelectedProject(project)}
                          className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors cursor-pointer"
                        >
                          {project.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 mb-4">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-400 bg-white/5">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="px-6 py-4 bg-[#090b12] border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                          title="View Repository"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>{hasDirectRepo ? 'Code' : 'GitHub'}</span>
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs font-mono text-purple-400 hover:text-purple-300 transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Demo</span>
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-medium text-slate-400 hover:text-purple-300 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
