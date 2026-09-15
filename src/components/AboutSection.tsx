import React from 'react';
import { BRAND } from '../data/agencyData';
import {
  Compass,
  Sparkles,
  Cpu,
  BarChart3,
  HeartHandshake,
  Globe2,
  Users,
  Award,
  CheckCircle2
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const elements = [
    { name: 'Strategy', desc: 'Commercial alignment with margin profiles and long-term valuation.', icon: Compass },
    { name: 'Creativity', desc: 'Direct-response storytelling that breaks attention barriers.', icon: Sparkles },
    { name: 'Technology', desc: 'Custom attribution engines, APIs, and modern web architectures.', icon: Cpu },
    { name: 'Data', desc: 'Statistical significance, first-party tracking, and cohort LTV.', icon: BarChart3 },
    { name: 'Human Understanding', desc: 'Empathy for real customer motivations, fears, and purchase triggers.', icon: HeartHandshake },
  ];

  return (
    <section id="about" className="py-24 bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <span>About NEXORA DIGITAL</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Built Around One Simple Idea: Marketing Should Create Growth.
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              We founded NEXORA DIGITAL after witnessing hundreds of businesses waste capital on agencies that deliver flashy slides, obscure vanity metrics, and disconnected strategies.
            </p>

            <p className="text-base text-slate-300 leading-relaxed">
              We believe marketing is not an expense line item—it is an investment engine. By synchronizing <strong className="text-white">Strategy, Creativity, Technology, Data, and Human Understanding</strong>, we build resilient acquisition flywheels that produce measurable, compounded business value.
            </p>

            {/* Core Values / Locations */}
            <div className="pt-4 border-t border-slate-800 grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl font-bold text-white font-mono">14+</div>
                <div className="text-xs text-slate-400 mt-0.5">Global Markets Served</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-mono">100%</div>
                <div className="text-xs text-slate-400 mt-0.5">In-House Production</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-mono">3 Hubs</div>
                <div className="text-xs text-slate-400 mt-0.5">NYC • LDN • SGP</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Representation of The 5 Elements & Team Pod */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Visual Synthesis Card */}
            <div className="rounded-2xl bg-[#0E1424] border border-slate-800 p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  The NEXORA Growth Synthesis
                </span>
                <span className="text-xs text-blue-400 font-mono font-medium">5 Core Pillars</span>
              </div>

              {/* 5 Elements Stack */}
              <div className="space-y-3">
                {elements.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 flex items-start gap-3.5 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-900/40 border border-blue-700/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white flex items-center gap-2">
                          <span>{item.name}</span>
                          <span className="text-[10px] font-mono text-slate-500 font-normal">Pillar 0{idx + 1}</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Agency Leadership & Presence Banner */}
              <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-blue-400" />
                  <span>Distributed Executive Pods</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-slate-300">
                  <span>New York</span>
                  <span>•</span>
                  <span>London</span>
                  <span>•</span>
                  <span>Singapore</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
