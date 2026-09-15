import React from 'react';
import { TESTIMONIALS } from '../data/agencyData';
import { Star, ShieldCheck, Quote, Building } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#0E1424] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <span>Executive Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Trusted by Growth Leaders
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Read how high-ambition founders, CMOs, and marketing executives scale sustainably with NEXORA DIGITAL as their growth engine.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              id={`testimonial-${t.id}`}
              className="p-7 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between hover:shadow-xl shadow-black/20"
            >
              <div>
                {/* 5-Star Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-700" />
                </div>

                {/* Verified ROI Callout */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-mono font-semibold mb-4">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>{t.verifiedRoi}</span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic mb-8">
                  "{t.testimonial}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-5 border-t border-slate-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-inner">
                  {t.clientName.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">
                    {t.clientName}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {t.jobTitle} • <strong className="text-slate-300">{t.company}</strong>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Placeholder disclaimer note */}
        <div className="mt-12 text-center text-xs text-slate-500 font-mono">
          * Representative client testimonials based on active client performance agreements. Client identities verifiable upon consultation request.
        </div>

      </div>
    </section>
  );
};
