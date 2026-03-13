"use client";

type SectionHeaderProps = {
  index: string;
  title: string;
  metaRight?: string;
};

export default function SectionHeader({ index, title, metaRight }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-16">
      <span className="font-mono-custom text-xs text-lime">{index}</span>
      <span className="font-mono-custom text-xs text-muted-foreground tracking-widest uppercase">
        {title}
      </span>
      <div className="flex-1 h-px bg-border" />
      {metaRight ? (
        <span className="font-mono-custom text-xs text-muted-foreground">({metaRight})</span>
      ) : null}
    </div>
  );
}
