import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Certificate, ShieldPlus } from '@phosphor-icons/react';
import { siteConfig } from '../../content/site';
import { DoctorPortrait } from '../common/Visuals';

export default function ManifestoSection() {
  const { manifesto } = siteConfig;

  return (
    <section className="bg-alabaster-50 py-20 lg:py-28 border-b border-alabaster-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Manifesto & Metrics (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Eyebrow */}
            <div className="eyebrow text-slate-600 mb-4">
              <span>{manifesto.eyebrow}</span>
            </div>

            {/* High-impact Zodiak Statement */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-cypress-950 leading-tight mb-6">
              {manifesto.statement}
            </h2>

            {/* Gray paragraph with highlighted final sentence in bronze-600 */}
            <p className="text-base text-slate-600 leading-relaxed mb-8">
              {manifesto.leadParagraph}{' '}
              <span className="font-semibold text-bronze-600">
                {manifesto.highlightSentence}
              </span>
            </p>

            {/* Hairline Divider */}
            <div className="w-full h-px bg-alabaster-200 mb-8" />

            {/* 3-Column Metrics Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mb-8">
              {manifesto.metrics.map((metric, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-display text-2xl sm:text-3xl font-bold text-cypress-950 tracking-tight">
                    {metric.value}
                  </span>
                  <span className="text-xs font-bold text-cypress-900 uppercase tracking-wider mt-1">
                    {metric.label}
                  </span>
                  <span className="text-[11px] text-slate-600 leading-normal mt-0.5">
                    {metric.caption}
                  </span>
                </div>
              ))}
            </div>

            {/* Pill Button CTA */}
            <Link
              to="/about"
              className="pill-button bg-alabaster-100 hover:bg-alabaster-200 text-cypress-950 border border-alabaster-200 text-xs font-semibold px-6 py-3 rounded-full flex items-center gap-2 group transition-all duration-200"
            >
              <span>About Dr. Shah</span>
              <ArrowUpRight size={14} weight="bold" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

          </div>

          {/* Right Column: High-End Editorial Portrait with Pinned Badge (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-alabaster-200 shadow-xl bg-cypress-950 aspect-[4/5] max-w-md mx-auto group">
              
              {/* Doctor Editorial Portrait */}
              <img
                src={manifesto.image}
                alt={`${siteConfig.doctor.name} — ${siteConfig.doctor.title}`}
                className="w-full h-full object-cover object-top brightness-95 group-hover:scale-105 transition-transform duration-700 ease-emil"
                loading="lazy"
              />

              {/* Subtle Vignette Gradient for Depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-cypress-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Overlapping Solid Bronze Badge Pinned to Bottom-Left Corner */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-bronze-600 text-alabaster-50 rounded-2xl px-6 py-4 shadow-xl border border-bronze-400/30 flex items-center gap-3 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                  <Certificate size={22} weight="fill" className="text-alabaster-50" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-eyebrow text-alabaster-200 block">
                    CONSULAR CREDENTIAL
                  </span>
                  <span className="font-display text-sm font-bold tracking-tight text-alabaster-50">
                    {manifesto.badgeLabel}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
