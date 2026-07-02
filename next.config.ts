import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {
    resolveAlias: {
      // fabric.js references these Node-only packages in a browser-dead
      // code branch. Point them at an empty module so Turbopack can
      // resolve them without bundling the real (heavy) dependencies.
      // Note: Turbopack matches exact specifiers, so the deep jsdom
      // subpaths must be listed individually alongside the bare "jsdom".
      jsdom: "./empty-module.ts",
      "jsdom/lib/jsdom/living/generated/utils": "./empty-module.ts",
      "jsdom/lib/jsdom/utils": "./empty-module.ts",
      canvas: "./empty-module.ts",
    },
  },
};

export default nextConfig;
