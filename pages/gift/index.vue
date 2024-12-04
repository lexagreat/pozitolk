<template>
   <main class="main">
      <!-- Основная часть -->
      <div class="page">

         <SectionsGiftTop />

         <div class="body">
            <!-- Сертификат позитолк -->
            <section class="cert">
               <div class="container">
                  <div class="cert__inner">
                     <div class="cert__first">
                        <h2>Сертификат позитолк</h2>
                        <div class="cert__first-info">
                           <ol>
                              <li>Зайдите на <a href="#">positalk.ru</a></li>
                              <li>Введите промокод при регистрации или в личном кабинете</li>
                           </ol>
                        </div>
                     </div>
                     <div class="cert__second">
                        <img src="/site/img/cert_1.svg" alt="Сертификат позитолк">
                     </div>
                  </div>
               </div>
            </section>

            <!-- Как это работает? -->
            <section class="howwork">
               <div class="container">
                  <div class="howwork__inner">
                     <h2>Как это работает?</h2>
                     <div class="howwork__body">
                        <div class="howwork__bg"></div>
                        <div class="howwork__list">
                           <div class="howwork__item">Выбираете сертификат и оплачиваете подарок</div>
                           <div class="howwork__item">Получаете на свою почту сертификат с промокодом</div>
                           <div class="howwork__item">В нужный момент отправляете сертификат близкому человеку</div>
                           <div class="howwork__item">Человек вводит промокод на сайте и выбирает психолога</div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <SectionsFaq />

         </div>
      </div>
   </main>
</template>
<script setup>
useHead({
   link: [
      {
         rel: "stylesheet",
         href: "/site/css/gift-relative.css",
      },
   ],
})

</script>