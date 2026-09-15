import React, { useState } from 'react';
import { BRAND } from '../data/agencyData';
import {
  ArrowRight,
  CheckCircle2,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Globe2,
  Mail
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-[#080B12] border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Top Section: Brand + Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center p-[1px]">
                <div className="w-full h-full bg-[#0B0F19] rounded-[7px] flex items-center justify-center font-bold text-blue-500 font-mono text-lg">
                  N
                </div>
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight font-sans">
                NEXORA <span className="text-blue-500 font-semibold">DIGITAL</span>
              </span>
            </div>

            <p className="text-sm text-slate-300 font-medium">
              “{BRAND.tagline}”
            </p>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              {BRAND.positioning} Specializing in predictable revenue scaling, multi-channel performance media, and direct-response creative architecture.
            </p>

            <div className="flex items-center gap-3 text-xs text-slate-400 pt-2">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Systems Status: Operational</span>
              </span>
              <span>•</span>
              <span>EST. 2020</span>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Subscribe to The Growth Dispatch
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Bi-weekly analysis of media buying algorithms, algorithmic search shifts, and direct-response creative teardowns. Read by 12,000+ marketing leaders.
            </p>

            {newsletterSubscribed ? (
              <div className="p-3 rounded-lg bg-blue-950/60 border border-blue-800/60 text-xs text-blue-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>You're subscribed! Check your inbox for our latest benchmark report.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your business email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Middle Section: 4 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-slate-800/80">
          
          {/* Column 1: Company */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">Client Reviews</a>
              </li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#services" className="hover:text-white transition-colors">SEO & Search Authority</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Social Media Marketing</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Paid Ads (Meta & Google)</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Content Marketing</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Branding & Creative</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#insights" className="hover:text-white transition-colors">Insights & Articles</a>
              </li>
              <li>
                <a href="#framework" className="hover:text-white transition-colors">Growth Framework</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Methodology Loop</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Agency FAQ</a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">Audited Case Studies</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono">
              Connect
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Facebook className="w-3.5 h-3.5 text-blue-500" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Youtube className="w-3.5 h-3.5 text-red-500" />
                  <span>YouTube</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 NEXORA DIGITAL. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Attribution Governance</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Sitemap</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
