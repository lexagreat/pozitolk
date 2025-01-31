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
                     <div class="question__item-count" v-if="info.test_type !== 3">
                        {{ index + 1 }} / {{ info.questions.length }}
                     </div>
                     <div class="question__item-count" v-else>
                        {{ index + 1 }}
                     </div>
                     <div class="question__item-body">
                        <div class="question__title" v-html="quest.title">
                        </div>
                        <div class="question__answers" v-if="info.test_type == 1">
                           <label class="question__answer" v-for="answer in quest.answers">
                              <div class="question__answer-radio">
                                 <input type="radio" v-model="answers[index]"
                                    :name="'question__answer-radio' + quest.id + answer.title" :value="answer.id">
                                 <div class="question__answer-radio-input"></div>
                              </div>
                              <div class="question__answer-answer">
                                 {{ answer.title }}
                              </div>
                           </label>
                        </div>
                        <div class="question__answers" v-if="info.test_type == 2">
                           <label :class="{ 'hidden-answer': isHiddenColor(answer, index) }" class="question__answer"
                              v-for="answer in quest.answers">
                              <div class="question__answer-radio">
                                 <input type="radio" :name="'question__answer-radio' + quest.id + answer.title"
                                    :value="answer.id">
                                 <!-- <div class="question__answer-radio-input"></div> -->
                              </div>
                              <div class="question__answer-answer" @click="selectColor(answer, index)">
                                 <div class="answer_color" :style="{ background: answer.title }"></div>
                              </div>
                           </label>
                        </div>
                     </div>
                  </div>
               </div>
               <button class="btn__test-sbm" type="button" @click="finishTest">Узнать результат</button>
            </div>
         </form>

      </div>


   </main>
</template>
<script setup>
import { useTestStore } from '~/stores/testStore.js';
const testStore = useTestStore()
const route = useRoute()
const router = useRouter()

let info = await useBaseFetch(`/wellness/tests/${route.params.slug}/`)
const answers = ref([])
const answers_colors = ref([])
if (info.test_type == 2) {
   info.questions.forEach((item, index) => {
      answers_colors.value[index] = []
   })
}

const finishTest = async () => {
   if (info.test_type == 2) {
      let boolForColors = true;
      if (answers_colors.value.length == info.questions.length) {
         answers_colors.value.forEach((item, index) => {
            if (item.length !== info.questions[index].answers.length) {
               boolForColors = false;
            }
         })
      } else {
         boolForColors = false;
      }
      if (boolForColors) {
         console.log('Тест пройден ');

         let resultObject = {
            "test_slug": info.slug,
            "answers_colors": answers_colors.value,
            "answers": null,
            "type": info.test_type
         }
         console.log("resultObject", resultObject);
         testStore.setLastTest(resultObject)
         router.push({
            name: "tests-slug-result",
         })
      } else {
         console.log('не пройден');
      }
      return
   }
   if (info.test_type == 1) {
      let temp = 0;
      answers.value.forEach((item) => {
         temp++
      })
      if (temp !== answers.value.length || temp == 0) {
         console.log('вы не ответили на все вопросы');
         return
      }
   }

   console.log('Тест пройден ');

   let resultObject = {
      "test_slug": info.slug,
      "answers": answers.value,
      "answers_colors": null,
      "type": info.test_type
   }
   testStore.setLastTest(resultObject)
   router.push({
      name: "tests-slug-result",
   })
}
let styles = [
   {
      rel: "stylesheet",
      href: "/site/css/taking-test.css",
   },
   {
      rel: "stylesheet",
      href: "/site/css/taking-test-2.css",
   },
   {
      rel: "stylesheet",
      href: "/site/css/taking-test-3.css",
   },
]
let styleObj = styles[info.test_type - 1]
useHead({
   link: [
      styleObj
   ],
   title: "Позитолк тесты"
})
onMounted(() => {
   if (info.test_type == 1) {
      $(document).ready(function () {

         // Для переключения цвета radio 
         $('.question__answer').on('click', function () {
            $(this).closest('.question__answers').find('.question__answer').removeClass('active');
            $(this).addClass('active');
         })

      });
   }
})

const selectColor = (ans, i) => {
   answers_colors.value[i].push(ans)
}
const isHiddenColor = (ans, i) => {
   if (answers_colors.value[i].includes(ans)) {
      return true
   } else {
      return false
   }
}
</script>



<style lang="scss" scoped>
.hidden-answer {
   opacity: 0;
   pointer-events: none;
}
.top__img{
   max-height: 328px;
}
.top__img>img{
   object-fit: cover;
}
</style>