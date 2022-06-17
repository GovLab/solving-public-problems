import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteFonts from 'vite-plugin-fonts'
import Pages from "vite-plugin-pages";
// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    vue(),
    Pages({
      dirs: 'src/pages',
      extensions: ['vue', 'ts'],
    }),
    ViteFonts({
      typekit: {
          /**
           * Typekit project id
           */
          id: 'fnf8omo',

          /**
           * enable non-blocking renderer
           *   <link rel="preload" href="xxx" as="style" onload="this.rel='stylesheet'">
           * default: true
           */
          defer: true
        },
    })
  ],
  server: {
    host: '0.0.0.0',
    hmr: {
      host: 'localhost', // you could make this an ENV var
      port: '3000',
      path: '/'
    }
  }
})
