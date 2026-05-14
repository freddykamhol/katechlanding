import Hero from "./ui/hero";

export default function Home() {
  return (
    <Hero
      brand="Karam Azmy Technologies"
      headline="Perfekt. Schnell. Skalierbar."
      subhead={
        <>
          <p>
            Hier entsteht die neue Website von{" "}
            <span className="font-semibold text-zinc-100">Karam Azmy Technologies</span> —
            mit Fokus auf Prozessoptimierung, Plattformen und Engineering-Exzellenz.
          </p>
          <p className="mt-3">
            Weniger Reibung. Mehr Durchsatz. Messbare Wirkung — vom ersten Tag an.
          </p>
        </>
      }
      email="info@katechnologies.de"
    />
  );
}
