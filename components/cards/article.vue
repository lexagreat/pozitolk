<template>
   <NuxtLink :to="'/blog/' + article?.slug" class="knowledge__item">
      <div class="knowledge__item-img">
         <img :src="article?.cover" :alt="article?.title">

      </div>
      <div class="knowledge__item-body">
         <h2 class="knowledge__item-title">
            {{ article?.title }}
         </h2>
         <div class="knowledge__item-desc" v-html="article?.description">

         </div>
         <div class="knowledge__item-info">
            <div class="knowledge__item-info-item">
               <div class="knowledge__item-info-item-icon">
                  <div class="clock"></div>
               </div>
               <div class="knowledge__item-info-item-text">
                  {{ article?.time_for_reading }}
               </div>
            </div>
         </div>
      </div>
   </NuxtLink>
</template>
<script setup>
const props = defineProps({
   article: Object
})
</script>


<style lang="scss" scoped>
.knowledge__item-desc {
   overflow: hidden;
   text-overflow: ellipsis;
   display: -moz-box;
   -moz-box-orient: vertical;
   display: -webkit-box;
   -webkit-line-clamp: 4;
   -webkit-box-orient: vertical;
   line-clamp: 4;
   box-orient: vertical;
}
</style>