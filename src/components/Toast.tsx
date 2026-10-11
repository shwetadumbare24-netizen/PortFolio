import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export default function Toast({ message, onClose }: ToastProps) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-[#0f121e] border border-purple-500/30 text-white shadow-2xl shadow-purple-950/50 backdrop-blur-md animate-in slide-in-from-bottom-5 duration-200">
      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
      <span className="text-xs sm:text-sm font-medium text-slate-200">{message}</span>
      <button
        onClick={onClose}
        className="p-1 rounded text-slate-400 hover:text-white transition-colors cursor-pointer"
        aria-label="Dismiss toast"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
