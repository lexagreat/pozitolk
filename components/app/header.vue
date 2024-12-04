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
                     <li>
                        <NuxtLink to="">Для бизнеса</NuxtLink>
                     </li>
                     <li class="mark">
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
                     <li>
                        <NuxtLink to="/">Чат с позитолк</NuxtLink>
                     </li>
                     <li>
                        <NuxtLink to="/">Канал в Telegram</NuxtLink>
                     </li>
                     <li>
                        <NuxtLink to="/">Группа ВКонтакте</NuxtLink>
                     </li>
                     <li>
                        <NuxtLink to="/">Канал на YouTube</NuxtLink>
                     </li>
                     <li>
                        <NuxtLink to="/">Яндекс Дзен</NuxtLink>
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

onMounted(() => {
   // Моб меню из шапки
   $(".header__burger").on("click", function () {
      $(this).toggleClass("active");
      $(".header__menu_mob-wrap").toggleClass("active");
   });
})
</script>


<style lang="scss"></style>