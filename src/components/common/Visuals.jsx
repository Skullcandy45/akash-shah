import React from 'react';

/**
 * High-craft SVG illustrations & silhouettes for Dr. Akash Shah's clinical practice.
 * Built to replace generic stock imagery with bespoke architectural and clinical line-art.
 */

// Doctor Portrait Illustration (Architectural / Editorial Silhouette)
export function DoctorPortrait({ className = "w-full h-full", variant = "primary" }) {
  const isDark = variant === "dark";
  return (
    <svg
      viewBox="0 0 400 480"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of Dr. Akash Shah, Lead Uro-Oncologist & Robotic Surgeon"
    >
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isDark ? "#0D2622" : "#F4F1EA"} />
          <stop offset="100%" stopColor={isDark ? "#071714" : "#E5DFD3"} />
        </linearGradient>
        <radialGradient id="auraGlow" cx="50%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#9A5B3E" stopOpacity={isDark ? "0.35" : "0.18"} />
          <stop offset="100%" stopColor="#9A5B3E" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="coatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FCFBF7" />
          <stop offset="100%" stopColor="#E5DFD3" />
        </linearGradient>
        <linearGradient id="scrubGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#163832" />
          <stop offset="100%" stopColor="#0D2622" />
        </linearGradient>
      </defs>

      {/* Background Frame */}
      <rect width="400" height="480" fill="url(#bgGrad)" />
      
      {/* Precision Geometric Grid Background */}
      <circle cx="200" cy="190" r="140" fill="url(#auraGlow)" />
      <circle cx="200" cy="190" r="160" stroke="#9A5B3E" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 6" />
      <circle cx="200" cy="190" r="110" stroke="#9A5B3E" strokeWidth="1" strokeOpacity="0.15" />
      <line x1="200" y1="20" x2="200" y2="380" stroke="#9A5B3E" strokeWidth="0.75" strokeOpacity="0.15" strokeDasharray="2 4" />
      <line x1="40" y1="190" x2="360" y2="190" stroke="#9A5B3E" strokeWidth="0.75" strokeOpacity="0.15" strokeDasharray="2 4" />

      {/* Head and Neck Silhouette */}
      <ellipse cx="200" cy="165" rx="52" ry="66" fill="#D49573" fillOpacity="0.88" />
      
      {/* Hair Silhouette - Styled & Dignified */}
      <path
        d="M148 152 C 146 115, 172 90, 204 90 C 238 90, 256 114, 252 148 C 248 130, 230 112, 202 112 C 172 112, 154 130, 148 152 Z"
        fill="#071714"
      />
      {/* Sideburn and Hair Texture */}
      <path d="M148 150 Q 146 175 154 185 Q 157 165 153 152 Z" fill="#071714" />
      <path d="M252 150 Q 254 175 246 185 Q 243 165 247 152 Z" fill="#071714" />

      {/* Ears */}
      <ellipse cx="146" cy="172" rx="7" ry="14" fill="#C28260" />
      <ellipse cx="254" cy="172" rx="7" ry="14" fill="#C28260" />

      {/* Neck */}
      <path d="M182 216 L 182 255 L 218 255 L 218 216 Z" fill="#C28260" />

      {/* Surgical Scrubs Collar (V-Neck) */}
      <path d="M165 250 L 200 295 L 235 250 L 200 260 Z" fill="url(#scrubGrad)" />

      {/* Clinical Consultation White Coat */}
      <path
        d="M110 320 Q 130 260 170 252 L 200 305 L 230 252 Q 270 260 290 320 L 320 480 L 80 480 Z"
        fill="url(#coatGrad)"
        stroke="#E5DFD3"
        strokeWidth="1.5"
      />

      {/* Lapels */}
      <path d="M170 252 L 184 340 L 155 350 L 138 280 Z" fill="#FCFBF7" stroke="#E5DFD3" strokeWidth="1" />
      <path d="M230 252 L 216 340 L 245 350 L 262 280 Z" fill="#FCFBF7" stroke="#E5DFD3" strokeWidth="1" />

      {/* Minimal Stethoscope Line */}
      <path
        d="M160 270 Q 155 360 190 375 Q 200 378 210 375 Q 245 360 240 270"
        stroke="#0D2622"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <circle cx="200" cy="380" r="10" fill="#9A5B3E" stroke="#0D2622" strokeWidth="2.5" />
      <circle cx="200" cy="380" r="4" fill="#FCFBF7" />

      {/* Surgeon Monogram Pocket Badge */}
      <rect x="135" y="380" width="38" height="24" rx="4" fill="#0D2622" />
      <text x="154" y="396" fill="#FCFBF7" fontSize="10" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">
        AS
      </text>

      {/* Optical Loupe / Modern Clinical Glasses */}
      <rect x="168" y="152" width="26" height="18" rx="4" fill="none" stroke="#071714" strokeWidth="2.5" />
      <rect x="206" y="152" width="26" height="18" rx="4" fill="none" stroke="#071714" strokeWidth="2.5" />
      <line x1="194" y1="160" x2="206" y2="160" stroke="#071714" strokeWidth="2.5" />
      <line x1="147" y1="158" x2="168" y2="158" stroke="#071714" strokeWidth="2" />
      <line x1="232" y1="158" x2="253" y2="158" stroke="#071714" strokeWidth="2" />

      {/* Subtle Coordinate Badge overlay */}
      <rect x="24" y="24" width="128" height="26" rx="13" fill="#071714" fillOpacity="0.85" />
      <text x="88" y="41" fill="#FCFBF7" fontSize="10" fontWeight="600" letterSpacing="0.08em" textAnchor="middle">
        LEAD SURGEON
      </text>
    </svg>
  );
}

// Specialist Team Silhouettes (for Medical Oncology and Pathology leads)
export function SpecialistSilhouette({ specialty = "oncology", className = "w-full h-full" }) {
  const isPathology = specialty === "pathology";
  return (
    <svg
      viewBox="0 0 400 480"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`Illustration of ${isPathology ? 'Onco-Pathology' : 'Medical Oncology'} specialist`}
    >
      <defs>
        <linearGradient id={`specBg-${specialty}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F4F1EA" />
          <stop offset="100%" stopColor="#E5DFD3" />
        </linearGradient>
        <radialGradient id={`specGlow-${specialty}`} cx="50%" cy="35%" r="45%">
          <stop offset="0%" stopColor="#9A5B3E" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#9A5B3E" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="400" height="480" fill={`url(#specBg-${specialty})`} />
      <circle cx="200" cy="180" r="130" fill={`url(#specGlow-${specialty})`} />
      <circle cx="200" cy="180" r="140" stroke="#0D2622" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="3 5" />

      {/* Technical grid lines */}
      <line x1="60" y1="180" x2="340" y2="180" stroke="#9A5B3E" strokeWidth="0.8" strokeOpacity="0.2" />
      <line x1="200" y1="40" x2="200" y2="340" stroke="#9A5B3E" strokeWidth="0.8" strokeOpacity="0.2" />

      {/* Head & Features */}
      <ellipse cx="200" cy="165" rx="50" ry="64" fill="#CBA084" />
      <path
        d={
          isPathology
            ? "M148 150 C 145 105, 175 85, 200 85 C 235 85, 255 108, 252 150 Q 235 120 200 120 Q 165 120 148 150 Z"
            : "M145 160 C 142 95, 170 80, 205 80 C 240 80, 258 100, 255 160 C 248 135 225 110 200 110 C 175 110 152 135 145 160 Z"
        }
        fill="#0D2622"
      />

      {/* Neck */}
      <path d="M184 220 L 184 255 L 216 255 L 216 220 Z" fill="#B88A6E" />

      {/* Specialist Attire */}
      <path
        d="M115 320 Q 140 260 175 252 L 200 300 L 225 252 Q 260 260 285 320 L 315 480 L 85 480 Z"
        fill="#FCFBF7"
        stroke="#E5DFD3"
        strokeWidth="1.5"
      />

      {/* Subspecialty Symbolic Accent */}
      {isPathology ? (
        // Microscope / Optics symbol on badge
        <g transform="translate(180, 360)">
          <circle cx="20" cy="20" r="22" fill="#0D2622" />
          <circle cx="20" cy="20" r="16" fill="none" stroke="#D49573" strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="20" cy="20" r="5" fill="#9A5B3E" />
          <path d="M20 7 L 20 12 M 20 28 L 20 33 M 7 20 L 12 20 M 28 20 L 33 20" stroke="#FCFBF7" strokeWidth="1.5" />
        </g>
      ) : (
        // Targeted Molecule / DNA Strand symbol on badge
        <g transform="translate(180, 360)">
          <circle cx="20" cy="20" r="22" fill="#0D2622" />
          <path d="M12 14 Q 20 20 28 14 M 12 26 Q 20 20 28 26" stroke="#D49573" strokeWidth="2" fill="none" />
          <circle cx="15" cy="17" r="2.5" fill="#9A5B3E" />
          <circle cx="25" cy="23" r="2.5" fill="#9A5B3E" />
        </g>
      )}

      {/* Badge Top Left */}
      <rect x="24" y="24" width="138" height="24" rx="12" fill="#0D2622" fillOpacity="0.85" />
      <text x="93" y="40" fill="#FCFBF7" fontSize="10" fontWeight="600" letterSpacing="0.08em" textAnchor="middle">
        {isPathology ? "HISTOPATHOLOGY" : "MEDICAL ONCOLOGY"}
      </text>
    </svg>
  );
}

// Robotic Surgery & Precision Anatomical Mesh Diagram (Section 5 Clinical Explainer)
export function RoboticSurgeryMeshDiagram({ className = "w-full h-auto" }) {
  return (
    <svg
      viewBox="0 0 600 480"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Schematic of 3D Robotic Console Navigation and Organ-Preservation Margins"
    >
      <defs>
        <radialGradient id="meshCenter" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#9A5B3E" stopOpacity="0.45" />
          <stop offset="50%" stopColor="#163832" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#071714" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="laserBeam" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D49573" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#9A5B3E" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Deep Obsidian Background Layer */}
      <rect width="600" height="480" rx="16" fill="#071714" />
      <rect x="1" y="1" width="598" height="478" rx="15" stroke="#163832" strokeWidth="1.5" />

      {/* Target Glow Center */}
      <circle cx="300" cy="240" r="160" fill="url(#meshCenter)" />

      {/* Coordinate Crosshairs & Precision Rings */}
      <circle cx="300" cy="240" r="180" stroke="#163832" strokeWidth="1" strokeDasharray="4 8" />
      <circle cx="300" cy="240" r="130" stroke="#9A5B3E" strokeWidth="1" strokeOpacity="0.3" />
      <circle cx="300" cy="240" r="85" stroke="#D49573" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="6 4" />
      <circle cx="300" cy="240" r="40" stroke="#D49573" strokeWidth="1.5" />

      {/* Radar Axes */}
      <line x1="60" y1="240" x2="540" y2="240" stroke="#163832" strokeWidth="1" strokeDasharray="2 4" />
      <line x1="300" y1="40" x2="300" y2="440" stroke="#163832" strokeWidth="1" strokeDasharray="2 4" />

      {/* Robotic Arm Trajectory Vectors (Triangulation) */}
      {/* Arm 1 - 3D Endoscope Axis */}
      <path d="M120 70 L 285 225" stroke="#D49573" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="120" cy="70" r="6" fill="#D49573" />
      <circle cx="120" cy="70" r="12" stroke="#D49573" strokeWidth="1" strokeOpacity="0.4" />
      <text x="135" y="65" fill="#FCFBF7" fontSize="11" fontWeight="600" letterSpacing="0.05em">
        3D HD OPTICAL CONSOLE (10× MAG)
      </text>

      {/* Arm 2 - Wristed Robotic Instrument Alpha */}
      <path d="M480 80 L 315 228" stroke="#9A5B3E" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="480" cy="80" r="6" fill="#9A5B3E" />
      <circle cx="480" cy="80" r="12" stroke="#9A5B3E" strokeWidth="1" strokeOpacity="0.4" />
      <text x="350" y="75" fill="#FCFBF7" fontSize="11" fontWeight="600" letterSpacing="0.05em">
        WRISTED MICROSURGICAL ARM (7 DOF)
      </text>

      {/* Arm 3 - Organ Sparing Retraction Axis */}
      <path d="M150 410 L 288 255" stroke="#163832" strokeWidth="2" strokeDasharray="4 4" />
      <circle cx="150" cy="410" r="5" fill="#163832" stroke="#D49573" strokeWidth="1" />
      <text x="65" y="435" fill="#E5DFD3" fontSize="11" fontWeight="500">
        NEUROVASCULAR PRESERVATION MARGIN
      </text>

      {/* Precision Focal Center */}
      <circle cx="300" cy="240" r="8" fill="#FCFBF7" />
      <circle cx="300" cy="240" r="18" stroke="#FCFBF7" strokeWidth="1.5" strokeOpacity="0.8" />

      {/* Real-Time Parameter Telemetry Badges */}
      <g transform="translate(400, 350)">
        <rect width="165" height="74" rx="10" fill="#0D2622" stroke="#163832" strokeWidth="1" />
        <text x="14" y="24" fill="#D49573" fontSize="10" fontWeight="bold" letterSpacing="0.08em">
          SURGICAL TELEMETRY
        </text>
        <text x="14" y="44" fill="#FCFBF7" fontSize="13" fontWeight="bold">
          0.1 mm Margin Precision
        </text>
        <text x="14" y="62" fill="#E5DFD3" fontSize="10">
          Tremor Filtration · 540° Wrist
        </text>
      </g>
    </svg>
  );
}

// Architectural Clinic Artwork for Appointment Banner (Section 10 Right Half)
export function ArchitecturalClinicArtwork({ className = "w-full h-full" }) {
  return (
    <svg
      viewBox="0 0 600 500"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Architectural rendering of the modern clinical chambers in Bandra West"
    >
      <defs>
        <linearGradient id="archSky" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#071714" />
          <stop offset="60%" stopColor="#0D2622" />
          <stop offset="100%" stopColor="#163832" />
        </linearGradient>
        <linearGradient id="sunBeam" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#D49573" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#071714" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Deep Atmosphere */}
      <rect width="600" height="500" fill="url(#archSky)" />

      {/* Radial Warm Sunlight beam entering from top */}
      <path d="M220 0 L 380 0 L 520 500 L 80 500 Z" fill="url(#sunBeam)" />

      {/* Serene Architectural Arches (Symbolizing Care & Strength) */}
      <path
        d="M100 500 L 100 240 A 100 100 0 0 1 300 240 L 300 500 Z"
        fill="none"
        stroke="#9A5B3E"
        strokeWidth="2"
        strokeOpacity="0.35"
      />
      <path
        d="M180 500 L 180 290 A 60 60 0 0 1 300 290 L 300 500 Z"
        fill="none"
        stroke="#D49573"
        strokeWidth="1.5"
        strokeOpacity="0.45"
      />
      <path
        d="M300 500 L 300 200 A 120 120 0 0 1 540 200 L 540 500 Z"
        fill="none"
        stroke="#9A5B3E"
        strokeWidth="2"
        strokeOpacity="0.3"
      />

      {/* Fine Floor Grid Lines Perspective */}
      <line x1="0" y1="420" x2="600" y2="420" stroke="#163832" strokeWidth="1" />
      <line x1="0" y1="455" x2="600" y2="455" stroke="#163832" strokeWidth="1.5" />
      <line x1="0" y1="485" x2="600" y2="485" stroke="#163832" strokeWidth="2" />

      {/* Clean Modern Lighting Geometry */}
      <circle cx="300" cy="140" r="4" fill="#FCFBF7" />
      <circle cx="300" cy="140" r="28" stroke="#D49573" strokeWidth="1" strokeOpacity="0.6" strokeDasharray="4 4" />
      <circle cx="300" cy="140" r="50" stroke="#9A5B3E" strokeWidth="0.8" strokeOpacity="0.3" />

      {/* Text Stamp in Corner */}
      <rect x="40" y="40" width="160" height="28" rx="6" fill="#071714" stroke="#163832" strokeWidth="1" />
      <text x="120" y="58" fill="#D49573" fontSize="10" fontWeight="bold" letterSpacing="0.12em" textAnchor="middle">
        BANDRA WEST CHAMBERS
      </text>

      {/* Tertiary Care Seal */}
      <circle cx="500" cy="100" r="32" stroke="#9A5B3E" strokeWidth="1" strokeOpacity="0.4" />
      <circle cx="500" cy="100" r="24" stroke="#D49573" strokeWidth="1" strokeOpacity="0.6" strokeDasharray="3 3" />
      <text x="500" y="97" fill="#FCFBF7" fontSize="9" fontWeight="bold" textAnchor="middle">
        URO-ONCO
      </text>
      <text x="500" y="108" fill="#D49573" fontSize="8" fontWeight="bold" textAnchor="middle">
        MUMBAI
      </text>
    </svg>
  );
}
