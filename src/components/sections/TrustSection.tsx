import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrustItem } from "@/components/ui/TrustItem";

const trustArguments = [
  {
    title: "Klare Kommunikation",
    description: "Ansprechpunkte und nächste Schritte bleiben nachvollziehbar.",
  },
  {
    title: "Diskrete Abwicklung",
    description:
      "Informationen und Abläufe werden mit der nötigen Zurückhaltung behandelt.",
  },
  {
    title: "Planbare Abläufe",
    description: "Umfang, Reihenfolge und Übergabe werden vorab abgestimmt.",
  },
  {
    title: "Saubere Übergabe",
    description:
      "Der vereinbarte Übergabezustand bildet den gemeinsamen Abschluss.",
  },
] as const;

export function TrustSection() {
  return (
    <section
      id="ueber-uns"
      className="scroll-mt-[var(--space-6)] bg-[var(--surface-page)]"
      aria-labelledby="trust-title"
    >
      <div className="mx-auto w-full max-w-[var(--container-max)] px-[var(--gutter)] py-[var(--section-y-mobile)] md:px-[var(--gutter-lg)] md:py-[var(--section-y)]">
        <SectionHeading
          id="trust-title"
          eyebrow="Zusammenarbeit"
          title="Verlässlichkeit zeigt sich im Ablauf"
          description="Eine Räumung braucht klare Zuständigkeiten und eine nachvollziehbare Abstimmung."
        />

        <div className="mt-[var(--space-10)] grid gap-[var(--space-8)] sm:grid-cols-2 lg:grid-cols-4">
          {trustArguments.map((argument) => (
            <TrustItem
              key={argument.title}
              title={argument.title}
              description={argument.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
