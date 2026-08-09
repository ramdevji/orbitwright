"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Reveal — fades/rises children into view on scroll using a single
 * IntersectionObserver. No animation library; ~0 runtime cost.
 * Pairs with the [data-reveal] CSS in globals.css.
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "span";
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Component = Tag as "div";
  return (
    <Component
      ref={ref as React.Ref<HTMLDivElement>}
      data-reveal=""
      className={className}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}
