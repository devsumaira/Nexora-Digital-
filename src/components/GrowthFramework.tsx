import React, { useState } from 'react';
import { GROWTH_FRAMEWORK } from '../data/agencyData';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Layers, Target } from 'lucide-react';

export const GrowthFramework: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const current = GROWTH_FRAMEWORK[activeStep];

  return (
    <section id="framework" className="py-24 bg-[#0E1424] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <span>Proprietary Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Growth Framework
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Predictable growth is not accidental. We deploy a battle-tested 5-stage framework designed to de-risk investment and accelerate channel inflection points.
          </p>
        </div>

        {/* Desktop Step Navigation Bar (01 to 05) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {GROWTH_FRAMEWORK.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.stepNumber}
                id={`framework-step-tab-${step.stepNumber}`}
                onClick={() => setActiveStep(idx)}
                className={`relative p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 border-blue-500 shadow-lg shadow-blue-600/10'
                    : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-blue-400' : 'text-slate-400'}`}>
                    {step.stepNumber}
                  </span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                  )}
                </div>
                <div className={`text-sm sm:text-base font-bold tracking-tight ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                  {step.title}
                </div>
                <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                  {step.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Deep Dive Card */}
        <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Description & Deliverables */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-md bg-blue-600/20 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold">
                  STAGE {current.stepNumber} OF 05
                </span>
                <span className="text-xs text-slate-400 font-medium font-mono">
                  Phase Deliverables & Governance
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
                  {current.title} — {current.subtitle}
                </h3>
                <p className="text-base text-slate-300 leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                  Stage Output & Key Assets
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-950/50 border border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Visual Stage Telemetry Box */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">
                    Stage Benchmark
                  </span>
                  <span className="text-xs text-emerald-400 font-mono font-semibold">
                    100% Quality Gate
                  </span>
                </div>

                <div>
                  <div className="text-xs text-slate-400 mb-1">Target Primary Output</div>
                  <div className="text-lg font-bold text-white font-mono flex items-center gap-2">
                    <Target className="w-4 h-4 text-blue-400" />
                    <span>{current.keyMetric}</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="flex justify-between text-xs text-slate-400 font-medium">
                    <span>Methodology Precision</span>
                    <span className="text-blue-400 font-mono">Stage {current.stepNumber}/05</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-blue-600 h-full rounded-full transition-all duration-500"
                      style={{ width: `${(activeStep + 1) * 20}%` }}
                    ></div>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-400 leading-relaxed border-t border-slate-800/80">
                  Clients receive transparent Kanban tracking, shared Slack/Teams channels, and bi-weekly strategic roadmap sprint reviews.
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
