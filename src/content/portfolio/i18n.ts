export type LocalizedString = {
  en: string;
  id: string;
};

export function pick(value: LocalizedString, lang: "en" | "id") {
  return value[lang];
}
