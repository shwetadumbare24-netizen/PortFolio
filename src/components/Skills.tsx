import { useState } from 'react';
import { 
  Terminal, 
  Layout, 
  Server, 
  LineChart, 
  BrainCircuit, 
  Database, 
  Search,
  CheckCircle,
  Cpu
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Map category names to icons
  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case 'Programming':
        return <Terminal className="w-4 h-4 text-purple-400" />;
      case 'Frontend':
        return <Layout className="w-4 h-4 text-cyan-400" />;
      case 'Backend & APIs':
        return <Server className="w-4 h-4 text-indigo-400" />;
      case 'Data Science':
        return <LineChart className="w-4 h-4 text-emerald-400" />;
      case 'AI & Generative AI':
        return <BrainCircuit className="w-4 h-4 text-fuchsia-400" />;
      case 'Databases & Tools':
        return <Database className="w-4 h-4 text-amber-400" />;
      default:
        return <Cpu className="w-4 h-4 text-purple-400" />;
    }
  };

  const categories = ['All', ...skillCategories.map((c) => c.name)];

  // Filter skills based on selected category and search input
  const filteredCategories = skillCategories
    .filter((cat) => selectedCategory === 'All' || cat.name === selectedCategory)
    .map((cat) => ({
      ...cat,
      skills: cat.skills.filter(
        (skill) =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (skill.description && skill.description.toLowerCase().includes(searchQuery.toLowerCase()))
      ),
    }))
    .filter((cat) => cat.skills.length > 0);

  const totalSkillsCount = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="skills" className="py-24 relative bg-[#08090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase bg-purple-500/10 border border-purple-500/20 text-purple-300 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span>Technical Arsenal</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technical Skills
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
              Organized domain competencies with verified project applications. Zero fabricated percentage bars.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skill (e.g. Python, RAG)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
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

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.name}
              className="p-6 rounded-2xl bg-[#0e111a]/90 border border-white/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between group shadow-lg shadow-black/20"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-purple-500/40 transition-colors">
                      {getCategoryIcon(category.name)}
                    </div>
                    <h3 className="text-base font-semibold text-white tracking-wide">
                      {category.name}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-400 px-2 py-0.5 rounded bg-white/5">
                    {category.skills.length} skills
                  </span>
                </div>

                {/* Skills Badges / Detailed List */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-white/[0.03] hover:bg-purple-500/[0.06] border border-white/5 hover:border-purple-500/20 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-200 group-hover:text-white">
                          {skill.name}
                        </span>
                        <CheckCircle className="w-3.5 h-3.5 text-purple-400/80" />
                      </div>
                      {skill.description && (
                        <p className="text-xs text-slate-400 mt-1 leading-normal">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub-footer inside card */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Verified in code</span>
                <span className="text-purple-400">Production ready</span>
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 text-slate-400">
            <p className="text-sm">No skills found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-3 text-xs text-purple-400 underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-12 p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Total Core Technologies: <strong className="text-slate-200">{totalSkillsCount}</strong></span>
          </div>
          <div className="text-center sm:text-right text-slate-400">
            Skills are backed by project code repositories and academic coursework.
          </div>
        </div>
      </div>
    </section>
  );
}
