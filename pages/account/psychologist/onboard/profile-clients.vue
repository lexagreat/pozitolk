<template>

<div class="wrapper">
        <nav class="nav">
            <div class="nav__inner">
                <a href="#" class="nav__logo">
                    <img src="/site/img/Logo.svg" alt="Позитолк">
                </a>
                                <div class="nav__menu">
                    <ul class="nav__menu-first">
                        <li>
                            <a style="cursor: pointer;" @click="navigateTo('/account/psychologist/onboard/calendar')"><span class="icon psy-schedule"></span>Расписание</a>
                        </li>
                        <li>
                            <a href="#"><span class="icon psy-chats"></span>Чаты</a>
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
                            <a href="#"><span class="icon help"></span>Помощь</a>
                        </li>
                        <li class="__desk active">
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
        <main class="main">
<div class="dashboard">

    <div class="profile">
        <div class="profile__ethical-btn-mob">
            <div class="profile__ethical">Прочитать этический кодекс</div>
        </div>
        <div class="profile__body">
            <div class="profile__header">
                <div class="profile__title">Ваш личный профиль</div>
                <div class="profile__btns">
                    <div class="profile__ethical-btn">Этический кодекс</div>
                    <div class="profile__save-btn" @click="send">Сохранить изменения</div>
                    <div class="profile__exit-btn" @click="exit">
                        <div class="icon-exit-btn"></div>
                    </div>
                </div>
            </div>
            <div class="profile__tabs">
                <div class="profile__tabs-ctrl">
                    <div class="tab-ctrl active" data-tab-ctrl="1">Личные данные</div>
                    <div class="tab-ctrl" data-tab-ctrl="2">Контактные данные</div>
                    <div class="tab-ctrl" data-tab-ctrl="3">Клиенты</div>
                    <div class="tab-ctrl" data-tab-ctrl="4">Специализация</div>
                    <div class="tab-ctrl" data-tab-ctrl="5">Образование</div>
                    <div class="tab-ctrl" data-tab-ctrl="6">Договор</div>
                </div>
                <div class="profile__tabs-body">

                    <!-- Личные данные -->
                    <div class="tab-body active" data-tab-body="1">
                        <div class="tab-personal">

                            <div class="profile__second">
                              
  <div class="profcards">
    <div class="profcards-title">Фотография</div>
    <div class="profcards__inner">
      <div class="profcards__item">
        <div class="profcards__item-header">
          <!-- Отображение фотографии -->
          <div class="profcards__item-img">
            <img :src="photoPreview" alt="фото" v-if="photoPreview" />
            <div v-else class="placeholder">Фото отсутствует</div>
          </div>
          <!-- Кнопка "Заменить" -->
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

        <!-- Поля для ввода имени и даты рождения -->
        <div class="profcards__item-inputs">
          <label class="profgeneral__input">
            <div class="profgeneral__input-label">ФИО</div>
            <input type="text" name="profname" v-model="psychologistData.name" />
          </label>
          <label class="profgeneral__input">
            <div class="profgeneral__input-label">Дата рождения</div>
            <div class="date-container">
              <input
                type="date"
                name="birthdate"
                v-model="psychologistData.date_of_birth"
              />
            </div>
          </label>
        </div>
      </div>
    </div>
  </div>
                                <div class="profgeneral">
                                    <label class="profgeneral__input">
                                        <div class="profgeneral__input-label">Пол</div>
                                        <div class="select-container">
                                            <select name="sex" v-model="psychologistData.sex">
                                                <option value="man">Мужской</option>
                                                <option value="woman">Женский</option>
                                            </select>
                                        </div>
                                    </label>

                                    <label class="profgeneral__input">
                                        <div class="profgeneral__input-label">Язык</div>
                                        <div class="select-container">
                                            <select name="language" v-model="psychologistData.language">
                                                <option value="Русский, Английский">Русский, Английский</option>
                                                <option value="Русский">Русский</option>
                                                <option value="Английский">Английский</option>
                                            </select>
                                        </div>
                                    </label>

                                    <label class="profgeneral__input">
                                        <div class="profgeneral__input-label">О себе</div>
                                        <div class="textarea-container">
                                            <textarea name="about" v-model="psychologistData.description"></textarea>
                                        </div>
                                    </label>

                                </div>
                                <div class="profile__btn-save" @click="send">Сохранить</div>
                            </div>

                        </div>
                    </div>

                    <!-- Контактные данные -->
                    <div class="tab-body" data-tab-body="2">
                        <div class="tab-contact">

                            <div class="profile__second">
                                <div class="profgeneral">
                                    <label class="profgeneral__input">
                                        <div class="profgeneral__input-label">Телефон</div>
                                        <input type="text" name="phone" :value="psychologistData.phone" disabled>
                                        <div class="profgeneral__input-info">Для смены номера напишите на электронную почту <a href="mailto:pozitalk@mail.ru">pozitalk@mail.ru</a></div>
                                        <div class="subscribe">
                                            <label class="subscribe__item">
                                                <input type="checkbox" name="subscribe-phone" v-model="psychologistData.notifications_phone">
                                                <div class="subscribe__item-checkbox"></div>
                                                <div class="subscribe__item-text">Получать сообщения от клиентов на этот номер</div>
                                            </label>
                                        </div>
                                    </label>
                                    <label class="profgeneral__input">
                                        <div class="profgeneral__input-label">Электроная почта</div>
                                        <input type="text" name="email" v-model="psychologistData.email">
                                        <div class="subscribe">
                                            <label class="subscribe__item">
                                                <input type="checkbox" name="subscribe-mail" v-model="psychologistData.notifications_email">
                                                <div class="subscribe__item-checkbox"></div>
                                                <div class="subscribe__item-text">Получать сообщения от клиентов на эту почту</div>
                                            </label>
                                        </div>
                                    </label>
                                </div>
                                <div class="profile__btn-save" @click="send">Сохранить</div>
                            </div>

                        </div>
                    </div>

                    <!-- Клиенты -->
                    <div class="tab-body" data-tab-body="3">
                        <div class="tab-clients">

                            <div class="profile__second">
                                <div class="profgeneral">
                                    <label class="profgeneral__input">
                                        <div class="profgeneral__input-label">Часовой пояс</div>
                                        <div class="select-container">
                                            <select name="timezone" v-model="psychologistData.timezone">
                                              
  <option v-for="tz in timezones" :key="tz" :value="tz">{{ tz }} ({{ getGMTOffset(tz) }})</option>

                                            </select>
                                        </div>
                                    </label>
                                    <label class="profgeneral__input">
                                        <div class="profgeneral__input-label">Минимальное количество часов для записи</div>
                                        <div class="select-container">
                                            <select name="timezone" v-model="psychologistData.session_duration"
    @click="isUserChanging = true">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </select>
                                        </div>
                                    </label>
                                    
  
                                   
                                    <label class="profgeneral__input">
    <div class="profgeneral__input-label">Свободные слоты для записи клиентов</div>
    <div class="calendar-container">
      <div id="reschedule_time">
        <div class="reschedule_time__calendar">
          <!-- Дни недели -->
          <div class="reschedule_time__calendar-first">
            <div class="reschedule_time__calendar-date">
              <div
                v-for="(day, index) in daysOfWeek"
                :key="index"
                class="calendar-date__item"
                :class="{ active: selectedDay === index }"
                @click="selectDay(index)"
              >
                <div class="calendar-date__item-day">{{ day }}</div>
              </div>
            </div>
          </div>
          <!-- Время -->
          <div class="reschedule_time__calendar-second">
            <div class="reschedule_time-label">Время</div>
            <div class="reschedule_time__calendar-table">
              <div
                v-for="timeSlot in timeSlots"
                :key="timeSlot"
                class="calendar-table__cell"
                :class="{
                  'stat-1': isSlotSelected(timeSlot), // Занятые слоты
                  'stat-2': isSlotBooked(timeSlot), // Выбранные слоты
                  'stat-free': isSlotFree(timeSlot), // Свободные слоты
                }"
                @click="toggleSlot(timeSlot)"
              >
                {{ timeSlot }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </label>
                                </div>
                                <div class="profile__btn-save" @click="send">Сохранить</div>
                            </div>

                        </div>
                    </div>

                    <!-- Специализация -->
                    <div class="tab-body" data-tab-body="4">
                        <div class="tab-specialty">
                            <div class="profile__second">
                                <div class="profgeneral">
                                    <div class="profgeneral__input">
                                        <div class="profgeneral__input-label">Опишите методы работы</div>
                                        <textarea name="working-method" placeholder="Опишите методы работы" v-model="psychologistData.working_methods"></textarea>
                                    </div>

                                    <div class="profgeneral__input">
                                        <div class="profgeneral__input-label">Возраст клиентов</div>
                                        <div class="radio-container">
                                            <label class="radio-container__label">
                                              
                                                <input
                                                  type="radio"
                                                  name="clients-age"
                                                  value="16+"
                                                  v-model="psychologistData.client_age"
                                                />
                                                <div class="radio-container__input">16+</div>
                                            </label>
                                            <label class="radio-container__label">
                                              <input
                                                type="radio"
                                                name="clients-age"
                                                value="18+"
                                                v-model="psychologistData.client_age"
                                              />  
                                                <div class="radio-container__input">18+</div>
                                            </label>
                                        </div>
                                        <div class="profgeneral__input-info">Закон разрешает психологические консультации с 16 лет</div>
                                    </div>

                                    <div class="profgeneral__input">
                                        <div class="profgeneral__input-label">Опыт работы с поиском идентичности</div>
                                        <div class="radio-container">
                                            <label class="radio-container__label">
                                              <input
                                                type="radio"
                                                name="identity-search"
                                                value="Да"
                                                v-model="experienceWithIdentitySearch"
                                              />
                                                <div class="radio-container__input">Да</div>
                                            </label>
                                            <label class="radio-container__label">
                                              <input
                                                type="radio"
                                                name="identity-search"
                                                value="Нет"
                                                v-model="experienceWithIdentitySearch"
                                              />
                                                <div class="radio-container__input">Нет</div>
                                            </label>
                                        </div>
                                        <div class="profgeneral__input-info">Используем для ручного подбора по запросу клиентов<br> со сложностью с самоидентификацией и поиском идентичности </div>
                                    </div>

                                    <div class="profgeneral__input">
                                        <div class="profgeneral__input-label">Работа с парами</div>
                                        <div class="radio-container">
                                            <label class="radio-container__label">
                                                
                                                <input
                                                  type="radio"
                                                  name="couple-work"
                                                  value="Да"
                                                  v-model="coupleWork"
                                                />
                                                <div class="radio-container__input">Да</div>
                                            </label>
                                            <label class="radio-container__label">
                                              <input
                                                type="radio"
                                                name="couple-work"
                                                value="Нет"
                                                v-model="coupleWork"
                                              />
                                                <div class="radio-container__input">Нет</div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div style="display: none;" class="profile__btn-add">Добавить</div>
                                <div class="profile__btn-save" @click="send">Сохранить</div>
                            </div>
                        </div>
                    </div>

                    <!-- Образование -->
                    <div class="tab-body" data-tab-body="5">
    <div class="tab-education">
      <div class="profile__second">
        <div class="education">
          <!-- Динамический список образовательных записей -->
          <div class="education__item" v-for="(edu, index) in psychologistData.education_psychologist" :key="index">
            <div class="education__place">
              <div class="education__label">Образование</div>
              <div class="education__input">
                <input
                  type="text"
                  v-model="edu.text"
                  :name="`education-place-${index}`"
                  placeholder="Введите место получения образования"
                />
              </div>
            </div>
            <div class="education__year">
              <div class="education__label">Год окончания</div>
              <div class="education__input">
                <input
                  type="text"
                  v-model="edu.year"
                  :name="`education-year-${index}`"
                  placeholder="Введите год"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- Кнопка "Добавить" -->
        <div class="profile__btn-add" @click="addEducation">Добавить</div>
        <!-- Кнопка "Сохранить" -->
        <div class="profile__btn-save"  @click="send">Сохранить</div>
      </div>
    </div>
  </div>

                    <!-- Договор -->
                    <div class="tab-body" data-tab-body="6">
                        <div class="tab-contract">
                            <div class="contract">
                                <div class="contract__list">
                                                                            <div class="contract__item">
                                            <div class="contract__label">Имя</div>
                                            <div class="contract__value">Константин</div>
                                        </div>
                                                                            <div class="contract__item">
                                            <div class="contract__label">Фамилия</div>
                                            <div class="contract__value">Константинопольский</div>
                                        </div>
                                                                            <div class="contract__item">
                                            <div class="contract__label">Налоговый статус</div>
                                            <div class="contract__value">Самозанятый</div>
                                        </div>
                                                                            <div class="contract__item">
                                            <div class="contract__label">Статус</div>
                                            <div class="contract__value">Подписан</div>
                                        </div>
                                                                            <div class="contract__item">
                                            <div class="contract__label">Гражданство</div>
                                            <div class="contract__value">РФ</div>
                                        </div>
                                                                            <div class="contract__item">
                                            <div class="contract__label">Адрес</div>
                                            <div class="contract__value">Адрес</div>
                                        </div>
                                                                            <div class="contract__item">
                                            <div class="contract__label">ИНН</div>
                                            <div class="contract__value">0000000000000000</div>
                                        </div>
                                                                    </div>
                                <div class="contract__btns">
                                    <div class="contract__btns-lbl">Скачать документы:</div>
                                    <div class="contract__btns-wrp">
                                        <div class="contract__btns-wrp-first">
                                            <div class="contract__btn-passport">
                                                <span class="passport-btn-icon"></span><span>Паспорт</span>
                                            </div>
                                            <div class="contract__btn-registration">
                                                <span>Регистрация</span>
                                            </div>
                                        </div>
                                        <div class="contract__btns-wrp-second">
                                            <div class="contract__btn-contract">
                                                <span class="contract-btn-icon"></span><span>Договор</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

</div>

<div class="profile-popup">
    <div class="profile-popup__body">
        <div class="profile-popup__close"></div>
        <div class="profile-popup__text">
            <h2>Этический кодекс сообщества психологов сервиса «ПозиТолк»</h2>
            <br>
            <p>
                Данный Этический кодекс сообщества психологов сервиса «ПозиТолк» создан кураторами сервиса и включает в себя основные положения и ценности, которые, по нашему мнению, являются общими для психологов, работающих в методе Позитивной и транскультуральной психотерапии, а также других методах и направлениях.
            </p>
            <br>
            <p>
                Его целью служит определение этических принципов и правил работы психологов на платформе «ПозиТолк», а именно:
            </p>
            <ul>
                <li>профессиональная компетентность и глубокое понимание психодинамических процессов;</li>
                <li>признание сложности и уникальности человеческой психики;</li>
                <li>отсутствие предвзятости и осуждения в профессиональном поле;</li>
                <li>строгое соблюдение принципа конфиденциальности;</li>
                <li>построение отношений на доверии и информированности клиентов о правилах и особенности работы;</li>
                <li>а также об ограничениях, которые могут возникнуть в процессе терапии.</li>
            </ul>
            <p>
                Этический кодекс «ПозиТолк» создает общую основу для разрешения ситуаций этических противоречий. Знание психологами «ПозиТолк» общих положений Этического кодекса должно помогать им самостоятельно определять, какие его положения применимы в той или иной ситуации.
            </p>
            <br>
            <p>
                В случае возникновения сложностей психолог должен обратиться за супервизионной поддержкой или поддержкой сообщества.
            </p>
            <br>
            <h3>Основные положения</h3>
            <br>
            <h4>Компетентность</h4>
            <ul>
                <li>Психолог несет ответственность за качество своего образования. В процессе построения профессиональных отношений с клиентом психолог проводит диагностику и последующую работу в рамках той модели, в которой он компетентен, и соизмеряет свои знания и навыки с запросом клиента;</li>
                <li>Психолог осознает важность повышения уровня своей профессиональной компетентности: находиться в процессе непрерывного развития, совершенствования практических навыков, обогащении своего кругозора и исследовании нового;</li>
                <li>Психолог понимает важность проработки своих внутренних конфликтов и наличие личной терапии;</li>
                <li>Жизненные обстоятельства или внутренние процессы, которые влияют на специалиста и его способность оказывать профессиональную психологическую помощь, должны быть учтены, осмыслены и вынесены на обсуждение с супервизором.</li>
            </ul>
            <br>
            <h4>Профессиональная позиция</h4>
            <p>
                Недопустима дискриминация клиента по какому-либо признаку (возрасту, полу, гендеру, состоянию здоровья, национальности, вероисповеданию, убеждениям, образованию, экономическому или правовому статусу и т. д.). Психолог признает равноценность каждой личности и уважает уникальность каждого клиента независимо от их различий.
            </p>
            <p>
                Психолог должен осознавать свою систему ценностей, взглядов и убеждений, но в профессиональном поле сохранять нейтральность со взглядами и убеждениями клиента.
            </p>
            <p>
                Психолог руководствуется в своей работе положениями данного этического кодекса и положениями этического кодекса профессионального сообщества, к которому он принадлежит.
            </p>
            <br>
            <h4>Конфиденциальность</h4>
            <p>
                В начале работы психолог информирует клиента о конфиденциальности. Это означает, что никакая информация о клиенте не используется вне профессионального поля. Психолог информирует клиента о возможности обсуждать работу на супервизиях. Использование материалов случая в образовательных или научных целях возможно только с согласия клиента - психолог предупреждает клиента о возможности отказаться. Аудио и видео запись сессий не может осуществляться без согласия клиента.
            </p>
            <p>
                При представлении случая клиента в профессиональном пространстве психолог заботится об анонимности клиента, изменяя существенные данные о его личности.
            </p>
            <br>
            <h4>Отношения с клиентом</h4>
            <p>
                В процессе работы, а также после ее завершения, не допускается злоупотребление отношениями с клиентом. Психолог не должен поддерживать или инициировать какие-либо отношения с клиентом, кроме профессиональных, в рамках заранее оговоренного сеттинга.
            </p>
            <p>
                Не допускается иметь приятельские, дружеские, деловые, сексуальные и прочие отношения вне зависимости от того завершена работа или продолжается. Так же стоит с большой осторожностью относиться к действиям или словам, которые могут трактоваться как попытки выйти из профессиональной рамки и перевести эти отношения в иную плоскость.
            </p>
            <p>
                Психолог информирует клиента о том, как будет организовано их взаимодействие в случае пересечения в профессиональном или непрофессиональном поле.
                Если требуется дополнительная консультация с врачом (в том числе, психиатром), то это так же должно открыто обсуждаться в процессе работы.
            </p>
            <br>
            <h4>Информированное согласие</h4>
            <p>
                Профессиональные отношения основаны на доверии и информировании клиента о правилах и особенностях работы. Также необходимо информирование об ограничениях, которые могут возникнуть в процессе работы.
            </p>
            <p>
                Психолог информирует клиента о том, как и по каким правилам происходит работа, а также об особенностях метода, в рамках которого практикует. Так же, по запросу клиента, психолог должен предоставить клиенту информацию о своем образовании, опыте и квалификации.
            </p>
            <p>
                Психолог информирует клиента об особенностях сеттинга: продолжительность сессии, условия завершения, график сессий и условия оплаты. О любых изменениях в сеттинге психолог информирует клиента заранее (не менее, чем за 1 месяц).
            </p>
            <br>
            <p>
                📌 если вы столкнулись с тем, что на ваш взгляд нарушает этику - вы можете обратиться в наш этический комитет или в этический комитет сообщества психолога, с чьим нарушением вы встретились. Контакты этических комитетов находятся в открытом доступе, а также мы можем предоставить их по запросу.
            </p>
        </div>
    </div>
    <div class="profile-popup__layer"></div>
</div>

</main>
</div>

</template>
<script setup>
import { useClientStore } from '~/stores/client/store';
import { toast } from "bulma-toast";
 useHead({
    link: [
       {
          rel: "stylesheet",
          href: "/client/css/main-2.css",
       },
    ],
 })
 
 const store = useClientStore()
 const psychologistData = ref({
  age:18,
  client_age:'',
  date_of_birth: '',
  description: '',
  education_psychologist:[],
  email: '',
  experience: 0,
  experience_with_identity_search:'',
  couple_therapy:'',
  id:0,
  label:'',
  name: '',
  notifications_email:'',
  notifications_phone:'',
  photo: '',
  price: 0,
  psycho_topic:{0:{id:0,name:""}},
  rating:'',
  sex:'man'
});


const timezones = Intl.supportedValuesOf("timeZone");

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

// Дни недели
const daysOfWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

// Временные слоты
const timeSlots = [
  '0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00',
  '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00',
  '21:00', '22:00', '23:00',
];
const selectedDay = ref(0);
const backendResponse = ref({
  slots: [],
  session_duration: 1,
});
const userSelectedSlots = ref([]);
const isUserChanging = ref(false);



// Выбранные слоты (объединение данных с бэка и пользовательских)
const selectedSlots = computed(() => [
  // ...backendResponse.value.slots.filter((slot) => slot.status === 'busy'),
  ...userSelectedSlots.value,
]);

// Выбор дня
function selectDay(dayIndex) {
  selectedDay.value = dayIndex;
}

// Проверка, свободен ли слот (получен с бэка)
function isSlotFree(time) {
  return backendResponse.value.slots.some(
    (slot) =>
      slot.day_of_week === selectedDay.value &&
      slot.time === formatTime(time) &&
      slot.status === 'free'
  );
}

// Проверка, забронирован ли слот (получен с бэка)
function isSlotBooked(time) {
  return backendResponse.value.slots.some(
    (slot) => slot.day_of_week === selectedDay.value && slot.time === formatTime(time) && slot.status == "busy"
  );
}


// Проверка, выбран ли слот пользователем
function isSlotSelected(time) {
  return userSelectedSlots.value.some(
    (slot) => slot.day_of_week === selectedDay.value && slot.time === formatTime(time)
  );
}

// Добавление/удаление слотов в зависимости от session_duration
function toggleSlot(time) {
  const formattedTime = formatTime(time);
  const sessionDuration = psychologistData.value.session_duration;

  // Проверяем, выбран ли уже слот
  const isSelected = isSlotSelected(formattedTime);

  if (isSelected) {
    // Если слот уже выбран, удаляем его и следующие за ним слоты
    const slotsToRemove = [];
    let currentTime = formattedTime;

    for (let i = 0; i < sessionDuration; i++) {
      // Проверяем, есть ли слот в userSelectedSlots
      const slotIndex = userSelectedSlots.value.findIndex(
        (slot) => slot.day_of_week === selectedDay.value && slot.time === currentTime
      );

      if (slotIndex === -1) {
        
   toast({
            message: 'Недостаточно слотов для удаления.',
            type: "is-error", // если збс - то is-success, если плохо то is-error
            dismissible: true,
            pauseOnHover: true,
            duration: 13000,
            position: "bottom-right",
            className: "toast",
         });
        return;
      }

      // Добавляем слот в список для удаления
      slotsToRemove.push(currentTime);

      // Переходим к следующему слоту (увеличиваем время на 1 час)
      const [hour] = currentTime.split(':');
      const nextHour = (parseInt(hour, 10) + 1) % 24; // Переход на следующий час (с учетом 24-часового формата)
      currentTime = `${nextHour.toString().padStart(2, '0')}:00`;
    }

    // Удаляем слоты из userSelectedSlots
    userSelectedSlots.value = userSelectedSlots.value.filter(
      (slot) => !slotsToRemove.includes(slot.time)
    );
    console.log('Слоты удалены:'+ slotsToRemove);
    
  } else {
    // Если слот не выбран, добавляем его и следующие за ним слоты
    const slotsToAdd = [];
    let currentTime = formattedTime;

    for (let i = 0; i < sessionDuration; i++) {
      const slotIndex = userSelectedSlots.value.findIndex(
        (slot) => slot.day_of_week === selectedDay.value && slot.time === currentTime
      );
      console.log(sessionDuration);
      // Проверяем, свободен ли текущий слот
      if (slotIndex != -1) {
   toast({
            message: 'Слот занят или недоступен:'+ currentTime,
            type: "is-error", // если збс - то is-success, если плохо то is-error
            dismissible: true,
            pauseOnHover: true,
            duration: 13000,
            position: "bottom-right",
            className: "toast",
         });
        return;
      }

      // Проверяем, не выбран ли уже слот
      if (isSlotSelected(currentTime)) {
   toast({
            message: 'Слот уже выбран:'+ currentTime,
            type: "is-error", // если збс - то is-success, если плохо то is-error
            dismissible: true,
            pauseOnHover: true,
            duration: 13000,
            position: "bottom-right",
            className: "toast",
         });
        return;
      }

      // Добавляем слот в список для добавления
      slotsToAdd.push({
        day_of_week: selectedDay.value,
        time: currentTime,
      });

      // Переходим к следующему слоту (увеличиваем время на 1 час)
      const [hour] = currentTime.split(':');
      const nextHour = (parseInt(hour, 10) + 1) % 24; // Переход на следующий час (с учетом 24-часового формата)
      currentTime = `${nextHour.toString().padStart(2, '0')}:00`;
    }

    // Добавляем слоты в userSelectedSlots
    userSelectedSlots.value.push(...slotsToAdd);
    console.log('Слоты добавлены:', slotsToAdd);
  }
}

// Форматирование времени в "HH:MM"
function formatTime(time) {
  const [hour] = time.split(':');
  return `${hour.padStart(2, '0')}:00`;
}



watch(
  () => psychologistData.value.session_duration,
  (newDuration, oldDuration) => {
    if (newDuration !== oldDuration && isUserChanging.value) {
      userSelectedSlots.value = [];
      console.log('Длительность изменена пользователем. Очищены выбранные слоты.');
      isUserChanging.value = false; // Сбрасываем флаг
    }
  }
);

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
    // Сохраняем файл в psychologistData
    psychologistData.value.photo = file;

    // Создаем превью фотографии для отображения
    const reader = new FileReader();
    reader.onload = (e) => {
      photoPreview.value = e.target.result; // Сохраняем Data URL для превью
    };
    reader.readAsDataURL(file);
  }
}

const experienceWithIdentitySearch = computed({
  get: () => psychologistData.value.experience_with_identity_search ? "Да" : "Нет",
  set: (value) => {
    psychologistData.value.experience_with_identity_search = value === "Да";
  },
});
const coupleWork = computed({
  get: () => psychologistData.value.couple_therapy ? "Да" : "Нет",
  set: (value) => {
    psychologistData.value.couple_therapy = value === "Да";
  },
});
function addEducation() {
  psychologistData.value.education_psychologist.push({ text: '', year: '' });
}
function cleanEducationData() {
  psychologistData.value.education_psychologist = psychologistData.value.education_psychologist.filter(
    (edu) => String(edu.text).trim() !== '' && String(edu.year).trim() !== ''
  );
}
const send = async() =>{
  console.log("Выбранные слоты:", selectedSlots.value);
  cleanEducationData();
  store.sendMySchedule(selectedSlots.value)
         try {
            // Создаем объект FormData
            const formData = new FormData();
      
            // Добавляем текстовые поля
            // formData.append("psycho_topics", JSON.stringify(psychologistData.value.psycho_topics));
            formData.append("education_psychologist_write", JSON.stringify(psychologistData.value.education_psychologist));
            //formData.append("phone_number", psychologistData.value.phone_number);
            formData.append("name", psychologistData.value.name);
            formData.append("working_methods", psychologistData.value.working_methods);
            formData.append("age", psychologistData.value.age.toString());
            // formData.append("label", psychologistData.value.label);
            formData.append("timezone", psychologistData.value.timezone);
            formData.append("session_duration", psychologistData.value.session_duration);
            // formData.append("experience", psychologistData.value.experience.toString());
            console.log(psychologistData.value.description)
            console.log(psychologistData.value.description.length)
            console.log(typeof psychologistData.value.description)
            console.log(psychologistData.value.description!='')
            if(psychologistData.value.description && psychologistData.value.description!=null && psychologistData.value.description!=undefined && psychologistData.value.description!=''){
              formData.append("description", psychologistData.value.description);
            }
            formData.append("sex", psychologistData.value.sex);
            formData.append("price", psychologistData.value.price.toString());
            if(psychologistData.value.email  && psychologistData.value.email!=null && psychologistData.value.email!=undefined && psychologistData.value.description!=''){
              formData.append("email", psychologistData.value.email);
            }
            formData.append("notifications_phone", psychologistData.value.notifications_phone.toString());
            formData.append("notifications_email", psychologistData.value.notifications_email.toString());
            if(psychologistData.value.date_of_birth && psychologistData.value.date_of_birth!=null && psychologistData.value.date_of_birth!=undefined && psychologistData.value.description!=''){
              formData.append("date_of_birth", psychologistData.value.date_of_birth);
            }
            formData.append("language", psychologistData.value.language);
            formData.append("client_age", psychologistData.value.client_age);
            formData.append("experience_with_identity_search", psychologistData.value.experience_with_identity_search.toString());
            formData.append("couple_therapy", psychologistData.value.couple_therapy.toString());
      
            // Добавляем файл photo, если он есть
            if (psychologistData.value.photo instanceof File) {
               formData.append("photo", psychologistData.value.photo);
            }
      
            // Отправляем запрос
            const response = await useBaseFetch("/cabinet/change-self-psychologist/", {
               method: "PATCH",
               body: formData, // Используем FormData как тело запроса
               headers: {
                  Authorization: "Token " + store.token, // Авторизация
               },
            });
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
store.getSelfPsychologist()
  .then(item => {
    psychologistData.value = item;
    console.log(psychologistData.value);
    console.log(psychologistData.value.description);
  console.log(psychologistData.value.photo);
  photoPreview.value = psychologistData.value.photo
  console.log(photoPreview.value);
  })
  .catch(error => {
    console.error('Ошибка при получении данных психолога:', error);
  });
store.getMySchedulePsychologist()
  .then(item => {
    console.log(item);
    // Очищаем предыдущие данные
    backendResponse.value.slots = [];
    userSelectedSlots.value = [];
    //backendResponse.value = item;
    item.slots.forEach(slot => {
      if (slot.status === 'busy') {
        backendResponse.value.slots.push(slot);
      }
    });
    
    // Добавляем свободные слоты в userSelectedSlots с проверкой на дубликаты
    item.slots.forEach(slot => {
      if (slot.status === 'free') {
        // Проверяем, был ли такой слот уже добавлен
        const isSlotAlreadyAdded = userSelectedSlots.value.some(
          (existingSlot) =>
            existingSlot.day_of_week === slot.day_of_week &&
            existingSlot.time === slot.time
        );

        // Если слот не был добавлен, добавляем его
        if (!isSlotAlreadyAdded) {
          userSelectedSlots.value.push({
            day_of_week: slot.day_of_week,
            time: slot.time,
            slot_id: slot.slot_id,
          });
        }
      }
    });
    console.log(backendResponse.value.slots);
    console.log(userSelectedSlots.value);
  })
  .catch(error => {
    console.error('Ошибка при получении данных психолога:', error);
  });
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

          // // START PopUp общее 
          // $('.popup__layer').on('click', function () {
          //     $('.popup').removeClass('active');
          //     $('html').removeClass('hidden');
          // });
          // $('.popup__close').on('click', function () {
          //     $('.popup').removeClass('active');
          //     $('html').removeClass('hidden');
          // });
          // // END PopUp общее 


          // // START  PopUp при клике по доступному времени в календаре
          // $('.table__cell.available').on('click', function () {
          //     $('.popup.available_time').addClass('active');
          //     // $('html').addClass('hidden');
          // });
          // // END  PopUp при клике по доступному времени в календаре

          // // START  PopUp при клике по доступному времени в календаре
          // $(".table__cell.chosen").on("click", function (e) {
          //     e.stopPropagation();
          //     var popup = $(".popup_2.chosen_time");
          //     $(this).append(popup);
          //     popup.addClass("active");
          // });
          // $(document).on("click", function () {
          //     $(".popup_2.chosen_time").removeClass("active");
          // });
          // $(".popup_2.chosen_time").on("click", function (e) {
          //     e.stopPropagation();
          // });
          // // END  PopUp при клике по доступному времени в календаре

          // // START "PopUp при клике по кнопке "Перенести""
          // $('.chosen_time__btn-switch').on('click', function () {
          //     $('.popup.reschedule_time').addClass('active');
          //     // $('html').addClass('hidden');
          // });
          // $('.calendar-date__item').on('click', function () {
          //     $('.calendar-date__item').removeClass('active');
          //     $(this).addClass('active');
          // });
          // // END "PopUp при клике по кнопке "Перенести""

          // // START "PopUp при клике по кнопке "Отменить""
          // $('.chosen_time__btn-delete').on('click', function () {
          //     $('.popup.delete_time').addClass('active');
          //     // $('html').addClass('hidden');
          // });
          // END "PopUp при клике по кнопке "Отменить""
        });
    }
 )
 
const exit = () =>{
  store.exitAccount()
}
</script>
<style scoped>

.wrapper{
  width: 100%;
}

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