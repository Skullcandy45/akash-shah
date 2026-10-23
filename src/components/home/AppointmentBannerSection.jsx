import React, { useState } from 'react';
import { 
  CalendarCheck, 
  Check, 
  MapPin, 
  Clock, 
  Phone, 
  EnvelopeSimple, 
  ArrowRight,
  ShieldCheck
} from '@phosphor-icons/react';
import { siteConfig } from '../../content/site';

export default function AppointmentBannerSection() {
  const { appointmentForm } = siteConfig;
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Prostate / PSA Evaluation',
    date: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="book-appointment" className="bg-alabaster-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Rounded 3xl Split Banner */}
        <div className="rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-alabaster-200 shadow-xl bg-cypress-900">
          
          {/* Left Half: Dark Content & Interactive Request Form (7 cols on lg) */}
          <div className="lg:col-span-7 p-8 sm:p-10 lg:p-14 text-alabaster-50 flex flex-col justify-between">
            <div>
              {/* Eyebrow */}
              <div className="eyebrow eyebrow-dark text-alabaster-100/90 mb-4">
                <span>{appointmentForm.eyebrow}</span>
              </div>

              {/* Zodiak Heading */}
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-alabaster-50 tracking-tight leading-tight mb-4">
                Schedule Your Visit, Today.
              </h2>

              {/* Intro */}
              <p className="text-sm sm:text-base text-alabaster-100/80 leading-relaxed mb-8">
                {appointmentForm.subtitle}
              </p>

              {/* 4 Checkpoint Rows */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
                {appointmentForm.checkpoints.map((cp, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-alabaster-100/90">
                    <div className="w-4 h-4 rounded-full bg-cypress-800 border border-cypress-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={10} weight="bold" className="text-bronze-400" />
                    </div>
                    <span className="leading-snug">{cp}</span>
                  </div>
                ))}
              </div>

              {/* Interactive Appointment Request Form */}
              {submitted ? (
                <div className="bg-cypress-800/80 border border-cypress-700 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-bronze-600 text-alabaster-50 flex items-center justify-center mx-auto mb-3">
                    <Check size={24} weight="bold" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-alabaster-50 mb-2">
                    Request Received
                  </h3>
                  <p className="text-xs text-alabaster-100/80 max-w-md mx-auto mb-4">
                    Thank you, {formData.name || 'Patient'}. Our clinical coordinator will contact you at{' '}
                    <span className="text-bronze-400 font-semibold">{formData.phone || 'your phone number'}</span>{' '}
                    to finalize your consultation slot in Bandra West.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-bronze-400 underline hover:text-alabaster-50 transition-colors"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="patient-name" className="block text-[11px] font-semibold uppercase tracking-wider text-alabaster-100/90 mb-1">
                        Full Name *
                      </label>
                      <input
                        id="patient-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Kulkarni"
                        className="w-full bg-cypress-950/70 border border-cypress-800 rounded-xl px-4 py-2.5 text-xs text-alabaster-50 placeholder:text-alabaster-100/30 focus:outline-none focus:border-bronze-400 focus:ring-1 focus:ring-bronze-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="patient-phone" className="block text-[11px] font-semibold uppercase tracking-wider text-alabaster-100/90 mb-1">
                        Phone Number *
                      </label>
                      <input
                        id="patient-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98XXX XXXXX"
                        className="w-full bg-cypress-950/70 border border-cypress-800 rounded-xl px-4 py-2.5 text-xs text-alabaster-50 placeholder:text-alabaster-100/30 focus:outline-none focus:border-bronze-400 focus:ring-1 focus:ring-bronze-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="patient-service" className="block text-[11px] font-semibold uppercase tracking-wider text-alabaster-100/90 mb-1">
                        Consultation Type
                      </label>
                      <select
                        id="patient-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-cypress-950/70 border border-cypress-800 rounded-xl px-4 py-2.5 text-xs text-alabaster-50 focus:outline-none focus:border-bronze-400 focus:ring-1 focus:ring-bronze-400 transition-colors"
                      >
                        <option value="Prostate / PSA Evaluation" className="bg-cypress-950">Prostate / PSA Evaluation</option>
                        <option value="Robotic Prostatectomy Second Opinion" className="bg-cypress-950">Robotic Prostatectomy Second Opinion</option>
                        <option value="Kidney Mass / Partial Nephrectomy" className="bg-cypress-950">Kidney Mass / Partial Nephrectomy</option>
                        <option value="Bladder Cancer & Endoscopy" className="bg-cypress-950">Bladder Cancer & Endoscopy</option>
                        <option value="MRI-Fusion Targeted Biopsy" className="bg-cypress-950">MRI-Fusion Targeted Biopsy</option>
                        <option value="General Uro-Oncology Consultation" className="bg-cypress-950">General Uro-Oncology Consultation</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="patient-date" className="block text-[11px] font-semibold uppercase tracking-wider text-alabaster-100/90 mb-1">
                        Preferred Date
                      </label>
                      <input
                        id="patient-date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-cypress-950/70 border border-cypress-800 rounded-xl px-4 py-2.5 text-xs text-alabaster-50 placeholder:text-alabaster-100/30 focus:outline-none focus:border-bronze-400 focus:ring-1 focus:ring-bronze-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Submit Button (White Pill CTA on Cypress-900) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto pill-button bg-alabaster-50 hover:bg-alabaster-100 text-cypress-950 text-xs font-bold px-8 py-3.5 rounded-full shadow-lg flex items-center justify-center gap-2 group transition-all duration-200"
                    >
                      <CalendarCheck size={16} weight="bold" className="text-bronze-600" />
                      <span>Submit Appointment Request</span>
                      <ArrowRight size={14} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Direct Phone Assistance Bar at Bottom of Left Half */}
            <div className="mt-8 pt-6 border-t border-cypress-800 flex flex-wrap items-center justify-between gap-4 text-xs text-alabaster-100/70">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-bronze-400" />
                Confidential Medical Records Privacy
              </span>
              <a href={`tel:${siteConfig.contact.phoneRaw}`} className="font-semibold text-bronze-400 hover:text-alabaster-50 transition-colors">
                Urgent line: {siteConfig.contact.phone}
              </a>
            </div>
          </div>

          {/* Right Half: High-Craft Editorial Photograph of Bandra West Chambers Lounge (5 cols on lg) */}
          <div className="lg:col-span-5 relative min-h-[420px] lg:min-h-full bg-cypress-950 overflow-hidden flex flex-col justify-end group">
            {/* Background Editorial Image */}
            <img
              src="/assets/images/chambers_appointment_interior.jpg"
              alt="Private consultation chambers executive suite of Dr. Akash Shah in Bandra West, Mumbai"
              className="absolute inset-0 w-full h-full object-cover object-center brightness-95 group-hover:scale-105 transition-transform duration-700 ease-emil"
              loading="lazy"
            />

            {/* Subtle Gradient Scrim blending with Cypress-900 */}
            <div className="absolute inset-0 bg-gradient-to-t from-cypress-950/90 via-cypress-950/30 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-cypress-950/10 lg:to-cypress-900/60 pointer-events-none" />

            {/* Floating Quiet Luxury Location Badge */}
            <div className="relative z-10 p-5 sm:p-6 m-4 sm:m-6 rounded-2xl bg-cypress-950/90 backdrop-blur-md border border-cypress-800/80 text-alabaster-50 shadow-2xl">
              <span className="text-[10px] font-bold uppercase tracking-eyebrow text-bronze-400 block mb-1">
                PRIVATE CHAMBERS · BANDRA WEST
              </span>
              <h3 className="font-sans text-sm sm:text-base font-bold text-alabaster-50 mb-1">
                Suite 402, Horizon Enclave
              </h3>
              <p className="text-xs text-alabaster-100/80 leading-relaxed mb-3">
                Hill Road, Bandra West, Mumbai 400050. Direct access from Sea Link & WEH.
              </p>
              <div className="flex items-center gap-3 text-[11px] text-bronze-400 font-medium pt-2 border-t border-cypress-800">
                <span className="flex items-center gap-1.5">
                  <Clock size={13} weight="bold" />
                  Mon–Sat 10:00–19:00
                </span>
                <span>·</span>
                <span>Valet Parking</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
