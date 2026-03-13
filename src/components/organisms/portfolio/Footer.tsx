import { footerContent } from "@/content/portfolio";

const Footer = () => {
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
          <span className="font-mono-custom text-xs text-muted-foreground">{footerContent.status}</span>
        </div>

        <div className="flex items-center gap-6">
          {footerContent.socials.map((social) => (
            <a
              key={social}
              href="#"
              className="font-mono-custom text-xs text-muted-foreground hover:text-lime transition-colors duration-300 link-underline"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
