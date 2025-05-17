import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger"; // ou ajuste conforme o export correto da lib

export default defineConfig(({ mode }) => ({
  base: "/seguranca-kk-online/", // This sets the correct base path for GitHub Pages
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
}));
