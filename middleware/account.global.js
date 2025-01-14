export default defineNuxtRouteMiddleware((to) => {
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
      });
   }
});
