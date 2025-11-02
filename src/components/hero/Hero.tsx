/**
 * Hero Component
 * Full-screen hero section with video background and rain effect
 * Will be implemented with the exact design from new_index.html
 */
export default function Hero() {
  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background - Will be implemented */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-forest-green to-dark-emerald" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-light text-white tracking-widest mb-6">
          PARVATI&apos;S LAP
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-light">
          A sanctuary in the Himalayas
        </p>
      </div>
    </section>
  );
}

