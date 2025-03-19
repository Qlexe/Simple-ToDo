import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // дозволяє доступ з локальної мережі
    port: 5173,
    strictPort: true,
  },
  // base: '/', // базовий URL для всього застосунку
  // build: {
  //   outDir: 'dist',
  //   assetsDir: 'assets',
  //   sourcemap: true
  // }
});
