import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
import { BRAND } from '../data/agencyData';

interface NavbarProps {
  onBookCallClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookCallClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'services', 'framework', 'case-studies', 'why-us', 'about', 'insights', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Framework', href: '#framework', id: 'framework' },
    { label: 'Case Studies', href: '#case-studies', id: 'case-studies' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Insights', href: '#insights', id: 'insights' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0F19]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          id="nav-brand-logo"
          className="group flex items-center gap-3 text-white focus:outline-none"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
        >
          <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center p-[1px] shadow-sm shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
            <div className="w-full h-full bg-[#0B0F19] rounded-[7px] flex items-center justify-center">
              <span className="font-extrabold text-blue-500 tracking-tighter text-lg font-mono">N</span>
            </div>
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-lg text-white font-sans flex items-center gap-1">
              NEXORA <span className="text-blue-500 font-semibold">DIGITAL</span>
            </span>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider -mt-1 font-medium hidden sm:block">
              Growth Agency
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav-menu" className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-colors duration-150 ${
                  isActive
                    ? 'text-white bg-slate-800/80 border border-slate-700/60 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="hidden xl:flex items-center gap-2 text-xs text-slate-400 font-medium px-2.5 py-1 rounded-full bg-slate-900/60 border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Q3 Client Openings: 2 Slots</span>
          </div>

          <button
            id="nav-cta-button"
            onClick={onBookCallClick}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold tracking-wide transition-all duration-200 shadow-md shadow-blue-600/25 active:scale-95 cursor-pointer"
          >
            <span>Book a Strategy Call</span>
            <ArrowUpRight className="w-4 h-4 text-blue-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          id="mobile-menu-toggle-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none transition-colors"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden px-4 pt-3 pb-6 bg-[#0E1424] border-b border-slate-800 shadow-2xl space-y-2 animate-in fade-in slide-in-from-top-3 duration-200"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                id={`mobile-nav-link-${link.id}`}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'text-white bg-blue-600/20 text-blue-400 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium px-3 py-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for Selective Partnerships</span>
            </div>
            <button
              id="mobile-nav-cta-button"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookCallClick();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-blue-600/20"
            >
              <span>Book a Strategy Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
