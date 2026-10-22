import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  GraduationCap, 
  Hospital, 
  CalendarCheck, 
  ShieldCheck, 
  CheckCircle,
  Microscope,
  Dna,
  Cpu,
  ArrowRight
} from '@phosphor-icons/react';
import { siteConfig } from '../content/site';

export default function Doctors() {
  const { careTeam } = siteConfig;

  const tumorBoardSteps = [
    {
      step: '01',
      title: 'Digital Slide & Biopsy Re-Audit',
      desc: 'External histology slides and biopsy cores undergo blinded secondary review by subspecialized uropathologists to confirm Gleason grade, perineural invasion, and margin extent.',
      icon: Microscope,
    },
    {
      step: '02',
      title: '3T Multiparametric MRI Correlation',
      desc: 'Radiologists correlate cross-sectional MRI imaging with pathology coordinates, generating a 3D structural map of tumor location relative to sphincters and neurovascular bundles.',
      icon: Cpu,
    },
    {
      step: '03',
      title: 'Systemic & Genomic Risk Profiling',
      desc: 'Medical oncologists evaluate genomic signatures, PSA doubling time, and hereditary risk factors to assess whether neoadjuvant or adjuvant systemic therapies are required.',
      icon: Dna,
    },
    {
      step: '04',
      title: 'Unified Consensus Protocol',
      desc: 'The board delivers a definitive, guideline-aligned consensus recommendation with transparent presentation of robotic surgery vs. active surveillance vs. multimodal options.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="py-12 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-bronze-600 transition-colors"
        >
          <ArrowLeft size={14} weight="bold" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="eyebrow text-slate-600 mb-3">
          <span>MULTIDISCIPLINARY TUMOR BOARD</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-cypress-950 tracking-tight leading-tight mb-4">
          Specialist-Led <span className="italic font-normal text-bronze-600">Care Team.</span>
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Modern urological oncology demands coordinated subspecialty expertise. Our surgical leadership
          works in close alignment with dedicated medical oncologists and uropathologists to ensure
          every diagnostic finding is cross-examined before formulating your treatment plan.
        </p>
      </div>

      {/* 3 Specialist Profile Cards with High-End Photography */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {careTeam.map((member, idx) => (
          <div
            key={member.id}
            className="rounded-3xl overflow-hidden border border-alabaster-200 bg-white shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col group"
          >
            {/* Editorial Portrait Container */}
            <div className="aspect-[4/4.5] w-full overflow-hidden bg-cypress-950 relative">
              <img
                src={member.image}
                alt={`${member.name} — ${member.role}`}
                className="w-full h-full object-cover object-top brightness-95 group-hover:scale-105 transition-transform duration-700 ease-emil"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cypress-950/70 via-transparent to-transparent pointer-events-none" />

              {/* Top Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[10px] font-bold tracking-eyebrow uppercase px-3 py-1 rounded-full bg-cypress-950/90 text-alabaster-50 border border-cypress-800 shadow-sm backdrop-blur-md">
                  {idx === 0 ? 'LEAD ROBOTIC SURGEON' : idx === 1 ? 'MEDICAL ONCOLOGY' : 'DIAGNOSTIC LEAD'}
                </span>
              </div>
            </div>

            {/* Profile Info */}
            <div className="p-7 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="font-display text-2xl font-bold text-cypress-950 tracking-tight mb-1 group-hover:text-bronze-600 transition-colors">
                  {member.name}
                </h2>
                <p className="text-xs font-semibold text-bronze-600 uppercase tracking-wide mb-3">
                  {member.role}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {member.bio}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-alabaster-200 text-xs text-slate-600 mb-6">
                  <div className="flex items-start gap-2">
                    <GraduationCap size={16} weight="bold" className="text-cypress-900 shrink-0 mt-0.5" />
                    <span className="leading-snug">{member.credentials}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Hospital size={16} weight="bold" className="text-cypress-900 shrink-0 mt-0.5" />
                    <span className="leading-snug">{member.hospitalAffiliations}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-alabaster-200">
                <a
                  href="/#book-appointment"
                  className="w-full pill-button bg-alabaster-100 hover:bg-cypress-900 hover:text-alabaster-50 text-cypress-950 text-xs font-semibold py-3 rounded-full flex items-center justify-center gap-2 transition-colors"
                >
                  <CalendarCheck size={16} weight="bold" />
                  <span>Request Specialist Review</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* How the Multidisciplinary Tumor Board Operates */}
      <div className="bg-alabaster-100 rounded-3xl p-8 sm:p-12 border border-alabaster-200 mb-20">
        <div className="max-w-2xl mb-12">
          <div className="eyebrow text-slate-600 mb-2">
            <span>CLINICAL PROTOCOL</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-cypress-950 tracking-tight mb-4">
            How Our Multidisciplinary Tumor Board Operates
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            In complex oncological resections, decisions should never rest on a single opinion. Every
            patient undergoing major intervention in our chambers benefits from multi-specialist review.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tumorBoardSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="bg-white p-7 rounded-2xl border border-alabaster-200 shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-display text-2xl font-bold text-alabaster-200">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-alabaster-100 flex items-center justify-center text-bronze-600">
                      <Icon size={20} weight="bold" />
                    </div>
                  </div>
                  <h3 className="font-sans text-base font-bold text-cypress-950 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bandra West Chambers Consultation Environment Feature */}
      <div className="bg-white rounded-3xl overflow-hidden border border-alabaster-200 shadow-card grid grid-cols-1 lg:grid-cols-12 items-center">
        <div className="lg:col-span-7 aspect-video w-full overflow-hidden bg-cypress-950">
          <img
            src="/assets/images/chambers_consultation.jpg"
            alt="Private consultation chambers in Bandra West"
            className="w-full h-full object-cover object-center brightness-95"
          />
        </div>
        <div className="lg:col-span-5 p-8 sm:p-12">
          <span className="text-[10px] font-bold uppercase tracking-eyebrow text-bronze-600 block mb-2">
            QUIET LUXURY & CLINICAL TRANQUILITY
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-cypress-950 mb-4">
            Private, Unhurried Consultation Chambers
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
            Located in Bandra West, our chambers provide a serene, confidential environment for patients
            and their families. We allocate dedicated 45-minute slots so every finding, risk, and surgical
            alternative can be explored thoroughly without haste.
          </p>
          <a
            href="/#book-appointment"
            className="pill-button bg-bronze-600 hover:bg-[#864c31] text-alabaster-50 text-xs font-semibold px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-sm transition-all"
          >
            <CalendarCheck size={16} weight="bold" />
            <span>Schedule an In-Chambers Visit</span>
          </a>
        </div>
      </div>
    </div>
  );
}
