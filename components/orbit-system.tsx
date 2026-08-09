"use client";

import { useRef, type ReactNode } from "react";

/* --- crisp little tech icons (stroke, inherit color) --- */
const icons: Record<string, ReactNode> = {
  design: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20l3.5-1L18 8.5 15.5 6 5 16.5 4 20z" />
      <path d="M14 7l3 3" />
    </svg>
  ),
  code: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 7L4 12l4.5 5" />
      <path d="M15.5 7L20 12l-4.5 5" />
    </svg>
  ),
  cloud: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 18a4 4 0 01-.5-7.97A5 5 0 0116 8.5 3.5 3.5 0 0117 18H7z" />
    </svg>
  ),
  ai: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9L12 2z" />
    </svg>
  ),
};

type Sat = {
  label: string;
  icon: keyof typeof icons;
  color: string;
  radius: string;
  dur: string;
  delay: string;
};

/* panel layout — used as a self-contained square graphic */
const PANEL_SATS: Sat[] = [
  { label: "Design", icon: "design", color: "var(--color-violet)", radius: "0%", dur: "32s", delay: "0s" },
  { label: "DevOps", icon: "cloud", color: "var(--color-lime)", radius: "0%", dur: "32s", delay: "-16s" },
  { label: "Development", icon: "code", color: "var(--color-cyan)", radius: "13%", dur: "25s", delay: "-6s" },
  { label: "AI", icon: "ai", color: "var(--color-coral)", radius: "25%", dur: "19s", delay: "-13s" },
];

/* backdrop layout — 4 satellites framing a centered headline (all on the outer ring) */
const BACKDROP_SATS: Sat[] = [
  { label: "Design", icon: "design", color: "var(--color-violet)", radius: "0%", dur: "40s", delay: "0s" },
  { label: "Development", icon: "code", color: "var(--color-cyan)", radius: "0%", dur: "40s", delay: "-10s" },
  { label: "DevOps", icon: "cloud", color: "var(--color-lime)", radius: "0%", dur: "40s", delay: "-20s" },
  { label: "AI", icon: "ai", color: "var(--color-coral)", radius: "0%", dur: "40s", delay: "-30s" },
];

const RINGS = ["100%", "74%", "50%", "28%"];

const PACKETS = [
  { radius: "0%", color: "var(--color-lime)", dur: "16s", delay: "-3s" },
  { radius: "13%", color: "var(--color-cyan)", dur: "12s", delay: "-7s" },
  { radius: "25%", color: "var(--color-coral)", dur: "9s", delay: "-2s" },
];

const GLYPHS = [
  { t: "</>", top: "8%", left: "10%", size: "1.15rem", delay: "0s" },
  { t: "{ }", top: "18%", left: "86%", size: "1rem", delay: "-2s" },
  { t: "01", top: "80%", left: "14%", size: "0.95rem", delay: "-4s" },
  { t: "λ", top: "88%", left: "82%", size: "1.25rem", delay: "-1s" },
  { t: "✦", top: "42%", left: "95%", size: "0.85rem", delay: "-3s" },
];

export function OrbitSystem({ backdrop = false }: { backdrop?: boolean }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const sats = backdrop ? BACKDROP_SATS : PANEL_SATS;
  const rings = backdrop ? RINGS : RINGS.slice(0, 3);

  function onPointerMove(e: React.PointerEvent) {
    const el = stageRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const py = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    el.style.setProperty("--px", px.toFixed(3));
    el.style.setProperty("--py", py.toFixed(3));
  }
  function reset() {
    const el = stageRef.current;
    if (!el) return;
    el.style.setProperty("--px", "0");
    el.style.setProperty("--py", "0");
  }

  return (
    <div
      ref={stageRef}
      className="orbit-stage"
      style={backdrop ? { maxWidth: "none", width: "100%" } : undefined}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      aria-hidden="true"
    >
      {/* atmosphere */}
      <div className="glow animate-glow" style={{ width: "60%", height: "60%", background: "var(--color-coral)", opacity: backdrop ? 0.28 : 0.35 }} />
      <div className="glow" style={{ width: "42%", height: "42%", background: "var(--color-cyan)", opacity: 0.22, top: "6%", right: "4%" }} />
      <div className="glow" style={{ width: "38%", height: "38%", background: "var(--color-violet)", opacity: 0.2, bottom: "8%", left: "6%" }} />

      {/* HUD crosshair */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <radialGradient id="ringgrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--color-cyan)" stopOpacity="0" />
            <stop offset="70%" stopColor="var(--color-cyan)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--color-coral)" stopOpacity="0.7" />
          </radialGradient>
        </defs>
        <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeOpacity="0.04" strokeWidth="0.2" />
        <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeOpacity="0.04" strokeWidth="0.2" />
      </svg>

      {/* pulsing halos */}
      <div className="orbit-halo" style={{ width: "44%", height: "44%" }} />
      <div className="orbit-halo" style={{ width: "56%", height: "56%", animationDelay: "-2.2s" }} />

      {/* base rings */}
      {rings.map((size) => (
        <div key={size} className="orbit-ring" style={{ width: size, height: size, inset: "auto" }} />
      ))}

      {/* gradient circuit ring */}
      <svg className="absolute" style={{ width: "74%", height: "74%" }} viewBox="0 0 100 100" aria-hidden="true">
        <g style={{ transformOrigin: "50% 50%", animation: "orbit-spin 46s linear infinite" }}>
          <circle cx="50" cy="50" r="49" fill="none" stroke="url(#ringgrad)" strokeWidth="0.5" strokeDasharray="2 4" />
        </g>
      </svg>

      {/* spokes + satellites */}
      {sats.map((s) => (
        <div key={s.label} className="orbit-rotor" style={{ ["--dur" as string]: s.dur, ["--delay" as string]: s.delay }}>
          <div className="orbit-spoke" style={{ ["--radius" as string]: s.radius, ["--spoke-color" as string]: s.color }} />
          <div className="satellite" style={{ ["--radius" as string]: s.radius }}>
            <div className="satellite-inner">
              <span className="sat-chip" style={{ boxShadow: `0 0 22px -6px ${s.color}`, borderColor: `color-mix(in srgb, ${s.color} 45%, rgba(255,255,255,0.14))` }}>
                <span className="sat-icon" style={{ background: `color-mix(in srgb, ${s.color} 22%, transparent)`, color: s.color }}>
                  {icons[s.icon]}
                </span>
                {s.label}
              </span>
            </div>
          </div>
        </div>
      ))}

      {/* data packets */}
      {(backdrop ? PACKETS.slice(0, 1) : PACKETS).map((p, i) => (
        <div key={i} className="orbit-rotor" style={{ ["--dur" as string]: p.dur, ["--delay" as string]: p.delay }}>
          <div className="data-packet" style={{ ["--radius" as string]: p.radius, ["--packet-color" as string]: p.color }} />
        </div>
      ))}

      {/* comet */}
      <div className="orbit-rotor" style={{ ["--dur" as string]: "24s", ["--delay" as string]: "-9s" }}>
        <div className="comet" />
      </div>

      {/* floating glyphs */}
      {GLYPHS.map((g, i) => (
        <span key={i} className="orbit-glyph" style={{ top: g.top, left: g.left, fontSize: g.size, animationDelay: g.delay }}>
          {g.t}
        </span>
      ))}

      {/* core + moon — only in the self-contained panel variant */}
      {!backdrop && (
        <>
          <div className="orbit-core">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.4))" }}>
              <path d="M12 3c3 1.5 5 4.8 5 8.5 0 2.2-.9 4.2-2 5.5H9c-1.1-1.3-2-3.3-2-5.5C7 7.8 9 4.5 12 3z" />
              <circle cx="12" cy="10" r="1.6" fill="white" stroke="none" />
              <path d="M9 17c-1.8.6-2.5 2-2.5 4 1.6-.2 3-1 3.5-2M15 17c1.8.6 2.5 2 2.5 4-1.6-.2-3-1-3.5-2" />
            </svg>
          </div>
          <div className="orbit-moon">
            <span />
          </div>
        </>
      )}
    </div>
  );
}
