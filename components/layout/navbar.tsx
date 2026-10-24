"use client";

import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/logo";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { isActivePath, navItems } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function NavbarFallback() {
  return (
    <header className="border-b border-line bg-cloud">
      <div className="mx-auto flex h-16 max-w-[1320px] items-center px-5 md:h-[4.5rem] md:px-8">
        <div className="h-7 w-32 bg-mist" />
      </div>
    </header>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const open = menuPath === pathname;
  const triggerRef = useRef<HTMLButtonElement>(null);

  const close = useCallback((restoreFocus = true) => {
    setMenuPath(null);
    if (restoreFocus) triggerRef.current?.focus();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cloud/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between px-5 md:h-[4.5rem] md:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-[0.78rem] font-medium tracking-[0.04em]",
                  active ? "text-signal" : "text-ink hover:text-signal",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="btn-signal hidden min-h-11 items-center bg-signal px-4 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-sheet transition-colors hover:bg-ink md:inline-flex"
          >
            Start a project
          </Link>
          <button
            ref={triggerRef}
            type="button"
            className="inline-flex min-h-11 items-center px-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setMenuPath(pathname)}
          >
            Menu
          </button>
        </div>
      </div>
      <MobileMenu open={open} pathname={pathname} onClose={close} />
    </header>
  );
}
