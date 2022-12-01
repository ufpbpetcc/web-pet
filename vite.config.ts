import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import unoCSS from 'unocss/vite';

// @ts-ignore
console.log(import.meta.env);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    unoCSS()
  ],
})
