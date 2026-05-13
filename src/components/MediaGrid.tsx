"use client";

import { useState } from "react";
import { filmer } from "@/data/filmer";

const PER_PAGE = 6;
const totalPages = Math.ceil(filmer.length / PER_PAGE);

export default function MediaGrid() {
  const [page, setPage] = useState(1);

  const start = (page - 1) * PER_PAGE;
  const visible = filmer.slice(start, start + PER_PAGE);

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8">
        {visible.map((f) => (
          <div key={f.youtubeId} className="flex flex-col gap-3">
            <div
              className="relative w-full rounded-2xl overflow-hidden"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${f.youtubeId}`}
                title="video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-12">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 rounded-full text-sm font-medium border border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            ← Föregående
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => setPage(n)}
              className={`w-9 h-9 rounded-full text-sm font-medium transition-colors ${
                n === page
                  ? "bg-[var(--accent)] text-white"
                  : "border border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
              }`}
            >
              {n}
            </button>
          ))}

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 rounded-full text-sm font-medium border border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            Nästa →
          </button>
        </div>
      )}
    </>
  );
}
