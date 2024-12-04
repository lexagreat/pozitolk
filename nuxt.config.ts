// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader"; // Импортируем svgLoader

export default defineNuxtConfig({
   devtools: { enabled: true },
   app: {
      head: {
         meta: [
            {
               name: "viewport",
               content: "width=device-width, initial-scale=1.0",
            },
            {
               name: "format-detection",
               content: "telephone=no",
            },
         ],
         link: [
            {
               rel: "stylesheet",
               href: "/site/css/main.css",
            },
         ],
         script: [
            {
               src: "/site/js/jquery-3.7.1.min.js",
            },
         ],
      },
   },
   vite: {
      plugins: [
         svgLoader(), // Добавляем плагин для работы с SVG как с Vue компонентами
      ],
   },
   experimental: {
      typedPages: true,
      payloadExtraction: true, // Уменьшает объём передаваемых данных // оптимизация
   },
   nitro: {
      // оптимизация
      compressPublicAssets: true, // Включить сжатие
   },
});
