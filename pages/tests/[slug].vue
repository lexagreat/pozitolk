<template>
   <main class="main">

      <!-- Основная часть -->
      <div class="page">

         <div class="breadcrumbs">
            <div class="container">
               <div class="breadcrumbs__inner">
                  <NuxtLink to="/tests" class="breadcrumbs__item">Тесты</NuxtLink>
                  <span class="breadcrumbs__sep"></span>
                  <span class="breadcrumbs__item">{{ info.title }}</span>
               </div>
            </div>
         </div>


         <div class="top">
            <div class="container-small">
               <div class="top__inner">
                  <div class="top__img">
                     <img class="__desk" :src="info.full_image" :alt="info.title">
                     <img class="__mob" :src="info.full_image" :alt="info.title">
                  </div>
                  <div class="top__body">
                     <h1 class="top__title">{{ info.title }}</h1>
                     <div class="top__desc" v-html="info.description">
                     </div>
                     <div class="tests__item-info">
                        <div class="tests__item-info-item">
                           <div class="tests__item-info-item-icon">
                              <div class="question"></div>
                           </div>
                           <div class="tests__item-info-item-text">{{ info?.questions.length }} {{
                              morph(info?.questions.length, ['вопрос', 'вопроса', 'вопросов']) }}</div>
                        </div>
                        <div class="tests__item-info-item">
                           <div class="tests__item-info-item-icon">
                              <div class="clock"></div>
                           </div>
                           <div class="tests__item-info-item-text">{{ info.time_for_solving }}</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <form class="test" @submit.prevent>
            <div class="container-small">
               <div class="question-list">
                  <div class="question__item" v-for="(quest, index) in info.questions" :key="quest">
                     <div class="question__item-count">
                        {{ index + 1 }} / {{ info.questions.length }}
                     </div>
                     <div class="question__item-body">
                        <div class="question__title">
                           {{ quest.title }}
                        </div>
                        <div class="question__answers">
                           <label class="question__answer" v-for="answer in quest.answers">
                              <div class="question__answer-radio">
                                 <input type="radio" v-model="answers[index]"
                                    :name="'question__answer-radio' + quest.id + answer.title" :value="answer">
                                 <div class="question__answer-radio-input"></div>
                              </div>
                              <div class="question__answer-answer">
                                 {{ answer.title }}
                              </div>
                           </label>
                        </div>
                     </div>
                  </div>
               </div>
               <button class="btn__test-sbm" type="button">Узнать результат</button>
            </div>
         </form>

      </div>


   </main>
</template>
<script setup>
useHead({
   link: [
      {
         rel: "stylesheet",
         href: "/site/css/taking-test.css",
      },
      // {
      //    rel: "stylesheet",
      //    href: "/site/css/taking-test-2.css",
      // },
      // {
      //    rel: "stylesheet",
      //    href: "/site/css/taking-test-3.css",
      // },
   ],
   title: "Позитолк тесты"
})
const route = useRoute()
onMounted(() => {
   $(document).ready(function () {

      // Для переключения цвета radio 
      $('.question__answer').on('click', function () {
         $(this).closest('.question__answers').find('.question__answer').removeClass('active');
         $(this).addClass('active');
      })

   });
})

let info = await useBaseFetch(`/wellness/tests/${route.params.slug}/`)
console.log(info);

const answers = ref([])
</script>