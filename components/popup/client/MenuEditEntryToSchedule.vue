<template>
    <div class="popup_2 chosen_time" :class="props.id">
        <div class="popup_2__body">
            <form id="chosen_time">
                <div class="chosen_time__btns">
                    <div class="chosen_time__btn-switch" >
                        <div class="switch-icon"></div>
                        Перенести
                    </div>
                    <div class="chosen_time__btn-delete">
                        <div class="delete-icon"></div>
                        Отменить
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script setup>
  
  const props = defineProps({
    id: String
  });
</script>
<style scoped>
@media (max-width: 1190px) {
    .popup_2 {
        transform: none;
        top: 50%;
        left: 10px;
    }
}
</style>