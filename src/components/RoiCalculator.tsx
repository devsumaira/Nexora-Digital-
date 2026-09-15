import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, ArrowRight, ShieldCheck } from 'lucide-react';

interface RoiCalculatorProps {
  onApplyForAudit: (estimatedGain: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onApplyForAudit }) => {
  const [monthlySpend, setMonthlySpend] = useState<number>(15000);
  const [currentRoas, setCurrentRoas] = useState<number>(2.2);

  // Benchmarked NEXORA target ROAS based on audit portfolio
  const nexoraProjectedRoas = Math.max(currentRoas * 1.5, 3.8);

  const currentRevenue = monthlySpend * currentRoas;
  const projectedRevenue = monthlySpend * nexoraProjectedRoas;
  const netMonthlyGain = projectedRevenue - currentRevenue;
  const netAnnualGain = netMonthlyGain * 12;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section className="py-20 bg-[#0B0F19] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-slate-800">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold">
                <Calculator className="w-3.5 h-3.5" />
                <span>Interactive Growth Model</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Simulate Your Potential Revenue Expansion
              </h3>
              <p className="text-sm text-slate-300 max-w-xl">
                Adjust your current monthly paid acquisition spend and baseline ROAS to calculate potential incremental scale under our optimized media framework.
              </p>
            </div>

            <div className="text-xs text-slate-400 font-mono bg-slate-950 p-3 rounded-lg border border-slate-800 shrink-0">
              Benchmark: <strong className="text-emerald-400">3.8× Historical Agency Portfolio ROAS</strong>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Monthly Spend Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs sm:text-sm font-semibold text-slate-200">
                  <label htmlFor="spend-slider">Monthly Paid Media Spend:</label>
                  <span className="font-mono text-base font-bold text-blue-400">
                    {formatCurrency(monthlySpend)}
                  </span>
                </div>
                <input
                  id="spend-slider"
                  type="range"
                  min="2000"
                  max="100000"
                  step="1000"
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>$2,000 / mo</span>
                  <span>$50,000 / mo</span>
                  <span>$100,000+ / mo</span>
                </div>
              </div>

              {/* Current ROAS Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs sm:text-sm font-semibold text-slate-200">
                  <label htmlFor="roas-slider">Current Blended ROAS:</label>
                  <span className="font-mono text-base font-bold text-slate-200">
                    {currentRoas.toFixed(1)}×
                  </span>
                </div>
                <input
                  id="roas-slider"
                  type="range"
                  min="1.0"
                  max="4.0"
                  step="0.1"
                  value={currentRoas}
                  onChange={(e) => setCurrentRoas(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-slate-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>1.0× (Break-even)</span>
                  <span>2.5× (Moderate)</span>
                  <span>4.0× (High-Efficiency)</span>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs text-slate-400 leading-relaxed flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  Projections utilize multi-channel media mix modeling (Meta CAPI, Google Ads, retention email integration) benchmarked against audited client case studies.
                </span>
              </div>

            </div>

            {/* Output Projection Display */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-7 rounded-xl bg-slate-950 border border-slate-800 space-y-5">
                
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-800 text-xs">
                  <div>
                    <span className="text-slate-400 block mb-1">Current Monthly Gross</span>
                    <span className="text-lg font-bold text-slate-300 font-mono">
                      {formatCurrency(currentRevenue)}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-1">Projected Optimized Gross</span>
                    <span className="text-lg font-bold text-blue-400 font-mono">
                      {formatCurrency(projectedRevenue)}
                    </span>
                  </div>
                </div>

                {/* Net Expansion Highlight */}
                <div className="p-4 rounded-lg bg-blue-950/40 border border-blue-800/50 space-y-1">
                  <div className="flex items-center justify-between text-xs text-blue-300 font-semibold">
                    <span>Estimated Incremental Monthly Gain</span>
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                    +{formatCurrency(netMonthlyGain)} / mo
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    Projected Annualized Pipeline Impact: <strong className="text-white">+{formatCurrency(netAnnualGain)} / yr</strong>
                  </div>
                </div>

                <button
                  id="claim-custom-audit-btn"
                  onClick={() => onApplyForAudit(formatCurrency(netAnnualGain))}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors cursor-pointer"
                >
                  <span>Claim Strategy Audit for This Projection</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
