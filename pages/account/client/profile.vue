<template>
    <div class="wrapper">
        
        <SidebarAccountClientOnBoard step="main" />
        <main class="main" :class="choose?'hide':''">
          <div class="dashboard">

              <div class="profile">

                  <div class="profile__first">
                      <div class="profile__header">
                          <div class="profile__header-title">Ваш личный профиль</div>
                          <div class="profile__header-icon" @click="exit"></div>
                      </div>

                      <div class="psychlist">
                              <div class="psychlist__item" v-for="(item,index) in clientData.psychologists" :key="item.id">
                                  <div class="psychlist__item-img">
                                      <img :src="item.psychologist.photo" alt="persons 1">
                                  </div>
                                  <div class="psychlist__item-name">
                                      <div class="psychlist__item-name-lbl">Ваш психолог</div>
                                      <div class="psychlist__item-name-txt">{{ item.psychologist.name}}</div>
                                  </div>
                                  <div class="psychlist__item-btn" @click="CancelСonnection(item.id,index)">Завершить работу с терапевтом</div>
                              </div>
                                      </div>

                      <div class="psychadd-btn" @click="FindPsychologist">Добавить психолога</div>
                  </div>

                  <div class="profile__second">
                      <div v-if="cuple" class="profcards">
                          <div class="profcards_mob-title">Настройки</div>
                          <div class="profcards__inner">

                              <div class="profcards__item">
                                  <div class="profcards__item-header">
                                      <div class="profcards__item-img">
                                          <img :src="photoPreview" alt="prof-1" v-if="photoPreview">
                                          <div v-else class="placeholder">Фото отсутствует</div>
                                      </div>
                                      <div class="profcards__item-btn" @click="triggerFileInput">Заменить</div>
                                      <!-- Скрытый input для загрузки файла -->
                                      <input
                                          type="file"
                                          ref="fileInput"
                                          style="display: none"
                                          accept="image/*"
                                          @change="handleFileUpload"
                                      />
                                  </div>

                                  <div class="profcards__item-inputs">
                                      <label class="profcards__input">
                                          <div class="profcards__input-label">Имя/Псевдоним</div>
                                          <input type="text" name="profname"  v-model="clientData.nickname">
                                      </label>
                                      <label class="profcards__input">
                                          <div class="profcards__input-label">Дата рождения</div>
                                          <div class="date-container">
                                              <input type="date" name="birthdate" v-model="clientData.date_of_birth">
                                          </div>
                                      </label>
                                  </div>
                              </div>

                              <div class="profcards__item">
                                  <div class="profcards__item-header">
                                      <div class="profcards__item-img">
                                          <img :src="photoPreviewSecond" alt="prof-1" v-if="photoPreviewSecond">
                                          <div v-else class="placeholder">Фото отсутствует</div>
                                      </div>
                                      <div class="profcards__item-btn" @click="triggerFileInputSecond">Заменить</div>
                                      <!-- Скрытый input для загрузки файла -->
                                      <input
                                          type="file"
                                          ref="fileInputSecond"
                                          style="display: none"
                                          accept="image/*"
                                          @change="handleFileUploadSecond"
                                      />
                                  </div>

                                  <div class="profcards__item-inputs">
                                      <label class="profcards__input">
                                          <div class="profcards__input-label">Имя/Псевдоним</div>
                                          <input type="text" name="profname"   v-model="clientData.nickname_second">
                                      </label>
                                      <label class="profcards__input">
                                          <div class="profcards__input-label">Дата рождения</div>
                                          <div class="date-container">
                                              <input type="date" name="birthdate"  v-model="clientData.date_of_birth_second">
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
                                          <img :src="photoPreview" alt="prof-1" v-if="photoPreview">
                                          <div v-else class="placeholder">Фото отсутствует</div>
                                      </div>
                                      <div class="profcards__item-btn" @click="triggerFileInput">Заменить</div>
                                      <!-- Скрытый input для загрузки файла -->
                                      <input
                                          type="file"
                                          ref="fileInput"
                                          style="display: none"
                                          accept="image/*"
                                          @change="handleFileUpload"
                                      />
                                  </div>

                                  <div class="profcards__item-inputs">
                                      <label class="profcards__input">
                                          <div class="profcards__input-label">Имя/Псевдоним</div>
                                          <input type="text" name="profname"  v-model="clientData.nickname">
                                      </label>
                                      <label class="profcards__input">
                                          <div class="profcards__input-label">Дата рождения</div>
                                          <div class="date-container">
                                              <input type="date" name="birthdate" v-model="clientData.date_of_birth">
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
                                      <select name="timezone" v-model="clientData.timezone">
                                      <option value="Europe/Kaliningrad">Калининград (МСК−1, {{ getGMTOffset('Europe/Kaliningrad') }})</option>
                                      <option value="Europe/Moscow">Москва (МСК, {{ getGMTOffset('Europe/Moscow') }})</option>
                                      <option value="Europe/Samara">Самара (МСК+1, {{ getGMTOffset('Europe/Samara') }})</option>
                                      <option value="Asia/Yekaterinburg">Екатеринбург (МСК+2, {{ getGMTOffset('Asia/Yekaterinburg') }})</option>
                                      <option value="Asia/Omsk">Омск (МСК+3, {{ getGMTOffset('Asia/Omsk') }})</option>
                                      <option value="Asia/Krasnoyarsk">Красноярск (МСК+4, {{ getGMTOffset('Asia/Krasnoyarsk') }})</option>
                                      <option value="Asia/Irkutsk">Иркутск (МСК+5, {{ getGMTOffset('Asia/Irkutsk') }})</option>
                                      <option value="Asia/Yakutsk">Якутск (МСК+6, {{ getGMTOffset('Asia/Yakutsk') }})</option>
                                      <option value="Asia/Vladivostok">Владивосток (МСК+7, {{ getGMTOffset('Asia/Vladivostok') }})</option>
                                      <option value="Asia/Magadan">Магадан (МСК+8, {{ getGMTOffset('Asia/Magadan') }})</option>
                                      <option value="Asia/Kamchatka">Камчатка (МСК+9, {{ getGMTOffset('Asia/Kamchatka') }})</option>
                                  </select>
                                                  </div>
                          </label>
                          <label class="profgeneral__input">
                              <div class="profgeneral__input-label">Телефон</div>
                              <input type="text" name="phone" placeholder="88005553535" :value="clientData.phone"  disabled>
                              <div class="profgeneral__input-info">Для смены номера напишите на электронную почту <a href="mailto:pozitalk@mail.ru">pozitalk@mail.ru</a></div>
                          </label>
                          <label class="profgeneral__input">
                              <div class="profgeneral__input-label">Электроная почта</div>
                              <input type="text" name="email"  v-model="clientData.email">
                              <div class="subscribe">
                                  <label class="subscribe__item">
                                      <input type="checkbox" name="subscribe"  v-model="clientData.news_notification">
                                      <div class="subscribe__item-checkbox"></div>
                                      <div class="subscribe__item-text">Новости и важные события встречи</div>
                                  </label>
                                  <label class="subscribe__item">
                                      <input type="checkbox" name="subscribe"  v-model="clientData.reminder_notification">
                                      <div class="subscribe__item-checkbox"></div>
                                      <div class="subscribe__item-text">Напоминание по почте за 24 часа до встречи</div>
                                  </label>
                                  <label class="subscribe__item">
                                      <input type="checkbox" name="subscribe"  v-model="clientData.message_notification">
                                      <div class="subscribe__item-checkbox"></div>
                                      <div class="subscribe__item-text">Уведомления о сообщениях от терапевта</div>
                                  </label>
                              </div>
                          </label>
                      </div>
                      <div class="profile__btn-save" @click="send">Сохранить</div>
                  </div>

              </div>


          </div>

        </main>
        <main class="main" :class="!choose?'hide':''">
            <div class="dashboard">
               <div class="dashboard__main">
                  <div class="container-small">
                        <div class="cart">
                           <div class="cart__info">
                              <div class="cart__info-first">
                                    Запись доступна<br>
                                    с 29 сентября, 13:00
                              </div>
                              <div class="cart__info-second" v-if="current !== list.length - 1">
                                  <div class="cart__info-second-txt">
                                    Ещё {{ list.length - 1 - current }} {{ morph(list.length - 1 - current, ["психолог",
                                        "психолога", "психологов"]) }}<br>
                                    по вашей проблеме
                                  </div>
                                  <div class="cart__info-second-btn" @click="current++">
                                    <div class="cart__info-second-btn-img" v-if="list[current + 1]?.photo?.length">
                                        <img :src="list[current + 1]?.photo" alt="person-2">
                                    </div>
                                    <div class="cart__info-second-btn-arrow"></div>
                                  </div>
                              </div>
                              <div class="cart__info-second prev" v-if="current > 0">
                                  <div class="cart__info-second-btn prev" @click="current--">
                                    <div class="cart__info-second-btn-img" v-if="list[current - 1]">
                                        <img :src="list[current - 1]?.photo" alt="person-2">
                                    </div>
                                    <div class="cart__info-second-btn-arrow" style="rotate: 180deg;"></div>
                                  </div>
                              </div>
                           </div>

                           
                          <div class="top">
                            <div class="top__label">
                                <div class="icon certificate"></div>
                                <div class="top_cert-txt">{{ currentPsycho?.experience }} {{ morph(currentPsycho?.experience,
                                  ["год",
                                      "года", "лет"]) }} опыта</div>
                            </div>
                            <div class="top__img" v-if="currentPsycho?.photo?.length">
                                <img :src="currentPsycho?.photo" :alt="currentPsycho?.name">
                            </div>
                          </div>
                          <div class="body">
                            <div class="body__item">
                                <div class="lbl">
                                  <div class="lbl__header">
                                      <div class="lbl__header-lbl">
                                        <div class="icon romb-orange"></div>
                                        <div class="lbl__header-text">{{ currentPsycho?.label }}</div>
                                      </div>
                                      <div class="lbl__header-second">
                                        <div class="raiting">
                                            <div class="icon star"></div>
                                            <div class="raiting__count">{{ currentPsycho?.rating }}</div>
                                        </div>
                                      </div>
                                  </div>
                                  <div class="lbl__body">
                                      <div class="nameold">
                                        <div class="nameold__name" v-if="currentPsycho?.name">{{ currentPsycho?.name }}</div>
                                        <div class="nameold__old">{{ currentPsycho?.age }} {{ morph(currentPsycho?.age, ["год",
                                            "года", "лет"]) }}</div>
                                      </div>
                                  </div>
                                </div>
                            </div>

                            <div class="body__item">
                                <template v-for="(item, index) in currentPsycho?.education_psychologist" :key="item">
                                  <div class="lbldescmore" v-if="index == 0 || showMoreEducation">
                                      <div class="lbldescmore__lbl">
                                        <div class="icon graduation-cap"></div>
                                        <div class="lbldescmore__lbl-txt">{{ item.year }}</div>
                                      </div>
                                      <div class="lbldescmore__desc">
                                        <div class="lbldescmore__desc-txt">
                                            {{ item.text }}
                                        </div>
                                        <div class="lbldescmore__btn-wrp" v-if="!showMoreEducation"
                                            @click="showMoreEducation = true">
                                            <div class="btn__more">Показать больше</div>
                                        </div>
                                      </div>
                                  </div>
                                </template>

                            </div>


                            <div class="body__item">

                                <div class="lbltagsmore">
                                  <div class="lbltagsmore__inner">
                                      <div class="lbltagsmore__lbl">
                                        <div class="icon binoculars"></div>
                                        <div class="lbltagsmore__lbl-txt">Темы:</div>
                                      </div>
                                      <div class="lbltagsmore__item" v-for="item in currentPsycho?.psycho_topic" :key="item">
                                        {{ item.name }}
                                      </div>
                                  </div>
                                  <!-- <div class="lbltagsmore__btn-wrp">
                                      <div class="btn__more">Все темы</div>
                                  </div> -->
                                </div>

                            </div>

                            <div class="body__item" v-if="currentPsycho?.description?.length">
                                <div class="descmore">
                                  <div class="descmore__txt" v-html="currentPsycho?.description">
                                  </div>
                                  <!-- <div class="descmore__btn-wrp">
                                      <div class="btn__more">Показать больше</div>
                                  </div> -->
                                </div>
                            </div>

                            <div class="body__item __err">

                                <div class="schedule">
                                  <div class="schedule__header">
                                      <div class="lbltagsmore__lbl">
                                        <div class="icon calendar"></div>
                                        <div class="lbltagsmore__lbl-txt">Расписание</div>
                                      </div>
                                      <div class="schedule__timezone">
                                        <div class="schedule__timezone-select">
                                            <div class="schedule__timezone__option">
                                              <div class="schedule__timezone-txt">15:21 (Asia/Novosibirsk)</div>
                                            </div>
                                        </div>
                                        <div class="schedule__timezone-btn">
                                            <div class="icon chevron-down"></div>
                                        </div>
                                      </div>
                                  </div>
                                  <div class="schedule__calendar">
                                      <div class="cldr">
                                        <div class="cldr__day" v-for="item in schedule" :key="item">
                                            <div class="cldr__day-lbl">{{ item.name }}</div>
                                            <div class="cldr__day-hours">

                                              <div class="cldr__hour" :class="{ available: slot.available }"
                                                  v-for="slot in item.slots" :key="slot">
                                                  {{ slot.time }}
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                  </div>
                                  <div class="schedule__info">
                                      <div class="schedule__info-err">
                                        <div class="icon circle-exclamation"></div>
                                        <div class="schedule__info-err-txt">Выберите время для оплаты</div>
                                      </div>
                                  </div>
                                </div>

                            </div>

                          </div>
                          <div class="cart__btn-wrp">
                            <div class="btn__order btn" @click="pay">Оплатить 2 000 ₽</div>
                            <div class="btns" style="display: flex;flex-direction: column;gap: 4px;">
                                <div class="btn__nextps __mob" v-if="current !== list.length - 1" @click="current++">
                                  <div class="cart__info-second-btn-img">
                                      <img :src="list[current + 1]?.photo" alt="person-2">
                                  </div>
                                  <div class="cart__info-second-btn-txt" style="flex:1">Следующий</div>
                                  <div class="cart__info-second-btn-arrow"></div>
                                </div>
                                <div class="btn__nextps __mob prev" v-if="current > 0" @click="current--">
                                  <div class="cart__info-second-btn-img">
                                      <img :src="list[current - 1]?.photo" alt="person-2">
                                  </div>
                                  <div class="cart__info-second-btn-txt" style="flex:1">Предыдущий</div>
                                  <div class="cart__info-second-btn-arrow" style="rotate: 180deg;"></div>
                                </div>
                            </div>

                          </div>
                        </div>
                  </div>
               </div>
               <div class="dashboard__filter">

                  
            <div class="filterwrp">
               <div class="filters-btn __mob __tablet">
                  <div class="icon funnel"></div>
                  <div class="filters-btn__text">Фильтры</div>
               </div>
               <div class="filters">
                  <div class="filters__title __tablet">Фильтры психолога</div>

                  <form class="filters__list">

                     <div class="filters__item">
                        <div class="filters__item-label">Пол психолога</div>
                        <div class="filters__tags">
                           <label class="filters__tags-item" v-for="item in sex" :key="item">
                              <input type="radio" name="gender" :value="item.value"  @change="updateFilter('gender', item.value)">
                              <div class="filters__tags-item-txt">{{ item.name }}</div>
                           </label>
                        </div>
                     </div>

                     <div class="filters__item">
                        <div class="filters__item-label">Возраст психолога</div>
                        <div class="filters__tags">
                           <label class="filters__tags-item" v-for="item in age" :key="item">
                              <input type="radio" name="age" :value="item.value" @change="updateFilter('age', item.value)">
                              <div class="filters__tags-item-txt">
                                 {{ item.name }}
                              </div>
                           </label>
                        </div>

                     </div>

                  </form>
               </div>

               <div class="help__tablet">
                  <a href="#" class="btn__help">Помощь</a>
               </div>
            </div>

               </div>
            </div>
            <!-- PopUp "Добавить карту и записаться" -->
            <div class="popup addcard-signup">
               <div class="popup__body">
                  <div class="popup__close">
                        <div class="icon popup-close"></div>
                  </div>
                  <form id="addcard">
                        <div class="popup__title __mob">Оплата</div>
                        <div class="popup__header">
                           <div class="popup__header-img">
                              <img src="../assets/img/Daniil-2.png" alt="Даниил">
                           </div>
                           <div class="popup__header-info">
                              <div class="popup__header-name">Даниил</div>
                              <div class="popup__header-info">17 июля, среда в 10:00</div>
                           </div>
                        </div>
                        <div class="popup__choosecard">
                           <div class="popup__choosecard-select">
                              <div class="popup__choosecard-selected">
                                    <div class="popup__choosecard-item">
                                       <div class="icon purse"></div>
                                       <div class="popup__choosecard-item-txt">Карта РФ или МИР — RUB</div>
                                    </div>
                              </div>
                              <div class="icon cart-arrow"></div>
                           </div>
                           <div class="popup__choosecard-list"></div>
                        </div>
                        <div class="popup__maininfo">
                           <div class="popup__maininfo-inner">
                              <div class="popup__maininfo-item">
                                    <div class="popup__maininfo-item-lbl">Сессия, 50 мин</div>
                                    <div class="popup__maininfo-item-price">2 000 ₽</div>
                              </div>
                              <div class="popup__maininfo-item">
                                    <div class="popup__maininfo-item-lbl">Промокод</div>
                                    <div class="popup__maininfo-item-btn">Добавить</div>
                              </div>
                           </div>
                           <div class="popup__maininfo-promo">
                              <div class="promo-input">
                                    <input class="promo" type="text" name="promo" placeholder="COLS45CWU">
                              </div>
                              <div class="promo-btn">Добавить</div>
                           </div>
                        </div>
                        <div class="popup__line"></div>
                        <div class="popup__summ">
                           <div class="popup__summ-lbl">Итого</div>
                           <div class="popup__summ-val">2 000 ₽</div>
                        </div>
                        <div class="popup__info">
                           <div class="icon info-orange"></div>
                           <div class="popup__info-text">Отменить или перенести сессию можно за 24 часа до назначенного времени</div>
                        </div>
                        <button class="btn popup__submit" id="addcard_sbm" type="submit">Добавить карту и записаться</button>
                        <div class="popup__policy">
                           Записываясь на сессию, вы соглашаетесь<br> <a href="#">с договором оказания услуг</a>
                        </div>
                        <div class="popup__faq">
                                                <div class="popup__faq-item">
                                    <div class="popup__faq-item-q active">
                                       <div class="popup__faq-item-q-txt">Как перенести или отменить сессию?</div>
                                       <div class="icon popup-faq-arrow"></div>
                                    </div>
                                    <div class="popup__faq-item-a" style="">Вы можете отменить или перенести сессию с психологом не позднее 24 часов до её начала.Перенос меньше, чем за 24 часа, возможен при согласии психолога в переписке.
                                    Для переноса сессии воспользуйтесь личным кабинетом на сайте ПозиТолк.</div>
                              </div>
                                                <div class="popup__faq-item">
                                    <div class="popup__faq-item-q">
                                       <div class="popup__faq-item-q-txt">Что произойдет после добавления карты?</div>
                                       <div class="icon popup-faq-arrow"></div>
                                    </div>
                                    <div class="popup__faq-item-a" style="display: none;">Вы можете отменить или перенести сессию с психологом не позднее 24 часов до её начала.Перенос меньше, чем за 24 часа, возможен при согласии психолога в переписке.
                                    Для переноса сессии воспользуйтесь личным кабинетом на сайте ПозиТолк.</div>
                              </div>
                                                <div class="popup__faq-item">
                                    <div class="popup__faq-item-q">
                                       <div class="popup__faq-item-q-txt">В какой момент будет списана стоимость сессии?</div>
                                       <div class="icon popup-faq-arrow"></div>
                                    </div>
                                    <div class="popup__faq-item-a" style="display: none;">Вы можете отменить или перенести сессию с психологом не позднее 24 часов до её начала.Перенос меньше, чем за 24 часа, возможен при согласии психолога в переписке.
                                    Для переноса сессии воспользуйтесь личным кабинетом на сайте ПозиТолк.</div>
                              </div>
                                                <div class="popup__faq-item">
                                    <div class="popup__faq-item-q">
                                       <div class="popup__faq-item-q-txt">Можно ли удалить или изменить карту после добавления?</div>
                                       <div class="icon popup-faq-arrow"></div>
                                    </div>
                                    <div class="popup__faq-item-a" style="display: none;">Вы можете отменить или перенести сессию с психологом не позднее 24 часов до её начала.Перенос меньше, чем за 24 часа, возможен при согласии психолога в переписке.
                                    Для переноса сессии воспользуйтесь личным кабинетом на сайте ПозиТолк.</div>
                              </div>
                           

                        </div>
                  </form>

               </div>
               <div class="popup__layer"></div>
            </div>
            <!-- PopUp "Оплатить" -->
            <div class="popup topay">
               <div class="popup__body">
                  <div class="popup__close">
                        <div class="icon popup-close"></div>
                  </div>
                  <form id="topay">
                        <div class="popup__title __mob">Оплата</div>
                        <div class="popup__header">
                           <div class="popup__img-pay-sistem">
                              <img src="../assets/img/pay-sistem.svg" alt="yoomoney">
                           </div>
                        </div>
                        <div class="popup__org">
                           <div class="popup__org-wrp">
                              <div class="popup__org-name">OOO “ПОЗИТОЛК”</div>
                              <div class="popup__org-price">2 ₽</div>
                           </div>
                           <div class="popup__org-info">Завершите платеж в течении <span>9:30</span></div>
                        </div>
                        <div class="popup__line"></div>

                        <div class="popup__card">
                           <div class="popup__card-info">Введите данные карты для оплаты</div>
                           <div class="popup__card-req">
                              <div class="popup__card-number">
                                    <label class="popup__card-label">
                                       <div class="popup__card-text">Номер карты:</div>
                                       <input type="text" name="card-number">
                                    </label>
                              </div>
                              <div class="popup__card-other">
                                    <div class="popup__card-date">
                                       <label class="popup__card-label">
                                          <div class="popup__card-text">Месяц</div>
                                          <input type="text" name="card-month">
                                       </label>
                                       <span class="popup__card-sep">/</span>
                                       <label class="popup__card-label">
                                          <div class="popup__card-text">Год</div>
                                          <input type="text" name="card-year">
                                       </label>
                                    </div>
                                    <div class="popup__card-cvc">
                                       <label class="popup__card-label">
                                          <div class="popup__card-text">CVV/CVC</div>
                                          <input type="text" name="card-cvc">
                                       </label>
                                    </div>
                              </div>
                           </div>
                           <button class="btn popup__submit" id="topay_sbm" type="submit">Оплатить</button>
                           <div class="popup__policy">
                              Совершая платеж здесь, вы разрешаете <br> <a href="#">автоматическое списание денег</a>
                           </div>
                        </div>

                  </form>
               </div>
               <div class="popup__layer"></div>
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
import { toast } from "bulma-toast";
const choose = ref(false)

useHead({
    link: [
        { rel: 'stylesheet', href: '/client/css/main-2.css', id: 'calendar-main-2' },
       {
          rel: "stylesheet",
          href: "/client/css/page-14.css",
          id: "calendar-page-14",
       },
    ]
  });
const store = useClientStore()
const cuple = ref(false);
 const clientData = ref({
  email: '',
  nickname: '',
});

function cancelConnection(id, index) {
  store.сancelСonnection(id).then(() => {
    clientData.psychologists.splice(index, 1);
  }).catch(error => {
    console.error("Ошибка при удалении:", error);
  });
}

onMounted(() => updateStyles());

watch(cuple, () => updateStyles());
watch(choose, () => updateStyles());
const list = ref([])
const response =ref()

const current = ref(0)
const currentPsycho = computed(() => {
   return list.value[current.value]
})
response.value = await store.getPsychologists()
console.log('response', response.value);
list.value = response.value;

function updateStyles() {
  // Удаляем старые стили
  document.getElementById('calendar-page')?.remove();

  // Создаем новый <link> только если cuple.value меняется
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  if(!choose.value){
    link.href = cuple.value ? '/client/css/page-15.css' : '/client/css/page-14.css';
  }else{
    link.href = '/client/css/page-16.css';
  }
  link.id = 'calendar-page';

  document.head.appendChild(link);
}
store.getSelfClient()
  .then(item => {
    clientData.value = item;
    photoPreview.value = clientData.value.photo
    photoPreviewSecond.value = clientData.value.photo_second
    console.log(clientData.value);
    if(clientData.value.therapy_type=='couple'){
        cuple.value = true;
    }else{
        console.log(clientData.value)
        cuple.value = false;
    }
    
  })
  .catch(error => {
    console.error('Ошибка при получении данных психолога:', error);
  });;
  
function FindPsychologist(){
  choose.value = !choose.value
}
function CancelСonnection(id,index) {
    store.сancelСonnection(id)
    cancelConnection(id,index)
}
const fileInput = ref(null);
// Переменная для отображения превью фотографии
const photoPreview = ref('');
// Функция для открытия диалога выбора файла
function triggerFileInput() {
  fileInput.value.click();
}
// Функция для обработки загрузки файла
function handleFileUpload(event) {
  const file = event.target.files[0];
  if (file) {
    // Сохраняем файл в clientData
    clientData.value.photo = file;

    // Создаем превью фотографии для отображения
    const reader = new FileReader();
    reader.onload = (e) => {
      photoPreview.value = e.target.result; // Сохраняем Data URL для превью
    };
    reader.readAsDataURL(file);
  }
}
const fileInputSecond = ref(null);
// Переменная для отображения превью фотографии
const photoPreviewSecond = ref('');
// Функция для открытия диалога выбора файла
function triggerFileInputSecond() {
  fileInputSecond.value.click();
}
// Функция для обработки загрузки файла
function handleFileUploadSecond(event) {
  const file = event.target.files[0];
  if (file) {
    // Сохраняем файл в clientData
    clientData.value.photo_second = file;

    // Создаем превью фотографии для отображения
    const reader = new FileReader();
    reader.onload = (e) => {
      photoPreviewSecond.value = e.target.result; // Сохраняем Data URL для превью
    };
    reader.readAsDataURL(file);
  }
}

const getGMTOffset = (tz) => {
  try {
    const now = new Date();
    const offset = new Intl.DateTimeFormat("en-US", {
      timeZone: tz,
      timeZoneName: "shortOffset"
    }).formatToParts(now).find(part => part.type === "timeZoneName")?.value;
    return offset ? offset.replace("GMT", "GMT") : "GMT";
  } catch {
    return "GMT";
  }
};

const send = async() =>{
    
  console.log(clientData.value)
         try {
            // Создаем объект FormData
            const formData = new FormData();
      
            //formData.append("phone_number", clientData.value.phone_number);
            if(clientData.value.nickname  && clientData.value.nickname!=null && clientData.value.nickname!=undefined && clientData.value.nickname!=''){
              formData.append("nickname", clientData.value.nickname);
            }
            if(clientData.value.nickname_second  && clientData.value.nickname_second!=null && clientData.value.nickname_second!=undefined && clientData.value.nickname_second!=''){
              formData.append("nickname_second", clientData.value.nickname_second);
            }
            if(clientData.value.email  && clientData.value.email!=null && clientData.value.email!=undefined && clientData.value.email!=''){
              formData.append("email", clientData.value.email);
            }
            if(clientData.value.date_of_birth && clientData.value.date_of_birth!=null && clientData.value.date_of_birth!=undefined && clientData.value.date_of_birth!=''){
              formData.append("date_of_birth", clientData.value.date_of_birth);
            }
            if(clientData.value.date_of_birth_second && clientData.value.date_of_birth_second!=null && clientData.value.date_of_birth_second!=undefined && clientData.value.date_of_birth_second!=''){
              formData.append("date_of_birth_second", clientData.value.date_of_birth_second);
            }
            // Добавляем файл photo, если он есть
            if (clientData.value.photo instanceof File) {
               formData.append("photo", clientData.value.photo);
            }
            if (clientData.value.photo_second instanceof File) {
               formData.append("photo_second", clientData.value.photo_second);
            }
            if(clientData.value.news_notification.toString()  && clientData.value.news_notification.toString()!=null && clientData.value.news_notification.toString()!=undefined && clientData.value.news_notification.toString()!=''){
              formData.append("news_notification", clientData.value.news_notification.toString());
            }
            if(clientData.value.reminder_notification.toString()  && clientData.value.reminder_notification.toString()!=null && clientData.value.reminder_notification.toString()!=undefined && clientData.value.reminder_notification.toString()!=''){
              formData.append("reminder_notification", clientData.value.reminder_notification.toString());
            }
            if(clientData.value.message_notification.toString()  && clientData.value.message_notification.toString()!=null && clientData.value.message_notification.toString()!=undefined && clientData.value.message_notification.toString()!=''){
              formData.append("message_notification", clientData.value.message_notification.toString());
            }

            if(clientData.value.timezone  && clientData.value.timezone!=null && clientData.value.timezone!=undefined && clientData.value.timezone!=''){
              formData.append("timezone", clientData.value.timezone);
            }
            // Отправляем запрос
            const response = await useBaseFetch("/cabinet/change-self-client/", {
               method: "PATCH",
               body: formData, // Используем FormData как тело запроса
               headers: {
                  Authorization: "Token " + store.token, // Авторизация
               },
            });
            console.log(response)
            if(response.name=='FetchError'){
              
              toast({
                  message: 'Данные не сохранились',
                  type: "is-error", // если збс - то is-success, если плохо то is-error
                  dismissible: true,
                  pauseOnHover: true,
                  duration: 13000,
                  position: "bottom-right",
                  className: "toast",
              });
            }else{
              toast({
                  message: 'Данные сохранились',
                  type: "is-success", // если збс - то is-success, если плохо то is-error
                  dismissible: true,
                  pauseOnHover: true,
                  duration: 13000,
                  position: "bottom-right",
                  className: "toast",
              });
            }
      
            return response; // Возвращаем ответ от сервера
         } catch (err) {
            console.error("Ошибка при обновлении данных психолога:", err);
            throw err; // Пробрасываем ошибку для обработки в вызывающем коде
         }
}


const sex = [
   { value: 'man', name: 'Мужской' },
   { value: 'woman', name: 'Женский' },
];

const age = [
   { value: '0-25', name: 'до 25 лет' },
   { value: '25-35', name: '25-35 лет' },
   { value: '35-45', name: '35-45 лет' },
   { value: '45-55', name: '45-55 лет' },
   { value: '55-100', name: 'от 55 лет' },
];

const schedule = ref([
   {
      name: "16 июля, вторник",
      slots: [
         {
            time: "13:00",
            available: true
         },
         {
            time: "14:00",
            available: false
         },
         {
            time: "15:00",
            available: false
         },
         {
            time: "16:00",
            available: true
         },
         {
            time: "17:00",
            available: false
         },
         {
            time: "18:00",
            available: true
         },
         {
            time: "19:00",
            available: false
         },
         {
            time: "20:00",
            available: true
         },
      ]
   },
   {
      name: "17 июля, среда",
      slots: [
         {
            time: "09:00",
            available: true
         },
         {
            time: "10:00",
            available: false
         },
         {
            time: "11:00",
            available: false
         },
         {
            time: "12:00",
            available: true
         },
         {
            time: "13:00",
            available: true
         },
         {
            time: "14:00",
            available: false
         },
         {
            time: "15:00",
            available: false
         },
         {
            time: "16:00",
            available: true
         },
         {
            time: "17:00",
            available: false
         },
         {
            time: "18:00",
            available: true
         },
         {
            time: "19:00",
            available: false
         },
         {
            time: "20:00",
            available: true
         },
         {
            time: "21:00",
            available: true
         },
      ]
   },
])
const showMoreEducation = ref(false)


const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 2);

const dayAfterTomorrow = new Date();
dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 7);
const emit = defineEmits(['updateFilters']);
const selectedFilters = ref({
   gender: null,
   age: null,
});

const updateFilter = async(type, value) => {
   selectedFilters.value[type] = value;

   if (type === 'age' && selectedFilters.value['age']) {
      const ageValue = selectedFilters.value[type];
      // Проверка на null перед split
      if (ageValue) {
         const [age_min, age_max] = ageValue.split('-');
         console.log(age_min, age_max);
         console.log(selectedFilters.value['gender']);
         
         response.value = await store.getPsychologists({ sex: selectedFilters.value['gender'], age_min, age_max });
      }
   } else {
      // Обрабатываем случай для gender
      const genderValue = selectedFilters.value['gender'];
      const ageValue = '0-100';
      console.log(ageValue);

      if (ageValue) {
         const [age_min, age_max] = ageValue.split('-');
         console.log(age_min, age_max);
         console.log(genderValue);
         
         response.value = await store.getPsychologists({ sex: genderValue, age_min, age_max });
      }
   }

   

    const response2 = await store.getSchedulePsychologist(
        list.value[current.value].id,
        tomorrow.toISOString().split('T')[0],
        dayAfterTomorrow.toISOString().split('T')[0]
    );

    if (response2 && response2.slots) {
        // Группируем слоты по датам
        const groupedSlots = response2.slots.reduce((acc, slot) => {
            const date = slot.datetime.split(" ")[0]; // Получаем дату
            if (!acc[date]) {
                acc[date] = {
                    name: `${date} (${slot.day_of_week})`,
                    slots: []
                };
            }
            acc[date].slots.push({
                time: slot.time,
                available: slot.status === "free"
            });
            return acc;
        }, {});

        // Преобразуем объект в массив и берем только первые 2 дня
        schedule.value = Object.values(groupedSlots).slice(0, 2);
    }
   console.log(response.value);
};

const pay = async () => {
   console.log(store.phone)
   const response = await useBaseFetch('/sales/payment-link', {
      method: "POST",
      body: {
         "customer_phone": store.phone,
         "title": currentPsycho.value.name,
         "object_id": currentPsycho.value.id,
         "price": "2000"
      }
   })
   if (response.success) {
      window.location.href = response.link;
   }
}
const exit = () =>{
  store.exitAccount()
}

</script>
<style scoped>

.wrapper{
  width: 100%;
}
main{
  transition: 1s;
}
.hide{
  display: none;
  opacity: 0;
}
</style>