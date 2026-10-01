import { PrimaryButtonLink } from "@/components/ui/PrimaryButtonLink";

export function ContactCta() {
  return (
    <section
      id="kontakt"
      className="scroll-mt-[var(--space-6)] bg-[var(--surface-page)] pb-[var(--section-y-mobile)] md:pb-[var(--section-y)]"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto w-full max-w-[var(--container-max)] px-[var(--gutter)] md:px-[var(--gutter-lg)]">
        <div className="rounded-[var(--radius-xl)] bg-[var(--surface-inverse)] px-[var(--card-pad)] py-[var(--space-10)] text-[var(--text-inverse)] md:flex md:items-center md:justify-between md:gap-[var(--space-12)] md:px-[var(--space-12)] md:py-[var(--space-12)]">
          <div className="max-w-[var(--container-narrow)]">
            <p className="mb-[var(--space-3)] text-[length:var(--text-overline)] font-semibold tracking-[var(--ls-overline)] text-[var(--color-accent-500)] uppercase">
              Kontakt
            </p>
            <h2
              id="contact-title"
              className="[font-family:var(--font-display)] text-[length:var(--text-h2)] leading-[var(--lh-heading)] font-semibold tracking-[var(--ls-heading)]"
            >
              Räumung strukturiert vorbereiten
            </h2>
            <p className="mt-[var(--space-4)] text-[length:var(--text-body-size)] leading-[var(--lh-body)] text-[var(--color-primary-200)]">
              Senden Sie uns per E-Mail die wichtigsten Informationen zu Ihrem
              Objekt. Wir prüfen den Bedarf und stimmen die nächsten Schritte
              mit Ihnen ab.
            </p>
          </div>

          <div className="mt-[var(--space-6)] shrink-0 md:mt-0">
            <PrimaryButtonLink href="mailto:demo@example.invalid" inverse>
              Anfrage per E-Mail senden
            </PrimaryButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
