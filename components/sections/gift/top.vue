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
                  <div class="tariffs__item" v-for="item in gifts" :key="item">
                     <div class="tariffs__item-info" v-html="item.info">
                     </div>
                     <div class="tariffs__item__inner">
                        <div class="tariffs__item-img">
                           <img src="/site/img/tariffs__item_1.svg" :alt="item.description">
                        </div>
                        <div class="tariffs__item-sess">
                           {{ item.quantity }} {{ morph(item.quantity, ['сессия', 'сессии', 'сессий']) }}
                        </div>
                        <div class="tariffs__item-price">
                           <span>
                              {{ item.price }}
                           </span> <span>₽</span>
                        </div>
                        <div class="tariffs__item-desc" v-html="item.description">
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

onMounted(() => {
   // Блоки "Самый важный подарок" (top)
   $('.top .tariff-toggle .tariff-item').on('click', function () {
      $('.top .tariff-toggle .tariff-item').removeClass('active');
      $(this).addClass('active');
   });
})


const gifts = await useBaseFetch("/gift")


</script>