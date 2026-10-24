"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="px-5 py-28 md:py-40">
      <div className="mx-auto max-w-3xl">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-signal">
          Something failed
        </p>
        <h1 className="mt-4 text-5xl">This page did not load.</h1>
        <p className="mt-4 text-lg text-ink-soft">
          Try again. If it keeps happening, use the contact page once you can.
        </p>
        <button
          type="button"
          onClick={reset}
          className="btn-signal mt-8 inline-flex min-h-12 items-center bg-signal px-5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-sheet"
        >
          Try again
        </button>
      </div>
    </section>
  );
}
