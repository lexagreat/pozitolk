<template>
    <div class="form-container">
        <div class="form-group">
            <label>Создать шкалу:</label>
            <input v-model="newScale" type="text">
            <button @click="addScale">Добавить</button>
        </div>
        
        <div v-for="(q, index) in form.questions" :key="index" class="form-group">
            <label>Вопрос {{ index + 1 }}:</label>
            <textarea rows="5" v-model="q.question" type="text"></textarea>
            
            <label>Шкала:</label>
            <select v-model="q.scale">
                <option v-for="scale in scales" :key="scale" :value="scale">{{ scale }}</option>
            </select>
            
            <button class="remove-button" @click="removeQuestion(index)">Удалить</button>
        </div>
        
        <button class="add-button" @click="addQuestion">Добавить вопрос</button>

        
        <div class="form-group">
            <label>Выбрать ответы:</label>
            <select v-model="form.attach_answers" multiple>
                <option v-for="answer in availableAnswers" :key="answer.id" :value="answer.id">{{ answer.title }}({{  answer.points }})</option>
            </select>
        </div>

        <div class="form-group">
            <label>ID теста:</label>
            <input v-model.number="form.test" type="number">
        </div>

        <button class="submit-button" @click="submitForm">Отправить</button>
    </div>
</template>

<script setup>

import { useClientStore } from '~/stores/client/store';
  
const store = useClientStore()
const form = ref({
    questions: [
        { question: '', scale: '' }
    ],
    attach_answers: [],
    test: null
});

const scales = ref([]);
const newScale = ref('');
const availableAnswers = ref([]);

const addScale = () => {
    if (newScale.value && !scales.value.includes(newScale.value)) {
        scales.value.push(newScale.value);
        newScale.value = '';
    }
};

const fetchAnswers = async () => {
    try {
        const response = await useBaseFetch('/wellness/get-last-answers/');
        console.log(response)
        availableAnswers.value = response;
    } catch (error) {
        console.error('Ошибка загрузки ответов:', error);
    }
};

const addQuestion = () => {
    form.value.questions.push({ question: '', scale: '' });
};
const removeQuestion = (index) => {
    form.value.questions.splice(index, 1);
};


const submitForm = async () => {
    try {
        const payload = {
            ...form.value,
            attach_answers: form.value.attach_answers.map(Number) // Преобразуем в массив чисел
        };
        
        const response = await useBaseFetch('/wellness/abuse/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Token " + store.token,
            },
            body: JSON.stringify(payload)
        });
        console.log('Ответ:', response);
    } catch (error) {
        console.error('Ошибка:', error);
    }
};

onMounted(fetchAnswers);
</script>

<style scoped>
textarea{
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}
.form-container {
    max-width: 500px;
    margin: auto;
    padding: 20px;
    border-radius: 8px;
    background: #f9f9f9;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
.form-group {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
}
.form-group>button:hover{
    background: darkgray;
}
label {
    font-weight: bold;
    margin-bottom: 5px;
}
input, select {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}
button {
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: 0.3s;
}
.submit-button {
    background-color: #007bff;
    color: white;
    width: 100%;
}
.submit-button:hover {
    background-color: #0056b3;
}

.add-button {
    background-color: #28a745;
    color: white;
    margin-bottom: 15px;
}
.add-button:hover {
    background-color: #218838;
}.remove-button {
    background-color: #dc3545;
    color: white;
    margin-top: 5px;
}
.remove-button:hover {
    background-color: #a31c2a !important;
}
</style>
