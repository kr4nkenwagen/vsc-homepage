"use client";

import { useState, FormEvent } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
  interest: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    interest: "member",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: wire up to a form backend (e.g. Formspree, Resend, or email service)
    setSubmitted(true);
  }

  return (
    <section id="kontakt" className="py-24 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--accent)]">
              Kontakt & Medlemskap
            </span>
            <h2 className="mt-3 text-4xl font-bold text-[var(--foreground)] leading-tight">
              Hör av dig eller bli medlem
            </h2>
            <p className="mt-6 text-[var(--muted)] leading-relaxed">
              Har du frågor, vill rida med oss eller hjälpa till att bygga
              stigar? Fyll i formuläret så återkommer vi.
            </p>

            {/* Membership box */}
            <div className="mt-8 bg-[var(--accent-light)] rounded-2xl p-6">
              <h3 className="font-semibold text-[var(--accent)]">
                Bli medlem 2026
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                Swisha medlemsavgiften till{" "}
                <span className="font-medium text-[var(--foreground)]">
                  123 25 80 181
                </span>{" "}
                och ange ditt namn och e-postadress i meddelandefältet.
                Bekräftelse skickas inom ett par dagar.
              </p>
              <ul className="mt-3 text-sm text-[var(--muted)] space-y-1">
                <li>
                  <span className="font-medium text-[var(--foreground)]">
                    200 kr
                  </span>{" "}
                  — vuxna
                </li>
                <li>
                  <span className="font-medium text-[var(--foreground)]">
                    100 kr
                  </span>{" "}
                  — ungdomar under 18 år
                </li>
              </ul>
              <p className="mt-3 text-xs text-[var(--muted)] leading-relaxed">
                Växjö Stigcyklister är anslutna till Svenska Cykelförbundet.
                För tävlingslicens, mejla ditt personnummer till{" "}
                <a
                  href="mailto:vaxjostigcyklister@gmail.com"
                  className="underline hover:text-[var(--accent)]"
                >
                  vaxjostigcyklister@gmail.com
                </a>{" "}
                i samband med betalning.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-light)] flex items-center justify-center shrink-0 text-[var(--accent)]">
                  ✉
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--foreground)]">
                    E-post
                  </p>
                  <a
                    href="mailto:vaxjostigcyklister@gmail.com"
                    className="text-sm text-[var(--muted)] hover:text-[var(--accent)]"
                  >
                    vaxjostigcyklister@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-light)] flex items-center justify-center shrink-0 text-[var(--accent)]">
                  📍
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--foreground)]">
                    Plats
                  </p>
                  <p className="text-sm text-[var(--muted)]">
                    Växjö, Kronobergs län, Sverige
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-light)] flex items-center justify-center shrink-0 text-[var(--accent)]">
                  📲
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--foreground)]">
                    Facebook
                  </p>
                  <a
                    href="https://www.facebook.com/vaxjostigcyklister/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--muted)] hover:text-[var(--accent)]"
                  >
                    facebook.com/vaxjostigcyklister
                  </a>
                  <p className="text-xs text-[var(--muted)] mt-0.5">
                    Info om tisdagscykling och stigbyggedagar
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl border border-[var(--border)] p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-[var(--accent-light)] flex items-center justify-center mx-auto text-2xl text-[var(--accent)]">
                  ✓
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--foreground)]">
                  Tack för ditt meddelande!
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Vi återkommer så snart vi kan.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[var(--foreground)] mb-1.5"
                  >
                    Namn
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Förnamn Efternamn"
                    className="w-full border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[var(--foreground)] mb-1.5"
                  >
                    E-post
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="din@epost.se"
                    className="w-full border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-medium text-[var(--foreground)] mb-1.5"
                  >
                    Jag är intresserad av
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className="w-full border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--foreground)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)]"
                  >
                    <option value="member">Bli medlem</option>
                    <option value="ride">Tisdagscykling</option>
                    <option value="trailbuild">Stigbygge</option>
                    <option value="trip">Resor & tävlingar</option>
                    <option value="other">Annat</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[var(--foreground)] mb-1.5"
                  >
                    Meddelande
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Skriv gärna lite om dig själv..."
                    className="w-full border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[var(--accent)] text-white py-3 rounded-xl text-sm font-medium hover:bg-[#1f5038] transition-colors"
                >
                  Skicka meddelande
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
