import { 
  BarChart3, 
  FileSpreadsheet, 
  FileText, 
  Bot, 
  Database, 
  Globe, 
  ShoppingCart, 
  Code, 
  ArrowRight,
  Layers
} from 'lucide-react';
import type { Project } from '../types';

interface ProjectMockupProps {
  project: Project;
}

export default function ProjectMockup({ project }: ProjectMockupProps) {
  switch (project.mockupType) {
    case 'analytics':
      return (
        <div className="w-full h-48 bg-[#0b0d14] rounded-t-xl p-4 flex flex-col justify-between border-b border-white/5 relative overflow-hidden font-mono select-none">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
          
          {/* App title bar */}
          <div className="flex items-center justify-between z-10 text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5">
              <BarChart3 className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-slate-300 font-semibold">ResultAnalytics_GUI.py</span>
            </div>
            <div className="flex gap-1.5">
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] flex items-center gap-1">
                <FileSpreadsheet className="w-2.5 h-2.5" /> .XLSX
              </span>
              <span className="px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-400 text-[10px] flex items-center gap-1">
                <FileText className="w-2.5 h-2.5" /> .PDF
              </span>
            </div>
          </div>

          {/* Mini Chart Mockup */}
          <div className="z-10 grid grid-cols-5 gap-2 items-end h-20 px-2 py-1 bg-white/[0.02] rounded-lg border border-white/5">
            <div className="flex flex-col items-center gap-1">
              <div className="w-full bg-purple-500/60 rounded-t h-12" />
              <span className="text-[9px] text-slate-400">Sem 1</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-full bg-purple-500/70 rounded-t h-14" />
              <span className="text-[9px] text-slate-400">Sem 2</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-full bg-purple-500/90 rounded-t h-16" />
              <span className="text-[9px] text-slate-400">Sem 3</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-full bg-cyan-500/80 rounded-t h-15" />
              <span className="text-[9px] text-slate-400">Sem 4</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-full bg-emerald-500/90 rounded-t h-18" />
              <span className="text-[9px] text-slate-400">Toppers</span>
            </div>
          </div>

          {/* Status footer */}
          <div className="flex items-center justify-between text-[10px] text-slate-400 z-10 pt-1">
            <span>Pass Rate: <strong className="text-emerald-400">94.2%</strong></span>
            <span>ReportLab &amp; OpenPyXL Engine</span>
          </div>
        </div>
      );

    case 'rag':
      return (
        <div className="w-full h-48 bg-[#090b12] rounded-t-xl p-4 flex flex-col justify-between border-b border-white/5 relative overflow-hidden font-mono select-none">
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5">
              <Bot className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-slate-300 font-semibold">RAG-Customer-Support</span>
            </div>
            <span className="px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 text-[10px] border border-cyan-500/20">
              FAISS Index
            </span>
          </div>

          {/* Retrieval diagram simulation */}
          <div className="space-y-2 my-auto">
            <div className="p-2 rounded bg-white/5 border border-white/5 text-[10px] text-slate-300 flex items-center justify-between">
              <span className="text-purple-300">Q: "How to process ticket refunds?"</span>
              <span className="text-[9px] text-slate-400">Sim: 0.94</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-[9px] text-slate-400">
              <span>Vector Search</span>
              <ArrowRight className="w-3 h-3 text-cyan-400" />
              <span>Prompt Augmentation</span>
              <ArrowRight className="w-3 h-3 text-purple-400" />
              <span className="text-emerald-400 font-semibold">Answer</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-white/5 pt-1.5">
            <span className="text-slate-400">LangChain Framework</span>
            <span className="text-cyan-400">Context Grounded</span>
          </div>
        </div>
      );

    case 'student-crud':
      return (
        <div className="w-full h-48 bg-[#0b0c14] rounded-t-xl p-4 flex flex-col justify-between border-b border-white/5 relative overflow-hidden font-mono select-none">
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-slate-300 font-semibold">StudentRecordsApp</span>
            </div>
            <span className="px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-400 text-[10px]">
              FastAPI + React
            </span>
          </div>

          {/* Table simulation */}
          <div className="space-y-1.5 my-auto text-[10px]">
            <div className="grid grid-cols-4 px-2 py-1 rounded bg-white/[0.04] text-slate-400 font-semibold">
              <span>Roll No</span>
              <span>Name</span>
              <span>Department</span>
              <span className="text-right">Action</span>
            </div>
            <div className="grid grid-cols-4 px-2 py-1 rounded bg-white/[0.02] text-slate-300 items-center">
              <span>AI-101</span>
              <span>Aarav S.</span>
              <span className="text-purple-300">AIML</span>
              <span className="text-right text-emerald-400 text-[9px]">Active</span>
            </div>
            <div className="grid grid-cols-4 px-2 py-1 rounded bg-white/[0.02] text-slate-300 items-center">
              <span>AI-102</span>
              <span>Priya N.</span>
              <span className="text-cyan-300">AIML</span>
              <span className="text-right text-emerald-400 text-[9px]">Active</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
            <span>Async MongoDB CRUD</span>
            <span className="text-purple-400">REST Endpoints</span>
          </div>
        </div>
      );

    case 'tourism':
      return (
        <div className="w-full h-48 bg-[#0d0f18] rounded-t-xl p-4 flex flex-col justify-between border-b border-white/5 relative overflow-hidden font-mono select-none">
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-slate-300 font-semibold">TourismPortal</span>
            </div>
            <span className="px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-300 text-[10px]">
              PHP &amp; MySQL
            </span>
          </div>

          {/* Cards preview */}
          <div className="grid grid-cols-2 gap-2 my-auto">
            <div className="p-2 rounded bg-white/[0.03] border border-white/5 text-[10px] space-y-1">
              <div className="font-semibold text-slate-200">Western Ghats Tour</div>
              <div className="text-[9px] text-slate-400">3 Days • Historical Trek</div>
              <span className="inline-block px-1 rounded bg-indigo-500/20 text-indigo-300 text-[8px]">
                Active Package
              </span>
            </div>
            <div className="p-2 rounded bg-white/[0.03] border border-white/5 text-[10px] space-y-1">
              <div className="font-semibold text-slate-200">Goa Heritage Trail</div>
              <div className="text-[9px] text-slate-400">4 Days • Coastal Sightseeing</div>
              <span className="inline-block px-1 rounded bg-indigo-500/20 text-indigo-300 text-[8px]">
                Active Package
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
            <span>Relational Schema</span>
            <span className="text-indigo-400">Session Auth</span>
          </div>
        </div>
      );

    case 'ecommerce':
      return (
        <div className="w-full h-48 bg-[#0a0c14] rounded-t-xl p-4 flex flex-col justify-between border-b border-white/5 relative overflow-hidden font-mono select-none">
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShoppingCart className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-slate-300 font-semibold">E-Commerce Storefront</span>
            </div>
            <span className="px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 text-[10px]">
              HTML5 / CSS3 / JS
            </span>
          </div>

          {/* Product simulation */}
          <div className="p-2.5 rounded bg-white/[0.03] border border-white/5 flex items-center gap-3 my-auto">
            <div className="w-12 h-12 rounded bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <Layers className="w-6 h-6 text-slate-400" />
            </div>
            <div className="space-y-1 text-[10px]">
              <div className="text-slate-200 font-semibold">Wireless Developer ANC Headset</div>
              <div className="text-amber-400 text-[9px]">★★★★★ (4.8 / 5)</div>
              <div className="text-emerald-400 font-bold">$129.99 <span className="text-slate-400 line-through text-[9px]">$179.99</span></div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
            <span>Responsive Flexbox &amp; Grid</span>
            <span className="text-amber-400">Cart Interaction</span>
          </div>
        </div>
      );

    case 'api-fetcher':
      return (
        <div className="w-full h-48 bg-[#080910] rounded-t-xl p-4 flex flex-col justify-between border-b border-white/5 relative overflow-hidden font-mono select-none">
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5">
              <Code className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-slate-300 font-semibold">api_fetcher.py</span>
            </div>
            <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] border border-emerald-500/20">
              HTTP 200 OK
            </span>
          </div>

          {/* JSON Tree simulation */}
          <div className="p-2 rounded bg-black/40 border border-white/5 text-[10px] text-slate-300 space-y-0.5 my-auto">
            <div><span className="text-purple-400">GET</span> <span className="text-slate-400">/api/v1/metrics?format=json</span></div>
            <div className="text-slate-400 pl-2">&#123;</div>
            <div className="pl-4 text-emerald-300">"status": "success", "latency_ms": 124,</div>
            <div className="pl-4 text-cyan-300">"records_parsed": 1450, "errors": 0</div>
            <div className="text-slate-400 pl-2">&#125;</div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
            <span>Requests &amp; JSON Engine</span>
            <span className="text-cyan-400">Retries &amp; Logging</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-48 bg-slate-900/60 rounded-t-xl flex items-center justify-center text-slate-500 text-xs">
          Software Project Preview
        </div>
      );
  }
}
