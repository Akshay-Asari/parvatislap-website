"use client";

import { useRain } from "@/hooks/useRain";

/**
 * Hero Component
 * Full-screen hero section with video background and rain animation
 * Extracted from new_index.html hero section (lines 1618-1649)
 */
export default function Hero() {
  // Initialize rain animation
  useRain("rainOverlay", 40);

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center relative hero-bg overflow-hidden"
    >
      {/* Video Background */}
      <video className="hero-video" autoPlay muted loop playsInline>
        <source
          src="/media/InShot_20250913_183717554_new.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Rain Overlay - Container for rain drops */}
      <div className="rain-overlay" id="rainOverlay"></div>

      {/* Hero Pattern Overlay */}
      <div className="hero-pattern absolute inset-0"></div>

      {/* Hero Content */}
      <div className="text-center z-10 text-white pt-5 relative">
        {/* 
          Main heading with responsive sizing:
          - text-6xl: base size
          - md:text-8xl: medium devices (≥768px)
          - lg:text-9xl: large devices (≥1024px)
          - 2xl:text-[10rem]: 2xl screens (≥1536px)
          - 3xl:text-[12rem]: ultra-wide screens (≥2560px)
        */}
        <h1 className="hero-title text-6xl md:text-8xl lg:text-9xl 2xl:text-[10rem] 3xl:text-[12rem] font-light tracking-widest mb-4">
          PARVATI&apos;S LAP
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle text-lg md:text-xl lg:text-2xl font-light 3xl:text-[3rem] tracking-wider mb-2 opacity-95">
          A Hostel & Villa in the Heart of the Himalayas
        </p>

        {/* Location */}
        <p className="hero-location text-sm md:text-base lg:text-lg font-light opacity-85 mb-7 leading-relaxed 3xl:text-[2rem] 3xl:leading-[3.75rem]">
          Lapas Village, Kasol, Parvati Valley — Adventure & Rest
        </p>
      </div>
    </section>
  );
}
