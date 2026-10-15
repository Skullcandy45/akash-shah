import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, GraduationCap, Hospital } from '@phosphor-icons/react';
import { siteConfig } from '../../content/site';

export default function CareTeamSection() {
  const { careTeam } = siteConfig;

  return (
    <section className="bg-alabaster-50 py-20 lg:py-28 border-b border-alabaster-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="eyebrow text-slate-600 mb-3">
              <span>OUR SPECIALISTS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cypress-950 tracking-tight leading-tight">
              Specialist-Led <span className="italic font-normal text-bronze-600">Care Team.</span>
            </h2>
          </div>

          <Link
            to="/doctors"
            className="pill-button bg-alabaster-100 hover:bg-alabaster-200 text-cypress-950 border border-alabaster-200 text-xs font-semibold px-6 py-3 rounded-full shrink-0 inline-flex items-center gap-2 self-start md:self-auto transition-all duration-200"
          >
            <span>See all specialists</span>
            <ArrowRight size={14} weight="bold" />
          </Link>
        </div>

        {/* 3-Column Grid of High-End Editorial Portrait Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careTeam.map((member, idx) => (
            <div
              key={member.id}
              className="rounded-2xl overflow-hidden border border-alabaster-200 bg-white shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col group"
            >
              {/* Top 60% Editorial Photography */}
              <div className="relative aspect-[4/4.5] w-full overflow-hidden bg-cypress-950">
                <img
                  src={member.image}
                  alt={`${member.name} — ${member.role}`}
                  className="w-full h-full object-cover object-top brightness-95 group-hover:scale-105 transition-transform duration-700 ease-emil"
                  loading="lazy"
                />

                {/* Subtle Vignette Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-cypress-950/60 via-transparent to-transparent pointer-events-none" />

                {/* Role Pill Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] font-bold tracking-eyebrow uppercase px-3 py-1 rounded-full bg-cypress-950/90 text-alabaster-50 border border-cypress-800 backdrop-blur-md shadow-sm">
                    {idx === 0 ? 'LEAD ROBOTIC SURGEON' : idx === 1 ? 'MEDICAL ONCOLOGY' : 'DIAGNOSTIC PATHOLOGY'}
                  </span>
                </div>
              </div>

              {/* Bottom 40% Clean Details Footer */}
              <div className="p-6 bg-white flex-1 flex flex-col justify-between border-t border-alabaster-200">
                <div>
                  <h3 className="font-display text-xl font-bold text-cypress-950 tracking-tight mb-1 group-hover:text-bronze-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-bronze-600 uppercase tracking-wide mb-3">
                    {member.role}
                  </p>

                  <div className="flex items-start gap-2 text-xs text-slate-600 mb-2">
                    <GraduationCap size={16} weight="bold" className="text-cypress-900 shrink-0 mt-0.5" />
                    <span className="leading-snug">{member.credentials}</span>
                  </div>

                  <div className="flex items-start gap-2 text-xs text-slate-600 mb-4">
                    <Hospital size={16} weight="bold" className="text-cypress-900 shrink-0 mt-0.5" />
                    <span className="leading-snug">{member.hospitalAffiliations}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-alabaster-200 flex items-center justify-between">
                  <span className="text-[11px] text-slate-600 font-medium">
                    {member.focus}
                  </span>
                  <Link
                    to="/doctors"
                    className="text-cypress-950 group-hover:text-bronze-600 transition-colors p-1"
                    aria-label={`View profile for ${member.name}`}
                  >
                    <ArrowUpRight size={16} weight="bold" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
