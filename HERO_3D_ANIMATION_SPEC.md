# 3D Animated Hero Specification: Dr. Akash Shah Practice Website

> **Live Production URL:** [https://akash-shah-eight.vercel.app/](https://akash-shah-eight.vercel.app/)  
> **Repository Base:** `c:\Users\skull\OneDrive\Desktop\akash shah`  
> **Target Goal:** Implementation specification for a high-performance 3D animated hero section blending with the medical/uro-oncology brand aesthetic.

---

## 1. Technical Stack

| Category | Specification | Notes |
| :--- | :--- | :--- |
| **Framework & Version** | `Vite 8.3.0` + `React 19.2.8` | Single Page Application (SPA), Client-Side Rendered |
| **Language** | JavaScript (`.jsx` / `.js`) | ES Modules (`"type": "module"` in `package.json`) |
| **Routing** | `react-router-dom 7.18.4` | Client-side `BrowserRouter` |
| **Styling** | `Tailwind CSS 3.4.19` + Custom CSS Variables | PostCSS `8.5.30` + Autoprefixer `10.6.1` |
| **Package Manager** | `npm` (v11.6.2) | `package-lock.json` present |
| **Runtime Environment** | Node.js `v24.13.0` | Windows OS |

---

## 2. Design Tokens & Styling Architecture

### Complete File: `src/styles/tokens.css`
```css
/* Font Imports: Fontshare Zodiak + Google Fonts / Fontshare Plus Jakarta Sans */
@import url('https://api.fontshare.com/v2/css?f[]=zodiak@400,401,500,501,600,601,700,701&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap');

:root {
  /* Color Tokens */
  --color-cypress-950: #071714;
  --color-cypress-900: #0D2622;
  --color-cypress-800: #163832;
  --color-alabaster-50: #FCFBF7;
  --color-alabaster-100: #F4F1EA;
  --color-alabaster-200: #E5DFD3;
  --color-bronze-600: #9A5B3E;
  --color-bronze-400: #D49573;
  --color-slate-600: #4A5553;

  /* Typography */
  --font-display: 'Zodiak', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;

  /* Motion - Emil Kowalski & Apple guidelines */
  --ease-emil: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --duration-hover: 220ms;
  --duration-entrance: 450ms;
}

/* Reduced Motion Safety */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Subtle Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: var(--color-alabaster-50);
}
::-webkit-scrollbar-thumb {
  background: var(--color-alabaster-200);
  border-radius: 9999px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--color-bronze-600);
}
```

### Complete File: `src/index.css`
```css
@import './styles/tokens.css';

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    font-family: var(--font-sans);
    color: var(--color-cypress-950);
    background-color: var(--color-alabaster-50);
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2 {
    font-family: var(--font-display);
    letter-spacing: -0.02em;
    line-height: 1.15;
  }

  h3 {
    letter-spacing: -0.015em;
    line-height: 1.25;
  }

  h4, h5, h6 {
    font-family: var(--font-sans);
    letter-spacing: -0.01em;
    line-height: 1.35;
  }

  .font-display {
    font-family: var(--font-display);
  }

  .font-sans {
    font-family: var(--font-sans);
  }
}

@layer components {
  /* Eyebrow Label with small bronze dot */
  .eyebrow {
    @apply inline-flex items-center gap-2 text-xs font-semibold tracking-eyebrow uppercase;
  }

  .eyebrow::before {
    content: '';
    @apply inline-block w-1.5 h-1.5 rounded-full bg-bronze-600 shrink-0;
  }

  .eyebrow-dark::before {
    @apply bg-bronze-400;
  }

  /* Interactive Pill Styles */
  .pill-button {
    @apply inline-flex items-center justify-center font-medium transition duration-200 ease-emil focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2;
  }

  .pill-button-primary {
    @apply pill-button bg-bronze-600 text-alabaster-50 hover:bg-[#864c31] active:scale-[0.98] shadow-sm;
  }

  .pill-button-secondary {
    @apply pill-button bg-transparent border border-alabaster-200 text-cypress-950 hover:border-cypress-950 hover:bg-alabaster-100 active:scale-[0.98];
  }

  .pill-button-glass {
    @apply pill-button bg-white/10 backdrop-blur-md border border-white/20 text-alabaster-50 hover:bg-white/20 active:scale-[0.98];
  }

  .pill-button-dark {
    @apply pill-button bg-cypress-900 text-alabaster-50 hover:bg-cypress-800 active:scale-[0.98];
  }

  /* Card Surfaces */
  .card-alabaster {
    @apply bg-alabaster-50 border border-alabaster-200 rounded-2xl transition duration-200 ease-emil;
  }

  .card-soft {
    @apply bg-alabaster-100 border border-alabaster-200 rounded-2xl transition duration-200 ease-emil;
  }

  .card-cypress {
    @apply bg-cypress-900 text-alabaster-50 border border-cypress-800 rounded-2xl transition duration-200 ease-emil;
  }
}
```

### Complete File: `tailwind.config.js`
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cypress: {
          800: '#163832',
          900: '#0D2622',
          950: '#071714',
        },
        alabaster: {
          50: '#FCFBF7',
          100: '#F4F1EA',
          200: '#E5DFD3',
        },
        bronze: {
          400: '#D49573',
          600: '#9A5B3E',
        },
        slate: {
          600: '#4A5553',
        },
      },
      fontFamily: {
        display: ['Zodiak', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.02em',
        eyebrow: '0.14em',
      },
      lineHeight: {
        tightDisplay: '1.08',
      },
      transitionTimingFunction: {
        emil: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(7, 23, 20, 0.04), 0 1px 2px -1px rgba(7, 23, 20, 0.04)',
        'card': '0 4px 20px -2px rgba(7, 23, 20, 0.06), 0 2px 6px -1px rgba(7, 23, 20, 0.03)',
        'card-dark': '0 10px 30px -5px rgba(0, 0, 0, 0.3)',
        'elevated': '0 20px 40px -15px rgba(7, 23, 20, 0.12)',
      },
      animation: {
        'ticker': 'ticker 35s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
```

### Complete Color Palette (Hex Values & Roles)
- `#071714` (`cypress-950`): Deep obsidian cypress black. Primary text color, hero headings, highest-contrast dark surfaces.
- `#0D2622` (`cypress-900`): Deep cypress forest. Dark cards, secondary badges.
- `#163832` (`cypress-800`): Dark evergreen cypress. Card borders and monogram accents.
- `#FCFBF7` (`alabaster-50`): Soft warm cream / alabaster white. Main page canvas background.
- `#F4F1EA` (`alabaster-100`): Pale warm stone. Micro-telemetry bar background, pill backgrounds.
- `#E5DFD3` (`alabaster-200`): Pale bone/sandstone. Section borders, hairline dividers, card borders.
- `#9A5B3E` (`bronze-600`): Clinical terracotta bronze. Primary CTA buttons, eyebrow accent dots, brand indicators.
- `#864c31`: Deepened bronze (hover state on primary CTA buttons).
- `#D49573` (`bronze-400`): Soft copper bronze. Monogram crosshair lines, eyebrow badges on dark cards.
- `#4A5553` (`slate-600`): Neutral clinical gray. Subheadings, body copy, descriptions.
- `#334155` (`slate-700`): Eyebrow text & top-bar telemetry copy.
- `#25D366` / `#20ba59`: Official WhatsApp brand green (primary & hover).
- `#059669` / `#047857`: Emerald green (active chambers pulse & cashless TPA badge).
- `#FFFBEB` / `#FDE68A` / `#F59E0B` / `#78350F`: Amber 50/200/500/900 (verified review star badges).
- `#FFFFFF`: Pure white (floating card surfaces, button backgrounds).

### Font Families & Weights in Use
1. **Display Font:** `'Zodiak', Georgia, serif`
   - Provider: Fontshare CDN
   - Weights in use: `400` (Regular), `600` (SemiBold), `700` (Bold)
   - Usage: All `h1` and `h2` headings, doctor names, section titles, metrics counters.
2. **Body & UI Font:** `'Plus Jakarta Sans', system-ui, -apple-system, sans-serif`
   - Provider: Google Fonts
   - Weights in use: `300` (Light), `400` (Regular), `500` (Medium), `600` (SemiBold), `700` (Bold), `800` (ExtraBold)
   - Usage: Eyebrows, buttons, body paragraphs, badges, telemetry stats, operational dock cards.

---

## 3. Current Hero Component

### Component File Name
`src/components/home/HeroSection.jsx`

### Exact Copy & Content
- **Eyebrow:** `BANDRA WEST · MUMBAI · SURGICAL ONCOLOGY` (with terracotta `#9A5B3E` dot)
- **Exact Headline (`h1`):** `Clarity & Precision You Can Feel Confident In.`
- **Exact Subheading:**  
  `"Fellowship-trained robotic console surgery and organ-preserving oncology. Providing compassionate, tertiary-grade urological cancer care with an uncompromised commitment to continence and quality of life."`
- **CTAs & Target Links:**
  1. *Primary Action:* `"Book Appointment"` -> `href="#book-appointment"`
  2. *WhatsApp Action:* `"WhatsApp Us"` -> `href="https://wa.me/919820000000?text=Hello%20Dr.%20Akash%20Shah%27s%20clinical%20team%2C%20I%20would%20like%20to%20inquire%20about%20a%20consultation."` (`target="_blank"`)
  3. *Secondary Action:* `"Explore Procedures"` -> `href="#services-matrix"`
  4. *Right Showcase Card Title:* `"Multidisciplinary Care"`
  5. *Operational Card 1 (Hours):* Emergency call link `tel:+919820000000`
  6. *Operational Card 2 (Helpline):* Call link `tel:+919820000000`
  7. *Operational Card 3 (Directions):* Google Maps link `https://maps.google.com/?q=Bandra+West+Mumbai`
  8. *Operational Card 4 (Lead Surgeon):* `"Book appointment"` -> `href="#book-appointment"`

### Complete Code: `src/components/home/HeroSection.jsx`
```jsx
import React from 'react';
import { 
  CalendarCheck, 
  ArrowRight, 
  Clock, 
  PhoneCall, 
  MapPin, 
  ShieldCheck, 
  UserCircle,
  WhatsappLogo,
  Star
} from '@phosphor-icons/react';
import { siteConfig } from '../../content/site';
import { DoctorPortrait } from '../common/Visuals';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-white via-alabaster-50/70 to-alabaster-100/90 text-cypress-950 pt-10 sm:pt-14 pb-20 md:pb-28 lg:pb-32 overflow-hidden border-b border-alabaster-200/80">
      {/* Soft Ambient Healthcare Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 right-10 w-[500px] h-[500px] rounded-full bg-bronze-400/8 blur-[120px]" />
        <div className="absolute -top-20 left-10 w-[400px] h-[400px] rounded-full bg-emerald-600/5 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* UPPER HERO SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-2 md:pt-6">
          
          {/* Left Column: Eyebrow, Zodiak Headline, Subtitle, CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Clinical Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-alabaster-100/90 border border-alabaster-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-6 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-bronze-600" />
              <span>BANDRA WEST · MUMBAI · SURGICAL ONCOLOGY</span>
            </div>

            {/* Zodiak Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-cypress-950 leading-[1.12] mb-6">
              Clarity & Precision You Can Feel Confident In.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mb-8">
              Fellowship-trained robotic console surgery and organ-preserving oncology. Providing
              compassionate, tertiary-grade urological cancer care with an uncompromised commitment to
              continence and quality of life.
            </p>

            {/* Triple Action CTAs (Healthcare Focused) */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#book-appointment"
                className="pill-button bg-gradient-to-r from-bronze-600 via-[#a35e40] to-bronze-600 text-alabaster-50 font-bold text-sm px-6 sm:px-7 py-3.5 rounded-full shadow-[0_4px_16px_rgba(154,91,62,0.3)] hover:shadow-[0_6px_22px_rgba(154,91,62,0.45)] hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto flex items-center justify-center gap-2 group transition-all"
              >
                <CalendarCheck size={18} weight="bold" />
                <span>Book Appointment</span>
                <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://wa.me/919820000000?text=Hello%20Dr.%20Akash%20Shah%27s%20clinical%20team%2C%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="pill-button bg-[#25D366] hover:bg-[#20ba59] text-cypress-950 font-bold text-sm px-5 sm:px-6 py-3.5 rounded-full shadow-[0_4px_16px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.45)] w-full sm:w-auto flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <WhatsappLogo size={18} weight="fill" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href="#services-matrix"
                className="pill-button bg-white hover:bg-alabaster-100 text-cypress-950 border border-alabaster-200 font-semibold text-sm px-5 sm:px-6 py-3.5 rounded-full shadow-2xs w-full sm:w-auto flex items-center justify-center gap-2 transition-all"
              >
                <span>Explore Procedures</span>
              </a>
            </div>

            {/* Trust badge strip under CTAs */}
            <div className="mt-8 pt-6 border-t border-alabaster-200/90 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-600 font-medium">
              <span className="inline-flex items-center gap-1.5 font-semibold text-cypress-950">
                <ShieldCheck size={16} className="text-bronze-600" />
                Evidence-Based Tumor Board Protocol
              </span>
              <span className="text-alabaster-300 hidden sm:inline">|</span>
              <span>Lilavati & Hinduja Operating Suites</span>
              <span className="text-alabaster-300 hidden md:inline">|</span>
              <span className="text-emerald-700 font-semibold hidden md:inline">100% Cashless TPA Supported</span>
            </div>
          </div>

          {/* Right Floating Card: Pristine Clinical Showcase (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="bg-white text-cypress-950 rounded-3xl p-6 sm:p-7 shadow-elevated max-w-sm w-full border border-alabaster-200/90 relative transform hover:-translate-y-1 transition duration-300">
              
              {/* Top Trust & Rating Badge */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-alabaster-200/80">
                <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded-full">
                  <div className="flex items-center text-amber-500">
                    <Star size={13} weight="fill" />
                    <Star size={13} weight="fill" />
                    <Star size={13} weight="fill" />
                    <Star size={13} weight="fill" />
                    <Star size={13} weight="fill" />
                  </div>
                  <span className="text-xs font-bold text-amber-900">4.9 / 5</span>
                </div>
                <span className="text-[11px] font-semibold text-slate-600">850+ Verified Reviews</span>
              </div>

              {/* Overlapping Specialist Monogram Circles */}
              <div className="flex items-center -space-x-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-cypress-950 text-alabaster-50 border-2 border-white flex items-center justify-center font-display font-bold text-xs shadow-sm" title="Dr. Akash Shah - Uro-Oncology">
                  AS
                </div>
                <div className="w-11 h-11 rounded-full bg-bronze-600 text-alabaster-50 border-2 border-white flex items-center justify-center font-display font-bold text-xs shadow-sm" title="Medical Oncology Lead">
                  MO
                </div>
                <div className="w-11 h-11 rounded-full bg-cypress-800 text-alabaster-50 border-2 border-white flex items-center justify-center font-display font-bold text-xs shadow-sm" title="Onco-Pathology Lead">
                  HP
                </div>
                <span className="pl-4 text-[11px] font-semibold text-slate-600 tracking-wider uppercase">
                  Tumor Board Team
                </span>
              </div>

              {/* Bold Title */}
              <h3 className="font-display text-xl sm:text-2xl font-bold text-cypress-950 tracking-tight leading-tight mb-1.5">
                Multidisciplinary Care
              </h3>

              {/* Caption */}
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Fellowship-Trained Robotic Console Surgery · 1,200+ Cases · Evidence-Based Protocols
              </p>

              {/* Tertiary Referral Highlight */}
              <div className="bg-alabaster-50 rounded-2xl p-3.5 border border-alabaster-200/80 flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-bronze-600 shrink-0 mt-1.5" />
                <p className="text-xs text-cypress-950 font-medium leading-relaxed">
                  Zero delays for acute staging or second-opinion reviews on prostate & kidney biopsies.
                </p>
              </div>

              {/* Hospital Affiliations Badge Strip */}
              <div className="mt-4 pt-3.5 border-t border-alabaster-200/80 flex items-center justify-between text-[11px] text-slate-600">
                <span className="font-semibold text-cypress-950">Lilavati Hospital</span>
                <span className="text-alabaster-300">·</span>
                <span className="font-semibold text-cypress-950">Hinduja Healthcare</span>
              </div>
            </div>
          </div>

        </div>

        {/* LOWER HERO 4-CARD OPERATIONAL DOCK */}
        <div className="mt-14 md:mt-20 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            
            {/* Card 1: Working Hours */}
            <div className="bg-white text-cypress-950 p-6 rounded-2xl border border-alabaster-200 shadow-card flex flex-col justify-between hover:border-bronze-600 transition-colors duration-200">
              <div>
                <div className="w-10 h-10 rounded-full bg-alabaster-100 border border-alabaster-200 flex items-center justify-center text-bronze-600 mb-4">
                  <Clock size={20} weight="fill" />
                </div>
                <h4 className="font-sans text-base font-bold tracking-tight text-cypress-950 mb-1">
                  Working Hours
                </h4>
                <p className="font-semibold text-sm text-cypress-900 mb-2">
                  Mon – Sat: 10:00 – 19:00
                </p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Urgent oncology triage slots reserved daily. Post-op patient support on-call 24×7.
                </p>
              </div>
              <div className="pt-3 border-t border-alabaster-200 text-xs">
                <span className="text-slate-600 block">Emergency triage line:</span>
                <a href={`tel:${siteConfig.contact.phoneRaw}`} className="font-bold text-bronze-600 hover:underline">
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>

            {/* Card 2: Contact Us */}
            <div className="bg-gradient-to-br from-bronze-600 to-[#864c31] text-alabaster-50 p-6 rounded-2xl shadow-card flex flex-col justify-between hover:brightness-105 transition-all duration-200">
              <div>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-alabaster-50 mb-4">
                  <PhoneCall size={20} weight="fill" />
                </div>
                <h4 className="font-sans text-base font-bold tracking-tight text-alabaster-50 mb-1">
                  Contact Us
                </h4>
                <p className="text-xs text-alabaster-100/90 leading-relaxed mb-4">
                  Quick assistance for appointments & second opinions. Coordinator responds within 4 hours.
                </p>
              </div>
              <div className="pt-3 border-t border-white/20">
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="font-sans text-xl sm:text-2xl font-bold text-alabaster-50 block hover:underline tracking-tight"
                >
                  {siteConfig.contact.phone}
                </a>
                <span className="text-[11px] text-alabaster-100/80 block mt-1">
                  Direct Chambers Helpline
                </span>
              </div>
            </div>

            {/* Card 3: Directions */}
            <div className="bg-white text-cypress-950 p-6 rounded-2xl border border-alabaster-200 shadow-card flex flex-col justify-between hover:border-bronze-600 transition-colors duration-200">
              <div>
                <div className="w-10 h-10 rounded-full bg-alabaster-100 border border-alabaster-200 flex items-center justify-center text-bronze-600 mb-4">
                  <MapPin size={20} weight="fill" />
                </div>
                <h4 className="font-sans text-base font-bold tracking-tight text-cypress-950 mb-1">
                  Directions
                </h4>
                <p className="font-semibold text-xs text-cypress-900 mb-1">
                  Bandra West Chambers
                </p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Suite 402, Horizon Medical Enclave, Hill Road, Bandra West, Mumbai 400050
                </p>
              </div>
              <div className="pt-3 border-t border-alabaster-200">
                <a
                  href={siteConfig.contact.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-bronze-600 hover:text-cypress-950 transition-colors"
                >
                  <span>Show on map</span>
                  <ArrowRight size={14} weight="bold" />
                </a>
              </div>
            </div>

            {/* Card 4: Lead Surgeon Quick-Book Card */}
            <div className="bg-cypress-950 border border-alabaster-200/80 rounded-2xl p-0 overflow-hidden relative flex flex-col justify-end min-h-[250px] shadow-card group">
              {/* AI Editorial Portrait of Dr. Akash Shah */}
              <div className="absolute inset-0 w-full h-full bg-cypress-900">
                <img
                  src={siteConfig.operationalDock[3].image}
                  alt="Dr. Akash Shah — Lead Uro-Oncologist & Robotic Surgeon"
                  className="w-full h-full object-cover object-top brightness-95 group-hover:scale-105 transition-transform duration-500 ease-emil"
                  loading="eager"
                />
              </div>

              {/* Gradient Scrim for readable text & button overlay */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cypress-950 via-cypress-950/70 to-transparent pointer-events-none" />

              {/* Surgeon Info & Quick-Book Button Pinned to Bottom */}
              <div className="relative z-10 p-5">
                <div className="mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-eyebrow text-bronze-400 block">
                    LEAD ROBOTIC SURGEON
                  </span>
                  <span className="font-display text-lg font-bold text-alabaster-50 tracking-tight block">
                    {siteConfig.doctor.name}
                  </span>
                </div>
                <a
                  href="#book-appointment"
                  className="w-full flex items-center justify-center gap-2 bg-bronze-600 hover:bg-[#864c31] text-alabaster-50 text-xs font-bold py-3 px-4 rounded-full shadow-md active:scale-[0.98] transition-all duration-200"
                >
                  <CalendarCheck size={16} weight="bold" />
                  <span>Book appointment</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
```

---

## 4. Navbar Architecture & Code

### Header Details
- **File Name:** `src/components/layout/Header.jsx`
- **Total Structure & Height:** 2-tier architectural header:
  - **Tier 1 (Micro-telemetry Bar):** `py-2` (Height: ~33px). Background: `bg-alabaster-100/90` (`#F4F1EA`) with border `border-b border-alabaster-200/80`.
  - **Tier 2 (Sticky Main Navigation):** 
    - At top (unscrolled): `py-3.5` (Height: ~74px). Total combined height: **~107px**.
    - When scrolled (`window.scrollY > 20`): `py-3` (Height: ~70px). Total combined height: **~103px**.
- **Fixed & Transparency Properties:**
  - Root container: `w-full relative z-50`
  - Sticky tier: `sticky top-0 transition-all duration-300`
  - Resting background: `bg-white/90 backdrop-blur-xl border-b border-alabaster-200/70`
  - Scrolled background: `bg-white/95 backdrop-blur-2xl border-b border-alabaster-200/90 shadow-[0_4px_20px_rgba(7,23,20,0.06)]`

### Complete Code: `src/components/layout/Header.jsx`
```jsx
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  EnvelopeSimple, 
  List, 
  X, 
  MapPin, 
  CalendarCheck, 
  CaretRight, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  WhatsappLogo 
} from '@phosphor-icons/react';
import { siteConfig } from '../../content/site';

function MonogramCrest() {
  return (
    <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cypress-900 via-cypress-950 to-cypress-950 border border-bronze-500/35 flex items-center justify-center shadow-md group-hover:border-bronze-400/70 transition-all duration-300 shrink-0">
      {/* Subtle radial inner glow */}
      <div className="absolute inset-0 rounded-xl bg-bronze-500/10 blur-sm pointer-events-none" />
      
      {/* Precision surgical crosshair geometry */}
      <svg className="absolute inset-0 w-full h-full p-1 opacity-30 group-hover:opacity-55 transition-opacity" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="17" fill="none" stroke="#D49573" strokeWidth="0.75" strokeDasharray="2 2" />
        <line x1="20" y1="2" x2="20" y2="5" stroke="#D49573" strokeWidth="1" />
        <line x1="20" y1="35" x2="20" y2="38" stroke="#D49573" strokeWidth="1" />
        <line x1="2" y1="20" x2="5" y2="20" stroke="#D49573" strokeWidth="1" />
        <line x1="35" y1="20" x2="38" y2="20" stroke="#D49573" strokeWidth="1" />
      </svg>
      
      {/* Monogram Serif AS */}
      <span className="relative font-display font-bold text-sm tracking-tight bg-gradient-to-br from-alabaster-50 via-alabaster-100 to-bronze-300 bg-clip-text text-transparent">
        AS
      </span>
    </div>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Care Team', path: '/doctors' },
    { label: 'Patient Journey', path: '/patient-journey' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="w-full relative z-50">
      {/* Top Micro-Telemetry Bar */}
      <div className="bg-alabaster-100/90 text-slate-700 text-[11px] py-2 px-4 sm:px-6 lg:px-8 border-b border-alabaster-200/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Left info badge */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="inline-flex items-center gap-1.5 font-semibold text-cypress-950">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              Chambers Open · Bandra West
            </span>
            <span className="text-alabaster-300 hidden sm:inline">|</span>
            <span className="text-slate-600 hidden sm:inline flex items-center gap-1 font-medium">
              <Clock size={12} className="text-bronze-600" />
              Mon–Sat 10:00–19:00
            </span>
            <span className="text-alabaster-300 hidden md:inline">|</span>
            <span className="text-bronze-600 font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-white border border-alabaster-200 text-[10px] hidden md:inline shadow-2xs">
              Lilavati & Hinduja Operating Theaters
            </span>
          </div>

          {/* Right quick actions */}
          <div className="flex items-center gap-3 sm:gap-4 text-slate-700 text-[11px]">
            <a
              href="https://wa.me/919820000000?text=Hello%20Dr.%20Akash%20Shah%27s%20clinical%20team%2C%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 transition-colors font-semibold"
            >
              <WhatsappLogo size={13} weight="fill" />
              <span>WhatsApp Triage</span>
            </a>
            <span className="text-alabaster-300">|</span>
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="inline-flex items-center gap-1.5 hover:text-bronze-600 transition-colors font-semibold text-cypress-950"
            >
              <Phone size={12} weight="fill" className="text-bronze-600" />
              <span>Triage: {siteConfig.contact.phone}</span>
            </a>
            <span className="text-alabaster-300 hidden md:inline">|</span>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="hidden md:inline-flex items-center gap-1.5 hover:text-bronze-600 text-slate-600 transition-colors font-medium"
            >
              <EnvelopeSimple size={12} weight="fill" className="text-bronze-600" />
              <span>{siteConfig.contact.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <div 
        className={`sticky top-0 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-2xl border-b border-alabaster-200/90 shadow-[0_4px_20px_rgba(7,23,20,0.06)] py-3' 
            : 'bg-white/90 backdrop-blur-xl border-b border-alabaster-200/70 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Left: Bespoke Monogram Crest & Doctor Typography */}
          <Link to="/" className="flex items-center gap-3.5 group shrink-0" aria-label="Dr. Akash Shah — Home">
            <MonogramCrest />
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display text-lg sm:text-xl font-bold text-cypress-950 tracking-tight leading-none group-hover:text-bronze-600 transition-colors duration-200">
                  {siteConfig.doctor.name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-bronze-600 hidden sm:inline-block" />
              </div>
              <span className="text-[10px] font-semibold text-slate-500 tracking-[0.14em] uppercase mt-1 leading-none">
                {siteConfig.doctor.subtitle}
              </span>
            </div>
          </Link>

          {/* Center: Floating Architectural Nav Pill (Desktop) */}
          <nav 
            className="hidden lg:flex items-center bg-alabaster-100/80 border border-alabaster-200/90 rounded-full p-1 shadow-inner"
            aria-label="Primary Navigation"
          >
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-[12px] font-medium tracking-wide px-3.5 py-1.5 rounded-full transition-all duration-200 ease-emil relative ${
                      isActive
                        ? 'bg-white text-cypress-950 font-bold shadow-sm border border-alabaster-200/90'
                        : 'text-slate-600 hover:text-cypress-950 hover:bg-white/60'
                    }`
                  }
                >
                  <span className="flex items-center gap-1.5">
                    {item.label}
                    {isActive && (
                      <span className="w-1 h-1 rounded-full bg-bronze-600" />
                    )}
                  </span>
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action: Dual Triage & Luxury Appointment CTA */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Urgent Phone Triage Quick Pill */}
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="hidden xl:inline-flex items-center gap-2 text-[11px] font-semibold text-cypress-950 hover:text-bronze-600 bg-alabaster-100 hover:bg-alabaster-200/80 border border-alabaster-200 px-3.5 py-2 rounded-full transition-all duration-200 shadow-2xs"
              title="Urgent Oncology Triage Line"
            >
              <Phone size={13} weight="fill" className="text-bronze-600" />
              <span>{siteConfig.contact.phone}</span>
            </a>

            {/* Primary Appointment Button */}
            <a
              href="#book-appointment"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-bronze-600 via-[#ab6645] to-bronze-600 text-alabaster-50 text-xs font-bold px-5 py-2.5 rounded-full shadow-[0_4px_16px_rgba(154,91,62,0.3)] hover:shadow-[0_6px_22px_rgba(154,91,62,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group focus-visible:outline-2 focus-visible:outline-bronze-600"
            >
              <CalendarCheck size={15} weight="bold" />
              <span>Book Appointment</span>
              <ArrowRight size={13} weight="bold" className="group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-cypress-950 hover:bg-alabaster-100 border border-alabaster-200 transition-colors focus:outline-none focus:ring-2 focus:ring-bronze-600"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-alabaster-200 px-6 py-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between text-sm font-semibold py-3 px-4 rounded-xl transition-colors ${
                      isActive
                        ? 'bg-alabaster-100 text-cypress-950 border border-alabaster-200'
                        : 'text-slate-700 hover:bg-alabaster-50 hover:text-cypress-950'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-bronze-600" />}
                      {item.label}
                    </span>
                    <CaretRight size={16} weight="bold" className={isActive ? 'text-bronze-600' : 'text-slate-400'} />
                  </Link>
                );
              })}
            </div>

            <div className="mt-6 pt-5 border-t border-alabaster-200 flex flex-col gap-2.5">
              <a
                href="#book-appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-bronze-600 to-[#ab6645] text-alabaster-50 text-sm font-bold py-3 rounded-full shadow-md hover:brightness-105 transition-all"
              >
                <CalendarCheck size={18} weight="bold" />
                <span>Book Appointment</span>
              </a>

              <a
                href="https://wa.me/919820000000?text=Hello%20Dr.%20Akash%20Shah%27s%20clinical%20team%2C%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-cypress-950 text-sm font-bold py-2.5 rounded-full shadow-sm transition-all"
              >
                <WhatsappLogo size={18} weight="fill" />
                <span>Ask on WhatsApp</span>
              </a>

              <div className="flex items-center justify-between text-xs text-slate-500 px-2 pt-2">
                <span>Chambers: Hill Rd, Bandra West</span>
                <a href={`tel:${siteConfig.contact.phoneRaw}`} className="font-bold text-bronze-600">
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
```

---

## 5. Section Right Below the Hero

In the page sequence (`src/pages/Home.jsx`):
```jsx
<HeroSection />
<TickerStrip />
<ManifestoSection />
```

### Component A: Boundary Divider Strip (Immediately Below Hero)
- **File Name:** `src/components/home/TickerStrip.jsx`
- **Background Color:** `bg-alabaster-50` (`#FCFBF7`)
- **Dividing Border:** `border-y border-alabaster-200` (`#E5DFD3`)
- **Marquee Elements:** `ROBOTIC RADICAL PROSTATECTOMY`, `NEPHRON-SPARING KIDNEY SURGERY`, `MRI-US FUSION BIOPSY`, etc. separated by `#9A5B3E` terracotta dots.

### Component B: First Major Content Section
- **File Name:** `src/components/home/ManifestoSection.jsx`
- **Background Color:** `bg-alabaster-50` (`#FCFBF7`) with bottom boundary `border-b border-alabaster-200` (`#E5DFD3`).
- **Eyebrow:** `MEET YOUR SURGEON`
- **First Heading (`h2`):**  
  `"Transparent, evidence-led urological cancer care with an unyielding commitment to organ preservation."`
- **Hero Bottom Blending Note:**  
  The current hero's bottom edge uses `bg-gradient-to-b from-white via-alabaster-50/70 to-alabaster-100/90` with a border of `border-b border-alabaster-200/80` (`#E5DFD3`). A 3D WebGL canvas background should transition down to either `#F4F1EA` (alabaster-100) or `#FCFBF7` (alabaster-50) so the boundary with `TickerStrip` and `ManifestoSection` is seamless.

---

## 6. Workspace Assets & Dimensions

All static assets are located in `/public`:

| Path (relative to `/public`) | File Type | Dimensions (W × H) | Aspect Ratio | Primary Role |
| :--- | :--- | :--- | :--- | :--- |
| `/assets/images/dr_akash_shah.jpg` | JPEG | **896 × 1200 px** | 3:4 / 0.75 | Lead Surgeon Editorial Portrait |
| `/assets/images/chambers_appointment_interior.jpg` | JPEG | **896 × 1200 px** | 3:4 / 0.75 | Clinical Consultation Chambers |
| `/assets/images/chambers_booking_banner.jpg` | JPEG | **896 × 1200 px** | 3:4 / 0.75 | Booking Banner Visual |
| `/assets/images/dr_medical_oncology.jpg` | JPEG | **896 × 1200 px** | 3:4 / 0.75 | Medical Oncology Team Lead |
| `/assets/images/dr_pathology_lead.jpg` | JPEG | **896 × 1200 px** | 3:4 / 0.75 | Onco-Pathology Team Lead |
| `/assets/images/chambers_consultation.jpg` | JPEG | **1376 × 768 px** | 16:9 | High-res Chambers Interior |
| `/assets/images/dr_shah_console.jpg` | JPEG | **1376 × 768 px** | 16:9 | Da Vinci Surgical Robotic Console |
| `/assets/images/fellowship_surgical_institute.jpg` | JPEG | **1376 × 768 px** | 16:9 | Surgical Institute Credentials |
| `/assets/images/mri_diagnostic_center.jpg` | JPEG | **1376 × 768 px** | 16:9 | 3T mpMRI Diagnostics Center |
| `/assets/images/robotic_surgery_theater.jpg` | JPEG | **1376 × 768 px** | 16:9 | Tertiary Hospital Operating Suite |
| `/assets/images/tenet_active_surveillance.jpg` | JPEG | **1200 × 896 px** | 4:3 | Clinical Tenet Illustration |
| `/assets/images/tenet_nerve_sparing.jpg` | JPEG | **1200 × 896 px** | 4:3 | Nerve-Sparing Precision Visual |
| `/assets/images/tenet_organ_preservation.jpg` | JPEG | **1200 × 896 px** | 4:3 | Organ-Preservation Visual |
| `/favicon.svg` | SVG | Vector / Scalable | Scalable | Browser Favicon Icon |
| `/icons.svg` | SVG | Vector / Scalable | Scalable | SVG Symbol Sprite |
| `/assets/video/robotic_console_loop.mp4` / `.webm` | MP4/WebM | **1920 × 1080 px** | 16:9 | 11s Surgical Console Loop |
| `/assets/video/mri_diagnostics_loop.mp4` / `.webm` | MP4/WebM | **1920 × 1080 px** | 16:9 | mpMRI Fusion Scanning Loop |

*Note on Logo:* The practice monogram crest (`AS` within surgical crosshair geometry) is coded as a lightweight SVG component (`MonogramCrest` in `Header.jsx`) rather than a raster image.

---

## 7. Installed Packages & 3D Audit

### Complete `package.json` Dependencies
```json
{
  "name": "akash-shah",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "oxlint",
    "contrast": "node scripts/check-contrast.mjs",
    "preview": "vite preview"
  },
  "dependencies": {
    "@phosphor-icons/react": "^2.1.10",
    "autoprefixer": "^10.6.1",
    "gsap": "^3.15.0",
    "lenis": "^1.3.27",
    "postcss": "^8.5.30",
    "react": "^19.2.8",
    "react-dom": "^19.2.8",
    "react-router-dom": "^7.18.4",
    "tailwindcss": "^3.4.19"
  },
  "devDependencies": {
    "@types/react": "^19.2.18",
    "@types/react-dom": "^19.2.7",
    "@vitejs/plugin-react": "^6.1.1",
    "oxlint": "^1.81.0",
    "vite": "^8.3.0"
  }
}
```

### 3D & Motion Library Audit
- `three`: **Not installed**
- `@react-three/fiber`: **Not installed**
- `@react-three/drei`: **Not installed**
- `gsap`: **Installed (`^3.15.0`)** (used in `Home.jsx` with `ScrollTrigger`)
- `lenis`: **Installed (`^1.3.27`)** (used in `App.jsx` for smooth inertia scrolling)
- `framer-motion`: **Not installed**

---

## 8. Technical Constraints & Performance Requirements

### 1. React 19 Peer Dependency Caveat
- The application runs **React 19.2.8**.
- `@react-three/fiber` (stable v8) specifies `react: "^18.0.0"` in its `peerDependencies`. Attempting to run `npm i three @react-three/fiber @react-three/drei` will trigger `ERESOLVE unable to resolve dependency tree` unless:
  - Installed with `npm install three @react-three/fiber@rc @react-three/drei` (or `--legacy-peer-deps`), OR
  - **Recommended Approach:** Use **Vanilla Three.js (`three` + `gsap`)** directly inside a standard React `<canvas ref={canvasRef} />` with `useEffect`. This completely bypasses React 19 reconciliation overhead and peer dependency conflicts while delivering maximum FPS.

### 2. Integration with Lenis Smooth Scroll
- `lenis` is active globally in `src/App.jsx`.
- If the 3D scene uses scroll-linked rotation or camera movement, hook into GSAP's `ScrollTrigger` or Lenis's `on('scroll')` listener rather than raw `window.addEventListener('scroll')` to avoid frame-desync or rubber-banding.
- Ensure `ScrollTrigger.update()` is called on Lenis scroll if GSAP coordinates the camera.

### 3. Mobile Performance & Battery Optimization
- **Pixel Ratio:** Clamp `renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))` (or `1.5` on mobile) to avoid 3x retina thermal throttling on iPhones and Android devices.
- **Offscreen Throttling:** Use an `IntersectionObserver` to halt the `requestAnimationFrame` loop whenever the hero is scrolled out of viewport.
- **Touch Trapping:** Set CSS `touch-action: pan-y` on the 3D canvas so users on mobile touch devices can scroll vertically without the canvas intercepting touches.
- **Shaders & Post-Processing:** Avoid expensive full-screen passes (heavy bloom, SSAO) on mobile; keep shader precision to `mediump` for mobile fallback.

### 4. Accessibility & Reduced Motion
- `tokens.css` has strict `@media (prefers-reduced-motion: reduce)` rules.
- If the user has reduced motion enabled in their OS, the 3D animation must pause its auto-rotation or render a static framed angle.
