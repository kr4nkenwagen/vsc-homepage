import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MediaGrid from "@/components/MediaGrid";

export const metadata: Metadata = {
  title: "Media – Växjö Stigcyklister",
  description: "Se filmer från stigarna i Växjö — enduro, XC och tekniska leder.",
};

export default function MediaPage() {
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
            Galleri
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white">Media</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl leading-relaxed">
            Filmer från stigarna i Växjö.
          </p>
        </div>
      </div>

      {/* Video grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <MediaGrid />
      </div>

      <Footer />
    </div>
  );
}
