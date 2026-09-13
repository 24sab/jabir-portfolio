import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const StandardsBanner: React.FC = () => {
  const { standards } = portfolioData;

  return (
    <section className="border-y border-slate-200/70 bg-slate-50/70 py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-baseline justify-between gap-4 mb-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-brand-800">
              Regulatory Standards & Frameworks
            </span>
            <h3 className="text-lg font-bold text-slate-900 mt-0.5">
              Core Food Safety & HSE Management Systems
            </h3>
          </div>
          <p className="text-xs text-slate-500 max-w-md">
            Implemented, audited, and maintained across commercial food manufacturing, trading, and institutional facilities in Dubai, UAE.
          </p>
        </div>

        {/* Minimalist Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          {standards.map((std, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-subtle hover:border-slate-300 transition-colors flex flex-col justify-between"
            >
              <div className="text-xs font-bold text-slate-900 tracking-tight">
                {std.name}
              </div>
              <div className="text-[11px] text-slate-500 mt-2 leading-relaxed line-clamp-2">
                {std.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
