import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, House } from '@phosphor-icons/react';

export default function NotFound() {
  return (
    <div className="py-24 max-w-3xl mx-auto px-4 text-center">
      <div className="w-16 h-16 rounded-2xl bg-alabaster-100 border border-alabaster-200 text-bronze-600 flex items-center justify-center mx-auto mb-6">
        <House size={32} weight="fill" />
      </div>

      <span className="text-xs uppercase tracking-eyebrow font-bold text-bronze-600 mb-2 block">
        404 — PAGE NOT FOUND
      </span>

      <h1 className="font-display text-4xl sm:text-5xl font-bold text-cypress-950 mb-4">
        Page Not Located
      </h1>

      <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto mb-8">
        The clinical resource or page you requested cannot be found. Please return to the homepage
        or contact our Bandra West chambers directly.
      </p>

      <Link
        to="/"
        className="pill-button bg-bronze-600 hover:bg-[#864c31] text-alabaster-50 text-xs font-semibold px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-sm transition-all"
      >
        <ArrowLeft size={16} weight="bold" />
        <span>Return to Homepage</span>
      </Link>
    </div>
  );
}
