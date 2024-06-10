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
    questions = data.map(item =>({
        question: item.question.text,
        incorrectAnswers: item.incorrectAnswers
    }))
    displayQuestion(data)
    
})
.catch(error => {
    questionContainer.innerHTML = 'Failed to load questions';
    console.error('Error fetching questions:', error);
});


function displayQuestion(data){
    const questionIndex = 0; 
    const selectedQuestion = questions[questionIndex];
    console.log(selectedQuestion)
    if(questions.length > 0){
          questionContainer.innerHTML = `
          <h4 style="font-weight:lighter">Question <b>${currentIndex + 1}</b> of <b>${questions.length}:</b> </h4> <p>${currentIndex + 1}. ${selectedQuestion.question} </h4>`
          displayAnswers(questions[currentIndex].incorrectAnswers);
    }
}

//   // Display incorrect answers
function displayAnswers(answers) {
    answersList.innerHTML = '';
    answers.forEach(answer => {
        const li = document.createElement('li');
        li.textContent = answer;
        answersList.appendChild(li);
    });
}



nextButton.addEventListener('click',()=>{
    if(currentIndex < questions.length - 1){
        currentIndex = currentIndex + 1;
        displayQuestion();
        
    }else{
        document.write(`Questions completed`)
    }
})
 

