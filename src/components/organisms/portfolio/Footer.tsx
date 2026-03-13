import { footerContent } from "@/content/portfolio";
import { pick } from "@/content/portfolio/i18n";
import { useLanguage } from "@/components/atoms/LanguageProvider";
import LanguageToggle from "@/components/atoms/LanguageToggle";

const Footer = () => {
  const { lang } = useLanguage();
  return (
    <footer className="px-8 md:px-16 py-12 border-t border-border">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <a href="#" className="font-display font-bold text-base tracking-tight">
            <span className="text-lime">&lt;</span>
            {footerContent.brand}
            <span className="text-lime">/&gt;</span>
          </a>
          <span className="font-mono-custom text-xs text-muted-foreground">{footerContent.copyright}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
          <span className="font-mono-custom text-xs text-muted-foreground">
            {pick(footerContent.status, lang)}
          </span>
        </div>

        <div className="flex items-center gap-6">
          {footerContent.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="font-mono-custom text-xs text-muted-foreground hover:text-lime transition-colors duration-300 link-underline"
            >
              {social.label}
            </a>
          ))}
          <LanguageToggle className="font-mono-custom text-xs text-muted-foreground border border-border px-3 py-2 hover:border-lime hover:text-lime transition-all duration-300" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
