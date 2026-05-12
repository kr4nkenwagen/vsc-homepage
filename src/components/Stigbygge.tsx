export default function Stigbygge() {
  return (
    <section id="stigbygge" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--accent)]">
              Stigbygge
            </span>
            <h2 className="mt-3 text-4xl font-bold text-[var(--foreground)] leading-tight">
              Vi skapar stigarna vi cyklar
            </h2>
            <p className="mt-6 text-[var(--muted)] leading-relaxed">
              Ända från starten har en viktig del av Växjö Stigcyklister varit
              att bygga stig anpassad för mountainbike. Stigarna och lederna vi
              byggt är av varierande typ och svårighetsgrad.
            </p>
            <p className="mt-4 text-[var(--muted)] leading-relaxed">
              Vi försöker bygga det som efterfrågas av våra medlemmar och vad vi
              tycker saknas i närområdet. I arbetet med att bygga och underhålla
              stigar är alla välkomna att hjälpa till.
            </p>
            <p className="mt-4 text-[var(--muted)] leading-relaxed">
              Nya stigar byggs hela tiden — följ oss på Facebook och Trailforks
              för senaste uppdateringarna.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.trailforks.com/region/vaxjo/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--accent-light)] text-[var(--accent)] rounded-xl px-5 py-3 text-sm font-medium hover:bg-[var(--accent)] hover:text-white transition-colors"
              >
                Trailforks →
              </a>
              <a
                href="#kontakt"
                className="bg-[var(--accent)] text-white rounded-xl px-5 py-3 text-sm font-medium hover:bg-[#1f5038] transition-colors"
              >
                Hör av dig
              </a>
            </div>
          </div>

          {/* Rules */}
          <div className="flex flex-col gap-5">
            <div className="bg-[var(--accent-light)] rounded-2xl p-6">
              <h3 className="font-semibold text-[var(--foreground)]">Allemansrätten</h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                Allemansrätten tillåter cykling på vägar, leder, stigar samt
                fritt i terrängen, så länge man inte åstadkommer nämnvärd skada
                eller olägenhet för markägaren. Tänk på att undvika blöta
                marker, våtmarker och myrar — speciellt under vår och höst.
              </p>
            </div>
            <div className="bg-[var(--accent-light)] rounded-2xl p-6">
              <h3 className="font-semibold text-[var(--foreground)]">Tillstånd & samarbete</h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                Alla stigar som Växjö Stigcyklister byggt har skett i samarbete
                med och med tillstånd av markägare. Man får inte hugga levande
                träd utan lov — men kontakta gärna markägaren om ett vindfälle
                blockerar stigen.
              </p>
            </div>
            <div className="bg-[var(--accent-light)] rounded-2xl p-6">
              <h3 className="font-semibold text-[var(--foreground)]">Naturreservat</h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                I Växjö Kommun råder cykelförbud i naturreservaten Araby och
                Skårtaryds urskog. I övriga reservat kan särskilda regler gälla
                — kontrollera alltid reservatföreskrifterna.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
