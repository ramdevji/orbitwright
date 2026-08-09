"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";
import { Wordmark } from "@/components/wordmark";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(11,14,20,0.72)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid var(--color-ink-line)" : "1px solid transparent",
      }}
    >
      <div className="container-x flex items-center justify-between py-4">
        <Link href="/" aria-label="OrbitWright home" className="shrink-0">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[color:var(--color-fog)] transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/#contact" className="btn btn-primary !py-2.5 !px-5 text-sm">
            Write to us
          </Link>
        </div>

        {/* mobile toggle */}
        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-ink-line)]"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-4">
            <span
              className="absolute left-0 h-0.5 w-4 bg-white transition-all"
              style={{ top: open ? "5px" : "0", transform: open ? "rotate(45deg)" : "none" }}
            />
            <span
              className="absolute left-0 top-1.5 h-0.5 w-4 bg-white transition-all"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="absolute left-0 h-0.5 w-4 bg-white transition-all"
              style={{ top: open ? "5px" : "12px", transform: open ? "rotate(-45deg)" : "none" }}
            />
          </span>
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden">
          <div
            className="container-x flex flex-col gap-1 pb-6"
            style={{ background: "rgba(11,14,20,0.96)", backdropFilter: "blur(14px)" }}
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-lg text-[color:var(--color-fog)] hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-3 w-full"
            >
              Write to us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
