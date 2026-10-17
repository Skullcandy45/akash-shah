import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  EnvelopeSimple, 
  List, 
  X, 
  MapPin, 
  CalendarCheck,
  CaretRight,
  ArrowRight,
  ShieldCheck,
  Clock,
  WhatsappLogo
} from '@phosphor-icons/react';
import { siteConfig } from '../../content/site';

function MonogramCrest() {
  return (
    <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cypress-900 via-cypress-950 to-cypress-950 border border-bronze-500/35 flex items-center justify-center shadow-md group-hover:border-bronze-400/70 transition-all duration-300 shrink-0">
      {/* Subtle radial inner glow */}
      <div className="absolute inset-0 rounded-xl bg-bronze-500/10 blur-sm pointer-events-none" />
      
      {/* Precision surgical crosshair geometry */}
      <svg className="absolute inset-0 w-full h-full p-1 opacity-30 group-hover:opacity-55 transition-opacity" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="17" fill="none" stroke="#D49573" strokeWidth="0.75" strokeDasharray="2 2" />
        <line x1="20" y1="2" x2="20" y2="5" stroke="#D49573" strokeWidth="1" />
        <line x1="20" y1="35" x2="20" y2="38" stroke="#D49573" strokeWidth="1" />
        <line x1="2" y1="20" x2="5" y2="20" stroke="#D49573" strokeWidth="1" />
        <line x1="35" y1="20" x2="38" y2="20" stroke="#D49573" strokeWidth="1" />
      </svg>
      
      {/* Monogram Serif AS */}
      <span className="relative font-display font-bold text-sm tracking-tight bg-gradient-to-br from-alabaster-50 via-alabaster-100 to-bronze-300 bg-clip-text text-transparent">
        AS
      </span>
    </div>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Care Team', path: '/doctors' },
    { label: 'Patient Journey', path: '/patient-journey' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="w-full relative z-50">
      {/* Top Micro-Telemetry Bar */}
      <div className="bg-alabaster-100/90 text-slate-700 text-[11px] py-2 px-4 sm:px-6 lg:px-8 border-b border-alabaster-200/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Left info badge */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="inline-flex items-center gap-1.5 font-semibold text-cypress-950">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              Chambers Open · Bandra West
            </span>
            <span className="text-alabaster-300 hidden sm:inline">|</span>
            <span className="text-slate-600 hidden sm:inline flex items-center gap-1 font-medium">
              <Clock size={12} className="text-bronze-600" />
              Mon–Sat 10:00–19:00
            </span>
            <span className="text-alabaster-300 hidden md:inline">|</span>
            <span className="text-bronze-600 font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-white border border-alabaster-200 text-[10px] hidden md:inline shadow-2xs">
              Lilavati & Hinduja Operating Theaters
            </span>
          </div>

          {/* Right quick actions */}
          <div className="flex items-center gap-3 sm:gap-4 text-slate-700 text-[11px]">
            <a
              href="https://wa.me/919820000000?text=Hello%20Dr.%20Akash%20Shah%27s%20clinical%20team%2C%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 transition-colors font-semibold"
            >
              <WhatsappLogo size={13} weight="fill" />
              <span>WhatsApp Triage</span>
            </a>
            <span className="text-alabaster-300">|</span>
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="inline-flex items-center gap-1.5 hover:text-bronze-600 transition-colors font-semibold text-cypress-950"
            >
              <Phone size={12} weight="fill" className="text-bronze-600" />
              <span>Triage: {siteConfig.contact.phone}</span>
            </a>
            <span className="text-alabaster-300 hidden md:inline">|</span>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="hidden md:inline-flex items-center gap-1.5 hover:text-bronze-600 text-slate-600 transition-colors font-medium"
            >
              <EnvelopeSimple size={12} weight="fill" className="text-bronze-600" />
              <span>{siteConfig.contact.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <div 
        className={`sticky top-0 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-2xl border-b border-alabaster-200/90 shadow-[0_4px_20px_rgba(7,23,20,0.06)] py-3' 
            : 'bg-white/90 backdrop-blur-xl border-b border-alabaster-200/70 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Left: Bespoke Monogram Crest & Doctor Typography */}
          <Link to="/" className="flex items-center gap-3.5 group shrink-0" aria-label="Dr. Akash Shah — Home">
            <MonogramCrest />
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display text-lg sm:text-xl font-bold text-cypress-950 tracking-tight leading-none group-hover:text-bronze-600 transition-colors duration-200">
                  {siteConfig.doctor.name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-bronze-600 hidden sm:inline-block" />
              </div>
              <span className="text-[10px] font-semibold text-slate-500 tracking-[0.14em] uppercase mt-1 leading-none">
                {siteConfig.doctor.subtitle}
              </span>
            </div>
          </Link>

          {/* Center: Floating Architectural Nav Pill (Desktop) */}
          <nav 
            className="hidden lg:flex items-center bg-alabaster-100/80 border border-alabaster-200/90 rounded-full p-1 shadow-inner"
            aria-label="Primary Navigation"
          >
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-[12px] font-medium tracking-wide px-3.5 py-1.5 rounded-full transition-all duration-200 ease-emil relative ${
                      isActive
                        ? 'bg-white text-cypress-950 font-bold shadow-sm border border-alabaster-200/90'
                        : 'text-slate-600 hover:text-cypress-950 hover:bg-white/60'
                    }`
                  }
                >
                  <span className="flex items-center gap-1.5">
                    {item.label}
                    {isActive && (
                      <span className="w-1 h-1 rounded-full bg-bronze-600" />
                    )}
                  </span>
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action: Dual Triage & Luxury Appointment CTA */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Urgent Phone Triage Quick Pill */}
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="hidden xl:inline-flex items-center gap-2 text-[11px] font-semibold text-cypress-950 hover:text-bronze-600 bg-alabaster-100 hover:bg-alabaster-200/80 border border-alabaster-200 px-3.5 py-2 rounded-full transition-all duration-200 shadow-2xs"
              title="Urgent Oncology Triage Line"
            >
              <Phone size={13} weight="fill" className="text-bronze-600" />
              <span>{siteConfig.contact.phone}</span>
            </a>

            {/* Primary Appointment Button */}
            <a
              href="#book-appointment"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-bronze-600 via-[#ab6645] to-bronze-600 text-alabaster-50 text-xs font-bold px-5 py-2.5 rounded-full shadow-[0_4px_16px_rgba(154,91,62,0.3)] hover:shadow-[0_6px_22px_rgba(154,91,62,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group focus-visible:outline-2 focus-visible:outline-bronze-600"
            >
              <CalendarCheck size={15} weight="bold" />
              <span>Book Appointment</span>
              <ArrowRight size={13} weight="bold" className="group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-cypress-950 hover:bg-alabaster-100 border border-alabaster-200 transition-colors focus:outline-none focus:ring-2 focus:ring-bronze-600"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-alabaster-200 px-6 py-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between text-sm font-semibold py-3 px-4 rounded-xl transition-colors ${
                      isActive
                        ? 'bg-alabaster-100 text-cypress-950 border border-alabaster-200'
                        : 'text-slate-700 hover:bg-alabaster-50 hover:text-cypress-950'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-bronze-600" />}
                      {item.label}
                    </span>
                    <CaretRight size={16} weight="bold" className={isActive ? 'text-bronze-600' : 'text-slate-400'} />
                  </Link>
                );
              })}
            </div>

            <div className="mt-6 pt-5 border-t border-alabaster-200 flex flex-col gap-2.5">
              <a
                href="#book-appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-bronze-600 to-[#ab6645] text-alabaster-50 text-sm font-bold py-3 rounded-full shadow-md hover:brightness-105 transition-all"
              >
                <CalendarCheck size={18} weight="bold" />
                <span>Book Appointment</span>
              </a>

              <a
                href="https://wa.me/919820000000?text=Hello%20Dr.%20Akash%20Shah%27s%20clinical%20team%2C%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-cypress-950 text-sm font-bold py-2.5 rounded-full shadow-sm transition-all"
              >
                <WhatsappLogo size={18} weight="fill" />
                <span>Ask on WhatsApp</span>
              </a>

              <div className="flex items-center justify-between text-xs text-slate-500 px-2 pt-2">
                <span>Chambers: Hill Rd, Bandra West</span>
                <a href={`tel:${siteConfig.contact.phoneRaw}`} className="font-bold text-bronze-600">
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

