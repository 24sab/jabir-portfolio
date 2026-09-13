import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { portfolioData, CertificationItem } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-14 md:py-18 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-800">
            Official Accreditations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mt-2">
            Certifications & Licenses
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            Internationally recognized qualifications in food safety systems, auditing protocols, and occupational health and safety.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert: CertificationItem) => (
            <div
              key={cert.id}
              className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-subtle hover:shadow-elevated hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-800 font-mono">
                    {cert.badge}
                  </span>
                  <Award className="w-4 h-4 text-brand-800" />
                </div>

                <h3 className="text-lg font-bold text-slate-950 mb-2 leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {cert.scope}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-medium truncate max-w-[190px]">
                  {cert.issuer || 'Awarding Body'}
                </span>
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
