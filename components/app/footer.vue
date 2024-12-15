<template>
   <footer class="footer">
      <div class="container">
         <div class="footer__inner">
            <div class="footer__first">
               <div class="footer__logo">
                  <NuxtLink to="/"><img src="/site/img/Logo.svg" alt="Позитолк"></NuxtLink>
                  <div class="footer__info">
                     <p>
                        ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ
                        «ПОЗИТОЛК»
                     </p>
                     <p>
                        ОГРН: 1246100029977 <br>
                        ИНН: 6163234327 <br>
                        КПП: 616301001 <br>
                     </p>
                     <p>
                        344006, г. Ростов-на-Дону, Ростовская область,
                        ул. Большая Садовая, д.102, офис 12А
                     </p>
                  </div>
               </div>

               <nav class="footer__menu">

                  <ul>
                     <li><span> Соц. сети</span>
                        <ul>
                           <!-- <li>
                              <NuxtLink to="" target="_blank" rel="noopener noreferrer nofollow">Чат с ПозиТолк
                              </NuxtLink>
                           </li> -->
                           <li>
                              <NuxtLink to="https://www.instagram.com/pozi_tolk?igsh=aXpvcTdwYjZ4aWk0" target="_blank"
                                 rel="noopener noreferrer nofollow">Instagram</NuxtLink>
                           </li>
                           <li>
                              <NuxtLink to="https://vk.com/club226735405" target="_blank"
                                 rel="noopener noreferrer nofollow">ВКонтакте</NuxtLink>
                           </li>
                           <li>
                              <NuxtLink to="https://www.facebook.com/share/7Kt61mVnBiA3sfQP/?mibextid=K35XfP"
                                 target="_blank" rel="noopener noreferrer nofollow">Facebook</NuxtLink>
                           </li>
                           <li>
                              <NuxtLink to="https://dzen.ru/id/66a6f3d7b58e526106986a4e" target="_blank"
                                 rel="noopener noreferrer nofollow">Яндекс Дзен</NuxtLink>
                           </li>
                           <li>
                              <NuxtLink to="https://t.me/+j343I9IJYcBhMThi" target="_blank"
                                 rel="noopener noreferrer nofollow">Telegram</NuxtLink>
                           </li>
                        </ul>
                     </li>

                  </ul>

                  <ul>
                     <li> <span>Навигация</span>
                        <ul>
                           <li>
                              <NuxtLink to="/for-psycho">Для психологов</NuxtLink>
                           </li>
                           <li>
                              <NuxtLink to="">Для бизнеса</NuxtLink>
                           </li>
                           <li>
                              <NuxtLink to="/tests">Тесты</NuxtLink>
                           </li>
                           <li>
                              <NuxtLink to="/blog">База знаний</NuxtLink>
                           </li>
                           <li>
                              <NuxtLink to="/gift">Подарок близким</NuxtLink>
                           </li>
                        </ul>
                     </li>

                  </ul>

                  <ul>
                     <li><span>Другое</span>
                        <ul>
                           <li>
                              <NuxtLink to="/docs/pol-conf.docx" target="_blank">Условия использования </NuxtLink>
                           </li>
                           <li>
                              <NuxtLink to="">Договор оказания услуг</NuxtLink>
                           </li>
                           <li>
                              <NuxtLink to="">Правила акций</NuxtLink>
                           </li>
                           <li>
                              <NuxtLink to="/docs/polz-sogl.docx" target="_blank">Пользовательское соглашение</NuxtLink>
                           </li>
                        </ul>
                     </li>

                  </ul>

               </nav>
            </div>
            <div class="footer__second">
               <div class="footer__info">
                  Заходя на сайт, вы даёте согласие на использование файлов cookie и иных данных в соответствии c
                  <NuxtLink to="/docs/pol-conf.docx" target="_blank">условиями использования</NuxtLink>
               </div>
               <div class="footer__copyright"> © позитолк 2024</div>
            </div>
         </div>
      </div>
   </footer>
</template>
<script setup></script>




<style lang="scss" scoped>
.footer {
   &__logo {
      display: flex;
      flex-direction: column;
      gap: 50px;
      margin-right: 32px;

      @media(max-width: 750px) {
         gap: 32px;
      }
   }

   &__info {
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: -0.02em;
      color: #4D4D4D;
   }

   &__menu {
      padding-top: 45px;

      @media(max-width: 768px) {
         padding-top: 0;
      }
   }
}
</style>