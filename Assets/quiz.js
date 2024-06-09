const prevButton = document.querySelector('#prev-button');
const nextButton = document.querySelector('#next-button');
const questionContainer = document.querySelector('#questions-container');


let questions = [];
let currentIndex = 0;


fetch('https://the-trivia-api.com/v2/questions')
.then(response => response.json())
.then(data => {
    questions = data.map(item => item.question.text);
    displayQuestion()
    updateButtons()
    })
    .catch(error => {
        questionContainer.innerHTML = 'Failed to load questions';
        console.error('Error fetching questions:', error);
    });
function displayQuestion(){
    if(questions.length > 0){
          questionContainer.innerHTML = `${currentIndex + 1}.) ${questions[currentIndex]}`
    }
}

function updateButtons(){
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === questions.length -1;
}
prevButton.addEventListener('click',()=>{
    if(currentIndex > 0){
        currentIndex = currentIndex -1;
    }
})