import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Styrelsen – Växjö Stigcyklister",
  description: "Vi som sitter i styrelsen för Växjö Stigcyklister 2026.",
};

const members = [
  { role: "Styrelseordförande", name: "Jonas Stewén" },
  { role: "Kassör", name: "Örjan Larsson" },
  { role: "Styrelseledamot", name: "Patricio Gonzalez" },
  { role: "Styrelseledamot", name: "Claes Dahlbäck" },
  { role: "Styrelseledamot", name: "Fredrik Nilsson" },
  { role: "Styrelseledamot", name: "Jon Felix Jennemann" },
  { role: "Styrelseledamot", name: "Nils Hansson" },
];

export default function StyrelsePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <div className="relative pt-28 pb-16 px-6 overflow-hidden">
        <Image src="/hero-bg.jpg" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-8"
          >
            ← Tillbaka
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Styrelsen
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Vi som sitter i styrelsen 2026.
          </p>
        </div>
      </div>

      {/* Members */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="flex flex-col divide-y divide-[var(--border)]">
          {members.map((m) => (
            <div key={m.name} className="flex items-baseline justify-between py-5">
              <span className="text-sm text-[var(--muted)]">{m.role}</span>
              <span className="font-semibold text-[var(--foreground)]">{m.name}</span>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
