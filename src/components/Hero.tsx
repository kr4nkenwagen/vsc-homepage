import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <Image
          src="/logo.png"
          alt="Växjö Stigcyklister"
          width={503}
          height={390}
          className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm h-auto mx-auto mb-8"
          priority
        />
        <p className="text-lg text-white/80 max-w-xl mx-auto mb-10 leading-relaxed">
          Föreningen för oss som gillar att cykla och bygga stig i Växjö.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#stigar"
            className="bg-white text-[var(--accent)] px-8 py-3 rounded-full text-sm font-medium hover:bg-[var(--accent-light)] transition-colors"
          >
            Utforska stigarna
          </a>
          <a
            href="#om-oss"
            className="border border-white text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-[var(--accent)] transition-colors"
          >
            Om oss
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs tracking-widest uppercase">Scrolla</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}
