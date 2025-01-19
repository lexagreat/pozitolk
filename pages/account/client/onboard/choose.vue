<template>
   <div class="wrapper">
      <SidebarAccountClientOnBoard step="choose" />
      <main class="main">
         <div class="dashboard">
            <div class="container-small">
               <div class="cart">
                  <div class="cart__info">
                     <div class="cart__info-first">
                        Запись доступна<br>
                        с 29 сентября, 13:00
                     </div>
                     <div class="cart__info-second" v-if="current !== list.length - 1">
                        <div class="cart__info-second-txt">
                           Ещё {{ list.length - 1 - current }} {{ morph(list.length - 1 - current, ["психолог",
                              "психолога", "психологов"]) }}<br>
                           по вашей проблеме
                        </div>
                        <div class="cart__info-second-btn" @click="current++">
                           <div class="cart__info-second-btn-img" v-if="list[current + 1]?.photo?.length">
                              <img :src="list[current + 1]?.photo" alt="person-2">
                           </div>
                           <div class="cart__info-second-btn-arrow"></div>
                        </div>
                     </div>
                     <div class="cart__info-second prev" v-if="current > 0">
                        <div class="cart__info-second-btn prev" @click="current--">
                           <div class="cart__info-second-btn-img" v-if="list[current - 1]">
                              <img :src="list[current - 1]?.photo" alt="person-2">
                           </div>
                           <div class="cart__info-second-btn-arrow" style="rotate: 180deg;"></div>
                        </div>
                     </div>
                  </div>




                  <div class="top">
                     <div class="top__label">
                        <div class="icon certificate"></div>
                        <div class="top_cert-txt">{{ currentPsycho?.experience }} {{ morph(currentPsycho?.experience,
                           ["год",
                              "года", "лет"]) }} опыта</div>
                     </div>
                     <div class="top__img" v-if="currentPsycho?.photo?.length">
                        <img :src="currentPsycho?.photo" :alt="currentPsycho?.name">
                     </div>
                  </div>
                  <div class="body">
                     <div class="body__item">
                        <div class="lbl">
                           <div class="lbl__header">
                              <div class="lbl__header-lbl">
                                 <div class="icon romb-orange"></div>
                                 <div class="lbl__header-text">{{ currentPsycho?.label }}</div>
                              </div>
                              <div class="lbl__header-second">
                                 <div class="raiting">
                                    <div class="icon star"></div>
                                    <div class="raiting__count">{{ currentPsycho?.rating }}</div>
                                 </div>
                              </div>
                           </div>
                           <div class="lbl__body">
                              <div class="nameold">
                                 <div class="nameold__name" v-if="currentPsycho?.name">{{ currentPsycho?.name }}</div>
                                 <div class="nameold__old">{{ currentPsycho?.age }} {{ morph(currentPsycho?.age, ["год",
                                    "года", "лет"]) }}</div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div class="body__item">
                        <template v-for="(item, index) in currentPsycho?.education_psychologist" :key="item">
                           <div class="lbldescmore" v-if="index == 0 || showMoreEducation">
                              <div class="lbldescmore__lbl">
                                 <div class="icon graduation-cap"></div>
                                 <div class="lbldescmore__lbl-txt">{{ item.year }}</div>
                              </div>
                              <div class="lbldescmore__desc">
                                 <div class="lbldescmore__desc-txt">
                                    {{ item.text }}
                                 </div>
                                 <div class="lbldescmore__btn-wrp" v-if="!showMoreEducation"
                                    @click="showMoreEducation = true">
                                    <div class="btn__more">Показать больше</div>
                                 </div>
                              </div>
                           </div>
                        </template>

                     </div>


                     <div class="body__item">

                        <div class="lbltagsmore">
                           <div class="lbltagsmore__inner">
                              <div class="lbltagsmore__lbl">
                                 <div class="icon binoculars"></div>
                                 <div class="lbltagsmore__lbl-txt">Темы:</div>
                              </div>
                              <div class="lbltagsmore__item" v-for="item in currentPsycho?.psycho_topic" :key="item">
                                 {{ item }}
                              </div>
                           </div>
                           <!-- <div class="lbltagsmore__btn-wrp">
                              <div class="btn__more">Все темы</div>
                           </div> -->
                        </div>

                     </div>

                     <div class="body__item" v-if="currentPsycho?.description?.length">
                        <div class="descmore">
                           <div class="descmore__txt" v-html="currentPsycho?.description">
                           </div>
                           <!-- <div class="descmore__btn-wrp">
                              <div class="btn__more">Показать больше</div>
                           </div> -->
                        </div>
                     </div>

                     <div class="body__item __err">

                        <div class="schedule">
                           <div class="schedule__header">
                              <div class="lbltagsmore__lbl">
                                 <div class="icon calendar"></div>
                                 <div class="lbltagsmore__lbl-txt">Расписание</div>
                              </div>
                              <div class="schedule__timezone">
                                 <div class="schedule__timezone-select">
                                    <div class="schedule__timezone__option">
                                       <div class="schedule__timezone-txt">15:21 (Asia/Novosibirsk)</div>
                                    </div>
                                 </div>
                                 <div class="schedule__timezone-btn">
                                    <div class="icon chevron-down"></div>
                                 </div>
                              </div>
                           </div>
                           <div class="schedule__calendar">
                              <div class="cldr">
                                 <div class="cldr__day" v-for="item in schedule" :key="item">
                                    <div class="cldr__day-lbl">{{ item.name }}</div>
                                    <div class="cldr__day-hours">

                                       <div class="cldr__hour" :class="{ available: slot.available }"
                                          v-for="slot in item.slots" :key="slot">
                                          {{ slot.time }}
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="schedule__info">
                              <div class="schedule__info-err">
                                 <div class="icon circle-exclamation"></div>
                                 <div class="schedule__info-err-txt">Выберите время для оплаты</div>
                              </div>
                           </div>
                        </div>

                     </div>

                  </div>
                  <div class="cart__btn-wrp">
                     <div class="btn__order btn" @click="pay">Оплатить 2 000 ₽</div>
                     <div class="btns" style="display: flex;flex-direction: column;gap: 4px;">
                        <div class="btn__nextps __mob" v-if="current !== list.length - 1" @click="current++">
                           <div class="cart__info-second-btn-img">
                              <img :src="list[current + 1]?.photo" alt="person-2">
                           </div>
                           <div class="cart__info-second-btn-txt" style="flex:1">Следующий</div>
                           <div class="cart__info-second-btn-arrow"></div>
                        </div>
                        <div class="btn__nextps __mob prev" v-if="current > 0" @click="current--">
                           <div class="cart__info-second-btn-img">
                              <img :src="list[current - 1]?.photo" alt="person-2">
                           </div>
                           <div class="cart__info-second-btn-txt" style="flex:1">Предыдущий</div>
                           <div class="cart__info-second-btn-arrow" style="rotate: 180deg;"></div>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
         </div>
      </main>
      <!-- <PopupClientAddCart />
      <PopupClientTopay /> -->
   </div>
</template>
<script setup>
import { useClientStore } from '~/stores/client/store';
const store = useClientStore()
// const router = useRouter()
// if (!store.phone.length) {
//    router.push('/account/client/onboard')
// }

// definePageMeta({
//    middleware: "auth"
// })
useHead({
   link: [
      {
         rel: "stylesheet",
         href: "/client/css/main.css",
      },
      {
         rel: "stylesheet",
         href: "/client/css/page-4.css",
      },
   ],
})
onMounted(() => {
   // Добавление active 2 и 3 элементам меню
   $('.nav__menu ul li').eq(1).addClass('active');
   $('.nav__menu ul li').eq(2).addClass('active');

   // Filter
   $('.filters-btn').on('click', function (e) {
      e.stopPropagation();
      $(this).toggleClass('active');
      $('.filters').toggleClass('active');
   });
   $(document).on('click', function (e) {
      if (!$(e.target).closest('.filters-btn, .filters').length) {
         $('.filters-btn').removeClass('active');
         $('.filters').removeClass('active');
      }
   });

   // Calendar
   $('.cldr__hour.available').on('click', function () {
      $(this).toggleClass('active');
   });

   // Popup
   $('.btn__order').on('click', function () {
      $('.popup.addcard-signup').addClass('active');
      $('html').addClass('hidden');
   });


   // Popup Промо
   $('.popup__maininfo-item-btn').on('click', function () {
      $('.popup__maininfo-promo').addClass('active')
   });

   // PopUp Faq
   $(".popup__faq-item-a").hide();
   $(".popup__faq-item-a").first().show();
   $(".popup__faq-item-q").first().addClass('active');
   $(".popup__faq-item-q").on("click", function () {
      var answer = $(this).siblings(".popup__faq-item-a");
      $(".popup__faq-item-a").not(answer).slideUp();
      $(".popup__faq-item-q").not(this).removeClass('active');;
      $(this).toggleClass('active');
      answer.slideToggle();
   });

   // Cart Инфо
   $(window).on('scroll', function () {
      if ($(this).scrollTop() > 100) {
         $('.cart__info-first').fadeOut();
      } else {
         $('.cart__info-first').fadeIn();
      }
   });

   // Добавить карту и записаться
   $('#addcard_sbm').on('click', function (e) {
      e.preventDefault();
      $('.popup.addcard-signup').removeClass('active');
      $('.popup.topay').addClass('active');
      startTimeOut();
   });

   // Оплатить
   // $('#topay_sbm').on('click', function (e) {
   //    e.preventDefault();
   //    console.log('Действие "Оплатить"...');
   // });

   // START Форматирование данных карты
   $('input[name="card-number"]').on('input', function () {
      let value = $(this).val().replace(/\D/g, '');
      if (value.length > 16) {
         value = value.substring(0, 16);
      }
      value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
      $(this).val(value);
      if (value.length === 19) {
         $('input[name="card-month"]').focus();
      }
   });
   $('input[name="card-month"]').on('input', function () {
      let value = $(this).val().replace(/\D/g, '');
      if (value.length > 2) {
         value = value.substring(0, 2);
      }
      if (value.length === 2) {
         if (parseInt(value) > 12) {
            value = '12';
         }
         $('input[name="card-year"]').focus();
      }
      $(this).val(value);
   });
   $('input[name="card-year"]').on('input', function () {
      let value = $(this).val().replace(/\D/g, '');
      if (value.length > 4) {
         value = value.substring(0, 4);
      }
      $(this).val(value);
      if (value.length === 4) {
         $('input[name="card-cvc"]').focus();
      }
   });
   $('input[name="card-cvc"]').on('input', function () {
      let value = $(this).val().replace(/\D/g, '');
      if (value.length > 3) {
         value = value.substring(0, 3);
      }
      $(this).val(value);
   });
   // END Форматирование данных карты

   // START обратный отсчет "Завершите платеж в течении"
   function startTimeOut() {
      var timeParts = $('.popup__org-info span').text().split(':');
      var time = { minutes: parseInt(timeParts[0]), seconds: parseInt(timeParts[1]) };
      function updateTime() {
         $('.popup__org-info span').text(time.minutes + ':' + (time.seconds < 10 ? '0' : '') + time.seconds);
         if (time.seconds > 0) {
            time.seconds--;
         } else {
            if (time.minutes > 0) {
               time.minutes--;
               time.seconds = 59;
            }
         }
      }
      setInterval(updateTime, 1000);
   }
   // END обратный отсчет "Завершите платеж в течении"
})

const schedule = ref([
   {
      name: "16 июля, вторник",
      slots: [
         {
            time: "13:00",
            available: true
         },
         {
            time: "14:00",
            available: false
         },
         {
            time: "15:00",
            available: false
         },
         {
            time: "16:00",
            available: true
         },
         {
            time: "17:00",
            available: false
         },
         {
            time: "18:00",
            available: true
         },
         {
            time: "19:00",
            available: false
         },
         {
            time: "20:00",
            available: true
         },
      ]
   },
   {
      name: "17 июля, среда",
      slots: [
         {
            time: "09:00",
            available: true
         },
         {
            time: "10:00",
            available: false
         },
         {
            time: "11:00",
            available: false
         },
         {
            time: "12:00",
            available: true
         },
         {
            time: "13:00",
            available: true
         },
         {
            time: "14:00",
            available: false
         },
         {
            time: "15:00",
            available: false
         },
         {
            time: "16:00",
            available: true
         },
         {
            time: "17:00",
            available: false
         },
         {
            time: "18:00",
            available: true
         },
         {
            time: "19:00",
            available: false
         },
         {
            time: "20:00",
            available: true
         },
         {
            time: "21:00",
            available: true
         },
      ]
   },
])
const list = ref([])
let response = await store.getPsychologists()
console.log('response', response);
list.value = response;
const current = ref(0)

const currentPsycho = computed(() => {
   return list.value[current.value]
})


const showMoreEducation = ref(false)


const pay = async () => {
   const response = await useBaseFetch('/sales/payment-link', {
      method: "POST",
      body: {
         "customer_phone": store.phone,
         "title": currentPsycho.value.name,
         "object_id": currentPsycho.value.id,
         "price": "2000"
      }
   })
   if (response.success) {
      window.location.href = response.link;
   }
}
</script>


<style lang="scss" scoped>
.cart__info-second.prev {
   left: -24px !important;
   -webkit-transform: translateX(-100%) translateY(-6%) !important;
   transform: translateX(-100%) translateY(-6%) !important;
   top: 46vh !important;
}

@media (max-width: 755px) {
   .cart .cart__info .cart__info-first {
      -webkit-transform: translateX(0) translateY(-124%) !important;
      transform: translateX(0) translateY(-124%) !important;
   }
}
</style>