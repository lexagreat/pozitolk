<template>
    <div class="form-container">
        <div class="form-group">
            <label>Имя:</label>
            <input v-model="form.name" type="text">
        </div>
        <div class="form-group">
            <label>Возраст:</label>
            <input v-model.number="form.age" type="number">
        </div>
        <div class="form-group">
            <label>Пол:</label>
            <select v-model="form.sex">
                <option value="woman">Женщина</option>
                <option value="man">Мужчина</option>
            </select>
        </div>
        <div class="form-group">
            <label>Описание:</label>
            <textarea rows="4" v-model="form.description"></textarea>
        </div>
        <div class="form-group">
            <label>Фото:</label>
            <input type="file" @change="handleFileUpload">
        </div>
        <div class="sub-form">
            <h2>Образование</h2>
            <div class="form-group">
                <label>Год выпуска:</label>
                <input v-model.number="educationYear" type="number">
            </div>
            <div class="form-group">
                <label>Название организации:</label>
                <textarea rows="4" v-model="educationText"></textarea>
                <button @click="addEducation">Добавить</button>
            </div>
            <ul class="education-list">
                <li v-for="(edu, index) in form.education_psychologist" :key="index">
                    <span>{{ edu.year }} - {{ edu.text }}</span>
                    <button @click="removeEducation(index)">Удалить</button>
                </li>
            </ul>
        </div>
        <div class="form-group">
            <label>Опыт (лет):</label>
            <input v-model.number="form.experience" type="number">
        </div>
        <div class="form-group">
            <label>Лейбл:(например:позитивная психотерапия)</label>
            <input v-model="form.label" type="text">
        </div>
        <div class="form-group">
            <label>Цена:(за сессию)</label>
            <input v-model.number="form.price" type="number">
        </div>
        <div class="form-group">
            <label>Темы:</label>
            <div class="topics-container">
                <button 
                    v-for="topic in topics" 
                    :key="topic" 
                    @click="toggleTopic(topic)"
                    :class="{'selected': selectedTopics.includes(topic)}"
                >
                    {{ topic }}
                </button>
            </div>
        </div>
        <button class="submit-button" :class="isFormValid?'':'grayBg'" @click="submitForm" :disabled="!isFormValid">Отправить</button>

    </div>
</template>

<script setup>
import { useClientStore } from '~/stores/client/store';
  
const store = useClientStore()
const router = useRouter()

const form = ref({
    psycho_topic: '',
    education_psychologist: [],
    photo: null,
    name: '',
    age: null,
    label: '',
    experience: null,
    description: '',
    sex: 'woman',
    price: null
});

const educationYear = ref(null);
const educationText = ref('');
const photoFile = ref(null);
const topics = ref([]);
const selectedTopics = ref([]);

const addEducation = () => {
    if (educationYear.value && educationText.value) {
        form.value.education_psychologist.push({
            year: educationYear.value,
            text: educationText.value
        });
        educationYear.value = null;
        educationText.value = '';
    }
};

const fetchTopics = async () => {
    try {
        const response = await useBaseFetch("/cabinet/survey-info/", {
            headers: {
                Authorization: "Token " + store.token,
            },
        });
        console.log(response)
        
        const allTopics = [
            ...response.feeling.map(item => item.name),
            ...response.relation.map(item => item.name),
            ...response.work_study.map(item => item.name),
            ...response.life_event.map(item => item.name),
            ...response.couple_therapy.map(item => item.name),
        ];

        topics.value = allTopics; // Предположим, что ответ содержит массив тем в поле 'topics'
    } catch (err) {
        console.log("err", err);
    }
};
const toggleTopic = (topic) => {
    const index = selectedTopics.value.indexOf(topic);
    if (index === -1) {
        selectedTopics.value.push(topic);
    } else {
        selectedTopics.value.splice(index, 1);
    }
    form.value.psycho_topic = selectedTopics.value.join(', ');
};
const isFormValid = computed(() => {
    return form.value.name &&
        form.value.age !== null &&
        form.value.label &&
        form.value.experience !== null &&
        form.value.description &&
        form.value.sex &&
        form.value.price !== null &&
        selectedTopics.value.length > 0 &&
        form.value.education_psychologist.length > 0 &&
        photoFile.value;
});
const removeEducation = (index) => {
    form.value.education_psychologist.splice(index, 1);
};
const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        const fileSizeInMB = file.size / (1024 * 1024); // Размер файла в МБ
        if (fileSizeInMB > 2.5) {
            alert("Размер файла не должен превышать 2.5 МБ.");
            event.target.value = ""; // Очищаем поле выбора файла
            photoFile.value = null; // Сбрасываем значение файла
        } else {
            photoFile.value = file; // Сохраняем файл, если размер допустим
        }
    }
};

const submitForm = async () => {
    if (!photoFile.value) {
        alert("Пожалуйста, выберите файл размером не более 2.5 МБ.");
        return;
    }
    try {
        const formData = new FormData();
        formData.append('photo', photoFile.value);
        formData.append('name', form.value.name);
        formData.append('age', form.value.age);
        formData.append('label', form.value.label);
        formData.append('experience', form.value.experience);
        formData.append('description', form.value.description);
        formData.append('sex', form.value.sex);
        formData.append('price', form.value.price);
        formData.append('psycho_topic', form.value.psycho_topic);
        formData.append('education_psychologist', JSON.stringify(form.value.education_psychologist));
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }
        console.log( photoFile.value)
        console.log(form.value.name)
        console.log(form.value.age)
        console.log(form.value.label)
        console.log(form.value.experience)
        console.log(form.value.description)
        const response = await useBaseFetch("/cabinet/apply-psychologist-survey/", {
            method: "POST",
            body: formData,
            headers: {
                Authorization: "Token " + store.token,
            },
        });
        return response;
    } catch (err) {
        console.log(err);
        console.log("err", err);
    }
    router.go(0);
};
onMounted(() => {
    fetchTopics();
});
</script>


<style scoped>
.sub-form {
    padding: 15px;
    background: rgba(0, 0, 0, 0.1);
    margin: 10px;
    border: 1px solid gray;
    border-radius: 5px;
}
.sub-form>div>button {
    margin-top: 10px;
}
.education-list {
    list-style: none;
    padding: 0;
}
.education-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    padding: 5px 10px;
    margin-top: 5px;
    border-radius: 4px;
    border: 1px solid #ccc;
}
.education-list button {
    background: red;
    color: white;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
}
.education-list button:hover {
    background: darkred;
}
.form-container {
    max-width: 400px;
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
    transition: 0.3s;
    font-size: 16px;
}
button:hover {
    background: darkgray;
}
.submit-button {
    background-color: #007bff;
    color: white;
    width: 100%;
}
.submit-button:hover {
    background-color: #0056b3;
}
.grayBg{
    background-color: gray !important;
}
.grayBg:hover{
    background-color: gray !important;
}
.topics-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.topics-container button {
    padding: 8px 16px;
    border: 1px solid #ccc;
    border-radius: 20px;
    background-color: #f0f0f0;
    cursor: pointer;
    transition: background-color 0.3s;
}

.topics-container button.selected {
    background-color: #007bff;
    color: white;
    border-color: #007bff;
}

.topics-container button:hover {
    background-color: #ddd;
}

.topics-container button.selected:hover {
    background-color: #0056b3;
}
</style>
