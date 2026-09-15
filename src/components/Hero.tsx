import React, { useState } from 'react';
import {
  ArrowRight,
  TrendingUp,
  BarChart2,
  DollarSign,
  Users,
  Search,
  CheckCircle2,
  Activity,
  Zap,
  Layers,
  ArrowUpRight,
  ShieldAlert
} from 'lucide-react';
import { BRAND } from '../data/agencyData';

interface HeroProps {
  onBookCallClick: () => void;
  onExploreServicesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookCallClick, onExploreServicesClick }) => {
  const [activeTimeframe, setActiveTimeframe] = useState<'30D' | '90D' | '1Y'>('90D');
  const [activeChannel, setActiveChannel] = useState<'all' | 'paid' | 'organic' | 'retention'>('all');

  // Realistic metrics matching timeframe
  const metrics = {
    '30D': { roas: '3.6x', roasDelta: '+34%', cac: '$31.20', cacDelta: '-14%', pipeline: '$580K', leads: '1,420', visitors: '148K' },
    '90D': { roas: '3.8x', roasDelta: '+42%', cac: '$28.40', cacDelta: '-22%', pipeline: '$1.84M', leads: '4,890', visitors: '492K' },
    '1Y': { roas: '4.2x', roasDelta: '+68%', cac: '$24.90', cacDelta: '-31%', pipeline: '$8.20M', leads: '21.4K', visitors: '2.1M' }
  }[activeTimeframe];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-8 text-left">
            
            {/* Trust Pill / Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Next-Gen Growth Agency
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs font-medium text-blue-400">Data-Backed Architecture</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Turn Digital Attention Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400">Business Growth.</span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
                Strategic digital marketing, powerful creative campaigns, and data-driven growth systems built to help ambitious businesses scale profitably.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                id="hero-primary-cta"
                onClick={onBookCallClick}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base transition-all duration-200 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 active:scale-[0.98] cursor-pointer"
              >
                <span>Book a Strategy Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={onExploreServicesClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-medium text-base transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <span>Explore Our Services</span>
              </button>
            </div>

            {/* Small Trust Indicators */}
            <div className="pt-4 border-t border-slate-800/90 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                <span className="text-slate-200 font-semibold tracking-wide">Strategy</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                <span className="text-slate-200 font-semibold tracking-wide">Creativity</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                <span className="text-slate-200 font-semibold tracking-wide">Performance</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                <span className="text-slate-200 font-semibold tracking-wide">Growth</span>
              </div>
            </div>

            {/* Proven track metric mini-banner */}
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/40 border border-slate-800/80 text-xs text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                <strong className="text-slate-200">$48M+</strong> verified client revenue managed across North America, Europe & APAC.
              </span>
            </div>

          </div>

          {/* Right Column: Premium Marketing Growth & Analytics Visual Environment */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div
              id="hero-analytics-dashboard"
              className="relative rounded-2xl bg-[#0F172A]/90 border border-slate-800/90 p-5 sm:p-6 shadow-2xl shadow-black/40 backdrop-blur-sm"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/70"></div>
                  <span className="text-xs font-mono text-slate-400 ml-2 font-medium">
                    NEXORA Engine • Client Telemetry v4.2
                  </span>
                </div>

                {/* Timeframe selector */}
                <div className="flex items-center gap-1 bg-slate-900 rounded-md p-1 border border-slate-800 text-[11px] font-medium">
                  {(['30D', '90D', '1Y'] as const).map((t) => (
                    <button
                      key={t}
                      id={`timeframe-btn-${t}`}
                      onClick={() => setActiveTimeframe(t)}
                      className={`px-2 py-0.5 rounded ${
                        activeTimeframe === t
                          ? 'bg-blue-600 text-white font-semibold'
                          : 'text-slate-400 hover:text-white'
                      } transition-colors`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Primary Metric Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                    <span>Blended ROAS</span>
                    <span className="text-emerald-400 font-semibold">{metrics.roasDelta}</span>
                  </div>
                  <div className="text-xl font-bold text-white font-mono">{metrics.roas}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Target: 3.0x</div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                    <span>Target CAC</span>
                    <span className="text-emerald-400 font-semibold">{metrics.cacDelta}</span>
                  </div>
                  <div className="text-xl font-bold text-white font-mono">{metrics.cac}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Efficiency index</div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                    <span>Pipeline</span>
                    <TrendingUp className="w-3 h-3 text-blue-400" />
                  </div>
                  <div className="text-xl font-bold text-white font-mono">{metrics.pipeline}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Attributed Value</div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                    <span>Qualified Leads</span>
                    <Users className="w-3 h-3 text-indigo-400" />
                  </div>
                  <div className="text-xl font-bold text-white font-mono">{metrics.leads}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Commercial intent</div>
                </div>
              </div>

              {/* Graphical Visualization (Rising Growth Curve SVG) */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/90 mb-4">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="text-slate-300 font-medium">Revenue Velocity vs Ad Spend</span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px]">
                    <span className="text-slate-400 flex items-center gap-1">
                      <span className="w-3 h-0.5 bg-blue-500 inline-block"></span> Revenue ($)
                    </span>
                    <span className="text-slate-500 flex items-center gap-1">
                      <span className="w-3 h-0.5 bg-slate-600 inline-block"></span> Ad Spend ($)
                    </span>
                  </div>
                </div>

                {/* SVG Curve Chart */}
                <div className="w-full h-36 relative">
                  <svg viewBox="0 0 500 140" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Horizontal Grid lines */}
                    <line x1="0" y1="30" x2="500" y2="30" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                    <line x1="0" y1="70" x2="500" y2="70" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                    <line x1="0" y1="110" x2="500" y2="110" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />

                    {/* Spend line (gentle linear slope) */}
                    <path
                      d="M 0 120 Q 150 110 300 95 T 500 80"
                      fill="none"
                      stroke="#475569"
                      strokeWidth="2"
                    />

                    {/* Revenue Area */}
                    <path
                      d="M 0 115 Q 120 100 240 65 T 500 15 L 500 140 L 0 140 Z"
                      fill="url(#curveGradient)"
                    />

                    {/* Revenue Line (exponential compounding) */}
                    <path
                      d="M 0 115 Q 120 100 240 65 T 500 15"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />

                    {/* Key data points */}
                    <circle cx="240" cy="65" r="4" fill="#60A5FA" className="animate-pulse" />
                    <circle cx="500" cy="15" r="5" fill="#3B82F6" stroke="#DBEAFE" strokeWidth="2" />
                  </svg>

                  {/* Floating Metric Callout Tag */}
                  <div className="absolute top-2 right-2 bg-blue-900/90 border border-blue-500/50 px-2.5 py-1 rounded shadow-lg text-[11px] font-mono text-white flex items-center gap-1.5">
                    <TrendingUp className="w-3 h-3 text-emerald-400" />
                    <span>Scale Inflection: +187%</span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-[10px] text-slate-500 mt-2 font-mono">
                  <span>Day 01 (Launch)</span>
                  <span>Day 30 (Learning Phase Exit)</span>
                  <span>Day 60 (Channel Scaling)</span>
                  <span>Day 90 (Compounding Peak)</span>
                </div>
              </div>

              {/* Live Simulated Multi-Channel Performance Feed */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Activity className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                    Active Channel Allocations
                  </span>
                  <span className="text-[11px] text-emerald-400 font-mono">Real-time Optimization Active</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setActiveChannel(activeChannel === 'paid' ? 'all' : 'paid')}
                    className={`p-2 rounded border text-left transition-colors cursor-pointer flex items-center justify-between ${
                      activeChannel === 'paid'
                        ? 'bg-blue-950/80 border-blue-500'
                        : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      <span className="text-slate-300">Paid Search & Social</span>
                    </div>
                    <span className="text-white font-mono font-medium">4.1x ROAS</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveChannel(activeChannel === 'organic' ? 'all' : 'organic')}
                    className={`p-2 rounded border text-left transition-colors cursor-pointer flex items-center justify-between ${
                      activeChannel === 'organic'
                        ? 'bg-blue-950/80 border-indigo-500'
                        : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                      <span className="text-slate-300">Organic & SEO</span>
                    </div>
                    <span className="text-white font-mono font-medium">+240% Inbound</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveChannel(activeChannel === 'retention' ? 'all' : 'retention')}
                    className={`p-2 rounded border text-left transition-colors cursor-pointer flex items-center justify-between ${
                      activeChannel === 'retention'
                        ? 'bg-blue-950/80 border-emerald-500'
                        : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span className="text-slate-300">Retention & Email</span>
                    </div>
                    <span className="text-white font-mono font-medium">32% Share</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
