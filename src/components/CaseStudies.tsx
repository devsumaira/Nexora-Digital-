import React from 'react';
import { CASE_STUDIES } from '../data/agencyData';
import { CaseStudyItem } from '../types';
import { ArrowUpRight, TrendingUp, BarChart2, ShieldCheck, Quote } from 'lucide-react';

interface CaseStudiesProps {
  onSelectCaseStudy: (caseStudy: CaseStudyItem) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onSelectCaseStudy }) => {
  return (
    <section id="case-studies" className="py-24 bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <span>Verified Client Results</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Work That Moves the Numbers
            </h2>
            <p className="text-base sm:text-lg text-slate-300">
              Real businesses, audited revenue, and sustainable commercial outcomes. We measure our success solely through the balance sheet of our partners.
            </p>
          </div>

          <div className="text-xs text-slate-400 font-mono px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 shrink-0">
            <span>Client confidentiality preserved. Verified metrics.</span>
          </div>
        </div>

        {/* 4 Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              id={`case-study-card-${study.id}`}
              className="group rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between hover:shadow-2xl hover:shadow-blue-950/30"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 px-2.5 py-1 rounded bg-blue-950/50 border border-blue-800/40">
                      {study.industry}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      Client: <strong className="text-slate-200">{study.client}</strong>
                    </span>
                  </div>

                  <div className="text-right">
                    <div className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight text-emerald-400">
                      {study.headlineMetric}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {study.title}
                </h3>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-6">
                  {study.metricLabel}
                </div>

                {/* Mini Performance Graph Mockup */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 mb-6">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2 font-mono">
                    <span>Performance Trajectory (Before vs After)</span>
                    <span className="text-emerald-400 font-semibold">+ Compounding Trend</span>
                  </div>
                  
                  {/* Bar Chart Visualization */}
                  <div className="grid grid-cols-6 gap-2 items-end h-24 pt-2">
                    {study.chartData.map((d, i) => {
                      const maxVal = Math.max(...study.chartData.map(cd => cd.after));
                      const afterHeight = Math.round((d.after / maxVal) * 100);
                      const beforeHeight = Math.round((d.before / maxVal) * 100);

                      return (
                        <div key={i} className="flex flex-col items-center gap-1.5 h-full justify-end">
                          <div className="w-full flex items-end gap-1 h-20">
                            {/* Before bar */}
                            <div
                              className="w-1/2 bg-slate-700/60 rounded-t"
                              style={{ height: `${Math.max(beforeHeight, 15)}%` }}
                              title={`Baseline: ${d.before}`}
                            ></div>
                            {/* After bar */}
                            <div
                              className="w-1/2 bg-blue-500 rounded-t group-hover:bg-blue-400 transition-colors"
                              style={{ height: `${Math.max(afterHeight, 20)}%` }}
                              title={`Optimized: ${d.after}`}
                            ></div>
                          </div>
                          <span className="text-[9px] text-slate-500 font-mono">{d.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Challenge & Strategy Snippets */}
                <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <div className="p-3 rounded-lg bg-slate-950/40 border border-slate-800/60">
                    <strong className="text-slate-200 block text-xs font-semibold mb-1 uppercase tracking-wider">
                      The Challenge:
                    </strong>
                    <span className="text-slate-400 leading-relaxed text-xs">{study.challenge}</span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950/40 border border-slate-800/60">
                    <strong className="text-slate-200 block text-xs font-semibold mb-1 uppercase tracking-wider">
                      Strategy Deployed:
                    </strong>
                    <span className="text-slate-400 leading-relaxed text-xs">{study.strategy}</span>
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div className="text-xs text-slate-400 italic flex items-center gap-1.5 line-clamp-1 max-w-[70%]">
                  <Quote className="w-3 h-3 text-blue-400 shrink-0" />
                  <span>"{study.quote.text}"</span>
                </div>

                <button
                  id={`view-case-study-${study.id}`}
                  onClick={() => onSelectCaseStudy(study)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer shrink-0"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
