<template>
   <div class="wrapper">
      <SidebarAccountClientOnBoard />
      <main class="main">
         <div class="dashboard">
            <form class="login">
               <div class="container">
                  <div class="login__inner">
                     <div class="login__inner-first">
                        <div class="login__title">Введите номер телефона</div>
                        <div class="login__info">Мы отправим код в SMS</div>
                        <div class="login__input">
                           <div class="login__phone">
                              <input id="phone" name="phone" type="tel" value="" placeholder="999 999 99 99">
                              <span id="valid-msg" class="hide"></span>
                              <span id="error-msg" class="hide"></span>
                              <div class="checkbox_flex qstn">
                                 <div class="qstn__row">
                                    <label class="qstn__info-checkbox">
                                       <input type="checkbox" name="qstn-4" id="checkbox" v-model="isPsychologist">
                                       <div class="input_checkbox"></div>
                                       <span>
                                          я психолог
                                       </span>
                                    </label>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="login__inner-second">
                        <button id="btn" type="submit" class="login__submit btn">Получить код по SMS</button>
                        <div class="login__policy">
                           Нажимая «Получить код» вы принимаете <NuxtLink to="/docs/polz-sogl.pdf" target="_blank">
                              пользовательское соглашение,</NuxtLink> даете <NuxtLink to="/docs/pol-conf.pdf"
                              target="_blank">согласие на обработку персональных данных.</NuxtLink>
                        </div>
                     </div>
                  </div>
               </div>
            </form>

         </div>
      </main>
   </div>
</template>
<script setup>
import { useClientStore } from '~/stores/client/store';

const router = useRouter()
const store = useClientStore()
const isPsychologist = ref(false);
useHead({
   link: [
      {
         rel: "stylesheet",
         href: "/client/css/main.css",
         id: "index-main",
      },
      {
         rel: "stylesheet",
         href: "/client/css/intlTelInput.min.css",
         id: "index-intlTelInput",
      },
      {
         rel: "stylesheet",
         href: "/client/css/page-1.css",
         id: "index-page-1",
      },
   ],
   script: [
      {
         src: "/client/js/intlTelInputWithUtils.js",
      },
   ]
})

const onSend = async () => {
   const input = document.querySelector("#phone");
   const pre = document.querySelector('.iti__selected-dial-code').innerHTML
   console.log(pre + input.value);

   let response = await useBaseFetch('/cabinet/send-code/', {
      method: "POST",
      body: {
         phone: pre + input.value
      }
   })
   console.log(response);
   store.setPhone(pre + input.value)
   router.push({ 
      path: '/account/client/onboard/sms', 
      query: { message: response.message,isPsychologist: isPsychologist.value} 
   });
}

onMounted(() => {
   // window.location.reload()
   setTimeout(() => {
      // START "International Telephone Input With Flags and Dial Codes"
      const input = document.querySelector("#phone");
      const iti = window.intlTelInput(input, {
         countrySearch: false,
         formatAsYouType: true,
         initialCountry: "ru",
         separateDialCode: true,
         strictMode: true,
      });
      window.iti = iti; // useful for testing

      const button = document.querySelector("#btn");
      const errorMsg = document.querySelector("#error-msg");
      const validMsg = document.querySelector("#valid-msg");
      const errorMap = ["Неверный номер", "Неверный код страны", "Слишком короткий номер", "Слишком длинный номер", "Неверный номер"];

      const reset = () => {
         input.classList.remove("error");
         errorMsg.innerHTML = "";
         validMsg.innerHTML = "";
         errorMsg.classList.add("hide");
         validMsg.classList.add("hide");
      };

      const showError = (msg) => {
         input.classList.add("error");
         errorMsg.innerHTML = msg;
         errorMsg.classList.remove("hide");
      };

      // on click button: validate
      button.addEventListener('click', (e) => {
         e.preventDefault();
         reset();
         if (!input.value.trim()) {
            showError("Заполните номер телефона");
         } else if (iti.isValidNumber()) {
            // validMsg.innerHTML = "Номер телефона: " + iti.getNumber();
            validMsg.innerHTML = "Отправляем SMS. Пожалуйста, ожидайте...";
            validMsg.classList.remove("hide");

            onSend()

         } else {
            const errorCode = iti.getValidationError();
            const msg = errorMap[errorCode] || "Невалидный номер";
            showError(msg);
         }
      });

      // on keyup / change flag: reset
      input.addEventListener('change', reset);
      input.addEventListener('keyup', reset);

      // END "International Telephone Input With Flags and Dial Codes"
   }, 1000)
})

</script>


<style scoped>
.wrapper {
   background: linear-gradient(180deg, #FDFBFB, #F7F7F7); 
}
.checkbox_flex{
   display: flex;
   color: black;
   align-items: center;
}
.checkbox_flex >input{
   width: auto;
}
.checkbox_flex >label{
   font-size: 20px;
   margin-left: 10px;
   user-select: none;
}
.qstn .qstn__row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 6px;
}
.qstn .qstn__info-checkbox {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: center !important;
    gap: 6px;
    margin-top: 12px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.qstn .qstn__info-checkbox input {
    display: none;
}
.qstn .qstn__info-checkbox .input_checkbox {
    background-color: #f7f7f7;
    border: 2px solid #dddddd;
    min-width: 24px;
    height: 24px;
    border-radius: 8px;
    margin: 4px;
    cursor: pointer;
}
.qstn {
    color: #363636;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 32px;
}
@media (max-width: 1190px) {
.wrapper{
   background: #fff;
}}
</style>