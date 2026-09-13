import React from 'react';
import { GraduationCap, BookOpen, CheckCircle } from 'lucide-react';
import { portfolioData, EducationItem } from '../data/portfolioData';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-14 md:py-18 bg-slate-50/60 border-t border-slate-200/60">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-800">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mt-2">
            Higher Education in Food Science & Biotechnology
          </h2>
          <p className="mt-3 text-base text-slate-600 font-normal">
            A scientific education combining postgraduate food technology, microbiology, and biochemical testing from the University of Calicut.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu: EducationItem) => (
            <div
              key={edu.id}
              className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200/80 shadow-subtle hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-slate-100 text-slate-700">
                    Graduated {edu.year}
                  </span>
                  <GraduationCap className="w-5 h-5 text-brand-800" />
                </div>

                <h3 className="text-xl font-bold text-slate-950 mb-1">
                  {edu.degree}
                </h3>
                
                <div className="text-sm font-semibold text-brand-900 mb-4">
                  {edu.institution}
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Specialization: {edu.field}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {edu.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>University of Calicut Degree</span>
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
