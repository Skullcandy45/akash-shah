import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, EnvelopeSimple, MapPin, Clock, ArrowUpRight, ShieldCheck } from '@phosphor-icons/react';
import { siteConfig } from '../../content/site';

export default function Footer() {
  return (
    <footer className="bg-cypress-950 text-alabaster-100 pt-16 pb-12 border-t border-cypress-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-cypress-800/80">
          
          {/* Column 1: Practice Identity (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-cypress-900 border border-cypress-800 flex items-center justify-center text-alabaster-50 font-display font-bold text-xl">
                  {siteConfig.doctor.monogram}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-alabaster-50 tracking-tight">
                    {siteConfig.doctor.name}
                  </h3>
                  <p className="text-xs font-semibold text-bronze-400 tracking-wider uppercase">
                    {siteConfig.doctor.title}
                  </p>
                </div>
              </div>

              <p className="text-sm text-alabaster-100/80 leading-relaxed max-w-md mb-6">
                Fellowship-trained surgical oncology practice in Bandra West, Mumbai, dedicated to
                nerve-sparing robotic console surgeries, organ preservation, and evidence-guided
                genitourinary cancer care.
              </p>

              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cypress-900/80 border border-cypress-800 text-xs text-alabaster-100">
                <ShieldCheck size={16} weight="fill" className="text-bronze-400" />
                <span>MMC Reg. No. MMC/2009/04/1824 · Tertiary Referral</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-cypress-800/50">
              <span className="text-xs uppercase tracking-eyebrow text-bronze-400 font-semibold block mb-2">
                Chambers Location
              </span>
              <p className="text-xs text-alabaster-100/70 leading-relaxed">
                {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2}, {siteConfig.contact.city} – {siteConfig.contact.pincode}
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-base font-semibold text-alabaster-50 mb-5 tracking-tight">
              Practice
            </h4>
            <ul className="space-y-3 text-sm">
              {siteConfig.footer.links.practice.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-alabaster-100/80 hover:text-bronze-400 transition-colors duration-150 inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Clinical Focus (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-base font-semibold text-alabaster-50 mb-5 tracking-tight">
              Procedures
            </h4>
            <ul className="space-y-3 text-sm">
              {siteConfig.footer.links.procedures.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-alabaster-100/80 hover:text-bronze-400 transition-colors duration-150 inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Emergency (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-base font-semibold text-alabaster-50 mb-5 tracking-tight">
              Chambers & Triage
            </h4>

            <div className="space-y-4 text-xs">
              <div className="bg-cypress-900/60 p-4 rounded-xl border border-cypress-800">
                <span className="text-bronze-400 font-semibold uppercase tracking-wider block mb-1">
                  Urgent Oncology Inquiries
                </span>
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="font-display text-lg font-bold text-alabaster-50 hover:text-bronze-400 block transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
                <span className="text-[11px] text-alabaster-100/60 mt-1 block">
                  Coordinator responds within 4 business hours.
                </span>
              </div>

              <div className="flex items-start gap-2.5 text-alabaster-100/80">
                <Clock size={16} className="text-bronze-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-alabaster-50 block">Consultation Hours</span>
                  <span>{siteConfig.contact.hours.regular}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-alabaster-100/80">
                <EnvelopeSimple size={16} className="text-bronze-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-alabaster-50 block">Direct Correspondence</span>
                  <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-bronze-400 underline">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-alabaster-100/60 leading-relaxed">
          <p className="max-w-3xl">
            {siteConfig.footer.legalNotice}
          </p>
          <p className="shrink-0 text-alabaster-100/50">
            {siteConfig.footer.copyright}
          </p>
        </div>

      </div>
    </footer>
  );
}
