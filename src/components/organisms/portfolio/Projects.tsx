"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "@/components/molecules/SectionHeader";
import { projects, sectionHeaders } from "@/content/portfolio";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll(".project-item");
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

  return (
    <section ref={sectionRef} id="work" className="px-8 md:px-16 py-32 border-t border-border">
      <SectionHeader
        {...sectionHeaders.projects}
        metaRight={`${projects.length} projects`}
      />

      <div className="space-y-0">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="project-item group border-b border-border py-8 md:py-10 cursor-pointer"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            data-cursor
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0">
              {/* Number */}
              <span className="font-mono-custom text-xs text-muted-foreground w-12 shrink-0">
                {project.id}
              </span>

              {/* Title */}
              <div className="flex-1 md:px-8">
                <h3
                  className={`font-display font-bold text-3xl md:text-5xl transition-colors duration-300 ${
                    hoveredId === project.id ? "text-lime" : "text-foreground"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`font-mono-custom text-xs mt-1 transition-all duration-300 max-h-0 overflow-hidden ${
                    hoveredId === project.id ? "max-h-20 text-muted-foreground opacity-100 mt-2" : "opacity-0"
                  }`}
                >
                  {project.desc}
                </p>
              </div>

              {/* Category */}
              <span className="font-mono-custom text-xs text-muted-foreground hidden md:block w-40">
                {project.category}
              </span>

              {/* Tags */}
              <div className="hidden md:flex items-center gap-2 w-56">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-mono-custom text-xs px-2 py-1 border border-border text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Year + Arrow */}
              <div className="flex items-center gap-4 shrink-0">
                <span className="font-mono-custom text-xs text-muted-foreground">{project.year}</span>
                <div
                  className={`w-10 h-10 border flex items-center justify-center transition-all duration-300 ${
                    hoveredId === project.id
                      ? "border-lime bg-lime text-primary-foreground rotate-0"
                      : "border-border text-foreground -rotate-45"
                  }`}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="#"
          className="font-mono-custom text-xs text-muted-foreground border border-border px-8 py-4 hover:border-lime hover:text-lime transition-all duration-300"
        >
          View All Projects →
        </a>
      </div>
    </section>
  );
};

export default Projects;
