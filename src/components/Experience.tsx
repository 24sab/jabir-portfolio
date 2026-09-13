import React, { useState } from 'react';
import { Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData, ExperienceItem } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const { experiences } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Trading', 'Bakery', 'Manufacturing', 'Institutional', 'Dairy'];

  const filtered = selectedCategory === 'All'
    ? experiences
    : experiences.filter((e) => e.category === selectedCategory);

  return (
    <section id="experience" className="py-14 md:py-18 bg-slate-50/60 border-t border-slate-200/60">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-800">
              Career History
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mt-2">
              Professional Experience
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-xl">
              A chronological demonstration of leadership in UAE food safety, hygiene inspection, quality assurance, and operational HSE.
            </p>
          </div>

          {/* Minimalist Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-xl border border-slate-200 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Experience List */}
        <div className="space-y-8">
          {filtered.map((exp: ExperienceItem) => {
            const isCurrent = exp.isCurrent;

            return (
              <div
                key={exp.id}
                className={`bg-white rounded-2xl p-8 md:p-10 border transition-all ${
                  isCurrent
                    ? 'border-brand-900/30 shadow-elevated ring-1 ring-brand-900/10'
                    : 'border-slate-200/80 shadow-subtle hover:border-slate-300'
                }`}
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-100">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-bold text-slate-950">
                        {exp.role}
                      </h3>
                      {isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
                          Current Position
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-600 mt-2">
                      <span className="font-semibold text-brand-900">
                        {exp.company}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <div className="self-start sm:self-auto">
                    <span className="inline-block px-3 py-1 rounded-lg text-xs font-semibold font-mono bg-slate-100 text-slate-700">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Optional role summary */}
                {exp.summary && (
                  <p className="mt-5 text-sm text-slate-600 leading-relaxed italic">
                    {exp.summary}
                  </p>
                )}

                {/* Sub-Roles for Hassani Group */}
                {exp.subRoles && exp.subRoles.length > 0 && (
                  <div className="mt-8 space-y-6">
                    {exp.subRoles.map((sub, sIdx) => (
                      <div key={sIdx} className="bg-slate-50 p-6 rounded-xl border border-slate-200/60">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <h4 className="text-base font-bold text-slate-900">
                            {sub.title}
                          </h4>
                          <span className="text-xs font-mono text-slate-500">
                            {sub.period}
                          </span>
                        </div>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                          {sub.points.map((pt, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-800 flex-shrink-0 mt-2" />
                              <span className="leading-relaxed">{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Responsibilities */}
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                      Responsibilities & Operational Scope
                    </h4>
                    <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-700 flex-shrink-0 mt-2" />
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Authentic achievements */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-900 mb-3">
                      Demonstrated Achievements
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      {exp.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Clean tags */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-2">
                  {exp.keyTags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
