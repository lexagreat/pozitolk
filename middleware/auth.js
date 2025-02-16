// middleware/auth.js
import { useClientStore } from "~/stores/client/store";

export default function () {
   const store = useClientStore();
   const router = useRouter();
   // Предположим, что токен хранится в Vuex store
   const token = store.token;
   // Если токена нет, перенаправляем на главную страницу
   if (!token || token=='') {
      router.push("/account/client/onboard");
   }
}
