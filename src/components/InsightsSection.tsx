import React from 'react';
import { INSIGHTS } from '../data/agencyData';
import { InsightArticle } from '../types';
import { Clock, ArrowUpRight, BookOpen, Calendar } from 'lucide-react';

interface InsightsSectionProps {
  onSelectArticle: (article: InsightArticle) => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onSelectArticle }) => {
  return (
    <section id="insights" className="py-24 bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <span>Knowledge & Intelligence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Ideas for the Digital Economy
            </h2>
            <p className="text-base sm:text-lg text-slate-300">
              Essays, frameworks, and strategic observations on media buying, algorithmic search, behavioral economics, and conversion psychology.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <BookOpen className="w-4 h-4 text-blue-400" />
            <span>Updated Monthly by Senior Partners</span>
          </div>
        </div>

        {/* 5 Articles Grid (Featured + Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSIGHTS.map((article, idx) => (
            <div
              key={article.id}
              id={`insight-card-${article.id}`}
              className={`group rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between hover:shadow-xl ${
                idx === 0 ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/20' : ''
              }`}
            >
              <div>
                {/* Meta Bar */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pb-3 border-b border-slate-800/80">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-950 border border-blue-800/60 text-blue-400 font-semibold text-[11px]">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 font-mono text-[11px]">
                      <Clock className="w-3 h-3 text-slate-500" />
                      {article.readTime}
                    </span>
                    <span className="font-mono text-[11px] text-slate-500 hidden sm:inline">
                      {article.date}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className={`font-bold text-white mb-3 group-hover:text-blue-300 transition-colors leading-snug ${
                  idx === 0 ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
                }`}>
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              {/* Author and Read CTA */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="text-xs text-slate-400">
                  By <strong className="text-slate-300">{article.author.name}</strong> • {article.author.role}
                </div>

                <button
                  id={`read-article-${article.id}`}
                  onClick={() => onSelectArticle(article)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer shrink-0"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
