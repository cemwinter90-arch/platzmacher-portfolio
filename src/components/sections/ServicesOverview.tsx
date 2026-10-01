import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";

const services = [
  {
    title: "Entrümpelung",
    description:
      "Geordnete Räumung einzelner Räume oder vollständiger Objekte.",
  },
  {
    title: "Haushaltsauflösung",
    description:
      "Strukturierte Auflösung eines Haushalts mit klarer Abstimmung.",
  },
  {
    title: "Wohnungsauflösung",
    description:
      "Koordinierte Räumung von Wohnungen bis zur vereinbarten Übergabe.",
  },
  {
    title: "Nachlassräumung",
    description: "Abstimmung von Umfang, Ablauf und gewünschter Übergabe.",
  },
  {
    title: "Gewerberäumung",
    description: "Planung von Räumungen in gewerblich genutzten Flächen.",
  },
  {
    title: "Keller, Dachboden und Garage",
    description: "Gezielte Räumung von Nebenflächen und Lagerbereichen.",
  },
] as const;

export function ServicesOverview() {
  return (
    <section
      id="leistungen"
      className="scroll-mt-[var(--space-6)] bg-[var(--surface-page)]"
      aria-labelledby="services-title"
    >
      <div className="mx-auto w-full max-w-[var(--container-max)] px-[var(--gutter)] py-[var(--section-y-mobile)] md:px-[var(--gutter-lg)] md:py-[var(--section-y)]">
        <SectionHeading
          id="services-title"
          eyebrow="Leistungen"
          title="Räumungslösungen für unterschiedliche Anforderungen"
          description="Der konkrete Umfang richtet sich nach Objekt, Ausgangslage und den gemeinsam abgestimmten nächsten Schritten."
          display
        />

        <div className="mt-[var(--space-10)] grid gap-[var(--grid-gap)] md:grid-cols-2 lg:grid-cols-3 lg:gap-[var(--grid-gap-lg)]">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              number={String(index + 1).padStart(2, "0")}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <aside
          id="einsatzgebiete"
          className="mt-[var(--space-12)] scroll-mt-[var(--space-6)] rounded-[var(--radius-xl)] border border-[var(--border-subtle)] bg-[var(--surface-muted)] p-[var(--card-pad)] md:grid md:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)] md:gap-[var(--space-10)] md:p-[var(--card-pad-lg)]"
          aria-labelledby="areas-title"
        >
          <div>
            <p className="text-[length:var(--text-overline)] font-semibold tracking-[var(--ls-overline)] text-[var(--text-accent)] uppercase">
              Einsatzgebiete
            </p>
            <h3
              id="areas-title"
              className="mt-[var(--space-3)] text-[length:var(--text-h4)] leading-[var(--lh-snug)] font-semibold text-[var(--text-strong)]"
            >
              Für verschiedene Objektarten
            </h3>
          </div>
          <p className="mt-[var(--space-5)] text-[length:var(--text-body-size)] leading-[var(--lh-body)] text-[var(--text-body)] md:mt-0">
            Wohnungen, Häuser, Nebenräume und gewerblich genutzte Flächen
            werden passend zu Umfang und Rahmenbedingungen eingeordnet.
          </p>
        </aside>
      </div>
    </section>
  );
}
