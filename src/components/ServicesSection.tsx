import React from 'react';
import {
  Compass,
  Share2,
  Search,
  Target,
  FileText,
  Mail,
  Sparkles,
  BarChart3,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { SERVICES } from '../data/agencyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-blue-400" />;
      case 'Share2':
        return <Share2 className="w-6 h-6 text-blue-400" />;
      case 'Search':
        return <Search className="w-6 h-6 text-blue-400" />;
      case 'Target':
        return <Target className="w-6 h-6 text-blue-400" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-blue-400" />;
      case 'Mail':
        return <Mail className="w-6 h-6 text-blue-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-blue-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-blue-400" />;
      default:
        return <Compass className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Everything Your Brand Needs to Grow
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We reject fragmented agency silos. Our growth systems unify strategic brand architecture, performance media, and deep technical engineering under one roof.
          </p>
        </div>

        {/* 8 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group relative flex flex-col justify-between p-6 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-blue-500/50 hover:bg-slate-900/90 transition-all duration-300 hover:shadow-xl hover:shadow-blue-950/20"
            >
              <div>
                {/* Icon & Category Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-600/20 group-hover:border-blue-500/40 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800/80">
                    Growth Pillar
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {service.shortDescription}
                </p>

                {/* Bullet Deliverables Preview */}
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-800/80 text-xs text-slate-300">
                  {service.deliverables.slice(0, 2).map((deliv, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{deliv}</span>
                    </div>
                  ))}
                  <div className="text-[11px] text-slate-400 font-mono italic">
                    +{service.deliverables.length - 2} additional system modules
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                id={`explore-service-${service.id}`}
                onClick={() => onSelectService(service)}
                className="w-full mt-2 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors cursor-pointer"
              >
                <span>Explore Service Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
