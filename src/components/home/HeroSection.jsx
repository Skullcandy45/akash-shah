/**
 * src/components/home/HeroSection.jsx
 *
 * Light Clinic-Style Hero Section for Dr. Akash Shah
 * (Uro-Oncologist & Robotic Surgeon, Bandra West, Mumbai).
 *
 * Features:
 * - Bespoke generated operating theatre background media bleeding to the right viewport edge.
 * - Smooth CSS Ken Burns motion (prefers-reduced-motion safe).
 * - Light clinic aesthetic with alabaster canvas, cypress green and bronze accents.
 * - Full floating card ecosystem (Booking Form, Verified Proof Badge, Multidisciplinary Care).
 * - Three Phosphor icon trust badges (ShieldCheck, Hospital, CreditCard).
 * - Original 4-card operational dock with subtle 3D hover perspective tilt.
 * - Zero WebGL / Three.js dependencies; clean and lightweight.
 */
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  CalendarCheck,
  ArrowRight,
  Clock,
  PhoneCall,
  MapPin,
  ShieldCheck,
  Hospital,
  CreditCard,
  WhatsappLogo,
  Star,
} from '@phosphor-icons/react';
import { siteConfig } from '../../content/site';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef(null);
  const textContainerRef = useRef(null);
  const mediaRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const formCardRef = useRef(null);

  // Booking Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Prostate / PSA Evaluation',
    date: '',
  });

  const [mediaError, setMediaError] = useState(false);

  // Form submission: Format WhatsApp inquiry and reset
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    const baseGreeting =
      "Hello Dr. Akash Shah's clinical team, I would like to schedule an appointment consultation.";
    const lines = [
      baseGreeting,
      '',
      `Full Name: ${formData.name.trim()}`,
      `Phone Number: ${formData.phone.trim()}`,
      `Consultation Type: ${formData.service}`,
      formData.date ? `Preferred Date: ${formData.date}` : '',
    ].filter(Boolean);

    const encodedText = encodeURIComponent(lines.join('\n'));
    const waUrl = `https://wa.me/919820000000?text=${encodedText}`;

    window.open(waUrl, '_blank', 'noopener,noreferrer');

    setFormData({
      name: '',
      phone: '',
      service: 'Prostate / PSA Evaluation',
      date: '',
    });
  };

  // Entrance animations and desktop parallax
  useEffect(() => {
    const section = sectionRef.current;
    const textContainer = textContainerRef.current;
    const mediaEl = mediaRef.current;
    const cardsEl = cardsContainerRef.current;
    const formCard = formCardRef.current;
    if (!section) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (reduceMotion) {
      if (textContainer) gsap.set(Array.from(textContainer.children), { clearProps: 'all' });
      if (mediaEl) gsap.set(mediaEl, { clearProps: 'all' });
      if (formCard) gsap.set(formCard, { clearProps: 'all' });
      return undefined;
    }

    // --- Entrance Timeline ---
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (textContainer?.children) {
      tl.fromTo(
        Array.from(textContainer.children),
        { y: 14, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.08,
          clearProps: 'transform,opacity',
        },
        0.1
      );
    }

    if (mediaEl) {
      tl.fromTo(
        mediaEl,
        { opacity: 0, scale: 1.02 },
        { opacity: 1, scale: 1.06, duration: 0.8, clearProps: 'opacity' },
        0.25
      );
    }

    if (formCard) {
      tl.fromTo(
        formCard,
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, clearProps: 'transform,opacity' },
        0.4
      );
    }

    // --- Desktop Subtle Pointer Parallax ---
    let removeParallax = () => {};
    if (finePointer && !reduceMotion) {
      const xMediaTo = gsap.quickTo(mediaEl, 'x', { duration: 0.6, ease: 'power2.out' });
      const yMediaTo = gsap.quickTo(mediaEl, 'y', { duration: 0.6, ease: 'power2.out' });
      const xCardsTo = cardsEl ? gsap.quickTo(cardsEl, 'x', { duration: 0.5, ease: 'power2.out' }) : null;
      const yCardsTo = cardsEl ? gsap.quickTo(cardsEl, 'y', { duration: 0.5, ease: 'power2.out' }) : null;

      const onPointerMove = (e) => {
        const rect = section.getBoundingClientRect();
        if (rect.width <= 0 || rect.height <= 0) return;
        const normX = (e.clientX - rect.left) / rect.width - 0.5;
        const normY = (e.clientY - rect.top) / rect.height - 0.5;

        // Media moves up to +-10px
        if (mediaEl) {
          xMediaTo(normX * 20);
          yMediaTo(normY * 16);
        }
        // Floating cards move in gentle counter-balance up to +-6px
        if (cardsEl) {
          if (xCardsTo) xCardsTo(-normX * 12);
          if (yCardsTo) yCardsTo(-normY * 10);
        }
      };

      section.addEventListener('pointermove', onPointerMove, { passive: true });
      removeParallax = () => {
        section.removeEventListener('pointermove', onPointerMove);
      };
    }

    return () => {
      tl.kill();
      removeParallax();
      if (textContainer?.children) gsap.set(Array.from(textContainer.children), { clearProps: 'all' });
      if (mediaEl) gsap.set(mediaEl, { clearProps: 'all' });
      if (formCard) gsap.set(formCard, { clearProps: 'all' });
    };
  }, []);

  // 3D Perspective Tilt on Dock Cards (Fine pointer & hover only)
  const handleCardTilt = (e) => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (reduceMotion || !hasFinePointer) return;

    const rect = e.currentTarget.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      e.currentTarget.style.transform = `perspective(900px) rotateX(${-py * 6}deg) rotateY(${px * 6}deg)`;
    }
  };

  const handleCardReset = (e) => {
    e.currentTarget.style.transform = '';
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-white via-alabaster-50/80 to-alabaster-100/95 text-cypress-950 overflow-hidden border-b border-alabaster-200/80 pt-8 sm:pt-12 pb-12 md:pb-16 flex flex-col justify-center"
    >
      <style>{`
        @keyframes heroKenBurns {
          0% { transform: scale(1.0); }
          100% { transform: scale(1.06); }
        }
        @media (prefers-reduced-motion: no-preference) {
          .hero-ken-burns {
            animation: heroKenBurns 20s ease-in-out infinite alternate;
          }
        }
      `}</style>

      {/* Soft Ambient Corner Glows (pointer-events-none, aria-hidden) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute -top-16 -right-16 w-[520px] h-[520px] rounded-full bg-bronze-400/20 blur-[140px]" />
        <div className="absolute -bottom-20 -left-16 w-[440px] h-[440px] rounded-full bg-emerald-700/10 blur-[140px]" />
      </div>

      {/* DESKTOP MEDIA LAYER (lg+): Bleeds to the viewport's right edge, softly masked on the left */}
      {!mediaError && (
        <div
          className="hidden lg:block absolute top-0 bottom-0 right-0 w-[54%] xl:w-[56%] overflow-hidden z-0 pointer-events-none select-none"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 12%, black 42%, black 100%)',
            maskImage: 'linear-gradient(to right, transparent 0%, transparent 12%, black 42%, black 100%)',
          }}
          aria-hidden="true"
        >
          {/* Subtle bottom fade into section gradient */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-alabaster-100 via-alabaster-100/60 to-transparent z-10 pointer-events-none" />

          {/* Additional soft gradient wash for seamless contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-alabaster-50/90 via-alabaster-50/30 to-transparent z-10 pointer-events-none" />

          <div ref={mediaRef} className="w-full h-full will-change-transform scale-[1.06]">
            <img
              src="/assets/images/hero_theatre.jpg"
              alt=""
              loading="eager"
              fetchPriority="high"
              width={1600}
              height={1067}
              onError={() => setMediaError(true)}
              className="hero-ken-burns w-full h-full object-cover object-[75%_center] brightness-[0.98] contrast-[1.02]"
            />
          </div>
        </div>
      )}

      {/* HERO CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full lg:min-h-[calc(100svh-107px)] flex flex-col justify-center">
        {/* UPPER HERO 12-COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center py-4 lg:py-6">
          {/* Left Column (5 of 12 cols): Clinical Copy, CTAs & Trust Badges */}
          <div ref={textContainerRef} className="lg:col-span-5 xl:col-span-5 flex flex-col items-start z-10">
            {/* Eyebrow Label with Bronze Dot */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-alabaster-100/90 border border-alabaster-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-bronze-600" />
              <span>UROLOGICAL CANCER CARE · BANDRA WEST, MUMBAI</span>
            </div>

            {/* Zodiak Headline */}
            <h1 className="font-display text-4xl sm:text-5xl xl:text-[3.25rem] 2xl:text-6xl font-bold tracking-tight text-cypress-950 leading-[1.12] mb-4 sm:mb-5 max-w-[560px]">
              Precision Surgery for Prostate, Kidney & Bladder Cancer.
            </h1>

            {/* Subheading with Doctor Name */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-lg mb-6">
              Fellowship-trained robotic surgeon {siteConfig.doctor.name} offers organ-preserving, nerve-sparing
              treatment, tumor-board reviewed plans and second opinions, with every finding explained before
              any intervention.
            </p>

            {/* Triple Action CTAs (One row at xl+, whitespace-nowrap) */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              <a
                href="#book-appointment"
                className="pill-button whitespace-nowrap bg-gradient-to-r from-bronze-600 via-[#a35e40] to-bronze-600 text-alabaster-50 font-bold text-xs sm:text-sm px-4 sm:px-5 py-3 rounded-full shadow-[0_4px_16px_rgba(154,91,62,0.3)] hover:shadow-[0_6px_22px_rgba(154,91,62,0.45)] hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto flex items-center justify-center gap-2 group transition-all"
              >
                <CalendarCheck size={17} weight="bold" />
                <span>Book Appointment</span>
                <ArrowRight size={15} weight="bold" className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://wa.me/919820000000?text=Hello%20Dr.%20Akash%20Shah%27s%20clinical%20team%2C%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="pill-button whitespace-nowrap bg-[#25D366] hover:bg-[#20ba59] text-cypress-950 font-bold text-xs sm:text-sm px-3.5 sm:px-4 py-3 rounded-full shadow-[0_4px_16px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.45)] w-full sm:w-auto flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <WhatsappLogo size={17} weight="fill" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href="#services-matrix"
                className="pill-button whitespace-nowrap bg-white hover:bg-alabaster-100 text-cypress-950 border border-alabaster-200 font-semibold text-xs sm:text-sm px-3.5 sm:px-4 py-3 rounded-full shadow-2xs w-full sm:w-auto flex items-center justify-center gap-2 transition-all"
              >
                <span>Explore Procedures</span>
              </a>
            </div>

            {/* Trust Badges Row (3 circular icon badges) */}
            <div className="mt-7 pt-5 border-t border-alabaster-200/90 w-full max-w-[560px]">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
                {/* Badge 1: Tumor Board Protocol */}
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-10 h-10 rounded-full bg-white border border-alabaster-200 shadow-subtle flex items-center justify-center shrink-0 text-bronze-600">
                    <ShieldCheck size={20} weight="fill" />
                  </div>
                  <span className="text-xs font-semibold text-cypress-950 leading-snug">
                    Evidence-Based Tumor Board Protocol
                  </span>
                </div>

                {/* Badge 2: Operating Suites */}
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-10 h-10 rounded-full bg-white border border-alabaster-200 shadow-subtle flex items-center justify-center shrink-0 text-bronze-600">
                    <Hospital size={20} weight="fill" />
                  </div>
                  <span className="text-xs font-semibold text-cypress-950 leading-snug">
                    Lilavati & Hinduja Operating Suites
                  </span>
                </div>

                {/* Badge 3: 100% Cashless TPA */}
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-10 h-10 rounded-full bg-white border border-alabaster-200 shadow-subtle flex items-center justify-center shrink-0 text-emerald-700">
                    <CreditCard size={20} weight="fill" />
                  </div>
                  <span className="text-xs font-semibold text-emerald-700 leading-snug">
                    100% Cashless TPA Supported
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Area (7 of 12 cols): Clean Non-Overlapping Companion Layout over Media */}
          <div className="lg:col-span-7 xl:col-span-7 relative z-10 w-full flex flex-col justify-center mt-6 lg:mt-0">
            {/* MOBILE ONLY: In-Flow Media Card (aspect-[4/3], image only) */}
            {!mediaError && (
              <div className="lg:hidden mb-4 relative z-10 w-full max-w-md mx-auto">
                <div className="relative rounded-3xl overflow-hidden border border-alabaster-200 shadow-xl aspect-[4/3] w-full bg-alabaster-100">
                  <img
                    src="/assets/images/hero_theatre.jpg"
                    alt=""
                    aria-hidden="true"
                    loading="eager"
                    width={1600}
                    height={1067}
                    onError={() => setMediaError(true)}
                    className="w-full h-full object-cover object-center"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-cypress-950/40 via-transparent to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                </div>
              </div>
            )}

            {/* MOBILE ONLY: Stacked In-Flow Cards */}
            <div className="lg:hidden flex flex-col items-center w-full">
              {/* Mobile Proof Badge */}
              <div className="mb-3 relative z-20 w-fit mx-auto sm:mx-0">
                <div className="bg-white rounded-2xl border border-alabaster-200 shadow-card p-3">
                  <div className="flex items-center gap-1.5 bg-amber-50/90 border border-amber-200/80 px-2 py-0.5 rounded-full w-fit mb-2">
                    <div className="flex items-center text-amber-500">
                      <Star size={11} weight="fill" />
                      <Star size={11} weight="fill" />
                      <Star size={11} weight="fill" />
                      <Star size={11} weight="fill" />
                      <Star size={11} weight="fill" />
                    </div>
                    <span className="text-[11px] font-bold text-amber-900">4.9 / 5</span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-600 block mb-2">
                    850+ Verified Reviews
                  </span>
                  <div className="flex items-center -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-bronze-600 text-alabaster-50 border-2 border-white flex items-center justify-center font-display font-bold text-[9px]">
                      AS
                    </div>
                    <div className="w-6 h-6 rounded-full bg-cypress-800 text-alabaster-50 border-2 border-white flex items-center justify-center font-display font-bold text-[9px]">
                      MO
                    </div>
                    <div className="w-6 h-6 rounded-full bg-cypress-950 text-alabaster-50 border-2 border-white flex items-center justify-center font-display font-bold text-[9px]">
                      HP
                    </div>
                    <span className="pl-2 text-[10px] font-semibold text-slate-700 uppercase tracking-wider">
                      Tumor Board Team
                    </span>
                  </div>
                </div>
              </div>

              {/* Mobile Booking Form Card */}
              <div className="w-full max-w-sm mx-auto -mt-6 relative z-30">
                <div className="bg-white rounded-3xl border border-alabaster-200 shadow-elevated p-5">
                  <div className="eyebrow text-[10px] text-slate-600 mb-1">
                    <span>{siteConfig.appointmentForm.eyebrow}</span>
                  </div>
                  <h2 className="font-display text-lg font-bold text-cypress-950 leading-tight mb-3">
                    {siteConfig.appointmentForm.title}
                  </h2>

                  <form onSubmit={handleFormSubmit} className="space-y-3">
                    <div>
                      <label htmlFor="hero-mobile-name" className="sr-only">
                        Full Name *
                      </label>
                      <input
                        id="hero-mobile-name"
                        type="text"
                        required
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-alabaster-50 border border-alabaster-200 rounded-xl px-3.5 py-2.5 text-xs text-cypress-950 placeholder:text-slate-600 focus:outline-none focus:border-bronze-600 focus:ring-1 focus:ring-bronze-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="hero-mobile-phone" className="sr-only">
                        Phone Number *
                      </label>
                      <input
                        id="hero-mobile-phone"
                        type="tel"
                        required
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-alabaster-50 border border-alabaster-200 rounded-xl px-3.5 py-2.5 text-xs text-cypress-950 placeholder:text-slate-600 focus:outline-none focus:border-bronze-600 focus:ring-1 focus:ring-bronze-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="hero-mobile-service" className="sr-only">
                        Consultation Type
                      </label>
                      <select
                        id="hero-mobile-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-alabaster-50 border border-alabaster-200 rounded-xl px-3.5 py-2.5 text-xs text-cypress-950 focus:outline-none focus:border-bronze-600 focus:ring-1 focus:ring-bronze-600 transition-colors"
                      >
                        <option value="Prostate / PSA Evaluation">Prostate / PSA Evaluation</option>
                        <option value="Robotic Prostatectomy Second Opinion">
                          Robotic Prostatectomy Second Opinion
                        </option>
                        <option value="Kidney Mass / Partial Nephrectomy">
                          Kidney Mass / Partial Nephrectomy
                        </option>
                        <option value="Bladder Cancer & Endoscopy">Bladder Cancer & Endoscopy</option>
                        <option value="MRI-Fusion Targeted Biopsy">MRI-Fusion Targeted Biopsy</option>
                        <option value="General Uro-Oncology Consultation">
                          General Uro-Oncology Consultation
                        </option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="hero-mobile-date" className="sr-only">
                        Preferred Date
                      </label>
                      <input
                        id="hero-mobile-date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-alabaster-50 border border-alabaster-200 rounded-xl px-3.5 py-2.5 text-xs text-cypress-950 focus:outline-none focus:border-bronze-600 focus:ring-1 focus:ring-bronze-600 transition-colors"
                      />
                    </div>

                    <div className="pt-1">
                      <button
                        type="submit"
                        className="w-full pill-button bg-gradient-to-r from-bronze-600 via-[#a35e40] to-bronze-600 hover:from-bronze-700 hover:to-bronze-700 text-alabaster-50 font-bold text-xs py-3 rounded-full shadow-md flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                      >
                        <CalendarCheck size={16} weight="bold" />
                        <span>Book Appointment</span>
                      </button>
                    </div>
                  </form>

                  <p className="text-[11px] text-slate-600 leading-tight mt-3 text-center">
                    {siteConfig.appointmentForm.checkpoints[2]}
                  </p>
                </div>
              </div>

              {/* Mobile Multidisciplinary Card */}
              <div className="mt-4 w-full max-w-sm mx-auto bg-white/90 backdrop-blur-xl border border-alabaster-200 rounded-2xl shadow-card p-4">
                <h3 className="font-display text-base font-bold text-cypress-950 tracking-tight leading-tight mb-1">
                  Multidisciplinary Care
                </h3>
                <p className="text-[11px] text-slate-600 leading-snug mb-2.5">
                  Fellowship-Trained Robotic Console Surgery · 1,200+ Cases · Evidence-Based Protocols
                </p>
                <div className="bg-alabaster-50 border border-alabaster-200 rounded-xl p-2 flex items-start gap-1.5 shadow-2xs mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-bronze-600 shrink-0 mt-1" />
                  <p className="text-[10px] text-cypress-950 font-medium leading-relaxed">
                    Zero delays for acute staging or second-opinion reviews on prostate & kidney biopsies.
                  </p>
                </div>
                <div className="pt-2 border-t border-alabaster-200 flex items-center justify-between text-[10px] text-slate-700">
                  <span className="font-semibold text-cypress-950">Lilavati Hospital</span>
                  <span className="text-slate-400">·</span>
                  <span className="font-semibold text-cypress-950">Hinduja Healthcare</span>
                </div>
              </div>
            </div>

            {/* DESKTOP ONLY: Side-by-Side Flex Composition (Guaranteed Zero Overlap) */}
            <div
              ref={cardsContainerRef}
              className="hidden lg:flex items-center justify-end gap-5 xl:gap-8 w-full"
            >
              {/* Left Column: Proof Badge (top) + Multidisciplinary Card (bottom) */}
              <div className="flex flex-col justify-between h-[480px] xl:h-[500px] w-[230px] xl:w-[245px] shrink-0">
                {/* Proof Badge (z-20) */}
                <div className="bg-white rounded-2xl border border-alabaster-200 shadow-card p-3.5 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-1.5 bg-amber-50/90 border border-amber-200/80 px-2.5 py-1 rounded-full w-fit mb-2">
                    <div className="flex items-center text-amber-500">
                      <Star size={12} weight="fill" />
                      <Star size={12} weight="fill" />
                      <Star size={12} weight="fill" />
                      <Star size={12} weight="fill" />
                      <Star size={12} weight="fill" />
                    </div>
                    <span className="text-xs font-bold text-amber-900">4.9 / 5</span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-600 block mb-2.5">
                    850+ Verified Reviews
                  </span>
                  <div className="flex items-center -space-x-2">
                    <div className="w-7 h-7 rounded-full bg-bronze-600 text-alabaster-50 border-2 border-white flex items-center justify-center font-display font-bold text-[10px] shadow-sm">
                      AS
                    </div>
                    <div className="w-7 h-7 rounded-full bg-cypress-800 text-alabaster-50 border-2 border-white flex items-center justify-center font-display font-bold text-[10px] shadow-sm">
                      MO
                    </div>
                    <div className="w-7 h-7 rounded-full bg-cypress-950 text-alabaster-50 border-2 border-white flex items-center justify-center font-display font-bold text-[10px] shadow-sm">
                      HP
                    </div>
                    <span className="pl-2.5 text-[10px] font-semibold text-slate-700 tracking-wider uppercase">
                      Tumor Board Team
                    </span>
                  </div>
                </div>

                {/* Multidisciplinary Card (z-20) */}
                <div className="bg-white/90 backdrop-blur-xl border border-white/80 rounded-2xl shadow-card p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-display text-base font-bold text-cypress-950 tracking-tight leading-tight mb-1">
                    Multidisciplinary Care
                  </h3>
                  <p className="text-[11px] text-slate-600 leading-snug mb-2.5">
                    Fellowship-Trained Robotic Console Surgery · 1,200+ Cases · Evidence-Based Protocols
                  </p>
                  <div className="bg-alabaster-50/90 border border-alabaster-200 rounded-xl p-2.5 flex items-start gap-1.5 shadow-2xs mb-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-bronze-600 shrink-0 mt-1" />
                    <p className="text-[10px] text-cypress-950 font-medium leading-relaxed">
                      Zero delays for acute staging or second-opinion reviews on prostate & kidney biopsies.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-alabaster-200/80 flex items-center justify-between text-[10px] text-slate-700">
                    <span className="font-semibold text-cypress-950">Lilavati Hospital</span>
                    <span className="text-slate-400">·</span>
                    <span className="font-semibold text-cypress-950">Hinduja Healthcare</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Booking Form Card (z-30) */}
              <div
                ref={formCardRef}
                className="w-[275px] xl:w-[300px] shrink-0 z-30"
              >
                <div className="bg-white rounded-3xl border border-alabaster-200 shadow-elevated p-4 sm:p-5">
                  <div className="eyebrow text-[10px] text-slate-600 mb-1">
                    <span>{siteConfig.appointmentForm.eyebrow}</span>
                  </div>
                  <h2 className="font-display text-lg sm:text-xl font-bold text-cypress-950 leading-tight mb-3">
                    {siteConfig.appointmentForm.title}
                  </h2>

                  <form onSubmit={handleFormSubmit} className="space-y-2.5">
                    <div>
                      <label htmlFor="hero-booking-name" className="sr-only">
                        Full Name *
                      </label>
                      <input
                        id="hero-booking-name"
                        type="text"
                        required
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-alabaster-50 border border-alabaster-200 rounded-xl px-3 py-2 text-xs text-cypress-950 placeholder:text-slate-600 focus:outline-none focus:border-bronze-600 focus:ring-1 focus:ring-bronze-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="hero-booking-phone" className="sr-only">
                        Phone Number *
                      </label>
                      <input
                        id="hero-booking-phone"
                        type="tel"
                        required
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-alabaster-50 border border-alabaster-200 rounded-xl px-3 py-2 text-xs text-cypress-950 placeholder:text-slate-600 focus:outline-none focus:border-bronze-600 focus:ring-1 focus:ring-bronze-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="hero-booking-service" className="sr-only">
                        Consultation Type
                      </label>
                      <select
                        id="hero-booking-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-alabaster-50 border border-alabaster-200 rounded-xl px-3 py-2 text-xs text-cypress-950 focus:outline-none focus:border-bronze-600 focus:ring-1 focus:ring-bronze-600 transition-colors"
                      >
                        <option value="Prostate / PSA Evaluation">Prostate / PSA Evaluation</option>
                        <option value="Robotic Prostatectomy Second Opinion">
                          Robotic Prostatectomy Second Opinion
                        </option>
                        <option value="Kidney Mass / Partial Nephrectomy">
                          Kidney Mass / Partial Nephrectomy
                        </option>
                        <option value="Bladder Cancer & Endoscopy">Bladder Cancer & Endoscopy</option>
                        <option value="MRI-Fusion Targeted Biopsy">MRI-Fusion Targeted Biopsy</option>
                        <option value="General Uro-Oncology Consultation">
                          General Uro-Oncology Consultation
                        </option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="hero-booking-date" className="sr-only">
                        Preferred Date
                      </label>
                      <input
                        id="hero-booking-date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-alabaster-50 border border-alabaster-200 rounded-xl px-3 py-2 text-xs text-cypress-950 focus:outline-none focus:border-bronze-600 focus:ring-1 focus:ring-bronze-600 transition-colors"
                      />
                    </div>

                    <div className="pt-1">
                      <button
                        type="submit"
                        className="w-full pill-button bg-gradient-to-r from-bronze-600 via-[#a35e40] to-bronze-600 hover:from-bronze-700 hover:to-bronze-700 text-alabaster-50 font-bold text-xs py-2.5 rounded-full shadow-md flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                      >
                        <CalendarCheck size={15} weight="bold" />
                        <span>Book Appointment</span>
                      </button>
                    </div>
                  </form>

                  <p className="text-[10px] text-slate-600 leading-tight mt-2.5 text-center">
                    {siteConfig.appointmentForm.checkpoints[2]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LOWER SECTION: Original 4-Card Operational Dock (Tightened mt-10 lg:mt-12) */}
        <div className="mt-10 lg:mt-12 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {/* Card 1: Working Hours */}
            <div
              onPointerMove={handleCardTilt}
              onPointerLeave={handleCardReset}
              style={{ transition: 'transform 220ms cubic-bezier(0.23, 1, 0.32, 1)' }}
              className="bg-white text-cypress-950 p-6 rounded-2xl border border-alabaster-200 shadow-card flex flex-col justify-between hover:border-bronze-600 transition-colors duration-200 will-change-transform"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-alabaster-100 border border-alabaster-200 flex items-center justify-center text-bronze-600 mb-4">
                  <Clock size={20} weight="fill" />
                </div>
                <h4 className="font-sans text-base font-bold tracking-tight text-cypress-950 mb-1">
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
            <div
              onPointerMove={handleCardTilt}
              onPointerLeave={handleCardReset}
              style={{ transition: 'transform 220ms cubic-bezier(0.23, 1, 0.32, 1)' }}
              className="bg-gradient-to-br from-bronze-600 to-[#864c31] text-alabaster-50 p-6 rounded-2xl shadow-card flex flex-col justify-between hover:brightness-105 transition-all duration-200 will-change-transform"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-alabaster-50 mb-4">
                  <PhoneCall size={20} weight="fill" />
                </div>
                <h4 className="font-sans text-base font-bold tracking-tight text-alabaster-50 mb-1">
                  Contact Us
                </h4>
                <p className="text-xs text-alabaster-100/90 leading-relaxed mb-4">
                  Quick assistance for appointments & second opinions. Coordinator responds within 4 hours.
                </p>
              </div>
              <div className="pt-3 border-t border-white/20">
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="font-sans text-xl sm:text-2xl font-bold text-alabaster-50 block hover:underline tracking-tight"
                >
                  {siteConfig.contact.phone}
                </a>
                <span className="text-[11px] text-alabaster-100/80 block mt-1">
                  Direct Chambers Helpline
                </span>
              </div>
            </div>

            {/* Card 3: Directions */}
            <div
              onPointerMove={handleCardTilt}
              onPointerLeave={handleCardReset}
              style={{ transition: 'transform 220ms cubic-bezier(0.23, 1, 0.32, 1)' }}
              className="bg-white text-cypress-950 p-6 rounded-2xl border border-alabaster-200 shadow-card flex flex-col justify-between hover:border-bronze-600 transition-colors duration-200 will-change-transform"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-alabaster-100 border border-alabaster-200 flex items-center justify-center text-bronze-600 mb-4">
                  <MapPin size={20} weight="fill" />
                </div>
                <h4 className="font-sans text-base font-bold tracking-tight text-cypress-950 mb-1">
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

            {/* Card 4: Lead Surgeon Quick-Book (Doctor image stays here only) */}
            <div
              onPointerMove={handleCardTilt}
              onPointerLeave={handleCardReset}
              style={{ transition: 'transform 220ms cubic-bezier(0.23, 1, 0.32, 1)' }}
              className="bg-cypress-950 border border-alabaster-200/80 rounded-2xl p-0 overflow-hidden relative flex flex-col justify-end min-h-[250px] shadow-card group will-change-transform"
            >
              <div className="absolute inset-0 w-full h-full bg-cypress-900">
                <img
                  src={siteConfig.operationalDock[3].image}
                  alt="Dr. Akash Shah — Lead Uro-Oncologist & Robotic Surgeon"
                  className="w-full h-full object-cover object-top brightness-95 group-hover:scale-105 transition-transform duration-500 ease-emil"
                  loading="eager"
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cypress-950 via-cypress-950/70 to-transparent pointer-events-none" />

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
