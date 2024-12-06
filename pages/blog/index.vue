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

                     <form class="top__search">
                        <input class="top__search-input" type="search" name="search" id="search"
                           placeholder="Найти статью">
                        <button class="top__search-sbm" type="submit"></button>
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
                  <div class="knowledge__more">
                     <div class="btn__more">Загрузить еще</div>
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
let blog = await useBaseFetch("/wellness/articles/")
</script>