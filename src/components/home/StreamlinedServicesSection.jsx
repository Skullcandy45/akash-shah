import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Heartbeat, 
  Crosshair, 
  ArrowsClockwise, 
  Eye, 
  FirstAid, 
  ChartLineUp, 
  Path,
  CaretRight,
  Check,
  CalendarCheck,
  Clock,
  ArrowRight,
  CheckCircle
} from '@phosphor-icons/react';
import { siteConfig } from '../../content/site';

const iconMap = {
  ShieldCheck,
  Heartbeat,
  Crosshair,
  ArrowsClockwise,
  Eye,
  FirstAid,
  ChartLineUp,
  Path,
};

export default function StreamlinedServicesSection() {
  const { procedureCategories, streamlinedProcedures } = siteConfig;
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedId, setSelectedId] = useState(streamlinedProcedures[0].id);

  // Filter procedures by category
  const filteredProcedures = activeCategory === 'all'
    ? streamlinedProcedures
    : streamlinedProcedures.filter((p) => p.category === activeCategory);

  // Selected procedure object (fallback to first filtered item if current selected isn't in filter)
  const currentProcedure = filteredProcedures.find((p) => p.id === selectedId) || filteredProcedures[0];

  const CurrentIcon = currentProcedure ? iconMap[currentProcedure.icon] || ShieldCheck : ShieldCheck;

  return (
    <section id="services-matrix" className="bg-alabaster-50 py-16 lg:py-24 border-b border-alabaster-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="eyebrow text-slate-600 mb-3">
              <span>SPECIALIZED PROCEDURES & ONCOLOGY</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cypress-950 tracking-tight leading-tight">
              Advanced Procedures, <span className="italic font-normal text-bronze-600">Personalized Plans.</span>
            </h2>
          </div>

          <Link
            to="/services"
            className="pill-button bg-alabaster-100 hover:bg-cypress-900 hover:text-alabaster-50 text-cypress-950 border border-alabaster-200 text-xs font-semibold px-6 py-3 rounded-full shrink-0 inline-flex items-center gap-2 self-start md:self-auto transition-colors"
          >
            <span>View full surgical directory</span>
            <ArrowRight size={14} weight="bold" />
          </Link>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar" role="tablist">
          {procedureCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setActiveCategory(cat.id);
                  // Auto-select first item in new category
                  const newFiltered = cat.id === 'all'
                    ? streamlinedProcedures
                    : streamlinedProcedures.filter((p) => p.category === cat.id);
                  if (newFiltered.length > 0) {
                    setSelectedId(newFiltered[0].id);
                  }
                }}
                className={`text-xs font-semibold px-4 py-2 rounded-full shrink-0 transition-all duration-200 ease-emil ${
                  isActive
                    ? 'bg-cypress-900 text-alabaster-50 shadow-sm'
                    : 'bg-alabaster-100 text-slate-600 hover:text-cypress-950 hover:bg-alabaster-200/60'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Streamlined Master-Detail Interactive Showcase (Compact & High-Scannability) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Compact Procedure Selector List (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-3">
            {filteredProcedures.map((proc) => {
              const Icon = iconMap[proc.icon] || ShieldCheck;
              const isSelected = currentProcedure?.id === proc.id;

              return (
                <div key={proc.id} className="flex flex-col">
                  {/* Selector Item */}
                  <button
                    onClick={() => setSelectedId(proc.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 ease-emil flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-white border-bronze-600 shadow-card -translate-y-0.5'
                        : 'bg-white/70 border-alabaster-200 hover:bg-white hover:border-alabaster-200/80'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-bronze-600 text-alabaster-50'
                            : 'bg-alabaster-100 text-cypress-950'
                        }`}
                      >
                        <Icon size={18} weight="bold" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-bronze-600 block">
                          {proc.badge}
                        </span>
                        <h3 className="font-sans text-sm font-bold text-cypress-950 truncate">
                          {proc.title}
                        </h3>
                      </div>
                    </div>

                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-cypress-950 text-alabaster-50'
                          : 'bg-alabaster-100 text-slate-600'
                      }`}
                    >
                      <CaretRight size={12} weight="bold" />
                    </div>
                  </button>

                  {/* Mobile Accordion Inline Body (Visible only on smaller screens) */}
                  {isSelected && (
                    <div className="lg:hidden mt-2 p-5 bg-alabaster-100 rounded-2xl border border-alabaster-200 animate-in fade-in-50 duration-200">
                      <h4 className="font-sans text-base font-bold text-cypress-950 mb-1">
                        {proc.title}
                      </h4>
                      <p className="text-xs font-semibold text-bronze-600 mb-3">
                        {proc.subhead}
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {proc.description}
                      </p>

                      <div className="space-y-2 mb-4">
                        {proc.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-cypress-950">
                            <Check size={14} weight="bold" className="text-bronze-600 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 border-t border-alabaster-200 flex flex-col gap-2">
                        <div className="text-[11px] text-slate-600">
                          <span className="font-bold text-cypress-950">Recovery: </span>
                          <span>{proc.recovery}</span>
                        </div>
                        <a
                          href="#book-appointment"
                          className="w-full pill-button bg-bronze-600 text-alabaster-50 text-xs font-bold py-2.5 rounded-full flex items-center justify-center gap-2 mt-2"
                        >
                          <CalendarCheck size={15} weight="bold" />
                          <span>Schedule Consultation</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: High-Craft Desktop Detail Panel (7 cols on lg, sticky) */}
          <div className="hidden lg:block lg:col-span-7 sticky top-28">
            {currentProcedure && (
              <div className="bg-white border border-alabaster-200 rounded-3xl p-8 sm:p-10 shadow-card transition-all duration-300">
                
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="text-[10px] font-bold tracking-eyebrow uppercase px-3 py-1 rounded-full bg-alabaster-100 text-bronze-600 border border-alabaster-200 inline-block mb-3">
                      {currentProcedure.badge}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-cypress-950 tracking-tight mb-2">
                      {currentProcedure.title}
                    </h3>
                    <p className="text-sm font-semibold text-bronze-600">
                      {currentProcedure.subhead}
                    </p>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-cypress-950 text-alabaster-50 flex items-center justify-center shrink-0 shadow-sm">
                    <CurrentIcon size={24} weight="bold" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {currentProcedure.description}
                </p>

                {/* Key Surgical Benchmarks Grid */}
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-cypress-950 block mb-3">
                    Key Surgical Benchmarks & Functional Advantages
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentProcedure.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 bg-alabaster-50 p-3 rounded-xl border border-alabaster-200/80 text-xs text-cypress-950 font-medium"
                      >
                        <Check size={14} weight="bold" className="text-bronze-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clinical Indication & Recovery Row */}
                <div className="bg-alabaster-100 rounded-2xl p-4 border border-alabaster-200 space-y-2 mb-8">
                  <div className="flex items-start gap-2 text-xs text-slate-600">
                    <span className="font-bold text-cypress-950 shrink-0">Indication:</span>
                    <span>{currentProcedure.indication}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-600">
                    <span className="font-bold text-cypress-950 shrink-0">Recovery Profile:</span>
                    <span>{currentProcedure.recovery}</span>
                  </div>
                </div>

                {/* Action Bar */}
                <div className="pt-4 border-t border-alabaster-200 flex items-center justify-between gap-4">
                  <a
                    href="#book-appointment"
                    className="pill-button bg-bronze-600 hover:bg-[#864c31] text-alabaster-50 text-xs font-bold px-7 py-3 rounded-full inline-flex items-center gap-2 shadow-sm transition-all"
                  >
                    <CalendarCheck size={16} weight="bold" />
                    <span>Consult Dr. Akash Shah</span>
                  </a>

                  <Link
                    to="/services"
                    className="text-xs font-semibold text-cypress-950 hover:text-bronze-600 transition-colors inline-flex items-center gap-1"
                  >
                    <span>Read complete protocol</span>
                    <ArrowRight size={13} weight="bold" />
                  </Link>
                </div>

              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
