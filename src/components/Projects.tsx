import { useState } from 'react';
import { ExternalLink, Sparkles, Eye, ArrowUpRight } from 'lucide-react';
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
    <section id="projects" className="py-24 relative bg-[#090b12] border-t border-white/5">
      {/* Ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-700/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase bg-purple-500/10 border border-purple-500/20 text-purple-300 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span>Engineered Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
              Real-world systems, intelligent AI pipelines, and frontend applications. Clear architecture, no fake vanity statistics.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-900/30 border border-purple-400/30'
                      : 'bg-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const hasDirectRepo = project.githubUrl && (
              project.githubUrl.includes('RAG-Customer-Support') ||
              project.githubUrl.includes('Student-Management')
            );

            return (
              <div
                key={project.id}
                className="group rounded-2xl bg-[#0e111a] border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl shadow-black/30 hover:-translate-y-1"
              >
                <div>
                  {/* Aspect Ratio Preview with Bespoke UI Mockup */}
                  <div className="relative overflow-hidden cursor-pointer" onClick={() => setSelectedProject(project)}>
                    <ProjectMockup project={project} />

                    {/* Quick view overlay button */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-600 text-white text-xs font-medium shadow-lg">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Architecture</span>
                      </span>
                    </div>

                    {/* Category pill on top right */}
                    <div className="absolute top-3 right-3 z-10 pointer-events-none">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-[#08090d]/85 text-purple-300 border border-white/10 backdrop-blur-md">
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
                      {project.featured && (
                        <span className="shrink-0 text-[10px] font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5" /> Featured
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-5 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/[0.04] border border-white/5 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/[0.02] text-slate-500">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 py-4 bg-[#0a0c14]/80 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* GitHub Button */}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1.5 text-xs font-mono transition-colors ${
                          hasDirectRepo 
                            ? 'text-purple-300 hover:text-white' 
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                        title={hasDirectRepo ? 'View GitHub Repository' : 'Profile Repository'}
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>{hasDirectRepo ? 'Code Repo' : 'GitHub'}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-70" />
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-slate-500">
                        Local Project
                      </span>
                    )}

                    {/* Live Demo or Deployment status */}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-slate-500" title="Desktop / Local execution application">
                        {project.mockupType === 'analytics' ? 'Desktop App' : 'Local Script'}
                      </span>
                    )}
                  </div>

                  {/* View Details modal trigger */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-medium text-slate-400 hover:text-purple-300 transition-colors cursor-pointer"
                  >
                    Details &rarr;
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Expanded Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
