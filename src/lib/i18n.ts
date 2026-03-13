export type Lang = "id" | "en";

export function resolveLang(input?: string | null): Lang {
  if (!input) return "id";
  return input.toLowerCase().startsWith("id") ? "id" : "en";
}
