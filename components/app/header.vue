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
               <div class="btn__choose">Подобрать психолога</div>
               <div class="btn__login">Войти</div>
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
                        <NuxtLink to="https://t.me/+j343I9IJYcBhMThi" target="_blank"
                           rel="noopener noreferrer nofollow">Канал в Telegram</NuxtLink>
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
                  <div class="btn__login">Войти</div>
               </div>
            </div>

         </div>
      </div>
   </header>
</template>
<script setup>
const route = useRoute()
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

</script>


<style lang="scss"></style>