import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import terser from "@rollup/plugin-terser";
import obfuscator from "rollup-plugin-obfuscator";

export default defineConfig({
  plugins: [
    react(),
    terser({
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    }),
    obfuscator({
      options: {
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 0.75,
        deadCodeInjection: true,
        deadCodeInjectionThreshold: 0.4,
        stringArray: true,
        rotateStringArray: true,
        shuffleStringArray: true,
        splitStrings: true,
        stringArrayThreshold: 0.75,
      },
    }),
  ],
  base: "https://dgtaliza.com/",
  optimizeDeps: {
    include: [
      "@mui/icons-material",
      "@mui/material",
      "@mui/base",
      "@mui/styles",
      "@mui/system",
      "@mui/utils",
      "@emotion/cache",
      "@emotion/react",
      "@emotion/styled",
      "lodash",
    ],
    exclude: [],
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
});
