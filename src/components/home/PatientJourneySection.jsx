import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChatsCircle, MagnifyingGlass, Stethoscope, Heartbeat } from '@phosphor-icons/react';
import { siteConfig } from '../../content/site';

const stepIcons = [
  ChatsCircle,
  MagnifyingGlass,
  Stethoscope,
  Heartbeat,
];

export default function PatientJourneySection() {
  const { patientJourney } = siteConfig;

  return (
    <section className="bg-alabaster-100 py-20 lg:py-28 border-b border-alabaster-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="eyebrow text-slate-600 mb-3 justify-center">
            <span>PATIENT JOURNEY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cypress-950 tracking-tight leading-tight mb-4">
            Trusted Uro-Oncological Care.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            From your initial consultation in Bandra West through robotic precision intervention
            and multi-year survivorship, every step is transparent and patient-centered.
          </p>
        </div>

        {/* 4-Column Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {patientJourney.map((item, index) => {
            const Icon = stepIcons[index] || ChatsCircle;
            return (
              <div
                key={item.step}
                className="bg-alabaster-50 border border-alabaster-200 rounded-2xl p-7 flex flex-col justify-between hover:border-bronze-600 hover:shadow-card hover:-translate-y-1 transition-all duration-200 relative group"
              >
                <div>
                  {/* Step Number Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-3xl font-bold text-alabaster-200 group-hover:text-bronze-600 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-alabaster-100 border border-alabaster-200 flex items-center justify-center text-cypress-900 group-hover:bg-bronze-600 group-hover:text-alabaster-50 transition-colors">
                      <Icon size={20} weight="bold" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-sans text-base font-bold text-cypress-950 tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <span className="text-xs font-medium text-slate-600 block mb-3">
                    {item.subtitle}
                  </span>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Step Indicator Pill */}
                <div className="pt-6 mt-6 border-t border-alabaster-200 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                    Phase {item.step}
                  </span>
                  <span className="text-[11px] font-semibold text-cypress-950">
                    {item.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Context Banner */}
        <div className="bg-white rounded-2xl border border-alabaster-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-bronze-600 shrink-0" />
            <p className="text-xs sm:text-sm text-cypress-950 font-medium">
              Are you or a family member seeking guidance on a newly diagnosed tumor?
            </p>
          </div>
          <Link
            to="/patient-journey"
            className="pill-button bg-alabaster-100 hover:bg-cypress-900 hover:text-alabaster-50 text-cypress-950 border border-alabaster-200 text-xs font-semibold px-5 py-2.5 rounded-full inline-flex items-center gap-1.5 shrink-0 transition-colors"
          >
            <span>Learn what to expect</span>
            <ArrowRight size={14} weight="bold" />
          </Link>
        </div>

      </div>
    </section>
  );
}
