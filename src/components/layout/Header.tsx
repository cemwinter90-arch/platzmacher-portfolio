import Image from "next/image";
import Link from "next/link";

import { PrimaryButtonLink } from "@/components/ui/PrimaryButtonLink";

const navigationItems = [
  ["Leistungen", "#leistungen"],
  ["Ablauf", "#ablauf"],
  ["Einsatzgebiete", "#einsatzgebiete"],
  ["Über uns", "#ueber-uns"],
] as const;

export function Header() {
  return (
    <header className="border-b border-[var(--border-subtle)] bg-[var(--surface-page)]">
      <div className="mx-auto flex min-h-[var(--space-20)] w-full max-w-[var(--container-max)] items-center justify-between gap-[var(--space-4)] px-[var(--gutter)] md:px-[var(--gutter-lg)]">
        <Link
          href="#top"
          className="block shrink-0 focus-visible:shadow-[var(--shadow-focus)] focus-visible:outline-none"
        >
          <Image
            src="/brand/platzmacher-logo.svg"
            alt="Platzmacher"
            width={1200}
            height={220}
            preload
            unoptimized
            className="h-auto w-44 md:w-52 lg:w-60"
          />
        </Link>

        <nav className="hidden lg:block" aria-label="Hauptnavigation">
          <ul className="flex items-center gap-[var(--space-8)]">
            {navigationItems.map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-[length:var(--text-small)] font-medium text-[var(--text-body)] transition-colors duration-[var(--dur-fast)] hover:text-[var(--text-link-hover)] focus-visible:shadow-[var(--shadow-focus)] focus-visible:outline-none"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <PrimaryButtonLink href="#kontakt">
          <span className="sm:hidden">Anfrage</span>
          <span className="hidden sm:inline">Anfrage starten</span>
        </PrimaryButtonLink>
      </div>
    </header>
  );
}
