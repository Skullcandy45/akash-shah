import React from 'react';
import { 
  CalendarCheck, 
  ArrowRight, 
  Clock, 
  PhoneCall, 
  MapPin, 
  ShieldCheck, 
  UserCircle,
  WhatsappLogo,
  Star
} from '@phosphor-icons/react';
import { siteConfig } from '../../content/site';
import { DoctorPortrait } from '../common/Visuals';

export default function HeroSection() {
  return (
    <section className="relative bg-cypress-950 text-alabaster-50 pt-12 pb-24 md:pb-36 lg:pb-44 overflow-hidden">
      {/* Background Architectural Mesh & Radial Glow Geometry */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle Radial Glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-cypress-800/40 blur-3xl" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-bronze-600/15 blur-[120px]" />
        
        {/* Precision Geometric Grid Lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="heroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#FCFBF7" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>

        {/* Diagonal Light Path */}
        <div className="absolute -right-40 top-0 w-[600px] h-[600px] bg-gradient-to-b from-bronze-400/10 via-cypress-800/20 to-transparent rotate-45 transform origin-top blur-xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* UPPER HERO SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-4 md:pt-10">
          
          {/* Left Column: Eyebrow, Zodiak Headline, Subtitle, Dual CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Eyebrow */}
            <div className="eyebrow eyebrow-dark text-alabaster-100/90 bg-cypress-900/80 border border-cypress-800/80 px-3.5 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              <span>BANDRA WEST · MUMBAI · SURGICAL ONCOLOGY</span>
            </div>

            {/* Zodiak Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-alabaster-50 leading-[1.08] mb-6">
              Clarity & Precision You Can{' '}
              <span className="italic font-normal text-bronze-400">Feel Confident In.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-alabaster-100/80 font-light leading-relaxed max-w-2xl mb-8">
              Fellowship-trained robotic console surgery and organ-preserving oncology. Providing
              compassionate, tertiary-grade urological cancer care with an uncompromised commitment to
              continence and quality of life.
            </p>

            {/* Triple Action CTAs (Qobo inspired) */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#book-appointment"
                className="pill-button bg-bronze-600 text-alabaster-50 font-semibold text-sm px-6 sm:px-7 py-3.5 rounded-full hover:bg-[#864c31] shadow-lg shadow-bronze-600/20 w-full sm:w-auto flex items-center justify-center gap-2 group transition-all"
              >
                <CalendarCheck size={18} weight="bold" />
                <span>Book Appointment</span>
                <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://wa.me/919820000000?text=Hello%20Dr.%20Akash%20Shah%27s%20clinical%20team%2C%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="pill-button bg-[#25D366] hover:bg-[#20ba59] text-cypress-950 font-bold text-sm px-5 sm:px-6 py-3.5 rounded-full shadow-lg shadow-emerald-500/20 w-full sm:w-auto flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <WhatsappLogo size={18} weight="fill" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href="#services-matrix"
                className="pill-button bg-white/10 hover:bg-white/15 text-alabaster-50 border border-white/20 font-medium text-sm px-5 sm:px-6 py-3.5 rounded-full backdrop-blur-sm w-full sm:w-auto flex items-center justify-center gap-2 transition-all"
              >
                <span>Explore Procedures</span>
              </a>
            </div>

            {/* Trust badge under CTAs */}
            <div className="mt-8 pt-6 border-t border-cypress-800/70 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-alabaster-100/70">
              <span className="inline-flex items-center gap-1.5 font-medium text-alabaster-50">
                <ShieldCheck size={16} className="text-bronze-400" />
                Evidence-Based Tumor Board Protocol
              </span>
              <span className="hidden sm:inline text-alabaster-200/30">|</span>
              <span className="hidden sm:inline">Lilavati & Hinduja Affiliated</span>
              <span className="hidden md:inline text-alabaster-200/30">|</span>
              <span className="text-emerald-400 font-medium hidden md:inline">100% Cashless TPA Supported</span>
            </div>
          </div>

          {/* Right Floating Card: Frosted white card with verified rating (Pattnaik inspired) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="bg-alabaster-50 text-cypress-950 rounded-2xl p-6 sm:p-7 shadow-2xl max-w-sm w-full border border-alabaster-200/80 relative transform hover:-translate-y-1 transition duration-300">
              
              {/* Top Trust & Rating Badge */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-alabaster-200">
                <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded-full">
                  <div className="flex items-center text-amber-500">
                    <Star size={13} weight="fill" />
                    <Star size={13} weight="fill" />
                    <Star size={13} weight="fill" />
                    <Star size={13} weight="fill" />
                    <Star size={13} weight="fill" />
                  </div>
                  <span className="text-xs font-bold text-amber-900">4.9 / 5</span>
                </div>
                <span className="text-[11px] font-semibold text-slate-600">850+ Verified Reviews</span>
              </div>

              {/* Overlapping Specialist Monogram Circles */}
              <div className="flex items-center -space-x-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-cypress-950 text-alabaster-50 border-2 border-alabaster-50 flex items-center justify-center font-display font-bold text-xs shadow-sm" title="Dr. Akash Shah - Uro-Oncology">
                  AS
                </div>
                <div className="w-11 h-11 rounded-full bg-bronze-600 text-alabaster-50 border-2 border-alabaster-50 flex items-center justify-center font-display font-bold text-xs shadow-sm" title="Medical Oncology Lead">
                  MO
                </div>
                <div className="w-11 h-11 rounded-full bg-cypress-800 text-alabaster-50 border-2 border-alabaster-50 flex items-center justify-center font-display font-bold text-xs shadow-sm" title="Onco-Pathology Lead">
                  HP
                </div>
                <span className="pl-4 text-[11px] font-semibold text-slate-600 tracking-wider uppercase">
                  Tumor Board Team
                </span>
              </div>

              {/* Bold Title */}
              <h3 className="font-display text-xl sm:text-2xl font-bold text-cypress-950 tracking-tight leading-tight mb-1.5">
                Multidisciplinary Care
              </h3>

              {/* Caption */}
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Fellowship-Trained Robotic Console Surgery · 1,200+ Cases · Evidence-Based Protocols
              </p>

              {/* Tertiary Referral Highlight */}
              <div className="bg-alabaster-100 rounded-xl p-3.5 border border-alabaster-200 flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-bronze-600 shrink-0 mt-1.5" />
                <p className="text-xs text-cypress-950 font-medium leading-snug">
                  Zero delays for acute staging or second-opinion reviews on prostate & kidney biopsies.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* LOWER HERO 4-CARD OPERATIONAL DOCK */}
        {/* Overlapping the bottom of the hero into the next section */}
        <div className="mt-16 md:mt-24 pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            
            {/* Card 1: Working Hours */}
            <div className="bg-alabaster-50 text-cypress-950 p-6 rounded-2xl border border-alabaster-200 shadow-card flex flex-col justify-between hover:border-bronze-600 transition-colors duration-200">
              <div>
                <div className="w-10 h-10 rounded-full bg-alabaster-100 border border-alabaster-200 flex items-center justify-center text-bronze-600 mb-4">
                  <Clock size={20} weight="fill" />
                </div>
                <h4 className="font-display text-lg font-bold tracking-tight text-cypress-950 mb-1">
                  Working Hours
                </h4>
                <p className="font-semibold text-sm text-cypress-900 mb-2">
                  Mon – Sat: 10:00 – 19:00
                </p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Urgent oncology triage slots reserved daily. Post-op patient support on-call 24×7.
                </p>
              </div>
              <div className="pt-3 border-t border-alabaster-200 text-xs">
                <span className="text-slate-600 block">Emergency triage line:</span>
                <a href={`tel:${siteConfig.contact.phoneRaw}`} className="font-bold text-bronze-600 hover:underline">
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>

            {/* Card 2: Contact Us */}
            <div className="bg-bronze-600 text-alabaster-50 p-6 rounded-2xl shadow-card flex flex-col justify-between hover:bg-[#8d5135] transition-colors duration-200">
              <div>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-alabaster-50 mb-4">
                  <PhoneCall size={20} weight="fill" />
                </div>
                <h4 className="font-display text-lg font-bold tracking-tight text-alabaster-50 mb-1">
                  Contact Us
                </h4>
                <p className="text-xs text-alabaster-100/90 leading-relaxed mb-4">
                  Quick assistance for appointments & second opinions. Coordinator responds within 4 hours.
                </p>
              </div>
              <div className="pt-3 border-t border-white/20">
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="font-display text-xl sm:text-2xl font-bold text-alabaster-50 block hover:underline tracking-tight"
                >
                  {siteConfig.contact.phone}
                </a>
                <span className="text-[11px] text-alabaster-100/80 block mt-1">
                  Direct Chambers Helpline
                </span>
              </div>
            </div>

            {/* Card 3: Directions */}
            <div className="bg-alabaster-50 text-cypress-950 p-6 rounded-2xl border border-alabaster-200 shadow-card flex flex-col justify-between hover:border-bronze-600 transition-colors duration-200">
              <div>
                <div className="w-10 h-10 rounded-full bg-alabaster-100 border border-alabaster-200 flex items-center justify-center text-bronze-600 mb-4">
                  <MapPin size={20} weight="fill" />
                </div>
                <h4 className="font-display text-lg font-bold tracking-tight text-cypress-950 mb-1">
                  Directions
                </h4>
                <p className="font-semibold text-xs text-cypress-900 mb-1">
                  Bandra West Chambers
                </p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Suite 402, Horizon Medical Enclave, Hill Road, Bandra West, Mumbai 400050
                </p>
              </div>
              <div className="pt-3 border-t border-alabaster-200">
                <a
                  href={siteConfig.contact.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-bronze-600 hover:text-cypress-950 transition-colors"
                >
                  <span>Show on map</span>
                  <ArrowRight size={14} weight="bold" />
                </a>
              </div>
            </div>

            {/* Card 4: Lead Surgeon Quick-Book Card */}
            <div className="bg-cypress-950 border border-alabaster-200/80 rounded-2xl p-0 overflow-hidden relative flex flex-col justify-end min-h-[250px] shadow-card group">
              {/* High-craft AI Editorial Portrait of Dr. Akash Shah */}
              <div className="absolute inset-0 w-full h-full bg-cypress-900">
                <img
                  src={siteConfig.operationalDock[3].image}
                  alt="Dr. Akash Shah — Lead Uro-Oncologist & Robotic Surgeon"
                  className="w-full h-full object-cover object-top brightness-95 group-hover:scale-105 transition-transform duration-500 ease-emil"
                  loading="eager"
                />
              </div>

              {/* Gradient Scrim for readable text & button overlay */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cypress-950 via-cypress-950/70 to-transparent pointer-events-none" />

              {/* Surgeon Info & Quick-Book Button Pinned to Bottom */}
              <div className="relative z-10 p-5">
                <div className="mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-eyebrow text-bronze-400 block">
                    LEAD ROBOTIC SURGEON
                  </span>
                  <span className="font-display text-lg font-bold text-alabaster-50 tracking-tight block">
                    {siteConfig.doctor.name}
                  </span>
                </div>
                <a
                  href="#book-appointment"
                  className="w-full flex items-center justify-center gap-2 bg-bronze-600 hover:bg-[#864c31] text-alabaster-50 text-xs font-bold py-3 px-4 rounded-full shadow-md active:scale-[0.98] transition-all duration-200"
                >
                  <CalendarCheck size={16} weight="bold" />
                  <span>Book appointment</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
