"use client";

import { useEffect, useRef, useState } from "react";

/* Visible ascent trail (rocket paints this); FLIGHT adds the off-screen exit. */
const TRAIL = "M70 326 C 96 246 140 204 262 188 C 390 172 502 132 600 92";
const FLIGHT = TRAIL + " C 636 82 664 52 720 -6";

const STEPS = [
  { t: 0.2, color: "var(--color-coral)", n: "1", label: "Discovery & blueprint", kt: "0;0.06;0.09;0.9;1" },
  { t: 0.44, color: "var(--color-cyan)", n: "2", label: "Design & build", kt: "0;0.16;0.19;0.9;1" },
  { t: 0.62, color: "var(--color-lime)", n: "3", label: "QA & deploy", kt: "0;0.25;0.28;0.9;1" },
];

/**
 * Launch sequence — blends fully into the page (only soft circular glows, no
 * rectangular fill / frame). Rocket paints a bright self-drawing trail; the
 * three waypoints (placed exactly on the path) light up one-by-one; on arrival
 * the planet, orbit ring + satellite materialise (kept well inside the frame);
 * the rocket flies off. Loops.
 */
export function LaunchSequence() {
  const trailRef = useRef<SVGPathElement>(null);
  const [pts, setPts] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const p = trailRef.current;
    if (!p) return;
    try {
      const len = p.getTotalLength();
      setPts(STEPS.map((s) => {
        const pt = p.getPointAtLength(len * s.t);
        return { x: pt.x, y: pt.y };
      }));
    } catch {
      /* no-op */
    }
  }, []);

  return (
    <svg
      viewBox="0 0 740 360"
      className="block h-auto w-full"
      role="img"
      aria-label="A rocket launches, three steps light up as it climbs, then it deploys a satellite that slowly orbits the planet"
    >
      <defs>
        <linearGradient id="ls-trail" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#ff5a36" />
          <stop offset="0.5" stopColor="#ffb54a" />
          <stop offset="1" stopColor="#37e0d0" />
        </linearGradient>
        <linearGradient id="ls-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#aeb8c8" />
        </linearGradient>
        <radialGradient id="ls-flame" cx="80%" cy="50%" r="70%">
          <stop offset="0" stopColor="#fff7d6" />
          <stop offset="0.4" stopColor="#ffd23f" />
          <stop offset="0.8" stopColor="#ff6b4a" />
          <stop offset="1" stopColor="#ff6b4a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ls-planet" cx="34%" cy="28%" r="82%">
          <stop offset="0" stopColor="#ffe9c2" />
          <stop offset="0.35" stopColor="#ff9d5e" />
          <stop offset="0.7" stopColor="#e2511f" />
          <stop offset="1" stopColor="#5e1c10" />
        </radialGradient>
        <radialGradient id="ls-atmo" cx="50%" cy="50%" r="50%">
          <stop offset="45%" stopColor="#ff8f5e" stopOpacity="0" />
          <stop offset="72%" stopColor="#ff8f5e" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ff8f5e" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ls-gCoral" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#ff6b4a" stopOpacity="0.42" />
          <stop offset="100%" stopColor="#ff6b4a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ls-gViolet" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#7b6bff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#7b6bff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ls-gLime" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#d7f75b" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#d7f75b" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ls-panel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7fe3da" />
          <stop offset="1" stopColor="#2b8f86" />
        </linearGradient>
        <filter id="ls-glow" x="-70%" y="-70%" width="240%" height="240%">
          <feGaussianBlur stdDeviation="3.4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="ls-bloom" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="7" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* no background wash — the scene sits directly on the page background so it blends */}

      {/* stars */}
      <g fill="#fff">
        <circle cx="120" cy="54" r="1.4"><animate attributeName="opacity" values="0.15;1;0.15" dur="3s" repeatCount="indefinite" /></circle>
        <circle cx="300" cy="38" r="1"><animate attributeName="opacity" values="0.15;1;0.15" dur="2.4s" begin="-1s" repeatCount="indefinite" /></circle>
        <circle cx="480" cy="32" r="1.5"><animate attributeName="opacity" values="0.15;1;0.15" dur="3.3s" begin="-1.7s" repeatCount="indefinite" /></circle>
        <circle cx="690" cy="200" r="1.2"><animate attributeName="opacity" values="0.15;1;0.15" dur="2.8s" begin="-0.6s" repeatCount="indefinite" /></circle>
        <circle cx="240" cy="110" r="1"><animate attributeName="opacity" values="0.15;1;0.15" dur="3.1s" begin="-2.2s" repeatCount="indefinite" /></circle>
        <circle cx="96" cy="150" r="1.1"><animate attributeName="opacity" values="0.15;1;0.15" dur="2.7s" begin="-0.9s" repeatCount="indefinite" /></circle>
        <circle cx="620" cy="70" r="1"><animate attributeName="opacity" values="0.15;1;0.15" dur="3.6s" begin="-1.4s" repeatCount="indefinite" /></circle>
      </g>

      {/* hidden flight path for rocket motion */}
      <path id="ls-flight" fill="none" stroke="none" d={FLIGHT} />

      {/* invisible path — used only to place the waypoints exactly along the rocket's route (no visible line) */}
      <path ref={trailRef} d={TRAIL} fill="none" stroke="none" />

      {/* waypoint dots + step cards — placed EXACTLY on the path */}
      {pts.map((pt, i) => (
        <g key={i}>
          <circle cx={pt.x} cy={pt.y} r="6.5" fill={STEPS[i].color} filter="url(#ls-glow)">
            <animate attributeName="opacity" values="0;0;1;1;0" keyTimes={STEPS[i].kt} dur="9s" repeatCount="indefinite" />
          </circle>
          <g transform={`translate(${pt.x - 73} ${pt.y + 16})`} opacity="0">
            <animate attributeName="opacity" values="0;0;1;1;0" keyTimes={STEPS[i].kt} dur="9s" repeatCount="indefinite" />
            <rect width="146" height="28" rx="8" fill="rgba(10,14,22,0.92)" stroke={STEPS[i].color} strokeOpacity="0.7" />
            <circle cx="16" cy="14" r="8.5" fill={STEPS[i].color} filter="url(#ls-glow)" />
            <text x="16" y="18" textAnchor="middle" fontSize="10" fontWeight="700" fill="#0b0e14" fontFamily="ui-monospace,monospace">{STEPS[i].n}</text>
            <text x="31" y="18" fontSize="10.5" fill="#eef2f8" fontFamily="ui-sans-serif,system-ui,sans-serif">{STEPS[i].label}</text>
          </g>
        </g>
      ))}

      {/* deploy flash on arrival */}
      <circle cx="600" cy="92" fill="#fff" filter="url(#ls-glow)">
        <animate attributeName="r" values="4;4;44;44" keyTimes="0;0.32;0.42;1" dur="9s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0;0.95;0;0" keyTimes="0;0.32;0.35;0.44;1" dur="9s" repeatCount="indefinite" />
      </circle>

      {/* 4th point — planet + orbit + satellite (materialise on arrival, centred and inside the frame) */}
      <g opacity="0">
        <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.31;0.37;0.9;1" dur="9s" repeatCount="indefinite" />
        <circle cx="600" cy="92" r="48" fill="url(#ls-atmo)" />
        <circle cx="600" cy="92" r="32" fill="none" stroke="#7fe3da" strokeOpacity="0.6" strokeWidth="1.5" strokeDasharray="3 6" filter="url(#ls-glow)">
          <animateTransform attributeName="transform" type="rotate" from="0 600 92" to="360 600 92" dur="18s" repeatCount="indefinite" />
        </circle>
        <circle cx="600" cy="92" r="17" fill="url(#ls-planet)" filter="url(#ls-bloom)" />
        <ellipse cx="594" cy="86" rx="5.5" ry="3.2" fill="#fff" opacity="0.3" />
        {/* stage 4 card — above & ahead of step 3, matching steps 1-3 */}
        <g transform="translate(527 150)">
          <rect width="146" height="28" rx="8" fill="rgba(10,14,22,0.92)" stroke="var(--color-violet)" strokeOpacity="0.7" />
          <circle cx="16" cy="14" r="8.5" fill="var(--color-violet)" filter="url(#ls-glow)" />
          <text x="16" y="18" textAnchor="middle" fontSize="10" fontWeight="700" fill="#0b0e14" fontFamily="ui-monospace,monospace">4</text>
          <text x="31" y="18" fontSize="10.5" fill="#eef2f8" fontFamily="ui-sans-serif,system-ui,sans-serif">Maintain &amp; scale</text>
        </g>
        <g>
          <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 600 92" to="360 600 92" dur="11s" repeatCount="indefinite" />
          <g transform="translate(600 60)" filter="url(#ls-glow)">
            <rect x="-11" y="-2" width="7" height="4" rx="1" fill="url(#ls-panel)" />
            <rect x="4" y="-2" width="7" height="4" rx="1" fill="url(#ls-panel)" />
            <rect x="-4" y="-3.6" width="8" height="7.2" rx="1.5" fill="#eef2f8" />
            <circle cx="0" cy="0" r="1.4" fill="var(--color-cyan)">
              <animate attributeName="opacity" values="1;0.3;1" dur="1.4s" repeatCount="indefinite" />
            </circle>
          </g>
        </g>
      </g>

      {/* rocket */}
      <g>
        <g transform="scale(1.7)">
          <path d="M-11 -5 L-30 0 L-11 5 Q-15 0 -11 -5 Z" fill="url(#ls-flame)" filter="url(#ls-glow)">
            <animateTransform attributeName="transform" type="scale" values="1 1;0.6 0.8;1 1" dur="0.13s" repeatCount="indefinite" />
          </path>
          <path d="M-11 -5 L-17 -11 L-6 -5 Z" fill="var(--color-coral)" />
          <path d="M-11 5 L-17 11 L-6 5 Z" fill="var(--color-coral)" />
          <path d="M-11 -5 L5 -5 Q15 0 5 5 L-11 5 Q-14 0 -11 -5 Z" fill="url(#ls-body)" />
          <path d="M5 -5 Q15 0 5 5 Z" fill="var(--color-coral)" />
          <line x1="-6" y1="-5" x2="-6" y2="5" stroke="#9aa6b6" strokeWidth="0.6" />
          <circle cx="-1" cy="0" r="2.4" fill="#0b1220" />
          <circle cx="-1" cy="0" r="1.7" fill="var(--color-cyan)">
            <animate attributeName="opacity" values="1;0.5;1" dur="1s" repeatCount="indefinite" />
          </circle>
        </g>
        <animateMotion dur="9s" repeatCount="indefinite" rotate="auto" calcMode="linear" keyPoints="0;1;1" keyTimes="0;0.4;1">
          <mpath href="#ls-flight" />
        </animateMotion>
        <animate attributeName="opacity" values="0;1;1;1;0;0" keyTimes="0;0.02;0.3;0.36;0.42;1" dur="9s" repeatCount="indefinite" />
      </g>
    </svg>
  );
}
