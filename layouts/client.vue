<template lang="">
   <nav class="nav">
            <div class="nav__inner">
                <a href="#" class="nav__logo">
                    <img src="/site/img/Logo.svg" alt="Позитолк">
                </a>
                <div class="nav__menu">
                    <ul class="nav__menu-first">
                        <li class="active">
                            <a href="#"><span class="icon mysessions"></span>Мои Сессии</a>
                        </li>
                        <li>
                            <a href="#"><span class="icon chats"></span>Чаты</a>
                        </li>
                        <li>
                            <a href="#"><span class="icon events"></span>События</a>
                        </li>
                        <li>
                            <a href="#"><span class="icon payments"></span>Платежи</a>
                        </li>
                        <li>
                            <a href="#"><span class="icon invitations"></span>Приглашения</a>
                        </li>
                    </ul>
                    <ul class="nav__menu-second">
                        <li>
                            <a href="#"><span class="icon help"></span>Помощь</a>
                        </li>
                        <li class="__desk">
                            <a href="#"><span class="icon settings"></span>Настройки</a>
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
   <slot />
</template>
<script setup>
useHead({
   link: [
      {
         rel: "stylesheet",
         href: "/client/css/main-2.css",
      },
   ]
})
</script>

<style lang=""></style>
