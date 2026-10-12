import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2, Edit3 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-[#08090d] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-left max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase bg-purple-500/10 border border-purple-500/20 text-purple-300 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience &amp; Internships
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            Professional internships, technical training, and hands-on system development milestones.
          </p>
        </motion.div>

        {/* Vertical Timeline with Animated Nodes */}
        <div className="relative border-l-2 border-purple-500/20 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group text-left"
            >
              {/* Timeline Node Indicator */}
              <div className="absolute -left-[33px] sm:-left-[49px] top-1.5 w-6 h-6 rounded-full bg-[#08090d] border-2 border-purple-500 group-hover:border-cyan-400 flex items-center justify-center transition-colors shadow-lg shadow-purple-950/50">
                <motion.div 
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-2 h-2 rounded-full bg-purple-400 group-hover:bg-cyan-400 transition-colors" 
                />
              </div>

              {/* Experience Card */}
              <motion.div
                whileHover={{ y: -3 }}
                className="p-6 sm:p-8 rounded-2xl bg-[#0e111a]/90 border border-white/10 hover:border-purple-500/30 transition-all duration-300 shadow-xl shadow-black/20"
              >
                {/* Meta details bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-white/5">
                  <div>
                    <span className="text-xs font-mono font-semibold text-purple-300 uppercase tracking-wide">
                      {item.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm font-semibold text-slate-200">
                        {item.company}
                      </span>
                      {item.isPlaceholder && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                          <Edit3 className="w-2.5 h-2.5" /> Editable Placeholder
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-400 font-mono">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Key Achievements Bullet points */}
                <div className="space-y-2.5 mb-6">
                  {item.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* Tech stack pills */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5">
                  <span className="text-xs font-mono text-slate-400 mr-2">Tools:</span>
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 text-purple-200 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
