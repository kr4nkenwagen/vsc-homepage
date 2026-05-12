"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const stigomraden = [
  { href: "/ekeberg", label: "Ekeberg" },
  { href: "/notteryd", label: "Notteryd" },
];

const anchorLinks = [
  { anchor: "stigar", label: "Stigar" },
  { anchor: "stigbygge", label: "Stigbygge" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [stigOpen, setStigOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const href = (anchor: string) => (isHome ? `#${anchor}` : `/#${anchor}`);
  const homeHref = isHome ? "#top" : "/";

  const navItems = [
    ...anchorLinks.map((l) => ({ href: href(l.anchor), label: l.label })),
    { href: "/media", label: "Media" },
    { href: "/att-cykla-i-skogen", label: "Att cykla i skogen" },
    { href: href("om-oss"), label: "Om oss" },
    { href: "/styrelsen", label: "Styrelsen" },
    { href: href("kontakt"), label: "Kontakt" },
  ];

  const linkClass = scrolled
    ? "text-sm font-semibold text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
    : "text-sm font-semibold text-white/80 hover:text-white transition-colors";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href={homeHref} className="flex items-center">
          <Image
            src="/logo.png"
            alt="Växjö Stigcyklister"
            width={503}
            height={390}
            className={`h-10 w-auto transition-all duration-300 ${scrolled ? "brightness-0" : ""}`}
            priority
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {/* Stigguide dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setStigOpen(true)}
            onMouseLeave={() => setStigOpen(false)}
          >
            <button className={`${linkClass} flex items-center gap-1`}>
              Stigguide
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
                className={`transition-transform ${stigOpen ? "rotate-180" : ""}`}
              >
                <path d="M6 8L1 3h10L6 8z" />
              </svg>
            </button>
            {stigOpen && (
              <div className="absolute top-full left-0 pt-2">
                <div className="bg-white rounded-xl shadow-lg border border-[var(--border)] py-2 min-w-36">
                  {stigomraden.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2 text-sm font-semibold text-[var(--muted)] hover:text-[var(--accent)] hover:bg-gray-50 transition-colors"
                      onClick={() => setStigOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>

          {navItems.map((l) => (
            <li key={l.label}>
              <a href={l.href} className={linkClass}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={href("kontakt")}
              className="text-sm bg-[var(--accent)] text-white px-4 py-2 rounded-full hover:bg-[#1f5038] transition-colors"
            >
              Bli medlem
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Meny"
        >
          <span
            className={`block w-6 h-0.5 ${scrolled ? "bg-[var(--foreground)]" : "bg-white"} transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 ${scrolled ? "bg-[var(--foreground)]" : "bg-white"} transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 ${scrolled ? "bg-[var(--foreground)]" : "bg-white"} transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[var(--border)] px-6 py-4 flex flex-col gap-4">
          {/* Stigguide section */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]/60">
              Stigguide
            </span>
            {stigomraden.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="text-sm font-semibold text-[var(--muted)] hover:text-[var(--accent)] pl-2"
                onClick={() => setMenuOpen(false)}
              >
                {s.label}
              </Link>
            ))}
          </div>
          {navItems.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-[var(--muted)] hover:text-[var(--accent)]"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={href("kontakt")}
            className="text-sm bg-[var(--accent)] text-white px-4 py-2 rounded-full text-center hover:bg-[#1f5038] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Bli medlem
          </a>
        </div>
      )}
    </header>
  );
}
