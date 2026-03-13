"use client";

import { useMemo, useRef } from "react";
import {
  SiDocker,
  SiFigma,
  SiGithub,
  SiGithubpages,
  SiGit,
  SiGraphql,
  SiGreensock,
  SiJavascript,
  SiLinear,
  SiNextdotjs,
  SiNetlify,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiSupabase,
  SiVercel,
  SiCanva,
  SiBrave,
  SiAlacritty,
  SiArchlinux,
  SiWebgl,
} from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { RiMovie2Line } from "react-icons/ri";
import SectionHeader from "@/components/molecules/SectionHeader";
import {
  skillGroups,
  techItems,
  tools,
  sectionHeaders,
} from "@/content/portfolio";
import { pick } from "@/content/portfolio/i18n";
import { useLanguage } from "@/components/atoms/LanguageProvider";

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueRef = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();
  const iconMap = useMemo(
    () => ({
      SiReact,
      SiNextdotjs,
      SiTypescript,
      SiJavascript,
      SiGreensock,
      RiMovie2Line,
      SiTailwindcss,
      SiNodedotjs,
      SiPostgresql,
      SiGraphql,
      SiDocker,
      SiSupabase,
      SiThreedotjs,
      SiWebgl,
      SiFigma,
      SiCanva,
      SiGithub,
      SiGithubpages,
      SiGit,
      SiVercel,
      SiNetlify,
      VscVscodeInsiders,
      SiBrave,
      SiAlacritty,
      SiArchlinux,
      SiLinear,
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
        <SectionHeader index={sectionHeaders.skills.index} title={pick(sectionHeaders.skills.title, lang)} />
      </div>

      {/* Marquee */}
      <div className="marquee mb-20 border-y border-border py-4 overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap">
          {[...techItems, ...techItems].map((item, i) => (
            <span
              key={i}
              className="marquee-item font-display font-bold text-4xl md:text-5xl uppercase text-white/20"
            >
              <span className="marquee-text">{item}</span>
              <span className="marquee-sep text-lime px-6">✦</span>
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
