"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  const bigCircle = useRef<HTMLDivElement>(null);
  const smallCircle = useRef<HTMLDivElement>(null);
  const plusRef = useRef<HTMLDivElement>(null);
  const plusAreaRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const big = bigCircle.current;
    const small = smallCircle.current;
    const plus = plusRef.current;
    if (!big || !small || !plus || !plusAreaRef.current) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(big, { x: e.clientX, y: e.clientY, duration: 0.4, ease: "power3.out" });
      gsap.to(small, { x: e.clientX, y: e.clientY, duration: 0.1, ease: "power2.out" });
      gsap.to(plus, { x: e.clientX, y: e.clientY, duration: 0.1, ease: "power2.out" });
    };

    const onHover = () => {
      gsap.to("#bigCircle", { attr: { r: 25 } });
    };
    const onHoverOut = () => {
      gsap.to("#bigCircle", { attr: { r: 18 } });
    };

    const onHoverArea = () => {
      gsap.to(big, { fill: "#212121", mixBlendMode: "normal", duration: 0.3 });
      gsap.to(small, { fill: "transparent", duration: 0.3 });
      gsap.to(plusAreaRef.current, { stroke: "#DEDEDE", duration: 0.3 });
    };
    const onHoverAreaOut = () => {
      gsap.to(big, { fill: "transparent", mixBlendMode: "difference", duration: 0.3 });
      gsap.to(small, { fill: "#DEDEDE", duration: 0.3 });
      gsap.to(plusAreaRef.current, { stroke: "transparent", duration: 0.3 });
    };

    window.addEventListener("mousemove", moveCursor);

    const hoverables = document.querySelectorAll("a, button, [data-cursor]");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", onHover);
      el.addEventListener("mouseleave", onHoverOut);
    });

    const hoverAreas = document.querySelectorAll("img, [data-cursor-area]");
    hoverAreas.forEach((el) => {
      el.addEventListener("mouseenter", onHoverArea);
      el.addEventListener("mouseleave", onHoverAreaOut);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", onHover);
        el.removeEventListener("mouseleave", onHoverOut);
      });
      hoverAreas.forEach((el) => {
        el.removeEventListener("mouseenter", onHoverArea);
        el.removeEventListener("mouseleave", onHoverAreaOut);
      });
    };
  }, []);

  return (
    <div className="cursor">
      <div ref={bigCircle} className="cursor__circle cursor__circle--big">
        <svg height="60" width="60">
          <circle id="bigCircle" cx="30" cy="30" r="18" strokeWidth="0.8" />
        </svg>
      </div>

      <div ref={smallCircle} className="cursor__circle cursor__circle--small">
        <svg height="10" width="10">
          <circle cx="4" cy="4" r="3" strokeWidth="0" />
        </svg>
      </div>

      <div ref={plusRef} className="cursor__plus">
        <svg
          ref={plusAreaRef}
          className="cursor__plus--area"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g strokeWidth="1">
            <path d="M12.5,1.87037037 L12.5,11.4993704 L22.5,11.5 L22.5,12.5 L12.5,12.4993704 L12.5,22.1296296 L11.5,22.1296296 L11.5,12.4993704 L1.5,12.5 L1.5,11.5 L11.5,11.4993704 L11.5,1.87037037 L12.5,1.87037037 Z" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Cursor;
