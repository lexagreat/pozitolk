<template>
    <div class="wrapper">
        
        <SidebarAccountClientOnBoard step="main" />
        <main class="main">
<div class="dashboard">

    <div class="profile">

        <div class="profile__first">
            <div class="profile__header">
                <div class="profile__header-title">Ваш личный профиль</div>
                <div class="profile__header-icon" @click="exit"></div>
            </div>

            <div class="psychlist">
                                    <div class="psychlist__item">
                        <div class="psychlist__item-img">
                            <img src="./assets/img/chat__persons-img-1.png" alt="persons 1">
                        </div>
                        <div class="psychlist__item-name">
                            <div class="psychlist__item-name-lbl">Ваш психолог</div>
                            <div class="psychlist__item-name-txt">Даниил</div>
                        </div>
                        <div class="psychlist__item-btn">Завершить работу с терапевтом</div>
                    </div>
                                    <div class="psychlist__item">
                        <div class="psychlist__item-img">
                            <img src="./assets/img/chat__persons-img-1.png" alt="persons 1">
                        </div>
                        <div class="psychlist__item-name">
                            <div class="psychlist__item-name-lbl">Ваш психолог</div>
                            <div class="psychlist__item-name-txt">Даниил</div>
                        </div>
                        <div class="psychlist__item-btn">Завершить работу с терапевтом</div>
                    </div>
                                    <div class="psychlist__item">
                        <div class="psychlist__item-img">
                            <img src="./assets/img/chat__persons-img-1.png" alt="persons 1">
                        </div>
                        <div class="psychlist__item-name">
                            <div class="psychlist__item-name-lbl">Ваш психолог</div>
                            <div class="psychlist__item-name-txt">Даниил</div>
                        </div>
                        <div class="psychlist__item-btn">Завершить работу с терапевтом</div>
                    </div>
                            </div>

            <div class="psychadd-btn">Добавить психолога</div>
        </div>

        <div class="profile__second">
            <div v-if="cuple" class="profcards">
                <div class="profcards_mob-title">Настройки</div>
                <div class="profcards__inner">

                    <div class="profcards__item">
                        <div class="profcards__item-header">
                            <div class="profcards__item-img">
                                <img src="./assets/img/profcards__item-2.png" alt="prof-1">
                            </div>
                            <div class="profcards__item-btn">Заменить</div>
                        </div>

                        <div class="profcards__item-inputs">
                            <label class="profcards__input">
                                <div class="profcards__input-label">Имя/Псевдоним</div>
                                <input type="text" name="profname" value="Маша">
                            </label>
                            <label class="profcards__input">
                                <div class="profcards__input-label">Дата рождения</div>
                                <div class="date-container">
                                    <input type="date" name="birthdate" value="1992-04-14">
                                </div>
                            </label>
                        </div>
                    </div>

                    <div class="profcards__item">
                        <div class="profcards__item-header">
                            <div class="profcards__item-img">
                                <img src="./assets/img/profcards__item-1.png" alt="prof-1">
                            </div>
                            <div class="profcards__item-btn">Заменить</div>
                        </div>

                        <div class="profcards__item-inputs">
                            <label class="profcards__input">
                                <div class="profcards__input-label">Имя/Псевдоним</div>
                                <input type="text" name="profname" value="Константипольский">
                            </label>
                            <label class="profcards__input">
                                <div class="profcards__input-label">Дата рождения</div>
                                <div class="date-container">
                                    <input type="date" name="birthdate" value="1990-03-24">
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="profcards">
                <div class="profcards_mob-title">Настройки</div>
                <div class="profcards__inner">
                    <div class="profcards__item">
                        <div class="profcards__item-header">
                            <div class="profcards__item-img">
                                <img src="./assets/img/profcards__item-1.png" alt="prof-1">
                            </div>
                            <div class="profcards__item-btn">Заменить</div>
                        </div>

                        <div class="profcards__item-inputs">
                            <label class="profcards__input">
                                <div class="profcards__input-label">Имя/Псевдоним</div>
                                <input type="text" name="profname" value="Константипольский">
                            </label>
                            <label class="profcards__input">
                                <div class="profcards__input-label">Дата рождения</div>
                                <div class="date-container">
                                    <input type="date" name="birthdate" value="1990-03-24">
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="profgeneral">
                <label class="profgeneral__input">
                    <div class="profgeneral__input-label">Часовой пояс</div>
                    <div class="select-container">
                        <select name="timezone">
                            <option value="МСК (+3 GMT)">МСК (+3 GMT)</option>
                            <option value="МСК (+4 GMT)">МСК (+4 GMT)</option>
                            <option value="МСК (+5 GMT)">МСК (+5 GMT)</option>
                        </select>
                    </div>
                </label>
                <label class="profgeneral__input">
                    <div class="profgeneral__input-label">Телефон</div>
                    <input type="number" name="phone" placeholder="88005553535">
                    <div class="profgeneral__input-info">Для смены номера напишите на электронную почту <a href="mailto:pozitalk@mail.ru">pozitalk@mail.ru</a></div>
                </label>
                <label class="profgeneral__input">
                    <div class="profgeneral__input-label">Электроная почта</div>
                    <input type="text" name="email" value="psycho@mail.ru">
                    <div class="subscribe">
                        <label class="subscribe__item">
                            <input type="checkbox" name="subscribe">
                            <div class="subscribe__item-checkbox"></div>
                            <div class="subscribe__item-text">Новости и важные события встречи</div>
                        </label>
                        <label class="subscribe__item">
                            <input type="checkbox" name="subscribe">
                            <div class="subscribe__item-checkbox"></div>
                            <div class="subscribe__item-text">Напоминание по почте за 24 часа до встречи</div>
                        </label>
                        <label class="subscribe__item">
                            <input type="checkbox" name="subscribe">
                            <div class="subscribe__item-checkbox"></div>
                            <div class="subscribe__item-text">Уведомления о сообщениях от терапевта</div>
                        </label>
                    </div>
                </label>
            </div>
            <div class="profile__btn-save">Сохранить</div>
        </div>

    </div>


</div>

</main>
<footer class="footer">
    <div class="footer__inner">

        <div class="help__tablet">
            <a href="#" class="btn__help">Помощь</a>
        </div>

    </div>
</footer>





</div>
</template>
<script setup>

import { useClientStore } from '~/stores/client/store';
const store = useClientStore()
const cuple = ref(true);
if(cuple.value){
 useHead({
    link: [
       {
          rel: "stylesheet",
          href: "/client/css/main-2.css",
          id: "calendar-main-2",
       },
       {
          rel: "stylesheet",
          href: "/client/css/page-15.css",
          id: "calendar-page-15",
       },
    ],
 })
}else{

    useHead({
    link: [
       {
          rel: "stylesheet",
          href: "/client/css/main-2.css",
          id: "calendar-main-2",
       },
       {
          rel: "stylesheet",
          href: "/client/css/page-14.css",
          id: "calendar-page-14",
       },
    ],
 })
}

const exit = () =>{
  store.exitAccount()
}
</script>
<style scoped>

.wrapper{
  width: 100%;
}

</style>