"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import SectionHeader from "@/components/molecules/SectionHeader";
import { projects, sectionHeaders } from "@/content/portfolio";
import { pick } from "@/content/portfolio/i18n";
import { useLanguage } from "@/components/atoms/LanguageProvider";
import Image from "next/image";
import { registerGsap } from "@/lib/gsap";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const hoverPos = useRef({ x: 0 });
  const currentPos = useRef({ x: 0 });
  const scrambleTimers = useRef<Map<string, number>>(new Map());
  const { lang } = useLanguage();

  useEffect(() => {
    registerGsap();
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll(".project-row");
      items?.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      hoverPos.current.x = e.clientX;
    };
    window.addEventListener("mousemove", handleMove);

    const images = Array.from(
      listRef.current?.querySelectorAll<HTMLElement>(".project-hover-img") ?? []
    );
    const xSetters = images.map((el) => gsap.quickSetter(el, "x", "px"));

    const tick = () => {
      const dt = 1.0 - Math.pow(1.0 - 0.12, gsap.ticker.deltaRatio());
      currentPos.current.x += (hoverPos.current.x - currentPos.current.x) * dt;
      xSetters.forEach((setX) => setX(currentPos.current.x));
    };

    gsap.ticker.add(tick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      gsap.ticker.remove(tick);
    };
  }, []);

  useEffect(() => {
    return () => {
      scrambleTimers.current.forEach((interval) => window.clearInterval(interval));
      scrambleTimers.current.clear();
    };
  }, []);

  const scrambleLetters = useMemo(() => "ABCDEFGHIJKLMNOPQRSTUVWXYZ", []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="project-section px-8 md:px-16 py-32 border-t border-border"
    >
      <SectionHeader
        index={sectionHeaders.projects.index}
        title={pick(sectionHeaders.projects.title, lang)}
        metaRight={`${projects.length} projects`}
      />

      <ul ref={listRef} className="project-list">
        {projects.map((project) => (
          <li
            key={project.id}
            className="project-row"
            onMouseEnter={(event) => {
              setHoveredId(project.id);
              const target = event.currentTarget.querySelector("h3");
              if (!target) return;
              const existing = scrambleTimers.current.get(project.id);
              if (existing) window.clearInterval(existing);
              const finalText = project.title;
              let iteration = 0;
              const interval = window.setInterval(() => {
                target.textContent = finalText
                  .split("")
                  .map((letter, index) => {
                    if (index < iteration) return finalText[index] ?? "";
                    return scrambleLetters[Math.floor(Math.random() * scrambleLetters.length)];
                  })
                  .join("");
                if (iteration >= finalText.length) {
                  clearInterval(interval);
                }
                iteration += 1 / 3;
              }, 20);
              scrambleTimers.current.set(project.id, interval);
            }}
            onMouseLeave={() => {
              setHoveredId(null);
              const existing = scrambleTimers.current.get(project.id);
              if (existing) window.clearInterval(existing);
            }}
          >
            <div className="project-index">
              <span>{project.id}</span>
            </div>
            <div className="project-year">
              <span>{project.year}</span>
            </div>
            <div className="project-name">
              <h3 data-value={project.title}>{project.title}</h3>
            </div>
            <div className="project-genre">
              <span>{project.genre}</span>
            </div>
            <div className="project-link">
              <a href={project.link} target="_blank" rel="noreferrer">
                <svg width="1.25rem" height="1.25rem" viewBox="0 0 16 16" fill="none">
                  <path d="M12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4H12.75ZM11.25 10C11.25 10.4142 11.5858 10.75 12 10.75C12.4142 10.75 12.75 10.4142 12.75 10H11.25ZM11.25 4V10H12.75V4H11.25Z" fill="currentColor"></path>
                  <path d="M12 4.75C12.4142 4.75 12.75 4.41421 12.75 4C12.75 3.58579 12.4142 3.25 12 3.25L12 4.75ZM6 3.25C5.58579 3.25 5.25 3.58579 5.25 4C5.25 4.41421 5.58579 4.75 6 4.75L6 3.25ZM12 3.25L6 3.25L6 4.75L12 4.75L12 3.25Z" fill="currentColor"></path>
                  <path d="M12.5303 4.53033C12.8232 4.23744 12.8232 3.76256 12.5303 3.46967C12.2374 3.17678 11.7626 3.17678 11.4697 3.46967L12.5303 4.53033ZM3.46967 11.4697C3.17678 11.7626 3.17678 12.2374 3.46967 12.5303C3.76256 12.8232 4.23744 12.8232 4.53033 12.5303L3.46967 11.4697ZM11.4697 3.46967L3.46967 11.4697L4.53033 12.5303L12.5303 4.53033L11.4697 3.46967Z" fill="currentColor"></path>
                </svg>
              </a>
            </div>
            <div className="project-hover-img" data-cursor-area>
              <Image src={project.image} alt={project.title} fill sizes="34vw" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
