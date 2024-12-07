<template>
   <main class="main">
      <!-- Основная часть -->
      <div class="page">


         <!-- База знаний  -->
         <section class="top">
            <div class="container">
               <div class="top__inner">
                  <div class="top__first">
                     <h1 class="top__h1">База знаний</h1>
                     <div class="top__desc">
                        Добро пожаловать в нашу базу знаний — место, где собраны богатые ресурсы для саморазвития,
                        понимания психологии и улучшения эмоционального благополучия. Здесь вы найдете разнообразные
                        материалы, которые помогут вам глубже понять себя и окружающий мир.
                     </div>

                  </div>
                  <div class="top__second">

                     <form class="top__search" @submit.prevent>
                        <input class="top__search-input" type="text" name="search" id="search"
                           placeholder="Найти статью" v-model="search" v-on:keyup.enter="getArticles">
                        <button class="top__search-sbm" type="button" @click.prevent="getArticles"></button>
                     </form>

                  </div>
               </div>
            </div>
         </section>

         <div class="body">
            <div class="knowledge">
               <div class="container">
                  <div class="knowledge__list">
                     <CardsArticle v-for="item in blog" :article="item" :key="item" />
                  </div>
                  <div class="knowledge__more" v-if="isNextPageExist">
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
         href: "/site/css/knowledge-base.css",
      },
   ],
   title: "База знаний"
})
const search = ref("")
const startSize = 18;
const blog = ref([])
const currentPageSize = ref(startSize)
const isNextPageExist = ref(false)
const getArticles = async () => {
   let response = await useBaseFetch(`/wellness/articles/?search=${search.value}&page_size=${currentPageSize.value}&page=1`)
   blog.value = response.results
   isNextPageExist.value = Boolean(response.next);
}
await getArticles()

watch(currentPageSize, async () => {
   await getArticles()
})
</script>