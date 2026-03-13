"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cursor from "@/components/organisms/portfolio/Cursor";
import Navbar from "@/components/organisms/portfolio/Navbar";
import Hero from "@/components/organisms/portfolio/Hero";
import About from "@/components/organisms/portfolio/About";
import Projects from "@/components/organisms/portfolio/Projects";
import Skills from "@/components/organisms/portfolio/Skills";
import Contact from "@/components/organisms/portfolio/Contact";
import Footer from "@/components/organisms/portfolio/Footer";
import { loaderContent } from "@/content/portfolio";

const PortfolioPage = () => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const loaderTextRef = useRef<HTMLDivElement>(null);
  const loaderBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();

    tl.to(loaderBarRef.current, {
      width: "100%",
      duration: 1.4,
      ease: "power2.inOut",
    })
      .to(loaderTextRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: "power2.in",
      })
      .to(loaderRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut",
      });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="relative noise-bg">
      <div
        ref={loaderRef}
        className="fixed inset-0 z-[9998] bg-background flex flex-col items-center justify-center"
      >
        <div ref={loaderTextRef} className="text-center mb-8">
          <p className="font-display font-extrabold text-5xl uppercase tracking-tight">
            <span className="text-lime">&lt;</span>
            {loaderContent.brand}
            <span className="text-lime">/&gt;</span>
          </p>
          <p className="font-mono-custom text-xs text-muted-foreground mt-2 tracking-widest">
            {loaderContent.tagline}
          </p>
        </div>
        <div className="w-48 h-px bg-border relative overflow-hidden">
          <div ref={loaderBarRef} className="absolute left-0 top-0 h-full bg-lime" style={{ width: "0%" }} />
        </div>
      </div>

      <Cursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
