// src/utils/format.ts — string and date formatting helpers

/**
 * Formats a Date to a readable string.
 * @returns e.g. "Mon, 18 May 2026"
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Truncates a string to max characters, appending "…" if needed.
 */
export function truncate(str: string, max = 80): string {
  if (str.length <= max) return str;
  return str.slice(0, max).trimEnd() + "…";
}

/**
 * Pads a number with leading zeros to the target length.
 * e.g. padStart(7, 3) => "007"
 */
export function padStart(value: number, length: number): string {
  return String(value).padStart(length, "0");
}

/**
 * Formats a number as a currency string.
 * @param amount - The amount to format.
 * @param currency - ISO 4217 currency code (default: "USD").
 */
export function formatCurrency(amount: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
}
