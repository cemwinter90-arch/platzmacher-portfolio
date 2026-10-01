import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--surface-card)]">
      <div className="mx-auto grid w-full max-w-[var(--container-max)] gap-[var(--space-8)] px-[var(--gutter)] py-[var(--space-12)] md:grid-cols-[1fr_auto] md:items-end md:px-[var(--gutter-lg)] md:py-[var(--space-16)]">
        <Image
          src="/brand/platzmacher-logo-mit-unterzeile.svg"
          alt="Platzmacher – Entrümpelung, Haushaltsauflösung und Räumung"
          width={1350}
          height={250}
          unoptimized
          className="h-auto w-68 max-w-full md:w-84"
        />

        <div className="grid gap-[var(--space-4)] md:justify-items-end">
          <nav aria-label="Rechtliches">
            <ul className="flex flex-wrap gap-x-[var(--space-6)] gap-y-[var(--space-3)]">
              <li>
                <Link
                  href="/impressum/"
                  className="text-[length:var(--text-small)] text-[var(--text-muted)] hover:text-[var(--text-link-hover)] focus-visible:shadow-[var(--shadow-focus)] focus-visible:outline-none"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz/"
                  className="text-[length:var(--text-small)] text-[var(--text-muted)] hover:text-[var(--text-link-hover)] focus-visible:shadow-[var(--shadow-focus)] focus-visible:outline-none"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </nav>
          <p className="text-[length:var(--text-caption)] text-[var(--text-muted)]">
            Website gestaltet und umgesetzt von Kenny Winter
          </p>
        </div>
      </div>
    </footer>
  );
}
