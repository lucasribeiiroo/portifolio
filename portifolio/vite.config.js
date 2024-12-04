import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

export default defineConfig({
  server: {
    watch: {
      usePolling: true,
    },
  },
  plugins: [react(), tailwindcss()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
