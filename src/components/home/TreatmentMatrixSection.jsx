import React from 'react';
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
  ArrowRight
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

export default function TreatmentMatrixSection() {
  const { treatmentMatrix } = siteConfig;

  return (
    <section id="services-matrix" className="bg-alabaster-50 py-20 lg:py-28 border-b border-alabaster-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="eyebrow text-slate-600 mb-3 justify-center">
            <span>SERVICES & TREATMENTS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cypress-950 tracking-tight leading-tight mb-4">
            Advanced Procedures, <span className="italic font-normal text-bronze-600">Personalized Plans.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            From precision robotic organ preservation to structured active surveillance, each
            oncological plan is tailored to disease biology and your individual functional goals.
          </p>
        </div>

        {/* 4×2 Grid of 8 Horizontal Pill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12">
          {treatmentMatrix.map((item) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck;
            return (
              <Link
                key={item.id}
                to={`/services#${item.id}`}
                className="group bg-white border border-alabaster-200 rounded-2xl p-5 flex items-center justify-between hover:border-bronze-600 hover:shadow-card hover:-translate-y-0.5 transition-all duration-200 ease-emil"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  {/* Soft Bronze Circular Icon */}
                  <div className="w-11 h-11 rounded-full bg-alabaster-100 group-hover:bg-bronze-600 border border-alabaster-200 group-hover:border-bronze-600 flex items-center justify-center text-bronze-600 group-hover:text-alabaster-50 shrink-0 transition-colors duration-200">
                    <IconComponent size={20} weight="bold" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-sans text-sm font-bold text-cypress-950 group-hover:text-bronze-600 transition-colors truncate">
                      {item.title}
                    </h3>
                    <span className="text-[10px] font-semibold text-slate-600 uppercase tracking-wider block">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Right Chevron */}
                <div className="w-7 h-7 rounded-full bg-alabaster-50 group-hover:bg-alabaster-200 flex items-center justify-center text-slate-600 group-hover:text-cypress-950 shrink-0 transition-colors">
                  <CaretRight size={14} weight="bold" className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Centered Action Button */}
        <div className="text-center">
          <Link
            to="/services"
            className="pill-button bg-alabaster-100 hover:bg-cypress-900 hover:text-alabaster-50 text-cypress-950 border border-alabaster-200 text-xs font-semibold px-8 py-3.5 rounded-full inline-flex items-center gap-2 transition-all duration-200"
          >
            <span>View all treatments</span>
            <ArrowRight size={14} weight="bold" />
          </Link>
        </div>

      </div>
    </section>
  );
}
