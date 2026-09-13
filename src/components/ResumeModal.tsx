import React from 'react';
import { X, FileDown, ExternalLink, ShieldCheck, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { personal } = portfolioData;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden z-10 border border-slate-200 animate-fadeIn">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-white font-bold text-sm">
              CV
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                Curriculum Vitae — {personal.name}
              </h3>
              <p className="text-xs text-slate-300">
                Official Resume • {personal.primaryTitle} • Dubai, UAE
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personal.resumePdfUrl}
              download="Jabir_PK_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-white hover:bg-slate-100 text-slate-900 transition-colors shadow-sm"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <a
              href={personal.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors hidden sm:block"
              title="Open in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Viewer Body */}
        <div className="flex-1 bg-slate-100 p-2 sm:p-4 overflow-auto min-h-[400px]">
          <iframe
            src={`${personal.resumePdfUrl}#view=FitH`}
            title="Jabir PK Resume PDF"
            className="w-full h-full min-h-[550px] rounded-lg border border-slate-300 shadow-sm bg-white"
          />
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-slate-500" />
            <span>Strictly verified authentic CV of Jabir PK. No unauthorized alterations.</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${personal.email}`}
              className="hover:text-forest-900 font-medium underline"
            >
              {personal.email}
            </a>
            <span>•</span>
            <a
              href={`tel:${personal.phone.replace(/\s+/g, '')}`}
              className="hover:text-forest-900 font-medium underline"
            >
              {personal.phone}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
