import Link from "next/link";
import type { ReactNode } from "react";

interface SecondaryButtonLinkProps {
  children: ReactNode;
  href: string;
}

export function SecondaryButtonLink({
  children,
  href,
}: SecondaryButtonLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-[var(--space-12)] items-center justify-center rounded-[var(--radius-md)] border-[length:var(--border-width-strong)] border-[var(--border-strong)] bg-transparent px-[var(--space-5)] py-[var(--space-3)] text-center text-[length:var(--text-button)] font-semibold text-[var(--color-primary)] transition-[background-color,border-color,box-shadow,transform] duration-[var(--dur)] ease-[var(--ease-standard)] hover:border-[var(--color-primary-400)] hover:bg-[var(--color-primary-50)] focus-visible:shadow-[var(--shadow-focus)] focus-visible:outline-none active:translate-y-px active:bg-[var(--color-primary-100)]"
    >
      {children}
    </Link>
  );
}
