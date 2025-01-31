<template>
   <NuxtLink :to="'/tests/' + test?.slug" class="tests__item">
      <div class="tests__item-img">
         <img :src="test?.cover" alt="Тест на интернет-зависимость">
      </div>
      <div class="tests__item-body">
         <h2 class="tests__item-title">
            {{ test?.title }}
         </h2>
         <div class="tests__item-desc" v-html="test?.description"
  @vue:mounted="removeImages">
         </div>
         <div class="tests__item-info">
            <div class="tests__item-info-item">
               <div class="tests__item-info-item-icon">
                  <div class="question"></div>
               </div>
               <div class="tests__item-info-item-text">
                  {{ test?.questions?.length }} {{ morph(test?.questions?.length, ['вопрос', 'вопроса', 'вопросов']) }}
               </div>
            </div>
            <div class="tests__item-info-item">
               <div class="tests__item-info-item-icon">
                  <div class="clock"></div>
               </div>
               <div class="tests__item-info-item-text">
                  {{ test?.time_for_solving }}
               </div>
            </div>
         </div>
      </div>
   </NuxtLink>
</template>
<script setup>
import { onMounted } from 'vue';

const props = defineProps({
   test: Object
})

const removeImages = () => {
  document.querySelectorAll('.tests__item-desc img').forEach(img => img.remove());
};

onMounted(removeImages);
</script>



<style lang="scss" scoped>
.tests__item-desc {
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
