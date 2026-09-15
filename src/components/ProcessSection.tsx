import React from 'react';
import { PROCESS_STEPS } from '../data/agencyData';
import { Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <span>Seamless Client Onboarding</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            From First Conversation to Measurable Growth
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Our onboarding process is structured, transparent, and built to achieve maximum velocity without compromising strategic rigor.
          </p>
        </div>

        {/* 6-Step Visual Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((phase, idx) => (
            <div
              key={phase.step}
              id={`process-phase-${phase.step}`}
              className="relative p-6 sm:p-7 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl sm:text-3xl font-black text-blue-500 font-mono">
                    {phase.step}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono px-2.5 py-1 rounded bg-slate-950 border border-slate-800">
                    <Clock className="w-3 h-3 text-blue-400" />
                    <span>{phase.timeframe}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5">
                  {phase.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {phase.description}
                </p>
              </div>

              {/* Deliverable Badge */}
              <div className="pt-4 border-t border-slate-800/80 flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-mono">
                    Key Output:
                  </span>
                  <span className="font-semibold text-slate-200">{phase.deliverable}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
