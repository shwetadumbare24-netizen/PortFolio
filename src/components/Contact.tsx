import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Copy, 
  Check, 
  ArrowUpRight, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ExternalLink, 
  MailCheck, 
  RotateCcw, 
  Clock, 
  Sparkles, 
  SendHorizontal 
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { personalProfile } from '../data/portfolioData';

interface ContactProps {
  onShowToast: (message: string) => void;
}

const quickTopics = [
  { label: '💼 Job Opportunity', subject: 'Software Developer Opportunity for Shwetali' },
  { label: '🤝 Project Collaboration', subject: 'Project Collaboration Inquiry' },
  { label: '💬 Technical Query', subject: 'Discussion on AI / Python Project' },
  { label: '☕ Quick Chat', subject: 'Developer Networking & Connect' },
];

export default function Contact({ onShowToast }: ContactProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    'idle' | 'submitting' | 'success' | 'activation-needed' | 'error'
  >('idle');
  const [isCheckingActivation, setIsCheckingActivation] = useState(false);
  const [activationFeedback, setActivationFeedback] = useState<string | null>(null);
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

  const handleSelectTopic = (topicSubject: string) => {
    setFormData((prev) => ({
      ...prev,
      subject: topicSubject,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) {
      alert('Please provide your name and message.');
      return;
    }

    setSubmissionStatus('submitting');
    setErrorMessage(null);

    // Optional custom Web3Forms access key from environment
    const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    try {
      if (web3FormsKey) {
        // Direct delivery via Web3Forms
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: web3FormsKey,
            name: formData.name,
            email: formData.email || 'Visitor without email',
            subject: formData.subject || `[Portfolio Contact] Message from ${formData.name}`,
            message: formData.message,
            from_name: formData.name,
          }),
        });

        const data = await response.json();
        if (response.ok && data.success) {
          setSubmissionStatus('success');
          onShowToast('Message delivered directly to Shwetali’s inbox!');
          setFormData({ name: '', email: '', subject: '', message: '' });
          return;
        }
      }

      // Direct POST to FormSubmit API for direct inbox delivery
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
        onShowToast('One-time activation email sent to your Gmail inbox!');
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
          'Could not complete automated API dispatch. You can send instantly via Gmail Web or mail client with 1-click!'
        );
        onShowToast('Direct sending encountered an issue. Backup options ready!');
      }
    }
  };

  // Test if user has clicked "Activate Form" in their email
  const handleCheckActivation = async () => {
    setIsCheckingActivation(true);
    setActivationFeedback(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalProfile.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: 'System Activation Check',
          email: personalProfile.email,
          subject: 'Form Activation Verification',
          message: 'Verifying that form activation link was clicked.',
          _captcha: 'false',
        }),
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true)) {
        setSubmissionStatus('success');
        onShowToast('Form verified and activated successfully!');
      } else if (
        data.message &&
        typeof data.message === 'string' &&
        data.message.toLowerCase().includes('activation')
      ) {
        setActivationFeedback(
          'Activation link not clicked yet. Please open Gmail (check Spam or Updates folder) and click the "Activate Form" button.'
        );
      } else {
        setActivationFeedback(data.message || 'Verification pending.');
      }
    } catch {
      setActivationFeedback('Unable to verify right now. Please confirm your internet connection.');
    } finally {
      setIsCheckingActivation(false);
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

  // Direct mailto link fallback
  const mailtoUrl = `mailto:${personalProfile.email}?subject=${encodeURIComponent(
    formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`
  )}&body=${encodeURIComponent(
    `Hello Shwetali,\n\nName: ${formData.name || ''}\nEmail: ${formData.email || ''}\n\nMessage:\n${formData.message || ''}\n`
  )}`;

  return (
    <section id="contact" className="py-24 relative bg-[#08090d] border-t border-white/5 overflow-hidden">
      {/* Background radial gradient animatics */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          {/* Left Column: Direct info & links */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase bg-purple-500/10 border border-purple-500/20 text-purple-300 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                <span>Direct Contact</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">Exceptional</span> Together.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300/90 leading-relaxed">
                Have an internship, project, or software engineering inquiry? Send an email directly using the form, or reach out through your favorite client.
              </p>
            </div>

            {/* Availability & Response Time Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 space-y-2 shadow-lg shadow-purple-950/20"
            >
              <div className="flex items-center justify-between text-xs font-mono text-purple-300">
                <span className="flex items-center gap-1.5 font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  Response Window
                </span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Active & Available
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-normal">
                Typically responds within <strong>24 hours</strong>. Based in Pune, Maharashtra (IST, UTC+5:30).
              </p>
            </motion.div>

            {/* Contact Cards */}
            <div className="space-y-3.5 pt-1">
              {/* Email Card with Copy and Direct Links */}
              <motion.div 
                whileHover={{ y: -2 }}
                className="p-4 rounded-xl bg-[#0e111a] border border-white/10 hover:border-purple-500/40 transition-all flex items-center justify-between group shadow-md"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
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

                <div className="flex items-center gap-1.5 shrink-0">
                  <a
                    href={gmailComposeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-purple-300 transition-colors"
                    title="Open in Gmail Web"
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
              </motion.div>

              {/* Location Card */}
              <motion.div 
                whileHover={{ y: -2 }}
                className="p-4 rounded-xl bg-[#0e111a] border border-white/10 flex items-center gap-3 shadow-md"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Current Location</div>
                  <div className="text-sm font-medium text-slate-200">
                    {personalProfile.location}
                  </div>
                </div>
              </motion.div>

              {/* Social Profiles */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <motion.a
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={personalProfile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#0e111a] border border-white/10 hover:border-purple-500/40 transition-all flex items-center justify-between group shadow-md"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-slate-300 group-hover:text-white" />
                    <span className="text-xs font-semibold text-slate-200 group-hover:text-white">GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-purple-400 transition-colors" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={personalProfile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#0e111a] border border-white/10 hover:border-cyan-500/40 transition-all flex items-center justify-between group shadow-md"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-semibold text-slate-200 group-hover:text-white">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Direct In-Page Email Dispatcher */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0e111a]/95 border border-white/10 shadow-2xl shadow-black/40 backdrop-blur-xl relative overflow-hidden group">
              {/* Subtle top neon border line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400" />

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

              <AnimatePresence mode="wait">
                {/* SUCCESS VIEW */}
                {submissionStatus === 'success' && (
                  <motion.div 
                    key="success-view"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-6 sm:p-8 rounded-xl bg-emerald-950/20 border border-emerald-500/40 text-center space-y-4"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', damping: 12, stiffness: 200 }}
                      className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                    >
                      <CheckCircle2 className="w-7 h-7" />
                    </motion.div>
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        Message Sent Directly to Shwetali!
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out! Your message was transmitted directly to{' '}
                        <strong className="text-emerald-300 font-mono">{personalProfile.email}</strong>.
                        I will review it and reply back to you promptly.
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setSubmissionStatus('idle')}
                      className="px-5 py-2.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                )}

                {/* ONE-TIME ACTIVATION NOTICE VIEW */}
                {submissionStatus === 'activation-needed' && (
                  <motion.div 
                    key="activation-view"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-6 rounded-xl bg-amber-950/25 border border-amber-500/40 text-left space-y-4 shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                        <MailCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white">
                          One-Time Setup: Confirm Activation in Your Gmail
                        </h4>
                        <p className="text-xs text-amber-300/90 font-mono">
                          Security confirmation link sent to {personalProfile.email}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      FormSubmit has sent an automated email with an <strong className="text-white">"Activate Form"</strong> link to <strong className="text-amber-300 font-mono">{personalProfile.email}</strong>.
                      <br />
                      Please open your Gmail and click that button <strong>once</strong> (check your <em>Spam</em> or <em>Updates</em> tab if needed).
                      After clicking it once, every future visitor's message from this portfolio will reach your inbox immediately!
                    </p>

                    {/* Activation feedback if verify clicked */}
                    {activationFeedback && (
                      <div className="p-3 rounded-lg bg-black/40 border border-amber-500/30 text-xs text-amber-200">
                        {activationFeedback}
                      </div>
                    )}

                    <div className="flex flex-wrap items-center gap-2.5 pt-2">
                      <motion.a
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        href="https://mail.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs flex items-center gap-2 transition-colors shadow-md"
                      >
                        <span>Open Gmail Inbox</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </motion.a>

                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={handleCheckActivation}
                        disabled={isCheckingActivation}
                        className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs flex items-center gap-2 transition-colors cursor-pointer disabled:opacity-60"
                      >
                        {isCheckingActivation ? (
                          <>
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                            <span>Checking...</span>
                          </>
                        ) : (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                            <span>I've Clicked Activate — Verify Now</span>
                          </>
                        )}
                      </motion.button>

                      <a
                        href={gmailComposeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs flex items-center gap-2 transition-colors"
                      >
                        <span>Send via Gmail Web directly</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <button
                        onClick={() => setSubmissionStatus('idle')}
                        className="text-xs text-slate-400 hover:text-slate-200 ml-auto flex items-center gap-1 cursor-pointer pt-2 sm:pt-0"
                      >
                        <RotateCcw className="w-3 h-3" />
                        Back to form
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* FORM VIEW (when idle, submitting, or error) */}
                {submissionStatus !== 'success' && submissionStatus !== 'activation-needed' && (
                  <motion.form 
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleFormSubmit} 
                    className="space-y-4"
                  >
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
                            className="px-3.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium flex items-center gap-1.5"
                          >
                            <span>Send via Gmail Web</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                          <a
                            href={mailtoUrl}
                            className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium flex items-center gap-1.5"
                          >
                            <span>Open Mail App</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Quick Topic Selector Pills */}
                    <div>
                      <label className="text-xs font-mono text-slate-300 mb-1.5 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                        <span>Select Topic (Optional):</span>
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {quickTopics.map((topic) => (
                          <button
                            key={topic.label}
                            type="button"
                            onClick={() => handleSelectTopic(topic.subject)}
                            className={`px-3 py-1 text-xs rounded-lg transition-all cursor-pointer font-medium ${
                              formData.subject === topic.subject
                                ? 'bg-purple-600 text-white border border-purple-400/40 shadow-sm'
                                : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5'
                            }`}
                          >
                            {topic.label}
                          </button>
                        ))}
                      </div>
                    </div>

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
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-xs font-mono text-slate-300">
                          Message <span className="text-purple-400">*</span>
                        </label>
                        <span className="text-[11px] font-mono text-slate-500">
                          {formData.message.length} / 1000
                        </span>
                      </div>
                      <textarea
                        rows={4}
                        required
                        maxLength={1000}
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

                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          disabled={submissionStatus === 'submitting'}
                          className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-900/40 transition-all cursor-pointer active:scale-95 border border-purple-400/20 disabled:opacity-60"
                        >
                          {submissionStatus === 'submitting' ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>Sending...</span>
                            </>
                          ) : (
                            <>
                              <span>Send Message</span>
                              <SendHorizontal className="w-4 h-4" />
                            </>
                          )}
                        </motion.button>
                      </div>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
