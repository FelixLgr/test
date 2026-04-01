// src/utils/array.ts — array manipulation helpers

/**
 * Groups an array of objects by a key.
 */
export function groupBy<T>(items: T[], key: keyof T): Record<string, T[]> {
  return items.reduce<Record<string, T[]>>((acc, item) => {
    const group = String(item[key]);
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

/**
 * Returns the top N items sorted by a numeric key descending.
 */
export function topN<T>(items: T[], key: keyof T, n: number): T[] {
  return [...items].sort((a, b) => Number(b[key]) - Number(a[key])).slice(0, n);
}

/**
 * Sums the values of a numeric key across an array of objects.
 */
export function sumBy<T>(items: T[], key: keyof T): number {
  return items.reduce((acc, item) => acc + Number(item[key]), 0);
}

/**
 * Picks a subset of keys from an object.
 */
export function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  return keys.reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {} as Pick<T, K>);
}

/**
 * Omits a subset of keys from an object.
 */
export function omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const result = { ...obj };
  keys.forEach((key) => delete result[key]);
  return result as Omit<T, K>;
}

/**
 * Deep clones a plain JSON-serialisable object.
 */
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj)) as T;
}
