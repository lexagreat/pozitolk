import { defineStore } from "pinia";

export const useClientStore = defineStore("client", {
   state: () => ({
      phone: "89616587909",
      token: "",
      user: null,
   }),
   actions: {
      init() {
         if (localStorage.token) {
            this.token = localStorage.token;
         }
      },
      setPhone(phone) {
         this.phone = phone;
      },
      saveToken(token) {
         this.token = token;
         localStorage.token = token;
      },
      removeToken() {
         this.token = "";

         localStorage.token = "";
      },
      async sendAnkete(object) {
         try {
            const response = await useBaseFetch("/cabinet/survey/", {
               method: "POST",
               body: object,
               headers: {
                  // Исправлено на headers
                  "Content-Type": "application/json", // Указываем тип контента
                  Authorization: "Token " + this.token, // Исправлено на Authorization
               },
            });
            return response;
         } catch (err) {
            console.log("err", err);
         }
      },
      async getPsychologists() {
         try {
            const response = await useBaseFetch("/store/psychologists/", {
               headers: {
                  // Исправлено на headers
                  "Content-Type": "application/json", // Указываем тип контента
                  Authorization: "Token " + this.token, // Исправлено на Authorization
               },
            });
            return response;
         } catch (err) {
            console.log("err", err);
         }
      },
   },
});
