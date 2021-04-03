const quizData = [
    {
        question:"who is the founder of facebook?",
        a:"Bill Gates",
        b:"Zuckerberg",
        c:"Elon Mask",
        d:"Melinda Gates",

        correct: "a"
    },
    {
        question:"which one is the most Popular Programming Languge in 2020?",
        a:"Java",
        b:"JavaScript",
        c:"Python",
        d:"C",
        correct:"b"
    },
    {
        question:"who is President of USA?",
        a:"Bill Gates",
        b:"Zuckerberg",
        c:"Joe Biden",
        d:"Melinda Gates",
        correct:"c"
    },
];

const questionEl = document.getElementById('question');

const a_text =document.getElementById('a_text');
const b_text =document.getElementById('b_text');
const c_text =document.getElementById('c_text');
const d_text =document.getElementById('d_text');
const submitBtn =document.getElementById('submit');

let currentQuiz = 0;

loadQuiz();

function loadQuiz(){
     
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    currentQuiz++;
}

submitBtn.addEventListener("click", () => {
    currentQuiz++;
    loadQuiz();
});