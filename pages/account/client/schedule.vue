<template>
   <div class="wrapper">
         <SidebarAccountClientOnBoard step="main" />
         <main class="main">
            <div class="dashboard" v-show="!schedule">
               <div class="dashboard__title">Расписание</div>
               <div class="schedule">
                  <div class="schedule__list">
                     <div class="schedule__item" v-for="p in psychologistsList">
                        <div class="schedule__item-first">
                           <div class="schedule__item-img">
                              
                           <img v-if="p.photo" :src="p.photo" alt="Фото психолога">
                           <div v-else>Фото отсутствует</div>
                           </div>
                           <div class="schedule__item-name">
                              <div class="schedule__item-label">Имя/Псевдоним</div>
                              <div class="schedule__item-text">{{p.name}}</div>
                           </div>
                        </div>
                        <div class="schedule__item-second">
                              <div class="schedule__item-lastsess">
                                 <div class="schedule__item-label">Последняя сессия</div>
                                 <div class="schedule__item-text">{{(p.last_session)?formatDate(p.last_session):"-"}}</div>
                              </div>
                              <div class="schedule__item-nearestsess">
                                 <div class="schedule__item-label">Ближайшая сессия</div>
                                 <div class="schedule__item-text">{{(p.next_session)?formatDate(p.next_session):"-"}}</div>
                              </div>
                        </div>
                        <div class="schedule__item-third">
                           <NuxtLink :to="`/account/client/onboard/calendar?id=${p.id}`" class="schedule__btn">Перейти к расписанию</NuxtLink>
                              <!-- <div class="schedule__btn">Перейти к расписанию</div> -->
                        </div>
                     </div>
                  </div>
               </div>
            </div>

           
            <div class="sidebar">
               <div class="consultation">
                  <div class="consultation__title">Консультация со специалистом</div>
                  <div class="consultation__info">Специалист ответит в удобное время Вам в чате</div>
                  <div class="consultation__btn">Запустить консультацию</div>
               </div>
            </div>
         </main>
       <!-- <PopupClientAddCart />
       <PopupClientTopay /> -->
   </div>
 </template>
<script setup>
import { useClientStore } from '~/stores/client/store';
const store = useClientStore()
const router = useRouter()
useHead({
   link: [
      {
         rel: "stylesheet",
         href: "/client/css/main-2.css",
         id: "schedule-main-2",
      },
      {
         rel: "stylesheet",
         href: "/client/css/page-5.css",
         id: "schedule-page-5",
      },
   ],
})
onBeforeUnmount(() => {
   const styleIds = ["schedule-main-2", "schedule-page-5"];
  styleIds.forEach(id => {
    const link = document.getElementById(id);
    if (link) {
      link.remove();
    }
  });
    });
const psychologistsList = ref([])

if(store.token==""){
   router.push('/account/client/onboard/ankete')
}
// setTimeout(async()=>{
//    psychologistsList = await store.getMyPsychologists()
//    console.log('response', psychologistsList);
// },10)
onMounted(async() => {
   psychologistsList.value = await store.getMyPsychologists()
       console.log('response', psychologistsList.value);
})

const formatDate = (dateString) => {
  if (!dateString) return "-";
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  }).format(date);
};
</script>
<style scoped>
.schedule__btn{
   text-decoration: none;
   color: #FF6900;
}
.wrapper{
   width: 100%;
}
</style>