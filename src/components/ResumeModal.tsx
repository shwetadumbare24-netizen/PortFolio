import { useEffect, useState } from 'react';
import { X, FileDown, ExternalLink, Info, Award, Code, Sparkles } from 'lucide-react';
import { personalProfile, educationData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export default function ResumeModal({ isOpen, onClose, onShowToast }: ResumeModalProps) {
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloading(true);
    // Direct link to download /resume.pdf
    const link = document.createElement('a');
    link.href = personalProfile.resumePath;
    link.download = 'Shweta_Dumbare_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    onShowToast('Downloading Shweta_Dumbare_Resume.pdf...');
    setTimeout(() => {
      setDownloading(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#0e111a] border border-white/10 rounded-2xl shadow-2xl shadow-purple-950/40 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-[#090b12] border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
              <FileDown className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Developer Curriculum Vitae
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                {personalProfile.name} • /resume.pdf
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Quick Snapshot Card */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-purple-300 font-semibold">{personalProfile.headline}</span>
              <span>{personalProfile.location}</span>
            </div>

            <div className="text-xs text-slate-300 space-y-2">
              <div className="flex items-start gap-2">
                <Award className="w-3.5 h-3.5 text-purple-400 mt-0.5 shrink-0" />
                <span>
                  <strong>Education:</strong> {educationData.degree} in {educationData.field} ({educationData.institution})
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Code className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                <span>
                  <strong>Core Stack:</strong> Python, React, FastAPI, LangChain, RAG, MongoDB, Pandas
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                <span>
                  <strong>Primary Interests:</strong> Software Engineering, AI &amp; Generative AI Systems, RESTful APIs
                </span>
              </div>
            </div>
          </div>

          {/* Developer File Placement Instruction Notice */}
          <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 text-xs text-slate-300 space-y-1.5">
            <div className="flex items-center gap-1.5 font-semibold text-purple-300">
              <Info className="w-4 h-4" />
              <span>Resume PDF Location</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              The download button accesses <code className="text-purple-300 bg-black/40 px-1 py-0.5 rounded font-mono">public/resume.pdf</code>.
              To update with your latest resume version, simply place or replace your PDF file named <code className="text-purple-300 bg-black/40 px-1 py-0.5 rounded font-mono">resume.pdf</code> in the <code className="text-purple-300 bg-black/40 px-1 py-0.5 rounded font-mono">public/</code> directory.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 bg-[#090b12] border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
          <a
            href={personalProfile.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>Open in new tab</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-900/40 transition-all cursor-pointer active:scale-95 border border-purple-400/20"
            >
              <FileDown className="w-4 h-4" />
              <span>{downloading ? 'Downloading...' : 'Download Resume.pdf'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
