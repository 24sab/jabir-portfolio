import React from 'react';
import { ShieldCheck, Phone, Mail, ArrowUp } from 'lucide-react';
import { LinkedInIcon } from './LinkedInIcon';
import { portfolioData } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-8 border-b border-slate-900">
          
          {/* Identity */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-slate-700 flex-shrink-0 bg-slate-800">
                <img
                  src={personal.heroImage}
                  alt={personal.name}
                  className="w-full h-full object-cover object-top scale-125"
                />
              </div>
              <span className="text-white font-bold text-base">{personal.name}</span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Quality Controller | HSE / QHSE Officer | Hygiene Officer. 8+ years across food manufacturing, trading, and institutional facilities in Dubai, UAE.
            </p>
          </div>

          {/* Directory */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <div className="text-white font-semibold uppercase tracking-wider mb-3">
              Directory
            </div>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-white transition-colors">About Jabir</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Experience Timeline</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Competencies</a></li>
              <li><a href="#audits" className="hover:text-white transition-colors">Audits & Inspections</a></li>
              <li><a href="#certifications" className="hover:text-white transition-colors">Certifications</a></li>
              <li><a href="#education" className="hover:text-white transition-colors">Education</a></li>
            </ul>
          </div>

          {/* Coordinates */}
          <div className="md:col-span-4 space-y-2 text-xs">
            <div className="text-white font-semibold uppercase tracking-wider mb-3">
              Coordinates
            </div>
            <div className="space-y-2 text-slate-400">
              <div>{personal.location} ({personal.visaStatus})</div>
              <div>
                <a href={`tel:${personal.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {personal.phone}
                </a>
              </div>
              <div>
                <a href={`mailto:${personal.email}`} className="hover:text-white transition-colors">
                  {personal.email}
                </a>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <LinkedInIcon className="w-3.5 h-3.5 text-slate-400" />
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {personal.linkedinDisplay}
                </a>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenResume}
                className="text-xs font-medium text-slate-400 hover:text-white underline transition-colors"
              >
                Download Resume (PDF)
              </button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div>
            © {new Date().getFullYear()} Jabir PK. Strictly verified against authentic curriculum vitae.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-500 hover:text-slate-300 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
