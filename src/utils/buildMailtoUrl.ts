const DEFAULT_CONTACT_EMAIL = "info@atomicimpact.tech";

export function getContactEmail(): string {
  const fromEnv = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
  return fromEnv && fromEnv.length > 0 ? fromEnv : DEFAULT_CONTACT_EMAIL;
}

export function buildMailtoUrl(subject: string, body: string): string {
  const to = getContactEmail();
  const params = new URLSearchParams({ subject, body });
  return `mailto:${to}?${params.toString()}`;
}
