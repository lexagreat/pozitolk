<template>
    <div class="wrapper">
          <SidebarAccountClientOnBoard step="main" />
          <main class="main">
             
             <div class="dashboard">
                <div class="calendar">
                   <div class="calendar__header">
                      <div class="calendar__header-first">
                        <NuxtLink to="/account/client/onboard/schedule" class="calendar__header-back">Расписание</NuxtLink>
                         <div class="calendar__header-name">
                               <div class="calendar__header-img" style="background-image: url(./assets/img/calendar__header-img.png);"></div>
                               Даниил
                         </div>
                      </div>
                      <div class="calendar__header-nav">
                         <div class="calendar__header-prev" @click="goToPreviousWeek"></div>
                         <div class="calendar__header-inf">{{ formattedWeek }}</div>
                         <div class="calendar__header-next"  @click="goToNextWeek"></div>
                      </div>
                   </div>
                   <div class="calendar-table">
                        <div class="table__row" v-for="(day, index) in weekDays" :key="index">
                            <div class="table__cell title">
                              <div class="table__cell-inner">
                                {{ day }}
                              </div>
                            </div>
                            <div class="table__cell" :class="getSlotClass(day, hour)" v-for="hour in hours" :key="hour">
                              <div class="table__cell-inner">
                                {{ hour }}
                              </div>
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
 useHead({
    link: [
       {
          rel: "stylesheet",
          href: "/client/css/main-2.css",
       },
       {
          rel: "stylesheet",
          href: "/client/css/page-5.css",
       },
    ],
 })
const store = useClientStore()
const route = useRoute();
const psychologistId = route.query.id;

const hours = ref([
  "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00",
  "13:00", "14:00", "15:00", "16:00", "17:00", "18:00",
  "19:00", "20:00", "21:00", "22:00", "23:00", "00:00"
]);
const fullDayNames = {
  "Пн": "Понедельник",
  "Вт": "Вторник",
  "Ср": "Среда",
  "Чт": "Четверг",
  "Пт": "Пятница",
  "Сб": "Суббота",
  "Вс": "Воскресенье"
};

const getFullDayName = (shortDay) => fullDayNames[shortDay] || shortDay;


const formatDate = (date) => date.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
const formatDateQuery = (date) => date.toISOString().split('T')[0];

const now = new Date();
const dayOfWeek = now.getDay(); // День недели (0 - воскресенье, 1 - понедельник и т.д.)
const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek; // Если воскресенье, сдвиг на -6 дней
const monday = new Date(now);
monday.setDate(now.getDate() + diffToMonday);
const sunday = new Date(monday);
sunday.setDate(monday.getDate() + 6);

const getCurrentWeek = () => {
  return `${formatDate(monday)} - ${formatDate(sunday)}`;
};

const getCurrentWeekDays = () => {
  const weekDays = [];
  const dayNames = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  for (let i = 0; i < 7; i++) {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
    weekDays.push(`${dayNames[i]}, ${date.getDate()} ${date.toLocaleDateString("ru-RU", { month: "short" })}`);
  }

  return weekDays;
};
const goToNextWeek = () => {
  monday.setDate(monday.getDate() + 7);
  sunday.setDate(sunday.getDate() + 7);
  // Обновляем данные для текущей недели
  weekDays.value = getCurrentWeekDays();
  formattedWeek.value = getCurrentWeek();

  const mondayFormatted = formatDateQuery(monday);
  const sundayFormatted = formatDateQuery(sunday);
  store.getSchedulePsychologist(psychologistId, mondayFormatted, sundayFormatted).then(response => {
    schedule.value = response;
  });
};
const goToPreviousWeek = () => {
  monday.setDate(monday.getDate() - 7);
  sunday.setDate(sunday.getDate() - 7);

  // Обновляем данные для предыдущей недели
  weekDays.value = getCurrentWeekDays();
  formattedWeek.value = getCurrentWeek();

  const mondayFormatted = formatDateQuery(monday);
  const sundayFormatted = formatDateQuery(sunday);
  store.getSchedulePsychologist(psychologistId, mondayFormatted, sundayFormatted).then(response => {
    schedule.value = response;
  });
};

const weekDays = ref(getCurrentWeekDays());
const formattedWeek = ref(getCurrentWeek());
const schedule = ref([]);
onMounted(async () => {
      const mondayFormatted = formatDateQuery(monday); // Форматируем как 'YYYY-MM-DD'
      const sundayFormatted = formatDateQuery(sunday);
      schedule.value = await store.getSchedulePsychologist(psychologistId,mondayFormatted,sundayFormatted);
})
 

const getSlotClass = (day, hour) => {
      const slot = schedule.value.find(slot => slot.day_of_week === getFullDayName(day.slice(0, 2)) && slot.time === hour);
      if(slot){
            if(slot.status && slot.status === "free"){
                  return "available"; 
            }else if(slot.status === "busy"){
                  return "busy"; 
            }else if(slot.status === "busy_self"){
                  return "chosen"; 
            }else{
                  return "empty"; 
            }
      }
      return "empty"; 
}
</script>
 