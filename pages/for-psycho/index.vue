<template>
   <main class="main">
      <!-- Основная часть -->
      <div class="page">

         <!-- Присоединяйтесь к нашей команде психологов  -->
         <section class="top">
            <div class="container">
               <div class="top__inner">
                  <div class="top__first">
                     <h1 class="top__h1">Присоединяйтесь к нашей команде психологов</h1>
                     <div class="top__desc">
                        Мы продвигаем ваши услуги и освобождаем вам время на более важные дела: работу с клиентами,
                        образование и получение профессионального опыта.
                     </div>
                     <div class="btn__begincoop">Начать сотрудничество</div>
                  </div>
                  <div class="top__second">
                     <img src="/site/img/for-psychologists-top.svg" alt="Присоединяйтесь к нашей команде психологов">
                  </div>
               </div>
            </div>
         </section>

         <section class="body">

            <!-- комфортные условия для работы -->
            <div class="comfort">
               <div class="container">
                  <div class="comfort__inner">
                     <h2>комфортные условия для работы</h2>
                     <div class="comfort__list">
                        <div class="comfort__item" v-for="item in comfort" :key="item">
                           <div class="comfort__item-img">
                              <img :src="item.img" :alt="item.title" class="comfort__item-img__desk">
                              <img :src="item.img_mob" :alt="item.title" class="comfort__item-img__mob">
                           </div>
                           <div class="comfort__item-body">
                              <div class="comfort__item-title" v-html="item.title">
                              </div>
                              <div class="comfort__item-desk" v-html="item.desc"></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <SectionsShouldpsy />

            <div class="jointwork">
               <div class="container">
                  <div class="jointwork__inner">
                     <h2>Как будет строиться наша совместная работа</h2>
                     <div class="jointwork__body">
                        <div class="jointwork__first">
                           <div class="jointwork__item">
                              <div class="jointwork__item-text">
                                 <div class="jointwork__item__body">
                                    <div class="jointwork__item-title">Заполните анкету и после ее проверки пройдите
                                       интервью c нашим экспертом</div>
                                    <div class="jointwork__item-desc">Расскажите нам подробно о себе, своём образовании,
                                       опыте консультирования и методах работы, чтобы мы подбирали вам подходящих и
                                       интересных клиентов</div>
                                 </div>
                                 <div class="btn__begincoop">Начать сотрудничество</div>
                              </div>
                              <div class="jointwork__item-img">
                                 <img class="__desk" src="/site/img/jointwork__item_1.png" alt="Заполните анкету">
                                 <img class="__mob" src="/site/img/jointwork__item_1_mob.png" alt="Заполните анкету">
                              </div>
                           </div>
                        </div>
                        <div class="jointwork__second">
                           <div class="jointwork__second-couple">
                              <div class="jointwork__item">
                                 <div class="jointwork__item-text">
                                    <div class="jointwork__item__body">
                                       <div class="jointwork__item-title">Заполняете свой профиль специалиста</div>
                                       <div class="jointwork__item-desc">Перед тем, как начать предлагать Вам клиентов,
                                          Вам нужно подробно заполнить свой профиль специалиста: добавляете фото,
                                          рассказываете о себе и своём опыте. Каждый элемент профиля помогает клиенту
                                          лучше узнать
                                          Вас и сделать выбор. Это делает процесс подбора психотерапевта более точным
                                       </div>
                                    </div>
                                 </div>
                                 <div class="jointwork__item-img">
                                    <img class="__desk" src="/site/img/jointwork__item_2.png" alt="Заполните анкету">
                                    <img class="__mob" src="/site/img/jointwork__item_2_mob.png" alt="Заполните анкету">
                                 </div>
                              </div>
                              <div class="jointwork__item">
                                 <div class="jointwork__item-text">
                                    <div class="jointwork__item__body">
                                       <div class="jointwork__item-title">Нам приходит заявка от клиента на работу с
                                          Вами</div>
                                       <div class="jointwork__item-desc">Вас выберут через каталог специалистов или при
                                          автоподборе, когда клиент заполняет анкету выбирая темы, которые его
                                          беспокоят. Алгоритм предлагает ему трёх подходящих терапевтов . После того,
                                          как клиент выбрал Вас платформа создаст конфидициальный чат для работы с
                                          клиентом.</div>
                                    </div>
                                 </div>
                                 <div class="jointwork__item-img">
                                    <img class="__desk" src="/site/img/jointwork__item_3.png" alt="Заполните анкету">
                                    <img class="__mob" src="/site/img/jointwork__item_3_mob.png" alt="Заполните анкету">
                                 </div>
                              </div>
                           </div>
                           <div class="jointwork__second-full">
                              <div class="jointwork__item">
                                 <div class="jointwork__item-text">
                                    <div class="jointwork__item__body">
                                       <div class="jointwork__item-title">Вы договариваетесь с клиентом о первой встрече
                                       </div>
                                       <div class="jointwork__item-desc">Мы рекомендуем Вам начинать общение первыми.
                                          Наши специалисты заранее уточняют организационные вопросы и имеют готовый
                                          документ с условиями работы, который присылают клиенту перед встречей.
                                          Присылать контракт не обязательно - все зависит от Вашего подхода к
                                          коммуникации.</div>
                                    </div>
                                 </div>
                                 <div class="jointwork__item-img">
                                    <img class="__desk" src="/site/img/jointwork__item_4.png" alt="Заполните анкету">
                                    <img class="__mob" src="/site/img/jointwork__item_4_mob.png" alt="Заполните анкету">
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>


         </section>


      </div>
   </main>
</template>
<script setup>
useHead({
   link: [
      {
         rel: "stylesheet",
         href: "/site/css/for-psychologists.css",
      },
   ],
   title: "Для психологов"
})


const comfort = ref([
   {
      img: '/site/img/comfort__item_1.png',
      img_mob: '/site/img/comfort__item_1_mob.png',
      title: 'Приводим клиентов, готовых к работе',
      desc: 'Мы рекламируем платформу, пишем статьи со ссылками на ПозиТолк, проводим лекции и ведем социальные сети. Так, у нас больше подготовленных к терапии клиентов, а значит - и у Вас.'
   },
   {
      img: '/site/img/comfort__item_2.png',
      img_mob: '/site/img/comfort__item_2_mob.png',
      title: 'Подбираем клиентов по специализации',
      desc: 'Люди в поисках психолога регистрируются на сайте и проходят тест. Тест уточняет запрос и предлагает подходящих психологов. Так к Вам попадают клиенты с запросами под Вашу специализацию.'
   },
   {
      img: '/site/img/comfort__item_3.png',
      img_mob: '/site/img/comfort__item_1_mob.png',
      title: 'Гарантируем оплату сессии',
      desc: 'Клиенты оплачивают сессии по банковской карте из России и из-за рубежа, деньги списываются за 24 часа до начала сессии, даже если клиент отменяет в последний момент.'
   },
   {
      img: '/site/img/comfort__item_4.png',
      img_mob: '/site/img/comfort__item_2_mob.png',
      title: 'Удобный личный кабинет',
      desc: 'Вы можете записывать клиентов на сессии, смотреть своё расписание, просмотривать отчёты, видеть обратную связь от клиента после каждой сессии.'
   },
   {
      img: '/site/img/comfort__item_5.png',
      img_mob: '/site/img/comfort__item_1_mob.png',
      title: 'Уведомляем об изменениях',
      desc: 'Клиенты выбирают время для записи в календаре психолога и подтверждают запись, а психолог получает уведомление о новой записи, переносах и отменах записей по почте.'
   },
   {
      img: '/site/img/comfort__item_6.png',
      img_mob: '/site/img/comfort__item_2_mob.png',
      title: 'Повышаем доверие к профессии',
      desc: 'Мы следим за удовлетворенностью клиентов ПозиТолк на основе специальной методики - так мы уверены в качестве подбора специалистов.'
   },
])

</script>