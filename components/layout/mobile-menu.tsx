"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { isActivePath, navItems } from "@/lib/navigation";

export function MobileMenu({
  open,
  pathname,
  onClose,
}: {
  open: boolean;
  pathname: string;
  onClose: (restoreFocus?: boolean) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const frame = window.requestAnimationFrame(() => closeRef.current?.focus());
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(frame);
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      ref={dialogRef}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      className="fixed inset-0 z-[60] flex flex-col bg-ink text-bone"
    >
      <div className="flex h-16 items-center justify-between border-b border-bone/15 px-5">
        <Logo tone="light" />
        <button
          ref={closeRef}
          type="button"
          className="inline-flex min-h-11 items-center px-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em]"
          onClick={onClose}
        >
          Close
        </button>
      </div>
      <nav className="flex flex-1 flex-col justify-center gap-3 px-5" aria-label="Mobile">
        {navItems.map((item) => {
          const active = isActivePath(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              onClick={() => onClose(false)}
              className="font-display text-5xl leading-none tracking-[-0.04em] text-bone"
            >
              {item.label}
              {active ? <span className="ml-3 text-flare">●</span> : null}
            </Link>
          );
        })}
      </nav>
      <div className="px-5 pb-8">
        <Link
          href="/contact"
          onClick={() => onClose(false)}
          className="btn-signal inline-flex min-h-12 w-full items-center justify-center bg-signal px-5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-sheet"
        >
          Start a brief
        </Link>
      </div>
    </div>,
    document.body,
  );
}
