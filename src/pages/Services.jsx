import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Check, 
  CalendarCheck, 
  ShieldCheck, 
  ArrowRight,
  Cpu, 
  Eye, 
  Heartbeat, 
  Crosshair, 
  ArrowsClockwise, 
  FirstAid, 
  ChartLineUp, 
  Path,
  SpeakerSimpleSlash,
  Play,
  Pause,
  Clock,
  WhatsappLogo,
  Hospital,
  CreditCard,
  FileText,
  Sparkle
} from '@phosphor-icons/react';
import { siteConfig } from '../content/site';

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

const procedureImageMap = {
  'robotic-prostatectomy': {
    src: '/assets/images/dr_shah_console.jpg',
    alt: 'Robotic radical prostatectomy master console in surgical suite',
    tag: '3D Optical Magnification 10×',
  },
  'partial-nephrectomy': {
    src: '/assets/images/tenet_organ_preservation.jpg',
    alt: 'Nephron-sparing partial nephrectomy 3D console screen',
    tag: 'Zero-Ischemia Margin Control',
  },
  'mri-biopsy': {
    src: '/assets/images/mri_diagnostic_center.jpg',
    alt: '3T multiparametric MRI precision diagnostic workstation',
    tag: 'Spatial Fusion Co-Registration',
  },
  'radical-cystectomy': {
    src: '/assets/images/robotic_surgery_theater.jpg',
    alt: 'Robotic surgical operating suite for radical cystectomy',
    tag: 'Intracorporeal Pouch Reconstruction',
  },
  'endoscopic-turbt': {
    src: '/assets/images/tenet_nerve_sparing.jpg',
    alt: 'High-definition endourology and optic triangulation',
    tag: 'Bipolar Detrusor-Intact Staging',
  },
  'testicular-rplnd': {
    src: '/assets/images/fellowship_surgical_institute.jpg',
    alt: 'Robotic surgical team operative theater for retroperitoneal lymphadenectomy',
    tag: 'Sympathetic Plexus Sparing',
  },
  'active-surveillance': {
    src: '/assets/images/tenet_active_surveillance.jpg',
    alt: 'Oncology specialist monitoring mpMRI scan series and genomic markers',
    tag: 'Protocolized NCCN Surveillance',
  },
};

const procedureTelemetryMap = {
  'robotic-prostatectomy': {
    duration: '60–90 Mins Console Time',
    setting: 'Lilavati & Hinduja Operating Suites',
    stay: '24–36 Hours (Rapid ERAS Pathway)',
    coverage: '100% Cashless TPA Approved (IRDAI)',
  },
  'partial-nephrectomy': {
    duration: '75–110 Mins Console Time',
    setting: 'Tertiary Robotic Surgical Suite',
    stay: '36–48 Hours Inpatient Recovery',
    coverage: 'Cashless Pre-Auth in 2 Hours',
  },
  'mri-biopsy': {
    duration: '30–45 Mins Procedure Time',
    setting: 'High-Precision Diagnostic Suite',
    stay: 'Day-Care (Discharge in 3 Hours)',
    coverage: 'Reimbursable / Cashless Day-Care',
  },
  'radical-cystectomy': {
    duration: '180–240 Mins Console Time',
    setting: 'Tertiary Onco-Surgical Center',
    stay: '4–5 Days Specialized Monitoring',
    coverage: 'Major Surgical Cashless Approved',
  },
  'endoscopic-turbt': {
    duration: '30–45 Mins Endoscopic Time',
    setting: 'Endourology Surgical Suite',
    stay: '24 Hours Post-Procedure Observation',
    coverage: '100% Cashless Covered Across TPAs',
  },
  'testicular-rplnd': {
    duration: '90–150 Mins Console Time',
    setting: 'Advanced Laparoscopic / Robotic OT',
    stay: '48 Hours Post-Operative Care',
    coverage: 'Tertiary Oncology Cashless Covered',
  },
  'active-surveillance': {
    duration: 'Protocolized Serial Follow-Up',
    setting: 'Bandra West Chambers & Imaging Hub',
    stay: 'Zero Hospitalization Required (OPD)',
    coverage: 'OPD Diagnostic Package & Consultation',
  },
};

export default function Services() {
  const { procedureCategories, streamlinedProcedures } = siteConfig;
  const [activeCategory, setActiveCategory] = useState('all');
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const filteredProcedures = activeCategory === 'all'
    ? streamlinedProcedures
    : streamlinedProcedures.filter((p) => p.category === activeCategory);

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

      {/* Page Header */}
      <div className="max-w-3xl mb-12">
        <div className="eyebrow text-slate-600 mb-3">
          <span>SURGICAL PROCEDURES & SPECIALTIES</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-cypress-950 tracking-tight leading-tight mb-4">
          Robotic Precision & Organ Preservation.
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Comprehensive surgical management of genitourinary cancers combining 3D high-magnification
          robotics, minimally invasive laparoscopy, and multi-disciplinary tumor board staging. Every
          surgical pathway is designed to preserve lifelong function and quality of life.
        </p>
      </div>

      {/* Embedded 10-Second Looping Video Showcase: 3T mpMRI & Pre-Op Planning */}
      <div className="rounded-3xl overflow-hidden border border-cypress-800 bg-cypress-950 text-alabaster-50 p-6 sm:p-8 lg:p-10 mb-16 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Video Showcase (7 cols) */}
        <div className="lg:col-span-7 relative aspect-video rounded-2xl overflow-hidden bg-cypress-900 border border-cypress-800 group shadow-inner">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            poster="/assets/images/mri_diagnostic_center.jpg"
            className="w-full h-full object-cover"
            aria-label="10-second looping video of 3T multiparametric MRI precision diagnostic and surgical planning suite"
          >
            <source src="/assets/video/mri_diagnostics_loop.webm" type="video/webm" />
            <source src="/assets/video/mri_diagnostics_loop.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-cypress-950/80 to-transparent pointer-events-none" />

          {/* Controls */}
          <div className="absolute bottom-3 right-3 flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-cypress-950/80 text-[10px] text-alabaster-100/80 backdrop-blur-sm border border-cypress-800">
              <SpeakerSimpleSlash size={12} weight="bold" />
              <span>MUTED</span>
            </span>
            <button
              onClick={toggleVideo}
              className="p-1.5 rounded-md bg-cypress-950/80 hover:bg-cypress-900 text-alabaster-50 backdrop-blur-sm border border-cypress-800 transition-colors"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause size={12} weight="bold" /> : <Play size={12} weight="bold" />}
            </button>
          </div>
        </div>

        {/* Right Explanation (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-eyebrow text-bronze-400 block mb-2">
              DIAGNOSTIC WORKSTATION
            </span>
            <h2 className="font-display text-2xl font-bold text-alabaster-50 tracking-tight mb-3">
              Pre-Operative 3T mpMRI Navigation & Fusion
            </h2>
            <p className="text-xs sm:text-sm text-alabaster-100/80 leading-relaxed mb-6">
              Prior to touching the patient, 3D multiparametric MRI scans are co-registered to map tumor
              depth down to fractions of a millimeter. This spatial roadmap ensures accurate surgical
              margin clearance while steering clear of neurovascular continence fibers.
            </p>
          </div>

          <div className="space-y-2 pt-4 border-t border-cypress-800 text-xs text-alabaster-100">
            <div className="flex items-center justify-between">
              <span className="text-bronze-400 font-semibold">Slice Resolution:</span>
              <span>1.0 mm Axial mpMRI</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-bronze-400 font-semibold">Margin Verification:</span>
              <span>Sub-Millimeter Triangulation</span>
            </div>
          </div>
        </div>

      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar" role="tablist">
        {procedureCategories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-xs font-semibold px-5 py-2.5 rounded-full shrink-0 transition-all duration-200 ease-emil ${
                isActive
                  ? 'bg-cypress-900 text-alabaster-50 shadow-sm'
                  : 'bg-alabaster-100 text-slate-600 hover:text-cypress-950 hover:bg-alabaster-200/60'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Detailed Procedure Cards with High-Craft Photography & Qobo-inspired telemetry */}
      <div className="space-y-10 mb-20">
        {filteredProcedures.map((proc, index) => {
          const Icon = iconMap[proc.icon] || ShieldCheck;
          const imgData = procedureImageMap[proc.id] || {
            src: '/assets/images/dr_shah_console.jpg',
            alt: proc.title,
            tag: 'Robotic Surgical Precision',
          };
          const telemetry = procedureTelemetryMap[proc.id] || {
            duration: '45–90 Mins Console Time',
            setting: 'Tertiary Robotic Surgical Suite',
            stay: '24–48 Hours Inpatient Recovery',
            coverage: '100% Cashless TPA Approved (IRDAI)',
          };

          const waUrl = `https://wa.me/919820000000?text=${encodeURIComponent(
            `Hello Dr. Akash Shah's clinical team, I would like to inquire about the ${proc.title} procedure.`
          )}`;

          return (
            <div
              key={proc.id}
              id={proc.id}
              className="bg-white border border-alabaster-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-card hover:border-bronze-600 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden group"
            >
              {/* Background Watermark Number (Raunak inspired) */}
              <div 
                className="absolute top-2 right-4 sm:right-8 text-7xl sm:text-8xl lg:text-9xl font-display font-black text-slate-100 group-hover:text-bronze-100/50 transition-colors pointer-events-none select-none z-0 opacity-70"
                aria-hidden="true"
              >
                0{index + 1}
              </div>

              {/* Left Column: Procedure Content (7 cols on lg) */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full relative z-10">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-bold tracking-eyebrow uppercase px-3 py-1 rounded-full bg-alabaster-100 text-bronze-600 border border-alabaster-200">
                      {proc.badge}
                    </span>
                    <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                      Procedure 0{index + 1}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-cypress-950 tracking-tight mb-1">
                    {proc.title}
                  </h2>
                  <p className="text-xs sm:text-sm font-medium text-slate-600 mb-4">
                    {proc.subhead}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {proc.description}
                  </p>

                  {/* Qobo Inspired Telemetry Badges Strip */}
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-alabaster-100 border border-alabaster-200 text-[11px] font-semibold text-cypress-950">
                      <Clock size={13} className="text-bronze-600 shrink-0" />
                      <span>{telemetry.duration}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-alabaster-100 border border-alabaster-200 text-[11px] font-semibold text-cypress-950">
                      <Hospital size={13} className="text-bronze-600 shrink-0" />
                      <span>{telemetry.setting}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[11px] font-semibold text-emerald-800">
                      <ShieldCheck size={13} weight="fill" className="text-emerald-600 shrink-0" />
                      <span>{telemetry.coverage}</span>
                    </span>
                  </div>

                  {/* Benchmarks Grid */}
                  <div className="mb-6 pt-5 border-t border-alabaster-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-cypress-950 block mb-3">
                      Key Surgical Benchmarks & Advantages
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {proc.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 bg-alabaster-50 p-2.5 rounded-xl border border-alabaster-200 text-xs text-cypress-950 font-medium"
                        >
                          <Check size={14} weight="bold" className="text-bronze-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Indication & Recovery Footnote */}
                  <div className="bg-alabaster-100 rounded-2xl p-4 border border-alabaster-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-6">
                    <div>
                      <span className="font-bold text-cypress-950 block mb-0.5">Clinical Indication:</span>
                      <span className="text-slate-600">{proc.indication}</span>
                    </div>
                    <div>
                      <span className="font-bold text-cypress-950 block mb-0.5">Anticipated Recovery:</span>
                      <span className="text-slate-600">{proc.recovery}</span>
                    </div>
                  </div>
                </div>

                {/* Dual Action Buttons (Qobo Inspired) */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="/contact#book-appointment"
                    className="pill-button bg-bronze-600 hover:bg-[#864c31] text-alabaster-50 text-xs font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 shadow-sm transition-all"
                  >
                    <CalendarCheck size={16} weight="bold" />
                    <span>Book Consultation</span>
                  </a>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill-button bg-[#25D366] hover:bg-[#20ba59] text-cypress-950 text-xs font-bold px-5 py-3 rounded-full inline-flex items-center gap-2 shadow-sm transition-all"
                  >
                    <WhatsappLogo size={16} weight="fill" />
                    <span>Ask on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Right Column: High-Craft Procedural Photograph (5 cols on lg) */}
              <div className="lg:col-span-5 h-full flex flex-col justify-center relative z-10">
                <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden relative shadow-md bg-cypress-950 border border-alabaster-200 group">
                  <img
                    src={imgData.src}
                    alt={imgData.alt}
                    className="w-full h-full object-cover brightness-95 group-hover:scale-105 transition-transform duration-700 ease-emil"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cypress-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Tag */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-cypress-950/90 backdrop-blur-md text-bronze-300 border border-cypress-800">
                      {imgData.tag}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-cypress-950/90 backdrop-blur-md text-alabaster-50 flex items-center justify-center border border-cypress-800">
                      <Icon size={16} weight="bold" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cashless Insurance & Corporate TPA Desk Section (Pattnaik & Raunak inspired) */}
      <div className="bg-white border border-alabaster-200 rounded-3xl p-8 sm:p-12 mb-16 shadow-card">
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck size={14} weight="fill" />
            <span>100% Cashless Hospitalization Network</span>
          </div>
          <h3 className="font-display text-3xl font-bold text-cypress-950 tracking-tight mb-3">
            Corporate TPA & Cashless Insurance Desk
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Under IRDAI modern guidelines, robotic console surgeries for genitourinary cancers are covered across
            all recognized private and public health insurance policies. Our hospital coordination desk handles
            pre-authorization at Lilavati Hospital and Hinduja Healthcare without upfront patient deposit hurdles.
          </p>
        </div>

        {/* 4 Trust Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-alabaster-50 p-5 rounded-2xl border border-alabaster-200">
            <CreditCard size={24} className="text-bronze-600 mb-2" weight="duotone" />
            <h4 className="font-sans text-sm font-bold text-cypress-950 mb-1">Fast-Track Pre-Auth</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Direct hospital insurance desk approval processed in 2–4 hours upon submitting diagnosis reports.
            </p>
          </div>

          <div className="bg-alabaster-50 p-5 rounded-2xl border border-alabaster-200">
            <Hospital size={24} className="text-bronze-600 mb-2" weight="duotone" />
            <h4 className="font-sans text-sm font-bold text-cypress-950 mb-1">Zero Deposit Hassle</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Approved cashless claims proceed directly to OT scheduling with no cash outlay for console usage.
            </p>
          </div>

          <div className="bg-alabaster-50 p-5 rounded-2xl border border-alabaster-200">
            <ShieldCheck size={24} className="text-bronze-600 mb-2" weight="duotone" />
            <h4 className="font-sans text-sm font-bold text-cypress-950 mb-1">IRDAI Robotic Mandate</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Compliant with the 2019 IRDAI mandate ensuring modern robotic interventions cannot be denied.
            </p>
          </div>

          <div className="bg-alabaster-50 p-5 rounded-2xl border border-alabaster-200">
            <FileText size={24} className="text-bronze-600 mb-2" weight="duotone" />
            <h4 className="font-sans text-sm font-bold text-cypress-950 mb-1">Chambers TPA Liaison</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dedicated clinical coordinator formats histology summaries and OT operative notes for instant claim clearance.
            </p>
          </div>
        </div>

        {/* Accepted TPAs / Insurers Chip Grid */}
        <div className="pt-6 border-t border-alabaster-200">
          <span className="text-xs font-bold uppercase tracking-wider text-cypress-950 block mb-3">
            Major Supported TPAs & Health Insurers:
          </span>
          <div className="flex flex-wrap gap-2">
            {[
              'Star Health Insurance',
              'HDFC ERGO Health',
              'ICICI Lombard',
              'Care Health Insurance',
              'Niva Bupa Health',
              'MediAssist TPA',
              'Paramount Health TPA',
              'Vidal Health TPA',
              'Heritage Health TPA',
              'Bajaj Allianz',
              'Aditya Birla Health',
              'New India Assurance'
            ].map((tpa, i) => (
              <span 
                key={i} 
                className="px-3.5 py-1.5 rounded-xl bg-alabaster-100 border border-alabaster-200 text-xs font-semibold text-slate-700"
              >
                {tpa}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Second Opinion Callout Banner */}
      <div className="bg-cypress-950 text-alabaster-50 rounded-3xl p-8 sm:p-12 border border-cypress-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-eyebrow text-bronze-400 block mb-2">
            OBJECTIVE INDEPENDENT REVIEW
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-alabaster-50 mb-2">
            Seeking a Second Opinion Before Surgery?
          </h3>
          <p className="text-xs sm:text-sm text-alabaster-100/80 leading-relaxed max-w-xl">
            Bring your diagnostic scans and biopsy slides to our Bandra West chambers. Dr. Akash Shah
            will review your histology blocks and explore whether organ-preserving robotic surgery or
            active surveillance is best.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <a
            href="/contact#book-appointment"
            className="pill-button bg-bronze-600 hover:bg-[#864c31] text-alabaster-50 text-xs font-semibold px-7 py-3.5 rounded-full inline-flex items-center gap-2 shadow-sm transition-all"
          >
            <CalendarCheck size={16} weight="bold" />
            <span>Request Second Opinion Slot</span>
          </a>

          <a
            href="https://wa.me/919820000000?text=Hello%20Dr.%20Akash%20Shah%27s%20clinical%20team%2C%20I%20would%20like%20to%20request%20a%20second%20opinion%20on%20my%20biopsy%20reports."
            target="_blank"
            rel="noopener noreferrer"
            className="pill-button bg-[#25D366] hover:bg-[#20ba59] text-cypress-950 text-xs font-bold px-6 py-3.5 rounded-full inline-flex items-center gap-2 shadow-sm transition-all"
          >
            <WhatsappLogo size={16} weight="fill" />
            <span>WhatsApp Reports</span>
          </a>
        </div>
      </div>
    </div>
  );
}
