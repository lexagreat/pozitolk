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
         script: [
            {
               src: "/site/js/jquery-3.7.1.min.js",
            },
         ],
      },
   },
   runtimeConfig: {
      public: {
         baseURL: process.env.BASE_URL || "https://backend.позитолк.рф",
      },
   },
   vite: {
      plugins: [
         svgLoader(), // Добавляем плагин для работы с SVG как с Vue компонентами
      ],
   },
   plugins: ["~/plugins/initAuth.client.js"],
   experimental: {
      typedPages: true,
      payloadExtraction: true, // Уменьшает объём передаваемых данных // оптимизация
   },
   nitro: {
      // оптимизация
      compressPublicAssets: true, // Включить сжатие
   },
   modules: ["@pinia/nuxt"],
});
