"use client";

import { useLanguage } from "@/components/atoms/LanguageProvider";

export default function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  const next = lang === "id" ? "en" : "id";

  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      className={
        className ??
        "font-mono-custom text-xs text-muted-foreground border border-border px-3 py-2 hover:border-lime hover:text-lime transition-all duration-300"
      }
      aria-label="Toggle language"
    >
      {lang.toUpperCase()} / {next.toUpperCase()}
    </button>
  );
}
