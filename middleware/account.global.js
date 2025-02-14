import { useClientStore } from "~/stores/client/store";

export default defineNuxtRouteMiddleware(async(to) => {
   if (!to.path.startsWith("/account")) {
      to.meta.layout = "site";
      useHead({
         link: [
            {
               rel: "stylesheet",
               href: "/site/css/main.css",
            },
         ],
      });
   } else {
      // Clear the head elements related to the site layout
      useHead({
         link: [],
      });const store = useClientStore();

      // Если выполняется на клиенте
      if (process.client) {
         if (!store.token) {
            await store.init(); // Дождаться завершения инициализации

            // Если пользователь не авторизован, перенаправить на главную
            if (!store.token) {
               return navigateTo("/"); // Редирект на главную
            }
         }
      }
   }
});
