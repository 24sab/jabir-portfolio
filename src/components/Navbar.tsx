import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'experience', 'skills', 'audits', 'certifications', 'education', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 160 && rect.bottom >= 160;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Expertise', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6 pointer-events-none">
      <div className="max-w-5xl mx-auto pointer-events-auto">
        <div
          className={`flex items-center justify-between px-5 sm:px-7 py-3 rounded-full transition-all duration-300 ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-md shadow-md border border-slate-200/90'
              : 'bg-white/90 backdrop-blur-md shadow-sm border border-slate-200/70'
          }`}
        >
          
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-slate-200/90 shadow-sm transition-transform group-hover:scale-105 flex-shrink-0 bg-slate-100">
              <img
                src={portfolioData.personal.heroImage}
                alt={portfolioData.personal.name}
                className="w-full h-full object-cover object-top scale-125 translate-y-0.5"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-950 text-sm tracking-tight group-hover:text-brand-900 transition-colors">
                Jabir PK
              </span>
              <span className="hidden md:inline-block text-[11px] text-slate-400 font-medium pl-2 border-l border-slate-200">
                Food Technologist
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links - Clean, widely spaced */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => {
              const targetId = link.href.substring(1);
              const isActive = activeSection === targetId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-semibold tracking-wide uppercase transition-colors ${
                    isActive
                      ? 'text-brand-900 font-bold'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Action: Single Clean Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-slate-800 hover:text-slate-950 bg-slate-100 hover:bg-slate-200/80 rounded-full transition-colors"
            >
              <FileDown className="w-3.5 h-3.5 text-slate-500" />
              <span>Resume PDF</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-1.5 text-slate-700 hover:text-slate-950 rounded-full"
              aria-label="View Resume"
            >
              <FileDown className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-700 hover:text-slate-950 rounded-full"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto max-w-sm mx-auto mt-2 bg-white rounded-2xl border border-slate-200 p-5 shadow-xl space-y-3 animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-brand-900 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-center text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center justify-center gap-2"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
