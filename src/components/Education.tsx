import { GraduationCap, MapPin, Calendar, BookOpen, Award } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative bg-[#090b12] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-12 text-left max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase bg-purple-500/10 border border-purple-500/20 text-purple-300 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            Formal engineering degree with focus on Artificial Intelligence and Machine Learning.
          </p>
        </div>

        {/* Compact, Clean Card */}
        <div className="max-w-4xl rounded-2xl bg-[#0e111a] border border-white/10 hover:border-purple-500/30 transition-all p-6 sm:p-8 text-left shadow-xl shadow-black/20">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-white/5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/20 mb-2">
                  {educationData.degree}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {educationData.field}
                </h3>
                <p className="text-base text-slate-300 mt-1 font-medium">
                  {educationData.institution}
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-400 mt-2">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" />
                  <span>{educationData.location}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:items-end gap-1.5 text-xs font-mono text-slate-400 shrink-0">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-slate-300">{educationData.period}</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {educationData.status}
              </span>
            </div>
          </div>

          {/* Relevant Core Coursework */}
          <div className="pt-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              <BookOpen className="w-4 h-4 text-purple-400" />
              <span>Core Coursework &amp; Foundations</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {educationData.coursework.map((course) => (
                <span
                  key={course}
                  className="px-3 py-1 text-xs rounded-lg bg-white/[0.03] border border-white/5 text-slate-300 hover:text-white hover:border-purple-500/30 transition-colors"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Academic Highlight */}
          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-purple-400" />
              Undergraduate Engineering Program
            </span>
            <span className="font-mono text-slate-500">Pune University Affiliated</span>
          </div>
        </div>
      </div>
    </section>
  );
}
