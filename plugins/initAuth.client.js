import { useClientStore } from "~/stores/client/store";

export default () => {
   const store = useClientStore();
   if (process.client) {
      store.init();
   }
};
