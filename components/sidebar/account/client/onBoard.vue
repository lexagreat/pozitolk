<template>
   <nav class="nav">
      <div v-if="step!='main'" class="nav__inner">
         <div class="nav__first">
            <div class="nav__first-inner">
               <div class="nav__first-left">
                  <NuxtLink to="/" class="nav__logo">
                     <img src="/site/img/Logo.svg" alt="Позитолк">
                  </NuxtLink>
                  <div class="nav__menu">
                     <ul>
                        <li class="active"><a href="#">Вход в аккаунт</a></li>
                        <li><a href="#">Личные вопросы</a></li>
                        <li><a href="#">Выбор психолога</a></li>
                     </ul>
                  </div>
               </div>
               <div class="nav__first-right">
                  <div class="help__mob">
                     <a href="#" class="btn__help">Помощь</a>
                  </div>
               </div>
            </div>
            <div class="filterwrp" v-if="step == 'choose'">
               <div class="filters-btn __mob __tablet">
                  <div class="icon funnel"></div>
                  <div class="filters-btn__text">Фильтры</div>
               </div>
               <div class="filters">
                  <div class="filters__title __tablet">Фильтры психолога</div>

                  <form class="filters__list">

                     <div class="filters__item">
                        <div class="filters__item-label">Пол психолога</div>
                        <div class="filters__tags">
                           <label class="filters__tags-item" v-for="item in sex" :key="item">
                              <input type="radio" name="gender" :value="item.value"  @change="updateFilter('gender', item.value)">
                              <div class="filters__tags-item-txt">{{ item.name }}</div>
                           </label>
                        </div>
                     </div>

                     <div class="filters__item">
                        <div class="filters__item-label">Возраст психолога</div>
                        <div class="filters__tags">
                           <label class="filters__tags-item" v-for="item in age" :key="item">
                              <input type="radio" name="age" :value="item.value" @change="updateFilter('age', item.value)">
                              <div class="filters__tags-item-txt">
                                 {{ item.name }}
                              </div>
                           </label>
                        </div>

                     </div>

                  </form>
               </div>

               <div class="help__tablet">
                  <a href="#" class="btn__help">Помощь</a>
               </div>
            </div>
         </div>
         <div class="nav__second">
            <div class="help__desk">
               <a href="#" class="btn__help">Помощь</a>
            </div>
         </div>
      </div>
      <div v-else class="nav__inner">
         
         <NuxtLink class="nav__logo" to="/">
            <img src="/site/img/Logo.svg" alt="Позитолк">
         </NuxtLink>
                        <div class="nav__menu">
            <ul class="nav__menu-first">
               <li  :class="{ active: route.path.endsWith('schedule') }" >
                     <a  style="cursor: pointer;" @click="navigateTo('/account/client/onboard/schedule')"><span class="icon mysessions"></span>Мои Сессии</a>
               </li>
               <li :class="{ active: route.path.endsWith('chats') }" >
                     <a  style="cursor: pointer;" @click="navigateTo('/account/client/onboard/chats')"><span class="icon chats"></span>Чаты</a>
               </li>
               <li>
                     <a  style="cursor: pointer;"><span class="icon events"></span>События</a>
               </li>
               <li>
                     <a  style="cursor: pointer;"><span class="icon payments"></span>Платежи</a>
               </li>
               <li>
                     <a  style="cursor: pointer;"><span class="icon invitations"></span>Приглашения</a>
               </li>
            </ul>
            <ul class="nav__menu-second">
               <li>
                     <a  style="cursor: pointer;"><span class="icon help"></span>Помощь</a>
               </li>
               <li class="__desk ">
                     <a  style="cursor: pointer;"><span class="icon settings"></span>Настройки</a>
               </li>
            </ul>
         </div>

         <div class="nav__mob">
            <a href="#" class="nav__settings_mob"></a>
            <div class="nav__burger"></div>
         </div>
      </div>
   </nav>
</template>
<script setup>
import { useClientStore } from '~/stores/client/store';
const store = useClientStore()
const route = useRoute();

const props = defineProps({
   step: String,
   sex: Array,
   age: Array,
})
const emit = defineEmits(['updateFilters']);
const selectedFilters = ref({
   gender: null,
   age: null,
});
let response ;

const updateFilter = async(type, value) => {
   selectedFilters.value[type] = value;

   if (type === 'age' && selectedFilters.value['age']) {
      const ageValue = selectedFilters.value[type];
      // Проверка на null перед split
      if (ageValue) {
         const [age_min, age_max] = ageValue.split('-');
         console.log(age_min, age_max);
         console.log(selectedFilters.value['gender']);
         
         response = await store.getPsychologists({ sex: selectedFilters.value['gender'], age_min, age_max });
      }
   } else {
      // Обрабатываем случай для gender
      const genderValue = selectedFilters.value['gender'];
      const ageValue = '0-100';
      console.log(ageValue);

      if (ageValue) {
         const [age_min, age_max] = ageValue.split('-');
         console.log(age_min, age_max);
         console.log(genderValue);
         
         response = await store.getPsychologists({ sex: genderValue, age_min, age_max });
      }
   }

   console.log(response);
   emit('updateFilters', response);
};

</script>