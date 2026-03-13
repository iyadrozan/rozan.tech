"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { heroContent } from "@/content/portfolio";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);
  const subRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const addToWordsRef = (el: HTMLSpanElement | null) => {
    if (el && !wordsRef.current.includes(el)) {
      wordsRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 1.8 });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );

      tl.fromTo(
        wordsRef.current,
        { y: "110%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          stagger: 0.07,
        },
        "-=0.2"
      );

      tl.fromTo(
        subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      );

      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      );

      tl.fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.2, ease: "power4.inOut", transformOrigin: "left" },
        "-=0.6"
      );

      tl.fromTo(
        scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        "-=0.2"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center px-8 md:px-16 pt-28 pb-16 overflow-hidden grid-bg"
      id="hero"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-lime/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-lime/3 blur-[100px] pointer-events-none" />

      {/* Badge */}
      <div ref={badgeRef} className="flex items-center gap-3 mb-10" style={{ opacity: 0 }}>
        <span className="font-mono-custom text-xs text-lime">{heroContent.badge.left}</span>
        <div className="h-px w-12 bg-lime" />
        <span className="font-mono-custom text-xs text-muted-foreground">{heroContent.badge.right}</span>
      </div>

      {/* Headline */}
      <div className="mb-6">
        <h1 className="font-display font-extrabold leading-[0.9] text-[clamp(60px,10vw,160px)] tracking-tight uppercase">
          {heroContent.headlineWords.map((word, wi) => (
            <span key={wi} className="block overflow-hidden">
              <span
                ref={addToWordsRef}
                className={`inline-block ${wi === 1 ? "text-lime italic" : ""}`}
                style={{ transform: "translateY(110%)", opacity: 0 }}
              >
                {word}
              </span>
            </span>
          ))}
        </h1>
      </div>

      {/* Horizontal line */}
      <div ref={lineRef} className="w-full h-px bg-border mb-8 origin-left" style={{ transform: "scaleX(0)" }} />

      {/* Sub + CTA */}
      <div className="flex flex-col md:flex-row md:items-end gap-8 justify-between">
        <p
          ref={subRef}
          className="font-mono-custom text-sm text-muted-foreground max-w-sm leading-relaxed"
          style={{ opacity: 0 }}
        >
          {heroContent.subtext}
        </p>

        <div ref={ctaRef} className="flex items-center gap-6" style={{ opacity: 0 }}>
          <a
            href={heroContent.cta.primary.href}
            className="group flex items-center gap-3 font-display font-semibold text-lg hover:text-lime transition-colors duration-300"
          >
            <span className="w-12 h-12 rounded-full border border-border group-hover:border-lime flex items-center justify-center transition-colors duration-300">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            {heroContent.cta.primary.label}
          </a>
          <a
            href={heroContent.cta.secondary.href}
            className="font-mono-custom text-xs text-muted-foreground link-underline hover:text-foreground transition-colors duration-300"
          >
            {heroContent.cta.secondary.label}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollRef} className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2" style={{ opacity: 0 }}>
        <span className="font-mono-custom text-xs text-muted-foreground tracking-widest rotate-90 origin-center mb-2">
          {heroContent.scrollLabel}
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>

      {/* Stats */}
      <div className="absolute top-1/2 right-8 md:right-16 -translate-y-1/2 hidden lg:flex flex-col gap-6">
        {heroContent.stats.map((stat, i) => (
          <div key={i} className="text-right">
            <div className="font-display font-bold text-2xl text-lime">{stat.num}</div>
            <div className="font-mono-custom text-xs text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
