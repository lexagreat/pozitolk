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
                               {{psychologistName}}
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
                            <div class="table__cell" :class="getSlotClass(day, hour) + ' ' + day.slice(0, 2) + index2" v-for="(hour, index2) in hours" :key="hour">
                              <div class="table__cell-inner" @click="changeCosenTime(getSlotSessionId(day, hour),getSlotDateTime(day, hour))">
                                {{ hour }}
                              </div>
                              <PopupClientMenuEditEntryToSchedule :id="day.slice(0, 2) + index2" />
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
             <PopupClientRescheduleAnAppointment :sessionId="chosen_session_id" />
             <PopupClientAddEntryToSchedule :session_duration="session_duration" :psychologistName="psychologistName" :psychologistId="psychologistId" :psychologistAvatar="psychologistAvatar" :time="chosen_session_time" />
             <PopupClientDeleteScheduleEntry :sessionId="chosen_session_id" />
          </main>
        <!-- <PopupClientAddCart />
        <PopupClientTopay /> -->
    </div>
  </template>
<style scoped>
.wrapper{
  width: 100%;
}

@media (max-width: 1190px) {
    .table__cell { 
        position: static;
    }
}
</style>
 <script setup>
import { useClientStore } from '~/stores/client/store';
 useHead({
    link: [
       {
          rel: "stylesheet",
          href: "/client/css/main-2.css",
          id: "calendar-main-2",
       },
       {
          rel: "stylesheet",
          href: "/client/css/page-5.css",
          id: "calendar-page-5",
       },
       {
          rel: "stylesheet",
          href: "/client/css/page-7.css",
          id: "calendar-page-7",
       },
    ],
 })
const store = useClientStore()
const route = useRoute();
const router = useRouter()
const psychologistId = route.query.id;
console.log(psychologistId)
if (!psychologistId || isNaN(Number(psychologistId))) {
    router.push("/");
}
const psychologistName = ref();
const chosen_session_id = ref();
const chosen_session_time = ref();
const slotsAndPsychologist = ref();
const psychologistAvatar = ref();
const session_duration = ref(1);


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

const changeCosenTime = (sId,sTime) => {
  chosen_session_id.value =sId
  chosen_session_time.value =sTime
};
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
  console.log(schedule.value)

  const mondayFormatted = formatDateQuery(monday);
  const sundayFormatted = formatDateQuery(sunday);
  store.getSchedulePsychologist(psychologistId, mondayFormatted, sundayFormatted).then(response => {
    schedule.value = response.slots;
  });
};
const goToPreviousWeek = () => {
  monday.setDate(monday.getDate() - 7);
  sunday.setDate(sunday.getDate() - 7);
  console.log(schedule.value)

  // Обновляем данные для предыдущей недели
  weekDays.value = getCurrentWeekDays();
  formattedWeek.value = getCurrentWeek();

  const mondayFormatted = formatDateQuery(monday);
  const sundayFormatted = formatDateQuery(sunday);
  store.getSchedulePsychologist(psychologistId, mondayFormatted, sundayFormatted).then(response => {
    schedule.value = response.slots;
  });
};

const weekDays = ref(getCurrentWeekDays());
const formattedWeek = ref(getCurrentWeek());
const schedule = ref([]);
 

const getSlotClass = (day, hour) => {
      const slot = schedule.value.find(slot => slot.day_of_week === getFullDayName(day.slice(0, 2)) && slot.time === hour);
      if(slot){
        if(slot.session_id){
          console.log(slot.session_id)
        }
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
const getSlotSessionId = (day, hour) => {
  const slot = schedule.value.find(slot => slot.day_of_week === getFullDayName(day.slice(0, 2)) && slot.time === hour);
  if(slot){
    if(slot.session_id){
      console.log(slot.session_id)
      return slot.session_id; 
    }else{
      return undefined; 
    }
  }
  return undefined; 
}
const getSlotDateTime = (day, hour) => {
  const slot = schedule.value.find(slot => slot.day_of_week === getFullDayName(day.slice(0, 2)) && slot.time === hour);
  if(slot){
    if(slot.datetime){
      console.log(slot.datetime)
      return slot.datetime; 
    }else{
      return undefined; 
    }
  }
  return undefined; 
}

onBeforeUnmount(() => {
   const styleIds = ["calendar-main-2", "calendar-page-5", "calendar-page-7"];
    styleIds.forEach(id => {
      const link = document.getElementById(id);
      if (link) {
        link.remove();
      }
    });
    });
onMounted(async () => {
      const mondayFormatted = formatDateQuery(monday); // Форматируем как 'YYYY-MM-DD'
      const sundayFormatted = formatDateQuery(sunday);
      slotsAndPsychologist.value = await store.getSchedulePsychologist(psychologistId,mondayFormatted,sundayFormatted);
      schedule.value = slotsAndPsychologist.value.slots
      session_duration.value = slotsAndPsychologist.value.session_duration
      console.log(schedule.value)
      psychologistName.value = slotsAndPsychologist.value.psychologist_info.psychologist_name;
      psychologistAvatar.value = slotsAndPsychologist.value.psychologist_info.psychologist_avatar;
      console.log(psychologistName.value)
      $(document).ready(function () {
        
      // START PopUp общее 
      $(document).on("click", ".popup__layer, .popup__close", function () {
          $(".popup").removeClass("active");
          $("html").removeClass("hidden");
      });
      // END PopUp общее 

      // START  PopUp при клике по доступному времени в календаре
      $(document).on("click", ".table__cell.available", function () {
          $(".popup.available_time").addClass("active");
      });
        // END  PopUp при клике по доступному времени в календаре

        // START  PopUp при клике по доступному времени в календаре
        $(document).on("click", ".table__cell.chosen", function (e) {
          console.log('Клик по выбранному слоту');
          console.log(e.currentTarget.classList[2]);
            e.stopPropagation();
            var popup = $(".popup_2.chosen_time."+e.currentTarget.classList[2]);
            console.log(popup);
            $(this).append(popup);
            popup.addClass("active");
        });
        $(document).on("click", function () {
            $(".popup_2.chosen_time").removeClass("active");
        });
        $(document).on("click", ".popup_2.chosen_time", function (e) {
            e.stopPropagation();
        });
        // END  PopUp при клике по доступному времени в календаре

        // START "PopUp при клике по кнопке "Перенести""
        $(document).on("click", ".chosen_time__btn-switch", function () {
            $(".popup.reschedule_time").addClass("active");
        });
        $(document).on("click", ".calendar-date__item", function () {
            $(".calendar-date__item").removeClass("active");
            $(this).addClass("active");
        });
        // END "PopUp при клике по кнопке "Перенести""

        // START "PopUp при клике по кнопке "Отменить""
        $(document).on("click", ".chosen_time__btn-delete", function () {
            $(".popup.delete_time").addClass("active");
        });
        // END "PopUp при клике по кнопке "Отменить""
      });
})
</script>
 