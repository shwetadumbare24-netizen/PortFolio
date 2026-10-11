import { Calendar, MapPin, CheckCircle2, AlertCircle, Edit3 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-[#08090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-left max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase bg-purple-500/10 border border-purple-500/20 text-purple-300 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience &amp; Internships
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            Professional internships, technical training, and hands-on system development milestones.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experienceData.map((item) => (
            <div key={item.id} className="relative group text-left">
              {/* Timeline Node Indicator */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#08090d] border-2 border-purple-500 group-hover:border-cyan-400 flex items-center justify-center transition-colors">
                <div className="w-2 h-2 rounded-full bg-purple-400 group-hover:bg-cyan-400 transition-colors" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0e111a]/90 border border-white/10 hover:border-purple-500/30 transition-all duration-300 shadow-xl shadow-black/20">
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

                {/* Technologies used in this role */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="text-xs font-mono text-slate-400 mr-1">Technologies:</span>
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-xs font-mono rounded-md bg-white/5 border border-white/5 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Experience Customization */}
        <div className="mt-14 p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 flex items-start sm:items-center gap-3 text-xs text-slate-300">
          <AlertCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5 sm:mt-0" />
          <p>
            Experience entries are modularly defined in <code className="text-purple-300 bg-black/40 px-1 py-0.5 rounded">src/data/portfolioData.ts</code>. Simply update company names, dates, or add verified internship certificates to customize.
          </p>
        </div>
      </div>
    </section>
  );
}
