// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 2005, 
  },

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  base: "/",          // bon pour développement + déploiement standard
  //base: "/my-portfolio/"   // décommente seulement si tu déploies sur GitHub Pages avec repo nommé "my-portfolio"
});