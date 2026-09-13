import React from 'react';
import { ShieldCheck, FileCheck2, FlaskConical, HardHat, Boxes, Users } from 'lucide-react';
import { portfolioData, SkillCategory } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skillCategories } = portfolioData;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-brand-900" />;
      case 'FileCheck2': return <FileCheck2 className="w-5 h-5 text-brand-900" />;
      case 'FlaskConical': return <FlaskConical className="w-5 h-5 text-brand-900" />;
      case 'HardHat': return <HardHat className="w-5 h-5 text-brand-900" />;
      case 'Boxes': return <Boxes className="w-5 h-5 text-brand-900" />;
      case 'Users': return <Users className="w-5 h-5 text-brand-900" />;
      default: return <ShieldCheck className="w-5 h-5 text-brand-900" />;
    }
  };

  return (
    <section id="skills" className="py-14 md:py-18 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-800">
            Areas of Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mt-2">
            Technical & Operational Competencies
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            Derived directly from authentic industrial practice in UAE food manufacturing lines, testing laboratories, and regulatory compliance audits.
          </p>
        </div>

        {/* Competency Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat: SkillCategory, idx: number) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-subtle hover:shadow-elevated hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-5">
                  {getIcon(cat.icon)}
                </div>

                <h3 className="text-lg font-bold text-slate-950 mb-2">
                  {cat.category}
                </h3>
                
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {cat.skills.map((skill: string, sIdx: number) => (
                    <li key={sIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-700 flex-shrink-0 mt-2" />
                      <span className="leading-relaxed">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 text-[11px] font-medium text-slate-400">
                Verified across UAE facilities
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
