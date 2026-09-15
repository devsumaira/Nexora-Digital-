import React from 'react';
import { ArrowRight, PhoneCall, Mail, ShieldCheck, Zap } from 'lucide-react';
import { BRAND } from '../data/agencyData';

interface LeadGenBannerProps {
  onBookCallClick: () => void;
  onSendInquiryClick: () => void;
}

export const LeadGenBanner: React.FC<LeadGenBannerProps> = ({
  onBookCallClick,
  onSendInquiryClick
}) => {
  return (
    <section className="py-20 bg-[#0E1424] border-t border-slate-800/80 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950 border border-blue-800/70 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
          <Zap className="w-3.5 h-3.5 text-blue-400" />
          <span>High-Leverage Strategic Advisory</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Ready to Build Your Next Growth Engine?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
          Tell us where you are today. We'll help you identify where your biggest opportunities are and architect a clear path to scalable revenue.
        </p>

        {/* Dual Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10">
          <button
            id="lead-gen-primary-cta"
            onClick={onBookCallClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base transition-all duration-200 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 active:scale-[0.98] cursor-pointer"
          >
            <span>Book a Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            id="lead-gen-secondary-cta"
            onClick={onSendInquiryClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-medium text-base transition-all duration-200 active:scale-[0.98] cursor-pointer"
          >
            <span>Send an Inquiry</span>
          </button>
        </div>

        {/* Trust Badges Bar */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs text-slate-400 font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>Strict NDA Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Zero Sales Pressure</span>
          </div>
          <div className="flex items-center gap-2">
            <PhoneCall className="w-4 h-4 text-blue-400" />
            <span>Direct Partner Consultation</span>
          </div>
        </div>

      </div>
    </section>
  );
};
