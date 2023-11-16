import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "block-key-inputs",
    description: "キー入力をブロックするアプリです。",
    start_url: "/block-key-inputs",
    display: "standalone",
    background_color: "#f5a623",
    theme_color: "#d0021b",
    icons: [
      {
        src: "icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
