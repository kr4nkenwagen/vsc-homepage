import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { trails, getTrailBySlug, diffColor } from "@/data/trails";

export function generateStaticParams() {
  return trails.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const trail = getTrailBySlug(slug);
  if (!trail) return {};
  return {
    title: `${trail.name} – Växjö Stigcyklister`,
    description: trail.description ?? `${trail.name} i ${trail.stigomrade}.`,
  };
}

export default async function TrailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trail = getTrailBySlug(slug);
  if (!trail) notFound();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <div className="relative pt-28 pb-16 px-6 overflow-hidden">
        <Image src="/hero-bg.jpg" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative max-w-3xl mx-auto">
          <Link
            href={trail.stigomradeHref}
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-8"
          >
            ← {trail.stigomrade}
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${diffColor[trail.difficulty]}`}>
              {trail.difficulty}
            </span>
            <span className="text-xs text-white/60 bg-white/10 px-3 py-1 rounded-full">
              {trail.type}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            {trail.name}
          </h1>
          <p className="mt-3 text-sm text-white/60">
            Stigområde:{" "}
            <Link href={trail.stigomradeHref} className="underline hover:text-white">
              {trail.stigomrade}
            </Link>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16 flex flex-col gap-10">

        {/* Description */}
        {trail.description ? (
          <div>
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">Om leden</h2>
            <p className="text-[var(--muted)] leading-relaxed">{trail.description}</p>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">Om leden</h2>
            <p className="text-[var(--muted)] leading-relaxed italic">
              Beskrivning saknas — se Trailforks för detaljer.
            </p>
          </div>
        )}

        {/* YouTube video */}
        <div>
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">Video</h2>
          {trail.youtubeId ? (
            <div className="relative w-full rounded-2xl overflow-hidden" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${trail.youtubeId}`}
                title={`${trail.name} – video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="w-full h-56 rounded-2xl border-2 border-dashed border-[var(--border)] bg-[#f9fafb] flex flex-col items-center justify-center gap-2 text-[var(--muted)]">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-30">
                <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-sm">Video kommer snart</span>
            </div>
          )}
        </div>

        {/* Map placeholder */}
        <div>
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">Karta</h2>
          <div className="w-full h-72 rounded-2xl border-2 border-dashed border-[var(--border)] bg-[#f9fafb] flex flex-col items-center justify-center gap-2 text-[var(--muted)]">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-30">
              <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 9m0 8V9m0 0L9 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-sm">Kartbild kommer snart</span>
          </div>
        </div>

        {/* Trailforks link */}
        <div>
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">Trailforks</h2>
          <a
            href={trail.trailforks}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[var(--accent)] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#1f5038] transition-colors"
          >
            Öppna {trail.name} på Trailforks →
          </a>
        </div>

      </div>

      <Footer />
    </div>
  );
}
