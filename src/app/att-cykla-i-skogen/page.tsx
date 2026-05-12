import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Att cykla i skogen – Växjö Stigcyklister",
  description:
    "Vad gäller när man cyklar i skog och natur? Lagar, regler och allemansrätten förklarade.",
};

const sections = [
  {
    title: "Generellt",
    content: (
      <>
        <p>
          Generellt vid cykling i naturen gäller allemansrätten, vilken tillåter
          cykling på vägar, leder, stigar samt fritt i terrängen. Allemansrätten
          gäller så länge man inte åstadkommer &ldquo;nämnvärd skada eller
          olägenhet&rdquo; för markägaren (där skada tolkas som ekonomisk
          skada). Det finns ingen lagtext eller några rättsfall som beskriver
          vad detta är när det kommer till cykling i skogen.
        </p>
        <p className="mt-3">
          Tänk på att undvika att cykla så att det skadar naturen, detta gäller
          speciellt blöta marker, som våtmarker och myrar, samt under vår, höst
          och vinter.
        </p>
        <p className="mt-3">
          Vill du veta mer om vad allemansrätten tillåter har Håll Sverige Rent
          bra information.
        </p>
        <p className="mt-4 text-xs text-[var(--muted)]">
          Källor: Per Nilsson, Naturvårdsverket · Naturvårdsverket · Växjö
          Kommun
        </p>
      </>
    ),
  },
  {
    title: "Nationalparker och naturreservat",
    content: (
      <>
        <p>
          I nationalparker och naturreservat kan särskilda regler gälla för
          cykling, vilket regleras i reservatföreskrifter för angivet område.
          Det kan vara helt förbjudet, eller bara tillåtet på vissa leder.
        </p>
        <p className="mt-3">
          I Växjö Kommun råder cykelförbud i följande naturreservat:
        </p>
        <ul className="mt-2 ml-4 list-disc space-y-1">
          <li>Araby</li>
          <li>Skårtaryds urskog</li>
        </ul>
        <p className="mt-4 text-xs text-[var(--muted)]">
          Källor: Länsstyrelsen Kronobergs län · Naturvårdsverket
        </p>
      </>
    ),
  },
  {
    title: "Enskilda vägar",
    content: (
      <>
        <p>
          Att cykla på enskilda vägar är tillåtet. Markägare får inte sätta upp
          skyltar som förbjuder cykling.
        </p>
        <p className="mt-4 text-xs text-[var(--muted)]">
          Källa: Naturvårdsverket
        </p>
      </>
    ),
  },
  {
    title: "Motionsspår och vandringsleder",
    content: (
      <>
        <p>
          Det finns inget allmänt förbud att cykla på motionsspår och
          vandringsleder, men kommuner kan förbjuda cykling i exempelvis
          elljusspår, motionsspår och ridstigar. Tänk på att de är anlagda för
          dem som går eller springer — ta det lugnt och räkna med att gångare
          och löpare har företräde.
        </p>
        <p className="mt-3">
          I Växjö Kommun råder cykelförbud på alla kommunens elljusspår:
        </p>
        <ul className="mt-2 ml-4 list-disc grid sm:grid-cols-2 gap-x-6 gap-y-1">
          <li>Araby (2,4 km)</li>
          <li>Fylleryd (5,0 km)</li>
          <li>Kvälleberg (3,0 km)</li>
          <li>Teleborg (2,0 km)</li>
          <li>Brittatorp (2,7 km)</li>
          <li>Furuby (0,8 km)</li>
          <li>Gemla (1,6 km)</li>
          <li>Ingelstad (1,3 km)</li>
          <li>Lammhult (1,6 km)</li>
          <li>Rottne (1,6 km)</li>
          <li>Åryd (1,0 km)</li>
        </ul>
        <p className="mt-4 text-xs text-[var(--muted)]">
          Källor: Naturvårdsverket · Växjö Kommun – Elljusspår · Växjö Runt
        </p>
      </>
    ),
  },
  {
    title: "Stigbygge och stigfixande",
    content: (
      <>
        <p>
          Allemansrätten innebär att man tillfälligt, försiktigt och
          hänsynsfullt får uppehålla sig på någon annans mark utan att fråga
          markägaren om lov. Man får inte bryta, hugga eller skära kvistar av
          levande träd och buskar (förbjudet enligt Brottsbalken 12 kap 2 §),
          och man får inte såga av träd på egen hand utan lov av
          markägaren/fastighetsägaren.
        </p>
        <p className="mt-3">
          Om ett vindfälle blir liggande länge efter exempelvis en storm kan man
          kontakta markägaren och fråga om man får såga av stocken och öppna
          stigen. Det är generellt inte tillåtet att bygga hopp eller hinder.
          Inom naturreservat gäller samma regler om inget annat anges.
        </p>
      </>
    ),
  },
];

export default function AttCyklaISkogenPage() {
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
            Att cykla i skogen
          </h1>
          <p className="mt-4 text-lg text-white/80 leading-relaxed">
            Vad gäller egentligen när man cyklar i skog och natur? Vad säger
            lagar och regler? Vi har försökt att sammanställa det lite enkelt
            här.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16 flex flex-col gap-12">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
              {s.title}
            </h2>
            <div className="text-[var(--muted)] leading-relaxed">
              {s.content}
            </div>
            <div className="mt-8 border-b border-[var(--border)]" />
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
