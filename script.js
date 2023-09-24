const questions = [
    {
    question: "What are fundamental particles?",
    answers:[
        {text:"electron", correct:true},
        {text:"bosan", correct:false},
        {text:"pion", correct:false},
        {text:"positron", correct:false}
    ]
},
{
    question: "A point at what light ray remains undeviated on lens?",
    answers:[
        {text:"focus", correct:false},
        {text:"centre of curvature", correct:false},
        {text:"optic centre", correct:true},
        {text:"focal length", correct:false}
    ]
},
{
    question: "Nature of image formed when an object is placed between focus and optic centre?",
    answers:[
        {text:"real, inverted", correct:false},
        {text:"real, erected", correct:false},
        {text:"virtual, inverted", correct:false},
        {text:"virtual, erected", correct:true}
    ]
},
{
    question: "Which group of elements are called 'Halogens'?",
    answers:[
        {text:"IIIA", correct:false},
        {text:"IA", correct:false},
        {text:"VIIA", correct:true},
        {text:"IIA", correct:false}
    ]
},
{
    question: "Which group of elements are unreactive?",
    answers:[
        {text:"VIIIA", correct:true},
        {text:"IIA", correct:false},
        {text:"IIB", correct:false},
        {text:"VIIIB", correct:false}
    ]
}
,    {
    question: "What is the symbol of element Calcium?",
    answers:[
        {text:"C", correct:false},
        {text:"Ca", correct:true},
        {text:"ca", correct:false},
        {text:"CA", correct:false}
    ]
},
{
    question: "Who introduced Stationary orbits in an atom?",
    answers:[
        {text:"Thomson", correct:false},
        {text:"Rutherford", correct:false},
        {text:"Bohr", correct:true},
        {text:"Sommerfeld", correct:false}
    ]
},
{
    question: "Probability of finding an electron is maximum in an atom is called?",
    answers:[
        {text:"orbital", correct:true},
        {text:"orbit", correct:false},
        {text:"sub-shell", correct:false},
        {text:"none", correct:false}
    ]
},
{
    question: "Refractive index is highest in case of?",
    answers:[
        {text:"air", correct:false},
        {text:"glass", correct:false},
        {text:"diamond", correct:true},
        {text:"water", correct:false}
    ]
},
{
    question: "Refractive index of glass",
    answers:[
        {text:"1.33", correct:false},
        {text:"1.0005", correct:false},
        {text:"1.5", correct:true},
        {text:"2.42", correct:false}
    ]
}
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex =0
    score =0
    nextButton.innerHTML = "Next"
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerButtons.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer)
    })
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild   (answerButtons.firstChild)     
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true"
    if(isCorrect){
        selectBtn.classList.add("correct")
        score++;
    }
    else{
        selectBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    })
    nextButton.style.display = "block"
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Start Again"
    nextButton.style.display = "block"
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz()