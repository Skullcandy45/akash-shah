import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, ShieldCheck, Check } from '@phosphor-icons/react';
import { siteConfig } from '../../content/site';

export default function DetailedFocusSection() {
  const { detailedProcedures } = siteConfig;

  return (
    <section className="bg-alabaster-100 py-20 lg:py-28 border-b border-alabaster-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Sticky Summary & Action (4 cols on lg) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="eyebrow text-slate-600 mb-3">
              <span>SERVICES & TREATMENTS</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-cypress-950 leading-tight mb-5">
              Subspecialized Care, <span className="italic font-normal text-bronze-600">Dedicated Expertise.</span>
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Modern robotic urological oncology requires a nuanced balance between aggressive tumor
              extirpation and delicate functional preservation. Every procedure is performed according to
              standardized international oncology guidelines.
            </p>

            <div className="p-4 rounded-xl bg-alabaster-50 border border-alabaster-200 mb-8">
              <span className="text-xs font-bold text-cypress-950 block mb-1">
                Tertiary Second Opinions
              </span>
              <p className="text-xs text-slate-600">
                Facing a biopsy diagnosis or recommended major resection? Bring your scans and slides for a comprehensive, objective appraisal.
              </p>
            </div>

            <Link
              to="/services"
              className="pill-button bg-bronze-600 hover:bg-[#864c31] text-alabaster-50 text-xs font-semibold px-7 py-3.5 rounded-full inline-flex items-center gap-2 shadow-sm transition-all duration-200"
            >
              <span>View all services</span>
              <ArrowRight size={14} weight="bold" />
            </Link>
          </div>

          {/* Right Column: 2×3 Alternating Bento Grid (8 cols on lg) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {detailedProcedures.map((proc, index) => {
                const isDark = proc.theme === 'dark';
                return (
                  <div
                    key={proc.id}
                    className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-card ${
                      isDark
                        ? 'bg-cypress-900 text-alabaster-50 border border-cypress-800'
                        : 'bg-alabaster-50 text-cypress-950 border border-alabaster-200'
                    }`}
                  >
                    <div>
                      {/* Top Header Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`text-[10px] font-bold tracking-eyebrow uppercase px-2.5 py-1 rounded-full ${
                            isDark
                              ? 'bg-cypress-800 text-bronze-400 border border-cypress-700'
                              : 'bg-alabaster-100 text-bronze-600 border border-alabaster-200'
                          }`}
                        >
                          FOCUS 0{index + 1}
                        </span>
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            isDark ? 'bg-cypress-800 text-alabaster-50' : 'bg-alabaster-100 text-cypress-950'
                          }`}
                        >
                          <ShieldCheck size={16} weight="bold" />
                        </div>
                      </div>

                      {/* Title & Subhead */}
                      <h3
                        className={`font-display text-xl font-bold tracking-tight mb-2 ${
                          isDark ? 'text-alabaster-50' : 'text-cypress-950'
                        }`}
                      >
                        {proc.title}
                      </h3>
                      <p
                        className={`text-xs font-semibold mb-3 ${
                          isDark ? 'text-bronze-400' : 'text-bronze-600'
                        }`}
                      >
                        {proc.subhead}
                      </p>

                      {/* Clinical explanation */}
                      <p
                        className={`text-xs leading-relaxed mb-5 ${
                          isDark ? 'text-alabaster-100/80' : 'text-slate-600'
                        }`}
                      >
                        {proc.description}
                      </p>

                      {/* Highlights checklist */}
                      <ul className="space-y-2 mb-6">
                        {proc.highlights.map((h, i) => (
                          <li
                            key={i}
                            className={`flex items-start gap-2 text-xs leading-snug ${
                              isDark ? 'text-alabaster-100/90' : 'text-cypress-950'
                            }`}
                          >
                            <Check
                              size={14}
                              weight="bold"
                              className={`shrink-0 mt-0.5 ${
                                isDark ? 'text-bronze-400' : 'text-bronze-600'
                              }`}
                            />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* View Details Link */}
                    <div
                      className={`pt-4 border-t ${
                        isDark ? 'border-cypress-800' : 'border-alabaster-200'
                      }`}
                    >
                      <Link
                        to={`/services#${proc.id}`}
                        className={`inline-flex items-center gap-1.5 text-xs font-bold transition-colors group ${
                          isDark
                            ? 'text-bronze-400 hover:text-alabaster-50'
                            : 'text-bronze-600 hover:text-cypress-950'
                        }`}
                      >
                        <span>View clinical details</span>
                        <ArrowUpRight
                          size={14}
                          weight="bold"
                          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                        />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
