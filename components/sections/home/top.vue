<template>
   <!-- Поможем найти психолога -->
   <section class="top">
      <div class="container">
         <div class="top__inner">
            <div class="top__first">
               <div class="tag-list">
                  <span>поддержка</span>
                  <span>помощь в чате 24/7</span>
                  <span>принятие</span>
                  <span>быть услышанным</span>
                  <span>новый опыт</span>
                  <span>опора</span>
               </div>
               <h1 class="top__h1">Поможем найти психолога</h1>
               <div class="top__desc">
                  На сайте вы сможете подобрать психолога, посетить психологические семинары и вебинары от лучших
                  психологов метода, получить инструменты для самопомощи, пройти психологические тесты, купить
                  близким подарочный сертификат
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
               <div class="top__btns">
                  <NuxtLink to="/account/client/onboard/choose" class="btn__choose"
                     style="color: white; border-bottom: 0; text-decoration: none;">Подобрать
                     психолога</NuxtLink>
                  <div class="btn__buysubscribe">Подписка «Самопомощь»</div>
               </div>
            </div>
            <div class="top__second">
               <img src="/site/img/Frame_6.svg" alt="Поможем найти психолога">
            </div>
         </div>
      </div>
   </section>
</template>
<script setup>
onMounted(() => {
   // Блоки "Поможем найти психолога" (top)
   $(".top .tariff-toggle .tariff-item").on("click", function () {
      $(".top .tariff-toggle .tariff-item").removeClass("active");
      $(this).addClass("active");
   });
})
</script>