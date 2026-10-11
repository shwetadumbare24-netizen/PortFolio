import { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  ArrowUpRight,
  MessageSquare
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { personalProfile } from '../data/portfolioData';

interface ContactProps {
  onShowToast: (message: string) => void;
}

export default function Contact({ onShowToast }: ContactProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalProfile.email);
    setCopiedEmail(true);
    onShowToast(`Copied ${personalProfile.email} to clipboard!`);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert('Please provide your name and message.');
      return;
    }

    // Compose genuine mailto link with encoded parameters
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Shweta,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );

    const mailtoUrl = `mailto:${personalProfile.email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    onShowToast('Opening default email client...');
  };

  return (
    <section id="contact" className="py-24 relative bg-[#08090d] border-t border-white/5">
      {/* Background radial gradient */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          {/* Left Column: Direct info & links */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase bg-purple-500/10 border border-purple-500/20 text-purple-300 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Have a project or opportunity in mind?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300/90 leading-relaxed">
                I'm interested in software development opportunities, collaborative projects, and building useful technology.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-3.5 pt-2">
              {/* Email Card with Copy and Mailto */}
              <div className="p-4 rounded-xl bg-[#0e111a] border border-white/10 hover:border-purple-500/30 transition-all flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Direct Email</div>
                    <a
                      href={`mailto:${personalProfile.email}`}
                      className="text-sm font-mono text-slate-200 group-hover:text-purple-300 transition-colors"
                    >
                      {personalProfile.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-[#0e111a] border border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Current Location</div>
                  <div className="text-sm font-medium text-slate-200">
                    {personalProfile.location}
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={personalProfile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#0e111a] border border-white/10 hover:border-purple-500/30 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-slate-300 group-hover:text-white" />
                    <span className="text-xs font-semibold text-slate-200 group-hover:text-white">GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-purple-400 transition-colors" />
                </a>

                <a
                  href={personalProfile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#0e111a] border border-white/10 hover:border-cyan-500/30 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-semibold text-slate-200 group-hover:text-white">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Compose / Mailto Dispatcher */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0e111a]/95 border border-white/10 shadow-2xl shadow-black/30">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/5">
                <MessageSquare className="w-4 h-4 text-purple-400" />
                <h3 className="text-base font-semibold text-white">
                  Send a Direct Message
                </h3>
                <span className="text-xs font-mono text-slate-400 ml-auto">
                  Powered by mailto client
                </span>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Email (for response)
                    </label>
                    <input
                      type="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    placeholder="Software Engineering Opportunity / Project Discussion"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your team, role, or project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] text-slate-400">
                    Submitting opens your native mail client with a structured email draft.
                  </p>
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-900/30 transition-all cursor-pointer active:scale-95 border border-purple-400/20"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
