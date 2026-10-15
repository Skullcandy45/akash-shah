import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import HeroSection from '../components/home/HeroSection';
import TickerStrip from '../components/home/TickerStrip';
import ManifestoSection from '../components/home/ManifestoSection';
import ClinicalMethodologySection from '../components/home/ClinicalMethodologySection';
import StreamlinedServicesSection from '../components/home/StreamlinedServicesSection';
import CareTeamSection from '../components/home/CareTeamSection';
import PatientJourneySection from '../components/home/PatientJourneySection';
import AppointmentBannerSection from '../components/home/AppointmentBannerSection';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Smooth subtle section reveals
    const sections = containerRef.current?.querySelectorAll('section');
    if (!sections) return;

    sections.forEach((sec, idx) => {
      // Skip hero as it has its own initial entrance
      if (idx === 0) return;

      gsap.fromTo(
        sec,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sec,
            start: 'top 92%',
            once: true,
          },
        }
      );
    });

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      clearTimeout(refreshTimer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      {/* Section 2: Hero Section + Floating Credential Card + 4-Card Operational Dock */}
      <HeroSection />

      {/* Section 3: Subspecialty Ticker Strip */}
      <TickerStrip />

      {/* Section 4: Practice Manifesto & Metrics ("Meet Your Surgeon") */}
      <ManifestoSection />

      {/* Section 5: Clinical Methodology & 11s Looping Video ("Precision Diagnostics, Advanced Surgical Mastery") */}
      <ClinicalMethodologySection />

      {/* Section 6 & 7: Streamlined Interactive Services & Treatments Showcase */}
      <StreamlinedServicesSection />

      {/* Section 8: Specialist-Led Care Team (High-Craft Editorial Portraits) */}
      <CareTeamSection />

      {/* Section 9: 4-Step Patient Journey Row */}
      <PatientJourneySection />

      {/* Section 10: Split Appointment CTA Banner */}
      <AppointmentBannerSection />
    </div>
  );
}
