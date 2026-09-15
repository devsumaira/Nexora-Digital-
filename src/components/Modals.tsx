import React, { useState } from 'react';
import { ServiceItem, CaseStudyItem, InsightArticle } from '../types';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Clock, Quote, Calendar, Send } from 'lucide-react';

// 1. Service Deep-Dive Modal
interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookForService: (serviceName: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onBookForService }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-slate-700 p-6 sm:p-8 text-white shadow-2xl overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
          <span>Service Architecture Breakdown</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold mb-3">{service.title}</h3>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
          {service.detailedOverview}
        </p>

        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 mb-6">
          <span className="text-xs uppercase text-slate-400 font-mono block mb-1">Target Benchmark:</span>
          <span className="text-base font-bold text-emerald-400">{service.metricsTarget}</span>
        </div>

        <div className="space-y-3 mb-6">
          <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold">
            Included Deliverables & Sprints:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.deliverables.map((d, i) => (
              <div key={i} className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 flex items-start gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{d}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs text-slate-400">Technology Stack:</span>
          {service.technologies.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded bg-slate-800 text-xs font-mono text-slate-300">
              {t}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onBookForService(service.title);
            }}
            className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>Consult for {service.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// 2. Case Study Deep-Dive Modal
interface CaseStudyModalProps {
  study: CaseStudyItem | null;
  onClose: () => void;
  onBookCall: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ study, onClose, onBookCall }) => {
  if (!study) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl rounded-2xl bg-slate-900 border border-slate-700 p-6 sm:p-8 text-white shadow-2xl overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <span className="px-2.5 py-0.5 rounded bg-blue-950 border border-blue-800 text-xs text-blue-400 font-semibold uppercase">
            {study.industry}
          </span>
          <span className="text-xs text-slate-400 font-mono">Client: {study.client}</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black mb-2">{study.title}</h3>

        <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-800/60 flex items-center justify-between mb-6">
          <div>
            <span className="text-xs text-slate-400 font-mono uppercase block">Attributed Outcome:</span>
            <span className="text-xl font-bold text-white">{study.metricLabel}</span>
          </div>
          <div className="text-3xl font-black text-emerald-400 font-mono">
            {study.headlineMetric}
          </div>
        </div>

        <div className="space-y-4 text-sm text-slate-300 leading-relaxed mb-6">
          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1 font-mono">
              The Baseline Challenge:
            </h4>
            <p className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300">
              {study.challenge}
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1 font-mono">
              The NEXORA Growth Blueprint:
            </h4>
            <p className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300">
              {study.strategy}
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1 font-mono">
              Commercial Impact & ROI:
            </h4>
            <p className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300">
              {study.result}
            </p>
          </div>
        </div>

        {/* Client Quote */}
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 italic text-sm text-slate-300 mb-6 flex items-start gap-3">
          <Quote className="w-5 h-5 text-blue-400 shrink-0 mt-1" />
          <div>
            <p className="mb-2">"{study.quote.text}"</p>
            <div className="not-italic text-xs text-slate-400">
              <strong className="text-white">{study.quote.author}</strong> — {study.quote.role}
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onBookCall();
            }}
            className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>Replicate These Results</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// 3. Article Reader Modal
interface ArticleModalProps {
  article: InsightArticle | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-slate-700 p-6 sm:p-8 text-white shadow-2xl overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 text-xs text-slate-400 mb-3 pb-3 border-b border-slate-800">
          <span className="px-2.5 py-0.5 rounded bg-blue-950 border border-blue-800 text-blue-400 font-semibold text-[11px]">
            {article.category}
          </span>
          <span>{article.readTime}</span>
          <span>•</span>
          <span>{article.date}</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 leading-snug">{article.title}</h3>

        <div className="text-xs text-slate-400 mb-6 font-mono">
          Author: <strong className="text-slate-200">{article.author.name}</strong> ({article.author.role})
        </div>

        <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
          {article.contentParagraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Need actionable implementation for this strategy?</span>
          <a
            href="#contact"
            onClick={onClose}
            className="text-blue-400 font-semibold hover:underline"
          >
            Speak with our strategists →
          </a>
        </div>
      </div>
    </div>
  );
};

// 4. Quick Strategy Call Booking Modal
interface StrategyCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillNote?: string;
}

export const StrategyCallModal: React.FC<StrategyCallModalProps> = ({ isOpen, onClose, prefillNote }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-700 p-6 sm:p-8 text-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmed ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold">Consultation Confirmed!</h4>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
              Thank you, <strong className="text-white">{name}</strong>. A Senior Partner will reach out via <span className="text-blue-400">{email}</span> within 4 hours with your preliminary growth audit.
            </p>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors cursor-pointer"
            >
              Return to Website
            </button>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>Priority Executive Slot</span>
            </div>

            <h3 className="text-2xl font-bold mb-2">Book Your Strategy Call</h3>
            <p className="text-xs text-slate-400 mb-6">
              30-minute growth architecture review. No sales fluff. Direct insights into your unit economics and acquisition bottlenecks.
            </p>

            {prefillNote && (
              <div className="p-3 rounded-lg bg-blue-950/50 border border-blue-800/60 text-xs text-blue-300 mb-4">
                Selected Focus: <strong className="text-white">{prefillNote}</strong>
              </div>
            )}

            <form onSubmit={handleQuickSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Business Email *</label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Company / Brand</label>
                  <input
                    type="text"
                    placeholder="Acme Inc."
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors cursor-pointer shadow-lg shadow-blue-600/30"
                >
                  Confirm Priority Booking
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 font-mono text-center">
                <ShieldCheck className="w-3 h-3 text-blue-400" />
                <span>NDA Protected • 100% Confidential</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
