import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Magnetic } from "@/components/magnetic";
import { OrbitSystem } from "@/components/orbit-system";
import { LaunchSequence } from "@/components/launch-sequence";
import type { ReactNode } from "react";
import {
  pillars,
  process,
  pedigree,
  packages,
  founders,
  work,
  faqs,
  site,
} from "@/lib/content";

/* small tech icons for the service pillars */
const pillarIcons: Record<string, ReactNode> = {
  design: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20l3.5-1L18 8.5 15.5 6 5 16.5 4 20z" />
      <path d="M14 7l3 3" />
    </svg>
  ),
  development: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 7L4 12l4.5 5M15.5 7L20 12l-4.5 5" />
    </svg>
  ),
  devops: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 18a4 4 0 01-.5-7.97A5 5 0 0116 8.5 3.5 3.5 0 0117 18H7z" />
    </svg>
  ),
  ai: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9L12 2z" />
    </svg>
  ),
};

/* decorative in-card starfield */
function CardStars() {
  return <div className="card-stars starfield" aria-hidden="true" />;
}

/* atmospheric backdrop for a section: faint stars + soft accent glows */
function SectionAtmos({ glows = [] }: { glows?: { color: string; style: React.CSSProperties }[] }) {
  return (
    <div className="section-atmos" aria-hidden="true">
      <div className="stars starfield" />
      {glows.map((g, i) => (
        <div key={i} className="sglow" style={{ background: g.color, ...g.style }} />
      ))}
    </div>
  );
}

/* editorial section heading with a big ghost index number behind it */
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`relative ${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      <Reveal>
        <div className="relative z-10">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="display-lg mt-4">{title}</h2>
          {subtitle && <p className="mt-5 text-lg text-fog">{subtitle}</p>}
        </div>
      </Reveal>
    </div>
  );
}

/* ============================================================ HERO */
export function Hero() {
  return (
    <section className="relative overflow-hidden grain">
      <div className="aurora" aria-hidden="true" />
      <div className="starfield absolute inset-0 opacity-60" aria-hidden="true" />

      <div className="container-x relative grid items-center gap-12 pb-16 pt-32 md:pt-40 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24">
        <div>
          <Reveal>
            <span className="pill">
              <span className="h-2 w-2 rounded-full bg-lime" style={{ boxShadow: "0 0 10px var(--color-lime)" }} />
              One team · idea → orbit
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="display-xl mt-6">
              We build it.
              <br />
              We launch it.
              <br />
              <span className="text-gradient">We keep it in orbit.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-fog">
              One senior engineering team that designs, builds, ships, and maintains your
              product — with <span className="text-white">AI built in</span>. No hand-offs, no
              four-freelancer circus. Just your product, in production, fast.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Magnetic href="/#contact" className="btn btn-primary">
                Write to us →
              </Magnetic>
              <Magnetic href="/#work" className="btn btn-ghost">
                See our work
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-12 flex flex-wrap gap-3">
              {[
                ["4–6 wks", "to a live MVP", "var(--color-lime)"],
                ["Fixed", "price, no surprises", "var(--color-cyan)"],
                ["AI-native", "team ex-Meta & CRED", "var(--color-coral)"],
              ].map(([big, small, c]) => (
                <div key={big} className="glass rounded-[var(--radius-md)] px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full" style={{ background: c, boxShadow: `0 0 10px ${c}` }} />
                    <span className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">
                      {big}
                    </span>
                  </div>
                  <div className="mt-0.5 text-xs text-fog-dim">{small}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <OrbitSystem />
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================ TRUST STRIP */
export function TrustStrip() {
  const items = [...pedigree, ...pedigree];
  return (
    <section className="border-y border-[color:var(--color-ink-line)] bg-[color:var(--color-ink-soft)] py-8">
      <div className="container-x">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-fog-dim">
          Our team has shipped production software at
        </p>
      </div>
      <div className="marquee-mask overflow-hidden">
        <div className="marquee">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="inline-flex items-center gap-2.5 whitespace-nowrap font-[family-name:var(--font-heading)] text-xl font-semibold text-[color:var(--color-fog)]"
            >
              <span style={{ color: ["var(--color-coral)", "var(--color-cyan)", "var(--color-lime)", "var(--color-violet)"][i % 4] }}>
                ✦
              </span>
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================ PROBLEM */
export function Problem() {
  return (
    <section className="section isolate">
      <SectionAtmos glows={[{ color: "var(--color-coral)", style: { top: "10%", right: "-8%" } }]} />
      <div className="container-x relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div>
            <span className="eyebrow">The usual way is broken</span>
            <h2 className="display-lg mt-4">
              Four freelancers.
              <br />
              Four excuses.
              <br />
              <span className="text-fog-dim">Zero accountability.</span>
            </h2>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="space-y-5">
            <p className="text-lg leading-relaxed text-fog">
              A designer who doesn&apos;t talk to the developer. A dev who can&apos;t deploy. A
              &ldquo;DevOps guy&rdquo; who ghosts you at launch. And nobody who owns the outcome.
            </p>
            <div className="glass rounded-[var(--radius-lg)] p-6">
              <p className="text-lg font-medium text-white">
                OrbitWright is the opposite: <span className="text-gradient">one team</span> that
                owns your product from first pixel to production — and stays on after launch.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================ PILLARS / SERVICES */
export function Services() {
  return (
    <section id="services" className="section isolate">
      <SectionAtmos
        glows={[
          { color: "var(--color-violet)", style: { top: "2%", left: "-8%" } },
          { color: "var(--color-cyan)", style: { bottom: "4%", right: "-6%" } },
        ]}
      />
      <div className="container-x relative z-10">
        <SectionHeading
          index="02"
          eyebrow="Four disciplines, one crew"
          title="Everything your product needs to fly"
          subtitle="Design, development, DevOps, and AI — the four satellites that keep your product in orbit. You get all of them from the same senior team."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.key} delay={i * 90}>
              <article
                className="card-orbit h-full p-6"
                style={{ ["--card-accent" as string]: p.color }}
              >
                <CardStars />                <span className="mini-orbit mb-5">
                  <span className="mini-orbit-ring" />
                  <span className="mini-orbit-ring-2" />
                  <span className="mini-orbit-rotor" />
                  <span className="mini-orbit-core">{pillarIcons[p.key]}</span>
                </span>
                <h3 className="text-xl text-white">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fog">{p.blurb}</p>
                <ul className="mt-5 space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-sm text-[color:var(--color-fog)]">
                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: p.color }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================ PROCESS */
export function Process() {
  return (
    <section id="process" className="section isolate bg-[color:var(--color-ink-soft)]">
      <SectionAtmos glows={[{ color: "var(--color-coral)", style: { top: "8%", right: "-6%" } }]} />
      <div className="container-x relative z-10">
        <SectionHeading
          index="03"
          eyebrow="The flight plan"
          title="From ignition to orbit"
          subtitle="A predictable four-stage mission. You always know what's happening, what it costs, and when you launch."
        />

        <div className="relative mt-10">
          {/* live shipping pipeline */}
          <div className="pipeline">
            <Reveal>
              <div className="mission-map">
                <LaunchSequence />
              </div>
            </Reveal>

            <div className="pipeline-grid">
              {process.map((step, i) => {
                const acc = ["var(--color-coral)", "var(--color-cyan)", "var(--color-lime)", "var(--color-violet)"][i % 4];
                return (
                  <Reveal key={step.n} delay={i * 90}>
                    <div className="pipeline-node" style={{ ["--node-accent" as string]: acc }}>
                      <span className="pipeline-dot">
                        <span className="mono text-sm font-bold">{step.n}</span>
                      </span>
                      <span className="mono mt-5 block text-xs uppercase tracking-[0.2em]" style={{ color: acc }}>
                        {step.phase}
                      </span>
                      <h3 className="mt-1.5 text-lg text-white">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-fog">{step.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* streaming deploy console */}
          <div className="deploy-log glass mt-16">
            <div className="deploy-bar">
              <span className="dot" style={{ background: "var(--color-coral)" }} />
              <span className="dot" style={{ background: "var(--color-lime)" }} />
              <span className="dot" style={{ background: "var(--color-cyan)" }} />
              <span className="deploy-title mono">ship.log</span>
              <span className="deploy-live mono">● LIVE</span>
            </div>
            <div className="deploy-viewport">
              <div className="deploy-scroll">
                {(() => {
                  const L = [
                    { k: "$", t: "git push orbit main", c: "var(--color-fog-dim)" },
                    { k: "▸", t: "build ................. ok", c: "var(--color-cyan)" },
                    { k: "▸", t: "typecheck ............. ok", c: "var(--color-cyan)" },
                    { k: "▸", t: "tests · 142 passed ✓", c: "var(--color-lime)" },
                    { k: "▸", t: "provision infra ....... ok", c: "var(--color-cyan)" },
                    { k: "▸", t: "deploy → production ... ok", c: "var(--color-lime)" },
                    { k: "●", t: "live · 100% traffic served", c: "var(--color-coral)" },
                  ];
                  return [...L, ...L].map((l, i) => (
                    <div key={i} className="deploy-line mono">
                      <span style={{ color: l.c }}>{l.k}</span> {l.t}
                    </div>
                  ));
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ AI SHOWCASE */
export function AIShowcase() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[var(--radius-2xl)] border border-[color:var(--color-ink-line)] bg-[color:var(--color-ink-card)] p-8 md:p-14">
          <div
            className="glow animate-glow"
            style={{ width: 360, height: 360, background: "var(--color-coral)", top: "-20%", right: "-6%", opacity: 0.3 }}
            aria-hidden="true"
          />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div>
                <span className="pill" style={{ borderColor: "var(--color-coral)", color: "var(--color-coral-soft)" }}>
                  ★ Our unfair advantage
                </span>
                <h2 className="display-lg mt-5">AI, actually integrated</h2>
                <p className="mt-5 text-lg leading-relaxed text-fog">
                  Most agencies bolt a chatbot on and call it &ldquo;AI.&rdquo; We ship real GenAI
                  agents, RAG search, and ML features into products — the same kind we built in
                  production at Meta. Already have a product? We wire intelligence into what you
                  already run.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {["GenAI agents & copilots", "RAG & semantic search", "Workflow automation", "Model integration & evals"].map(
                    (x) => (
                      <li key={x} className="flex items-center gap-2 text-sm text-white">
                        <span className="text-coral">◆</span>
                        {x}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={140}>
              {/* stylized agent panel */}
              <div className="rounded-[var(--radius-lg)] border border-[color:var(--color-ink-line)] bg-[color:var(--color-ink)] p-5 font-mono text-sm shadow-2xl">
                <div className="mb-4 flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-coral" />
                  <span className="h-3 w-3 rounded-full bg-lime" />
                  <span className="h-3 w-3 rounded-full bg-cyan" />
                  <span className="ml-2 text-xs text-fog-dim">orbit-agent.py</span>
                </div>
                <div className="space-y-2.5 leading-relaxed">
                  <p className="text-fog-dim"># customer asks a hard question</p>
                  <p className="text-white">
                    <span className="text-cyan">user</span> ▸ &ldquo;Where&apos;s my refund?&rdquo;
                  </p>
                  <p className="text-fog">
                    <span className="text-lime">agent</span> ▸ retrieving order + policy…
                  </p>
                  <p className="text-fog">
                    <span className="text-lime">agent</span> ▸ <span className="text-coral-soft">tool:</span> refund_status(order_id)
                  </p>
                  <p className="text-white">
                    <span className="text-lime">agent</span> ▸ resolved in <span className="text-lime">1.2s</span> ✓
                  </p>
                  <div className="mt-4 rounded-lg border border-[color:var(--color-ink-line)] bg-[color:var(--color-ink-soft)] p-3 text-xs text-fog">
                    Result in production: <span className="text-white">−80% support escalations</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ WORK */
export function Work() {
  return (
    <section id="work" className="section isolate bg-[color:var(--color-ink-soft)]">
      <SectionAtmos glows={[{ color: "var(--color-cyan)", style: { top: "6%", left: "-6%" } }]} />
      <div className="container-x relative z-10">
        <Reveal>
          <div className="relative flex flex-wrap items-end justify-between gap-6">
            <div className="relative z-10 max-w-2xl">
              <span className="eyebrow">Proof, not promises</span>
              <h2 className="display-lg mt-4">Recent missions</h2>
            </div>
            <p className="relative z-10 max-w-sm text-sm text-fog-dim">
              A snapshot of what one accountable team ships. Full case studies land as we grow.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {work.map((w, i) => (
            <Reveal key={w.title} delay={i * 100}>
              <article className="card-orbit h-full" style={{ ["--card-accent" as string]: w.accent }}>                <div
                  className="relative h-40 overflow-hidden"
                  style={{ background: `radial-gradient(120% 120% at 20% 10%, color-mix(in srgb, ${w.accent} 40%, transparent), transparent 60%)` }}
                >
                  <div className="starfield absolute inset-0 opacity-40" />
                  {/* mini orbit arc */}
                  <div
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full border"
                    style={{ borderColor: `color-mix(in srgb, ${w.accent} 40%, transparent)`, opacity: 0.5 }}
                  />
                  <span
                    className="absolute bottom-4 left-4 font-[family-name:var(--font-heading)] text-3xl font-bold"
                    style={{ color: w.accent }}
                  >
                    {w.result}
                  </span>
                </div>
                <div className="p-6">
                  <span className="pill mb-3">{w.tag}</span>
                  <h3 className="text-lg text-white">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fog">{w.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================ PRICING */
export function Pricing() {
  return (
    <section id="pricing" className="section isolate">
      <SectionAtmos
        glows={[{ color: "var(--color-lime)", style: { top: "0%", left: "50%", transform: "translateX(-50%)" } }]}
      />
      <div className="container-x relative z-10">
        <SectionHeading
          center
          index="05"
          eyebrow="Transparent by default"
          title="One build price. One care plan."
          subtitle="You approve a fixed price before we start — billed 50% upfront, then at a milestone, then on launch. After that, an optional Care Plan keeps you in orbit."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-2">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.key} delay={i * 90}>
              <article
                className="card-orbit relative flex h-full flex-col p-7"
                style={{ ["--card-accent" as string]: pkg.highlight ? "var(--color-lime)" : "var(--color-cyan)" }}
              >
                <CardStars />                {pkg.highlight && (
                  <span className="mb-3 inline-block w-fit rounded-full bg-lime px-3 py-1 text-xs font-bold text-[color:var(--color-ink)]">
                    ★ Most popular
                  </span>
                )}
                <h3 className="text-2xl text-white">{pkg.name}</h3>
                <p className="mt-1 text-sm text-fog-dim">{pkg.tagline}</p>
                <p className="mt-5 font-[family-name:var(--font-heading)] text-3xl font-bold text-white">
                  {pkg.price}{" "}
                  <span className="text-base font-normal text-fog-dim">{pkg.per}</span>
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-fog">
                      <span className="mt-0.5 text-lime">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#contact"
                  className={`btn mt-7 w-full ${pkg.highlight ? "btn-primary" : "btn-ghost"}`}
                >
                  {pkg.cta}
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================ FOUNDERS */
export function Founders() {
  return (
    <section id="team" className="section isolate bg-[color:var(--color-ink-soft)]">
      <SectionAtmos
        glows={[
          { color: "var(--color-coral)", style: { top: "6%", left: "-6%" } },
          { color: "var(--color-lime)", style: { bottom: "6%", right: "-6%" } },
        ]}
      />
      <div className="container-x relative z-10">
        <SectionHeading
          index="06"
          eyebrow="The crew"
          title="The senior team behind your build"
          subtitle="No junior hand-offs, no outsourced mystery team. You work directly with the people who built at Meta, CRED, Infosys, and MakeMyTrip."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {founders.map((f, i) => (
            <Reveal key={f.name} delay={i * 100}>
              <article
                className="card-orbit h-full p-7"
                style={{ ["--card-accent" as string]: f.accent }}
              >
                <CardStars />                <div className="flex items-center gap-4">
                  <div className="orbit-avatar">
                    <span className="orbit-avatar-dot" />
                    {f.photo ? (
                      <Image
                        src={f.photo}
                        alt={f.name}
                        width={64}
                        height={64}
                        className="h-16 w-16 rounded-full object-cover"
                        style={{ border: `2px solid ${f.accent}` }}
                      />
                    ) : (
                      <span
                        className="flex h-16 w-16 items-center justify-center rounded-full font-[family-name:var(--font-heading)] text-xl font-bold"
                        style={{ background: `color-mix(in srgb, ${f.accent} 20%, transparent)`, color: f.accent, border: `2px solid ${f.accent}` }}
                      >
                        {f.initials}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg text-white">{f.name}</h3>
                    <p className="text-sm" style={{ color: f.accent }}>
                      {f.role}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-fog">{f.bio}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {f.stack.map((s) => (
                    <span key={s} className="pill !py-1 !px-2.5 text-xs">
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================ FAQ */
export function FAQ() {
  return (
    <section className="section isolate">
      <SectionAtmos glows={[{ color: "var(--color-cyan)", style: { bottom: "8%", left: "-6%" } }]} />
      <div className="container-x relative z-10 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <div className="relative">
            <div className="relative z-10">
              <span className="eyebrow">Pre-flight questions</span>
              <h2 className="display-lg mt-4">Good to know</h2>
              <p className="mt-5 text-fog">
                Everything founders ask before we start. Still curious?{" "}
                <Link href="/#contact" className="text-cyan underline underline-offset-4">
                  Just ask us.
                </Link>
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="divide-y divide-[color:var(--color-ink-line)] border-y border-[color:var(--color-ink-line)]">
            {faqs.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-white">
                  {item.q}
                  <span className="text-cyan transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-fog">{item.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================ CTA + CONTACT */
export function CTA() {
  return (
    <section id="contact" className="section relative overflow-hidden">
      <div className="aurora" aria-hidden="true" />
      <div className="starfield absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        className="glow animate-glow"
        style={{ width: 600, height: 600, background: "var(--color-coral)", left: "50%", top: "10%", transform: "translateX(-50%)", opacity: 0.25 }}
        aria-hidden="true"
      />
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow">Ready for liftoff?</span>
            <h2 className="display-xl mt-5">
              Let&apos;s put your product <span className="text-gradient">in orbit</span>.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-fog">
              Book a free 30-minute discovery call. We&apos;ll scope your idea, give you a fixed
              price, and show you exactly how we&apos;d build it.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mx-auto mt-12 max-w-2xl rounded-[var(--radius-xl)] border border-[color:var(--color-ink-line)] bg-[color:var(--color-ink-card)] p-8 text-center sm:p-12">
            <p className="text-sm text-fog">Just send us an email — no forms, no funnels.</p>
            <a
              href={`mailto:${site.email}?subject=New%20project%20for%20OrbitWright`}
              className="mt-4 inline-block font-[family-name:var(--font-heading)] max-w-full break-words text-[clamp(1.05rem,6vw,2.25rem)] font-bold text-white underline decoration-[color:var(--color-cyan)] decoration-2 underline-offset-8 transition-colors hover:text-cyan"
            >
              {site.email}
            </a>
            <div className="mt-8">
              <a
                href={`mailto:${site.email}?subject=New%20project%20for%20OrbitWright`}
                className="btn btn-primary"
              >
                ✉ Write to us
              </a>
            </div>
            <p className="mt-6 text-sm text-fog-dim">
              Tell us what you&apos;re building — a line or two is plenty. We reply within 24 hours.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
