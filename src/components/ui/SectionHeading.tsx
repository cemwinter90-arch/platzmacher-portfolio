interface SectionHeadingProps {
  description?: string;
  display?: boolean;
  eyebrow: string;
  id: string;
  title: string;
}

export function SectionHeading({
  description,
  display = false,
  eyebrow,
  id,
  title,
}: SectionHeadingProps) {
  const headingStyle = display
    ? "[font-family:var(--font-display)] text-[length:var(--text-h2)] leading-[var(--lh-heading)] tracking-[var(--ls-heading)]"
    : "text-[length:var(--text-h3)] leading-[var(--lh-snug)]";

  return (
    <header className="max-w-[var(--container-narrow)]">
      <p className="mb-[var(--space-3)] text-[length:var(--text-overline)] font-semibold tracking-[var(--ls-overline)] text-[var(--text-accent)] uppercase">
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`${headingStyle} font-semibold text-[var(--text-strong)]`}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-[var(--space-5)] text-[length:var(--text-body-size)] leading-[var(--lh-body)] text-[var(--text-body)]">
          {description}
        </p>
      ) : null}
    </header>
  );
}
