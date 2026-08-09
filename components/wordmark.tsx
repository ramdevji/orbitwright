/** OrbitWright wordmark — an orbit mark + name. Pure SVG, theme-aware via currentColor. */
export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <ellipse
          cx="16"
          cy="16"
          rx="14"
          ry="6"
          transform="rotate(-28 16 16)"
          stroke="var(--color-cyan)"
          strokeWidth="1.5"
          opacity="0.7"
        />
        <circle cx="16" cy="16" r="5" fill="var(--color-coral)" />
        <circle cx="16" cy="16" r="5" fill="url(#owg)" />
        <circle cx="27" cy="9.5" r="2.2" fill="var(--color-lime)" />
        <defs>
          <radialGradient id="owg" cx="0.35" cy="0.3" r="0.8">
            <stop stopColor="#ff9c85" />
            <stop offset="0.6" stopColor="#ff6b4a" />
            <stop offset="1" stopColor="#c23f24" />
          </radialGradient>
        </defs>
      </svg>
      {!compact && (
        <span
          style={{ fontFamily: "var(--font-heading)", fontWeight: 700, letterSpacing: "-0.03em" }}
          className="text-lg text-white"
        >
          Orbit<span className="text-[color:var(--color-coral)]">Wright</span>
        </span>
      )}
    </span>
  );
}
