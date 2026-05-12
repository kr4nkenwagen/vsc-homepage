import Link from "next/link";

const areas = [
  {
    href: "/ekeberg",
    name: "Ekeberg",
    summary: "10 stigar från lätt XC till teknisk enduro.",
  },
  {
    href: "/notteryd",
    name: "Notteryd",
    summary: "11 stigar med karaktär — Babylon, Purgatory, Divine och fler.",
  },
];

export default function TrailAreas() {
  return (
    <section id="stigomraden" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--accent)]">
            Stigområden
          </span>
          <h2 className="mt-3 text-4xl font-bold text-[var(--foreground)]">
            Utforska våra områden
          </h2>
          <p className="mt-4 text-[var(--muted)] max-w-xl mx-auto">
            Vi cyklar och bygger stigar i flera områden runt Växjö. Klicka på ett
            område för att se alla leder.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {areas.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="group bg-[var(--foreground)] rounded-2xl p-8 flex flex-col justify-between gap-6 text-white hover:opacity-90 transition-opacity"
            >
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-white/40">
                  Stigområde
                </span>
                <h3 className="mt-2 text-2xl font-bold">{a.name}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  {a.summary}
                </p>
              </div>
              <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                Se alla stigar →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
