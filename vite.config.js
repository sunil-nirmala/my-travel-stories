import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Relative asset paths so the production build works correctly on Netlify,
  // Vercel, GitHub Pages, or any subfolder — no extra config needed.
  base: "./",
});
