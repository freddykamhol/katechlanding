import { ImageResponse } from "next/og";

export const alt = "Karam Azmy Technologies – Software, Websites und Prozessoptimierung";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#f7f3ec",
          color: "#111815",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 18% 20%, rgba(121,216,189,0.42), transparent 28%), radial-gradient(circle at 86% 22%, rgba(244,184,96,0.42), transparent 30%), linear-gradient(135deg, #f7f3ec 0%, #edf7f2 58%, #f7f3ec 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -130,
            bottom: -160,
            width: 520,
            height: 520,
            borderRadius: 999,
            background: "rgba(17,24,21,0.08)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            width: "100%",
            height: "100%",
            padding: 72,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                display: "flex",
                width: 74,
                height: 74,
                borderRadius: 999,
                alignItems: "center",
                justifyContent: "center",
                background: "#111815",
                color: "#9be5cf",
                fontSize: 28,
                fontWeight: 800,
              }}
            >
              KA
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 31, fontWeight: 800 }}>Karam Azmy Technologies</div>
              <div style={{ marginTop: 6, fontSize: 23, color: "#287563" }}>Software-Entwicklung aus Holzminden</div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                borderRadius: 999,
                border: "1px solid rgba(40,117,99,0.28)",
                background: "rgba(255,255,255,0.62)",
                padding: "14px 22px",
                color: "#287563",
                fontSize: 22,
                fontWeight: 800,
                letterSpacing: 1.2,
                textTransform: "uppercase",
              }}
            >
              Prozessoptimierung · Websites · Individualsoftware
            </div>
            <div style={{ marginTop: 30, fontSize: 76, lineHeight: 0.96, letterSpacing: -4.8, fontWeight: 800 }}>
              Software, die Abläufe einfacher macht.
            </div>
            <div style={{ marginTop: 28, fontSize: 28, lineHeight: 1.35, color: "#4d5955" }}>
              Digitale Systeme für Verwaltung, Dokumentation, Vermietung, Umzugsbüros und Zeiterfassung.
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
