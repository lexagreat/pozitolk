<template>
    <div class="wrapper">
        
        <SidebarAccountClientOnBoard step="main" />
        <main class="main">
<div class="dashboard">

    <div class="support">
        <div class="support-main">
            <div class="support__title">Здесь у вас есть возможность быстро связаться с сервисом любым удобным способом:</div>
            <div class="support__faq">
                    <div class="support__faq-item" v-for="item in helpInfo">
                        <div class="support__faq-question">
                            <div class="support__faq-text support__faq-text-help" v-html="item.question"></div>
                            <div class="support__faq-arrow active"></div>
                        </div>
                        <div class="support__faq-answer support__faq-answer-help" v-html="item.answer"></div>
                    </div>
                            </div>
        </div>
        <div class="support-side">
            <div class="support-side__first">
                <div class="support-side__mob-btn"><span></span></div>
                <div class="write__wrp">
                    <div class="supportwrite">
                        <div class="support-side__title">Не нашли ответ на свой вопрос?</div>
                        <div class="support-side__info">Напишите нам, мы поможем разобраться</div>
                        <div class="supportwrite__btn">Написать в тех.поддержку</div>
                    </div>
                    <div class="curatorwrite">
                        <div class="support-side__title">Есть вопросы о работе вашего специалиста?</div>
                        <div class="support-side__info">Напишите нам, мы поможем разобраться</div>
                        <div class="curatorwrite__btn">Написать куратору</div>
                    </div>
                </div>
                <div class="supportmail">
                    <div class="supportmail__text">Электронная почта <span>-</span></div>
                    <div class="supportmail__mail"><a href="mailto:help@pozitalk.ru">help@pozitalk.ru</a></div>
                </div>
            </div>
            <div class="support-side__second">
                <div class="support-side__title">Наши соц сети</div>
                <div class="support__social">
                    <div class="support__social-item" v-for="item in stillquest"><a :href="item.link"><span class="social-settings"><img :src="item.img" alt=""></span></a></div>
                </div>
            </div>
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
 useHead({
    link: [
       {
          rel: "stylesheet",
          href: "/client/css/main-2.css",
          id: "calendar-main-2",
       },
       {
          rel: "stylesheet",
          href: "/client/css/page-13.css",
          id: "calendar-page-13",
       },
    ],
 })

 const store = useClientStore();
 const helpInfo = ref();
 const stillquest = ref([
   // {
   //    img: '/site/img/stillquest_img_1.svg',
   //    lbl: 'Чат с ПозиТолк',
   //    link: ""
   // },
   {
      img: '/site/img/stillquest_img_2.svg',
      lbl: 'Instagram',
      link: "https://www.instagram.com/pozi_tolk?igsh=aXpvcTdwYjZ4aWk0"
   },
   {
      img: '/site/img/stillquest_img_3.svg',
      lbl: 'Группа ВК',
      link: "https://vk.com/club226735405"
   },
   {
      img: '/site/img/stillquest_img_4.svg',
      lbl: 'Facebook',
      link: "https://www.facebook.com/share/7Kt61mVnBiA3sfQP/?mibextid=K35XfP"
   },
//    {
//       img: '/site/img/stillquest_img_5.svg',
//       lbl: 'Яндекс Дзен',
//       link: "https://dzen.ru/id/66a6f3d7b58e526106986a4e"
//    },
   {
      img: '/site/img/stillquest_img_6.svg',
      lbl: 'Telegram канал',
      link: "https://t.me/pozi_tolk"
   },
])

 onMounted(
    async () => {
 helpInfo.value = await store.getHelp();
 console.log(helpInfo.value)
      
        $(document).ready(function () {
        // "Ответы на частые вопросы"
        $('.support__faq-item').not(':first').each(function () {
            $(this).find('.support__faq-arrow').removeClass('active');
            $(this).find('.support__faq-answer').hide('fast');
        });
        $('.support__faq-item:first').find('.support__faq-arrow').addClass('active');
        $('.support__faq-item').on('click', function () {
            $('.support__faq-item').not(this).each(function () {
                $(this).find('.support__faq-arrow').removeClass('active');
                $(this).find('.support__faq-answer').hide('fast');
            });
            $(this).find('.support__faq-arrow').toggleClass('active');
            $(this).find('.support__faq-answer').toggle('fast');
        });


        // support-side__mob-btn
        $('.support-side__mob-btn').on('click', function () {
            $('.support-side__first').toggleClass('active');
        });
        $(document).click(function (event) {
            const $element = $('.support-side__first');
            if (!$element.is(event.target) && !$element.has(event.target).length) {
                $element.removeClass('active');
            }
        });
        });
    }
 )
</script>
<style>

.support__faq-text-help>p{
    margin: 0;
}
.support__faq-answer-help>p{
    margin: 0;
}
</style>
<style scoped>
.support__social {
    justify-content: space-between;
}
.social-settings {
    width: auto;
    height: auto;
    background: none;
}
.support__faq-item:last-child{
    margin-bottom: 0;
}
</style>