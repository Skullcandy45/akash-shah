import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  CalendarCheck, 
  ShieldCheck, 
  Check, 
  CaretDown, 
  ChatsCircle, 
  MagnifyingGlass, 
  Stethoscope, 
  Heartbeat, 
  FileText,
  Clock,
  ArrowRight,
  Play,
  Pause,
  SpeakerSimpleSlash,
  Video,
  Hospital,
  FirstAid,
  PhoneCall,
  CheckCircle,
  WhatsappLogo
} from '@phosphor-icons/react';
import { siteConfig } from '../content/site';

export default function PatientJourney() {
  const [openFaq, setOpenFaq] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef(null);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    } else {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  const journeyPhases = [
    {
      phase: '01',
      eyebrow: 'PHASE 01 · INITIAL CONSULTATION',
      title: 'Unhurried Evaluation & Diagnostic Scan Audit',
      subhead: '45-Minute Dedicated In-Chambers Review in Bandra West',
      image: '/assets/images/chambers_consultation.jpg',
      imageAlt: 'Private consultation chambers of Dr. Akash Shah in Bandra West, Mumbai',
      imageTag: 'In-Person Consultation Chambers',
      icon: ChatsCircle,
      summary:
        'Your journey begins with an unhurried, private clinical discussion in our Bandra West chambers. Dr. Akash Shah personally reviews all diagnostic history with you and your family, explaining scan findings slice-by-slice.',
      checkpoints: [
        'Detailed review of original 3T mpMRI, CT, or PSMA-PET DICOM discs',
        'Independent audit of previous histopathology slides & Gleason score',
        'Evaluation of bladder, urinary, and baseline potency functions',
        'Clear anatomical explanation using physical 3D pelvic models',
      ],
      whatToBring: [
        'Prior imaging CDs / DICOM discs',
        'Original histopathology biopsy reports',
        'Serial PSA / urine laboratory test values',
        'Summary of medical history & ongoing prescriptions',
      ],
    },
    {
      phase: '02',
      eyebrow: 'PHASE 02 · PRECISION STAGING',
      title: 'Multidisciplinary Tumor Board Verification',
      subhead: 'Evidence-Based Staging Before Any Invasive Decision',
      image: '/assets/images/tenet_active_surveillance.jpg',
      imageAlt: 'Oncology specialist analyzing multi-monitor 3T mpMRI scans',
      imageTag: 'Tumor Board Diagnostic Staging',
      icon: MagnifyingGlass,
      summary:
        'Before any surgical intervention is recommended, your diagnostic imaging and biopsy specimens are cross-examined by our tumor board. This collaborative review ensures you are never over-treated or under-staged.',
      checkpoints: [
        'Consensus review by surgical oncologists, medical oncologists & pathologists',
        'Cognitive and software-registered 3T MRI-fusion biopsy targeting when needed',
        'Pre-operative RENAL nephrometry or PIRADS lesion risk stratification',
        'Transparent discussion of all surgical vs. surveillance alternatives',
      ],
      whatToBring: [
        'Second-opinion slide re-cuts for specialized uropathologist review',
        'Cardiac and pre-anesthetic medical fitness clearance',
        'Pre-operative blood panels and renal function indices (eGFR, Creatinine)',
        'Review of family cancer history and genomic biomarker tests',
      ],
    },
    {
      phase: '03',
      eyebrow: 'PHASE 03 · THE OPERATIVE DAY',
      title: 'Keyhole Da Vinci Xi Robotic Console Surgery',
      subhead: 'Athermal Micro-Dissection & Organ-Sparing Execution',
      image: '/assets/images/dr_shah_console.jpg',
      imageAlt: 'Dr. Akash Shah seated at the Da Vinci robotic surgeon console',
      imageTag: 'Robotic Master Console Surgery',
      icon: Stethoscope,
      summary:
        'Conducted at Lilavati Hospital or Hinduja Healthcare. Under 10× 3D optical magnification, Dr. Akash Shah controls wristed robotic instruments with sub-millimeter precision, sparing critical neurovascular continence fibers.',
      checkpoints: [
        'Athermal dissection to prevent thermal nerve injury and protect continence',
        'Enhanced Recovery After Surgery (ERAS) protocols for minimal physiological stress',
        'Direct phone update provided to family immediately upon console completion',
        'Early ambulation and oral fluids initiated within 6 to 12 hours post-op',
      ],
      whatToBring: [
        'Admissions documentation and cashless insurance pre-authorization letter',
        'Comfortable post-operative loose clothing for hospital discharge',
        'Dedicated attendant for post-op discharge briefing',
        'Hospital bag checklist provided by clinical coordinator',
      ],
    },
    {
      phase: '04',
      eyebrow: 'PHASE 04 · RECOVERY & SURVIVORSHIP',
      title: 'Restorative Rehabilitation & Lifelong Stewardship',
      subhead: 'Guided Pelvic Floor Physiotherapy & Structured Surveillance',
      image: '/assets/images/chambers_appointment_interior.jpg',
      imageAlt: 'Private consultation suite and long-term care management',
      imageTag: 'Long-Term Oncologic Stewardship',
      icon: Heartbeat,
      summary:
        'Our clinical relationship continues well beyond discharge. We supervise your functional recovery, catheter removal, pelvic rehabilitation, and guide regular oncological surveillance for definitive peace of mind.',
      checkpoints: [
        'Painless catheter removal typically scheduled on postoperative day 7 to 10',
        'Guided pelvic floor muscle exercises initiated to accelerate continence return',
        '24×7 direct telephone triage helpline for any immediate post-op query',
        'Structured 5-year surveillance schedule adhering strictly to NCCN/EAU guidelines',
      ],
      whatToBring: [
        'Scheduled follow-up appointment log at Bandra West chambers',
        'Daily bladder diary and fluid intake tracker',
        'First post-op ultrasensitive PSA or follow-up ultrasound scan',
        'Direct access to our triage coordinator via WhatsApp / phone',
      ],
    },
  ];

  const recoveryMilestones = [
    {
      benchmark: 'Hospital Stay',
      robotic: '24 to 48 Hours',
      open: '7 to 10 Days',
      advantage: '80% faster hospital discharge',
    },
    {
      benchmark: 'Operative Blood Loss',
      robotic: '< 50 mL (Rarely requires transfusion)',
      open: '500 to 1,200 mL (Frequent transfusion)',
      advantage: 'Minimal hemodynamic disruption',
    },
    {
      benchmark: 'Catheter Duration',
      robotic: '7 to 10 Days',
      open: '14 to 21 Days',
      advantage: 'Water-tight robotic reconstruction',
    },
    {
      benchmark: 'Desk Work Return',
      robotic: '10 to 14 Days',
      open: '6 to 8 Weeks',
      advantage: 'Preserved abdominal wall integrity',
    },
    {
      benchmark: 'Continence Recovery',
      robotic: 'Over 85–90% control within 6–12 weeks',
      open: 'Delayed control over 6–12 months',
      advantage: 'Athermal nerve bundle preservation',
    },
  ];

  const faqs = [
    {
      q: 'How soon after robotic radical prostatectomy does urinary continence return?',
      a: 'With modern nerve-sparing robotic console techniques, early continence recovery is significantly accelerated compared to open surgery. Over 85–90% of men regain complete control within 6 to 12 weeks, supported by guided pelvic floor muscle exercises initiated prior to catheter removal.',
    },
    {
      q: 'What is the advantage of robotic partial nephrectomy over removing the entire kidney?',
      a: 'Robotic partial nephrectomy excises only the renal tumor while salvaging healthy kidney tissue. Preserving functioning nephrons dramatically reduces the lifelong risk of chronic kidney disease (CKD), cardiovascular complications, and renal failure, especially in patients with diabetes or hypertension.',
    },
    {
      q: 'Can I bring external biopsy slides and scans for a second opinion?',
      a: 'Yes. Over 40% of patients visiting our Bandra West chambers seek an independent second opinion. We routinely coordinate blinded histopathology slide re-reviews and multiparametric MRI audits to ensure the initial diagnosis and Gleason grade are accurate before any surgery is scheduled.',
    },
    {
      q: 'How long will I need to stay in the hospital after robotic surgery?',
      a: 'Because robotic procedures avoid large muscle-cutting incisions, postoperative pain is minimal. Most robotic prostatectomy and partial nephrectomy patients are discharged within 24 to 48 hours and can resume light daily activities and desk work within 10 to 14 days.',
    },
    {
      q: 'Does health insurance cover robotic console surgery in Mumbai?',
      a: 'Yes. The Insurance Regulatory and Development Authority of India (IRDAI) mandates health insurance coverage for robotic surgeries. Our chambers and affiliated partner hospitals (Lilavati and Hinduja) offer seamless cashless desk coordination for all major TPAs and private corporate insurers.',
    },
    {
      q: 'What should I do if I have urgent questions after being discharged?',
      a: 'Every patient is given direct contact details for our 24×7 clinical triage coordinator. If you experience unexpected discomfort, fever, or catheter questions, our clinical team is available around the clock to provide immediate medical guidance or coordinate urgent in-hospital review.',
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
      <div className="max-w-3xl mb-14">
        <div className="eyebrow text-slate-600 mb-3">
          <span>COMPREHENSIVE ONCOLOGY PATHWAY</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-cypress-950 tracking-tight leading-tight mb-4">
          The Patient <span className="italic font-normal text-bronze-600">Journey.</span>
        </h1>
        <p className="text-base text-slate-600 leading-relaxed mb-6">
          Facing a suspected or confirmed tumor can be overwhelming. We believe clarity and transparency
          are essential medicines. Here is a step-by-step overview of how our practice guides you from
          first consultation through precision robotic surgery, rehabilitation, and long-term survivorship.
        </p>

        {/* 4 Telemetry Quick Pillars */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-alabaster-200">
          <div className="bg-alabaster-100 p-3 rounded-xl border border-alabaster-200">
            <span className="font-sans text-lg font-bold text-cypress-950 block">45 Mins</span>
            <span className="text-[11px] text-slate-600">Dedicated Consult</span>
          </div>
          <div className="bg-alabaster-100 p-3 rounded-xl border border-alabaster-200">
            <span className="font-sans text-lg font-bold text-cypress-950 block">100%</span>
            <span className="text-[11px] text-slate-600">Tumor Board Audit</span>
          </div>
          <div className="bg-alabaster-100 p-3 rounded-xl border border-alabaster-200">
            <span className="font-sans text-lg font-bold text-cypress-950 block">24–48 Hrs</span>
            <span className="text-[11px] text-slate-600">Typical Discharge</span>
          </div>
          <div className="bg-alabaster-100 p-3 rounded-xl border border-alabaster-200">
            <span className="font-sans text-lg font-bold text-cypress-950 block">5 Years</span>
            <span className="text-[11px] text-slate-600">Active Surveillance</span>
          </div>
        </div>
      </div>

      {/* IN-THEATER ROBOTIC CONSOLE VIDEO SHOWCASE */}
      <div className="rounded-3xl overflow-hidden border border-cypress-800 bg-cypress-950 text-alabaster-50 p-6 sm:p-8 lg:p-12 mb-20 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Video Player (7 cols) */}
        <div className="lg:col-span-7 relative aspect-video rounded-2xl overflow-hidden bg-cypress-900 border border-cypress-800 shadow-inner group">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            poster="/assets/images/dr_shah_console.jpg"
            className="w-full h-full object-cover"
            aria-label="Looping video showcase of robotic console surgery and 10x 3D optical magnification in theater"
          >
            <source src="/assets/video/robotic_console_loop.webm" type="video/webm" />
            <source src="/assets/video/robotic_console_loop.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-cypress-950/80 to-transparent pointer-events-none" />

          {/* Controls Overlay */}
          <div className="absolute bottom-3 right-3 flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-cypress-950/85 text-[10px] text-alabaster-100/80 backdrop-blur-sm border border-cypress-800">
              <SpeakerSimpleSlash size={12} weight="bold" />
              <span>MUTED AUTOPLAY</span>
            </span>
            <button
              onClick={toggleVideo}
              className="p-1.5 rounded-md bg-cypress-950/85 hover:bg-cypress-900 text-alabaster-50 backdrop-blur-sm border border-cypress-800 transition-colors"
              aria-label={isVideoPlaying ? "Pause video" : "Play video"}
            >
              {isVideoPlaying ? <Pause size={12} weight="bold" /> : <Play size={12} weight="bold" />}
            </button>
          </div>
        </div>

        {/* Right Video Narrative (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cypress-900 border border-cypress-800 text-[10px] uppercase font-bold tracking-wider text-bronze-400 mb-4">
              <Video size={13} weight="bold" />
              <span>IN-THEATER VIDEO SHOWCASE</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-alabaster-50 tracking-tight leading-snug mb-4">
              Sub-Millimeter Triangulation at the Robotic Console
            </h2>
            <p className="text-xs sm:text-sm text-alabaster-100/80 leading-relaxed mb-6">
              During surgery, Dr. Akash Shah does not stand over an open incision. Seated comfortably at the
              Da Vinci Xi master console, every millimeter hand movement is translated in real-time into
              wristed micro-motions with zero physiological tremor.
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-cypress-800 text-xs text-alabaster-100">
            <div className="flex items-center justify-between">
              <span className="text-bronze-400 font-semibold">Magnification:</span>
              <span>10× True 3D High-Definition Binoculars</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-bronze-400 font-semibold">Instrumentation:</span>
              <span>4 Fully Wristed Endowrist Instruments (540° Articulation)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-bronze-400 font-semibold">Tissue Protection:</span>
              <span>Athermal Micro-Dissection for Continence Nerves</span>
            </div>
          </div>
        </div>

      </div>

      {/* DETAILED 4-STAGE CLINICAL PATHWAY WITH IMAGES */}
      <div className="mb-20">
        <div className="max-w-2xl mb-12">
          <span className="text-[10px] font-bold uppercase tracking-eyebrow text-bronze-600 block mb-2">
            STEP-BY-STEP REASSURANCE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-cypress-950 tracking-tight">
            The 4 Stages of Your Care Pathway
          </h2>
        </div>

        <div className="space-y-12">
          {journeyPhases.map((phase) => {
            const Icon = phase.icon;
            return (
              <div
                key={phase.phase}
                className="bg-white border border-alabaster-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-bronze-600/40 transition-colors"
              >
                {/* Left Column: Stage Narrative & Checkpoints (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-cypress-950 text-alabaster-50 flex items-center justify-center font-display text-base font-bold shrink-0">
                        {phase.phase}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-bronze-600">
                        {phase.eyebrow}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-cypress-950 tracking-tight mb-1">
                      {phase.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-bronze-600 mb-4">
                      {phase.subhead}
                    </p>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {phase.summary}
                    </p>

                    {/* Clinical Checkpoints */}
                    <div className="mb-6 pt-5 border-t border-alabaster-200">
                      <span className="text-xs font-bold uppercase tracking-wider text-cypress-950 block mb-3">
                        Clinical Milestones in This Phase:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {phase.checkpoints.map((cp, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 bg-alabaster-50 p-2.5 rounded-xl border border-alabaster-200 text-xs text-cypress-950 font-medium"
                          >
                            <Check size={14} weight="bold" className="text-bronze-600 shrink-0 mt-0.5" />
                            <span>{cp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Patient Checklist Footnote */}
                    <div className="bg-alabaster-100 rounded-2xl p-4 border border-alabaster-200">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-cypress-950 block mb-2">
                        What to Bring / Prepare:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600">
                        {phase.whatToBring.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-bronze-600 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right Column: Editorial Photograph (5 cols) */}
                <div className="lg:col-span-5 h-full flex flex-col justify-center">
                  <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden relative shadow-md bg-cypress-950 border border-alabaster-200 group">
                    <img
                      src={phase.image}
                      alt={phase.imageAlt}
                      className="w-full h-full object-cover brightness-95 group-hover:scale-105 transition-transform duration-700 ease-emil"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cypress-950/80 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Floating Stage Tag */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-cypress-950/90 backdrop-blur-md text-bronze-300 border border-cypress-800">
                        {phase.imageTag}
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
      </div>

      {/* SURGICAL COMPARISON MATRIX (Robotic vs Open Surgery) */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-alabaster-200 shadow-card mb-20">
        <div className="max-w-2xl mb-8">
          <span className="text-[10px] font-bold uppercase tracking-eyebrow text-bronze-600 block mb-2">
            OBJECTIVE SURGICAL BENCHMARKS
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-cypress-950 mb-2">
            Robotic Console vs. Traditional Open Surgery
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Clinical metrics documented across global oncology trials demonstrating the tangible benefits
            of Da Vinci console precision.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-alabaster-200 text-slate-600 text-xs uppercase tracking-wider">
                <th className="py-3 px-4 font-bold">Clinical Benchmark</th>
                <th className="py-3 px-4 font-bold text-bronze-600">Da Vinci Robotic Surgery</th>
                <th className="py-3 px-4 font-bold">Traditional Open Surgery</th>
                <th className="py-3 px-4 font-bold text-cypress-950">Patient Impact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-alabaster-200">
              {recoveryMilestones.map((row, idx) => (
                <tr key={idx} className="hover:bg-alabaster-50/70 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-cypress-950">{row.benchmark}</td>
                  <td className="py-3.5 px-4 font-semibold text-bronze-600 bg-bronze-50/30 rounded-lg">{row.robotic}</td>
                  <td className="py-3.5 px-4 text-slate-600">{row.open}</td>
                  <td className="py-3.5 px-4 font-medium text-cypress-900">{row.advantage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <div className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="eyebrow text-slate-600 mb-2 justify-center">
            <span>PATIENT QUESTIONS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-cypress-950 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white border border-alabaster-200 rounded-2xl overflow-hidden shadow-subtle transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans text-base sm:text-lg font-semibold text-cypress-950">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-alabaster-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-cypress-950 text-alabaster-50' : 'text-slate-600'
                    }`}
                  >
                    <CaretDown size={14} weight="bold" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-alabaster-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* BOTTOM CONSULTATION CTA */}
      <div className="bg-cypress-950 text-alabaster-50 rounded-3xl p-8 sm:p-12 border border-cypress-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-eyebrow text-bronze-400 block mb-2">
            PERSONALIZED CARE COORDINATION
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-alabaster-50 mb-2">
            Ready to Discuss Your Clinical Case?
          </h3>
          <p className="text-xs sm:text-sm text-alabaster-100/80 leading-relaxed max-w-xl">
            Schedule a dedicated 45-minute consultation at our Bandra West chambers. Our coordinator
            will arrange all digital imaging and records transfers in advance.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <a
            href="/contact#book-appointment"
            className="pill-button bg-bronze-600 hover:bg-[#864c31] text-alabaster-50 text-xs font-semibold px-7 py-3.5 rounded-full inline-flex items-center gap-2 shadow-sm transition-all"
          >
            <CalendarCheck size={16} weight="bold" />
            <span>Book Initial Consultation</span>
          </a>

          <a
            href="https://wa.me/919820000000?text=Hello%20Dr.%20Akash%20Shah%27s%20clinical%20team%2C%20I%20have%20questions%20about%20the%20patient%20journey%20and%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="pill-button bg-[#25D366] hover:bg-[#20ba59] text-cypress-950 text-xs font-bold px-6 py-3.5 rounded-full inline-flex items-center gap-2 shadow-sm transition-all"
          >
            <WhatsappLogo size={16} weight="fill" />
            <span>WhatsApp Coordinator</span>
          </a>
        </div>
      </div>

    </div>
  );
}
