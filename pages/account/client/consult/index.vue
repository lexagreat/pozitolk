<template>
   <main class="main">
      <div class="dashboard">

         <div class="dashboard__title">Расписание</div>

         <div class="schedule">
            <div class="schedule__list">
               <div class="schedule__item" v-for="item in items" :key="item">
                  <div class="schedule__item-first">
                     <div class="schedule__item-img">
                        <img :src="'/client/img/' + item.img" :alt="item.name">
                     </div>
                     <div class="schedule__item-name">
                        <div class="schedule__item-label">Имя/Псевдоним</div>
                        <div class="schedule__item-text">
                           {{ item.name }}
                        </div>
                     </div>
                  </div>
                  <div class="schedule__item-second">
                     <div class="schedule__item-lastsess">
                        <div class="schedule__item-label">Последняя сессия</div>
                        <div class="schedule__item-text">
                           {{ item.lastsess }}
                        </div>
                     </div>
                     <div class="schedule__item-nearestsess">
                        <div class="schedule__item-label">Ближайшая сессия</div>
                        <div class="schedule__item-text">
                           {{ item.nearestsess }}
                        </div>
                     </div>
                  </div>
                  <div class="schedule__item-third">
                     <NuxtLink to="/account/client/consult/asdasda" style="color: #FF6900; text-decoration: none;"
                        class="schedule__btn">
                        Перейти к расписанию
                     </NuxtLink>
                  </div>
               </div>
            </div>
         </div>

      </div>

      <div class="sidebar">

         <div class="consultation">
            <div class="consultation__title">Консультация со специалистом</div>
            <div class="consultation__info">Специалист ответит в удобное время Вам в чате</div>
            <div class="consultation__btn">Запустить консультацию</div>
         </div>

      </div>
   </main>
</template>
<script setup>
definePageMeta({
   layout: "client"
})
const items = ref([
   {
      'name': 'Даниил',
      'img': 'schedule__item_img_1.png',
      'lastsess': '25.06.24',
      'nearestsess': '30.06.24'
   },
   {
      'name': 'Мария',
      'img': 'schedule__item_img_2.png',
      'lastsess': '25.06.24',
      'nearestsess': 'Вы не записаны'
   },
   {
      'name': 'Евгений',
      'img': 'schedule__item_img_3.png',
      'lastsess': '25.06.24',
      'nearestsess': '30.06.24'
   },
])
useHead({
   link: [
      {
         rel: "stylesheet",
         href: "/client/css/page-5.css",
      },
   ],
   title: "Позитолк"
})
</script>