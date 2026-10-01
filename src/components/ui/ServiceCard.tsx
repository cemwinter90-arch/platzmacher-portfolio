interface ServiceCardProps {
  description: string;
  number: string;
  title: string;
}

export function ServiceCard({
  description,
  number,
  title,
}: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--surface-card)] p-[var(--card-pad)] shadow-[var(--shadow-sm)] md:p-[var(--card-pad-lg)]">
      <p className="text-[length:var(--text-overline)] font-semibold tracking-[var(--ls-overline)] text-[var(--text-accent)] uppercase">
        {number}
      </p>
      <h3 className="mt-[var(--space-8)] text-[length:var(--text-h4)] leading-[var(--lh-snug)] font-semibold text-[var(--text-strong)]">
        {title}
      </h3>
      <p className="mt-[var(--space-3)] text-[length:var(--text-small)] leading-[var(--lh-body)] text-[var(--text-body)]">
        {description}
      </p>
    </article>
  );
}
