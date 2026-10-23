import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  ArrowUpRight, 
  Cpu, 
  Play, 
  Pause,
  SpeakerSimpleSlash,
  Eye,
  ShieldCheck
} from '@phosphor-icons/react';
import { siteConfig } from '../../content/site';

export default function ClinicalMethodologySection() {
  const { clinicalMethodology } = siteConfig;
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="bg-alabaster-100 py-20 lg:py-28 border-b border-alabaster-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Clinical Methodology & Quality of Life Focus (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Eyebrow */}
            <div className="eyebrow text-slate-600 mb-4">
              <span>{clinicalMethodology.eyebrow}</span>
            </div>

            {/* Zodiak Heading */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-cypress-950 leading-tight mb-5">
              {clinicalMethodology.title} {clinicalMethodology.titleAccent}
            </h2>

            {/* Editorial practice philosophy copy */}
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              {clinicalMethodology.summary}
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-8">
              {clinicalMethodology.paragraph2}
            </p>

            {/* 5-Item Precision Methodology Checklist */}
            <div className="space-y-3.5 w-full mb-8">
              {clinicalMethodology.checklist.map((item) => (
                <div 
                  key={item.id} 
                  className="flex items-start gap-3.5 bg-alabaster-50 p-3.5 rounded-xl border border-alabaster-200/80 hover:border-bronze-600/40 transition-colors shadow-subtle"
                >
                  <CheckCircle size={20} weight="fill" className="text-bronze-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-sans text-xs font-bold text-cypress-950 uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dual Pill Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/services"
                className="pill-button bg-bronze-600 text-alabaster-50 text-xs font-semibold px-6 py-3 rounded-full hover:bg-[#864c31] flex items-center gap-2 shadow-sm transition-all duration-200"
              >
                <span>Our oncology services</span>
                <ArrowRight size={14} weight="bold" />
              </Link>

              <Link
                to="/about"
                className="pill-button bg-alabaster-50 hover:bg-alabaster-200 text-cypress-950 border border-alabaster-200 text-xs font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-200"
              >
                <span>About the practice</span>
                <ArrowUpRight size={14} weight="bold" />
              </Link>
            </div>

          </div>

          {/* Right Column: 11-Second Looping Video & Surgical Console Telemetry Card (5 cols on lg) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-cypress-950 p-6 sm:p-7 text-alabaster-50 shadow-2xl border border-cypress-800 relative flex flex-col justify-between">
              
              {/* Header Badges */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-alabaster-50 text-cypress-950 text-[10px] font-bold tracking-widest uppercase shadow-sm">
                  <Cpu size={14} weight="bold" className="text-bronze-600" />
                  DA VINCI Xi® THEATER
                </span>
                <div className="flex items-center gap-2 text-[11px] text-bronze-400 font-semibold tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>10× 3D CONSOLE LOOP</span>
                </div>
              </div>

              {/* Seamless 11-Second High-End Looping Video */}
              <div className="relative rounded-xl overflow-hidden bg-cypress-900 border border-cypress-800 aspect-video shadow-inner group">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={clinicalMethodology.video.poster}
                  className="w-full h-full object-cover"
                  aria-label="High-resolution looping video of robotic surgical console and operating suite"
                >
                  <source src={clinicalMethodology.video.webm} type="video/webm" />
                  <source src={clinicalMethodology.video.mp4} type="video/mp4" />
                  Your browser does not support HTML5 video playback.
                </video>

                {/* Subtle dark gradient overlay at bottom of video */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-cypress-950/80 to-transparent pointer-events-none" />

                {/* Video Playback Toggle & Audio Muted Badge */}
                <div className="absolute bottom-3 right-3 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-cypress-950/80 text-[10px] text-alabaster-100/80 backdrop-blur-sm border border-cypress-800">
                    <SpeakerSimpleSlash size={12} weight="bold" />
                    <span>MUTED</span>
                  </span>
                  <button
                    onClick={togglePlay}
                    className="p-1.5 rounded-md bg-cypress-950/80 hover:bg-cypress-900 text-alabaster-50 backdrop-blur-sm border border-cypress-800 transition-colors"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? <Pause size={12} weight="bold" /> : <Play size={12} weight="bold" />}
                  </button>
                </div>
              </div>

              {/* Precision Clinical Telemetry Footnote */}
              <div className="pt-4 mt-4 border-t border-cypress-800/80 space-y-2">
                <div className="flex items-center justify-between text-xs text-alabaster-100">
                  <span className="font-semibold text-alabaster-50 flex items-center gap-1.5">
                    <Eye size={14} className="text-bronze-400" />
                    Optical Magnification: 10× 3D HD
                  </span>
                  <span className="text-bronze-400 font-bold">0.1 mm Margin Precision</span>
                </div>
                <p className="text-[11px] text-alabaster-100/70 leading-normal">
                  Real-time robotic console articulation with tremor cancellation protects critical neurovascular structures adjacent to tumor margins.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
