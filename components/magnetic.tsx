"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";

/**
 * Magnetic — a link/button that gently follows the cursor.
 * Disabled automatically for reduced-motion + coarse (touch) pointers.
 */
export function Magnetic({
  children,
  href,
  className = "",
  strength = 0.35,
}: {
  children: ReactNode;
  href: string;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const canMove = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el || !canMove()) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  }

  function reset() {
    const el = ref.current;
    if (el) el.style.transform = "translate(0, 0)";
  }

  return (
    <Link
      ref={ref}
      href={href}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      {children}
    </Link>
  );
}
