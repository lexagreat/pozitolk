<template>
    <div class="popup reschedule_time">
      <div class="popup__body">
        <div class="popup__close" @click="closePopup">
          <div class="icon popup-close"></div>
        </div>
        <form id="reschedule_time">
          <div class="reschedule_time__icon"></div>
          <div class="reschedule_time__title">Перенести запись</div>
          <div class="reschedule_time__time">{{ selectedDateText }}</div>
  
          <div class="reschedule_time__calendar">
            <div class="reschedule_time__calendar-first">
              <div class="reschedule_time__calendar-label">Дата</div>
              <div class="reschedule_time__calendar-date">
                <div
                  v-for="(day, index) in weekDays"
                  :key="index"
                  class="calendar-date__item"
                  :class="{ active: selectedDate === day.date }"
                  @click="selectDate(day.date)"
                >
                  <div class="calendar-date__item-number">{{ day.day }}</div>
                  <div class="calendar-date__item-day">{{ day.weekday }}</div>
                </div>
              </div>
            </div>
  
            <div class="reschedule_time__calendar-second">
                <div class="reschedule_time__calendar-label">Время</div>
                <div class="reschedule_time__calendar-table">
                    <div
                    v-for="hour in allHours"
                    :key="hour"
                    class="calendar-table__cell"
                    :class="getHourClass(hour)"
                    @click="selectTime(hour)"
                    >
                        {{ hour }}
                    </div>
                </div>
            </div>

          </div>
  
          <div class="reschedule_time__btns">
            <div class="reschedule_time__btn-cancel" @click="closePopup">Отмена</div>
            <div class="reschedule_time__btn-pay" @click="submitReschedule">Оплатить</div>
          </div>
        </form>
      </div>
      <div class="popup__layer" @click="closePopup"></div>
    </div>
  </template>
  
  <script setup>
import { useClientStore } from '~/stores/client/store';
  
const props = defineProps({
    sessionId: Number,
});
const store = useClientStore()
  const selectedDate = ref(null);
  const selectedTime = ref(null);
  const psychologistId = ref(2); // ID психолога, можно передавать пропсом
  const schedule = ref([]);
  const weekDays = ref([]);
  const chooseDay = ref("");
  
  const today = new Date();
  const formattedToday = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}T${String(today.getHours()).padStart(2, '0')}:${String(today.getMinutes()).padStart(2, '0')}:${String(today.getSeconds()).padStart(2, '0')}`.split("T")[0];
  
  // Получение ближайших 7 дней
  const getWeekDays = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      const localDateTimeString = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}T${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
      days.push({
        date: localDateTimeString.split("T")[0], // "YYYY-MM-DD"
        day: date.getDate(),
        weekday: date.toLocaleDateString("ru-RU", { weekday: "short" }),
      });
    }
    chooseDay.value = new Date(days[0].date).toLocaleDateString("ru-RU", { weekday: "long" })
    return days;
  };
  // Все часы от 01:00 до 24:00
const allHours = computed(() => {
  return Array.from({ length: 24 }, (_, i) => {
    return `${(i + 1).toString().padStart(2, "0")}:00`;
  });
});

// Функция для определения CSS-класса
const getHourClass = (hour) => {
    
//console.log(schedule.value.slots)
  if (!Array.isArray(schedule.value.slots) || schedule.value.slots.length === 0) {
    return "unavailable";
  }
//   schedule.value.some(
//     (slot) => console.log(slot.time + " " + slot.status + " " + slot.day_of_week.toLowerCase())
//   )
//console.log(chooseDay.value)
  return schedule.value.slots.some(
    (slot) => slot.time === hour && slot.status === "free" && slot.day_of_week.toLowerCase() === chooseDay.value
  )
    ? "availible"
    : "unavailable";
};


  const fetchSchedule = async () => {
    const start_date = formattedToday;
    const end_date = weekDays.value[6].date;
    store.getSchedulePsychologist(psychologistId.value, start_date, end_date).then(response => {
        schedule.value = response;
    });
  };
  
  
  const selectedDateText = computed(() => {
    if (!selectedDate.value) return "Выберите дату";
    const day = weekDays.value.find((d) => d.date === selectedDate.value);
    return day ? `${day.day} ${day.weekday}, ${selectedTime.value || "—:—"}` : "Выберите дату";
  });
  
  const selectDate = (date) => {
    selectedDate.value = date;
    chooseDay.value = new Date(selectedDate.value).toLocaleDateString('ru-RU', { weekday: 'long' });
    selectedTime.value = null;
  };
  
  const selectTime = (time) => {
    selectedTime.value = time;
  };
  
  const closePopup = () => {
    selectedDate.value = null;
    selectedTime.value = null;
  };
  
  const submitReschedule = async() => {
    if (!selectedDate.value || !selectedTime.value) {
      alert("Выберите дату и время");
      return;
    }
    const date = new Date(selectedDate.value+" "+selectedTime.value);
    const isoString = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}T${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}.${String(date.getMilliseconds()).padStart(3, '0')}`;
    const datePlusOneHour = new Date(date); // Копируем исходную дату
    datePlusOneHour.setHours(date.getHours() + 1);
    const isoStringPlusOneHour = `${datePlusOneHour.getFullYear()}-${String(datePlusOneHour.getMonth() + 1).padStart(2, '0')}-${String(datePlusOneHour.getDate()).padStart(2, '0')}T${String(datePlusOneHour.getHours()).padStart(2, '0')}:${String(datePlusOneHour.getMinutes()).padStart(2, '0')}:${String(datePlusOneHour.getSeconds()).padStart(2, '0')}.${String(datePlusOneHour.getMilliseconds()).padStart(3, '0')}`;
    console.log(isoString)
    console.log(isoStringPlusOneHour)
    console.log(props.sessionId)
    const response = await useBaseFetch('/session/transfer/'+props.sessionId+'/', {
        method: "POST",
        body: {
            "start_time": isoString,
            "end_time": isoStringPlusOneHour,
        },
        headers: {
            // Исправлено на headers
            "Content-Type": "application/json", // Указываем тип контента
            Authorization: "Token " + store.token, // Исправлено на Authorization
        },
    })
    if (response.status==="success") {
        console.log(response)
    }
    closePopup();
  };
  
  onMounted(async () => {
    weekDays.value = getWeekDays();
    selectedDate.value = formattedToday;
    await fetchSchedule();
  });
  </script>