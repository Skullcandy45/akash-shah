import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, ArrowUpRight, Cpu } from '@phosphor-icons/react';
import { siteConfig } from '../../content/site';
import { RoboticSurgeryMeshDiagram } from '../common/Visuals';

export default function PatientEducationSection() {
  const { patientEducation } = siteConfig;

  return (
    <section className="bg-alabaster-100 py-20 lg:py-28 border-b border-alabaster-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Patient Education & Checklist (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Eyebrow */}
            <div className="eyebrow text-slate-600 mb-4">
              <span>{patientEducation.eyebrow}</span>
            </div>

            {/* Zodiak Heading */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-cypress-950 leading-tight mb-5">
              {patientEducation.title}
            </h2>

            {/* Patient-friendly overview */}
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              {patientEducation.summary}
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-8">
              {patientEducation.paragraph2}
            </p>

            {/* 5-Item Checklist with Bronze Phosphor Icons */}
            <div className="space-y-3.5 w-full mb-8">
              {patientEducation.checklist.map((item) => (
                <div 
                  key={item.id} 
                  className="flex items-start gap-3.5 bg-alabaster-50 p-3.5 rounded-xl border border-alabaster-200/80 hover:border-bronze-600/40 transition-colors"
                >
                  <CheckCircle size={20} weight="fill" className="text-bronze-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-sans text-xs font-bold text-cypress-950 uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dual Pill Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/services"
                className="pill-button bg-bronze-600 text-alabaster-50 text-xs font-semibold px-6 py-3 rounded-full hover:bg-[#864c31] flex items-center gap-2 shadow-sm transition-all duration-200"
              >
                <span>Our oncology services</span>
                <ArrowRight size={14} weight="bold" />
              </Link>

              <Link
                to="/about"
                className="pill-button bg-alabaster-50 hover:bg-alabaster-200 text-cypress-950 border border-alabaster-200 text-xs font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-200"
              >
                <span>About the practice</span>
                <ArrowUpRight size={14} weight="bold" />
              </Link>
            </div>

          </div>

          {/* Right Column: High-contrast Dark Interactive Explainer Card (5 cols on lg) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-cypress-950 p-6 sm:p-7 text-alabaster-50 shadow-2xl border border-cypress-800 relative">
              
              {/* Top-Left White Pill Badge */}
              <div className="flex items-center justify-between mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-alabaster-50 text-cypress-950 text-[10px] font-bold tracking-widest uppercase shadow-sm">
                  <Cpu size={14} weight="bold" className="text-bronze-600" />
                  CLINICAL OVERVIEW
                </span>
                <span className="text-[11px] text-bronze-400 font-medium">
                  Sub-Millimeter Triangulation
                </span>
              </div>

              {/* Bespoke High-Contrast SVG Schematic */}
              <div className="w-full rounded-xl overflow-hidden bg-cypress-950 border border-cypress-800 mb-5">
                <RoboticSurgeryMeshDiagram className="w-full h-auto" />
              </div>

              {/* Technical Footnote Inside Card */}
              <div className="pt-2 border-t border-cypress-800/80 flex items-center justify-between text-xs text-alabaster-100/70">
                <span>Da Vinci Xi® Console Platform</span>
                <span className="text-bronze-400 font-semibold">Organ Preservation First</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
