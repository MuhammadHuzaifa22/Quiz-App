const nextButton = document.querySelector('#next-button');
const questionContainer = document.querySelector('#questions-container');
const answersList = document.getElementById('answers');


let questions = [];
let currentIndex = 0;
let incorrectAnswers;
fetch('https://the-trivia-api.com/v2/questions')
.then(response => response.json())
.then(data => {
    console.log(data)
    questions = data.map(item => item.question.text);
    incorrectAnswers = data.map( item => item.incorrectAnswers);
    displayQuestion()
})
    .catch(error => {
        questionContainer.innerHTML = 'Failed to load questions';
        console.error('Error fetching questions:', error);
    });
function displayQuestion(){
    if(questions.length > 0){
          questionContainer.innerHTML = `
          <h4 style="font-weight:lighter">Question <b>${currentIndex + 1}</b> of <b>${questions.length}:</b> </h4> <p>${currentIndex + 1}.) ${questions[currentIndex]}</p>
          <li>${incorrectAnswers[currentIndex]}</li>`

    }
}




nextButton.addEventListener('click',()=>{
    if(currentIndex < questions.length + 0){
        currentIndex = currentIndex + 1;
        displayQuestion();
        if(currentIndex >= questions.length + 0 && incorrectAnswers[] > questions.length + 0){
            document.write(`Questions completed.`)
            console.log(`Questions completed.`)
        }
    }
})
 