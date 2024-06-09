const nextButton = document.querySelector('#next-button');
const questionContainer = document.querySelector('#questions-container');


let questions = [];
let currentIndex = 0;


fetch('https://the-trivia-api.com/v2/questions')
.then(response => response.json())
console.log()
.then(data => {
    questions = data.map(item => item.question.text);
    displayQuestion()
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




nextButton.addEventListener('click',()=>{
    if(currentIndex < questions.length + 0){
        currentIndex = currentIndex + 1;
        displayQuestion();
        if(currentIndex >= questions.length + 0){
            document.write(`Questions completed.`)
            console.log(`Questions completed.`)
        }
    }
})
 