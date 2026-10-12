"use client";

import { useEffect, useState } from "react";

const links = [
  ["01", "Leistungen", "#systeme"],
  ["02", "Produkte", "#produkte"],
  ["03", "Arbeitsweise", "#prozess"],
  ["04", "Weserbergland", "#weserbergland"],
] as const;

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.body.classList.add("menu-open");
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <div className={`mobile-menu ${open ? "is-open" : ""}`}>
      <button type="button" className="mobile-menu-toggle" aria-expanded={open} aria-controls="mobile-menu-panel" onClick={() => setOpen((value) => !value)}>
        <span className="sr-only">{open ? "Menü schließen" : "Menü öffnen"}</span>
        <span className="menu-icon" aria-hidden="true"><i /><i /></span>
      </button>
      <div id="mobile-menu-panel" className="mobile-menu-panel" aria-hidden={!open}>
        <div className="mobile-menu-inner">
          <div className="mobile-menu-meta"><span>KA TECHNOLOGIES</span><span>MENU / 2026</span></div>
          <div className="mobile-menu-content">
            <p className="mobile-menu-kicker">Digital systems studio<br />für das Weserbergland</p>
            <nav aria-label="Mobile Navigation">
              {links.map(([number, label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}><small>{number}</small><span>{label}</span><b>↗</b></a>)}
            </nav>
            <a className="mobile-menu-cta" href="#kontakt" onClick={() => setOpen(false)}>Projekt starten <span>↗</span></a>
          </div>
          <div className="mobile-menu-footer"><span>Webdesign · Individualsoftware</span><div className="mobile-menu-contact"><a href="tel:+4915568126206">0155 68126206</a><a href="mailto:info@katechnologies.de">E-Mail ↗</a></div></div>
        </div>
      </div>
    </div>
  );
}
