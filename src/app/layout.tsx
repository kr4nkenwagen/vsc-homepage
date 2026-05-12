import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Växjö Stigcyklister",
  description:
    "Mountainbikeförening i Växjö. Vi bygger och cyklar stigar i Kronobergs natur.",
  openGraph: {
    title: "Växjö Stigcyklister",
    description:
      "Mountainbikeförening i Växjö. Vi bygger och cyklar stigar i Kronobergs natur.",
    locale: "sv_SE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
