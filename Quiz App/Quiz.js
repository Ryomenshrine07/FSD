const questions = [
    {
        question : "Which one Of These is a Front - End Languages ?",
        answers : 
        [
            {text:"Html" , correct:true},
            {text:"C++" , correct:false},
            {text:"Node.js" , correct:false},
            {text:"Express" , correct:false}
        ]
    },
    {
        question: "which is smallest continent in world?",
        answers: [
            {text:"Asia" , correct:false},
            {text:"Australia" , correct:true},
            {text:"Arctic" , correct:false},
            {text:"Africa" , correct:false},
        ]
    },
    {
        question: "which is language is server side?",
        answers: [
            {text:"Node" , correct:true},
            {text:"html" , correct:false},
            {text:"css" , correct:false},
            {text:"Js" , correct:false},
        ]
    },
    {
        question: "which is largest desert in the world?",
        answers: [
            {text:"kalahari" , correct:false},
            {text:"Gobi" , correct:false},
            {text:"sahara" , correct:false},
            {text:"Antarctica" , correct:true},
        ]
    }
]

const questionElement = document.querySelector('#question');
const answereButton = document.querySelector('#answer-buttons');
const nextButton = document.querySelector('#next-btn');

let currentQuestionIndex = 0; 
let score = 0;
let correctButton = null;

function startQuiz()
{
    currentQuestionIndex = 0; 
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion()
{
    resetstate();

    let currentQuestion = questions[currentQuestionIndex];

    let questionNumber = currentQuestionIndex + 1;
    
    questionElement.innerHTML = questionNumber + "." + currentQuestion.question;

    currentQuestion.answers.forEach((ans)=>{

        const button = document.createElement("button");
        button.innerHTML = ans.text;
        button.classList.add("btn");
        answereButton.appendChild(button);
        if(ans.correct == true)
        {
            correctButton = button;
            button.dataset.correct = ans.correct;
        }

        button.addEventListener('click',selectAnswere);


    })
}

function resetstate()
{
    nextButton.style.display = "none";
    while(answereButton.firstChild)
    {
        answereButton.removeChild(answereButton.firstChild);
    }
}

function selectAnswere(event)
{
    console.log("hihihihih");
    const selectButton = event.target;
    const isCorrect = event.target.dataset.correct;
    if(isCorrect)
    {
        selectButton.classList.add("correct");
        score++;
        console.log(score);
    }
    else
    {
        correctButton.classList.add("correct");
        selectButton.classList.add("incorrect");
    }

    Array.from(answereButton.children).forEach((button)=>{
        if(button.dataset.correct == true)
        {
            button.classList.add("correct");
            console.log("HElooo");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}

nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex < questions.length)
    {
        correctButton = null;
        handleNextBtn();
    }
    else
    {
        startQuiz();
    }
})

function showScore()
{
    resetstate();
    questionElement.innerHTML = `Your Score : ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextBtn()
{
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length)
    {
        showQuestion();
    }
    else
    {
        showScore();
    }
}

startQuiz();


