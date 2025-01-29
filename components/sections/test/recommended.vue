<template>
   <div class="recommend">
      <div class="container">
         <div class="recommend__inner">
            <h2>рекомендуем пройти</h2>
            <div class="recommend__list">
               <NuxtLink :to="'/tests/' + item.slug" class="recommend__item" v-for="item in items" :key="item">
                  <div class="recommend__item-img">
                     <img :src="item.cover" :alt="item.title">
                  </div>
                  <div class="recommend__item-body">
                     <h2 class="recommend__item-title">
                        {{ item.title }}
                     </h2>
                     <div class="recommend__item-desc" v-html="item.description">
                     </div>
                     <div class="tests__item-info">
                        <div class="tests__item-info-item">
                           <div class="tests__item-info-item-icon">
                              <div class="question"></div>
                           </div>
                           <div class="tests__item-info-item-text">
                              <!-- <?= $recommend['question']; ?> -->
                           </div>
                        </div>
                        <div class="tests__item-info-item">
                           <div class="tests__item-info-item-icon">
                              <div class="clock"></div>
                           </div>
                           <div class="tests__item-info-item-text">
                              {{ item.time_for_solving }}
                           </div>
                        </div>
                     </div>
                  </div>
               </NuxtLink>
            </div>

         </div>
      </div>
   </div>
</template>
<script setup>

const items = await useBaseFetch("/wellness/tests/recommended/")

</script>
<style lang="scss" scoped>
.recommend__item-desc {
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