import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KA Technologies · digital systems studio",
    short_name: "KA Technologies",
    description: "Webdesign und Individualsoftware im Weserbergland.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0d0d",
    theme_color: "#0b0d0d",
    lang: "de-DE",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/apple-icon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  };
}
