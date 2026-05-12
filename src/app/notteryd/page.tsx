import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { trails as allTrails, diffColor } from "@/data/trails";

const notteryTrails = allTrails.filter((t) => t.stigomrade === "Notteryd");

export const metadata: Metadata = {
  title: "Notteryd – Växjö Stigcyklister",
  description:
    "Stigområde Notteryd i Växjö. Elva stigar med karaktär — se detaljer och GPX på Trailforks.",
};

const TRAILFORKS = "https://www.trailforks.com/region/notteryd/";

export default function NotteryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <div className="relative pt-28 pb-16 px-6 overflow-hidden">
        <Image src="/hero-bg.jpg" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-8"
          >
            ← Tillbaka
          </Link>
          <span className="block text-xs font-semibold tracking-[0.2em] uppercase text-white/60 mb-3">
            Stigområde
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Notteryd
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl leading-relaxed">
            Notteryd är ett stigområde med elva leder och en tydlig karaktär.
            Fullständiga kartor, GPX-filer och svårighetsgrader hittar du på
            Trailforks.
          </p>
          <a
            href={TRAILFORKS}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-white text-[var(--accent)] px-6 py-3 rounded-full text-sm font-medium hover:bg-[var(--accent-light)] transition-colors"
          >
            Öppna Notteryd på Trailforks →
          </a>
        </div>
      </div>

      {/* Trails */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">
          Stigar ({notteryTrails.length})
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {notteryTrails.map((t) => (
            <Link
              key={t.slug}
              href={`/leder/${t.slug}`}
              className="group bg-white border border-[var(--border)] rounded-2xl p-6 flex flex-col gap-3 hover:shadow-md hover:border-[var(--accent)]/30 transition-all"
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
              <p className="text-sm text-[var(--muted)]/60 italic flex-1">Se ledsidan för detaljer</p>
              <span className="text-xs text-[var(--accent)] font-medium mt-auto">Läs mer →</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] h-96">
          <iframe
            title="Karta över Notteryd"
            src="https://www.openstreetmap.org/export/embed.html?bbox=14.75,56.80,14.95,56.90&layer=cyclemap"
            className="w-full h-full"
            loading="lazy"
          />
          <a
            href={TRAILFORKS}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 bg-[var(--accent)] text-white text-xs font-medium px-4 py-2 rounded-full shadow-md hover:bg-[#1f5038] transition-colors"
          >
            Öppna i Trailforks →
          </a>
        </div>
        <p className="mt-2 text-xs text-[var(--muted)] text-center">
          Kartdata ©{" "}
          <a
            href="https://www.openstreetmap.org/copyright"
            className="underline hover:text-[var(--accent)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenStreetMap
          </a>{" "}
          bidragsgivare
        </p>
      </div>

      <Footer />
    </div>
  );
}
