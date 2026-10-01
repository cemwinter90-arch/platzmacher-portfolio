import Image from "next/image";

import { PrimaryButtonLink } from "@/components/ui/PrimaryButtonLink";
import { SecondaryButtonLink } from "@/components/ui/SecondaryButtonLink";

const workingSteps = [
  "Objekt erfassen",
  "Umfang abstimmen",
  "Übergabe planen",
] as const;

export function HeroSection() {
  return (
    <section
      className="border-b border-[var(--border-subtle)] bg-[var(--surface-card)]"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto grid w-full max-w-[var(--container-max)] gap-[var(--space-12)] px-[var(--gutter)] py-[var(--section-y-mobile)] md:px-[var(--gutter-lg)] md:py-[var(--section-y)] lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)] lg:items-center lg:gap-[var(--space-8)]">
        <div className="hero-reveal-text lg:pr-[var(--space-4)]">
          <p className="mb-[var(--space-5)] text-[length:var(--text-overline)] font-semibold tracking-[var(--ls-overline)] text-[var(--text-accent)] uppercase">
            Entrümpelung · Haushaltsauflösung · Räumung
          </p>
          <h1
            id="hero-title"
            className="max-w-[var(--container-narrow)] [font-family:var(--font-display)] text-[length:var(--text-h1)] leading-[var(--lh-tight)] font-semibold tracking-[var(--ls-heading)] text-[var(--text-strong)]"
          >
            Räumungen, die klar geplant und zuverlässig umgesetzt werden.
          </h1>
          <p className="mt-[var(--space-6)] max-w-[var(--container-narrow)] text-[length:var(--text-body-lg)] leading-[var(--lh-body)] text-[var(--text-body)]">
            Platzmacher begleitet Sie von der ersten Abstimmung bis zur
            besenreinen Übergabe – strukturiert, diskret und nachvollziehbar.
          </p>
          <div className="mt-[var(--space-8)] flex flex-col gap-[var(--space-3)] sm:flex-row">
            <PrimaryButtonLink href="#kontakt">
              Anfrage starten
            </PrimaryButtonLink>
            <SecondaryButtonLink href="#ablauf">
              Ablauf ansehen
            </SecondaryButtonLink>
          </div>
        </div>

        <div className="hero-reveal-media grid gap-[var(--space-4)]">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[var(--radius-xl)] bg-[var(--surface-muted)] shadow-[var(--shadow-md)] sm:aspect-[4/3] lg:aspect-[5/4]">
            <Image
              src="/images/platzmacher-hero-organisierte-raeumung.png"
              alt="Zwei Mitarbeitende organisieren eine Wohnungsräumung in einer hellen Wohnung."
              fill
              preload
              sizes="(min-width: 1024px) 48vw, (min-width: 640px) calc(100vw - 4rem), calc(100vw - 3rem)"
              className="object-cover object-[72%_center]"
            />
          </div>

          <aside
            className="rounded-[var(--radius-xl)] border border-[var(--border-subtle)] bg-[var(--surface-muted)] p-[var(--space-4)]"
            aria-labelledby="working-method-title"
          >
            <h2
              id="working-method-title"
              className="text-[length:var(--text-overline)] font-semibold tracking-[var(--ls-overline)] text-[var(--text-accent)] uppercase"
            >
              Arbeitsweise
            </h2>
            <ol className="mt-[var(--space-3)] grid grid-cols-3">
              {workingSteps.map((step, index) => (
                <li
                  key={step}
                  className="min-w-0 border-l border-[var(--border-strong)] px-[var(--space-3)] first:border-l-0 first:pl-0 last:pr-0"
                >
                  <span className="block text-[length:var(--text-caption)] font-semibold text-[var(--text-accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-[var(--space-1)] block text-[length:var(--text-small)] leading-[var(--lh-snug)] font-medium text-[var(--text-strong)]">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </section>
  );
}
