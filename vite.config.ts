import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { presetIcons } from 'unocss/preset-icons';
import { presetWind } from 'unocss'
import unoCSS from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    unoCSS({
      theme: {
        fontFamily: {
          inter: 'InterVariable',
          lexend: 'LexendVariable',
          montserrat: 'MontserratVariable'
        }
      },
      presets: [presetWind(), presetIcons()]
    })
  ],
  base: "/proxy/5173/"
})