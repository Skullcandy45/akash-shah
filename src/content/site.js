/**
 * Single Source of Truth for Dr. Akash Shah's Clinical Practice
 * NOTE: Every medical/credential/hospital affiliation entry is marked placeholder: true
 */

export const siteConfig = {
  doctor: {
    name: 'Dr. Akash Shah',
    credentials: 'MS (Gen Surg), MCh (Urology), DNB, Fellowship in Robotic Uro-Oncology',
    title: 'Uro-Oncologist & Robotic Surgeon',
    subtitle: 'URO-ONCOLOGY · ROBOTIC SURGERY · MUMBAI',
    monogram: 'AS',
    image: '/assets/images/dr_akash_shah.jpg',
    bio: 'Fellowship-trained urological surgical oncologist dedicated to organ-preserving, nerve-sparing robotic console procedures and multidisciplinary evidence-based tumor care in Mumbai.',
    placeholder: true,
  },
  
  contact: {
    phone: '+91 98200 00000',
    phoneRaw: '+919820000000',
    email: 'chambers@drakashshah.in',
    chambersName: 'Chambers of Dr. Akash Shah',
    address: {
      line1: 'Suite 402, Horizon Medical Enclave',
      line2: 'Hill Road, Bandra West',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400050',
      landmark: 'Near Mehboob Studio / Bandra Bandstand',
      mapUrl: 'https://maps.google.com/?q=Bandra+West+Mumbai',
    },
    triageNotice: '24×7 Uro-Oncology Triage Coordination for Post-Op Inquiries & Acute Staging',
    hours: {
      regular: 'Mon – Sat: 10:00 – 19:00',
      sunday: 'Sunday: Closed (On-call surgical emergencies only)',
      urgentCare: 'Same-day urgent oncology consultations reserved daily.',
    },
    placeholder: true,
  },

  // Operational Dock 4-card data
  operationalDock: [
    {
      id: 'hours',
      title: 'Working Hours',
      badge: 'Clock',
      type: 'light',
      primaryText: 'Mon – Sat: 10:00 – 19:00',
      secondaryText: 'Urgent oncology triage slots reserved daily. Post-op patient support available 24×7.',
      ctaText: 'Emergency: +91 98200 00000',
      ctaHref: 'tel:+919820000000',
      placeholder: true,
    },
    {
      id: 'contact',
      title: 'Contact Us',
      badge: 'PhoneCall',
      type: 'bronze',
      primaryText: 'Quick assistance for appointments & second opinions',
      secondaryText: 'Our clinical coordinator will review your diagnostic scans within 4 business hours.',
      ctaText: '+91 98200 00000',
      ctaHref: 'tel:+919820000000',
      placeholder: true,
    },
    {
      id: 'directions',
      title: 'Directions',
      badge: 'MapPin',
      type: 'light',
      primaryText: 'Bandra West Chambers',
      secondaryText: 'Suite 402, Horizon Medical Enclave, Hill Road, Bandra West, Mumbai 400050',
      ctaText: 'Show on map →',
      ctaHref: 'https://maps.google.com/?q=Bandra+West+Mumbai',
      placeholder: true,
    },
    {
      id: 'quickbook',
      title: 'Lead Surgeon',
      subtitle: 'Dr. Akash Shah',
      specialty: 'Robotic Uro-Oncology',
      type: 'portrait',
      image: '/assets/images/dr_akash_shah.jpg',
      ctaText: 'Book appointment',
      ctaHref: '#book-appointment',
      placeholder: true,
    },
  ],

  // Section 3: Subspecialty Ticker Strip
  subspecialtiesTicker: [
    'Robotic Radical Prostatectomy',
    'Nephron-Sparing Kidney Surgery',
    'MRI-US Fusion Biopsy',
    'Bladder Preservation & Neobladder',
    'Retroperitoneal Lymph Node Dissection',
    'Second-Opinion Oncology Review',
    'Partial Nephrectomy with Hypothermia',
    'Endoscopic En-Bloc TURBT',
  ],

  // Section 4: Practice Manifesto & Metrics
  manifesto: {
    eyebrow: 'MEET YOUR SURGEON',
    statement: 'Transparent, evidence-led urological cancer care with an unyielding commitment to organ preservation.',
    leadParagraph:
      'As a tertiary referral practice in Mumbai, we specialize in high-complexity robotic console procedures and precision oncological resections. Every case is evaluated not merely for surgical feasibility, but for long-term functional recovery, continence preservation, and quality of life.',
    highlightSentence:
      'We never rush surgery when active surveillance or multidisciplinary therapy offers equal oncological control.',
    badgeLabel: 'FELLOWSHIP / ROBOTIC ONCOLOGY',
    image: '/assets/images/dr_akash_shah.jpg',
    metrics: [
      {
        value: '15+ Years',
        label: 'Clinical Experience',
        caption: 'Specialized in advanced pelvic & retroperitoneal oncology',
        placeholder: true,
      },
      {
        value: 'Robotic',
        label: 'Minimally Invasive',
        caption: 'Sub-millimeter 3D magnified console precision',
        placeholder: true,
      },
      {
        value: 'Tumor Board',
        label: 'Multidisciplinary Reviewed',
        caption: 'Case-by-case consensus with radiation & medical oncology',
        placeholder: true,
      },
    ],
  },

  // Section 5: Clinical Methodology (Replaces "What is Uro-Oncology?")
  clinicalMethodology: {
    eyebrow: 'CLINICAL METHODOLOGY',
    title: 'Precision Diagnostics,',
    titleAccent: 'Advanced Surgical Mastery.',
    summary:
      'Where high-resolution 3T multiparametric MRI, molecular risk stratification, and 4th-generation Da Vinci Xi robotic surgery converge. Every surgical trajectory is calibrated with sub-millimeter precision to achieve oncological clearance while fiercely preserving functional anatomy.',
    paragraph2:
      'By replacing wide open incisions with 3D high-magnification robotic console instrumentation, we protect delicate neurovascular bundles, maintain urinary continence, and ensure patients return to their lives with dignity, swift recovery, and lasting peace of mind.',
    video: {
      mp4: '/assets/video/robotic_console_loop.mp4',
      webm: '/assets/video/robotic_console_loop.webm',
      poster: '/assets/images/robotic_surgery_theater.jpg',
      caption: 'Da Vinci Xi® Console Precision · Sub-Millimeter Tremor Filtration · 10× Optical 3D Magnification',
    },
    checklist: [
      {
        id: 1,
        title: '3T mpMRI & Targeted Fusion Biopsy',
        desc: 'Direct lesion co-registration and cognitive sampling eliminating diagnostic error, blind needle passes, and overtreatment.',
        placeholder: true,
      },
      {
        id: 2,
        title: 'Sub-Millimeter Robotic Console Articulation',
        desc: 'Wristed instrumentation with 7 degrees of freedom and real-time tremor cancellation navigating narrow pelvic spaces.',
        placeholder: true,
      },
      {
        id: 3,
        title: 'Organ & Nephron Sparing Protocols',
        desc: 'Zero-ischemia or ultra-selective vascular clamping for complex renal masses to protect lifelong glomerular filtration rate.',
        placeholder: true,
      },
      {
        id: 4,
        title: 'Neurovascular Bundle Preservation',
        desc: 'Athermal microscopic dissection safeguarding erectile innervation and puboprostatic ligaments for early urinary control.',
        placeholder: true,
      },
      {
        id: 5,
        title: 'Multidisciplinary Tumor Board Staging',
        desc: 'Rigorous pre-operative slide re-evaluation and multi-specialist consensus aligning surgical, medical, and radiation oncology.',
        placeholder: true,
      },
    ],
  },

  // Streamlined Unified Procedures (Combines Matrix + Detailed Bento into Clean Interactive Layout)
  procedureCategories: [
    { id: 'all', label: 'All Procedures' },
    { id: 'prostate', label: 'Prostate' },
    { id: 'kidney', label: 'Kidney' },
    { id: 'bladder', label: 'Bladder' },
    { id: 'reconstruction', label: 'Staging & Second Opinions' },
  ],

  streamlinedProcedures: [
    {
      id: 'robotic-prostatectomy',
      category: 'prostate',
      title: 'Robotic Radical Prostatectomy',
      subhead: 'Trifecta: Cancer Control, Continence & Potency Preservation',
      badge: 'Robotic Gold Standard',
      icon: 'ShieldCheck',
      description:
        'Utilizing 3D 10× optical magnification and wristed robotic instrumentation to dissect the delicate neurovascular bundles adjacent to the prostate, maximizing early urinary control and erectile recovery.',
      highlights: [
        'Bilateral neurovascular bundle sparing',
        'Water-tight robotic vesicourethral anastomosis',
        'Hospital stay typically 24–48 hours',
        'Significantly reduced blood loss compared to open surgery',
      ],
      indication: 'Localized & locally advanced prostate cancer (Gleason 7–10, PIRADS 4/5)',
      recovery: '24–48 hrs stay · catheter removed in 7 days · rapid pelvic floor rehabilitation',
      placeholder: true,
    },
    {
      id: 'partial-nephrectomy',
      category: 'kidney',
      title: 'Nephron-Sparing Partial Nephrectomy',
      subhead: 'Excision of Renal Tumors While Preserving Healthy Parenchyma',
      badge: 'Organ Sparing',
      icon: 'Heartbeat',
      description:
        'Surgical removal of renal cell carcinoma masses while preserving the remainder of the functioning kidney. Incorporates real-time intraoperative ultrasound and selective branch clamping.',
      highlights: [
        'Zero-ischemia or ultra-low ischemia techniques',
        'Deep parenchymal multi-layer reconstruction',
        'Critical for solitary kidneys & bilateral tumors',
        'Prevents future chronic kidney disease (CKD)',
      ],
      indication: 'T1a and select T1b renal masses (≤7 cm) or central hilar tumors',
      recovery: '2–3 days hospital stay · return to desk work in 10–14 days',
      placeholder: true,
    },
    {
      id: 'mri-biopsy',
      category: 'prostate',
      title: 'Multiparametric MRI-Fusion Prostate Biopsy',
      subhead: 'Cognitive & Software-Fused Targeted Spatial Sampling',
      badge: 'Diagnostics',
      icon: 'Crosshair',
      description:
        'Co-registering 3T multi-parametric MRI imaging with real-time ultrasound coordinates allows direct sampling of PIRADS 4 and 5 suspicious lesions, significantly reducing missed aggressive cancers.',
      highlights: [
        'PIRADS guided targeted cores',
        'Transperineal approach reducing infection risk to near-zero',
        'Outpatient day-care procedure under short sedation',
        'Eliminates random needle guesswork',
      ],
      indication: 'Elevated PSA (>4 ng/mL), rising PSA velocity, or abnormal digital rectal exam',
      recovery: 'Day-care discharge within 4 hours · normal routine next day',
      placeholder: true,
    },
    {
      id: 'radical-cystectomy',
      category: 'bladder',
      title: 'Robotic Radical Cystectomy & Neobladder',
      subhead: 'Complete Intracorporeal Continent Urinary Diversion',
      badge: 'Complex Restorative',
      icon: 'ArrowsClockwise',
      description:
        'Complete minimally invasive removal of the bladder followed by constructing an orthotopic neobladder entirely inside the body from native bowel, eliminating the need for an external stoma bag.',
      highlights: [
        'Intracorporeal pouch reconstruction',
        'Reduced postoperative ileus and quicker bowel recovery',
        'Extended template pelvic lymphadenectomy',
        'Natural urinary voiding restoration',
      ],
      indication: 'Muscle-invasive urothelial carcinoma (T2–T4a) or BCG-refractory high-risk disease',
      recovery: '5–7 days hospital recovery with enhanced recovery protocols (ERAS)',
      placeholder: true,
    },
    {
      id: 'endoscopic-turbt',
      category: 'bladder',
      title: 'Endoscopic En-Bloc TURBT',
      subhead: 'Bipolar Detrusor-Intact Staging & Resection',
      badge: 'Endourology',
      icon: 'Eye',
      description:
        'Transurethral en-bloc resection of bladder tumors preserving spatial architecture for accurate pathological staging of the muscularis propria detrusor layer.',
      highlights: [
        'Complete margin evaluation in single specimen',
        'Reduced risk of tumor seeding and recurrence',
        'Immediate post-op intravesical instillation',
        'Day-care or 24-hour discharge',
      ],
      indication: 'Non-muscle invasive bladder tumors and persistent hematuria evaluations',
      recovery: 'Overnight stay or same-day discharge · catheter for 24–48 hours',
      placeholder: true,
    },
    {
      id: 'testicular-rplnd',
      category: 'reconstruction',
      title: 'Nerve-Sparing Retroperitoneal LND (RPLND)',
      subhead: 'Post-Chemotherapy & Primary Staging Clearance',
      badge: 'Surgical Staging',
      icon: 'FirstAid',
      description:
        'Systematic retroperitoneal lymphadenectomy performed with micro-surgical preservation of the sympathetic hypogastric plexus to safeguard normal ejaculatory function in young male patients.',
      highlights: [
        'Sympathetic hypogastric plexus preservation',
        'Full template clearance of residual teratoma',
        'Coordinated with medical oncology staging',
        'Curative intent for non-seminomatous germ cell tumors',
      ],
      indication: 'Stage I–III testicular cancer with residual retroperitoneal masses post-chemotherapy',
      recovery: '3–4 days hospital recovery · preservation of fertility and ejaculation',
      placeholder: true,
    },
    {
      id: 'active-surveillance',
      category: 'prostate',
      title: 'Active Surveillance Protocol',
      subhead: 'Structured Non-Surgical Oncology Monitoring',
      badge: 'Evidence Protocol',
      icon: 'ChartLineUp',
      description:
        'For low-risk prostate malignancies, avoiding immediate surgery through regular serial PSA monitoring, genomic risk profiling, and protocolized 3T mpMRI scans.',
      highlights: [
        'Avoids surgical morbidity when cancer is indolent',
        'Scheduled 6-month PSA and 18-month mpMRI milestones',
        'Definitive surgery readily triggered if progression is detected',
        'Strict guideline adherence following NCCN/EAU standards',
      ],
      indication: 'Very low risk and low risk localized prostate cancer (Gleason 3+3, PSA <10)',
      recovery: 'No surgical recovery required · preserved baseline lifestyle',
      placeholder: true,
    },
    {
      id: 'second-opinion-boards',
      category: 'reconstruction',
      title: 'Comprehensive Second-Opinion Oncology Review',
      subhead: 'Independent Pathology & Scan Re-Evaluation',
      badge: 'Tertiary Review',
      icon: 'Path',
      description:
        'Before undergoing radical resections, radiation, or chemotherapy, our Bandra West chambers coordinate independent histopathology slide re-reviews and multiparametric imaging audits.',
      highlights: [
        'Independent pathology slide cross-examination',
        'Multidisciplinary tumor board recommendations',
        'Objective discussion of robotic vs. radiation vs. surveillance',
        'Detailed written consultative report provided within 48 hours',
      ],
      indication: 'Any newly diagnosed genitourinary malignancy prior to invasive intervention',
      recovery: 'Formal consultation at Bandra West chambers or remote digital review',
      placeholder: true,
    },
  ],

  // Section 8: Specialist-Led Care Team (3 Specialists with AI Portraits)
  careTeam: [
    {
      id: 'dr-akash-shah',
      name: 'Dr. Akash Shah',
      role: 'Lead Uro-Oncologist & Robotic Surgeon',
      credentials: 'MS, MCh (Urology), DNB, Fellowship in Robotic Surgical Oncology',
      focus: 'Prostate, Kidney & Bladder Console Reconstructions',
      bio: 'Fellowship-trained surgical oncologist with over 15 years of surgical excellence. Dedicated to organ preservation, nerve-sparing robotics, and compassionate communication.',
      hospitalAffiliations: 'Honorary Consultant at Lilavati Hospital & Hinduja Healthcare, Bandra',
      image: '/assets/images/dr_akash_shah.jpg',
      placeholder: true,
    },
    {
      id: 'dr-medical-oncology',
      name: 'Dr. Priya Sharma',
      role: 'Systemic, Targeted & Immunotherapy Partner',
      credentials: 'MD (Medicine), DM (Medical Oncology), ESMO Certified',
      focus: 'Neoadjuvant & Adjuvant Immunotherapy, PARP Inhibitors',
      bio: 'Collaborating closely on advanced genitourinary tumors requiring modern biological agents, antibody-drug conjugates, and individualized targeted therapies.',
      hospitalAffiliations: 'Consultant Medical Oncologist, Tertiary Cancer Center Mumbai',
      image: '/assets/images/dr_medical_oncology.jpg',
      placeholder: true,
    },
    {
      id: 'dr-onco-pathology',
      name: 'Dr. Rajiv Merchant',
      role: 'mpMRI & Histopathology Diagnostic Lead',
      credentials: 'MD (Radiodiagnosis / Pathology), FNVIR',
      focus: '3T PIRADS Staging, Margin Assessment & Genomic Profiling',
      bio: 'Delivering precision tissue verification, digital second opinions on biopsy specimens, and state-of-the-art imaging cross-examinations for surgical margins.',
      hospitalAffiliations: 'Senior Subspecialist in Uroradiology & Surgical Pathology, Mumbai',
      image: '/assets/images/dr_pathology_lead.jpg',
      placeholder: true,
    },
  ],

  // Section 9: 4-Step Patient Journey Row
  patientJourney: [
    {
      step: '01',
      title: 'Consultation',
      subtitle: 'Comprehensive Initial Evaluation',
      desc: 'An unhurried 45-minute clinical evaluation at our Bandra West chambers. We thoroughly review prior imaging, PSA/biomarker histories, pathology slides, and family risk factors.',
      badge: '45-Min Dedicated Review',
      placeholder: true,
    },
    {
      step: '02',
      title: 'Diagnosis & Staging',
      subtitle: 'Precision Diagnostic Workup',
      desc: 'High-resolution 3T multiparametric MRI, targeted fusion biopsy, and PSMA-PET or bone staging. Every finding is explained with visual anatomical models before deciding next steps.',
      badge: 'Multidisciplinary Board',
      placeholder: true,
    },
    {
      step: '03',
      title: 'Tailored Treatment',
      subtitle: 'Console Precision or Surveillance',
      desc: 'Execution of your agreed treatment plan: nerve-sparing robotic console surgery, organ-sparing partial resections, or rigorous active surveillance protocol with defined milestones.',
      badge: 'Robotic & Organ Sparing',
      placeholder: true,
    },
    {
      step: '04',
      title: 'Recovery & Surveillance',
      subtitle: 'Dedicated Long-Term Care',
      desc: 'Structured pelvic floor rehabilitation, rapid return to normal activities, 24×7 post-op coordination, and a strict 5-year oncological surveillance schedule for lasting peace of mind.',
      badge: 'Ongoing Support',
      placeholder: true,
    },
  ],

  // Section 10: Appointment Form & Footer
  appointmentForm: {
    eyebrow: 'BOOK APPOINTMENT',
    title: 'Schedule Your Visit, Today.',
    subtitle:
      'We welcome primary consultations, second opinions, and urgent staging reviews. Please provide your basic details and our clinical coordinator will reach out promptly.',
    checkpoints: [
      'Primary Chambers — Hill Road, Bandra West, Mumbai',
      'Second-opinion pathology & imaging review coordination',
      'Confirmation call or secure message within 4 business hours',
      'All diagnostic findings clearly explained before any intervention',
    ],
    placeholder: true,
  },

  // Footer Navigation & Details
  footer: {
    legalNotice:
      'Disclaimer: The medical information provided on this website is for educational and informational purposes only. It does not constitute medical advice, diagnosis, or treatment recommendations. Always consult a qualified physician or surgical oncologist for individual clinical guidance.',
    copyright: '© 2026 Chambers of Dr. Akash Shah. All rights reserved. Registered with Maharashtra Medical Council.',
    links: {
      practice: [
        { label: 'About Dr. Shah', href: '/about' },
        { label: 'Care Team', href: '/doctors' },
        { label: 'Patient Journey', href: '/patient-journey' },
        { label: 'Contact Chambers', href: '/contact' },
      ],
      procedures: [
        { label: 'Robotic Prostatectomy', href: '/services#prostatectomy' },
        { label: 'Partial Nephrectomy', href: '/services#partial-nephrectomy' },
        { label: 'MRI-Fusion Biopsy', href: '/services#mri-biopsy' },
        { label: 'Bladder Cancer & Neobladder', href: '/services#cystectomy' },
        { label: 'Second Opinions', href: '/services#second-opinions' },
      ],
    },
    placeholder: true,
  },
};
