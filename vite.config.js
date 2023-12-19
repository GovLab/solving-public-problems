// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import ViteFonts from 'vite-plugin-fonts'
// import Pages from "vite-plugin-pages";
// // https://vitejs.dev/config/
// export default defineConfig({
//   base: "/",
//   plugins: [
//     vue(),
//     Pages({
//       dirs: 'src/pages',
//       extensions: ['vue', 'ts'],
//     }),
//     ViteFonts({
//       typekit: {
//           /**
//            * Typekit project id
//            */
//           id: 'fnf8omo',

//           /**
//            * enable non-blocking renderer
//            *   <link rel="preload" href="xxx" as="style" onload="this.rel='stylesheet'">
//            * default: true
//            */
//           defer: true
//         },
//     })
//   ],
//   server: {
//     host: '0.0.0.0',
//     hmr: {
//       host: 'localhost', // you could make this an ENV var
//       port: '3005',
//       path: '/'
//     }
//   },
// })

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePluginRadar } from "vite-plugin-radar";
import ViteFonts from 'vite-plugin-fonts'
import { format } from 'date-fns';
import { isPast } from 'date-fns';

import Pages from "vite-plugin-pages";


// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  assetsInclude: ['**/*.png'],
  data () {
    return {
      format,
      isPast
    }
  },
  plugins: [
    VitePluginRadar({
      // Google Analytics tag inject
      enableDev: true,
      analytics: {
        id: 'G-LS299J2EWH',
      },
    }),
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
      port: '3005',
      path: '/'
    }
  },
}

)


