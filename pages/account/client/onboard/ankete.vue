<template>
   <div class="wrapper">
      <SidebarAccountClientOnBoard />
      <main class="main">
         <div class="dashboard">

            <div class="container-small">

               <div class="tariff-toggle">
                  <div class="tariff-item active">
                     <div class="tariff-item__img">
                        <img src="/client/img/person.svg" alt="Индивидуальная терапия">
                     </div>
                     <div class="tariff-item__body">
                        <div class="tariff-item__label">Индивидуальная терапия</div>
                        <div class="tariff-item__desc">от {{ minSoloPrice }} ₽ ~ 50 минут</div>
                     </div>
                  </div>
                  <div class="tariff-item">
                     <div class="tariff-item__img">
                        <img src="/client/img/persons.svg" alt="Парная терапия">
                     </div>
                     <div class="tariff-item__body">
                        <div class="tariff-item__label">Парная терапия</div>
                        <div class="tariff-item__desc">от {{ minCouplePrice }} ₽ ~ 1,5 часа</div>
                     </div>
                  </div>
               </div>

               <div class="tariff">

                  <div class="tariff__item active">
                     <form class="individual-therapy" @submit.prevent="onSubmit('solo')">

                        <div class="qstn qstn-1">
                           <div class="qstn__row">
                              <div class="qstn__title">У вас был опыт терапии?</div>
                              <div class="qstn__radio">
                                 <label class="qstn__radio-lbl"><input v-model="havExp" type="radio" name="qstn-1"
                                       value="true"><span>Да</span></label>
                                 <label class="qstn__radio-lbl"><input v-model="havExp" type="radio" name="qstn-1"
                                       value="false"><span>Нет</span></label>
                              </div>
                           </div>
                        </div>

                        <div class="qstn qstn-2">
                           <div class="qstn__row">
                              <div class="qstn__input-text">
                                 <input v-model="name" type="text" name="qstn-2" placeholder="Имя или псевдоним">
                              </div>
                           </div>
                           <div class="qstn__row">
                              <div class="qstn__info">
                                 Чтобы психолог знал, как вас называть
                              </div>
                           </div>
                        </div>

                        <div class="qstn qstn-3 ">
                           <div class="qstn__row">
                              <div class="qstn__input-text">
                                 <input class="date" type="text" name="qstn-3" placeholder="Дата рождения" maxlength="10" @input="formatDate"
                                    v-model="birth">
                              </div>
                           </div>
                        </div>

                        <div class="qstn email">
                           <div class="qstn__row">
                              <div class="qstn__input-text">
                                 <input class="email" type="email" name="email" placeholder="Электронная почта"
                                    v-model="email">
                              </div>
                           </div>
                           <div class="qstn__row">
                              <label class="qstn__info-checkbox">
                                 <input type="checkbox" name="qstn-4" v-model="checkedNotification">
                                 <div class="input_checkbox"></div>
                                 <span>
                                    Предупреждать о сессиях, отправлять полезные материалы и персональные предложения

                                 </span>
                              </label>
                           </div>
                        </div>

                        <div class="qstn qstn-5">
                           <div class="qstn__row">
                              <div class="qstn__input-promo">
                                 <input v-model="promo" class="promo" type="text" name="qstn-5"
                                    placeholder="У вас есть промокод?">
                              </div>
                           </div>
                        </div>

                        <div class="qstn">
                           <div class="qstn__title-big">Что хотели бы обсудить<br> в первую очередь?</div>
                        </div>

                        <div class="qstn qstn-6">
                           <div class="qstn__tags">
                              <div class="qstn__tags-lbl">
                                 <div class="qstn__tags-lbl-img">
                                    <div class="icon face-sad"></div>
                                 </div>
                                 <div class="qstn__tags-lbl-txt">Моё состояние:</div>
                              </div>
                              <label class="qstn__tags-item" v-for="item in data.feeling" :key="item">
                                 <input type="checkbox" name="qstn-6" :value="item" v-model="feeling">
                                 <div class="qstn__tags-item-inner">
                                    {{ item.name }}
                                 </div>
                              </label>
                           </div>
                        </div>

                        <div class="qstn qstn-7">
                           <div class="qstn__tags">
                              <div class="qstn__tags-lbl">
                                 <div class="qstn__tags-lbl-img">
                                    <div class="icon heart"></div>
                                 </div>
                                 <div class="qstn__tags-lbl-txt">Отношения</div>
                              </div>
                              <label class="qstn__tags-item" v-for="item in data.relation" :key="item">
                                 <input type="checkbox" name="qstn-7" :value="item" v-model="relation">
                                 <div class="qstn__tags-item-inner">
                                    {{ item.name }}
                                 </div>
                              </label>
                           </div>
                        </div>

                        <div class="qstn qstn-8">
                           <div class="qstn__tags">
                              <div class="qstn__tags-lbl">
                                 <div class="qstn__tags-lbl-img">
                                    <div class="icon briefcase"></div>
                                 </div>
                                 <div class="qstn__tags-lbl-txt">Работа, учеба</div>
                              </div>
                              <label class="qstn__tags-item" v-for="item in data.work_study" :key="item">
                                 <input type="checkbox" name="qstn-8" :value="item" v-model="work_study">
                                 <div class="qstn__tags-item-inner">
                                    {{ item.name }}
                                 </div>
                              </label>
                           </div>
                        </div>

                        <div class="qstn qstn-9">
                           <div class="qstn__tags">
                              <div class="qstn__tags-lbl">
                                 <div class="qstn__tags-lbl-img">
                                    <div class="icon life-ring"></div>
                                 </div>
                                 <div class="qstn__tags-lbl-txt">События в жизни</div>
                              </div>
                              <label class="qstn__tags-item" v-for="item in data.life_event" :key="item">
                                 <input type="checkbox" name="qstn-9" :value="item" v-model="life_event">
                                 <div class="qstn__tags-item-inner">
                                    {{ item.name }}
                                 </div>
                              </label>
                           </div>
                        </div>

                        <div class="qstn">
                           <div class="qstn__title-big">Предпочтение по стоимости</div>
                        </div>
                        <div class="tariffs">
                           <template v-for="item in data.preferable_price" :key="item">
                              <label v-if="item.therapy_type == 'solo'" class="tariffs__item">
                                 <div class="tariffs__item-header">
                                    <div class="tariffs__item-radio">
                                       <input type="radio" name="tariffs" :value="item" v-model="tariff">
                                       <div class="input_radio"></div>
                                       <div class="tariffs__price">
                                          {{ item.price }} ₽
                                       </div>

                                       <div class="tariffs__exp" v-if="item.experience">
                                          > {{ item.experience }}
                                       </div>

                                    </div>
                                    <div class="tarriffs__spec __desk">
                                       {{ item.specialists_num }} специалистов
                                    </div>
                                 </div>
                                 <div class="tariffs__item-desc" v-html="item.description">
                                 </div>
                                 <div class="tariffs__item-footer __mob">
                                    <div class="tarriffs__spec">
                                       {{ item.specialists_num }} специалистов
                                    </div>
                                 </div>
                              </label>
                           </template>
                        </div>
                        <button type="submit" class="tariff__submit btn">Далее</button>

                     </form>
                  </div>

                  <div class="tariff__item">
                     <form class="couples-therapy" @submit.prevent="onSubmit('couple')">

                        <div class="qstn qstn-1">
                           <div class="qstn__row">
                              <div class="qstn__title">У вас был опыт терапии?</div>
                              <div class="qstn__radio">
                                 <label class="qstn__radio-lbl"><input v-model="havExp" type="radio" name="qstn-1"
                                       value="true"><span>Да</span></label>
                                 <label class="qstn__radio-lbl"><input v-model="havExp" type="radio" name="qstn-1"
                                       value="false"><span>Нет</span></label>
                              </div>
                           </div>
                        </div>

                        <div class="qstn qstn-2">
                           <div class="qstn__row">
                              <div class="qstn__input-text">
                                 <input v-model="name" type="text" name="qstn-2" placeholder="Имя или псевдоним">
                              </div>
                           </div>
                           <div class="qstn__row">
                              <div class="qstn__info">
                                 Чтобы психолог знал, как вас называть
                              </div>
                           </div>
                        </div>

                        <div class="qstn qstn-3 ">
                           <div class="qstn__row">
                              <div class="qstn__input-text">
                                 <input class="date" type="text" name="qstn-3" placeholder="Дата рождения" v-model="birth" @input="formatDate"
                                    maxlength="10">
                              </div>
                           </div>
                        </div>

                        <div class="qstn email">
                           <div class="qstn__row">
                              <div class="qstn__input-text">
                                 <input class="email" type="email" name="email" placeholder="Электронная почта"
                                    v-model="email">
                              </div>
                           </div>
                           <div class="qstn__row">
                              <label class="qstn__info-checkbox">
                                 <input type="checkbox" name="qstn-4" v-model="checkedNotification">
                                 <div class="input_checkbox"></div>
                                 <span>
                                    Предупреждать о сессиях, отправлять полезные материалы и персональные предложения
                                 </span>
                              </label>
                           </div>
                        </div>

                        <div class="qstn qstn-5">
                           <div class="qstn__row">
                              <div class="qstn__input-promo">
                                 <input v-model="promo" class="promo" type="text" name="qstn-5"
                                    placeholder="У вас есть промокод?">
                              </div>
                           </div>
                        </div>

                        <div class="qstn">
                           <div class="qstn__title-big">Что хотели бы обсудить<br> в первую очередь?</div>
                        </div>

                        <div class="qstn qstn-6">
                           <div class="qstn__tags">
                              <div class="qstn__tags-lbl">
                                 <div class="qstn__tags-lbl-img">
                                    <div class="icon heart"></div>
                                 </div>
                                 <div class="qstn__tags-lbl-txt">Парная терапия</div>
                              </div>
                              <label class="qstn__tags-item" v-for="item in data.couple_therapy" :key="item">
                                 <input type="checkbox" name="qstn-6" :value="item" v-model="couple_therapy">
                                 <div class="qstn__tags-item-inner">
                                    {{ item.name }}
                                 </div>
                              </label>
                           </div>
                        </div>

                        <div class="qstn">
                           <div class="qstn__title-big">Предпочтение по стоимости</div>
                        </div>

                        <div class="tariffs">
                           <template v-for="item in data.preferable_price" :key="item">
                              <label v-if="item.therapy_type == 'couple'" class="tariffs__item">
                                 <div class="tariffs__item-header">
                                    <div class="tariffs__item-radio">
                                       <input type="radio" name="tariffs" :value="item" v-model="tariff">
                                       <div class="input_radio"></div>
                                       <div class="tariffs__price">
                                          {{ item.price }} ₽
                                       </div>

                                       <div class="tariffs__exp" v-if="item.experience">
                                          > {{ item.experience }}
                                       </div>

                                    </div>
                                    <div class="tarriffs__spec __desk">
                                       {{ item.specialists_num }} специалистов
                                    </div>
                                 </div>
                                 <div class="tariffs__item-desc" v-html="item.description">
                                 </div>
                                 <div class="tariffs__item-footer __mob">
                                    <div class="tarriffs__spec">
                                       {{ item.specialists_num }} специалистов
                                    </div>
                                 </div>
                              </label>
                           </template>
                        </div>
                        <button type="submit" class="tariff__submit btn">Далее</button>

                     </form>
                  </div>
               </div>


            </div>


         </div>
      </main>
   </div>
</template>
<script setup>
import { useClientStore } from '~/stores/client/store';
import { toast } from "bulma-toast";

const store = useClientStore()
const router = useRouter()
definePageMeta({
   middleware: "auth"
})
useHead({
   link: [
      {
         rel: "stylesheet",
         href: "/client/css/main.css",
         id: "ankete-main",
      },
      {
         rel: "stylesheet",
         href: "/client/css/page-3.css",
         id: "ankete-page-3",
      },
   ],
})


const formatDate = (event) => {
  let value = event.target.value.replace(/\D/g, ''); // Удаляем все нецифровые символы
  
  if (value.length > 8) value = value.slice(0, 8); // Ограничение в 8 цифр

  let formatted = '';
  if (value.length >= 2) {
    formatted = `${value.slice(0, 2)}.${value.slice(2, 4)}`;
  } else {
    formatted = value;
  }
  if (value.length >= 4) {
    formatted += `.${value.slice(4, 8)}`;
  }

  birth.value = formatted;
};
onMounted(() => {
   // Переключение тарифов
   $('.tariff-toggle .tariff-item').on('click', function () {
      $('.tariff-toggle .tariff-item').removeClass('active');
      $('.tariff .tariff__item').removeClass('active');
      $(this).addClass('active');
      $('.tariff .tariff__item').eq($(this).index()).addClass('active');
   });

   // Добавление active 2-у элементу меню
   $('.nav__menu ul li').eq(1).addClass('active');

   // Форматирование даты
   $('.date').on('input', function () {
      var value = $(this).val().replace(/\D/g, '');
      if (value.length <= 2) {
         $(this).val(value);
      } else if (value.length <= 4) {
         $(this).val(value.substring(0, 2) + '.' + value.substring(2));
      } else {
         $(this).val(value.substring(0, 2) + '.' + value.substring(2, 4) + '.' + value.substring(4, 8));
      }
   });

   // Форматирование промокода
   $('.promo').on('input', function () {
      var value = $(this).val().replace(/[^A-Za-z0-9]/g, '');
      var letters = value.substring(0, 4).toUpperCase().replace(/[^A-Za-z]/g, '');
      var numbers = value.substring(4).replace(/\D/g, '');
      var formattedValue = letters;
      if (numbers.length > 0) {
         formattedValue += '-' + numbers.substring(0, 6);
      }
      $(this).val(formattedValue);
   });
})


let data = await useBaseFetch("/cabinet/survey-info/")
const havExp = ref()
const tariff = ref(0)
const name = ref('')
const birth = ref('')
const email = ref('')
const checkedNotification = ref(false)
const promo = ref('')
const feeling = ref([])
const relation = ref([])
const work_study = ref([])
const life_event = ref([])
const couple_therapy = ref([])


const onSubmit = async (type) => {
   // Проверка на заполнение имени
   if (!name.value || name.value.trim() === '') {
   toast({
            message: "Пожалуйста, введите ваше имя или псевдоним.",
            type: "is-error", // если збс - то is-success, если плохо то is-error
            dismissible: true,
            pauseOnHover: true,
            duration: 13000,
            position: "bottom-right",
            className: "toast",
         });
      return;
   }

   // Проверка на заполнение даты рождения
   if (!birth.value || birth.value.trim() === '') {
   toast({
            message: "Пожалуйста, введите вашу дату рождения.",
            type: "is-error", // если збс - то is-success, если плохо то is-error
            dismissible: true,
            pauseOnHover: true,
            duration: 13000,
            position: "bottom-right",
            className: "toast",
         });
      return;
   }
   // Проверка на корректность формата даты (гггг-мм-дд)
   const dateRegex = /^\d{2}.\d{2}.\d{4}$/;
   if (!dateRegex.test(birth.value)) {
   toast({
            message: "Пожалуйста, введите дату рождения в формате дд.мм.ггг.",
            type: "is-error", // если збс - то is-success, если плохо то is-error
            dismissible: true,
            pauseOnHover: true,
            duration: 13000,
            position: "bottom-right",
            className: "toast",
         });
      return;
   }
    // Проверка на корректность даты (реальная дата)
    const [day, month, year] = birth.value.split('.').map(Number);
   const date = new Date(year, month - 1, day); // Месяц в JavaScript начинается с 0
   console.log(date)
   if (
      date.getFullYear() !== year ||
      date.getMonth() + 1 !== month ||
      date.getDate() !== day
   ) {
   toast({
            message: "Пожалуйста, введите корректную дату рождения.",
            type: "is-error", // если збс - то is-success, если плохо то is-error
            dismissible: true,
            pauseOnHover: true,
            duration: 13000,
            position: "bottom-right",
            className: "toast",
         });
      return;
   }

   // Проверка на то, что дата не в будущем (если нужно)
   const currentDate = new Date();
   if (date > currentDate) {
   toast({
            message: "Дата рождения не может быть в будущем.",
            type: "is-error", // если збс - то is-success, если плохо то is-error
            dismissible: true,
            pauseOnHover: true,
            duration: 13000,
            position: "bottom-right",
            className: "toast",
         });
      return;
   }
   // Проверка на заполнение email
   if (!email.value || email.value.trim() === '') {
   toast({
            message: "Пожалуйста, введите ваш email.",
            type: "is-error", // если збс - то is-success, если плохо то is-error
            dismissible: true,
            pauseOnHover: true,
            duration: 13000,
            position: "bottom-right",
            className: "toast",
         });
      return;
   }

   // Проверка на корректность формата email
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailRegex.test(email.value)) {
   toast({
            message: "Пожалуйста, введите корректный email.",
            type: "is-error", // если збс - то is-success, если плохо то is-error
            dismissible: true,
            pauseOnHover: true,
            duration: 13000,
            position: "bottom-right",
            className: "toast",
         });
      return;
   }

   // Проверка на выбор предпочтения по стоимости
   if (!tariff.value || !tariff.value.id) {
   toast({
            message: "Пожалуйста, выберите предпочтение по стоимости.",
            type: "is-error", // если збс - то is-success, если плохо то is-error
            dismissible: true,
            pauseOnHover: true,
            duration: 13000,
            position: "bottom-right",
            className: "toast",
         });
      return;
   }

   // Проверка на выбор хотя бы одной темы для обсуждения
   if (
      (type === 'solo' && feeling.value.length === 0 && relation.value.length === 0 && work_study.value.length === 0 && life_event.value.length === 0) ||
      (type === 'couple' && couple_therapy.value.length === 0)
   ) {
   toast({
            message: "Пожалуйста, выберите хотя бы одну тему для обсуждения.",
            type: "is-error", // если збс - то is-success, если плохо то is-error
            dismissible: true,
            pauseOnHover: true,
            duration: 13000,
            position: "bottom-right",
            className: "toast",
         });
      return;
   }

   const object = {
      "therapy_type": type,
      "nickname": name.value,
      "had_therapy_before": havExp.value,
      "date_of_birth":date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
      "email": email.value,
      "promo_code": promo.value,
      "preferable_price": tariff.value.id,
      "feeling": feeling.value.map(item => item.id),
      "relation": relation.value.map(item => item.id),
      "work_study": work_study.value.map(item => item.id),
      "life_event": life_event.value.map(item => item.id),
      "couple_therapy": couple_therapy.value.map(item => item.id)
   }
   let response = await store.sendAnkete(object)

   // if (response.status == 401) {
   //    await store.getNewToken();
   //    response = await store.sendAnkete(object)
   // }
   if (response.status == 400) {
      if (response.email) {

      }
   }
   console.log('response', response.id);
   if (response.id) {
      router.push('/account/client/onboard/choose')
   }
}


const minSoloPrice = computed(() => {
   return Math.min(...data.preferable_price.filter(item => item.therapy_type == 'solo').map(item => item.price));
})
const minCouplePrice = computed(() => {
   return Math.min(...data.preferable_price.filter(item => item.therapy_type == 'couple').map(item => item.price));
})
</script>
<style scoped>
@media (max-width: 700px) {
    .tariff-item__label {
        white-space:normal;
    }
}
</style>