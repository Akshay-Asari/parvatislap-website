"use client";

import { useEffect } from "react";

/**
 * Hero Component
 * Full-screen hero section with video background and rain animation
 * Extracted from new_index.html hero section (lines 1618-1649)
 * Rain animation function from lines 45-59
 */
export default function Hero() {
  /**
   * Create rain drop animation elements
   * Replicates the createRainDrops() JavaScript function
   */
  useEffect(() => {
    const rainOverlay = document.getElementById("rainOverlay");
    if (!rainOverlay) return;

    const dropCount = 40;
    const drops: HTMLDivElement[] = [];

    for (let i = 0; i < dropCount; i++) {
      const drop = document.createElement("div");
      drop.className = "rain-drop";
      drop.style.left = Math.random() * 100 + "%";
      drop.style.width = Math.random() * 3 + 1 + "px";
      drop.style.height = Math.random() * 20 + 10 + "px";
      drop.style.animationDelay = Math.random() * 5 + "s";
      drop.style.animationDuration = Math.random() * 3 + 2 + "s";
      rainOverlay.appendChild(drop);
      drops.push(drop);
    }

    // Cleanup function to remove rain drops on unmount
    return () => {
      drops.forEach((drop) => {
        if (rainOverlay.contains(drop)) {
          rainOverlay.removeChild(drop);
        }
      });
    };
  }, []);

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
          - [@media(min-width:2560px)]:text-[12rem]: ultra-wide screens
        */}
        <h1 className="hero-title text-6xl md:text-8xl lg:text-9xl 2xl:text-[10rem] [@media(min-width:2560px)]:text-[12rem] font-light tracking-widest mb-4">
          PARVATI&apos;S LAP
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle text-lg md:text-xl lg:text-2xl font-light [@media(min-width:2560px)]:text-[3rem] tracking-wider mb-2 opacity-95">
          A Hostel & Villa in the Heart of the Himalayas
        </p>

        {/* Location */}
        <p className="hero-location text-sm md:text-base lg:text-lg font-light opacity-85 mb-7 leading-relaxed [@media(min-width:2560px)]:text-[2rem] [@media(min-width:2560px)]:leading-[3.75rem]">
          Lapas Village, Kasol, Parvati Valley — Adventure & Rest
        </p>
      </div>
    </section>
  );
}
