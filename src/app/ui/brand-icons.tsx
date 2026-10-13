type BrandIconName = "web" | "software" | "process" | "portal" | "stats" | "automation";

export default function BrandIcon({ name, className }: { name: BrandIconName; className?: string }) {
  const common = { viewBox: "0 0 48 48", fill: "none", "aria-hidden": true, className } as const;
  if (name === "web") return <svg {...common}><rect x="7" y="9" width="34" height="29" rx="3" /><path d="M7 16h34M13 12.5h.01M17 12.5h.01M21 12.5h.01" /><path d="m16 27 5 5 11-11" /></svg>;
  if (name === "software") return <svg {...common}><rect x="8" y="8" width="32" height="32" rx="5" /><path d="m18 20-5 4 5 4M30 20l5 4-5 4M27 16l-6 16" /></svg>;
  if (name === "process") return <svg {...common}><circle cx="12" cy="13" r="4" /><circle cx="36" cy="13" r="4" /><circle cx="24" cy="35" r="4" /><path d="M16 13h16M14.5 16.5 21 31M33.5 16.5 27 31" /></svg>;
  if (name === "portal") return <svg {...common}><rect x="8" y="8" width="32" height="32" rx="4" /><path d="M8 17h32M15 13h.01M19 13h.01M23 13h.01M15 24h8v8h-8zM27 24h6M27 29h6M27 34h6" /></svg>;
  if (name === "stats") return <svg {...common}><path d="M9 38V25M19 38V15M29 38V21M39 38V9M7 38h34" /><path d="m10 19 9-7 10 5 10-9" /></svg>;
  return <svg {...common}><path d="M25 6 11 26h12l-2 16 16-23H25z" /><path d="M8 12h5M35 12h5M8 36h5M35 36h5" /></svg>;
}
