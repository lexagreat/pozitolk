<template>
   <main class="main">
      <!-- Основная часть -->
      <div class="page">


         <!-- Психологические тесты  -->
         <section class="top">
            <div class="container">
               <div class="top__inner">
                  <div class="top__first">
                     <h1 class="top__h1">Психологические тесты</h1>
                     <div class="top__desc">
                        «В основе этих тестов — книги и научные публикации всемирно известных психологов. Результат
                        теста не является диагнозом; его цель — помочь вам задать себе правильные вопросы, подтолкнуть к
                        исследованию себя — самостоятельному или с помощью профессионального психолога»
                     </div>

                  </div>
                  <div class="top__second">

                     <form class="top__search" @submit.prevent>
                        <input class="top__search-input" type="text" name="search" id="search" placeholder="Найти тест"
                           v-model="search" v-on:keyup.enter="getTests">
                        <button class="top__search-sbm" type="button" @click.prevent="getTests"></button>
                     </form>

                  </div>
               </div>
            </div>
         </section>

         <div class="body">
            <div class="tests">
               <div class="container">
                  <div class="tests__list">
                     <CardsTest v-for="test in tests" :test="test" :key="test" />
                  </div>
                  <div class="tests__more" v-if="isNextPageExist">
                     <div class="btn__more" @click="currentPageSize += startSize">Загрузить еще</div>
                  </div>
               </div>
            </div>
         </div>
      </div>

   </main>
</template>
<script setup>
useHead({
   link: [
      {
         rel: "stylesheet",
         href: "/site/css/tests.css",
      },
   ],
   title: "Позитолк тесты"
})



const search = ref("")
const startSize = 18;
const tests = ref([])
const currentPageSize = ref(startSize)
const isNextPageExist = ref(false)
const getTests = async () => {
   let response = await useBaseFetch(`/wellness/tests/?search=${search.value}&page_size=${currentPageSize.value}&page=1`)
   tests.value = response.results
   isNextPageExist.value = Boolean(response.next);
}
await getTests()

watch(currentPageSize, async () => {
   await getTests()
})
</script>