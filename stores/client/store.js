import { defineStore } from "pinia";

export const useClientStore = defineStore("client", {
   state: () => ({
      phone: "",
      token: "",
      // phone: "89616587909",
      // token: "97e56056ccb772d8672180148a3cf350bc14577e",
      user: null,
   }),
   actions: {
      init() {
         if (localStorage.token) {
            this.token = localStorage.token;
            return;
         }
         if (this.token) {
            localStorage.token = this.token;
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
      },async getMyPsychologists() {
         try {
            const response = await useBaseFetch("/session/psychologists-list/", {
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
      },async getSchedulePsychologist(id,start_date,end_date) {
         try {
            const response = await useBaseFetch("/session/schedule/"+id+"/?start_date="+start_date+"&end_date="+end_date, {
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
      async closeSession(sessionId) {
         try {
            const response = await useBaseFetch(`/session/cancel/${sessionId}/`, {
               method: "POST",
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
