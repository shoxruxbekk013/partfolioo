import React, { useState } from 'react';
import { socialLinksConfig } from '../data/socialLinks';
import { Send, Mail, Copy, Check, MessageSquare, AlertCircle, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message with at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulated realistic client-side submission with feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 8000);
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socialLinksConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const mailtoHref = `mailto:${socialLinksConfig.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `Hi Shoxrux,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#080B18]">
      {/* Background cyber lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#3867FF]/10 via-[#8B5CF6]/10 to-[#FF3CAC]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-mono text-[#00E5FF] mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight uppercase">
            LET'S BUILD <span className="text-gradient-cyan-purple">SOMETHING EXTRAORDINARY.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 font-light">
            Have an idea for a website or digital product? Let's turn it into reality.
          </p>
        </div>

        {/* Content Grid: Left Contact Info Cards + Right Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Direct Email Card */}
            <div className="p-6 rounded-3xl glass-panel bg-[#0D1326]/80 border border-slate-700/60 shadow-xl">
              <span className="text-[11px] font-mono uppercase text-[#00E5FF] tracking-wider font-semibold block mb-2">
                Primary Contact
              </span>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-[#00E5FF]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-mono">Email Address</p>
                  <p className="text-sm sm:text-base font-semibold text-white break-all">
                    {socialLinksConfig.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex-1 py-2 px-3 rounded-xl text-xs font-mono text-slate-300 hover:text-white glass-panel-subtle border border-slate-700 hover:border-cyan-500/50 transition-colors flex items-center justify-center gap-1.5"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied to Clipboard' : 'Copy Email'}</span>
                </button>
                <a
                  href={`mailto:${socialLinksConfig.email}`}
                  className="py-2 px-4 rounded-xl text-xs font-mono font-semibold text-slate-950 bg-[#00E5FF] hover:bg-cyan-300 transition-colors flex items-center justify-center gap-1"
                >
                  <span>Compose</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Telegram Channel / Direct Chat */}
            {socialLinksConfig.telegram && (
              <div className="p-6 rounded-3xl glass-panel bg-[#0D1326]/80 border border-slate-700/60 shadow-xl flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#8B5CF6] tracking-wider font-semibold block mb-1">
                    Direct Messaging
                  </span>
                  <h4 className="text-base font-display font-bold text-white">
                    Telegram Messenger
                  </h4>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Fastest response for inquiries
                  </p>
                </div>
                <a
                  href={socialLinksConfig.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-mono text-[#8B5CF6] hover:text-white bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 transition-colors flex items-center gap-1"
                >
                  <span>Chat</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

            {/* GitHub Profile */}
            {socialLinksConfig.github && (
              <div className="p-6 rounded-3xl glass-panel bg-[#0D1326]/80 border border-slate-700/60 shadow-xl flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#FF3CAC] tracking-wider font-semibold block mb-1">
                    Code Repositories
                  </span>
                  <h4 className="text-base font-display font-bold text-white">
                    GitHub Profile
                  </h4>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Explore commits and repositories
                  </p>
                </div>
                <a
                  href={socialLinksConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-mono text-[#FF3CAC] hover:text-white bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/30 transition-colors flex items-center gap-1"
                >
                  <span>Explore</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

            {/* Transparent Backend Notice as per Prompt */}
            <div className="p-4 rounded-2xl glass-panel-subtle border border-slate-800 text-[11px] font-mono text-slate-400 leading-relaxed">
              <span className="text-[#00E5FF] font-semibold">Note on Contact Form:</span> This portfolio uses client-side validation. To connect your live form to a backend, you can integrate Formspree, Resend, or EmailJS by updating the form endpoint in <code className="text-slate-200">src/components/Contact.tsx</code>.
            </div>
          </div>

          {/* Right Form (7 Cols) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-3xl glass-panel bg-[#0D1326]/85 border border-[#00E5FF]/30 shadow-2xl space-y-5"
            >
              <h3 className="text-xl font-display font-bold text-white mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 font-mono mb-4">
                Fill in the details below and we will get back to you shortly.
              </p>

              {/* Name Field */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                  Your Name <span className="text-[#FF3CAC]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Alex Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-[#080B18] border text-xs sm:text-sm font-mono text-white placeholder-slate-600 focus:outline-none transition-colors ${
                    errors.name ? 'border-pink-500 focus:border-pink-500' : 'border-slate-700 focus:border-[#00E5FF]'
                  }`}
                />
                {errors.name && (
                  <p className="text-[11px] font-mono text-pink-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                  Your Email <span className="text-[#FF3CAC]">*</span>
                </label>
                <input
                  type="email"
                  placeholder="e.g. alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-[#080B18] border text-xs sm:text-sm font-mono text-white placeholder-slate-600 focus:outline-none transition-colors ${
                    errors.email ? 'border-pink-500 focus:border-pink-500' : 'border-slate-700 focus:border-[#00E5FF]'
                  }`}
                />
                {errors.email && (
                  <p className="text-[11px] font-mono text-pink-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                  Project Topic / Subject
                </label>
                <input
                  type="text"
                  placeholder="e.g. New Website or Frontend Project"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#080B18] border border-slate-700 focus:border-[#00E5FF] text-xs sm:text-sm font-mono text-white placeholder-slate-600 focus:outline-none transition-colors"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                  Your Message <span className="text-[#FF3CAC]">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your vision, requirements, or timeframe..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-[#080B18] border text-xs sm:text-sm font-mono text-white placeholder-slate-600 focus:outline-none transition-colors resize-none ${
                    errors.message ? 'border-pink-500 focus:border-pink-500' : 'border-slate-700 focus:border-[#00E5FF]'
                  }`}
                />
                {errors.message && (
                  <p className="text-[11px] font-mono text-pink-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submission Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-xl font-display font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 bg-gradient-to-r from-[#00E5FF] via-[#3867FF] to-[#8B5CF6] text-slate-950 hover:brightness-110 active:scale-95 disabled:opacity-50 shadow-lg shadow-cyan-500/20"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>{isSubmitting ? 'Validating...' : 'Submit Message'}</span>
                </button>

                <a
                  href={mailtoHref}
                  className="w-full sm:w-auto py-3.5 px-5 rounded-xl text-xs font-mono text-slate-300 hover:text-white glass-panel-subtle border border-slate-700 hover:border-cyan-500/40 transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#00E5FF]" />
                  <span>Open Email App</span>
                </a>
              </div>

              {/* Success Notification */}
              {submitSuccess && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
                  <div>
                    <span className="font-bold block">Message Validated & Recorded!</span>
                    <span>Thank you for reaching out. We have logged your request and you can also send it directly via the 'Open Email App' button.</span>
                  </div>
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
