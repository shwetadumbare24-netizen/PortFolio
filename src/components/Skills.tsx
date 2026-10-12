import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  Layout, 
  Server, 
  LineChart, 
  BrainCircuit, 
  Database, 
  Search,
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

  return (
    <section id="skills" className="py-24 relative bg-[#08090d] border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none"
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
              <span>Technical Arsenal</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technical Skills
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
              Organized domain competencies with verified project applications across Python, AI &amp; Web.
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
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none relative">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-4 py-2 text-xs font-medium rounded-xl whitespace-nowrap transition-all cursor-pointer z-10 ${
                  isActive
                    ? 'text-white shadow-md'
                    : 'bg-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/10 border border-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillCategoryPill"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl -z-10 shadow-lg shadow-purple-900/30 border border-purple-400/40"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span>{category}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Categories Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredCategories.map((category) => (
              <motion.div
                key={category.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl bg-[#0e111a] border border-white/10 hover:border-purple-500/40 p-6 text-left shadow-xl shadow-black/30 transition-all duration-300 group"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getCategoryIcon(category.name)}
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                      {category.name}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">
                    {category.skills.length} skills
                  </span>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 hover:bg-white/[0.04] transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                      {skill.description && (
                        <p className="text-[11px] text-slate-400 mt-1 leading-normal">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
