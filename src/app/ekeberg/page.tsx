import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { trails, diffColor } from "@/data/trails";

const ekebergTrails = trails.filter((t) => t.stigomrade === "Ekeberg");

export const metadata: Metadata = {
  title: "Ekeberg – Växjö Stigcyklister",
  description:
    "Stigområde Ekeberg i Växjö. Här hittar du alla stigar i området — från flowy XC till teknisk enduro.",
};


export default function EkebergPage() {
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
            Ekeberg
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl leading-relaxed">
            Ekeberg är ett av våra mest kompletta stigområden i Växjö med spår
            för alla nivåer — från flowy XC till teknisk enduro med drops och
            stenkistor.
          </p>
          <a
            href="https://www.trailforks.com/region/ekeberg-13422/trails/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-white text-[var(--accent)] px-6 py-3 rounded-full text-sm font-medium hover:bg-[var(--accent-light)] transition-colors"
          >
            Öppna Ekeberg på Trailforks →
          </a>
        </div>
      </div>

      {/* Trails */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-[var(--foreground)]">
            Stigar ({ekebergTrails.length})
          </h2>
          <div className="flex items-center gap-2 text-xs font-medium">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full">Grön</span>
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full">Blå</span>
            <span className="bg-red-500 text-white px-3 py-1 rounded-full">Röd</span>
            <span className="bg-gray-900 text-white px-3 py-1 rounded-full">Svart</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ekebergTrails.map((t) => (
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
              {t.description ? (
                <p className="text-sm text-[var(--muted)] leading-relaxed flex-1">{t.description}</p>
              ) : (
                <p className="text-sm text-[var(--muted)]/60 italic flex-1">Se ledsidan för detaljer</p>
              )}
              <span className="text-xs text-[var(--accent)] font-medium mt-auto">Läs mer →</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] h-96">
          <iframe
            title="Karta över Ekeberg"
            src="https://www.openstreetmap.org/export/embed.html?bbox=14.8069,56.8414,14.8869,56.8914&layer=cyclemap&marker=56.8664,14.8469"
            className="w-full h-full"
            loading="lazy"
          />
          <a
            href="https://www.trailforks.com/region/ekeberg-13422/"
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
