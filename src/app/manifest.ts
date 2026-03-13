import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rozan.tech",
    short_name: "Rozan",
    description: "Rozan.tech portfolio",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
