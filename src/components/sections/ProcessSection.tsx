import { SectionHeading } from "@/components/ui/SectionHeading";

const processSteps = [
  {
    title: "Anfrage übermitteln",
    description: "Objektdaten und Anliegen werden zunächst strukturiert erfasst.",
  },
  {
    title: "Objekt und Umfang abstimmen",
    description:
      "Rahmenbedingungen, Zugang und gewünschter Umfang werden geklärt.",
  },
  {
    title: "Angebot vorbereiten",
    description:
      "Die abgestimmten Angaben bilden die Grundlage für das Angebot.",
  },
  {
    title: "Räumung koordinieren",
    description: "Termine und Arbeitsschritte werden gemeinsam eingeordnet.",
  },
  {
    title: "Übergabe dokumentieren",
    description:
      "Der vereinbarte Zustand wird zum Abschluss nachvollziehbar festgehalten.",
  },
] as const;

export function ProcessSection() {
  return (
    <section
      id="ablauf"
      className="scroll-mt-[var(--space-6)] border-y border-[var(--border-subtle)] bg-[var(--surface-card)]"
      aria-labelledby="process-title"
    >
      <div className="mx-auto w-full max-w-[var(--container-max)] px-[var(--gutter)] py-[var(--section-y-mobile)] md:px-[var(--gutter-lg)] md:py-[var(--section-y)]">
        <SectionHeading
          id="process-title"
          eyebrow="Ablauf"
          title="Fünf Schritte für eine klare Vorbereitung"
          description="Jede Phase baut auf der vorherigen Abstimmung auf und hält die nächsten Aufgaben nachvollziehbar."
        />

        <ol className="mt-[var(--space-10)] grid gap-[var(--grid-gap)] md:grid-cols-2 lg:grid-cols-5 lg:gap-[var(--space-4)]">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--surface-page)] p-[var(--card-pad)]"
            >
              <p className="text-[length:var(--text-overline)] font-semibold tracking-[var(--ls-overline)] text-[var(--text-accent)] uppercase">
                Schritt {index + 1}
              </p>
              <h3 className="mt-[var(--space-8)] text-[length:var(--text-body-size)] leading-[var(--lh-snug)] font-semibold text-[var(--text-strong)]">
                {step.title}
              </h3>
              <p className="mt-[var(--space-3)] text-[length:var(--text-small)] leading-[var(--lh-body)] text-[var(--text-muted)]">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
