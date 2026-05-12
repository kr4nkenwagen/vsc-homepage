const FB = "https://www.facebook.com/vaxjostigcyklister/";

const activities = [
  {
    title: "Tisdagscykling",
    body: "Varje tisdag träffas vi och cyklar ihop klockan 18:00 på Hemköps parkering i Högstorp. Alla är välkomna att vara med — medlem eller inte.",
    cta: null,
  },
  {
    title: "Stigbygge",
    body: "Vi bygger och underhåller stigar löpande. Vi tycker det är kul om så många som möjligt vill vara med.",
    cta: { label: "Följ oss på Facebook", href: FB },
  },
  {
    title: "Tävlingar",
    body: "Flera av våra medlemmar tävlar, framförallt i enduro. Gemensamma resor till tävlingarna i den svenska enduroserien brukar arrangeras.",
    cta: null,
  },
];

export default function About() {
  return (
    <section id="om-oss" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--accent)]">
              Om oss
            </span>
            <h2 className="mt-3 text-4xl font-bold text-[var(--foreground)] leading-tight">
              En gemenskap på två hjul
            </h2>
            <p className="mt-6 text-[var(--muted)] leading-relaxed">
              Vi är en förening för cyklister som gillar att cykla och bygga
              stig i Växjö. Föreningen arbetar aktivt med att bygga och utveckla
              stigarna i Växjö i samarbete med Växjö Kommun och andra markägare.
            </p>
            <p className="mt-4 text-[var(--muted)] leading-relaxed">
              Vi arrangerar regelbundet gemensam cykling och både kortare och
              längre gemensamma resor.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#kontakt"
                className="inline-block bg-[var(--accent-light)] text-[var(--accent)] px-6 py-3 rounded-full text-sm font-medium hover:bg-[var(--accent)] hover:text-white transition-colors"
              >
                Gå med i föreningen →
              </a>
              <a
                href={FB}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-[var(--border)] text-[var(--muted)] px-6 py-3 rounded-full text-sm font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                Facebook →
              </a>
            </div>
          </div>

          {/* Activity cards */}
          <div className="grid grid-cols-1 gap-4">
            {activities.map((a) => (
              <div
                key={a.title}
                className="bg-[var(--accent-light)] rounded-2xl px-6 py-5"
              >
                <h3 className="font-semibold text-[var(--accent)]">{a.title}</h3>
                <p className="mt-1 text-sm text-[var(--muted)] leading-relaxed">
                  {a.body}
                </p>
                {a.cta && (
                  <a
                    href={a.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs font-medium text-[var(--accent)] hover:underline"
                  >
                    {a.cta.label} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
