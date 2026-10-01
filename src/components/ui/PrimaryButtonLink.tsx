import Link from "next/link";
import type { ReactNode } from "react";

interface PrimaryButtonLinkProps {
  children: ReactNode;
  href: string;
  inverse?: boolean;
}

export function PrimaryButtonLink({
  children,
  href,
  inverse = false,
}: PrimaryButtonLinkProps) {
  const colors = inverse
    ? "border-[var(--surface-card)] bg-[var(--surface-card)] text-[var(--color-primary)] hover:border-[var(--color-primary-100)] hover:bg-[var(--color-primary-100)] focus-visible:shadow-[var(--shadow-focus)]"
    : "border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--text-inverse)] hover:border-[var(--color-primary-hover)] hover:bg-[var(--color-primary-hover)] active:border-[var(--color-primary-active)] active:bg-[var(--color-primary-active)] focus-visible:shadow-[var(--shadow-focus)]";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-[var(--space-12)] items-center justify-center rounded-[var(--radius-md)] border-[length:var(--border-width-strong)] px-[var(--space-5)] py-[var(--space-3)] text-center text-[length:var(--text-button)] font-semibold transition-[background-color,border-color,box-shadow,transform] duration-[var(--dur)] ease-[var(--ease-standard)] focus-visible:outline-none active:translate-y-px ${colors}`}
    >
      {children}
    </Link>
  );
}
