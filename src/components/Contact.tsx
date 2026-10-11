import { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  ArrowUpRight, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ExternalLink,
  MailCheck,
  RotateCcw
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { personalProfile } from '../data/portfolioData';

interface ContactProps {
  onShowToast: (message: string) => void;
}

export default function Contact({ onShowToast }: ContactProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    'idle' | 'submitting' | 'success' | 'activation-needed' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) {
      alert('Please provide your name and message.');
      return;
    }

    setSubmissionStatus('submitting');
    setErrorMessage(null);

    try {
      // Direct POST to FormSubmit API for shwetalidumbare16@gmail.com
      const response = await fetch(`https://formsubmit.co/ajax/${personalProfile.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email || 'Visitor (Email not specified)',
          subject: formData.subject || `Inquiry from ${formData.name}`,
          message: formData.message,
          _subject: `[Portfolio Contact] ${formData.subject || `Message from ${formData.name}`}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json();

      // Check for one-time activation requirement
      if (
        data.message &&
        typeof data.message === 'string' &&
        data.message.toLowerCase().includes('activation')
      ) {
        setSubmissionStatus('activation-needed');
        onShowToast('One-time activation email sent to shwetalidumbare16@gmail.com!');
        return;
      }

      if (response.ok && (data.success === 'true' || data.success === true)) {
        setSubmissionStatus('success');
        onShowToast('Message delivered directly to Shwetali’s inbox!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err: unknown) {
      const errStr = err instanceof Error ? err.message : String(err);
      if (errStr.toLowerCase().includes('activation')) {
        setSubmissionStatus('activation-needed');
      } else {
        setSubmissionStatus('error');
        setErrorMessage(
          'Could not complete automatic dispatch. You can send directly via Gmail in your browser or retry.'
        );
        onShowToast('Direct sending failed. Backup options ready!');
      }
    }
  };

  // Direct Gmail Web composer URL
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    personalProfile.email
  )}&su=${encodeURIComponent(
    formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`
  )}&body=${encodeURIComponent(
    `Hello Shwetali,\n\nName: ${formData.name || ''}\nEmail: ${formData.email || ''}\n\nMessage:\n${formData.message || ''}\n`
  )}`;

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
                I'm interested in software development opportunities, collaborative projects, and building useful technology. Send me a message directly from here!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-3.5 pt-2">
              {/* Email Card with Copy and Direct Links */}
              <div className="p-4 rounded-xl bg-[#0e111a] border border-white/10 hover:border-purple-500/30 transition-all flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-400">Direct Email</div>
                    <a
                      href={`mailto:${personalProfile.email}`}
                      className="text-sm font-mono text-slate-200 group-hover:text-purple-300 transition-colors truncate block"
                    >
                      {personalProfile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <a
                    href={gmailComposeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-purple-300 transition-colors"
                    title="Open in Gmail Web (browser)"
                    aria-label="Open in Gmail Web"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy email address"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
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

          {/* Right Column: Direct In-Page Email Dispatcher */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0e111a]/95 border border-white/10 shadow-2xl shadow-black/30">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/5">
                <MessageSquare className="w-4 h-4 text-purple-400" />
                <h3 className="text-base font-semibold text-white">
                  Send a Direct Message
                </h3>
                <span className="text-xs font-mono text-emerald-400 ml-auto flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Direct to Inbox
                </span>
              </div>

              {/* SUCCESS VIEW */}
              {submissionStatus === 'success' && (
                <div className="p-6 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      Message Delivered Directly to Shwetali!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out. Your message has landed directly in{' '}
                      <strong className="text-emerald-300 font-mono">{personalProfile.email}</strong>.
                      I will review it and reply as soon as possible.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmissionStatus('idle')}
                    className="px-5 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

              {/* ONE-TIME ACTIVATION NOTICE VIEW */}
              {submissionStatus === 'activation-needed' && (
                <div className="p-6 rounded-xl bg-amber-950/25 border border-amber-500/40 text-left space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                      <MailCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">
                        One-Time Setup: Confirm Activation in Your Gmail
                      </h4>
                      <p className="text-xs text-amber-300/90 font-mono">
                        Security verification sent to {personalProfile.email}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    FormSubmit has sent an automated email with an <strong className="text-white">"Activate Form"</strong> link to <strong className="text-amber-300 font-mono">{personalProfile.email}</strong>.
                    <br />
                    Please open your Gmail and click that button <strong>once</strong>. After this one-time confirmation, every single message submitted directly from this website will land in your inbox automatically!
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href="https://mail.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs flex items-center gap-2 transition-colors shadow-md"
                    >
                      <span>Open Gmail Inbox</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={gmailComposeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs flex items-center gap-2 transition-colors"
                    >
                      <span>Send via Gmail Web right now</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => setSubmissionStatus('idle')}
                      className="text-xs text-slate-400 hover:text-slate-200 ml-auto flex items-center gap-1 cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" />
                      Back to form
                    </button>
                  </div>
                </div>
              )}

              {/* FORM VIEW (when idle, submitting, or error) */}
              {submissionStatus !== 'success' && submissionStatus !== 'activation-needed' && (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {/* Error Notification View */}
                  {submissionStatus === 'error' && (
                    <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 text-xs text-rose-300 space-y-2">
                      <div className="flex items-center gap-2 font-semibold">
                        <AlertCircle className="w-4 h-4" />
                        <span>Sending encountered an issue</span>
                      </div>
                      <p className="text-slate-300">{errorMessage}</p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        <a
                          href={gmailComposeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium flex items-center gap-1.5"
                        >
                          <span>Send via Gmail Web</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name <span className="text-purple-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Email (for reply)
                      </label>
                      <input
                        type="email"
                        placeholder="recruiter@company.com"
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
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-[11px] text-slate-400">
                      Direct delivery to{' '}
                      <span className="text-purple-300 font-mono">{personalProfile.email}</span>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <a
                        href={gmailComposeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center gap-1.5"
                        title="Compose directly in Gmail Web"
                      >
                        <span>Gmail Web</span>
                        <ExternalLink className="w-3 h-3 text-slate-400" />
                      </a>

                      <button
                        type="submit"
                        disabled={submissionStatus === 'submitting'}
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-900/30 transition-all cursor-pointer active:scale-95 border border-purple-400/20 disabled:opacity-60"
                      >
                        {submissionStatus === 'submitting' ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
