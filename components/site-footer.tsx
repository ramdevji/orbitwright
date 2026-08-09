import Link from "next/link";
import { nav, site } from "@/lib/content";
import { Wordmark } from "@/components/wordmark";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-[color:var(--color-ink-line)] bg-[color:var(--color-ink-soft)]">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Wordmark />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[color:var(--color-fog)]">
            {site.tagline}
          </p>
          <p className="mt-4 text-sm text-[color:var(--color-fog-dim)]">{site.email}</p>
        </div>

        <div>
          <p className="eyebrow mb-4">Explore</p>
          <ul className="flex flex-col gap-2.5 text-sm text-[color:var(--color-fog)]">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Get started</p>
          <Link href="/#contact" className="btn btn-primary">
            Write to us
          </Link>
          <p className="mt-4 text-xs leading-relaxed text-[color:var(--color-fog-dim)]">
            Serving startups worldwide. Fixed pricing, senior team, AI built in.
          </p>
        </div>
      </div>

      <div className="border-t border-[color:var(--color-ink-line)]">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-[color:var(--color-fog-dim)] sm:flex-row">
          <p>© {new Date().getFullYear()} OrbitWright. All systems go.</p>
          <p>Designed &amp; built in-house — this site is our proof of work.</p>
        </div>
      </div>
    </footer>
  );
}
