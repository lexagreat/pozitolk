<template>
   <main class="main">
      <!-- Основная часть -->
      <div class="page">

         <div class="breadcrumbs">
            <div class="container">
               <div class="breadcrumbs__inner">
                  <NuxtLink to="/tests" class="breadcrumbs__item">Тесты</NuxtLink>
                  <span class="breadcrumbs__sep"></span>
                  <span class="breadcrumbs__item">{{ info.test_name }}</span>
               </div>
            </div>
         </div>


         <div class="top">
            <div class="container">
               <div class="top__wrap">
                  <div class="top__first">
                     <div class="top__inner">
                        <div class="top__img">
                           <img class="__desk" :src="info.image" :alt="info.test_name">
                           <img class="__mob" :src="info.image" :alt="info.test_name">
                        </div>
                        <div class="top__body" v-if="testStore.lastTestObject?.type == 1">
                           <!-- <div class="top__title">Обычный пользователь</div> -->
                           <div class="top__desc">
                              <p v-html="info?.description">
                              </p>
                              <p>
                                 Обсудите ваш результат с профессиональным психологом. Скидка на первую сессию 20%
                              </p>
                           </div>
                           <div class="discount">
                              <div class="discount__name">TEST-XXXXXX</div>
                              <div class="discount__percent">20%</div>
                           </div>
                        </div>
                        <div class="top__body" v-if="testStore.lastTestObject?.type == 2">

                           <div class="result">

                              <div class="result__item">
                                 <h3 class="result__item-header">Разметка выборов</h3>
                                 <div class="result__item-body">

                                    <div class="table table-1">
                                       <!-- <div class="row">
                                          <div class="th">Тревожность: <b> 6</b></div>
                                          <div class="td-group">
                                             <div class="td">
                                                <div class="red">

                                                </div>
                                                <div class="red">
                                                   !!
                                                </div>
                                                <div class="red">

                                                </div>
                                                <div class="red">

                                                </div>
                                                <div class="red">

                                                </div>
                                                <div class="red">
                                                   !
                                                </div>
                                                <div class="red">

                                                </div>
                                                <div class="red">
                                                   !!!
                                                </div>
                                             </div>
                                          </div>
                                       </div> -->
                                       <div class="row">
                                          <div class="th">Компенсация/беспокойство</div>
                                          <div class="td-group">
                                             <div class="td">
                                                К
                                             </div>
                                             <div class="td">
                                                К
                                             </div>
                                             <div class="td">

                                             </div>
                                             <div class="td">

                                             </div>
                                             <div class="td">

                                             </div>
                                             <div class="td">
                                                Б
                                             </div>
                                             <div class="td">
                                                Б
                                             </div>
                                             <div class="td">
                                                Б
                                             </div>
                                          </div>
                                       </div>
                                       <div class="row">
                                          <div class="th">Функция</div>
                                          <div class="td-group">
                                             <div class="td">
                                                +
                                             </div>
                                             <div class="td">
                                                +
                                             </div>
                                             <div class="td">
                                                x
                                             </div>
                                             <div class="td">
                                                =
                                             </div>
                                             <div class="td">
                                                =
                                             </div>
                                             <div class="td">
                                                -
                                             </div>
                                             <div class="td">
                                                -
                                             </div>
                                             <div class="td">
                                                -
                                             </div>
                                          </div>
                                       </div>
                                       <div class="row">
                                          <div class="th">Первый выбор</div>
                                          <div class="td-group">
                                             <div class="td" v-for="item in testStore.lastTestObject.answers_colors[0]"
                                                :key="item">
                                                <div class="color border-none" :style="{ background: item?.title }">
                                                   {{ item.points }}
                                                </div>
                                             </div>

                                          </div>
                                       </div>
                                       <div class="row">
                                          <div class="th">Второй выбор</div>
                                          <div class="td-group">
                                             <div class="td" v-for="item in testStore.lastTestObject.answers_colors[1]">
                                                <div class="color border-none" :style="{ background: item?.title }">
                                                   {{ item.points }}
                                                </div>
                                             </div>

                                          </div>
                                       </div>
                                       <div class="row">
                                          <div class="th">Функция</div>
                                          <div class="td-group">
                                             <div class="td">
                                                +
                                             </div>
                                             <div class="td">
                                                +
                                             </div>
                                             <div class="td">
                                                x
                                             </div>
                                             <div class="td">
                                                x
                                             </div>
                                             <div class="td">
                                                =
                                             </div>
                                             <div class="td">
                                                =
                                             </div>
                                             <div class="td">
                                                -
                                             </div>
                                             <div class="td">
                                                -
                                             </div>
                                          </div>
                                       </div>
                                       <div class="row">
                                          <div class="th">Компенсация/беспокойство</div>
                                          <div class="td-group">
                                             <div class="td">
                                                K
                                             </div>
                                             <div class="td">
                                                K
                                             </div>
                                             <div class="td">
                                             </div>
                                             <div class="td">
                                             </div>
                                             <div class="td">
                                             </div>
                                             <div class="td">
                                             </div>
                                             <div class="td">
                                                Б
                                             </div>
                                             <div class="td">
                                                Б
                                             </div>
                                          </div>
                                       </div>
                                       <div class="row">
                                          <div class="th">Тревожность: <b> {{ info.anxiety }}</b></div>
                                          <div class="td-group">
                                             <div class="td">
                                                <div class="red">
                                                </div>
                                             </div>
                                             <div class="td">
                                                <div class="red">
                                                   !!
                                                </div>
                                             </div>
                                             <div class="td">
                                                <div class="red">
                                                </div>
                                             </div>
                                             <div class="td">
                                                <div class="red">
                                                </div>
                                             </div>
                                             <div class="td">
                                                <div class="red">
                                                </div>
                                             </div>
                                             <div class="td">
                                                <div class="red">
                                                </div>
                                             </div>
                                             <div class="td">
                                                <div class="red">
                                                   !!
                                                </div>
                                             </div>
                                             <div class="td">
                                                <div class="red">
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>

                                 </div>
                              </div>

                              <div class="result__item">
                                 <h3 class="result__item-header">Расчет колличественных показателей</h3>
                                 <div class="result__item-body">

                                    <div class="table table-2">
                                       <div class="row">
                                          <div class="th">
                                             <div class="center">Совокупное отклонение от аутогенной нормы</div>
                                          </div>
                                       </div>
                                       <div class="row">
                                          <div class="th">Цвета</div>
                                          <div class="td-group">
                                             <div class="td"
                                                v-for="color in testStore.lastTestObject.answers_colors[0]">
                                                <div class="color"
                                                   :style="{ background: color.title, 'color': '#fff' }">
                                                   {{ color.points }}
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="row">
                                          <div class="th">Аутогенная норма</div>
                                          <div class="td-group">
                                             <div class="td" v-for="item in 8">
                                                <div class="bold">
                                                   {{ item }}
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="row">
                                          <div class="th">Выбор</div>
                                          <div class="td-group">
                                             <div class="td"
                                                v-for="color in testStore.lastTestObject.answers_colors[0]">
                                                <div class="bold">
                                                   {{ color.points }}
                                                </div>
                                             </div>

                                          </div>
                                       </div>
                                       <div class="row">
                                          <div class="th">Разница</div>
                                          <div class="td-group">
                                             <div class="td"
                                                v-for="(color, index) in testStore.lastTestObject.answers_colors[0]">
                                                <div class="bold">
                                                   {{ Math.abs(color.points - index - 1) }}
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="row">
                                          <div class="th">СО =</div>
                                          <div class="td-group">
                                             <div class="td">
                                                <div class="bold">
                                                   {{ CO }}
                                                </div>
                                             </div>
                                             <div class="td">
                                                <div class="bold">

                                                </div>
                                             </div>
                                             <div class="td">
                                                <div class="bold">

                                                </div>
                                             </div>
                                             <div class="td">
                                                <div class="bold">

                                                </div>
                                             </div>
                                             <div class="td">
                                                <div class="bold">

                                                </div>
                                             </div>
                                             <div class="td">
                                                <div class="bold">

                                                </div>
                                             </div>
                                             <div class="td">
                                                <div class="bold">

                                                </div>
                                             </div>
                                             <div class="td">
                                                <div class="bold">

                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="row">
                                          <div class="th">
                                             <div class="center">Вегетативный коэффициент</div>
                                          </div>
                                       </div>
                                       <div class="row">
                                          <div class="th">
                                             <div class="line">
                                                ВК =
                                                <div class="bold">
                                                   ( 18 -
                                                   <div class="color" style="background: #F12F23;">3</div>
                                                   - <div class="color" style="background: #F2DD00;">7</div> )
                                                   / ( 18 - <div class="color" style="background: #004983;">5</div>
                                                   - <div class="color" style="background: #1D9772;">1</div> )
                                                </div>
                                             </div>
                                          </div>
                                       </div>

                                       <div class="row">
                                          <div class="th">ВК = </div>
                                          <div class="td-group">
                                             <div class="td">
                                                <div class="bold">
                                                   {{ info.vegetative }}
                                                </div>
                                             </div>
                                             <div class="td">
                                                <div class="bold">

                                                </div>
                                             </div>
                                             <div class="td">
                                                <div class="bold">

                                                </div>
                                             </div>
                                             <div class="td">
                                                <div class="bold">

                                                </div>
                                             </div>
                                             <div class="td">
                                                <div class="bold">

                                                </div>
                                             </div>
                                             <div class="td">
                                                <div class="bold">

                                                </div>
                                             </div>
                                             <div class="td">
                                                <div class="bold">

                                                </div>
                                             </div>
                                             <div class="td">
                                                <div class="bold">

                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>

                                 </div>
                              </div>
                              <div class="result__item" v-html="info.description"></div>
                              <div class="result__item">
                                 <h3 class="result__item-header">Количественные показатели</h3>
                                 <div class="result__item-body">

                                    <div class="progress-bar">
                                       <div class="progress-bar__header">
                                          <div class="progress-bar__title">Показатель тревожности:</div>
                                          <div class="progress-bar__lbl">Эмоциональная напряженность</div>
                                       </div>
                                       <div class="progress-bar__line">
                                          <div class="progress-bar__item" v-for="item in 12"
                                             :style="{ background: item <= info.anxiety ? '#CB7A00' : '#FAF9F9' }">
                                             <div class="progress-bar__count"
                                                :style="{ color: item < 4 ? '#008000' : item < 7 ? '#CB7A00' : '#CB1800' }">
                                                {{ item }}
                                             </div>
                                          </div>
                                       </div>
                                    </div>

                                    <div class="progress-bar">
                                       <div class="progress-bar__header">
                                          <div class="progress-bar__title">Совокупное отклонение:</div>
                                       </div>
                                       <div class="progress-bar__line">
                                          <div class="progress-bar__item" v-for="item in 7"
                                             :style="{ background: item <= info.deviation ? '#CB1800' : '#FAF9F9' }">
                                             <div class="progress-bar__count"
                                                :style="{ color: item < 3 ? '#008000' : item < 5 ? '#CB7A00' : '#CB1800' }">
                                                {{ item }}
                                             </div>
                                          </div>
                                       </div>
                                    </div>

                                    <div class="progress-bar">
                                       <div class="progress-bar__header">
                                          <div class="progress-bar__title">Вегетативный коэффициент:</div>
                                       </div>
                                       <div class="progress-bar__line">
                                          <div class="progress-bar__item" v-for="item in 7"
                                             :style="{ background: item <= info.vegetative ? '#CB7A00' : '#FAF9F9' }">
                                             <div class="progress-bar__count"
                                                :style="{ color: item < 3 ? '#008000' : item < 5 ? '#CB7A00' : '#CB1800' }">
                                                {{ item }}
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>


                           </div>

                           <div class="top__desc">
                              <p style="max-width:630px">Обсудите ваш результат с профессиональным психологом. Скидка на
                                 первую сессию 20%</p>
                           </div>
                           <div class="discount">
                              <div class="discount__name">TEST-XXXXXX</div>
                              <div class="discount__percent">20%</div>
                           </div>
                        </div>
                        <div class="top__body" v-if="testStore.lastTestObject?.type == 3">
                           <div class="top__title">
                              <span style="color:#FF6900;font-weight:600;">Интерпретация результатов</span>
                           </div>
                           <div class="top__desc" v-html="info.description">
                           </div>
                           <!-- <div class="top__desc">
                              <p>
                                 <strong>Барашек - это вы.</strong>
                              </p>
                              <p>
                                 Яркий, чётко прорисованный барашек, у которого есть кудряшки, он упитан, доволен и
                                 счастлив, символизирует ваш комфорт в родительской семье. При общении с родителями вы,
                                 как правило, испытываете позитивные чувства, вам легко и приятно.
                              </p>
                              <p>
                                 Несчастный, помятый барашек, шерсть которого растёт клочками, тощий жалкий барашек с
                                 грустными глазками символизирует отсутствие поддержки и принятия в родительской семье.
                              </p>
                              <p>
                                 Нравится ли вам смотреть на вашего баракшка? Если при взгляде на него вы чувствуете
                                 негатив и неприязнь, это означает, что у вас есть серьёзные трудности с принятием себя.
                              </p>
                              <p>
                                 Наличие у барашка копытц и рожек говорит о вашей возможности проявлять здоровое
                                 упрямство. Вы умеете отстаивать своё мнение, можете бороться за свои права. Вы
                                 научились этому в родительской семьи и теперь можете отстаивать свою позицию и с
                                 другими людьми. У вас нет проблем с личными границами, вы не позволяете другим людям
                                 садиться вам на шею. Очень часто рога и копыта наблюдаются в рисунках подростков, что
                                 вполне закономерно, ведь именно в этом возрасте человек учится психологической
                                 самостоятельности, хоть зачастую это и просиходит через бунт. Здоровый бунт
                                 способствует адекватной сепарации от родителей в будущем.
                              </p>
                              <p>
                                 Если же рожки и копыта у вашего барашка отсутствуют, значит вы мягкий человек,
                                 возможно, излишне послушный перед родителями, но, тем не менее, неплохо умеет
                                 сотрудничать.
                              </p>
                              <p>
                                 <strong>Бутылка - это ваша родительская семья.</strong>
                              </p>
                              <p>
                                 Плавные, округлые формы, мягкие символизируют близость к маме. На данный момент вы всё
                                 ещё нуждаетесь в её внимании, заботе, совете, зависите от её оценки. Возможно, в вашей
                                 личности преобладают материнские, женские черты.
                              </p>
                              <p>
                                 Резкие и угловатые формы бутылки символизируют привязанность к папе, нужде в общении с
                                 ним. Возможно, в вашей личности преобладают отцовские, мужские черты.
                              </p>
                              <p>
                                 Горлышко, закрытое пробкой, как правило говорит о гиперопеке, которую родители
                                 проявляли по отношению к вам, не учитывали ваше мнение, принимали решения за вас.
                              </p>
                              <p>
                                 Украшения внутри бутылки (цветы, гирлянды, солнышко, узоры) говорят о том, что
                                 гиперопека в семье присутствует, но вы реагируете на неё положительно, воспринимаете её
                                 как само собой разумеющееся и не пытаетесь ей протестовать. Тем не менее, не стоит
                                 забывать, что, как бы ни было хорошо внутри бутылки, снаружи тоже существует реальный
                                 мир, в котором иногда придётся принимать самостоятельные решения.
                              </p>
                              <p>
                                 Разбитая или надколотая бутылка, или молоток у барашка, которым он пытается разбить
                                 бутылку, символизируют травмы детства, которые ухудшают качество жизни.
                              </p>
                              <p>
                                 <strong>Положение барашка в бутылке.</strong>
                              </p>
                              <p>
                                 Если барашек стоит на ножках ровно, правильно (при этом не имеет значение расположение
                                 бутылки), значит в родительской семье вы ощущаете стабильность, чувствуете себя
                                 уверенно и безопасно.
                              </p>
                              <p>
                                 Голова барашка направлена к горлышку бутылки: в данный момент происходит сепарация от
                                 родителей.
                              </p>
                              <p>
                                 Барашек с завидным упорством пытается пролезть через горлышко бутылки: вы зрелый,
                                 уверенный в себе человек. Сепарацию можно считать завершённой.
                              </p>
                              <p>
                                 Барашек повёрнут к горлышку спиной, попой, хвостиком: на данный момент вы не нуждаетесь
                                 в сепарации или слишком сильно боитесь покидать родительскую семью.
                              </p>
                              <p>
                                 <strong>Горлышко бутылки и барашек.</strong>
                              </p>
                              <p>
                                 Посмотрите на размеры горлышка бутылки и на размер барашка. Как вам кажется, эти
                                 размеры сопоставимы? При желании, сможет ли барашек выбраться из бутылки? Действительно
                                 сможет протиснуться через горлышко, или только мечтает об этом?
                              </p>
                              <p>
                                 О высокой мотивации к сепарации от родительской семьи говорят ответы по типу: "Конечно,
                                 он гибкий, мягкий", или "Он сделает это любой ценой, ведь ему там очень тесно".
                              </p>
                              <p>
                                 Низкую мотивацию к сепарации символизируют такие фразы, как: "Нет, ему будет больно",
                                 "Нет, он боится застрять", "Нет, снаружи очень опасно". 
                              </p>
                              <br>
                              <br>
                              <br>
                              <p style="font-size:24px;font-weight:500;max-width:600px;line-height: 1.2;">
                                 Обсудите ваш результат с профессиональным психологом. Скидка на первую сессию 20%
                              </p>
                           </div> -->
                           <div class="discount">
                              <div class="discount__name">TEST-XXXXXX</div>
                              <div class="discount__percent">20%</div>
                           </div>
                        </div>
                        <div class="top__body" v-if="testStore.lastTestObject?.type == 4">
                           <!-- <div class="top__title">Обычный пользователь</div> -->
                           <div class="top__desc">
                              <div class="progress-bar" v-for="([key, value]) in Object.entries(info.score)">
                                 <div class="progress-bar__header">
                                    <div class="progress-bar__title">{{key}}:</div>
                                    <div class="progress-bar__lbl"></div>
                                 </div>
                                 <div class="progress-bar__line">
                                    <div class="progress-bar__item" v-for="item in value.max"
                                       :style="{ background: item <= value.score ? '#CB7A00' : '#FAF9F9' }">
                                       <div class="progress-bar__count"
                                          :style="{ color: item < 4 ? '#008000' : item < 7 ? '#CB7A00' : '#CB1800' }">
                                          {{ item }}
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <p v-html="info?.result">
                              </p>
                              <p>
                                 Обсудите ваш результат с профессиональным психологом. Скидка на первую сессию 20%
                              </p>
                           </div>
                           <div class="discount">
                              <div class="discount__name">TEST-XXXXXX</div>
                              <div class="discount__percent">20%</div>
                           </div>
                        </div>
                        <div class="top__body" v-if="testStore.lastTestObject?.type == 5">
                           <!-- <div class="top__title">Обычный пользователь</div> -->
                           <div class="top__desc">
                              <p v-html="info?.description.replace('Ответы пользователя:','')">
                              </p>
                              <p>
                                 Обсудите ваш результат с профессиональным психологом. Скидка на первую сессию 20%
                              </p>
                           </div>
                           <div class="discount">
                              <div class="discount__name">TEST-XXXXXX</div>
                              <div class="discount__percent">20%</div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <SidebarTestResult />
               </div>
            </div>
         </div>

         <SectionsTestRecommended />

      </div>
   </main>
</template>
<script setup>
import { useTestStore } from '~/stores/testStore.js';
const testStore = useTestStore()
const router = useRouter()
console.log("post", testStore.lastTestObject);
let info = await useBaseFetch("/wellness/tests/check/", {
   method: "POST",
   body: testStore.lastTestObject,
})
console.log(info)
if (testStore.lastTestObject == null) {
   router.push('/')
}

const CO = computed(() => {
   let res = 0
   if (testStore.lastTestObject.type == 2) {
      testStore.lastTestObject.answers_colors[0].forEach((color, index) => {
         res += Math.abs(color.points - index - 1)
      })
   }
   return res
})


let styles = [
   {
      rel: "stylesheet",
      href: "/site/css/test-result.css",
   },
   {
      rel: "stylesheet",
      href: "/site/css/test-result-2.css",
   },
   {
      rel: "stylesheet",
      href: "/site/css/test-result-3.css",
   },
   {
      rel: "stylesheet",
      href: "/site/css/test-result-2.css",
   },
   {
      rel: "stylesheet",
      href: "/site/css/test-result.css",
   },
]
let styleObj = styles[testStore.lastTestObject?.type - 1]
useHead({
   link: [
      styleObj,
   ],
   title: "Позитолк результат"
})





</script>


<style lang="scss" scoped>
.top__img>img.__desk{
   max-height: 328px;
}
</style>