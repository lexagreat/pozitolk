<template>
   <header class="header">
      <div class="container">
         <div class="header__inner">
            <NuxtLink to="/" class="header__logo">
               <img src="/site/img/Logo.svg" alt="Позитолк">
            </NuxtLink>

            <!-- Десктоп меню -->
            <nav class="header__menu_desk">
               <ul>
                  <li>
                     <NuxtLink to="/for-psycho">Для психологов</NuxtLink>
                  </li>
                  <li>
                     <NuxtLink to="/gift">подарок близким</NuxtLink>
                  </li>
                  <li>
                     <NuxtLink to="/tests">тесты</NuxtLink>
                  </li>
                  <li>
                     <NuxtLink to="/blog">база знаний</NuxtLink>
                  </li>
               </ul>
            </nav>

            <div class="header__btns">
               <NuxtLink to="/account/client/onboard/choose" class="btn__choose"
                  style="color: white; border-bottom: 0; text-decoration: none;">Подобрать
                  психолога</NuxtLink>
               <div class="btn__login" @click="onLogin">Войти</div>
            </div>

            <!-- Кнопка вызова моб меню -->
            <div class="header__burger"></div>

            <!-- Моб меню -->
            <div class="header__menu_mob-wrap">
               <nav class="header__menu_mob">
                  <ul>
                     <li>
                        <NuxtLink to="/for-psycho">Для психологов</NuxtLink>
                     </li>
                     <!-- <li>
                        <NuxtLink to="">Для бизнеса</NuxtLink>
                     </li> -->
                     <li>
                        <NuxtLink to="/gift">Подарок близким</NuxtLink>
                     </li>
                     <li>
                        <NuxtLink to="/tests">Тесты</NuxtLink>
                     </li>
                     <li>
                        <NuxtLink to="/blog">База знаний</NuxtLink>
                     </li>
                  </ul>

                  <ul>
                     <!-- <li>
                        <NuxtLink to="/">Чат с позитолк</NuxtLink>
                     </li> -->
                     <li>

                        <NuxtLink to="https://t.me/pozi_tolk" target="_blank" rel="noopener noreferrer nofollow">Канал в
                           Telegram</NuxtLink>
                     </li>
                     <li>
                        <NuxtLink to="https://vk.com/club226735405" target="_blank" rel="noopener noreferrer nofollow">
                           Группа ВКонтакте</NuxtLink>
                     </li>
                     <li>
                        <NuxtLink to="https://www.youtube.com/@%D0%9F%D0%BE%D0%B7%D0%B8%D0%A2%D0%BE%D0%BB%D0%BA"
                           target="_blank" rel="noopener noreferrer nofollow">Канал на YouTube</NuxtLink>
                     </li>
                     <li>
                        <NuxtLink to="https://dzen.ru/id/66a6f3d7b58e526106986a4e" target="_blank"
                           rel="noopener noreferrer nofollow">Яндекс Дзен</NuxtLink>
                     </li>
                  </ul>
               </nav>
               <div class="header__btns_mob">
                  <div class="btn__choose">Подобрать психолога</div>
                  <div class="btn__login" @click="onLogin">Войти</div>
               </div>
            </div>

         </div>
      </div>
   </header>
</template>
<script setup>
import { useClientStore } from '@/stores/client/store'
const route = useRoute()
const router = useRouter()

const store = useClientStore()
onMounted(() => {
   // Моб меню из шапки
   $(".header__burger").on("click", function () {
      $(this).toggleClass("active");
      $(".header__menu_mob-wrap").toggleClass("active");
   });
   watch(() => route.params, () => {
      $(".header__burger").removeClass("active");
      $(".header__menu_mob-wrap").removeClass("active");
   })
})
const onLogin =async () => {
   if (store.token) {
      //router.push("/account/client/onboard/schedule")

      
      let psychologistsList = []
      psychologistsList = await store.getMyPsychologists()
      console.log(psychologistsList[0])

      if(!psychologistsList[0]){
         router.push('/account/client/onboard/ankete')
         //console.log("ankete")
      }else{
         router.push('/account/client/onboard/schedule')
         //console.log("scedule")
      }

   } else {
      router.push("/account/client/onboard")
   }
}
</script>


<style lang="scss"></style>