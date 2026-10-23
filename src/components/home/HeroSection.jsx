/**
 * src/components/home/HeroSection.jsx
 * Install once:  npm i three
 *
 * Studio-lit 3D "precision sculpture" (glossy copper gimbal tubes +
 * directional cypress-to-copper particle shell + pale wireframe core)
 * with a frosted-glass Multidisciplinary Care card overlapping its
 * lower-right edge. Preserves all real site.js content and safety rules.
 */
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import {
  CalendarCheck,
  ArrowRight,
  Clock,
  PhoneCall,
  MapPin,
  ShieldCheck,
  WhatsappLogo,
  Star,
} from '@phosphor-icons/react';
import { siteConfig } from '../../content/site';

/* ------------------------------------------------------------------ */
/* 3D scene                                                            */
/* ------------------------------------------------------------------ */
function HeroScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    // --- Renderer (bail out quietly if WebGL is unavailable) ---
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'low-power',
      });
    } catch {
      return undefined; // falls back to the CSS corner glows
    }

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 1.75));
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    const canvas = renderer.domElement;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.display = 'block';
    mount.appendChild(canvas);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0, 7.2);

    // --- Procedural studio environment so glossy copper tubes catch rich highlights ---
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envScene = new THREE.Scene();
    envScene.background = new THREE.Color('#f6f4f0');

    const stripGeo = new THREE.PlaneGeometry(10, 4);
    const keyStrip = new THREE.Mesh(
      stripGeo,
      new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide })
    );
    keyStrip.position.set(-4, 5, 4);
    keyStrip.lookAt(0, 0, 0);
    envScene.add(keyStrip);

    const warmStrip = new THREE.Mesh(
      stripGeo,
      new THREE.MeshBasicMaterial({ color: 0xffd2b3, side: THREE.DoubleSide })
    );
    warmStrip.position.set(5, 2, 3);
    warmStrip.lookAt(0, 0, 0);
    envScene.add(warmStrip);

    const darkStrip = new THREE.Mesh(
      stripGeo,
      new THREE.MeshBasicMaterial({ color: 0x163832, side: THREE.DoubleSide })
    );
    darkStrip.position.set(0, -5, -2);
    darkStrip.lookAt(0, 0, 0);
    envScene.add(darkStrip);

    const envRT = pmrem.fromScene(envScene, 0.04);
    scene.environment = envRT.texture;
    stripGeo.dispose();
    pmrem.dispose();

    // --- Soft studio lighting (bright specular highlight on one side, shaded bronze on the other) ---
    const ambientLight = new THREE.AmbientLight(0xfff8f2, 0.75);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfffdf9, 2.8);
    keyLight.position.set(-4.5, 5.5, 5.0);
    scene.add(keyLight);

    const copperRimLight = new THREE.DirectionalLight(0xe69f7a, 1.9);
    copperRimLight.position.set(5.0, -2.0, 3.5);
    scene.add(copperRimLight);

    const cypressFillLight = new THREE.DirectionalLight(0x1f5249, 1.1);
    cypressFillLight.position.set(-4.0, -3.5, -2.0);
    scene.add(cypressFillLight);

    const group = new THREE.Group();
    scene.add(group);

    // Brand palette
    const CYPRESS_DEEP = new THREE.Color('#13332D');
    const CYPRESS_MID = new THREE.Color('#21574C');
    const BRONZE = new THREE.Color('#9A5B3E');
    const COPPER = new THREE.Color('#D99672');
    const COPPER_BRIGHT = new THREE.Color('#F0B896');

    // --- Soft round point sprite with subtle specular core ---
    const spriteCanvas = document.createElement('canvas');
    spriteCanvas.width = 64;
    spriteCanvas.height = 64;
    const sctx = spriteCanvas.getContext('2d');
    const grad = sctx.createRadialGradient(28, 28, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255,252,248,1)');
    grad.addColorStop(0.35, 'rgba(255,255,255,0.95)');
    grad.addColorStop(0.7, 'rgba(255,255,255,0.45)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    sctx.fillStyle = grad;
    sctx.fillRect(0, 0, 64, 64);
    const sprite = new THREE.CanvasTexture(spriteCanvas);

    // --- Denser particle shell blending from deep green on one side to bronze & copper on the other ---
    const COUNT = isMobile ? 1600 : 3200;
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const golden = Math.PI * (3 - Math.sqrt(5));
    const tmp = new THREE.Color();

    for (let i = 0; i < COUNT; i += 1) {
      const y = 1 - (i / (COUNT - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;

      const nx = Math.cos(theta) * r;
      const ny = y;
      const nz = Math.sin(theta) * r;

      const wobble =
        1.48 + 0.08 * Math.sin(theta * 3.0 + y * 4.0) + 0.05 * Math.cos(y * 6.0 + theta);
      positions[i * 3] = nx * wobble;
      positions[i * 3 + 1] = ny * wobble;
      positions[i * 3 + 2] = nz * wobble;

      // Directional blend axis: lower-left/back = deep green, upper-right/front = bronze -> bright copper
      const rawBlend = (nx * 0.65 + ny * 0.55 + nz * 0.25 + 1) * 0.5;
      const jitter = (Math.random() - 0.5) * 0.14;
      const blend = Math.max(0, Math.min(1, rawBlend + jitter));

      if (blend < 0.38) {
        tmp.lerpColors(CYPRESS_DEEP, CYPRESS_MID, blend / 0.38);
      } else if (blend < 0.72) {
        tmp.lerpColors(CYPRESS_MID, BRONZE, (blend - 0.38) / 0.34);
      } else {
        tmp.lerpColors(BRONZE, Math.random() > 0.35 ? COPPER : COPPER_BRIGHT, (blend - 0.72) / 0.28);
      }

      colors[i * 3] = tmp.r;
      colors[i * 3 + 1] = tmp.g;
      colors[i * 3 + 2] = tmp.b;
    }

    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pointsGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const pointsMat = new THREE.PointsMaterial({
      size: isMobile ? 0.068 : 0.058,
      map: sprite,
      vertexColors: true,
      transparent: true,
      opacity: 0.92,
      depthWrite: false,
      sizeAttenuation: true,
    });
    const points = new THREE.Points(pointsGeo, pointsMat);
    group.add(points);

    // --- Thick, glossy copper gimbal tubes at 3 tilts ---
    const rings = [];
    const ringSpecs = [
      {
        radius: 2.08,
        tube: 0.036,
        color: '#C87D55',
        tiltX: 1.15,
        tiltY: 0.22,
        speed: 0.1,
      },
      {
        radius: 1.88,
        tube: 0.03,
        color: '#9A5B3E',
        tiltX: 0.38,
        tiltY: 0.95,
        speed: -0.08,
      },
      {
        radius: 2.28,
        tube: 0.038,
        color: '#D99672',
        tiltX: -0.68,
        tiltY: -0.48,
        speed: 0.06,
      },
    ];

    ringSpecs.forEach((spec) => {
      const geo = new THREE.TorusGeometry(spec.radius, spec.tube, 32, 220);
      const mat = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(spec.color),
        metalness: 0.85,
        roughness: 0.16,
        clearcoat: 0.85,
        clearcoatRoughness: 0.12,
        reflectivity: 1.0,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.set(spec.tiltX, spec.tiltY, 0);
      mesh.userData = spec;
      group.add(mesh);
      rings.push(mesh);
    });

    // --- Thin, pale inner wireframe core ---
    const coreGeo = new THREE.IcosahedronGeometry(0.76, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#8C7A6B'),
      wireframe: true,
      transparent: true,
      opacity: 0.24,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    group.add(core);

    // --- Sizing & placement (shifted upper-left so card overlaps lower-right edge) ---
    const visH = 2 * 7.2 * Math.tan((camera.fov * Math.PI) / 360);
    const resize = () => {
      const w = Math.max(mount.clientWidth, 1);
      const h = Math.max(mount.clientHeight, 1);
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      const scale = Math.min(0.92, (visH * camera.aspect * 0.96) / 4.6);
      group.scale.setScalar(scale);

      if (w < 640) {
        group.position.set(0, 0.45, 0);
      } else {
        group.position.set(-0.38, 0.28, 0);
      }
    };
    resize();

    // --- Gentle pointer parallax (desktop only) ---
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    const onPointerMove = (e) => {
      pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.ty = (e.clientY / window.innerHeight) * 2 - 1;
    };
    if (!isMobile && !reduceMotion) {
      window.addEventListener('pointermove', onPointerMove, { passive: true });
    }

    // --- Render loop ---
    const startTime = performance.now();
    let raf = 0;
    let inView = true;

    const renderFrame = (t) => {
      pointer.x += (pointer.tx - pointer.x) * 0.035;
      pointer.y += (pointer.ty - pointer.y) * 0.035;

      group.rotation.y = t * 0.065 + pointer.x * 0.28;
      group.rotation.x = Math.sin(t * 0.12) * 0.06 + pointer.y * 0.15;

      core.rotation.y = -t * 0.14;
      core.rotation.x = t * 0.08;

      rings.forEach((ring) => {
        ring.rotation.z = t * ring.userData.speed;
      });

      renderer.render(scene, camera);
    };

    const tick = () => {
      raf = requestAnimationFrame(tick);
      renderFrame((performance.now() - startTime) * 0.001);
    };
    const start = () => {
      if (!raf && !reduceMotion) tick();
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    if (reduceMotion) {
      group.rotation.set(0.14, 0.55, 0);
      renderer.render(scene, camera);
    } else {
      start();
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView && !document.hidden) start();
        else stop();
      },
      { threshold: 0.05 }
    );
    io.observe(mount);

    const onVisibility = () => {
      if (document.hidden) stop();
      else if (inView) start();
    };
    document.addEventListener('visibilitychange', onVisibility);

    const ro = new ResizeObserver(() => {
      resize();
      if (reduceMotion) renderer.render(scene, camera);
    });
    ro.observe(mount);

    // --- Cleanup ---
    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('pointermove', onPointerMove);
      envRT.dispose();
      pointsGeo.dispose();
      pointsMat.dispose();
      sprite.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      rings.forEach((ring) => {
        ring.geometry.dispose();
        ring.material.dispose();
      });
      renderer.dispose();
      if (canvas.parentNode === mount) mount.removeChild(canvas);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
      style={{
        touchAction: 'pan-y',
        WebkitMaskImage:
          'radial-gradient(ellipse 84% 78% at 46% 44%, #000 68%, transparent 100%)',
        maskImage: 'radial-gradient(ellipse 84% 78% at 46% 44%, #000 68%, transparent 100%)',
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */
export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-white via-alabaster-50/80 to-alabaster-100/95 text-cypress-950 pt-10 sm:pt-14 pb-20 md:pb-28 lg:pb-32 overflow-hidden border-b border-alabaster-200/80">
      {/* Soft Blurred Green & Copper Corner Glows on Pale Alabaster Base */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-20 w-[460px] h-[460px] rounded-full bg-emerald-800/10 blur-[130px]" />
        <div className="absolute -top-16 -right-16 w-[540px] h-[540px] rounded-full bg-[#D49573]/20 blur-[140px]" />
        <div className="absolute -bottom-28 -left-16 w-[480px] h-[480px] rounded-full bg-emerald-700/12 blur-[140px]" />
        <div className="absolute -bottom-24 right-10 w-[440px] h-[440px] rounded-full bg-bronze-600/12 blur-[130px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* UPPER HERO SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-2 md:pt-6">
          {/* Left Column (7 cols) */}
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

            {/* Triple Action CTAs */}
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

            {/* Trust badge strip */}
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

          {/* Right Column (5 cols): 3D sculpture with frosted-glass card overlapping its lower-right edge */}
          <div className="relative lg:col-span-5 min-h-[540px] sm:min-h-[580px] flex items-end justify-center lg:justify-end pb-2 sm:pb-6">
            <HeroScene />

            <div className="relative z-10 bg-white/75 backdrop-blur-xl text-cypress-950 rounded-3xl p-6 sm:p-7 shadow-[0_24px_60px_rgba(22,56,50,0.14)] max-w-[360px] w-full border border-white/80 ring-1 ring-alabaster-200/60 lg:mr-1 lg:mb-4 transform hover:-translate-y-1 transition duration-300">
              {/* Rating badge */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-cypress-950/10">
                <div className="flex items-center gap-1.5 bg-amber-50/90 border border-amber-200/80 px-2.5 py-1 rounded-full">
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

              {/* Monogram circles */}
              <div className="flex items-center -space-x-3 mb-4">
                <div
                  className="w-11 h-11 rounded-full bg-bronze-600 text-alabaster-50 border-2 border-white flex items-center justify-center font-display font-bold text-xs shadow-sm"
                  title="Dr. Akash Shah - Uro-Oncology"
                >
                  AS
                </div>
                <div
                  className="w-11 h-11 rounded-full bg-cypress-800 text-alabaster-50 border-2 border-white flex items-center justify-center font-display font-bold text-xs shadow-sm"
                  title="Medical Oncology Lead"
                >
                  MO
                </div>
                <div
                  className="w-11 h-11 rounded-full bg-cypress-950 text-alabaster-50 border-2 border-white flex items-center justify-center font-display font-bold text-xs shadow-sm"
                  title="Onco-Pathology Lead"
                >
                  HP
                </div>
                <span className="pl-4 text-[11px] font-semibold text-slate-700 tracking-wider uppercase">
                  Tumor Board Team
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-cypress-950 tracking-tight leading-tight mb-1.5">
                Multidisciplinary Care
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Fellowship-Trained Robotic Console Surgery · 1,200+ Cases · Evidence-Based Protocols
              </p>

              <div className="bg-white/65 rounded-2xl p-3.5 border border-white/90 flex items-start gap-2.5 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-bronze-600 shrink-0 mt-1.5" />
                <p className="text-xs text-cypress-950 font-medium leading-relaxed">
                  Zero delays for acute staging or second-opinion reviews on prostate & kidney biopsies.
                </p>
              </div>

              <div className="mt-4 pt-3.5 border-t border-cypress-950/10 flex items-center justify-between text-[11px] text-slate-600">
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

            {/* Card 4: Lead Surgeon Quick-Book */}
            <div className="bg-cypress-950 border border-alabaster-200/80 rounded-2xl p-0 overflow-hidden relative flex flex-col justify-end min-h-[250px] shadow-card group">
              <div className="absolute inset-0 w-full h-full bg-cypress-900">
                <img
                  src={siteConfig.operationalDock[3].image}
                  alt="Dr. Akash Shah — Lead Uro-Oncologist & Robotic Surgeon"
                  className="w-full h-full object-cover object-top brightness-95 group-hover:scale-105 transition-transform duration-500 ease-emil"
                  loading="eager"
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cypress-950 via-cypress-950/70 to-transparent pointer-events-none" />

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
