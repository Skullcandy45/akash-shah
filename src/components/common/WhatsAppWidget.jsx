import React, { useState } from 'react';
import { WhatsappLogo, X, ChatCircleDots, CaretRight, ShieldCheck, Clock } from '@phosphor-icons/react';
import { siteConfig } from '../../content/site';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const defaultMessage = encodeURIComponent(
    "Hello Dr. Akash Shah's clinical team, I would like to inquire about a robotic urology consultation."
  );

  const quickOptions = [
    {
      label: 'Book Robotic Consultation',
      text: "Hello, I would like to schedule an in-person consultation with Dr. Akash Shah for a urology evaluation.",
    },
    {
      label: 'Second Opinion on Scan / Biopsy',
      text: "Hello, I have an MRI / biopsy report and would like an expert second opinion from Dr. Akash Shah.",
    },
    {
      label: 'Robotic Surgery & Cashless TPA',
      text: "Hello, I would like to understand robotic surgery scheduling and cashless insurance coverage at Lilavati/Hinduja.",
    },
  ];

  const getWhatsAppUrl = (msg) => {
    const text = encodeURIComponent(msg);
    return `https://wa.me/919820000000?text=${text}`;
  };

  return (
    <aside aria-label="WhatsApp Clinical Concierge" className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Concierge Popover */}
      {isOpen && (
        <div 
          className="mb-3 w-[320px] sm:w-[360px] bg-cypress-950 text-alabaster-50 rounded-3xl p-5 border border-cypress-800 shadow-[0_20px_50px_rgba(0,0,0,0.55)] backdrop-blur-2xl animate-in fade-in slide-in-from-bottom-4 duration-200"
          role="dialog"
          aria-modal="false"
          aria-label="Clinical Coordinator WhatsApp Chat"
        >
          {/* Header */}
          <div className="flex items-start justify-between pb-3.5 border-b border-cypress-800/80 mb-3.5">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366]">
                  <WhatsappLogo size={24} weight="fill" />
                </div>
                {/* Live Online Ping */}
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-cypress-950 animate-pulse" />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-alabaster-50 tracking-tight leading-tight">
                  Clinical Coordinator
                </h4>
                <p className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                  <span>●</span> Online · Bandra Chambers
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-alabaster-200/60 hover:text-alabaster-50 hover:bg-cypress-900 transition-colors"
              aria-label="Close WhatsApp chat"
            >
              <X size={18} weight="bold" />
            </button>
          </div>

          {/* Micro Information Pill */}
          <div className="bg-cypress-900/80 border border-cypress-800/80 rounded-2xl p-3 mb-3 text-xs leading-relaxed text-alabaster-100/90 flex items-start gap-2.5">
            <Clock size={16} className="text-bronze-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-alabaster-50 block mb-0.5">Rapid Triage & Scan Intake</span>
              <span className="text-[11px] text-alabaster-200/70">
                Send your PSA reports or mpMRI scans for priority review by Dr. Akash Shah's team. Response typically under 15 mins.
              </span>
            </div>
          </div>

          {/* Quick Action Options */}
          <div className="space-y-1.5 mb-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-bronze-400 block px-1">
              Select inquiry type:
            </span>
            {quickOptions.map((opt, i) => (
              <a
                key={i}
                href={getWhatsAppUrl(opt.text)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-cypress-900/50 hover:bg-cypress-800/80 border border-cypress-800/60 text-xs text-alabaster-100 hover:text-alabaster-50 transition-all group"
              >
                <span className="font-medium text-[11.5px]">{opt.label}</span>
                <CaretRight size={14} weight="bold" className="text-cypress-600 group-hover:text-bronze-400 transition-colors shrink-0" />
              </a>
            ))}
          </div>

          {/* Direct WhatsApp CTA */}
          <a
            href={getWhatsAppUrl("Hello Dr. Akash Shah's team, I would like to inquire about a consultation.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-cypress-950 text-xs font-bold py-3 px-4 rounded-full shadow-[0_4px_16px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.5)] active:scale-[0.98] transition-all duration-200"
          >
            <WhatsappLogo size={18} weight="fill" />
            <span>Open WhatsApp Chat Now</span>
          </a>

          <div className="flex items-center justify-center gap-2 mt-3 text-[10px] text-alabaster-200/50">
            <ShieldCheck size={12} weight="fill" />
            <span>Encrypted HIPAA/DISHA-Compliant Medical Triage</span>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <div className="flex items-center gap-2.5">
        {/* Subtle prompt tooltip badge (desktop only) */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="hidden md:flex items-center gap-2 bg-cypress-950/95 text-alabaster-50 text-xs font-semibold px-3.5 py-2 rounded-full border border-cypress-800 shadow-xl backdrop-blur-md hover:border-bronze-400 transition-all hover:scale-105 group"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Need quick answers? Chat on WhatsApp</span>
          </button>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close WhatsApp Assistance" : "Open WhatsApp Clinical Assistance"}
          aria-expanded={isOpen}
          className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.65)] hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        >
          {/* Subtle radiating ping ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
          
          {isOpen ? (
            <X size={26} weight="bold" className="relative z-10" />
          ) : (
            <WhatsappLogo size={30} weight="fill" className="relative z-10" />
          )}
        </button>
      </div>
    </aside>
  );
}
