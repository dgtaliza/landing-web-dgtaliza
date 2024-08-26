import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import obfuscator from "rollup-plugin-obfuscator";
import { minify } from "terser";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "obfuscate",
      minify: minify,
      transform(code, id) {
        if (!id.endsWith(".js")) return;
        const obfuscatedCode = obfuscator.obfuscate(code, {
          compact: true,
          unicodeEscapeSequence: false,
        });
        return {
          code: obfuscatedCode,
          map: null,
        };
      },
    },
  ],
  base: "https://dgtaliza.com/",
});
