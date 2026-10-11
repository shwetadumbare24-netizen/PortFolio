import { GraduationCap, Code2, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import { personalProfile } from '../data/portfolioData';

export default function About() {
  const principles = [
    'Clean, maintainable software architecture',
    'Practical AI integration over superficial hype',
    'User-centered frontend experiences and responsive UI',
    'Continuous learning through projects and modern dev tools',
  ];

  return (
    <section id="about" className="py-24 relative border-t border-white/5 bg-[#090a10]">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-700/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14 text-left max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase bg-purple-500/10 border border-purple-500/20 text-purple-300 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span>Background &amp; Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            A little about me
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            Blending Artificial Intelligence foundations with hands-on software development.
          </p>
        </div>

        {/* Editorial Layout: Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Natural Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-base leading-relaxed text-left">
            <div className="p-6 rounded-2xl bg-[#0f121d]/80 border border-white/5 space-y-4">
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
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                How I Approach Software Development
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {principles.map((principle, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-300">{principle}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Highlight Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#121524] to-[#0d0f19] border border-white/10 space-y-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Academic Background</h4>
                  <p className="text-xs text-slate-400">B.Tech in AI &amp; Machine Learning</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-normal">
                Studying at GHRCEM, Pune. Comprehensive curriculum encompassing machine learning, data structures, algorithms, databases, and applied AI systems.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#121524] to-[#0d0f19] border border-white/10 space-y-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Software Development</h4>
                  <p className="text-xs text-slate-400">Python, APIs &amp; Frontend</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-normal">
                From developing user interfaces in React to writing performant Python automation utilities and RESTful endpoints using FastAPI and JSON protocols.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#121524] to-[#0d0f19] border border-white/10 space-y-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">AI &amp; Generative AI</h4>
                  <p className="text-xs text-slate-400">RAG, LangChain &amp; Vector Embeddings</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-normal">
                Creating intelligent conversational assistants by chaining prompts, utilizing document loaders, and leveraging vector databases for domain-specific retrieval.
              </p>
            </div>

            {/* Quick Contact & Location Pill */}
            <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-purple-400" />
                <span>Base of Operations:</span>
              </div>
              <span className="font-semibold text-white">{personalProfile.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
