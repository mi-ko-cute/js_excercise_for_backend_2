const axios = require('axios');

async function getQuiz() {
    try {
        const response = await axios.get('https://opentdb.com/api.php?amount=10');
        const quizData = await response.data.results;
        console.log('クイズデータ： ', quizData);
    } catch (error) {
        console.error(error);
    }
}

getQuiz();