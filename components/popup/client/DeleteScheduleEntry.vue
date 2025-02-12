<template>
    <div class="popup delete_time">
        <div class="popup__body">
            <div class="popup__close">
                <div class="icon popup-close"></div>
            </div>
            <form id="delete_time">
                <div class="delete_time__icon"></div>
                <div class="delete_time__title">Уверены что хотите отменить запись? </div>
                <div class="delete_time__time">4 января, 17:00</div>
                <div class="delete_time__btns">
                    <div class="delete_time__btn-cancel">Отмена</div>
                    <div class="delete_time__btn-delete" @click="moveSession">Удалить</div>
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
  sessionId: Number
});
const router = useRouter()

const moveSession = async () => {
    store.closeSession(props.sessionId).then(response => {
        if(response.status=="success"){
            router.go(0);
            $(document).ready(function () {
                    $(".popup").removeClass("active");
                    $("html").removeClass("hidden");
            })
        }
    });
};
</script>