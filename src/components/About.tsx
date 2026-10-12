import { motion } from 'framer-motion';
import { GraduationCap, Code2, Sparkles, Terminal, CheckCircle2, Rocket } from 'lucide-react';

export default function About() {
  const principles = [
    'Clean, maintainable software architecture',
    'Practical AI integration over superficial hype',
    'User-centered frontend experiences and responsive UI',
    'Continuous learning through projects and modern dev tools',
  ];

  const highlights = [
    {
      title: 'Academic Background',
      subtitle: 'B.Tech in AI & Machine Learning',
      description: 'Studying at GHRCEM, Pune. Curriculum encompassing machine learning, data structures, algorithms, databases, and applied AI systems.',
      icon: GraduationCap,
      color: 'purple',
    },
    {
      title: 'Software Development',
      subtitle: 'Python, APIs & Frontend',
      description: 'Strong foundation in Python programming, object-oriented design, algorithm implementation, and automated workflows.',
      icon: Code2,
      color: 'cyan',
    },
    {
      title: 'GenAI & RAG Exploration',
      subtitle: 'Vector DBs & LLM Agents',
      description: 'Building context-augmented retrieval pipelines using LangChain, FAISS, and custom document loaders with verifiable outputs.',
      icon: Sparkles,
      color: 'indigo',
    },
    {
      title: 'Engineering Mindset',
      subtitle: 'Problem Solving & Quality',
      description: 'Focused on developing reliable, end-to-end applications that solve real workflow bottlenecks with clean code.',
      icon: Rocket,
      color: 'emerald',
    },
  ];

  return (
    <section id="about" className="py-24 relative border-t border-white/5 bg-[#090a10] overflow-hidden">
      {/* Subtle background glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-0 w-96 h-96 bg-purple-700/10 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-left max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase bg-purple-500/10 border border-purple-500/20 text-purple-300 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span>Background &amp; Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            A Little About Me
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            Blending Artificial Intelligence foundations with hands-on software engineering.
          </p>
        </motion.div>

        {/* Editorial Layout: Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Natural Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-5 text-slate-300 text-base leading-relaxed text-left"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0f121d]/90 border border-white/5 space-y-4 shadow-xl shadow-black/20">
              <p>
                I am an <strong className="text-white font-semibold">Artificial Intelligence and Machine Learning</strong> engineering
                student at <strong className="text-purple-300 font-semibold">G. H. Raisoni College of Engineering and Management, Pune</strong>.
                My journey began with curiosity about how computers can make sense of unstructured data, which quickly evolved into a dedicated passion for full-stack software development and practical problem-solving.
              </p>

              <p>
                While my academic training provides a strong mathematical grounding in machine learning, statistics, and algorithms, I spend significant time engineering software — writing clean <span className="text-cyan-300 font-mono text-sm">Python</span> scripts, building responsive web interfaces with <span className="text-cyan-300 font-mono text-sm">React</span>, and designing backend services with <span className="text-cyan-300 font-mono text-sm">FastAPI</span> and <span className="text-cyan-300 font-mono text-sm">MongoDB</span>.
              </p>

              <p>
                Recently, I have been deeply focused on the intersection of modern software and <strong className="text-white font-semibold">Generative AI</strong>. By experimenting with <strong className="text-purple-300 font-semibold">LangChain</strong>, vector embeddings, and <strong className="text-purple-300 font-semibold">Retrieval-Augmented Generation (RAG)</strong>, I build intelligent systems that can fetch factual context from custom documents and provide reliable, grounded answers.
              </p>

              <p className="text-slate-400 text-sm">
                I believe in shipping software that solves actual needs: whether that is an automated desktop analytics suite for educational institutions or context-aware assistants that simplify information retrieval.
              </p>
            </div>

            {/* Core Values / Commitments */}
            <div className="pt-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-purple-400" />
                <span>How I Approach Software Development</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {principles.map((principle, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, x: 2 }}
                    className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-all cursor-default"
                  >
                    <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-300">{principle}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Animated Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="p-5 rounded-2xl bg-gradient-to-br from-[#121524] to-[#0d0f19] border border-white/10 hover:border-purple-500/40 transition-all space-y-3 text-left shadow-lg group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400">{item.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-normal">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
