"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "@/components/molecules/SectionHeader";
import { skillGroups, techItems, tools, sectionHeaders } from "@/content/portfolio";

const SkillBar = ({ name, level, index }: { name: string; level: number; index: number }) => {
  const barRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      fillRef.current,
      { width: "0%" },
      {
        width: `${level}%`,
        duration: 1.2,
        ease: "power3.out",
        delay: index * 0.1,
        scrollTrigger: {
          trigger: barRef.current,
          start: "top 85%",
        },
      }
    );
  }, [level, index]);

  return (
    <div ref={barRef} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="font-display text-sm font-medium">{name}</span>
        <span className="font-mono-custom text-xs text-lime">{level}%</span>
      </div>
      <div className="h-px bg-border w-full relative overflow-hidden">
        <div
          ref={fillRef}
          className="absolute left-0 top-0 h-full bg-lime"
          style={{ width: "0%" }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} id="skills" className="py-32 border-t border-border overflow-hidden">
      <div className="px-8 md:px-16">
        <SectionHeader {...sectionHeaders.skills} />
      </div>

      {/* Marquee */}
      <div className="mb-20 border-y border-border py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...techItems, ...techItems].map((item, i) => (
            <span key={i} className="font-display font-bold text-4xl md:text-5xl uppercase text-muted/20 mx-8">
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
              <div className="space-y-6">
                {group.skills.map((skill, i) => (
                  <SkillBar key={skill.name} {...skill} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools grid */}
        <div className="mt-24 pt-12 border-t border-border">
          <h3 className="font-mono-custom text-xs text-muted-foreground tracking-widest uppercase mb-8">Tools I Use Daily</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="bg-surface border border-border p-4 flex flex-col items-center gap-2 hover:border-lime transition-colors duration-300 group"
              >
                <span className="text-2xl">{tool.icon}</span>
                <span className="font-mono-custom text-xs text-muted-foreground group-hover:text-lime transition-colors duration-300">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
