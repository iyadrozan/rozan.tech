"use client";

import SectionHeader from "@/components/molecules/SectionHeader";
import { pricingContent, sectionHeaders } from "@/content/portfolio";
import { pick } from "@/content/portfolio/i18n";
import { useLanguage } from "@/components/atoms/LanguageProvider";

const Pricing = () => {
  const { lang } = useLanguage();

  return (
    <section id="pricing" className="px-8 md:px-16 py-32 border-t border-border">
      <SectionHeader index={sectionHeaders.pricing.index} title={pick(sectionHeaders.pricing.title, lang)} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {pricingContent.packages.map((pkg) => (
          <div
            key={pkg.name}
            className={`border bg-surface p-6 flex flex-col gap-4 transition-all duration-300 ${
              pkg.featured
                ? "border-lime shadow-[0_0_18px_rgba(105,253,216,0.18)]"
                : "border-border hover:border-lime"
            }`}
          >
            <div>
              {pkg.badge ? (
                <span className="inline-flex items-center rounded-full bg-lime text-background font-mono-custom text-[10px] tracking-[0.2em] uppercase px-3 py-1 mb-3">
                  {pick(pkg.badge, lang)}
                </span>
              ) : null}
              <p className="font-display text-lg text-foreground">{pkg.name}</p>
            </div>

            <div>
              <p className="font-display font-bold text-2xl text-foreground">{pkg.price}</p>
              <p className="font-mono-custom text-xs text-muted-foreground mt-2">
                {pick(pkg.subtitle, lang)}
              </p>
            </div>

            <div className="h-px bg-border" />

            <ul className="flex flex-col gap-2">
              {pkg.features.map((feature, index) => (
                <li key={`${pkg.name}-${index}`} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span
                    className={`mt-1.5 h-1.5 w-1.5 rounded-full ${
                      feature.included ? "bg-lime" : "bg-border"
                    }`}
                  />
                  <span>{pick(feature.text, lang)}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              data-prompt={pkg.ctaPrompt}
              className="mt-auto inline-flex items-center justify-center rounded-full border border-border py-2 text-xs font-mono-custom uppercase tracking-widest text-foreground transition-all duration-300 hover:border-lime hover:text-background hover:bg-lime"
            >
              {pick(pkg.ctaLabel, lang)}
            </a>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingContent.notes.map((note) => (
          <div key={pick(note.label, lang)} className="border border-border bg-muted p-4">
            <p className="font-mono-custom text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {pick(note.label, lang)}
            </p>
            <p className="mt-2 font-display text-sm text-foreground">{pick(note.value, lang)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
