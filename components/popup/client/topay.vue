<template>
   <PopupWrapper class="topay">
      <div class="popup__body">
         <div class="popup__close">
            <div class="icon popup-close"></div>
         </div>
         <form id="topay">
            <div class="popup__title __mob">Оплата</div>
            <div class="popup__header">
               <div class="popup__img-pay-sistem">
                  <img src="/admin/img/pay-sistem.svg" alt="yoomoney">
               </div>
            </div>
            <div class="popup__org">
               <div class="popup__org-wrp">
                  <div class="popup__org-name">OOO “ПОЗИТОЛК”</div>
                  <div class="popup__org-price">2 ₽</div>
               </div>
               <div class="popup__org-info">Завершите платеж в течении <span>9:30</span></div>
            </div>
            <div class="popup__line"></div>

            <div class="popup__card">
               <div class="popup__card-info">Введите данные карты для оплаты</div>
               <div class="popup__card-req">
                  <div class="popup__card-number">
                     <label class="popup__card-label">
                        <div class="popup__card-text">Номер карты:</div>
                        <input type="text" name='card-number'>
                     </label>
                  </div>
                  <div class="popup__card-other">
                     <div class="popup__card-date">
                        <label class="popup__card-label">
                           <div class="popup__card-text">Месяц</div>
                           <input type="text" name='card-month'>
                        </label>
                        <span class="popup__card-sep">/</span>
                        <label class="popup__card-label">
                           <div class="popup__card-text">Год</div>
                           <input type="text" name='card-year'>
                        </label>
                     </div>
                     <div class="popup__card-cvc">
                        <label class="popup__card-label">
                           <div class="popup__card-text">CVV/CVC</div>
                           <input type="text" name='card-cvc'>
                        </label>
                     </div>
                  </div>
               </div>
               <button class="btn popup__submit" id="topay_sbm" type="submit">Оплатить</button>
               <div class="popup__policy">
                  Совершая платеж здесь, вы разрешаете <br> <a href="#">автоматическое списание денег</a>
               </div>
            </div>

         </form>
      </div>
      <div class="popup__layer"></div>
   </PopupWrapper>
</template>
<script setup></script>