import React from 'react';
import { INDUSTRIES } from '../data/agencyData';
import {
  ShoppingBag,
  Cpu,
  GraduationCap,
  Stethoscope,
  Building2,
  Coins,
  Hotel,
  Briefcase,
  Rocket,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

interface IndustriesSectionProps {
  onSelectIndustry?: (industryId: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onSelectIndustry }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-blue-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-blue-400" />;
      case 'Stethoscope':
        return <Stethoscope className="w-5 h-5 text-blue-400" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-blue-400" />;
      case 'Coins':
        return <Coins className="w-5 h-5 text-blue-400" />;
      case 'Hotel':
        return <Hotel className="w-5 h-5 text-blue-400" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-blue-400" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-blue-400" />;
      default:
        return <Briefcase className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="industries" className="py-24 bg-[#0E1424] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <span>Sector Specialization</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Industries We Help
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every vertical has unique unit economics, sales cycles, and customer acquisition nuances. We build tailored playbooks that exploit specific market advantages.
          </p>
        </div>

        {/* 9 Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              id={`industry-card-${ind.id}`}
              className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between hover:bg-slate-900/90"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
                    {getIcon(ind.iconName)}
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-mono">
                      Benchmarked Impact
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-400">
                      {ind.typicalRoi}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {ind.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {ind.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="text-slate-300 font-medium">Growth Lever:</span>
                <span className="text-blue-400 font-mono text-[11px]">{ind.growthLever}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
