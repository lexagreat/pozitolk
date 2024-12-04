<template>
   <!-- Самый важный подарок  -->
   <section class="top">
      <div class="container">
         <div class="top__inner">
            <div class="top__first">
               <h1 class="top__h1">Самый важный подарок</h1>
               <div class="top__desc">
                  Нам часто нужна помощь, но иногда сложно ее попросить.<br>
                  Позаботьтесь о близком человеке - подарите ему сессию с психологом.
               </div>
               <div class="tariff-toggle">
                  <div class="tariff-item active">
                     <div class="tariff-item__img">
                        <img src="/site/img/person.svg" alt="Для себя">
                     </div>
                     <div class="tariff-item__body">
                        <div class="tariff-item__label">Для себя</div>
                        <div class="tariff-item__desc">от 2000 ₽ ~ 50 минут</div>
                     </div>
                  </div>
                  <div class="tariff-item">
                     <div class="tariff-item__img">
                        <img src="/site/img/persons.svg" alt="Для двоих">
                     </div>
                     <div class="tariff-item__body">
                        <div class="tariff-item__label">Для двоих</div>
                        <div class="tariff-item__desc">от 4000 ₽ ~ 1,5 часа</div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="top__second">
               <div class="tariffs">
                  <div class="tariffs__item" v-for="item in tariffs" :key="item">
                     <div class="tariffs__item-info" v-html="item.info">
                     </div>
                     <div class="tariffs__item__inner">
                        <div class="tariffs__item-img">
                           <img :src="item.img" :alt="item.sess">
                        </div>
                        <div class="tariffs__item-sess" v-html="item.sess">
                        </div>
                        <div class="tariffs__item-price">
                           <span>
                              {{ item.price }}
                           </span> <span>₽</span>
                        </div>
                        <div class="tariffs__item-desc" v-html="item.desc">
                        </div>
                        <div class="btn__give">Подарить</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>
<script setup>
const tariffs = ref([
   {
      info: 'Выбор 60% клиентов',
      img: '/site/img/tariffs__item_1.svg',
      sess: '1 сессия',
      price: '2 000',
      desc: 'Хороший способ познакомить близкого человека с психологией',
   },
   {
      info: 'Выбор 60% клиентов',
      img: '/site/img/tariffs__item_1.svg',
      sess: '3 сессии',
      price: '6 000',
      desc: 'Чуть более углублённое знакомство с психологией и самим собой',
   },
   {
      info: 'Выбор 60% клиентов',
      img: '/site/img/tariffs__item_1.svg',
      sess: '5 сессии',
      price: '10 000',
      desc: 'Возможность увидеть и понять свои внутренние конфликты',
   },
   {
      info: 'Выбор 60% клиентов',
      img: '/site/img/tariffs__item_1.svg',
      sess: '10 сессии',
      price: '20 000',
      desc: 'Возможность лучше понять свои проблемы',
   },
])

onMounted(() => {
   // Блоки "Самый важный подарок" (top)
   $('.top .tariff-toggle .tariff-item').on('click', function () {
      $('.top .tariff-toggle .tariff-item').removeClass('active');
      $(this).addClass('active');
   });
})
</script>