import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Certificate, 
  CheckCircle, 
  CalendarCheck, 
  GraduationCap, 
  Hospital, 
  ShieldCheck, 
  Cpu, 
  BookOpen, 
  Heartbeat,
  ArrowRight,
  WhatsappLogo,
  Star
} from '@phosphor-icons/react';
import { siteConfig } from '../content/site';

export default function About() {
  const { doctor } = siteConfig;

  const careerMilestones = [
    {
      year: 'Fellowship',
      title: 'Robotic Urologic Surgical Oncology',
      institution: 'Premier Tertiary Robotic Cancer Center',
      details: 'Over 800+ console hours on Da Vinci Xi system specializing in nerve-sparing prostatectomy and zero-ischemia partial nephrectomy.',
    },
    {
      year: 'Super-Specialty',
      title: 'MCh in Urology & Renal Transplantation',
      institution: 'Top Medical University, Mumbai',
      details: 'Gold medalist in clinical urology. Comprehensive training in endourology, reconstructive pelvic surgery, and oncology.',
    },
    {
      year: 'Post-Graduation',
      title: 'MS in General Surgery',
      institution: 'King Edward Memorial (KEM) Hospital, Mumbai',
      details: 'Extensive foundational training in oncologic resections, trauma triage, and open pelvic surgical anatomy.',
    },
    {
      year: 'Registration',
      title: 'Maharashtra Medical Council & DNB',
      institution: 'National Board of Examinations / MMC',
      details: 'Active registration MMC/2009/04/1824. Member of Urological Society of India (USI) and Association of Robotic Surgeons (ARS).',
    },
  ];

  const surgicalPillars = [
    {
      title: 'Organ & Nephron Preservation',
      badge: 'Zero-Ischemia Technique',
      desc: 'Excising tumors with microscopically verified clear margins while sparing maximal functional kidney or urinary bladder parenchyma.',
      image: '/assets/images/tenet_organ_preservation.jpg',
      icon: Heartbeat,
    },
    {
      title: 'Neurovascular Bundle Sparing',
      badge: '10× 3D Micro-Dissection',
      desc: 'Employing 10× 3D console magnification and athermal micro-dissection to protect erectile nerves and urethral sphincter integrity.',
      image: '/assets/images/tenet_nerve_sparing.jpg',
      icon: Cpu,
    },
    {
      title: 'Evidence-Based Surveillance',
      badge: 'mpMRI & Genomic Staging',
      desc: 'Refusing overtreatment for indolent low-risk cancers, prioritizing quality of life through protocolized serial PSA and 3T mpMRI surveillance.',
      image: '/assets/images/tenet_active_surveillance.jpg',
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

      {/* Hero Header Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
        
        {/* Left Column: Doctor Portrait with Vignette & Badges (5 cols) */}
        <div className="lg:col-span-5 relative">
          <div className="rounded-3xl overflow-hidden border border-alabaster-200 bg-cypress-950 shadow-card aspect-[4/5] relative group">
            <img
              src={doctor.image}
              alt={`${doctor.name} — ${doctor.title}`}
              className="w-full h-full object-cover object-top brightness-95 group-hover:scale-105 transition-transform duration-700 ease-emil"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cypress-950/85 via-transparent to-transparent pointer-events-none" />
            
            {/* Overlay Qualifications Pill */}
            <div className="absolute bottom-5 left-5 right-5 bg-cypress-950/90 backdrop-blur-md text-alabaster-50 p-4 rounded-2xl border border-cypress-800">
              <span className="text-[10px] uppercase tracking-wider text-bronze-400 font-bold block mb-0.5">
                SURGICAL CREDENTIALS
              </span>
              <p className="text-xs text-alabaster-100 font-medium leading-snug">
                {doctor.credentials}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative & Philosophy (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <div className="eyebrow text-slate-600 mb-3">
            <span>SURGICAL ONCOLOGIST & ROBOTIC LEAD</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-bold text-cypress-950 tracking-tight leading-tight mb-6">
            Pioneering Precision in Robotic Uro-Oncology.
          </h1>

          <p className="text-base text-slate-600 leading-relaxed mb-4">
            {doctor.bio}
          </p>

          <p className="text-sm text-slate-600 leading-relaxed mb-8">
            Operating at premier tertiary hospitals across Mumbai including Lilavati Hospital and
            Hinduja Healthcare in Bandra, Dr. Akash Shah provides unhurried, evidence-led consultations.
            Every surgical recommendation is evaluated against the oncological trifecta: definitive cancer
            cure, swift return to continence, and preservation of intimacy and dignity.
          </p>

          {/* Quick Stats Grid (Pattnaik & Raunak inspired) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full mb-8 pt-6 border-t border-alabaster-200">
            <div>
              <span className="font-display text-2xl sm:text-3xl font-bold text-cypress-950 tracking-tight block">
                15+ Yrs
              </span>
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                Surgical Mastery
              </span>
            </div>
            <div>
              <span className="font-display text-2xl sm:text-3xl font-bold text-cypress-950 tracking-tight block">
                1,200+
              </span>
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                Robotic Cases
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-display text-2xl sm:text-3xl font-bold text-cypress-950 tracking-tight">
                  4.9 / 5
                </span>
                <Star size={18} weight="fill" className="text-amber-500 mb-1" />
              </div>
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                850+ Patient Reviews
              </span>
            </div>
            <div>
              <span className="font-display text-2xl sm:text-3xl font-bold text-cypress-950 tracking-tight block">
                100%
              </span>
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                Organ-Preservation Focus
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/contact#book-appointment"
              className="pill-button bg-bronze-600 hover:bg-[#864c31] text-alabaster-50 text-xs font-semibold px-7 py-3.5 rounded-full inline-flex items-center gap-2 shadow-sm transition-all"
            >
              <CalendarCheck size={16} weight="bold" />
              <span>Consult Dr. Akash Shah</span>
            </a>

            <a
              href="https://wa.me/919820000000?text=Hello%20Dr.%20Akash%20Shah%27s%20clinical%20team%2C%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="pill-button bg-[#25D366] hover:bg-[#20ba59] text-cypress-950 text-xs font-bold px-6 py-3.5 rounded-full inline-flex items-center gap-2 shadow-sm transition-all"
            >
              <WhatsappLogo size={16} weight="fill" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Surgeon at Console In-Theater Feature */}
      <div className="rounded-3xl overflow-hidden border border-alabaster-200 bg-cypress-950 text-alabaster-50 mb-20 shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center">
        <div className="lg:col-span-7 aspect-video w-full overflow-hidden bg-cypress-900">
          <img
            src="/assets/images/dr_shah_console.jpg"
            alt="Dr. Akash Shah seated at the Da Vinci robotic surgeon console"
            className="w-full h-full object-cover object-center brightness-95"
          />
        </div>
        <div className="lg:col-span-5 p-8 sm:p-12">
          <span className="text-[10px] font-bold uppercase tracking-eyebrow text-bronze-400 block mb-2">
            SURGICAL EXCELLENCE IN THEATER
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-alabaster-50 tracking-tight mb-4">
            Sub-Millimeter Triangulation at the Robotic Console
          </h2>
          <p className="text-xs sm:text-sm text-alabaster-100/80 leading-relaxed mb-6">
            From the master console, Dr. Akash Shah commands 4 wristed robotic arms with 540 degrees of
            micro-articulation. Optical tremor filtration allows dissection of tissue planes invisible to the
            naked eye, minimizing blood loss and expediting post-operative recovery.
          </p>
          <div className="flex items-center gap-4 text-xs text-bronze-400 font-semibold">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle size={16} weight="fill" />
              Athermal Dissection
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle size={16} weight="fill" />
              10× 3D Magnification
            </span>
          </div>
        </div>
      </div>

      {/* Surgical Pillars */}
      <div className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="eyebrow text-slate-600 mb-2 justify-center">
            <span>OPERATIVE PHILOSOPHY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-cypress-950 tracking-tight">
            The Three Tenets of Care
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {surgicalPillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-alabaster-200 rounded-3xl overflow-hidden shadow-card hover:border-bronze-600 transition-all duration-300 flex flex-col group"
              >
                {/* Visual Image Header */}
                <div className="aspect-[16/10] w-full overflow-hidden relative bg-cypress-950">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover brightness-95 group-hover:scale-105 transition-transform duration-700 ease-emil"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cypress-950/70 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cypress-950/85 backdrop-blur-sm text-bronze-300 border border-cypress-800">
                    {p.badge}
                  </span>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-alabaster-100 border border-alabaster-200 flex items-center justify-center text-bronze-600 mb-4">
                      <Icon size={20} weight="bold" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-cypress-950 mb-2 leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Career & Fellowship Milestones with Editorial Institute Image */}
      <div className="bg-alabaster-100 rounded-3xl p-8 sm:p-12 border border-alabaster-200 mb-20">
        <div className="max-w-2xl mb-10">
          <div className="eyebrow text-slate-600 mb-2">
            <span>ACADEMIC & SURGICAL PEDIGREE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-cypress-950 tracking-tight">
            Formal Surgical Training
          </h2>
        </div>

        {/* Featured Fellowship Image Card */}
        <div className="rounded-2xl overflow-hidden border border-alabaster-200 bg-cypress-950 mb-8 shadow-md relative group">
          <div className="aspect-[21/9] sm:aspect-[2.5/1] w-full overflow-hidden">
            <img
              src="/assets/images/fellowship_surgical_institute.jpg"
              alt="Dr. Akash Shah mentoring fellows at the Da Vinci Xi patient cart during tertiary robotic cancer fellowship"
              className="w-full h-full object-cover object-center brightness-95 group-hover:scale-102 transition-transform duration-700 ease-emil"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-cypress-950/90 via-cypress-950/30 to-transparent pointer-events-none" />
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-eyebrow text-bronze-400 block mb-1">
                OPERATING THEATER MENTORSHIP & FELLOWSHIP
              </span>
              <h3 className="font-display text-base sm:text-xl font-bold text-alabaster-50">
                Tertiary Robotic Uro-Oncology Fellowship Case Leadership
              </h3>
            </div>
            <span className="shrink-0 text-xs font-semibold px-3 py-1 rounded-full bg-cypress-900/90 backdrop-blur-md text-alabaster-100 border border-cypress-700">
              800+ Console Hours Verified
            </span>
          </div>
        </div>

        <div className="space-y-6">
          {careerMilestones.map((m, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-alabaster-200 shadow-subtle flex flex-col md:flex-row md:items-start justify-between gap-4 hover:border-bronze-600/40 transition-colors"
            >
              <div className="max-w-xl">
                <span className="text-[10px] font-bold uppercase tracking-wider text-bronze-600 block mb-1">
                  {m.year}
                </span>
                <h3 className="font-display text-xl font-bold text-cypress-950 mb-1">
                  {m.title}
                </h3>
                <span className="text-xs font-semibold text-slate-600 block mb-3">
                  {m.institution}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {m.details}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-1.5 text-xs text-cypress-950 font-semibold bg-alabaster-50 px-3.5 py-1.5 rounded-full border border-alabaster-200 self-start">
                <Certificate size={16} className="text-bronze-600" />
                <span>Verified Credential</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hospital Affiliations & Consultation Chambers */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-alabaster-200 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-bronze-600 block mb-2">
            TERTIARY REFERRAL PRACTICE
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-cypress-950 mb-2">
            Chambers & Hospital Operating Access
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
            Surgeries scheduled at Lilavati Hospital & Research Centre and P. D. Hinduja Healthcare,
            Bandra West. Clinical evaluations conducted at our private Hill Road Chambers.
          </p>
        </div>

        <Link
          to="/contact"
          className="pill-button bg-cypress-950 hover:bg-cypress-900 text-alabaster-50 text-xs font-semibold px-8 py-3.5 rounded-full shrink-0 inline-flex items-center gap-2 transition-colors shadow-sm"
        >
          <span>Chambers Address & Transit</span>
          <ArrowRight size={14} weight="bold" />
        </Link>
      </div>
    </div>
  );
}
