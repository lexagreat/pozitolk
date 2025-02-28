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
         localStorage.phone = phone;
      },
      saveToken(token) {
         this.token = token;
         localStorage.token = token;
      },
      removeToken() {
         this.token = "";

         localStorage.token = "";
      },
      exitAccount() {
         this.token = "";

         localStorage.token = "";
         navigateTo("/")
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
      async sendPsycologistEducation(object) {
         try {
            const response = await useBaseFetch("/cabinet/psychologist_education/", {
               method: "POST",
               body: object,
               headers: {
                  // Исправлено на headers
                  Authorization: "Token " + this.token, // Исправлено на Authorization
               },
            });
            return response;
         } catch (err) {
            console.log("err", err);
         }
      },
      async sendMySchedule(object) {
         try {
            const response = await useBaseFetch("/cabinet/adjust-schedule/", {
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
      },async getPsychologists(filters = { sex: "", age_min: 0, age_max: 100 }) {
         try {
            const queryString = new URLSearchParams(filters).toString();
            const response = await useBaseFetch(`/store/psychologists/?${queryString}`, {
               headers: {
                  "Content-Type": "application/json",
                  Authorization: "Token " + this.token,
               },
            });
            return response;
         } catch (err) {
            console.log("err", err);
         }
      },
      
      async getHelp() {
         try {
            const response = await useBaseFetch("/wellness/faq/client/", {
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
      async getHelpPsychologist() {
         try {
            const response = await useBaseFetch("/wellness/faq/psychologist/", {
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
      async getMe() {
         try {
            const response = await useBaseFetch("/cabinet/self/", {
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
      },async getSelfClient() {
         try {
            const response = await useBaseFetch("/cabinet/self-client/", {
               headers: {
                  // Исправлено на headers
                  "Content-Type": "application/json", // Указываем тип контента
                  Authorization: "Token " + this.token, // Исправлено на Authorization
               },
            });
            console.log(response.detail); 
            return response;
         } catch (err) {
            console.log("err", err);
         }
      },async getSelfPsychologist() {
         try {
            const response = await useBaseFetch("/cabinet/self-psychologist/", {
               headers: {
                  // Исправлено на headers
                  "Content-Type": "application/json", // Указываем тип контента
                  Authorization: "Token " + this.token, // Исправлено на Authorization
               },
            });
            console.log(response.detail); 
            return response;
         } catch (err) {
            console.log("err", err);
         }
      },async сancelСonnection(connection_id) {
         try {
            const response = await useBaseFetch("/session/cancel-connection/"+connection_id+"/", {
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
      },async getChatMessageList(chat_id,page,page_size) {
         try {
            const response = await useBaseFetch("/session/message-list/"+chat_id+"/", {
               query: { page,page_size },
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
      },async getMyChatList() {
         try {
            const response = await useBaseFetch("/session/chat-list/", {
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
      },async getMyShedule() {
         try {
            const response = await useBaseFetch("/session/my_schedule/", {
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
      },async getMySheduleWeek(start_date,end_date) {
         try {
            const response = await useBaseFetch("/session/my_schedule/?start_date="+start_date+"&end_date="+end_date, {
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
      },async getMySchedulePsychologist() {
         try {
            const response = await useBaseFetch("/session/my_schedule/busy/", {
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
