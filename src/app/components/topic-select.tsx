"use client";

import { useEffect, useId, useRef, useState } from "react";

const topics = ["Webdesign", "Individualsoftware", "Prozessoptimierung", "SSDmanagement", "MPcontrol", "Vermietungssystem", "MoveOffice", "Zeiterfassung"];

export default function TopicSelect({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const id = useId();
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!open) return;
    const close = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [open]);

  useEffect(() => {
    if (open) document.getElementById(`${id}-option-${active}`)?.scrollIntoView({ block: "nearest" });
  }, [active, id, open]);

  function choose(index: number) {
    onChange(topics[index]);
    setOpen(false);
    trigger.current?.focus();
  }

  return (
    <div className="form-field topic-select" ref={root} onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
    }}>
      <span id={`${id}-label`}>Worum geht es?</span>
      <input type="hidden" name="topic" value={value} />
      <button ref={trigger} type="button" role="combobox" aria-labelledby={`${id}-label`} aria-controls={`${id}-list`} aria-expanded={open} aria-haspopup="listbox" aria-activedescendant={open ? `${id}-option-${active}` : undefined} className="select-trigger" onClick={() => {
        setActive(Math.max(0, topics.indexOf(value)));
        setOpen(!open);
      }} onKeyDown={(event) => {
        if (["ArrowDown", "ArrowUp", "Home", "End", "Enter", " ", "Escape"].includes(event.key)) {
          event.preventDefault();
          if (event.key === "Escape") { setOpen(false); return; }
          if (event.key === "Enter" || event.key === " ") {
            if (open) choose(active);
            else { setActive(Math.max(0, topics.indexOf(value))); setOpen(true); }
            return;
          }
          setOpen(true);
          setActive((current) => event.key === "Home" ? 0 : event.key === "End" ? topics.length - 1 : Math.min(topics.length - 1, Math.max(0, (open ? current : topics.indexOf(value)) + (event.key === "ArrowDown" ? 1 : -1))));
        } else if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
          const match = topics.findIndex((topic) => topic.toLocaleLowerCase("de").startsWith(event.key.toLocaleLowerCase("de")));
          if (match >= 0) { event.preventDefault(); setOpen(true); setActive(match); }
        }
      }}><span>{value}</span><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.8" /></svg></button>
      {open && <ul className="select-options" role="listbox" id={`${id}-list`} aria-labelledby={`${id}-label`}>{topics.map((topic, index) => <li key={topic} id={`${id}-option-${index}`} role="option" aria-selected={value === topic} className={active === index ? "active" : ""} onPointerMove={() => setActive(index)} onPointerDown={(event) => event.preventDefault()} onClick={() => choose(index)}>{topic}<span aria-hidden="true">{value === topic ? "✓" : ""}</span></li>)}</ul>}
    </div>
  );
}
