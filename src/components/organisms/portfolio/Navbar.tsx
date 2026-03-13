"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { navContent } from "@/content/portfolio";

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

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
            {link.label}
          </a>
        ))}
      </div>

      <a
        href={navContent.cta.href}
        className="hidden md:flex items-center gap-2 font-mono-custom text-xs text-lime border border-lime px-4 py-2 hover:bg-lime hover:text-primary-foreground transition-all duration-300"
      >
        {navContent.cta.label}
      </a>
    </nav>
  );
};

export default Navbar;
