import { useClientStore } from "~/stores/client/store";

export default defineNuxtRouteMiddleware(async(to) => {
   if (!to.path.startsWith("/account")) {
      to.meta.layout = "site";
      if (process.client) {
         const styleIds = ["ankete-main","ankete-page-3","calendar-main-2", "calendar-page-5", "calendar-page-7","choose-main","choose-page-4","index-main","index-intlTelInput","schedule-main-2","schedule-page-5","sms-main","sms-page-2"];
         styleIds.forEach(id => {
            const link = document.getElementById(id);
            if (link) {
               link.remove();
            }
         });
       }
      useHead({
         link: [
            {
               rel: "stylesheet",
               href: "/site/css/main.css",
            },
         ],
      });
   }
   else if (to.path === "/account/client/onboard" ||to.path === "/account/client/onboard/sms" ) {
      
      // Clear the head elements related to the site layout
      
      useHead({
         link: [],
      });
   } else {
      // Clear the head elements related to the site layout
      
      useHead({
         link: [],
      });
      const store = useClientStore();

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
