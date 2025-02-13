<template></template>
<!-- <style scoped>
.wrapper{
  width: 100%;
}
</style> -->
 <!-- <script setup>
import { useClientStore } from '~/stores/client/store';
 useHead({
    link: [
       {
          rel: "stylesheet",
          href: "/client/css/main-2.css",
       },
    ],
 })
 onMounted(
    async () => {
        $(document).ready(function () {

// START Переключение табов
function getTabFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('tab') || '1';
}
function setActiveTab(tabId) {
    $('.tab-ctrl').removeClass('active');
    $('.tab-body').removeClass('active');
    $(`.tab-ctrl[data-tab-ctrl="${tabId}"]`).addClass('active');
    $(`.tab-body[data-tab-body="${tabId}"]`).addClass('active');
    const newUrl = `${window.location.pathname}?tab=${tabId}`;
    window.history.replaceState(null, '', newUrl);
}
const currentTab = getTabFromUrl();
setActiveTab(currentTab);
$('.tab-ctrl').on('click', function () {
    const tabId = $(this).data('tab-ctrl');
    setActiveTab(tabId);
});
// END Переключение табов

// START "Этический кодекс" popup
$('.profile__ethical-btn, .profile__ethical').on('click', function () {
    $('.profile-popup').addClass('active');
});
$('.profile-popup__close, .profile-popup__layer').on('click', function () {
    $('.profile-popup').removeClass('active');
});
// END "Этический кодекс" popup


        // start .descmore
        const maxCharsDescmore = 340;
        $('.descmore').each(function () {
            const $container = $(this);
            const $textContainer = $container.find('.descmore__txt');
            const $button = $container.find('.btn__more');
            const fullText = $textContainer.html();
            if (fullText.length > maxCharsDescmore) {
                const truncatedText = fullText.substring(0, maxCharsDescmore) + '...';
                $textContainer.html(truncatedText);
                $button.on('click', function () {
                    if ($button.text() === 'Показать больше') {
                        $textContainer.html(fullText);
                        $button.text('Показать меньше');
                    } else {
                        $textContainer.html(truncatedText);
                        $button.text('Показать больше');
                    }
                });
            } else {
                $button.hide();
            }
        });
        // end .descmore

        // start .lbltagsmore
        const maxVisibleTags = 4;
        $('.lbltagsmore').each(function () {
            const $container = $(this);
            const $items = $container.find('.lbltagsmore__item');
            const $button = $container.find('.btn__more');
            if ($items.length <= maxVisibleTags) {
                $button.hide();
                return;
            }
            $items.slice(maxVisibleTags).hide();
            $button.on('click', function () {
                const isExpanded = $items.slice(maxVisibleTags).is(':visible');
                if (isExpanded) {
                    $items.slice(maxVisibleTags).hide();
                    $button.text('Все темы');
                } else {
                    $items.slice(maxVisibleTags).show();
                    $button.text('Показать меньше');
                }
            });
        });
        // end .lbltagsmore


        // start .lbldescmore
        const maxCharsLbldescmore = 115;
        $('.lbldescmore').each(function () {
            const $container = $(this);
            const $textContainer = $container.find('.lbldescmore__desc-txt');
            const $button = $container.find('.btn__more');
            const fullText = $textContainer.html();
            if (fullText.length > maxCharsLbldescmore) {
                const truncatedText = fullText.substring(0, maxCharsLbldescmore) + '';
                $textContainer.html(truncatedText);
                $button.on('click', function () {
                    if ($button.text() === 'Показать больше') {
                        $textContainer.html(fullText);
                        $button.text('Показать меньше');
                    } else {
                        $textContainer.html(truncatedText);
                        $button.text('Показать больше');
                    }
                });
            } else {
                $button.hide();
            }
        });
        // end .lbldescmore


        // START Menu
        $('.nav__burger').on('click', function () {
            $('.nav__menu').toggleClass('active');
            $('.nav__mob_layer').toggleClass('active');
            $('html').toggleClass('hidden');
            $(this).toggleClass('active');
        });
        $('.nav__mob_layer').on('click', function () {
            $('.nav__menu').removeClass('active');
            $('.nav__burger').removeClass('active');
            $('html').removeClass('hidden');
            $(this).removeClass('active');
        });
        // END Menu

        // START PopUp общее 
        $('.popup__layer').on('click', function () {
            $('.popup').removeClass('active');
            $('html').removeClass('hidden');
        });
        $('.popup__close').on('click', function () {
            $('.popup').removeClass('active');
            $('html').removeClass('hidden');
        });
        // END PopUp общее 


        // START  PopUp при клике по доступному времени в календаре
        $('.table__cell.available').on('click', function () {
            $('.popup.available_time').addClass('active');
            // $('html').addClass('hidden');
        });
        // END  PopUp при клике по доступному времени в календаре

        // START  PopUp при клике по доступному времени в календаре
        $(".table__cell.chosen").on("click", function (e) {
            e.stopPropagation();
            var popup = $(".popup_2.chosen_time");
            $(this).append(popup);
            popup.addClass("active");
        });
        $(document).on("click", function () {
            $(".popup_2.chosen_time").removeClass("active");
        });
        $(".popup_2.chosen_time").on("click", function (e) {
            e.stopPropagation();
        });
        // END  PopUp при клике по доступному времени в календаре

        // START "PopUp при клике по кнопке "Перенести""
        $('.chosen_time__btn-switch').on('click', function () {
            $('.popup.reschedule_time').addClass('active');
            // $('html').addClass('hidden');
        });
        $('.calendar-date__item').on('click', function () {
            $('.calendar-date__item').removeClass('active');
            $(this).addClass('active');
        });
        // END "PopUp при клике по кнопке "Перенести""

        // START "PopUp при клике по кнопке "Отменить""
        $('.chosen_time__btn-delete').on('click', function () {
            $('.popup.delete_time').addClass('active');
            // $('html').addClass('hidden');
        });
        // END "PopUp при клике по кнопке "Отменить""


});
    }
 )
 
</script> -->
<!-- <style scoped>
.dashboard {
  background: #fff;
  padding: 26px 24px;
}

.wrapper {
  background-color: #F3F4F1;
}

.profile {
  width: 100%;
}

.profile__ethical-btn-mob {
  display: none;
}

.profile__header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 0 20px;
  gap: 10px;
  margin-bottom: 40px;
}

.profile__btns {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 10px;
  margin-left: auto;
}

.profile__title {
  font-size: 36px;
  font-weight: 600;
  line-height: 1.22;
}

.profile__ethical-btn,
.profile__save-btn {
  padding: 16px 32px;
  border-radius: 12px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  color: #fff;
  line-height: 1.5;
  font-weight: 500;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

.profile__ethical-btn {
  background: #ABD29B;
}
.profile__ethical-btn:hover {
  background: #9bbe8d;
}

.profile__save-btn {
  background: #FF6900;
}
.profile__save-btn:hover {
  background: #cc5400;
}

.profile__exit-btn {
  width: 56px;
  height: 56px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  background: #ABD29B;
  border-radius: 12px;
  cursor: pointer;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.profile__exit-btn:hover {
  background: #9bbe8d;
}
.profile__exit-btn .icon-exit-btn {
  width: 24px;
  height: 24px;
  background-image: url(../img/icon-exit-btn.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

.profile__tabs-ctrl {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  margin-bottom: 36px;
}

.tab-ctrl {
  padding: 0 24px 16px;
  font-weight: 500;
  color: #A49C98;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  border-bottom: 1px solid transparent;
}
.tab-ctrl:hover {
  color: #635e5b;
}
.tab-ctrl.active {
  color: #FF6900;
  border-bottom: 1px solid #FF6900;
}

.tab-body {
  padding: 0 24px;
}

.tab-body {
  display: none;
}

.tab-body.active {
  display: block;
}

.profcards__item {
  width: 498px;
}

.profcards__item-header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  background: #F6F7F4;
  border-radius: 10px;
  padding: 12px 16px;
  margin-bottom: 20px;
}

.profcards__inner {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.profcards__item-img {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.profcards__item-img img {
  width: 66px;
  height: 66px;
}

.profcards__item-btn {
  color: #C25800;
  font-weight: 500;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.profcards__input-label,
.profgeneral__input-label,
.profcards-title {
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 14px;
}

.profcards__item-inputs {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
}

.profgeneral__input input,
.profgeneral__input select,
.profgeneral__input textarea {
  padding: 12px 16px;
  width: 100%;
  max-width: 498px;
  border: none;
  background: #F6F7F4;
  border-radius: 10px;
  font-family: "Manrope";
  font-size: 16px;
  font-weight: 500;
  color: #342B26;
}
.profgeneral__input input::-webkit-input-placeholder, .profgeneral__input select::-webkit-input-placeholder, .profgeneral__input textarea::-webkit-input-placeholder {
  font-weight: 500;
  color: #A7ACAF;
}
.profgeneral__input input::-moz-placeholder, .profgeneral__input select::-moz-placeholder, .profgeneral__input textarea::-moz-placeholder {
  font-weight: 500;
  color: #A7ACAF;
}
.profgeneral__input input:-ms-input-placeholder, .profgeneral__input select:-ms-input-placeholder, .profgeneral__input textarea:-ms-input-placeholder {
  font-weight: 500;
  color: #A7ACAF;
}
.profgeneral__input input::-ms-input-placeholder, .profgeneral__input select::-ms-input-placeholder, .profgeneral__input textarea::-ms-input-placeholder {
  font-weight: 500;
  color: #A7ACAF;
}
.profgeneral__input input::placeholder,
.profgeneral__input select::placeholder,
.profgeneral__input textarea::placeholder {
  font-weight: 500;
  color: #A7ACAF;
}

.profgeneral__input textarea {
  min-height: 134px;
  resize: none;
  font-size: 14px;
  line-height: 1.43;
}

input[name=profname] {
  font-weight: 600;
}

.profgeneral {
  max-width: 498px;
  margin-bottom: 24px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  gap: 20px;
}

.select-container {
  position: relative;
  display: inline-block;
  width: 100%;
}

.select-container::after {
  content: "";
  position: absolute;
  top: calc(50% - 12px);
  right: 12px;
  width: 24px;
  height: 24px;
  background: url(../img/chevron-close.svg) no-repeat center center;
  background-size: contain;
  pointer-events: none;
}

.subscribe {
  margin-top: 6px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}
.subscribe input {
  display: none;
}

.subscribe__item-checkbox {
  width: 18px;
  min-width: 18px;
  height: 18px;
  background-color: #9B4500;
  border-radius: 2px;
}

.subscribe__item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 10px;
  padding: 12px 4px;
  font-weight: 500;
  color: #423935;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.subscribe__item input:checked + .subscribe__item-checkbox {
  background-image: url(../../../assets/img/checked-subscribe.svg);
  background-position: center;
  background-repeat: no-repeat;
}

.profile__btn-save {
  padding: 10px 14px;
  background: #FF6900;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  color: #fff;
  border-radius: 16px;
  font-weight: 600;
  font-size: 20px;
  font-family: "Inter";
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  width: 100%;
  text-align: center;
  display: none;
}

.profgeneral__input-info {
  margin-top: 6px;
  font-weight: 500;
  font-size: 14px;
}

.profgeneral__input-info a {
  text-decoration: none;
  color: #FF6900;
}

.tab-contact input[name=email] {
  color: #FF6900;
}

.reschedule_time__calendar-date {
  margin-bottom: 0;
}

.reschedule_time-label {
  display: none;
}

.reschedule_time__calendar-second {
  margin-top: 12px;
}

.calendar-date__item {
  height: 49px;
}

.calendar-table__cell {
  width: calc(20% - 4px);
}

.stat-1,
.stat-2 {
  color: #fff;
}

.stat-1 {
  background: #ABD29B;
}

.stat-2 {
  background: #FF8733;
}

.tab-specialty .profgeneral {
  gap: 28px;
  margin-bottom: 40px;
}
.tab-specialty .profgeneral__input-label {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;
}
.tab-specialty .profgeneral__input-info {
  margin-top: 16px;
  font-size: 12px;
  color: #423935;
}

.profile__btn-add {
  padding: 16px 32px;
  background: #FF6900;
  border-radius: 12px;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  margin-left: -24px;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}
.profile__btn-add:hover {
  background: #cc5400;
}

.radio-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  gap: 12px;
}

.radio-container__label {
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

.radio-container__input {
  padding: 8px 18px;
  border-radius: 24px;
  background: #F3F4F1;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

.radio-container__label input {
  display: none;
}
.radio-container__label input:checked + .radio-container__input {
  background: #FF6900;
  color: #fff;
}

.education {
  margin-left: -24px;
  margin-bottom: 40px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  gap: 20px;
}

.education__item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 16px;
}

.education__place,
.education__year {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  gap: 8px;
}

.education__label {
  font-size: 14px;
  font-weight: 500;
}

.education__input input {
  background-color: #F6F7F4;
  border: none;
  padding: 12px 16px;
  font-size: 16px;
  line-height: 1.5;
  border-radius: 10px;
  font-family: "Manrope";
  color: #342B26;
  width: 100%;
}

.education__place {
  width: 318px;
}

.education__year {
  width: 161px;
}
.education__year .education__label {
  opacity: 0;
}

.contract__list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  gap: 20px;
  margin-bottom: 28px;
}

.contract__label {
  font-size: 14px;
  line-height: 1.43;
  margin-bottom: 8px;
}

.contract__value {
  font-weight: 600;
  line-height: 1.5;
}

.contract__btns-lbl {
  font-size: 14px;
  color: #423935;
  line-height: 1.43;
  margin-bottom: 20px;
}

[class^=contract__btn-] {
  padding: 16px;
  line-height: 1.5;
  font-weight: 500;
  color: #fff;
  background: #ABD29B;
  border-radius: 12px;
  width: 100%;
  text-align: center;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
[class^=contract__btn-]:hover {
  background: #9bbe8d;
}

.contract__btns-wrp-first,
.contract__btns-wrp {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 16px;
}

.contract__btns-wrp {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  max-width: 496px;
}

.profile-popup {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  z-index: -9;
  opacity: 0;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

.profile-popup.active {
  z-index: 9999;
  opacity: 1;
}

.profile-popup__layer {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4784313725);
  cursor: pointer;
}

.profile-popup__body {
  position: relative;
  z-index: 2;
  background: #fff;
  max-width: 935px;
  max-height: 90vh;
  border-radius: 20px;
  padding-top: 22px;
  padding-bottom: 22px;
}

.profile-popup__text {
  max-height: calc(90vh - 44px);
  padding-right: 47px;
  padding-left: 66px;
  padding-top: 22px;
  padding-bottom: 0;
  margin-right: 6px;
  overflow: auto;
  font-size: 14px;
}
.profile-popup__text::-webkit-scrollbar {
  width: 8px;
}
.profile-popup__text::-webkit-scrollbar-track {
  background: #F1F1F1;
  width: 8px;
  border-radius: 10px;
}
.profile-popup__text::-webkit-scrollbar-thumb {
  background-color: #D3D3D3;
  border-radius: 10px;
  border: none;
  width: 13px;
}
.profile-popup__text h1,
.profile-popup__text h2,
.profile-popup__text h3 {
  font-size: 14px;
  margin: 0;
  font-weight: 600;
}
.profile-popup__text p,
.profile-popup__text ul,
.profile-popup__text ol,
.profile-popup__text h4,
.profile-popup__text h5,
.profile-popup__text h6 {
  font-size: 14px;
  margin: 0;
  font-weight: 500;
  line-height: 1.43;
}
.profile-popup__text ul {
  list-style: none;
  padding-left: 30px;
}

.profile-popup__close {
  background-image: url(../img/profile-popup__close.svg);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  position: absolute;
  right: -24px;
  top: 0;
  cursor: pointer;
  -webkit-transform: translateX(100%);
          transform: translateX(100%);
}

@media (max-width: 1290px) {
  .education,
  .profile__btn-add {
    margin-left: 0;
  }
  .profile__header {
    padding: 0;
    margin-bottom: 12px;
  }
  .profile__title {
    font-size: 20px;
  }
  .profile__btns {
    gap: 6px;
  }
  .profile__ethical-btn,
  .profile__save-btn {
    padding: 8px 12px;
    font-size: 14px;
    line-height: 1;
  }
  .profile__exit-btn {
    width: 32px;
    height: 32px;
    background: #FF6900;
  }
  .profile__exit-btn .icon-exit-btn {
    width: 16px;
    height: 16px;
  }
  .profile__tabs-ctrl {
    gap: 13px;
    margin-bottom: 24px;
  }
  .tab-body {
    padding: 0;
  }
  .tab-ctrl {
    padding: 8px 0;
  }
}
@media (max-width: 1190px) {
  .profile-popup__close {
    background-image: url(../img/profile-popup__close-2.svg);
    width: 19px;
    height: 19px;
    -webkit-transform: translateX(0);
            transform: translateX(0);
    right: 16px;
    top: 16px;
  }
  .profile-popup__body {
    padding-top: 16px;
    max-width: 520px;
  }
  .profile-popup__text {
    max-height: calc(90vh - 74px);
    padding-top: 0;
    padding-left: 16px;
    padding-right: 28px;
    margin-right: 0;
  }
  .profile-popup__text h2 {
    font-size: 22px;
    padding-right: 16px;
  }
  .profile-popup__text::-webkit-scrollbar {
    width: 6px;
  }
  .profile-popup__text::-webkit-scrollbar-track {
    background: #F1F1F1;
    width: 6px;
    border-radius: 0;
  }
  .profile-popup__text::-webkit-scrollbar-thumb {
    background-color: #FF6900;
    border-radius: 0;
    border: none;
    width: 6px;
  }
  .profile__btn-add {
    margin-left: 0;
    padding: 10px 14px;
    background: #F7F7F7;
    color: #363636;
    font-weight: 500;
    font-family: "Inter";
    margin-bottom: 24px;
    border-radius: 16px;
  }
  .dashboard {
    background: transparent;
    padding: 0;
  }
  .profile__ethical-btn-mob,
  .profile__btn-save {
    display: block;
  }
  .profile__ethical {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    gap: 4px;
    font-family: "Inter";
    font-weight: 500;
    color: #363636;
  }
  .profile__ethical:before {
    content: "";
    background-image: url(../img/book.svg);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 20px;
    min-width: 20px;
    height: 20px;
  }
  .profile__ethical-btn-mob {
    background: #fff;
    padding: 10px;
    border-radius: 16px;
    margin-bottom: 8px;
    cursor: pointer;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
  }
  .profile__body {
    padding: 16px;
    background: #fff;
    border-radius: 16px;
    min-height: calc(100vh - 64px);
  }
  .profile__btn-save {
    font-size: 16px;
    max-width: 498px;
  }
  .profile__ethical-btn,
  .profile__save-btn {
    display: none;
  }
  .subscribe__item-text {
    font-size: 14px;
  }
  .tab-contact input[name=email] {
    color: #342B26;
  }
  .passport-btn-icon {
    display: inline-block;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 20px;
    height: 20px;
    margin-right: 4px;
  }
  .passport-btn-icon {
    background-image: url(../img/passport-btn-icon.svg);
  }
  .contract__label,
  .contract__value {
    line-height: 1.25;
  }
  .contract__btns-lbl {
    display: none;
  }
  .contract__list {
    margin-bottom: 24px;
  }
  [class^=contract__btn-] {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    background: #F7F7F7;
    font-family: "Inter";
    line-height: 1.25;
    color: #363636;
    border-radius: 16px;
    padding: 10px;
  }
  [class^=contract__btn-]:hover {
    background: #F7F7F7;
  }
  .contract__btns-wrp-first {
    gap: 6px;
  }
  .contract__btns-wrp {
    gap: 8px;
  }
  .contract__btns-wrp {
    max-width: 100%;
  }
}
@media (max-width: 900px) {
  .education {
    margin-bottom: 24px;
  }
  .education__year .education__label {
    opacity: 1;
  }
  .education__item {
    gap: 8px;
  }
  .education__place {
    width: calc(100% - 77px);
  }
  .education__year {
    width: 69px;
  }
  .tab-ctrl {
    font-size: 13px;
  }
  .profcards__item,
  .profgeneral,
  .profile__btn-save,
  .profgeneral__input input,
  .profgeneral__input select,
  .profgeneral__input textarea {
    width: 100%;
    max-width: 100%;
  }
  .profcards__item-header,
  .profcards__item-inputs {
    margin-bottom: 24px;
  }
  .profcards__item-inputs,
  .profgeneral {
    gap: 24px;
  }
  .profcards__item-img img {
    border-radius: 6px;
  }
  .profcards__item-header {
    padding: 8px;
  }
  .reschedule_time-label {
    display: block;
    font-weight: 600;
    margin-bottom: 14px;
  }
  .reschedule_time__calendar-second {
    margin-top: 24px;
  }
  .reschedule_time__calendar {
    margin-bottom: 0;
  }
  .profgeneral__input-label {
    font-size: 16px;
    font-weight: 500;
  }
  .profgeneral__input:nth-child(3) .profgeneral__input-label {
    font-size: 16px;
    margin-bottom: 14px;
  }
  .calendar-date__item {
    height: 38px;
  }
  .calendar-table__cell {
    width: calc(16.6666666667% - 4px);
  }
}
@media (max-width: 700px) {
  .profile-popup__body {
    max-width: 343px;
  }
}
@media (max-width: 500px) {
  .wrapper {
    padding: 4px;
  }
  main.main {
    top: 53px;
  }
  .profile__ethical-btn-mob {
    margin-bottom: 4px;
  }
  .profile__tabs-ctrl {
    gap: 6px 26px;
  }
  .calendar-table__cell {
    width: calc(25% - 4px);
  }
  .profile__body {
    min-height: calc(100vh - 120px);
  }
}
@media (max-width: 365px) {
  .profile-popup__body {
    max-width: 280px;
  }
}
</style> -->