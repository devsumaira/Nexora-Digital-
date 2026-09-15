import React, { useState } from 'react';
import { WHY_CHOOSE_US } from '../data/agencyData';
import { Compass, Activity, Zap, TrendingUp, ArrowRight, CheckCircle2, RefreshCw } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-blue-400" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-blue-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-blue-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-blue-400" />;
      default:
        return <Activity className="w-6 h-6 text-blue-400" />;
    }
  };

  const workflowSteps = [
    { label: 'Data', sub: 'Telemetry & Signals', desc: 'Audience data, unit economics, and competitor analysis form the baseline foundation.' },
    { label: 'Strategy', sub: 'Calculated Architecture', desc: 'Target ICP, channel prioritization, and financial models eliminate guesswork.' },
    { label: 'Creative', sub: 'Conversion Psychology', desc: 'Scroll-stopping assets, hooks, and copy designed for direct response.' },
    { label: 'Distribution', sub: 'Precision Targeting', desc: 'Multi-channel algorithmic deployment across Search, Meta, and LinkedIn.' },
    { label: 'Conversion', sub: 'Frictionless Funnels', desc: 'Sub-second landing pages and automated lifecycle retention flows.' },
    { label: 'Growth', sub: 'Compounding Scale', desc: 'Profitable ROAS, declining CAC, and reinvestment into market dominance.' }
  ];

  return (
    <section id="why-us" className="py-24 bg-[#0E1424] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <span>The NEXORA Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Marketing Without the Guesswork
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Most agencies operate on intuition and vanity metrics. We replace speculation with engineering principles, behavioral psychology, and compounding data loops.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {WHY_CHOOSE_US.map((benefit) => (
            <div
              key={benefit.id}
              id={`benefit-${benefit.id}`}
              className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-5">
                  {getIcon(benefit.iconName)}
                </div>

                <h3 className="text-xl font-bold text-white mb-2.5">
                  {benefit.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {benefit.description}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-800/80 text-xs text-slate-300">
                {benefit.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Visual: Data → Strategy → Creative → Distribution → Conversion → Growth */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono uppercase text-blue-400 font-semibold tracking-wider">
                Integrated Growth Engine
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                The Compounding Growth Loop
              </h3>
            </div>
            <div className="text-xs text-slate-400 font-mono flex items-center gap-2">
              <RefreshCw className="w-3.5 h-3.5 text-emerald-400" />
              <span>Closed-Loop Continuous Feedback</span>
            </div>
          </div>

          {/* Workflow Sequence */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {workflowSteps.map((step, idx) => {
              const isSelected = activeStage === idx;
              return (
                <button
                  key={step.label}
                  id={`workflow-step-${idx}`}
                  onClick={() => setActiveStage(idx)}
                  className={`p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-blue-950/60 border-blue-500 shadow-md shadow-blue-500/20'
                      : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                    <span>0{idx + 1}</span>
                    {idx < 5 && <ArrowRight className="w-3 h-3 text-slate-600 hidden lg:block" />}
                  </div>
                  <div className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {step.label}
                  </div>
                  <div className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                    {step.sub}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Stage Explanation Box */}
          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-blue-400 font-bold px-2 py-0.5 rounded bg-blue-950 border border-blue-800">
                  STEP 0{activeStage + 1}
                </span>
                <h4 className="text-base font-bold text-white">
                  {workflowSteps[activeStage].label}: {workflowSteps[activeStage].sub}
                </h4>
              </div>
              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                {workflowSteps[activeStage].desc}
              </p>
            </div>

            <div className="text-xs font-mono text-slate-400 px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 shrink-0">
              Flow: <strong className="text-blue-400">Data → Strategy → Creative → Distribution → Conversion → Growth</strong>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
