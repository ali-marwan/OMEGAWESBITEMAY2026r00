export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function formatPrice(value?: number | string, currency = "AED") {
  if (value === undefined || value === null) return "—";
  if (typeof value === "string") return value;
  return `${currency} ${value.toLocaleString()}`;
}

export function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/971566605596?text=${encoded}`;
}
