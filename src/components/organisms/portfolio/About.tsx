"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SectionHeader from "@/components/molecules/SectionHeader";
import { aboutContent, sectionHeaders } from "@/content/portfolio";
import Image from "next/image";
import { registerGsap } from "@/lib/gsap";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const ctx = gsap.context(() => {
      // Text reveal with words
      if (textRef.current) {
        const words = textRef.current.querySelectorAll("span.word");
        gsap.fromTo(
          words,
          { opacity: 0.15 },
          {
            opacity: 1,
            stagger: 0.04,
            ease: "none",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 80%",
              end: "bottom 60%",
              scrub: 1,
            },
          }
        );
      }

      // Image slide in
      gsap.fromTo(
        imageRef.current,
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      // Tags stagger
      gsap.fromTo(
        tagsRef.current?.children ?? [],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: tagsRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="px-8 md:px-16 py-32">
      <SectionHeader {...sectionHeaders.about} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Big text */}
        <div>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-10 leading-tight">
            {aboutContent.headline.line1}
            <br />
            <span className="text-lime italic">{aboutContent.headline.highlight}</span>{" "}
            {aboutContent.headline.line2}
          </h2>

          <p ref={textRef} className="font-display text-xl md:text-2xl leading-relaxed text-muted-foreground">
            {aboutContent.bigText.split(" ").map((word, i) => (
              <span key={i} className="word inline-block mr-[0.3em]">{word}</span>
            ))}
          </p>

          <div className="mt-10 flex items-center gap-6">
            <a
              href={aboutContent.cta.primary.href}
              className="font-mono-custom text-xs text-lime border border-lime px-6 py-3 hover:bg-lime hover:text-primary-foreground transition-all duration-300"
            >
              {aboutContent.cta.primary.label}
            </a>
            <a
              href={aboutContent.cta.secondary.href}
              className="font-mono-custom text-xs text-muted-foreground link-underline hover:text-foreground transition-colors duration-300"
            >
              {aboutContent.cta.secondary.label}
            </a>
          </div>
        </div>

        {/* Right: Image + Tags */}
        <div ref={imageRef} className="space-y-8">
          <div className="relative inline-block">
            <div className="bg-surface border border-border overflow-hidden group relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-br from-muted/40 via-surface to-surface" />
              <div className="relative z-[1] w-[320px] max-w-full">
                <Image
                  src="/ilustrasi_rozan.png"
                  alt={aboutContent.profile.name}
                  width={408}
                  height={612}
                  className="h-auto w-full drop-shadow-[0_24px_40px_rgba(0,0,0,0.35)]"
                  priority
                />
              </div>
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-lime" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-lime" />
            </div>

            <div className="absolute -bottom-3 -right-3 bg-lime text-primary-foreground px-4 py-2 z-10">
              <span className="font-mono-custom text-xs font-bold">
                {aboutContent.profile.availability}
              </span>
            </div>
          </div>

          <div ref={tagsRef} className="flex flex-wrap gap-2 pt-6">
            {aboutContent.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono-custom text-xs px-3 py-1.5 border border-border text-muted-foreground hover:border-lime hover:text-lime transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
