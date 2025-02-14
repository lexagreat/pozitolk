<template>
   <div class="wrapper">
      <SidebarAccountClientOnBoard />
      <main class="main">
         <div class="dashboard">

            <form class="login">
               <div class="container">
                  <div class="login__inner">
                     <div class="login__inner-first">
                        <div class="login__title">Введите код из SMS</div>
                        <div class="login__info">Код отправлен на <span class="phone_number">+7 999 999 99 99</span>
                        </div>
                        <div class="login__input">
                           <div class="login__password">
                              <div id="sms-code" class="sms-code">
                                 <input v-for="(item, index) in fields" v-model="fields[index]" type="text"
                                    maxlength="1" pattern="[0-9]*" inputmode="numeric" placeholder="•">
                              </div>
                           </div>
                           <span v-if="error">Неверный код</span>
                        </div>
                        <div class="login__repeat">Повторный код через <span class="repeat_code">45</span> сек</div>
                     </div>
                     <div class="login__inner-second">
                        <NuxtLink to="/account/client/onboard" class="btn__back">Назад к вводу номера</NuxtLink>
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
const store = useClientStore()
const router = useRouter()
if (!store.phone.length) {
   router.push('/account/client/onboard')
}
const route = useRoute();
const message = route.query.message;
useHead({
   link: [
      {
         rel: "stylesheet",
         href: "/client/css/main.css",
      },
      {
         rel: "stylesheet",
         href: "/client/css/page-2.css",
      },
   ],
})
onMounted(() => {
   console.log("message")
   console.log(message)
   if (message.length == 6) {
      fields.value = message.slice(0, 6).split('');
   }
   // START обраобтка input "SMS-код"
   $('#sms-code input').on('input', function () {
      const $this = $(this);
      if ($this.val().length === 1) {
         $this.next('input').focus();
      }
   });
   $('#sms-code input').on('keydown', function (e) {
      const $this = $(this);
      if (e.key === 'Backspace' && !$this.val()) {
         $this.prev('input').focus();
      }
   });
   $('#sms-code input').on('paste', function (e) {
      const pasteData = e.originalEvent.clipboardData.getData('text').trim();
      const inputs = $('#sms-code input');

      if (pasteData.length <= inputs.length) {
         pasteData.split('').forEach((char, i) => {
            $(inputs[i]).val(char);
         });
         inputs.last().focus();
      }
      e.preventDefault();
   });
   // END обраобтка input "SMS-код"

   // START обратный отсчет
   let $counter = $('.repeat_code');
   let countdown = parseInt($counter.text(), 10);
   let interval = setInterval(function () {
      if (countdown > 0) {
         countdown--;
         $counter.text(countdown);
      } else {
         clearInterval(interval);
      }
   }, 1000);
   // END обратный отсчет
})

const fields = ref(['', '', '', '', '', ''])
const code = computed(() => fields.value.join('').replaceAll(',', ''))
const error = ref(false)
const verifyCode = async () => {
   let response = await useBaseFetch("/cabinet/verify-code/", {
      method: "POST",
      body: {
         code: code.value,
         phone: store.phone
      }
   })
   if (!response?.user?.id) {
      error.value = true
      return
   }
   console.log(response);
   console.log(store.phone);
   store.saveToken(response.token)
   store.user = response.user
   if (!response.user.has_survey) {
      router.push('/account/client/onboard/ankete')
   } else {
      router.push('/account/client/onboard/schedule')
   }
}
watch(code, async () => {
   error.value = false
   if (code.value.length == 6) {
      await verifyCode()
   }
})
</script>