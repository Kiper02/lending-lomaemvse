import { defineConfig } from "vite";

export default defineConfig({
  base: "/lomaemvse/",
  root: ".",
  publicDir: "public",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "./index.html",
      },
    },
  },
  server: {
    open: true,
  },
});
