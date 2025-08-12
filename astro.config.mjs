// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['all'] // o un array con tu dominio fijo si no cambia
      // allowedHosts: [
      //   'devserver-preview--gilded-syrniki-6235cf.netlify.app'
      // ]
    }
  }
});
