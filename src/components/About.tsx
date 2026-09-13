import React from 'react';
import { ShieldCheck, FileCheck2, FlaskConical, Users, FileDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  const { personal } = portfolioData;

  const coreFocus = [
    {
      icon: ShieldCheck,
      title: "Food Safety Management Systems",
      text: "Expertise in formulating, implementing, and updating documentation for FSSC 22000 and ISO 22000 certifications, aligning operational practices with global safety codes."
    },
    {
      icon: FileCheck2,
      title: "Rigorous Auditing & High Scores",
      text: "Demonstrated success coordinating and leading external, client, and Dubai Municipality audits, consistently achieving top scores through meticulous compliance."
    },
    {
      icon: FlaskConical,
      title: "Quality Control & Laboratory Verification",
      text: "Hands-on execution of microbial testing (air, water, contact surfaces, swabs), Modified Atmosphere Packaging (MAP) testing, sensory evaluation, and shelf-life tracking."
    }
  ];

  return (
    <section id="about" className="py-14 md:py-18 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-800">
            Professional Profile
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mt-2">
            Grounded in Food Science, Proven in Industrial Practice
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A specialized Quality, Hygiene, and HSE professional combining postgraduate food technology education with over eight years of operational excellence in the United Arab Emirates.
          </p>
        </div>

        {/* Narrative & Credentials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              {personal.aboutNarrative[0]}
            </p>
            <p>
              {personal.aboutNarrative[1]}
            </p>
            <p>
              {personal.aboutNarrative[2]}
            </p>

            <div className="pt-4 flex items-center gap-6">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-900 hover:text-brand-800 underline underline-offset-4"
              >
                <FileDown className="w-4 h-4" />
                <span>View Complete Curriculum Vitae</span>
              </button>
            </div>
          </div>

          {/* 3 Clean Focus Cards */}
          <div className="lg:col-span-5 space-y-4">
            {coreFocus.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center gap-3.5 mb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-brand-900">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
