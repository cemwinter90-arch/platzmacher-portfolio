import Image from "next/image";

import { SectionHeading } from "@/components/ui/SectionHeading";

export function ResultsSection() {
  return (
    <section
      id="ergebnis"
      className="border-t border-[var(--border-subtle)] bg-[var(--surface-muted)]"
      aria-labelledby="results-title"
    >
      <div className="mx-auto w-full max-w-[var(--container-max)] px-[var(--gutter)] py-[var(--section-y-mobile)] md:px-[var(--gutter-lg)] md:py-[var(--section-y)]">
        <SectionHeading
          id="results-title"
          eyebrow="ERGEBNIS"
          title="Vom vollen Raum zur klaren Übergabe."
          description="Eine strukturierte Räumung schafft Übersicht und bereitet das Objekt auf den vereinbarten Übergabezustand vor."
          display
        />

        <div className="mt-[var(--space-10)] grid gap-[var(--grid-gap)] md:grid-cols-2 lg:gap-[var(--grid-gap-lg)]">
          <figure>
            <figcaption className="mb-[var(--space-3)] text-[length:var(--text-caption)] font-semibold tracking-[var(--ls-overline)] text-[var(--text-body)] uppercase">
              Beispiel vorher
            </figcaption>
            <div className="aspect-[4/3] overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-subtle)] bg-[var(--surface-card)] shadow-[var(--shadow-xs)]">
              <Image
                src="/images/platzmacher-wohnzimmer-vorher.png"
                alt="Illustrative Darstellung eines gefüllten Wohnzimmers vor einer Räumung."
                width={1448}
                height={1086}
                sizes="(min-width: 1280px) 552px, (min-width: 768px) calc(50vw - 48px), calc(100vw - 48px)"
                className="h-full w-full object-cover"
              />
            </div>
          </figure>

          <figure>
            <figcaption className="mb-[var(--space-3)] text-[length:var(--text-caption)] font-semibold tracking-[var(--ls-overline)] text-[var(--text-body)] uppercase">
              Beispiel nachher
            </figcaption>
            <div className="aspect-[4/3] overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-subtle)] bg-[var(--surface-card)] shadow-[var(--shadow-xs)]">
              <Image
                src="/images/platzmacher-wohnzimmer-nachher.png"
                alt="Illustrative Darstellung eines geordneten Wohnzimmers nach einer Räumung."
                width={1448}
                height={1086}
                sizes="(min-width: 1280px) 552px, (min-width: 768px) calc(50vw - 48px), calc(100vw - 48px)"
                className="h-full w-full object-cover"
              />
            </div>
          </figure>
        </div>

        <p className="mt-[var(--space-5)] text-[length:var(--text-caption)] leading-[var(--lh-body)] text-[var(--text-muted)]">
          Illustrative Darstellung – keine echte Kundenreferenz.
        </p>
      </div>
    </section>
  );
}
