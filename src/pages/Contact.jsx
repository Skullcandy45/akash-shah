import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  MapPin, 
  Phone, 
  EnvelopeSimple, 
  Clock, 
  CalendarCheck, 
  ShieldCheck, 
  Hospital, 
  AirplaneTakeoff, 
  Car, 
  Train,
  CheckCircle,
  ArrowRight,
  NavigationArrow,
  Compass,
  Buildings,
  WhatsappLogo
} from '@phosphor-icons/react';
import { siteConfig } from '../content/site';

export default function Contact() {
  const { contact } = siteConfig;
  const [activePin, setActivePin] = useState('chambers');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Prostate / PSA Evaluation',
    date: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const locations = [
    {
      id: 'chambers',
      name: 'Primary Private Chambers',
      address: 'Suite 402, Horizon Enclave, Hill Road, Bandra West, Mumbai 400050',
      landmark: 'Next to St. Joseph Convent / Near Mehboob Studio',
      hours: 'Mon–Sat 10:00–19:00 (By Appointment)',
      phone: contact.phone,
      tag: 'Consultation & Scan Review',
      mapQuery: 'Hill+Road+Bandra+West+Mumbai+400050',
    },
    {
      id: 'lilavati',
      name: 'Lilavati Hospital & Research Centre',
      address: 'A-791, Bandra Reclamation, Bandra West, Mumbai 400050',
      landmark: 'Near Bandra-Worli Sea Link Exit',
      hours: 'Inpatient Robotic Surgeries & Emergency Triage',
      phone: contact.phone,
      tag: 'Robotic Surgical Operating Theater',
      mapQuery: 'Lilavati+Hospital+Bandra+West+Mumbai',
    },
    {
      id: 'hinduja',
      name: 'P. D. Hinduja Healthcare Surgical Center',
      address: '11th Road, Khar West / Bandra West, Mumbai 400052',
      landmark: 'Near Madhu Park / Off SV Road',
      hours: 'Day-Care Robotic Interventions & Biopsies',
      phone: contact.phone,
      tag: 'Tertiary Surgical Center',
      mapQuery: 'Hinduja+Healthcare+Surgical+Khar+West+Mumbai',
    },
  ];

  const currentLocation = locations.find((l) => l.id === activePin) || locations[0];

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
      <div className="max-w-3xl mb-14">
        <div className="eyebrow text-slate-600 mb-3">
          <span>COORDINATION & LOCATION</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-cypress-950 tracking-tight leading-tight mb-4">
          Contact the <span className="italic font-normal text-bronze-600">Chambers.</span>
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Centrally located on Hill Road in Bandra West, Mumbai. Conveniently positioned for local,
          outstation, and international patients seeking tertiary robotic console evaluations, second
          opinions, or surgical staging reviews.
        </p>
      </div>

      {/* INTERACTIVE MAP & SURGICAL CAMPUS SHOWCASE */}
      <div className="bg-cypress-950 rounded-3xl overflow-hidden border border-cypress-800 text-alabaster-50 shadow-2xl mb-16">
        {/* Top Control Bar with Location Selector Tabs */}
        <div className="p-6 sm:p-8 border-b border-cypress-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-eyebrow text-bronze-400 block mb-1">
              CAMPUS & THEATER NAVIGATION
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-alabaster-50">
              Chambers & Operating Hospital Network
            </h2>
          </div>

          {/* Location Selector Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {locations.map((loc) => {
              const isSelected = activePin === loc.id;
              return (
                <button
                  key={loc.id}
                  onClick={() => setActivePin(loc.id)}
                  className={`text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 ${
                    isSelected
                      ? 'bg-bronze-600 text-alabaster-50 shadow-sm'
                      : 'bg-cypress-900/80 text-alabaster-200/80 hover:text-alabaster-50 hover:bg-cypress-800 border border-cypress-800'
                  }`}
                >
                  {loc.name.split(' ')[0]} {loc.name.split(' ')[1] || ''}
                </button>
              );
            })}
          </div>
        </div>

        {/* Map & Detail Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
          {/* Left Column: Interactive Map Iframe (7 cols on lg) */}
          <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-full min-h-[350px] bg-cypress-900 overflow-hidden">
            <iframe
              title="Bandra West Mumbai Location Map"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15083.565158652254!2d72.8225571!3d19.0558124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9415494d131%3A0xb35a0980cf7bc698!2sHill%20Rd%2C%20Bandra%20West%2C%20Mumbai%2C%20Maharashtra%20400050!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin`}
              className="w-full h-full border-0 filter contrast-[1.05] grayscale-[15%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Subtle Gradient Overlays for integration */}
            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-cypress-950 to-transparent pointer-events-none hidden lg:block" />

            {/* Floating Live Telemetry Badge */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-cypress-950/90 backdrop-blur-md border border-cypress-800 text-xs text-alabaster-100 shadow-lg pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium">19.0558° N, 72.8335° E · Bandra West</span>
            </div>
          </div>

          {/* Right Column: Selected Location Detail Card (5 cols on lg) */}
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-cypress-950">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-cypress-900 border border-cypress-800 text-bronze-400 inline-block mb-4">
                {currentLocation.tag}
              </span>
              <h3 className="font-display text-2xl font-bold text-alabaster-50 mb-3">
                {currentLocation.name}
              </h3>
              
              <div className="space-y-4 text-xs sm:text-sm text-alabaster-100/80 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-bronze-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-alabaster-50 block">Address</span>
                    <span>{currentLocation.address}</span>
                    <span className="text-xs text-alabaster-200/60 block mt-0.5">Landmark: {currentLocation.landmark}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={20} className="text-bronze-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-alabaster-50 block">Operating Hours</span>
                    <span>{currentLocation.hours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={20} className="text-bronze-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-alabaster-50 block">Direct Appointments & Triage</span>
                    <a href={`tel:${siteConfig.contact.phoneRaw}`} className="text-bronze-300 font-bold hover:underline">
                      {currentLocation.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-cypress-800 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`https://maps.google.com/?q=${currentLocation.mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 pill-button bg-bronze-600 hover:bg-[#864c31] text-alabaster-50 text-xs font-semibold py-3 px-5 rounded-full flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <NavigationArrow size={15} weight="bold" />
                <span>Get Directions in Google Maps</span>
              </a>
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="w-full sm:w-auto pill-button bg-cypress-900 hover:bg-cypress-800 border border-cypress-700 text-alabaster-50 text-xs font-semibold py-3 px-5 rounded-full flex items-center justify-center gap-2 transition-colors"
              >
                <Phone size={15} weight="bold" />
                <span>Call Triage</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CHAMBERS PHOTOGRAPHY & INTERACTIVE BOOKING FORM */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-start">
        
        {/* Left Column: Chambers Visual & Logistics (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Chambers Interior Photo Card */}
          <div className="rounded-3xl overflow-hidden border border-alabaster-200 bg-cypress-950 shadow-card relative group">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src="/assets/images/chambers_appointment_interior.jpg"
                alt="Private consultation chambers interior of Dr. Akash Shah in Bandra West, Mumbai"
                className="w-full h-full object-cover object-center brightness-95 group-hover:scale-105 transition-transform duration-700 ease-emil"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-cypress-950/90 via-cypress-950/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-alabaster-50">
              <span className="text-[10px] font-bold uppercase tracking-wider text-bronze-400 block mb-0.5">
                PRIVATE CONSULTATION SUITE
              </span>
              <h3 className="font-display text-base font-bold text-alabaster-50">
                Suite 402, Horizon Enclave · Hill Road
              </h3>
              <p className="text-xs text-alabaster-100/80 mt-1">
                Unhurried 45-minute private evaluations with dedicated DICOM scan review terminals.
              </p>
            </div>
          </div>

          {/* Direct WhatsApp Triage Card (Qobo inspired) */}
          <div className="bg-gradient-to-br from-emerald-950 via-cypress-950 to-cypress-950 border border-emerald-800/60 text-alabaster-50 rounded-3xl p-6 sm:p-7 shadow-card relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-900/60 border border-emerald-700/60 px-3 py-1 rounded-full">
                Instant Scan Review
              </span>
              <span className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Coordinator
              </span>
            </div>

            <h3 className="font-display text-xl font-bold text-alabaster-50 mb-1.5">
              WhatsApp Clinical Concierge
            </h3>
            <p className="text-xs text-alabaster-100/80 leading-relaxed mb-4">
              Need immediate answers regarding prostate biopsy, PSA elevation, or surgery scheduling? Send
              your reports directly via WhatsApp for fast-track intake.
            </p>

            <a
              href="https://wa.me/919820000000?text=Hello%20Dr.%20Akash%20Shah%27s%20clinical%20team%2C%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-cypress-950 text-xs font-bold py-3 px-4 rounded-full shadow-[0_4px_16px_rgba(37,211,102,0.35)] active:scale-95 transition-all"
            >
              <WhatsappLogo size={18} weight="fill" />
              <span>Chat with Coordinator on WhatsApp</span>
            </a>
          </div>

          {/* Quick Contact & Emergency Triage Box */}
          <div className="bg-white border border-alabaster-200 rounded-3xl p-6 sm:p-8 shadow-card space-y-4">
            <h3 className="font-display text-lg font-bold text-cypress-950">
              Chambers Telephone & Records Desk
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-alabaster-100 flex items-center justify-center text-bronze-600 shrink-0">
                  <Phone size={16} weight="bold" />
                </div>
                <div>
                  <span className="font-bold text-cypress-950 block">Direct Appointments</span>
                  <a href={`tel:${contact.phoneRaw}`} className="text-bronze-600 font-bold hover:underline">
                    {contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-alabaster-100 flex items-center justify-center text-bronze-600 shrink-0">
                  <EnvelopeSimple size={16} weight="bold" />
                </div>
                <div>
                  <span className="font-bold text-cypress-950 block">Electronic Scan Correspondence</span>
                  <a href={`mailto:${contact.email}`} className="text-bronze-600 hover:underline">
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-alabaster-200 text-xs text-slate-600 flex items-center gap-2">
              <ShieldCheck size={16} className="text-bronze-600" />
              <span>Full confidentiality and HIPAA-aligned records privacy</span>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Consultation Request Form (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-alabaster-200 rounded-3xl p-8 sm:p-10 shadow-card">
          <div className="mb-8">
            <span className="text-[10px] font-bold uppercase tracking-eyebrow text-bronze-600 block mb-1">
              DIRECT CHAMBERS REQUEST
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-cypress-950 tracking-tight mb-2">
              Request an In-Chambers Appointment
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our clinical coordinator personally confirms appointments and coordinates digital
              records transfers within 4 business hours.
            </p>
          </div>

          {submitted ? (
            <div className="bg-alabaster-100 border border-alabaster-200 rounded-2xl p-8 text-center animate-in fade-in-50 duration-200">
              <div className="w-14 h-14 rounded-full bg-bronze-600 text-alabaster-50 flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} weight="fill" />
              </div>
              <h3 className="font-display text-2xl font-bold text-cypress-950 mb-2">
                Consultation Request Received
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                Thank you, <span className="font-semibold text-cypress-950">{formData.name || 'Patient'}</span>. Our
                patient care coordinator will reach out at{' '}
                <span className="font-semibold text-bronze-600">{formData.phone || 'your phone number'}</span> to
                confirm your dedicated consultation slot at our Bandra West chambers.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="pill-button bg-cypress-950 hover:bg-cypress-900 text-alabaster-50 text-xs font-semibold px-6 py-2.5 rounded-full"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-cypress-950 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Kulkarni"
                    className="w-full bg-alabaster-50 border border-alabaster-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-cypress-950 placeholder:text-slate-600/40 focus:outline-none focus:border-bronze-600 focus:ring-1 focus:ring-bronze-600 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-cypress-950 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98XXX XXXXX"
                    className="w-full bg-alabaster-50 border border-alabaster-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-cypress-950 placeholder:text-slate-600/40 focus:outline-none focus:border-bronze-600 focus:ring-1 focus:ring-bronze-600 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-cypress-950 mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="patient@email.com"
                    className="w-full bg-alabaster-50 border border-alabaster-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-cypress-950 placeholder:text-slate-600/40 focus:outline-none focus:border-bronze-600 focus:ring-1 focus:ring-bronze-600 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-service" className="block text-xs font-bold uppercase tracking-wider text-cypress-950 mb-1.5">
                    Consultation Type
                  </label>
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-alabaster-50 border border-alabaster-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-cypress-950 focus:outline-none focus:border-bronze-600 focus:ring-1 focus:ring-bronze-600 transition-colors"
                  >
                    <option value="Prostate / PSA Evaluation">Prostate / PSA Evaluation</option>
                    <option value="Robotic Prostatectomy Second Opinion">Robotic Prostatectomy Second Opinion</option>
                    <option value="Kidney Mass / Partial Nephrectomy">Kidney Mass / Partial Nephrectomy</option>
                    <option value="Bladder Cancer & Endoscopy">Bladder Cancer & Endoscopy</option>
                    <option value="3T MRI-Fusion Targeted Biopsy">3T MRI-Fusion Targeted Biopsy</option>
                    <option value="General Uro-Oncology Consultation">General Uro-Oncology Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="contact-date" className="block text-xs font-bold uppercase tracking-wider text-cypress-950 mb-1.5">
                  Preferred Consultation Date
                </label>
                <input
                  id="contact-date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-alabaster-50 border border-alabaster-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-cypress-950 focus:outline-none focus:border-bronze-600 focus:ring-1 focus:ring-bronze-600 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-notes" className="block text-xs font-bold uppercase tracking-wider text-cypress-950 mb-1.5">
                  Clinical Concern or Summary of Prior Tests
                </label>
                <textarea
                  id="contact-notes"
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Mention current PSA level, biopsy status, or prior scans..."
                  className="w-full bg-alabaster-50 border border-alabaster-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-cypress-950 placeholder:text-slate-600/40 focus:outline-none focus:border-bronze-600 focus:ring-1 focus:ring-bronze-600 transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full pill-button bg-bronze-600 hover:bg-[#864c31] text-alabaster-50 text-xs font-bold py-3.5 px-8 rounded-full shadow-md flex items-center justify-center gap-2 transition-all duration-200"
                >
                  <CalendarCheck size={16} weight="bold" />
                  <span>Submit Appointment Request</span>
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-600 pt-2">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-bronze-600" />
                  Strictly Confidential Medical Review
                </span>
                <span>Response within 4 hrs</span>
              </div>
            </form>
          )}
        </div>

      </div>

      {/* Transit & Accessibility Guide */}
      <div className="bg-alabaster-100 rounded-3xl p-8 sm:p-12 border border-alabaster-200">
        <div className="max-w-2xl mb-8">
          <span className="text-[10px] font-bold uppercase tracking-eyebrow text-bronze-600 block mb-2">
            TRANSIT & ACCESSIBILITY
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-cypress-950 mb-2">
            Reaching Bandra West Chambers
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Positioned at the nexus of South and North Mumbai, our Hill Road chambers are conveniently
            connected to international and regional transit arteries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-alabaster-200 shadow-subtle flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-alabaster-100 flex items-center justify-center text-bronze-600 mb-4">
                <AirplaneTakeoff size={20} weight="bold" />
              </div>
              <h4 className="font-display text-base font-bold text-cypress-950 mb-1">
                From Mumbai Airport (T2)
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct access via Western Express Highway (WEH). Approximately 20–30 minutes drive.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-cypress-950 mt-4 block">12.5 km distance</span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-alabaster-200 shadow-subtle flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-alabaster-100 flex items-center justify-center text-bronze-600 mb-4">
                <Car size={20} weight="bold" />
              </div>
              <h4 className="font-display text-base font-bold text-cypress-950 mb-1">
                From South Mumbai
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct access via Bandra-Worli Sea Link from Worli, Nariman Point, and Colaba. 15–20 minutes.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-cypress-950 mt-4 block">Sea Link exit: 5 mins</span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-alabaster-200 shadow-subtle flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-alabaster-100 flex items-center justify-center text-bronze-600 mb-4">
                <Train size={20} weight="bold" />
              </div>
              <h4 className="font-display text-base font-bold text-cypress-950 mb-1">
                Suburban Rail Access
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bandra Railway Station (Western & Harbour line) is a 10-minute auto-rickshaw or taxi drive.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-cypress-950 mt-4 block">2.2 km distance</span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-alabaster-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <span>Complimentary valet parking and full wheelchair accessibility on premises.</span>
          <span className="font-semibold text-cypress-950">Chambers Suite 402, Horizon Enclave</span>
        </div>
      </div>
    </div>
  );
}
