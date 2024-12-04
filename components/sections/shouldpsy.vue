<template>
   <div class="shouldpsy">
      <div class="container">
         <div class="shouldpsy__inner">
            <div class="shouldpsy__header">
               <h2>
                  У нас есть четко сформированное представление<br>
                  о том, каким должен быть психолог ПозиТолк<br>
                  Если вы узнаете себя — нам точно по пути
               </h2>
               <div class="shouldpsy__arrows">
                  <div class="shouldpsy__prev"></div>
                  <div class="shouldpsy__next"></div>
               </div>
            </div>
            <div class="shouldpsy__list">
               <div class="shouldpsy__item" v-for="item in shouldpsy" :key="item">
                  <div class="shouldpsy__item-img">
                     <img :src="item.img" :alt="item.title">
                  </div>
                  <div class="shouldpsy__item-body">
                     <div class="shouldpsy__item-title" v-html="item.title">
                     </div>
                     <div class="shouldpsy__item-desc" v-html="item.desc">
                     </div>
                  </div>
               </div>
            </div>
            <div class="shouldpsy__scrollbar">
               <div class="shouldpsy__scrollbar-thumb"></div>
            </div>
         </div>
      </div>
   </div>
</template>
<script setup>
const shouldpsy = ref([
   {
      img: '/site/img/shouldpsy__item_1.svg',
      title: 'Образование',
      desc: 'Обучение в методе Позитивная и Транскультурная Психотерапия, наличие Европейского сертификата'
   },
   {
      img: '/site/img/shouldpsy__item_2.svg',
      title: 'Сертификация',
      desc: 'Обучение в психотерапевтических подходах/ специализациях от 500 часов'
   },
   {
      img: '/site/img/shouldpsy__item_3.svg',
      title: 'Этические качества',
      desc: 'Каждый специалист решает тест на этику и проходит собеседование по личностным ценностям.'
   },
   {
      img: '/site/img/shouldpsy__item_1.svg',
      title: 'Образование',
      desc: 'Обучение в методе Позитивная и Транскультурная Психотерапия, наличие Европейского сертификата'
   },
   {
      img: '/site/img/shouldpsy__item_2.svg',
      title: 'Сертификация',
      desc: 'Обучение в психотерапевтических подходах/ специализациях от 500 часов'
   },
   {
      img: '/site/img/shouldpsy__item_3.svg',
      title: 'Этические качества',
      desc: 'Каждый специалист решает тест на этику и проходит собеседование по личностным ценностям.'
   },
])

onMounted(() => {
   // Кнопки для скролла блока "У нас есть четко сформированное..."
   $(".shouldpsy__prev").click(function () {
      $(".shouldpsy__list").animate({ scrollLeft: "-=432" }, 400);
   });
   $(".shouldpsy__next").click(function () {
      $(".shouldpsy__list").animate({ scrollLeft: "+=432" }, 400);
   });
})
</script>