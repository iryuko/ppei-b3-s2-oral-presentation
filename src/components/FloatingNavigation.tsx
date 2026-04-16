import { useState } from "react";
import type { NavItem } from "../data/siteData";

type FloatingNavigationProps = {
  items: NavItem[];
};

export function FloatingNavigation({ items }: FloatingNavigationProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`floating-nav ${open ? "is-open" : ""}`}>
      <button
        className="floating-nav__trigger"
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="floating-navigation-panel"
        onClick={() => setOpen((current) => !current)}
      >
        <span className="floating-nav__arrow" aria-hidden="true" />
      </button>
      <nav id="floating-navigation-panel" className="floating-nav__panel" aria-label="Page sections">
        {items.map((item, index) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            <span>{item.label}</span>
            <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}

