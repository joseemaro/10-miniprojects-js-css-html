const quizData = [
    {
        question: 'Cual es el mejor amigo del hombre?',
        a: 'Perro',
        b: 'Gato',
        c: 'Conejo',
        d: 'Ninguno de los anteriores.',
        correct: 'a'
    },
    {
        question: 'Que no puede faltar en un patio?',
        a: 'Pileta',
        b: 'Quincho',
        c: 'Reposera',
        d: 'Parrilla',
        correct: 'd'
    },
    {
        question: 'Cuantos medallones debe tener una Hamburguesa',
        a: '1',
        b: '2',
        c: '3',
        d: '4',
        correct: 'b'
    },
    {
        question: 'Cual es tu telefono actual?',
        a: 'Iphone 12',
        b: 'Galaxy s21',
        c: 'Xiaomi redmi 9',
        d: 'Pixel 4',
        correct: 'c'
    }, 
];

let currentQuiz = 0;
let answer = undefined;
let score = 0;

const questionEl = document.getElementById('question');
const answersEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn = document.getElementById('submit');


loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
    const answersEls = document.querySelectorAll('.answer');
    answersEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;

}

function deselectAnswers(){
    const answersEls = document.querySelectorAll('.answer');
    answersEls.forEach((answerEl) => {
            answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    
    const answer = getSelected();
    if (answer){

        if (answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length){
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `        }
    }
    
});