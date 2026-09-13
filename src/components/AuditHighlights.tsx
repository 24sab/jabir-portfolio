import React, { useState, useEffect } from 'react';
import { 
  FlaskConical, 
  RotateCcw, 
  ThermometerSnowflake, 
  ShieldAlert, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const AuditHighlights: React.FC = () => {
  const { auditMethodology } = portfolioData;

  const [stepIndex, setStepIndex] = useState(0);
  const [controlIndex, setControlIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const operationalControls = [
    {
      icon: FlaskConical,
      title: "Microbial Testing Protocols",
      badge: "Laboratory & Safety",
      items: [
        "Water & environmental air quality testing",
        "Finished bakery & processed food microbial integrity",
        "Food-contact & non-food contact surface swab analysis",
        "Personnel hand swab microbial verification"
      ]
    },
    {
      icon: RotateCcw,
      title: "Traceability & Mock Recalls",
      badge: "Audit Readiness",
      items: [
        "End-to-end forward and backward batch record traceability",
        "Verification of mock recall timeliness and completeness",
        "Raw materials, packaging lots, and dispatch tracking",
        "Rapid non-conformity quarantine procedures"
      ]
    },
    {
      icon: ThermometerSnowflake,
      title: "Dispatch & Cold-Chain Governance",
      badge: "Supply Chain",
      items: [
        "Vehicle condition & hygiene sanitation inspection",
        "Product departure temperature verification",
        "Loading protocols & packaging integrity review",
        "Warehouse FIFO/FEFO enforcement to minimize waste"
      ]
    },
    {
      icon: ShieldAlert,
      title: "Root Cause Analysis (RCA) & HSE",
      badge: "Risk Mitigation",
      items: [
        "Systematic investigation of quality and safety deviations",
        "Non-Conformity Reporting (NCR) and corrective actions",
        "Worker PPE usage, emergency evacuation, and fire safety",
        "Supplier vetting and raw material approval"
      ]
    }
  ];

  // Auto-advance operational carousel every 5 seconds if not paused by mouse hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setControlIndex((prev) => (prev + 1) % operationalControls.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, operationalControls.length]);

  const prevStep = () => {
    setStepIndex((prev) => (prev === 0 ? auditMethodology.length - 1 : prev - 1));
  };

  const nextStep = () => {
    setStepIndex((prev) => (prev + 1) % auditMethodology.length);
  };

  const prevControl = () => {
    setControlIndex((prev) => (prev === 0 ? operationalControls.length - 1 : prev - 1));
  };

  const nextControl = () => {
    setControlIndex((prev) => (prev + 1) % operationalControls.length);
  };

  return (
    <section id="audits" className="py-14 md:py-18 bg-slate-50/60 border-t border-slate-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-800">
            Operational Assurance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mt-1.5">
            Quality Audits & Laboratory Verification
          </h2>
          <p className="mt-2.5 text-base sm:text-lg text-slate-600 font-normal">
            Structured food safety protocols, sampling procedures, and audit management executed across UAE food supply chains.
          </p>
        </div>

        {/* 1. CAROUSEL: Operational Inspections (Featured Showcase) */}
        <div 
          className="relative bg-white rounded-3xl border border-slate-200/90 shadow-elevated p-6 sm:p-10 mb-14"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Top Carousel Navigation Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Inspection & Quality Protocols
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mt-1">
                {operationalControls[controlIndex].title}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              {/* Pagination Dots */}
              <div className="flex items-center gap-1.5 mr-2">
                {operationalControls.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setControlIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      controlIndex === i ? 'w-8 bg-slate-900' : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next Arrows */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={prevControl}
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200/80 flex items-center justify-center text-slate-700 transition-colors shadow-sm focus:outline-none"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextControl}
                  className="w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 flex items-center justify-center text-white transition-colors shadow-sm focus:outline-none"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Sliding Carousel Display Window */}
          <div className="relative overflow-hidden pt-6">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${controlIndex * 100}%)` }}
            >
              {operationalControls.map((ctrl, cIdx) => (
                <div
                  key={cIdx}
                  className="w-full flex-shrink-0 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  {/* Left info column */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-brand-900">
                      <ctrl.icon className="w-7 h-7" />
                    </div>

                    <div>
                      <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 font-mono mb-2">
                        {ctrl.badge}
                      </span>
                      <h4 className="text-xl font-bold text-slate-950">
                        {ctrl.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                        Executed strictly in accordance with UAE Municipality standards, FSSC 22000, and HACCP monitoring criteria.
                      </p>
                    </div>

                    <div className="text-xs font-mono text-slate-400">
                      Protocol Card 0{cIdx + 1} of 0{operationalControls.length}
                    </div>
                  </div>

                  {/* Right checklist points column */}
                  <div className="lg:col-span-8 bg-slate-50/80 p-6 sm:p-8 rounded-2xl border border-slate-200/70">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                      Standard Operating Procedures & Verifications
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {ctrl.items.map((item, iIdx) => (
                        <div
                          key={iIdx}
                          className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-subtle flex items-start gap-3"
                        >
                          <CheckCircle2 className="w-4 h-4 text-brand-700 flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. CAROUSEL: 4-Step Audit Methodology Process */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-950">
                Audit Management & Preparation Flow
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                4-step systematic protocol delivering consistent high audit scores in UAE facilities
              </p>
            </div>

            {/* Step Carousel Navigation */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevStep}
                className="p-2 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 shadow-sm transition-colors"
                aria-label="Previous step"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextStep}
                className="p-2 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 shadow-sm transition-colors"
                aria-label="Next step"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Sliding Track for Step Cards */}
          <div className="relative overflow-hidden">
            <div 
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${stepIndex * (100 / auditMethodology.length)}%)` }}
            >
              {auditMethodology.map((m, idx) => (
                <div
                  key={idx}
                  className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex-shrink-0 bg-white p-7 rounded-2xl border border-slate-200/80 shadow-subtle hover:border-slate-300 hover:shadow-elevated transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold font-mono text-brand-800 tracking-wider">
                      STEP {m.step}
                    </span>
                    <h4 className="text-base font-bold text-slate-950 mt-2 mb-2 leading-snug">
                      {m.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {m.detail}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] font-medium text-slate-400 flex items-center justify-between">
                    <span>Audit Protocol</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step indicators */}
          <div className="flex items-center justify-center gap-1.5 mt-6">
            {auditMethodology.map((_, i) => (
              <button
                key={i}
                onClick={() => setStepIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  stepIndex === i ? 'w-6 bg-slate-900' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Step ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
