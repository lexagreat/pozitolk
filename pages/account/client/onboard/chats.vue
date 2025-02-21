<template>
    <div class="wrapper">
        
      <SidebarAccountClientOnBoard :step="'main'"/>
        <main class="main">
<div class="dashboard">

    <div class="chat">
        <div class="chat__list">
            <div class="chat__list-title">Чаты</div>
            <div class="chat__persons">
                <div class="chat__persons-item" :class="coorentChatId==index?'active':''" v-for="(chat,index) in chatList" @click="CangeChat(index)">
                    <div class="chat__persons-img" :style="{ backgroundImage: `url(${chat.psychologist_avatar})` }"></div>
                    <div class="chat__persons-body">
                        <div class="chat__persons-name">{{chat.psychologist_nickname}}</div>
                        <div class="chat__persons-msg">{{(chat.last_message)?chat.last_message.text:''}}</div>
                    </div>
                    <div class="chat__persons-time">{{(chat.last_message)?new Date(chat.last_message.created_at).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }):''}}</div>
                </div>
            </div>
        </div>
        <div class="chat__main">

            <div class="message-mob">
                <div class="message-mob-btn">Чаты /</div>
                <div class="message-mob-img" style="background-image:url(chat.psychologist_avatar);"></div>
                <div class="message-mob-name" v-if="chatList">{{ chatList[coorentChatId].psychologist_nickname }}</div>
            </div>

            
            <div class="message">
              <div class="message__list" ref="messageList" @scroll="handleScroll">
                <div class="message__list-inner">
                  <!-- Группируем сообщения по отправителю -->
                  <div v-for="(group, groupIndex) in groupedMessages" :key="groupIndex" class="message-group">
                    <!-- Аватарка для группы сообщений -->
                     <div class="message-group__avatar_parent">
                        <div
                          v-if="group.sender !== myId"
                          class="message-group__avatar"
                          :style="`background-image: url(${srcOpponent});`"
                        >
                      </div>
                     </div>
                    <!-- Сообщения в группе -->
                    <div
                      v-for="(message, index) in group.messages"
                      :key="index"
                      class="message__item"
                      :class="group.sender === myId ? 'outgoing' : 'incoming'"
                    >
                      <div class="message__item-body">
                        <div class="message__item-txt">{{ message.text }}</div>
                      </div>
                      <div class="message__item-time">{{ formatDate(message.created_at) }}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="message__input">
                <input
                  type="text"
                  placeholder="Введите текст"
                  v-model="inputMessage"
                  @keyup.enter="handleSendMessage"
                />
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

const store = useClientStore();
const socket = ref(null);
const messages = ref([]);
const myId = ref(74);
const srcOpponent = ref('./assets/img/chat__persons-img-1.png');
let gettingMessage;
let chatList;
const inputMessage = ref(''); // Текст сообщения из поля ввода
const messageList = ref(null); // Ссылка на элемент с сообщениями
const isUp = ref(false); // Ссылка на элемент с сообщениями
const coorentChatId=ref(0);
const nextMessages = ref('')
const saveScroll = ref('')
let me = await store.getMe();
myId.value = me.id;
const CangeChat = async(number) => {
    coorentChatId.value=number;
    socket.value.close();
    const result2 = await store.getChatMessageList(chatList[coorentChatId.value].id,1,30)
    console.log(result2)
    srcOpponent.value = chatList[coorentChatId.value]
    messages.value = [];
    console.log(result2.results)
    for (const key in result2.results) {
      console.log(result2.results[key])
      messages.value.unshift(result2.results[key])
    }
    socket.value = new WebSocket(`wss://backend.позитолк.рф/ws/chat/${chatList[coorentChatId.value].id}/?token=${store.token}`);
    socket.value.onopen = () => {
        console.log('WebSocket connection established');
        
    };
    socket.value.onmessage = (event) => {
        const message = JSON.parse(event.data);
        gettingMessage = {
          sender:message.id,
          name:message.sender,
          text:message.text,
          created_at:message.created_at
        }
        messages.value.push(gettingMessage);

        console.log(gettingMessage)
        console.log(messages.value)
    nextMessages.value = ''
      nextTick(() => {
        scrollToBottom();
      });
    };
    // Обработка ошибок
    socket.value.onerror = (error) => {
        console.error('WebSocket error:', error);
    };

    // Обработка закрытия соединения
    socket.value.onclose = () => {
        console.log('WebSocket connection closed');
    };
      nextTick(() => {
        scrollToBottom();
      });
}
// Группируем сообщения по отправителю
const groupedMessages = computed(() => {
  const groups = [];
  let currentGroup = null;
if(messages.value){
  messages.value.forEach((message) => {
    if (!currentGroup || currentGroup.sender !== message.sender) {
      currentGroup = {
        sender: message.sender,
        messages: [],
      };
      groups.push(currentGroup);
    }
    currentGroup.messages.push(message);
  });
}

  return groups;
});

const pagginationMessage = async(url) =>{
  
         try {
            console.log('1286574692385709234870928734928374982374982374398')
            console.log(messageList.value.scrollHeight)
            console.log(messageList.value.scrollTop)
            console.log('=')
            console.log(messageList.value.scrollHeight - messageList.value.scrollTop)
          saveScroll.value=messageList.value.scrollHeight - messageList.value.scrollTop
          console.log(messageList.value)
            const result2 = await useBaseFetch(`${url}`, {
               headers: {
                  // Исправлено на headers
                  "Content-Type": "application/json", // Указываем тип контента
                  Authorization: "Token " + store.token, // Исправлено на Authorization
               },
            });
            console.log(result2)
            console.log(result2.results)
            for (const key in result2.results) {
              messages.value.unshift(result2.results[key])
            }
            nextMessages.value = result2.next
            setTimeout(()=>{
              
            messageList.value.scrollTop =messageList.value.scrollHeight - saveScroll.value
            saveScroll.value=0
            },100)
         } catch (err) {
            console.log("err", err);
         }
}

onMounted(async() => {
    chatList = await store.getMyChatList()
    console.log(chatList)
    const result2 = await store.getChatMessageList(chatList[coorentChatId.value].id,1,30)
    console.log(result2)
    nextMessages.value = result2.next
    srcOpponent.value = chatList[0].psychologist_avatar
    console.log(result2.results)
    for (const key in result2.results) {
      messages.value.unshift(result2.results[key])
    }

    if(chatList){
      socket.value = new WebSocket(`wss://backend.позитолк.рф/ws/chat/${chatList[coorentChatId.value].id}/?token=${store.token}`);


      // Обработка открытия соединения
      socket.value.onopen = () => {
          console.log('WebSocket connection established');
          
      };

      // Обработка входящих сообщений
      socket.value.onmessage = (event) => {
          const message = JSON.parse(event.data);
          gettingMessage = {
            sender:message.id,
            name:message.sender,
            text:message.text,
            created_at:message.created_at
          }
          messages.value.push(gettingMessage);

          console.log(gettingMessage)
          console.log(messages.value)
          nextTick(() => {
            scrollToBottom();
          });
      };
      // Обработка ошибок
      socket.value.onerror = (error) => {
          console.error('WebSocket error:', error);
      };

      // Обработка закрытия соединения
      socket.value.onclose = () => {
          console.log('WebSocket connection closed');
      };
    }
      nextTick(() => {
        scrollToBottom();
      });
});

onUnmounted(() => {
    // Закрываем соединение при уничтожении компонента
    if (socket.value) {
        socket.value.close();
    }
});

const sendMessage = (messageText) => {
  console.log(socket.value.readyState === WebSocket.OPEN)
    if (socket.value && socket.value.readyState === WebSocket.OPEN) {
      console.log("message")
      console.log(messageText)
        const message = {
          text: messageText, // Можно добавить другие ключи, если нужно
        };
        socket.value.send(JSON.stringify(message));
    }
};

// Обработчик отправки сообщения
const handleSendMessage = () => {
  if (inputMessage.value.trim()) {
    sendMessage(inputMessage.value);
    inputMessage.value = ''; // Очищаем поле ввода
  }
};
useHead({
    link: [
        {
            rel: "stylesheet",
            href: "/client/css/main-2.css",
            id: "chats-main-2",
        },
        {
            rel: "stylesheet",
            href: "/client/css/page-8.css",
            id: "chats-page-8",
        },
    ],
});

// Обработчик события scroll
const handleScroll = () => {
  if (messageList.value) {
    const scrollTop = messageList.value.scrollTop; // Текущая позиция прокрутки
    if(isUp.value==false){
      // Если пользователь почти долистал до верха (например, осталось 100 пикселей)
      if (scrollTop < 100) {
        isUp.value=true;
        pagginationMessage(nextMessages.value)
      }
    }else{
      if (scrollTop > 100) {
        isUp.value=false;
      }
    }
  }
};
// Прокрутка до конца списка сообщений
const scrollToBottom = () => {
  if (messageList.value) {
    messageList.value.scrollTop = messageList.value.scrollHeight;
  }
};
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();

    const isToday =
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();

    return isToday
        ? date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }) // Только время
        : date.toLocaleDateString('ru-RU'); // Только дата
};
</script>
<style scoped>
.wrapper{
  width: 100%;
}
.message__list-inner{
  width: 100%;
}
.outgoing{

  justify-self:  end;
}
.incoming{
  justify-self: start;
  margin-left: 60px;
}
.message__item-img {
  position: sticky;
  top: 0;
  align-self: flex-start;
}
.chat__persons-time{
   margin-left: auto;
}
.message-group{
  
  position: relative; /* Важное условие */
}
.message-group__avatar_parent{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
}
.chat__persons-img {
  background-size: cover !important;}
.message-group__avatar{
  background-size: cover;
  background-repeat: no-repeat;
  position: sticky;
  top:  0;
  width: 44px;
  height: 44px;
  border-radius: 16px;
}
</style>

