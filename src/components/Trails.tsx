import Link from "next/link";
import { trails as allTrails, diffColor } from "@/data/trails";

const featuredSlugs = [
  "el-plomo",
  "calamity-jane",
  "juleskum",
  "violpistol",
  "lord-of-the-flies",
];
const trails = featuredSlugs
  .map((s) => allTrails.find((t) => t.slug === s)!)
  .filter(Boolean);

export default function Trails() {
  return (
    <section id="stigar" className="py-24 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--accent)]">
            Stigar
          </span>
          <h2 className="mt-3 text-4xl font-bold text-[var(--foreground)]">
            Stigar vi byggt
          </h2>
          <p className="mt-4 text-[var(--muted)] max-w-xl mx-auto">
            Alla stigar är byggda i samarbete med och med tillstånd av
            markägare. Hitta fullständiga kartor och GPX-filer på Trailforks.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {trails.map((t) => (
            <Link
              key={t.slug}
              href={`/leder/${t.slug}`}
              className="group bg-white rounded-2xl p-6 border border-[var(--border)] flex flex-col gap-3 hover:shadow-md hover:border-[var(--accent)]/30 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${diffColor[t.difficulty]}`}>
                  {t.difficulty}
                </span>
                <span className="text-xs text-[var(--muted)] bg-gray-100 px-3 py-1 rounded-full">
                  {t.type}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                {t.name}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed flex-1">
                {t.description}
              </p>
              <span className="text-xs text-[var(--accent)] font-medium mt-auto">Läs mer →</span>
            </Link>
          ))}

          {/* Trailforks CTA card */}
          <div className="bg-[var(--accent)] rounded-2xl p-6 flex flex-col justify-between gap-4 text-white">
            <div>
              <h3 className="text-lg font-semibold">Fler stigar på Trailforks</h3>
              <p className="mt-2 text-sm text-white/80 leading-relaxed">
                Vi dokumenterar alla stigar vi känner till i Växjö på
                Trailforks — oavsett nivå hittar du något som passar dig.
              </p>
            </div>
            <a
              href="https://www.trailforks.com/region/vaxjo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[var(--accent)] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[var(--accent-light)] transition-colors self-start"
            >
              Öppna Trailforks →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
