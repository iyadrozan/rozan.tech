"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "@/components/molecules/SectionHeader";
import { contactContent, sectionHeaders } from "@/content/portfolio";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".contact-form-field",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-form-field",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section ref={sectionRef} id="contact" className="px-8 md:px-16 py-32 border-t border-border">
      <SectionHeader {...sectionHeaders.contact} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: CTA heading */}
        <div>
          <h2 ref={headingRef} className="font-display font-extrabold text-5xl md:text-7xl leading-tight uppercase mb-8">
            {contactContent.headingLines[0]}
            <br />
            {contactContent.headingLines[1]}
            <br />
            <span className="text-lime italic">{contactContent.headingLines[2]}</span>
          </h2>
          <p className="font-mono-custom text-sm text-muted-foreground leading-relaxed mb-10 max-w-sm">
            {contactContent.intro}
          </p>

          <div className="space-y-4">
            {contactContent.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-4 group"
              >
                <span className="font-mono-custom text-xs text-muted-foreground w-20">{link.label}</span>
                <div className="flex-1 h-px bg-border group-hover:bg-lime transition-colors duration-300" />
                <span className="font-mono-custom text-xs text-muted-foreground group-hover:text-lime transition-colors duration-300">
                  {link.value}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div>
          {submitted ? (
            <div className="h-full flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="w-16 h-16 border border-lime rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-lime">
                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-display font-bold text-2xl mb-2">{contactContent.form.success.title}</h3>
                <p className="font-mono-custom text-xs text-muted-foreground">{contactContent.form.success.body}</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="contact-form-field">
                <label className="font-mono-custom text-xs text-muted-foreground block mb-2">
                  {contactContent.form.fields.name.label}
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  suppressHydrationWarning
                  className="w-full bg-transparent border-b border-border py-3 font-display text-lg focus:outline-none focus:border-lime transition-colors duration-300 placeholder:text-muted-foreground/30"
                  placeholder={contactContent.form.fields.name.placeholder}
                />
              </div>

              <div className="contact-form-field">
                <label className="font-mono-custom text-xs text-muted-foreground block mb-2">
                  {contactContent.form.fields.email.label}
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  suppressHydrationWarning
                  className="w-full bg-transparent border-b border-border py-3 font-display text-lg focus:outline-none focus:border-lime transition-colors duration-300 placeholder:text-muted-foreground/30"
                  placeholder={contactContent.form.fields.email.placeholder}
                />
              </div>

              <div className="contact-form-field">
                <label className="font-mono-custom text-xs text-muted-foreground block mb-2">
                  {contactContent.form.fields.message.label}
                </label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  suppressHydrationWarning
                  className="w-full bg-transparent border-b border-border py-3 font-display text-lg focus:outline-none focus:border-lime transition-colors duration-300 placeholder:text-muted-foreground/30 resize-none"
                  placeholder={contactContent.form.fields.message.placeholder}
                />
              </div>

              <div className="contact-form-field pt-4">
                <button
                  type="submit"
                  className="w-full bg-lime text-primary-foreground font-display font-bold text-lg py-4 hover:bg-lime/90 transition-all duration-300 active:scale-[0.98]"
                >
                  {contactContent.form.submitLabel}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
