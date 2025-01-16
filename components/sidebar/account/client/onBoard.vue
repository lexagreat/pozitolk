<template>
   <nav class="nav">
      <div class="nav__inner">
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
                              <input type="radio" name="gender" :value="item.value">
                              <div class="filters__tags-item-txt">{{ item.name }}</div>
                           </label>
                        </div>
                     </div>

                     <div class="filters__item">
                        <div class="filters__item-label">Возраст психолога</div>
                        <div class="filters__tags">
                           <label class="filters__tags-item" v-for="item in age" :key="item">
                              <input type="radio" name="age" :value="item.value">
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
   </nav>
</template>
<script setup>
const props = defineProps({
   step: String
})
const sex = ref([
   {
      name: "Мужчина",
      value: 0
   },
   {
      name: "Женщина",
      value: 1
   },
])
const age = ref([
   {
      name: "до 25 лет",
      value: 0
   },
   {
      name: "25-35 лет",
      value: 1
   },
   {
      name: "35-45 лет",
      value: 2
   },
   {
      name: "45-55 лет",
      value: 3
   },
   {
      name: "от 55 лет",
      value: 4
   },
])
</script>