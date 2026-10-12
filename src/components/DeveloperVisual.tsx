import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Terminal, Play, Sparkles } from 'lucide-react';

interface CodeTab {
  id: string;
  filename: string;
  language: string;
  content: string[];
}

export default function DeveloperVisual() {
  const [activeTab, setActiveTab] = useState<'engineer' | 'rag' | 'skills'>('engineer');
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string | null>(null);

  const tabs: Record<'engineer' | 'rag' | 'skills', CodeTab> = {
    engineer: {
      id: 'engineer',
      filename: 'developer.py',
      language: 'Python',
      content: [
        '# Shwetali Dumbare — Portfolio Profile',
        'class SoftwareDeveloper:',
        '    def __init__(self):',
        '        self.name = "Shwetali Dumbare"',
        '        self.location = "Pune, Maharashtra, India"',
        '        self.education = "B.Tech in AI & ML (GHRCEM Pune)"',
        '        self.core_stack = ["Python", "FastAPI", "React", "MongoDB"]',
        '        self.ai_specialization = ["LangChain", "RAG", "Embeddings"]',
        '',
        '    def build_solution(self, requirement: str):',
        '        """Turn concepts into reliable, production-ready software."""',
        '        architecture = self.design_clean_system(requirement)',
        '        pipeline = self.implement_apis_and_ui(architecture)',
        '        return pipeline.deploy(quality_verified=True)',
        '',
        'developer = SoftwareDeveloper()',
        'print(f"Status: {developer.name} is ready for new opportunities.")',
      ],
    },
    rag: {
      id: 'rag',
      filename: 'rag_pipeline.py',
      language: 'Python',
      content: [
        '# Context-Aware Document Retrieval Pipeline',
        'from langchain.embeddings import HuggingFaceEmbeddings',
        'from langchain.vectorstores import FAISS',
        'from langchain.chains import RetrievalQA',
        '',
        'def init_knowledge_assistant(knowledge_base_path):',
        '    embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")',
        '    vector_db = FAISS.load_local(knowledge_base_path, embeddings)',
        '    ',
        '    retriever = vector_db.as_retriever(search_kwargs={"k": 4})',
        '    return RetrievalQA.from_chain_type(',
        '        llm=language_model,',
        '        chain_type="stuff",',
        '        retriever=retriever',
        '    )',
        '# Grounded customer support with zero hallucinated context',
      ],
    },
    skills: {
      id: 'skills',
      filename: 'skills.json',
      language: 'JSON',
      content: [
        '{',
        '  "developer": "Shwetali Dumbare",',
        '  "primary_languages": ["Python", "JavaScript", "SQL", "PHP"],',
        '  "frontend": ["React", "HTML5", "CSS3", "Bootstrap"],',
        '  "backend": ["FastAPI", "RESTful Architecture", "JSON APIs"],',
        '  "ai_ml": ["LangChain", "RAG Pipelines", "Machine Learning"],',
        '  "data_tools": ["Pandas", "NumPy", "Matplotlib", "OpenPyXL"],',
        '  "databases": ["MongoDB", "MySQL"],',
        '  "version_control": ["Git", "GitHub"]',
        '}',
      ],
    },
  };

  const handleCopy = () => {
    const text = tabs[activeTab].content.join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    setIsRunning(true);
    setTerminalOutput('Compiling execution environment...');
    setTimeout(() => {
      setIsRunning(false);
      if (activeTab === 'engineer') {
        setTerminalOutput('Status: Shwetali Dumbare is ready for new opportunities. [Process exited with 0]');
      } else if (activeTab === 'rag') {
        setTerminalOutput('Vector store loaded: 142 document chunks indexed. Ready for queries.');
      } else {
        setTerminalOutput('JSON validated: All technical competencies mapped successfully.');
      }
    }, 700);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-purple-950/40 border border-white/10 bg-[#0d0f18]/95 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40">
      {/* Decorative ambient gradient backing */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Editor Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#090b12] border-b border-white/5 select-none">
        {/* Window controls */}
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 hover:opacity-100 transition-opacity" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:opacity-100 transition-opacity" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:opacity-100 transition-opacity" />
          <span className="ml-3 text-xs text-slate-400 font-mono hidden sm:inline-block">
            IDE • shwetali-workspace
          </span>
        </div>

        {/* Action buttons */}
        <div className="flex items-center space-x-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRun}
            disabled={isRunning}
            aria-label="Run script"
            className="flex items-center gap-1.5 px-3 py-1 text-xs rounded bg-purple-500/15 hover:bg-purple-500/25 text-purple-300 border border-purple-500/30 transition-all font-mono active:scale-95 cursor-pointer shadow-sm"
          >
            <Play className={`w-3 h-3 ${isRunning ? 'animate-spin text-purple-400' : 'fill-purple-400 text-purple-400'}`} />
            <span>{isRunning ? 'Running...' : 'Run'}</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleCopy}
            aria-label="Copy code snippet"
            className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-white/5 transition-all cursor-pointer"
            title="Copy code"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </motion.button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center px-2 bg-[#090a10]/80 border-b border-white/5 overflow-x-auto scrollbar-none relative">
        {(Object.keys(tabs) as Array<'engineer' | 'rag' | 'skills'>).map((tabKey) => {
          const tab = tabs[tabKey];
          const isActive = activeTab === tabKey;
          return (
            <button
              key={tabKey}
              onClick={() => {
                setActiveTab(tabKey);
                setTerminalOutput(null);
              }}
              className={`relative flex items-center gap-2 px-3.5 py-2 text-xs font-mono transition-all cursor-pointer z-10 ${
                isActive
                  ? 'text-purple-300 bg-[#121422]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-purple-400 animate-pulse' : 'bg-slate-500'}`} />
              <span>{tab.filename}</span>
              {isActive && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Code Editor Body */}
      <div className="p-4 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto min-h-[300px] max-h-[340px] select-text">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-[auto_1fr] gap-x-4"
          >
            {/* Line numbers */}
            <div className="text-slate-600 select-none text-right pr-2 space-y-0.5 border-r border-slate-800">
              {tabs[activeTab].content.map((_, index) => (
                <div key={index} className="text-[12px]">
                  {index + 1}
                </div>
              ))}
            </div>

            {/* Code lines */}
            <div className="space-y-0.5 text-slate-200">
              {tabs[activeTab].content.map((line, index) => {
                return (
                  <div key={index} className="whitespace-pre">
                    {formatCodeLine(line, tabs[activeTab].language)}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Terminal Footer Drawer */}
      <div className="bg-[#07080d] border-t border-white/10 px-4 py-2.5 font-mono text-xs">
        <div className="flex items-center justify-between text-slate-400 mb-1">
          <div className="flex items-center gap-1.5 text-slate-300">
            <Terminal className="w-3.5 h-3.5 text-purple-400" />
            <span>Terminal</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Python 3.12
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-purple-400 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> AI Ready
            </span>
          </div>
        </div>

        {/* Live Output */}
        <div className="text-slate-300 text-[11.5px] mt-1 pl-1 border-l-2 border-purple-500/40">
          {terminalOutput ? (
            <motion.p
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-emerald-300 font-mono"
            >
              {terminalOutput}
            </motion.p>
          ) : (
            <p className="text-slate-400">
              <span className="text-purple-400">$</span> python -m shwetali.build_portfolio
              <span className="inline-block w-1.5 h-3 ml-1 bg-purple-400/80 animate-pulse" />
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// Lightweight syntax highlighter for editorial visual
function formatCodeLine(line: string, language: string) {
  if (line.trim().startsWith('#') || line.trim().startsWith('//')) {
    return <span className="text-slate-500 italic">{line}</span>;
  }
  if (language === 'JSON') {
    return highlightJson(line);
  }
  return highlightPython(line);
}

function highlightPython(line: string) {
  const parts = line.split(/(".*?"|'.*?'|\bdef\b|\bclass\b|\breturn\b|\bself\b|\bimport\b|\bfrom\b|\bTrue\b|\bFalse\b)/g);
  return parts.map((part, i) => {
    if (part.startsWith('"') || part.startsWith("'")) {
      return <span key={i} className="text-emerald-300">{part}</span>;
    }
    if (['def', 'class', 'return', 'import', 'from'].includes(part)) {
      return <span key={i} className="text-purple-400 font-semibold">{part}</span>;
    }
    if (part === 'self') {
      return <span key={i} className="text-amber-300 italic">{part}</span>;
    }
    if (['True', 'False'].includes(part)) {
      return <span key={i} className="text-cyan-400">{part}</span>;
    }
    return <span key={i}>{part}</span>;
  });
}

function highlightJson(line: string) {
  const parts = line.split(/(".*?"|:\s*\[|:\s*".*?"|true|false|\d+)/g);
  return parts.map((part, i) => {
    if (part.startsWith('"') && !line.includes(':') && !part.endsWith(':')) {
      return <span key={i} className="text-purple-300">{part}</span>;
    }
    if (part.startsWith('"')) {
      return <span key={i} className="text-cyan-300">{part}</span>;
    }
    if (part.startsWith(': "')) {
      return <span key={i} className="text-emerald-300">{part}</span>;
    }
    return <span key={i}>{part}</span>;
  });
}
