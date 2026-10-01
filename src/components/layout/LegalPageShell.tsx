import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";

interface LegalPageShellProps {
  children: ReactNode;
  eyebrow: string;
  title: string;
}

export function LegalPageShell({
  children,
  eyebrow,
  title,
}: LegalPageShellProps) {
  return (
    <div className="flex min-h-svh flex-col bg-[var(--surface-page)]">
      <header className="border-b border-[var(--border-subtle)] bg-[var(--surface-page)]">
        <div className="mx-auto flex min-h-[var(--space-20)] w-full max-w-[var(--container-max)] items-center justify-between gap-[var(--space-4)] px-[var(--gutter)] md:px-[var(--gutter-lg)]">
          <Link
            href="/"
            aria-label="Zur Startseite von Platzmacher"
            className="block shrink-0 focus-visible:shadow-[var(--shadow-focus)] focus-visible:outline-none"
          >
            <Image
              src="/brand/platzmacher-logo.svg"
              alt="Platzmacher"
              width={1200}
              height={220}
              unoptimized
              className="h-auto w-44 md:w-52"
            />
          </Link>
          <Link
            href="/"
            className="text-[length:var(--text-small)] font-semibold text-[var(--color-primary)] hover:text-[var(--text-link-hover)] focus-visible:shadow-[var(--shadow-focus)] focus-visible:outline-none"
          >
            Zur Startseite
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <article className="mx-auto w-full max-w-[var(--container-narrow)] px-[var(--gutter)] py-[var(--section-y-mobile)] md:px-[var(--gutter-lg)] md:py-[var(--section-y)]">
          <p className="text-[length:var(--text-overline)] font-semibold tracking-[var(--ls-overline)] text-[var(--text-accent)] uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-[var(--space-4)] break-words hyphens-auto [font-family:var(--font-display)] text-[length:var(--text-h1)] leading-[var(--lh-tight)] font-semibold tracking-[var(--ls-heading)] text-[var(--text-strong)]">
            {title}
          </h1>
          <div className="mt-[var(--space-10)] grid gap-[var(--space-10)] text-[length:var(--text-body-size)] leading-[var(--lh-body)] text-[var(--text-body)]">
            {children}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
