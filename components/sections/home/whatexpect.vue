<template>
   <!-- что стоит ожидать от первой сессии -->
   <div class="whatexpect">
      <div class="container">
         <div class="whatexpect__inner">
            <h2>что стоит ожидать<br> от первой сессии</h2>
            <div class="whatexpect__desc">
               <div class="whatexpect__desc-lbl">За 50 минут сессии</div>
               <div class="whatexpect__desc-list">
                  <ul>
                     <li>Познакомитесь друг с другом</li>
                     <li>Уточните запрос и наметите план психотерапии</li>
                     <li>Получите поддержку и лучше поймете свою ситуацию</li>
                     <li>Найдете ответы на волнующие Вас вопросы</li>
                  </ul>
               </div>
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
            <div class="whatexpect__list">
               <div class="whatexpect__item">
                  <div class="whatexpect__item-img">
                     <img src="/site/img/whatexpect__item_1.png" alt="Для себя">
                  </div>
                  <div class="whatexpect__item-body">
                     <div class="whatexpect__item-lbl">
                        Для себя
                     </div>
                     <div class="whatexpect__item-price">
                        от 2000 ₽ ~ 50 минут
                     </div>
                     <div class="btn__choose">Подобрать психолога</div>
                  </div>
               </div>
               <div class="whatexpect__item">
                  <div class="whatexpect__item-img">
                     <img src="/site/img/whatexpect__item_2.png" alt="Для двоих">
                  </div>
                  <div class="whatexpect__item-body">
                     <div class="whatexpect__item-lbl">
                        Для двоих
                     </div>
                     <div class="whatexpect__item-price">
                        от 4850 ₽ ~ 1,5 часа
                     </div>
                     <div class="btn__choose">Подобрать психолога</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script setup>

onMounted(() => {
   $(".whatexpect__item").eq(0).addClass("active");
   $(".whatexpect .tariff-item").each(function (index) {
      $(this).on("click", function () {
         $(".whatexpect .tariff-item").removeClass("active");
         $(".whatexpect__item").removeClass("active");
         $(this).addClass("active");
         $(".whatexpect__item").eq(index).addClass("active");
      });
   });
})

</script>