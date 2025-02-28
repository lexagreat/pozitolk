<template>
    <div class="wrapper">
        <nav class="nav">
            <div class="nav__inner">
                  <NuxtLink class="nav__logo" to="/">
                    <img src="/site/img/Logo.svg" alt="Позитолк">
                  </NuxtLink>
                                <div class="nav__menu">
                    <ul class="nav__menu-first">
                        <li class="active">
                          <NuxtLink to="/account/psychologist/calendar"><span class="icon psy-schedule"></span>Расписание</NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/account/psychologist/chats" ><span class="icon psy-chats"></span>Чаты</NuxtLink>
                        </li>
                        <li>
                            <a href="#"><span class="icon psy-clients"></span>Клиенты</a>
                        </li>
                        <li>
                            <a href="#"><span class="icon psy-payments"></span>Оплата</a>
                        </li>
                        <li>
                            <a href="#"><span class="icon psy-statistics"></span>Статистика</a>
                        </li>
                        <li>
                            <a href="#"><span class="icon psy-events"></span>События</a>
                        </li>
                    </ul>
                    <ul class="nav__menu-second">
                        <li>
                          <NuxtLink to="/account/psychologist/help" ><span class="icon help"></span>Помощь</NuxtLink>
                        </li>
                        <li class="__desk ">
                          <NuxtLink to="/account/psychologist/profile-clients" ><span class="icon settings"></span>Настройки</NuxtLink>
                        </li>
                    </ul>
                </div>

                <div class="nav__mob">
                    <a href="#" class="nav__settings_mob"></a>
                    <div class="nav__burger"></div>
                </div>
            </div>
        </nav>
        <div class="nav__mob_layer"></div>
        <main class="main">
            <div class="dashboard">
    <div class="dashboard__main">
        <div class="schedule">
    <div class="schedule__header">
      <div class="schedule__title">Расписание</div>
      <div class="calendar__header-nav">
        <div class="calendar__header-prev" @click="goToPreviousWeek"></div>
        <div class="calendar__header-inf">{{ formattedWeek }}</div>
        <div class="calendar__header-next" @click="goToNextWeek"></div>
      </div>
    </div>
    <div class="schedule__table-wrp">
    <div class="schedule__table">
      <!-- Заголовки дней -->
      <div class="table-row header">
        <div class="table-cell time-cell"></div>
        <div v-for="day in weekDays" :key="day" class="table-cell header-cell">
            <div class="cell-body current-day">{{ day }}</div>
            <div class="cell-btn">
                <div class="cell-btn__inner">Открыть заметки</div>
            </div>
        </div>
      </div>

      <!-- Временные слоты -->
      <div class="table-row" v-for="hour in hours" :key="hour">
        <div class="table-cell time-cell">{{ hour }}</div>
        <div 
          v-for="day in weekDays" 
          :key="`${day}-${hour}`" 
          class="table-cell"
        >
            <div class="cell-body" :class="{'mark-1': getSlotClass(day, hour)=='free'},{'mark-2': getSlotClass(day, hour)=='available'},{'mark-3': getSlotClass(day, hour)=='busy'}" @click="getSlotId(day,hour)">{{ getSlotText(day, hour) }}</div>
            <div class="cell-btn">
                <div class="cell-btn__inner">Открыть заметки</div>
            </div>
        </div>
      </div>
    </div>
  </div>
  </div>  
    </div>
    <div class="dashboard__side empty">
        <div class="dashboard__side-first">
            <div class="dashboard__side-title">{{ sideTitle }}</div>
            <div class="dashboard__side-info">Специалист ответит в удобное время Вам в чате</div>
            <div class="dashboard__side-btns">
                <div class="chatwrite-btn" @click="goToChat">Написать в чате</div>
                <div class="conswrite-btn">Запустить консультацию</div>
            </div>
        </div>
        <div class="dashboard__side-second">
            <div class="note-mob-back">Назад</div>
            <div class="dashboard__side-second-inner">
                <div class="dashboard__side-title">Заметки</div>
                <div class="dashboard__side-info">Специалист ответит в удобное время Вам в чате</div>
                <div class="note">
                    <div class="note__output">
                        <div class="note__list">
                                                            <div class="note__item">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document @hughgrant</div>
                                                            <div class="note__item">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document @hughgrant</div>
                                                            <div class="note__item">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document @hughgrant</div>
                                                    </div>
                    </div>
                    <div class="note__input">
                        <input type="text" placeholder="Введите текст">
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>

</main>
</div>
</template>
<script setup>
import { useClientStore } from '~/stores/client/store';
 useHead({
    link: [
       {
          rel: "stylesheet",
          href: "/client/css/main-2.css",
          id: "calendar-main-2",
       },
    ],
 })

 
const store = useClientStore();
const schedule = ref([]);
const hours = ref([
  "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", 
  "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"
]);

const fullDayNames = { "Пн": "Понедельник", "Вт": "Вторник", "Ср": "Среда", "Чт": "Четверг", "Пт": "Пятница", "Сб": "Суббота", "Вс": "Воскресенье" };
const sideTitle = ref("Констатинопольский"); 
const client_id = ref(0);
const my_id = ref(0)
let res = await store.getMe()


const now = new Date();
const monday = new Date(now.setDate(now.getDate() - now.getDay() + 1));

const weekDays = ref(getCurrentWeekDays());
const formattedWeek = ref(getCurrentWeek());

const formatDateQuery = (date) => date.toISOString().split('T')[0];

const dayOfWeek = now.getDay(); // День недели (0 - воскресенье, 1 - понедельник и т.д.)
const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek; // Если воскресенье, сдвиг на -6 дней
monday.setDate(now.getDate() + diffToMonday);
const sunday = new Date(monday);
sunday.setDate(monday.getDate() + 6);
async function fetchSchedule() {
  const data = await store.getMySheduleWeek(formatDateQuery(monday), formatDateQuery(sunday));
  console.log(data)
  schedule.value = data.slots;
}
function getCurrentWeekDays() {
  const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  return days.map((day, i) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
    return `${day}, ${date.getDate()} ${date.toLocaleDateString("ru-RU", { month: "short" })}`;
  });
}

function getCurrentWeek() {
  const start = monday.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
  const end = new Date(monday.getTime() + 6 * 24 * 60 * 60 * 1000).toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
  return `${start} - ${end}`;
}

const goToNextWeek = () => {
  monday.setDate(monday.getDate() + 7);
  sunday.setDate(sunday.getDate() + 7);
  // Обновляем данные для текущей недели
  weekDays.value = getCurrentWeekDays();
  formattedWeek.value = getCurrentWeek();
  console.log(schedule.value)

  const mondayFormatted = formatDateQuery(monday);
  const sundayFormatted = formatDateQuery(sunday);
  store.getMySheduleWeek(mondayFormatted, sundayFormatted).then(response => {
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
  store.getMySheduleWeek( mondayFormatted, sundayFormatted).then(response => {
    schedule.value = response.slots;
  });
};
const goToChat= async() =>{
         try {
            const response = await useBaseFetch("/session/chat/", {
               method: "POST",
               body: {
                'client':client_id.value,
                'psychologist':my_id.value
               },
               headers: {
                  // Исправлено на headers
                  "Content-Type": "application/json", // Указываем тип контента
                  Authorization: "Token " + store.token, // Исправлено на Authorization
               },
            });
            setTimeout(()=>{
              navigateTo('/account/psychologist/onboard/chats')
            },100)
            return response;
         } catch (err) {
            console.log("err", err);
         }
    
}
function getSlotClass(day, hour) {
  const slot = schedule.value.find(slot => slot.day_of_week === getFullDayName(day.slice(0, 2)) && slot.time === hour);
  if (!slot) return "empty";
  if (slot) {
    const slotDate = slot.datetime.split(' ')[0];  // Получаем дату из slot
    const today = new Date().toLocaleDateString('ru-RU').split('.').reverse().join('-'); // Получаем сегодняшнюю дату в формате YYYY-MM-DD
    

    if (slotDate === today &&slot.status !== "free") {
      return "free"
    }
  }
  return slot.status === "free" ? "available" : slot.status === "busy" ? "busy" : "empty";
}

function getSlotId(day, hour) {
  const slot = schedule.value.find(slot => slot.day_of_week === getFullDayName(day.slice(0, 2)) && slot.time === hour);
  if (slot) {
    client_id.value = slot.client_id
    console.log(client_id.value)
  }
}

function getSlotText(day, hour) {
  const slot = schedule.value.find(slot => slot.day_of_week === getFullDayName(day.slice(0, 2)) && slot.time === hour);
  return slot?.client_name || "";
}

function getFullDayName(shortDay) {
  return fullDayNames[shortDay] || shortDay;
}

// Метод для обновления sideTitle
function updateSideTitle(text) {
  sideTitle.value = text;
}

onMounted(async () => {
    fetchSchedule();
    my_id.value=res.id
    setTimeout(()=>{
      console.log(schedule.value)
      $(document).ready(function () {
        
        // Таблица
        $('.cell-body.mark-1').on('click', function () {
            const slotText = $(this).text(); // Получаем текст из .cell-body
            updateSideTitle(slotText); // Обновляем sideTitle
            console.log($('.dashboard__side'))

            $('.cell-body.mark-1').removeClass('active');
            $('.cell-body.mark-1').next('.cell-btn').removeClass('active');
            $(this).addClass('active');
            $(this).next('.cell-btn').addClass('active');

            // Сайдбар
            $('.dashboard__side').removeClass('empty');
            $('.dashboard__side-first').addClass('show');
            $('.dashboard__side-second').addClass('show');
            console.log($('.dashboard__side'))

        });
        $(document).click(function (event) {
            const $el = $('.cell-body.mark-1');
            const $el2 = $('.cell-btn');
            const $el3 = $('.dashboard__side-first.show');
            const $el4 = $('.dashboard__side-second.show');
            const $el5 = $('.note-mob-back');
            if (!$el.is(event.target) && !$el.has(event.target).length
                && !$el2.is(event.target) && !$el2.has(event.target).length
                && !$el3.is(event.target) && !$el3.has(event.target).length
                && !$el4.is(event.target) && !$el4.has(event.target).length
                && !$el5.is(event.target) && !$el5.has(event.target).length
            ) {
                $el.removeClass('active');
                $el.next($el2).removeClass('active');


                // Сайдбар
                $('.dashboard__side').addClass('empty');
                $('.dashboard__side-first').removeClass('show');
                $('.dashboard__side-second').removeClass('show');
            }
        });
        $('.cell-btn').on('click', function () {
            $('.dashboard__side-second').addClass('active');
            $('html').addClass('hidden');
        });
        $('.note-mob-back').on('click', function () {
            $('.dashboard__side-second').removeClass('active');
            $('html').removeClass('hidden');
        });


        // Заметки
        $('.note__output').scrollTop($('.note__output')[0].scrollHeight);


      });
    },500)
})
</script>
<style scoped>
.available {
  background-color: #dff0d8;
}
.busy {
  background-color: #f2dede;
}
.empty {
  background-color: #eee;
}
.weekend {
  color: red;
}
.dashboard__main {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  padding: 32px 24px;
}

.dashboard__main,
.dashboard__side-first,
.dashboard__side-second-inner {
  background: #fff;
  border-radius: 16px;
}

.dashboard__side {
  min-width: 300px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  gap: 12px;
  position: relative;
}

.dashboard__side-first,
.dashboard__side-second-inner {
  padding: 28px 24px;
}

.dashboard__side-second {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
}

.schedule__header {
  padding: 0 20px;
}

.schedule__title {
  font-size: 36px;
  font-weight: 600;
}

.calendar__header-inf {
  font-size: 16px;
  font-weight: 500;
}

.calendar__header-nav {
  gap: 10px;
}

.schedule__table {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.schedule__table-wrp {
  overflow-x: auto;
  width: calc(100vw - 806px);
  height: calc(100vh - 162px);
}
.schedule__table-wrp::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.schedule__table-wrp::-webkit-scrollbar-track {
  background: #f2f2f2;
}
.schedule__table-wrp::-webkit-scrollbar-thumb {
  background-color: #FF6900;
  border-radius: 0;
  border: none;
}

.table-row:not(:first-child) .table-cell:not(:first-child) {
  padding: 2px;
}
.table-row:not(:first-child) .table-cell:not(:first-child) .cell-body {
  letter-spacing: -0.01em;
  height: 100%;
  width: 100%;
  border: 2px solid transparent;
  border-radius: 4px;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

.table-row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.table-row:first-child .table-cell {
  border-top: 0;
}
.table-row .table-cell {
  border: 1px solid #F3F4F1;
  margin-right: -1px;
  margin-bottom: -1px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  width: 147px;
  min-width: 147px;
  height: 53px;
  position: relative;
}
.table-row .table-cell:first-child {
  width: 68px;
  min-width: 68px;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  border-left: 0;
}
.table-row .table-cell:first-child .cell-body {
  padding-left: 0;
}
.table-row .table-cell [class*=mark] {
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.table-row .table-cell .cell-body {
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 12px;
  font-weight: 500;
  padding: 6px 8px;
}
.table-row .table-cell .mark-1 {
  background: #FF6900;
  color: #fff;
  border: 2px solid #FF6900;
  cursor: pointer;
}
.table-row .table-cell .cell-body.mark-1.active {
  background: #fff;
  color: #FF6900;
  border: 2px solid #FF6900;
}
.table-row .table-cell .mark-2 {
  background: #DAF9DA;
  border: 2px solid #DAF9DA;
}
.table-row .table-cell .mark-3 {
  background: #F3F4F1;
  border: 2px solid #F3F4F1;
}

.dashboard__side-title {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 8px;
}

.dashboard__side-info {
  font-size: 14px;
  color: #423935;
  margin-bottom: 22px;
}

.dashboard__side-btns {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  gap: 12px;
}
.dashboard__side-btns > div {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  border-radius: 12px;
  color: #fff;
  height: 56px;
  font-weight: 500;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.dashboard__side-btns .chatwrite-btn {
  background: #ABD29B;
}
.dashboard__side-btns .chatwrite-btn:hover {
  background: #9bbe8d;
}
.dashboard__side-btns .conswrite-btn {
  background: #FF6900;
}
.dashboard__side-btns .conswrite-btn:hover {
  background: #cc5400;
}

.note {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.note__list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  gap: 16px;
  margin-top: auto;
}

.note__output {
  margin-top: auto;
  margin-bottom: 28px;
  height: calc(100vh - 500px);
  overflow: auto;
  padding-right: 4px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}
.note__output::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.note__output::-webkit-scrollbar-track {
  background: #f2f2f2;
}
.note__output::-webkit-scrollbar-thumb {
  background-color: #FF6900;
  border-radius: 0;
  border: none;
}

.note__item {
  padding: 12px;
  background: #F3F4F1;
  border-radius: 14px;
  font-size: 14px;
  line-height: 1.42;
}

.note__input input {
  border: none;
  background: #EDEEEB;
  padding: 12px 16px;
  font-size: 14px;
  font-family: "Inter";
  border-radius: 14px;
  width: 100%;
}
.note__input input::-webkit-input-placeholder {
  color: #A7ACAF;
}
.note__input input::-moz-placeholder {
  color: #A7ACAF;
}
.note__input input:-ms-input-placeholder {
  color: #A7ACAF;
}
.note__input input::-ms-input-placeholder {
  color: #A7ACAF;
}
.note__input input::placeholder {
  color: #A7ACAF;
}

.cell-btn {
  position: absolute;
  top: -1px;
  -webkit-transform: translateY(-100%);
          transform: translateY(-100%);
  background: #fff;
  border-radius: 12px;
  padding: 8px;
  height: 0;
  width: 0;
  overflow: hidden;
  height: 60px;
  -webkit-box-shadow: 0 0 40px 4px rgba(0, 0, 0, 0.2509803922);
          box-shadow: 0 0 40px 4px rgba(0, 0, 0, 0.2509803922);
  z-index: -9;
  opacity: 0;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

.cell-btn__inner {
  background: #E96000;
  color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 10px 8px;
  gap: 10px;
  border-radius: 4px;
  font-weight: 500;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.cell-btn__inner::before {
  content: "";
  display: block;
  width: 24px;
  height: 24px;
  background-image: url(../img/notes.svg);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
.cell-btn__inner:hover {
  background: #cc5400;
}

.note-mob-back {
  display: none;
  padding: 12px;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 6px;
  font-weight: 500;
  color: #9B4500;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  width: fit-content;
}
.note-mob-back::before {
  content: "";
  display: block;
  width: 24px;
  height: 24px;
  background-image: url(../img/note-mob-back.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.dashboard__side.empty {
  background: #fff;
  border-radius: 16px;
}

.dashboard__side-first,
.dashboard__side-second {
  opacity: 0;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

.dashboard__side-first.show,
.dashboard__side-second.show {
  opacity: 1;
}

@media (max-width: 1290px) {
  .cell-btn.active {
    width: 240px;
    height: 60px;
    z-index: 9;
    opacity: 1;
  }
  .dashboard {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
        -ms-flex-direction: column-reverse;
            flex-direction: column-reverse;
    gap: 8px;
  }
  .dashboard__side-btns {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
        -ms-flex-direction: row-reverse;
            flex-direction: row-reverse;
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    gap: 6px;
  }
  .dashboard__side-btns > div {
    padding: 8px 12px;
    height: 36px;
    font-family: "Inter";
    font-weight: 500;
  }
  .dashboard__side-first,
  .dashboard__side-second {
    padding: 16px;
  }
  .note-mob-back {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .dashboard__side-second {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: calc(100vh - 24px);
    background: #FAFAFA;
    z-index: -9;
    opacity: 0;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  .dashboard__side-second.active {
    z-index: 99;
    opacity: 1;
  }
  .note__output {
    height: calc(100vh - 240px);
  }
  .dashboard__side-second {
    padding: 0;
  }
  .dashboard__side-second-inner {
    padding: 16px;
  }
  .dashboard__side-title {
    margin-bottom: 6px;
    font-size: 20px;
  }
  .dashboard__side-info {
    margin-bottom: 16px;
  }
  .schedule__table-wrp {
    width: calc(100vw - 296px);
    height: calc(100vh - 244px);
  }
  .dashboard__main {
    padding: 16px;
  }
  .schedule__title {
    font-size: 20px;
  }
  .schedule .schedule__header {
    margin-bottom: 16px;
  }
  .dashboard__side-btns .chatwrite-btn {
    background: #F7F7F7;
    color: #363636;
  }
  .dashboard__side-btns .chatwrite-btn:hover {
    background: #F7F7F7;
  }
  .dashboard__side-btns .conswrite-btn {
    font-weight: 600;
  }
}
@media (max-width: 1190px) {
  .schedule__table-wrp {
    width: calc(100vw - 176px);
    height: calc(100vh - 236px);
  }
  .dashboard__side-first {
    height: 136px;
  }
}
@media (max-width: 700px) {
  .dashboard__side-first {
    height: 178px;
  }
  .dashboard__side-btns {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
        -ms-flex-direction: column-reverse;
            flex-direction: column-reverse;
  }
  .dashboard__side-btns > div {
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
  }
  .dashboard {
    gap: 4px;
  }
  .schedule__table-wrp {
    width: calc(100vw - 48px);
    height: calc(100vh - 322px);
  }
  .note__output {
    height: calc(100vh - 286px);
  }
  .dashboard__side-second {
    height: calc(100vh - 85px);
  }
  .dashboard__side {
    min-width: auto;
  }
  .schedule .schedule__header {
    padding: 0;
  }
  .wrapper {
    height: calc(100vh - 56px);
    overflow: hidden;
  }
}
@media (max-width: 370px) {
  .dashboard__side-info {
    font-size: 12px;
  }
}
.wrapper {
  gap: 6px;
}

.dashboard {
  margin-right: 0;
  background: transparent;
  padding: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 12px;
}

.psy-schedule {
  background-image: url(../img/psy-schedule.svg);
}

li.active .psy-schedule {
  background-image: url(../img/psy-schedule-active.svg);
}

.psy-chats {
  background-image: url(../img/psy-chats.svg);
}

li.active .psy-chats {
  background-image: url(../img/psy-chats-active.svg);
}

.psy-clients {
  background-image: url(../img/psy-clients.svg);
}

li.active .psy-clients {
  background-image: url(../img/psy-clients-active.svg);
}

.psy-payments {
  background-image: url(../img/psy-payments.svg);
}

li.active .psy-payments {
  background-image: url(../img/psy-payments-active.svg);
}

.psy-statistics {
  background-image: url(../img/psy-statistics.svg);
}

li.active .psy-statistics {
  background-image: url(../img/psy-statistics-active.svg);
}

.psy-events {
  background-image: url(../img/psy-events.svg);
}

li.active .psy-events {
  background-image: url(../img/psy-events-active.svg);
}

@media (max-width: 1190px) {
  .wrapper {
    gap: 4px;
  }
  .dashboard {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    gap: 8px;
  }
}
</style>