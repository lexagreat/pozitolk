<template>
   <PopupWrapper class="addcard-signup">
      <div class="popup__body">
         <div class="popup__close">
            <div class="icon popup-close"></div>
         </div>
         <form id="addcard">
            <div class="popup__title __mob">Оплата</div>
            <div class="popup__header">
               <div class="popup__header-img">
                  <img src="/admin/img/Daniil-2.png" alt="Даниил">
               </div>
               <div class="popup__header-info">
                  <div class="popup__header-name">Даниил</div>
                  <div class="popup__header-info">17 июля, среда в 10:00</div>
               </div>
            </div>
            <div class="popup__choosecard">
               <div class="popup__choosecard-select">
                  <div class="popup__choosecard-selected">
                     <div class="popup__choosecard-item">
                        <div class="icon purse"></div>
                        <div class="popup__choosecard-item-txt">Карта РФ или МИР — RUB</div>
                     </div>
                  </div>
                  <div class="icon cart-arrow"></div>
               </div>
               <div class="popup__choosecard-list"></div>
            </div>
            <div class="popup__maininfo">
               <div class="popup__maininfo-inner">
                  <div class="popup__maininfo-item">
                     <div class="popup__maininfo-item-lbl">Сессия, 50 мин</div>
                     <div class="popup__maininfo-item-price">2 000 ₽</div>
                  </div>
                  <div class="popup__maininfo-item">
                     <div class="popup__maininfo-item-lbl">Промокод</div>
                     <div class="popup__maininfo-item-btn">Добавить</div>
                  </div>
               </div>
               <div class="popup__maininfo-promo">
                  <div class="promo-input">
                     <input class="promo" type="text" name="promo" placeholder="COLS45CWU">
                  </div>
                  <div class="promo-btn">Добавить</div>
               </div>
            </div>
            <div class="popup__line"></div>
            <div class="popup__summ">
               <div class="popup__summ-lbl">Итого</div>
               <div class="popup__summ-val">2 000 ₽</div>
            </div>
            <div class="popup__info">
               <div class="icon info-orange"></div>
               <div class="popup__info-text">Отменить или перенести сессию можно за 24 часа до назначенного времени
               </div>
            </div>
            <button class="btn popup__submit" id="addcard_sbm" type="submit">Добавить карту и записаться</button>
            <div class="popup__policy">
               Записываясь на сессию, вы соглашаетесь<br> <a href="#">с договором оказания услуг</a>
            </div>
            <div class="popup__faq">

               <div class="popup__faq-item" v-for="item in faq" :key="item">
                  <div class="popup__faq-item-q">
                     <div class="popup__faq-item-q-txt">
                        {{ item.q }}
                     </div>
                     <div class="icon popup-faq-arrow"></div>
                  </div>
                  <div class="popup__faq-item-a">
                     {{ item.a }}
                  </div>
               </div>

            </div>
         </form>

      </div>
      <div class="popup__layer"></div>
   </PopupWrapper>
</template>
<script setup>

const faq = ref([
   {
      'q': 'Как перенести или отменить сессию?',
      'a': 'Вы можете отменить или перенести сессию с психологом не позднее 24 часов до её начала.Перенос меньше, чем за 24 часа, возможен при согласии психолога в переписке.Для переноса сессии воспользуйтесь личным кабинетом на сайте ПозиТолк.'
   },
   {
      'q': 'Что произойдет после добавления карты?',
      'a': 'Вы можете отменить или перенести сессию с психологом не позднее 24 часов до её начала.Перенос меньше, чем за 24 часа, возможен при согласии психолога в переписке.Для переноса сессии воспользуйтесь личным кабинетом на сайте ПозиТолк.'
   },
   {
      'q': 'В какой момент будет списана стоимость сессии?',
      'a': 'Вы можете отменить или перенести сессию с психологом не позднее 24 часов до её начала.Перенос меньше, чем за 24 часа, возможен при согласии психолога в переписке.Для переноса сессии воспользуйтесь личным кабинетом на сайте ПозиТолк.'
   },
   {
      'q': 'Можно ли удалить или изменить карту после добавления?',
      'a': 'Вы можете отменить или перенести сессию с психологом не позднее 24 часов до её начала.Перенос меньше, чем за 24 часа, возможен при согласии психолога в переписке.Для переноса сессии воспользуйтесь личным кабинетом на сайте ПозиТолк.'
   },
])
</script>