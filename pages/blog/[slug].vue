<template>
   <main class="main">

      <!-- Основная часть -->
      <div class="page">

         <div class="breadcrumbs">
            <div class="container">
               <div class="breadcrumbs__inner">
                  <NuxtLink to="/blog" class="breadcrumbs__item">База знаний</NuxtLink>
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
                     <div class="top__author">
                        <span class="top__author-position">психолог</span> <span class="top__author-name">{{ info.author
                           }}</span>, <span class="top__author-publication">{{ makeDate(info.release_datetime) }}</span>
                     </div>
                     <h1 class="top__title">{{ info.title }}</h1>
                     <div class="top__contents">
                        <ul>
                           <li v-for="link in info.body" :key="link">
                              <NuxtLink :href="'#articleBlock' + link.id">{{ link.title }}</NuxtLink>
                           </li>

                        </ul>
                     </div>

                  </div>
               </div>
            </div>
         </div>
         <div class="desc">
            <div class="container-small">
               <div class="desc__inner">
                  <section v-for="section in info.body" :key="section" :id="'articleBlock' + section.id">
                     <h2 v-if="section.title?.length">{{ section.title }}</h2>
                     <div v-html="section.description"></div>
                  </section>
               </div>
            </div>
         </div>

         <div class="recommend" v-if="info.related_articles.length">
            <div class="container">
               <div class="recommend__inner">
                  <h2>рекомендуем прочитать</h2>
                  <div class="recommend__list">
                     <CardsArticle v-for="item in info.related_articles" :article="item" />
                  </div>
               </div>
            </div>
         </div>

      </div>
   </main>
</template>
<script setup>

const route = useRoute()
let info = await useBaseFetch(`/wellness/articles/${route.params.slug}/`)
useHead({
   link: [
      {
         rel: "stylesheet",
         href: "/site/css/knowledge-base.css",
      },
      {
         rel: "stylesheet",
         href: "/site/css/article.css",
      },
   ],
   title: info.title
})
console.log(info);
</script>


<style lang="scss" scoped>
.top__img {
   max-height: 400px;
}

.top__img img {
   width: 100%;
   object-fit: cover;
}
</style>