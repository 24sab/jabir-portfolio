import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  FileText, 
  Send, 
  Check, 
  Copy, 
  ExternalLink,
  ArrowUpRight
} from 'lucide-react';
import { LinkedInIcon } from './LinkedInIcon';
import { portfolioData } from '../data/portfolioData';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const { personal } = portfolioData;

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(formState.subject || 'Professional Inquiry for Jabir PK')}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;

    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Direct Coordination
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
            Get in Touch with Jabir
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 font-normal">
            Available for food industry compliance, quality assurance, hygiene leadership, and QHSE consultancy discussions in Dubai and the UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Direct Verified Contact Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Location */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-slate-400" />
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-400">Location</div>
                  <div className="text-base font-bold text-white mt-0.5">{personal.location}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{personal.visaStatus}</div>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-slate-400" />
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-400">Phone (UAE)</div>
                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                    className="text-base font-bold text-white hover:text-slate-300 transition-colors mt-0.5 block"
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personal.phone, 'phone')}
                className="p-2 text-slate-400 hover:text-white rounded-lg transition-colors"
                title="Copy phone"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Email */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-slate-400" />
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-400">Direct Email</div>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-base font-bold text-white hover:text-slate-300 transition-colors mt-0.5 block break-all"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personal.email, 'email')}
                className="p-2 text-slate-400 hover:text-white rounded-lg transition-colors"
                title="Copy email"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <LinkedInIcon className="w-5 h-5 text-slate-400" />
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-400">LinkedIn Profile</div>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-white hover:text-slate-300 transition-colors mt-0.5 flex items-center gap-1.5"
                  >
                    <span>{personal.linkedinDisplay}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                  </a>
                </div>
              </div>
            </div>

            {/* Download Resume Button */}
            <div className="pt-2">
              <button
                onClick={onOpenResume}
                className="w-full py-4 px-6 rounded-2xl bg-slate-900 hover:bg-slate-850 border border-slate-700 flex items-center justify-between transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-slate-300" />
                  <div className="text-left">
                    <div className="text-sm font-bold text-white">Jabir_PK_Resume.pdf</div>
                    <div className="text-xs text-slate-400">Official Curriculum Vitae</div>
                  </div>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded bg-slate-800 text-slate-200 group-hover:text-white">
                  View PDF
                </span>
              </button>
            </div>

          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-2xl bg-slate-900/90 border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">
                Send a Professional Inquiry
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Your message will be formatted and opened in your email client addressed directly to {personal.email}.
              </p>

              {formSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/70 border border-emerald-500 text-emerald-200 text-sm flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>Email client opened with pre-filled inquiry.</span>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-mono text-slate-400 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Operations Manager"
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500 placeholder:text-slate-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono text-slate-400 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. manager@facility.ae"
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500 placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono text-slate-400 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="e.g. Food Safety Audit & Compliance Consultation"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500 placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono text-slate-400 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe your operational requirement or inquiry..."
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500 placeholder:text-slate-600 resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    To: {personal.email}
                  </span>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
