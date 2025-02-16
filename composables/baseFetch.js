import { useClientStore } from "~/stores/client/store";
import { toast } from "bulma-toast";
export async function useBaseFetch(request, opts) {
   const config = useRuntimeConfig();

   try {
      let myRequest = await $fetch(request, {
         baseURL: config.public.baseURL,
         ...opts,
      });

      return myRequest;
   } catch (err) {
      if (err.data){
         if (err.data.detail){
            if(err.data.detail=='Invalid token.'){
               const store = useClientStore();
               console.log(store.token)
               store.saveToken('');
               console.log(store.token)
                  navigateTo("/")
            }
            if(err.data.detail=='You do not have permission to perform this action.'){
               navigateTo("/")
            }
         }
         if(err.data.email && err.data.email == 'Анкета with this Эл. почта already exists.'){
            toast({
                     message: "данный email привязан к другому пользователю, введите другую почту",
                     type: "is-error", // если збс - то is-success, если плохо то is-error
                     dismissible: true,
                     pauseOnHover: true,
                     duration: 13000,
                     position: "bottom-right",
                     className: "toast",
                  });
         }
      }
      return err;
   }
}
