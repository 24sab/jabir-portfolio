import React from 'react';
import { 
  ArrowRight, 
  FileDown, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2,
  Building2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { personal } = portfolioData;

  return (
    <section id="home" className="relative pt-28 pb-12 md:pt-32 md:pb-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Refined Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Status & Location Pill */}
            <div className="inline-flex items-center gap-2.5 self-start px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-brand-600" />
              <span>{personal.location}</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600 font-semibold">{personal.visaStatus}</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.08]">
                {personal.name}
              </h1>
              <p className="text-2xl sm:text-3xl font-semibold text-brand-900 tracking-tight">
                Food Technologist & Hygiene Officer
              </p>
              <p className="text-sm font-medium text-slate-500 tracking-wide uppercase pt-1">
                Quality Controller • HSE / QHSE Officer • Food Safety Auditor
              </p>
            </div>

            {/* Summary sentence */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
              Quality, Hygiene, and HSE professional with <strong className="font-semibold text-slate-900">over 8 years of experience</strong> across food manufacturing, trading, and institutional facilities in the UAE. Skilled in FSSC 22000, ISO 22000, and HACCP documentation, systematic auditing, and regulatory compliance.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-brand-900 hover:bg-brand-800 rounded-xl transition-colors shadow-sm"
              >
                <span>View Experience</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-colors"
              >
                <FileDown className="w-4 h-4 text-slate-500" />
                <span>Resume (PDF)</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
              >
                <span>Contact Jabir</span>
              </a>
            </div>

            {/* Credential Indicators */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="text-2xl font-bold text-slate-900">8+ Years</div>
                <div className="text-xs text-slate-500 mt-0.5">UAE Industry Track</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">FSSC & ISO</div>
                <div className="text-xs text-slate-500 mt-0.5">22000 Certified Auditor</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">NEBOSH</div>
                <div className="text-xs text-slate-500 mt-0.5">IGC International</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">M.Sc.</div>
                <div className="text-xs text-slate-500 mt-0.5">Food Science & Tech</div>
              </div>
            </div>

          </div>

          {/* Right: Clean, Dignified Executive Portrait */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-md">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated bg-slate-100 border border-slate-200/80">
                <img
                  src={personal.heroImage}
                  alt="Jabir PK - Food Technologist and Hygiene Officer"
                  className="w-full h-auto aspect-[3/4] object-cover object-top"
                  loading="eager"
                />
              </div>

              {/* Dignified Minimal Caption */}
              <div className="mt-4 px-1 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                  <span className="font-medium text-slate-700">HSE Officer • Farzana Trading LLC</span>
                </div>
                <span>Dubai, UAE</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
