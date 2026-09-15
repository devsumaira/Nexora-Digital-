import React, { useState, useEffect, useRef } from 'react';
import { STATS, CLIENT_LOGOS } from '../data/agencyData';
import { Award, TrendingUp, CheckCircle, Shield } from 'lucide-react';

export const TrustStats: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counters, setCounters] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate counters smoothly
          const targetValues = STATS.map(s => s.value);
          const duration = 1800; // ms
          const frameRate = 30;
          const totalFrames = Math.round(duration / frameRate);
          let frame = 0;

          const timer = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            setCounters(targetValues.map(target => {
              return parseFloat((target * easeProgress).toFixed(1));
            }));

            if (frame >= totalFrames) {
              clearInterval(timer);
              setCounters(targetValues);
            }
          }, frameRate);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="trust-stats"
      ref={sectionRef}
      className="py-16 bg-[#0E1424] border-y border-slate-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-14">
          {STATS.map((stat, idx) => {
            const displayValue = hasAnimated
              ? stat.isFloat
                ? counters[idx].toFixed(1)
                : Math.round(counters[idx])
              : stat.value;

            return (
              <div
                key={stat.label}
                id={`stat-card-${idx}`}
                className="group relative p-5 sm:p-6 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-950/20"
              >
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-mono tracking-tight group-hover:text-blue-400 transition-colors">
                    {displayValue}
                  </span>
                  <span className="text-2xl sm:text-3xl font-bold text-blue-500 font-mono">
                    {stat.suffix}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-slate-200 tracking-tight">
                  {stat.label}
                </h3>
                <p className="text-xs text-slate-400 mt-1 font-normal">
                  {stat.desc}
                </p>
                <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            );
          })}
        </div>

        {/* Client Sectors & Authority Bar */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-slate-400 font-semibold shrink-0">
            <Shield className="w-4 h-4 text-blue-500" />
            <span>Trusted By Ambitious Brands Across</span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4 w-full">
            {CLIENT_LOGOS.map((client) => (
              <div
                key={client.name}
                className="px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-center gap-2 hover:border-slate-700 transition-colors"
              >
                <span className="font-semibold text-white">{client.name}</span>
                <span className="text-[10px] text-slate-400 px-1.5 py-0.5 rounded bg-slate-800/80 font-mono">
                  {client.sector}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
