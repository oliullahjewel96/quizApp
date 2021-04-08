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
        question:"who is the President of USA?",
        a:"Bill Gates",
        b:"Zuckerberg",
        c:"Joe Biden",
        d:"Melinda Gates",
        correct:"c"
    },
    {
        question:"Which club does MO Salah play for?",
        a:"Liverpool",
        b:"Chelsea",
        c:"Real-Madrid",
        d:"PSG",
        correct:"a"
    },
    {
        question:"Which Club was the winner of 2019/2020 premier league?",
        a:"Man-City",
        b:"Liverpool",
        c:"Leicester City",
        d:"Spurs",
        correct:"b"
    },
];

const questionEl = document.getElementById('question');
const answersEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const a_text =document.getElementById('a_text');
const b_text =document.getElementById('b_text');
const c_text =document.getElementById('c_text');
const d_text =document.getElementById('d_text');
const submitBtn =document.getElementById('submit');

let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz(){
    deselectAnswer(); 
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
   
}

  function getSelected(){
     
     
       let answer = undefined;
       answersEls.forEach((answerEl) =>{
        if(answerEl.checked){   
            answer=answerEl.id;
        }
       });
       return answer;
  }

  function deselectAnswer(){
    answersEls.forEach((answerEl) =>{
            answerEl.checked = false;
        });
  }

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz<quizData.length){
            loadQuiz();
        }else{
             quiz.innerHTML = 
             `<h2>You answered correctly
              at ${score}/${quizData.length} 
              questions</h2>
              <button onclick=location.reload()>Reload</button>`;
        }
        
    }
    
});