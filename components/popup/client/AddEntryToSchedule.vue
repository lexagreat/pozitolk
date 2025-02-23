<template>
    <div class="popup available_time ">
        <div class="popup__body">
            <div class="popup__close">
                <div class="icon popup-close"></div>
            </div>
            <form id="available_time">
                <div class="available_time__plus"></div>
                <div class="available_time__title">Новая запись</div>
                <div class="available_time__person">
                    <div class="person__first">
                        <div class="person__first-first">
                            <div class="person__img">
                                <img :src="psychologistAvatar" alt="Daniil">
                            </div>
                            <div class="person__info">
                                <div class="person__name">Даниил</div>
                                <div class="person__time">
                                    <div class="person__time-date">5 января</div>,
                                    <div class="person__time-hour">14:00</div>
                                </div>
                            </div>
                        </div>
                        <div class="person__price">2 000 ₽</div>
                    </div>
                </div>
                <div class="available_time__info">
                    <div class="available_time__info-icon"></div>
                    <div class="available_time__info-text">
                        Отменить или перенести сессию можно за 24 часа до назначенного времени
                    </div>
                </div>
                <div class="available_time__btns">
                    <div class="available_time__btn-cancel">Отмена</div>
                    <div class="available_time__btn-pay" @click="createSession" >Оплатить</div>
                </div>
            </form>

        </div>
        <div class="popup__layer"></div>
    </div>
</template>
<script setup>
import { useClientStore } from '~/stores/client/store';
const store = useClientStore()
const props = defineProps({
    psychologistName: String,
    psychologistId: String,
    psychologistAvatar: String,
    session_duration: Number,
    time: String,
});
const session_id = ref()



const createSession = async () => {
    console.log("props.time")
    console.log(props.time)
const date = new Date(props.time);
const isoString = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}T${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}.${String(date.getMilliseconds()).padStart(3, '0')}`;
const datePlusOneHour = new Date(date); // Копируем исходную дату
datePlusOneHour.setHours(date.getHours() + props.session_duration);
const isoStringPlusOneHour = `${datePlusOneHour.getFullYear()}-${String(datePlusOneHour.getMonth() + 1).padStart(2, '0')}-${String(datePlusOneHour.getDate()).padStart(2, '0')}T${String(datePlusOneHour.getHours()).padStart(2, '0')}:${String(datePlusOneHour.getMinutes()).padStart(2, '0')}:${String(datePlusOneHour.getSeconds()).padStart(2, '0')}.${String(datePlusOneHour.getMilliseconds()).padStart(3, '0')}`;
    const response = await useBaseFetch('/session/book/'+props.psychologistId+'/', {
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
        pay(response.session_id)
    }
}


const pay = async (sessionId) => {
   const response = await useBaseFetch('/sales/payment-link', {
      method: "POST",
      body: {
         "customer_phone": store.phone,
         "title": props.psychologistName,
         "object_id": sessionId,
         "price": "2000"
      }
   })
   if (response.success) {
      window.location.href = response.link;
   }
}
</script>