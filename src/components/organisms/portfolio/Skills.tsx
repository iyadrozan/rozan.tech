"use client";

import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiDocker,
  SiFigma,
  SiGithub,
  SiGraphql,
  SiGreensock,
  SiLinear,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVercel,
  SiWebgl,
} from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import SectionHeader from "@/components/molecules/SectionHeader";
import {
  skillGroups,
  techItems,
  tools,
  sectionHeaders,
} from "@/content/portfolio";

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueRef = useRef<HTMLDivElement>(null);
  const iconMap = useMemo(
    () => ({
      SiReact,
      SiNextdotjs,
      SiTypescript,
      SiGreensock,
      SiTailwindcss,
      SiNodedotjs,
      SiPostgresql,
      SiGraphql,
      SiDocker,
      SiThreedotjs,
      SiWebgl,
      SiFigma,
      SiGithub,
      SiVercel,
      VscVscodeInsiders,
      SiLinear,
      SiNotion,
    }),
    [],
  );

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-32 border-t border-border overflow-hidden"
    >
      <div className="px-8 md:px-16">
        <SectionHeader {...sectionHeaders.skills} />
      </div>

      {/* Marquee */}
      <div className="mb-20 border-y border-border py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...techItems, ...techItems].map((item, i) => (
            <span
              key={i}
              className="font-display font-bold text-4xl md:text-5xl uppercase text-muted/20 mx-8"
            >
              {item}
              <span className="text-lime mx-4">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="font-mono-custom text-xs text-lime tracking-widest uppercase mb-8">
                — {group.label}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {group.skills.map((skill) => {
                  const Icon = iconMap[skill.icon as keyof typeof iconMap];
                  return (
                    <div
                      key={skill.name}
                      className="group border border-border bg-surface px-4 py-3 flex items-center gap-3 hover:border-lime transition-colors duration-300"
                    >
                      {Icon ? (
                        <Icon className="text-xl text-lime" aria-hidden />
                      ) : (
                        <span className="text-lime text-lg" aria-hidden>
                          ●
                        </span>
                      )}
                      <span className="font-display text-sm">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Tools grid */}
        <div className="mt-24 pt-12 border-t border-border">
          <h3 className="font-mono-custom text-xs text-muted-foreground tracking-widest uppercase mb-8">
            Tools I Use Daily
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {tools.map((tool) => {
              const Icon = iconMap[tool.icon as keyof typeof iconMap];
              return (
                <div
                  key={tool.name}
                  className="bg-surface border border-border p-4 flex flex-col items-center gap-2 hover:border-lime transition-colors duration-300 group"
                >
                  {Icon ? (
                    <Icon className="text-2xl text-lime" aria-hidden />
                  ) : (
                    <span className="text-2xl text-lime" aria-hidden>
                      ●
                    </span>
                  )}
                  <span className="font-mono-custom text-xs text-muted-foreground group-hover:text-lime transition-colors duration-300">
                    {tool.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
