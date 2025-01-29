<template>
   <main class="main">
      <div class="dashboard">

         <div class="calendar">
            <div class="calendar__header">
               <div class="calendar__header-first">
                  <NuxtLink to="/account/client/consult" class="calendar__header-back">Расписание</NuxtLink>
                  <div class="calendar__header-name">
                     <div class="calendar__header-img"
                        style="background-image: url(/client/img/calendar__header-img.png);"></div>
                     Даниил
                  </div>
               </div>
               <div class="calendar__header-nav">
                  <div class="calendar__header-prev"></div>
                  <div class="calendar__header-inf">4 янв - 10 янв </div>
                  <div class="calendar__header-next"></div>
               </div>
            </div>

            <!-- <div class="calendar-table">
               <?php $table_arr = [
            [
                ['stat' => 'title', 'val' => 'Пн, 4 янв'],
                ['stat' => 'empty', 'val' => '6:00'],
                ['stat' => 'busy', 'val' => '7:00'],
                ['stat' => 'busy', 'val' => '8:00'],
                ['stat' => 'empty', 'val' => '9:00'],
                ['stat' => 'empty', 'val' => '10:00'],
                ['stat' => 'busy', 'val' => '11:00'],
                ['stat' => 'empty', 'val' => '12:00'],
                ['stat' => 'empty', 'val' => '13:00'],
                ['stat' => 'empty', 'val' => '14:00'],
                ['stat' => 'chosen', 'val' => '15:00'],
                ['stat' => 'empty', 'val' => '16:00'],
                ['stat' => 'empty', 'val' => '17:00'],
                ['stat' => 'empty', 'val' => '18:00'],
                ['stat' => 'empty', 'val' => '19:00'],
                ['stat' => 'empty', 'val' => '20:00'],
                ['stat' => 'empty', 'val' => '21:00'],
                ['stat' => 'empty', 'val' => '22:00'],
                ['stat' => 'empty', 'val' => '23:00'],
                ['stat' => 'empty', 'val' => '00:00'],
            ],
            [
                ['stat' => 'title', 'val' => 'Вт, 5 янв'],
                ['stat' => 'empty', 'val' => '6:00'],
                ['stat' => 'empty', 'val' => '7:00'],
                ['stat' => 'busy', 'val' => '8:00'],
                ['stat' => 'empty', 'val' => '9:00'],
                ['stat' => 'empty', 'val' => '10:00'],
                ['stat' => 'empty', 'val' => '11:00'],
                ['stat' => 'busy', 'val' => '12:00'],
                ['stat' => 'empty', 'val' => '13:00'],
                ['stat' => 'empty', 'val' => '14:00'],
                ['stat' => 'busy', 'val' => '15:00'],
                ['stat' => 'empty', 'val' => '16:00'],
                ['stat' => 'busy', 'val' => '17:00'],
                ['stat' => 'empty', 'val' => '18:00'],
                ['stat' => 'empty', 'val' => '19:00'],
                ['stat' => 'empty', 'val' => '20:00'],
                ['stat' => 'empty', 'val' => '21:00'],
                ['stat' => 'empty', 'val' => '22:00'],
                ['stat' => 'empty', 'val' => '23:00'],
                ['stat' => 'empty', 'val' => '00:00'],
            ],
            [
                ['stat' => 'title', 'val' => 'Ср, 6 янв'],
                ['stat' => 'empty', 'val' => '06:00'],
                ['stat' => 'available', 'val' => '7:00'],
                ['stat' => 'empty', 'val' => '08:00'],
                ['stat' => 'empty', 'val' => '09:00'],
                ['stat' => 'empty', 'val' => '10:00'],
                ['stat' => 'empty', 'val' => '11:00'],
                ['stat' => 'chosen', 'val' => '12:00'],
                ['stat' => 'busy', 'val' => '13:00'],
                ['stat' => 'available', 'val' => '14:00'],
                ['stat' => 'empty', 'val' => '15:00'],
                ['stat' => 'empty', 'val' => '16:00'],
                ['stat' => 'busy', 'val' => '17:00'],
                ['stat' => 'empty', 'val' => '18:00'],
                ['stat' => 'available', 'val' => '19:00'],
                ['stat' => 'empty', 'val' => '20:00'],
                ['stat' => 'empty', 'val' => '21:00'],
                ['stat' => 'empty', 'val' => '22:00'],
                ['stat' => 'empty', 'val' => '23:00'],
                ['stat' => 'empty', 'val' => '00:00'],
            ],
            [
                ['stat' => 'title', 'val' => 'Чт, 7 янв'],
                ['stat' => 'busy', 'val' => '06:00'],
                ['stat' => 'empty', 'val' => '7:00'],
                ['stat' => 'empty', 'val' => '08:00'],
                ['stat' => 'busy', 'val' => '09:00'],
                ['stat' => 'empty', 'val' => '10:00'],
                ['stat' => 'empty', 'val' => '11:00'],
                ['stat' => 'busy', 'val' => '12:00'],
                ['stat' => 'available', 'val' => '13:00'],
                ['stat' => 'empty', 'val' => '14:00'],
                ['stat' => 'empty', 'val' => '15:00'],
                ['stat' => 'empty', 'val' => '16:00'],
                ['stat' => 'empty', 'val' => '17:00'],
                ['stat' => 'empty', 'val' => '18:00'],
                ['stat' => 'busy', 'val' => '19:00'],
                ['stat' => 'empty', 'val' => '20:00'],
                ['stat' => 'empty', 'val' => '21:00'],
                ['stat' => 'empty', 'val' => '22:00'],
                ['stat' => 'empty', 'val' => '23:00'],
                ['stat' => 'empty', 'val' => '00:00'],
            ],
            [
                ['stat' => 'title', 'val' => 'Пт, 8 янв'],
                ['stat' => 'empty', 'val' => '06:00'],
                ['stat' => 'empty', 'val' => '7:00'],
                ['stat' => 'empty', 'val' => '08:00'],
                ['stat' => 'busy', 'val' => '09:00'],
                ['stat' => 'empty', 'val' => '10:00'],
                ['stat' => 'busy', 'val' => '11:00'],
                ['stat' => 'empty', 'val' => '12:00'],
                ['stat' => 'empty', 'val' => '13:00'],
                ['stat' => 'empty', 'val' => '14:00'],
                ['stat' => 'available', 'val' => '15:00'],
                ['stat' => 'busy', 'val' => '16:00'],
                ['stat' => 'empty', 'val' => '17:00'],
                ['stat' => 'empty', 'val' => '18:00'],
                ['stat' => 'busy', 'val' => '19:00'],
                ['stat' => 'empty', 'val' => '20:00'],
                ['stat' => 'empty', 'val' => '21:00'],
                ['stat' => 'busy', 'val' => '22:00'],
                ['stat' => 'empty', 'val' => '23:00'],
                ['stat' => 'empty', 'val' => '00:00'],
            ],
            [
                ['stat' => 'title red', 'val' => 'Сб, 9 янв'],
                ['stat' => 'empty', 'val' => '06:00'],
                ['stat' => 'busy', 'val' => '7:00'],
                ['stat' => 'empty', 'val' => '08:00'],
                ['stat' => 'empty', 'val' => '09:00'],
                ['stat' => 'empty', 'val' => '10:00'],
                ['stat' => 'chosen', 'val' => '11:00'],
                ['stat' => 'empty', 'val' => '12:00'],
                ['stat' => 'empty', 'val' => '13:00'],
                ['stat' => 'empty', 'val' => '14:00'],
                ['stat' => 'busy', 'val' => '15:00'],
                ['stat' => 'empty', 'val' => '16:00'],
                ['stat' => 'empty', 'val' => '17:00'],
                ['stat' => 'empty', 'val' => '18:00'],
                ['stat' => 'empty', 'val' => '19:00'],
                ['stat' => 'empty', 'val' => '20:00'],
                ['stat' => 'available', 'val' => '21:00'],
                ['stat' => 'busy', 'val' => '22:00'],
                ['stat' => 'empty', 'val' => '23:00'],
                ['stat' => 'empty', 'val' => '00:00'],
            ],
            [
                ['stat' => 'title red', 'val' => 'Вс, 10 янв'],
                ['stat' => 'busy', 'val' => '06:00'],
                ['stat' => 'empty', 'val' => '7:00'],
                ['stat' => 'empty', 'val' => '08:00'],
                ['stat' => 'empty', 'val' => '09:00'],
                ['stat' => 'empty', 'val' => '10:00'],
                ['stat' => 'empty', 'val' => '11:00'],
                ['stat' => 'empty', 'val' => '12:00'],
                ['stat' => 'empty', 'val' => '13:00'],
                ['stat' => 'busy', 'val' => '14:00'],
                ['stat' => 'empty', 'val' => '15:00'],
                ['stat' => 'empty', 'val' => '16:00'],
                ['stat' => 'busy', 'val' => '17:00'],
                ['stat' => 'empty', 'val' => '18:00'],
                ['stat' => 'empty', 'val' => '19:00'],
                ['stat' => 'busy', 'val' => '20:00'],
                ['stat' => 'empty', 'val' => '21:00'],
                ['stat' => 'empty', 'val' => '22:00'],
                ['stat' => 'empty', 'val' => '23:00'],
                ['stat' => 'empty', 'val' => '00:00'],
            ],
        ];
        foreach ($table_arr as $row) { ?>
               <div class="table__row">
                  <?php
                foreach ($row as $cell) { ?>
                  <div class="table__cell <?= $cell['stat']; ?>">
                     <div class="table__cell-inner">
                        <?= $cell['val']; ?>
                     </div>
                  </div>
                  <?php } ?>
               </div>
               <?php } ?>
            </div> -->

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
useHead({
   link: [
      {
         rel: "stylesheet",
         href: "/client/css/page-6.css",
      },
   ],
   title: "Позитолк"
})
</script>