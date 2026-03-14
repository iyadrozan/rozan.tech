"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { navContent } from "@/content/portfolio";
import { pick } from "@/content/portfolio/i18n";
import { useLanguage } from "@/components/atoms/LanguageProvider";
import LanguageToggle from "@/components/atoms/LanguageToggle";

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [showLangTip, setShowLangTip] = useState(true);
  const { lang } = useLanguage();

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 2.4 }
    );

    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowLangTip(false), 7000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-6 flex items-center justify-between transition-all duration-500 ${
        scrolled ? "backdrop-blur-md bg-background/80 border-b border-border" : ""
      }`}
    >
      <a href="#" className="font-display font-bold text-lg tracking-tight">
        <span className="text-lime">&lt;</span>
        {navContent.brand}
        <span className="text-lime">/&gt;</span>
      </a>

      <div className="hidden md:flex items-center gap-10">
        {navContent.links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="font-mono-custom text-xs text-muted-foreground hover:text-foreground link-underline transition-colors duration-300"
          >
            <span className="text-lime mr-1">0{i + 1}.</span>
            {pick(link.label, lang)}
          </a>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-3">
        <div className="relative">
          <LanguageToggle />
          <div
            className={`absolute top-12 right-0 z-50 whitespace-nowrap rounded-full border border-lime bg-background px-3 py-2 text-[10px] font-mono-custom uppercase tracking-[0.2em] text-foreground shadow-[0_0_16px_rgba(105,253,216,0.25)] transition-all duration-500 ${
              showLangTip ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            Website ini tersedia untuk Bahasa Indonesia
            <span className="absolute -top-1 right-6 h-2 w-2 rotate-45 border-t border-l border-lime bg-background" />
          </div>
        </div>
        <a
          href={navContent.cta.href}
          className="items-center gap-2 font-mono-custom text-xs text-lime border border-lime px-4 py-2 hover:bg-lime hover:text-primary-foreground transition-all duration-300"
        >
          {pick(navContent.cta.label, lang)}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
