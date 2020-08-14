// QUIZZ QUESTIONS
var questions = [
    {
        "question" : "Urdu was declared national language of Pakistan in",
        "option1" : "April 1950",
        "option2" : "April 1955",
        "option3" : "April 1954",
        "option4" : "April 1952",
        "answer" : "13",
    },
    {
        "question" : "In which province maximum languages are spoken?",
        "option1" : "Sindh",
        "option2" : "Punjab",
        "option3" : "Balochistan",
        "option4" : "KPK",
        "answer" : "3",
    },
    {
        "question" : "Which Urdu has been taken from the following language?",
        "option1" : "Persian",
        "option2" : "Arabic",
        "option3" : "Turkish",
        "option4" : "None of these",
        "answer" : "3",
    },
    {
        "question" : "World Urdu means:?",
        "option1" : "Belivers",
        "option2" : "A Group of students",
        "option3" : "Army",
        "option4" : "None of these",
        "answer" : "3",
    },
    {
        "question" : "How many letters are there in Urdu Alphabets?",
        "option1" : "35",
        "option2" : "36",
        "option3" : "37",
        "option4" : "39",
        "answer" : "3",
    },
     
]
var currentQues = 0;
var score = 0;
var totQues = questions.length;

var container = document.getElementById('quiz-container');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestions(questionIndex){
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};
function nextQuestion(){
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
        alert('Please select your answer.');
        return;
    }
    var answer = selectedOption.value;
    if(questions[currentQues].answer == answer){
        score += 10;
    }
    selectedOption.checked = false;
    currentQues++;
    if(currentQues == totQues - 1){
        nextButton.textContent = 'Finish';
    }
    if(currentQues == totQues){
        container.style.display = 'none';
        resultCont.style.display = '';
        if(score > 30) {
            resultCont.textContent = "You are Win the quizz"
        }else {
            resultCont.textContent = "You are not clear the quizz "
        }
        return;
    }
    loadQuestions(currentQues);
}
loadQuestions(currentQues);