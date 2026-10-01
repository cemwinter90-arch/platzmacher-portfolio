interface TrustItemProps {
  description: string;
  title: string;
}

export function TrustItem({ description, title }: TrustItemProps) {
  return (
    <article className="border-t-[length:var(--border-width-strong)] border-[var(--color-accent)] pt-[var(--space-5)]">
      <h3 className="text-[length:var(--text-body-size)] font-semibold text-[var(--text-strong)]">
        {title}
      </h3>
      <p className="mt-[var(--space-2)] text-[length:var(--text-small)] leading-[var(--lh-body)] text-[var(--text-muted)]">
        {description}
      </p>
    </article>
  );
}
