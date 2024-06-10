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
        incorrectAnswers: item.incorrectAnswers,
     correctAnswer: item.correctAnswer
    }))
    displayQuestion(currentIndex)
    // console.log(questions[currentIndex])
    // let answers = questions[currentIndex].incorrectAnswers.concat(questions[currentIndex].correctAnswer);
    // answers = shuffleArray(answers);
    // console.log(answers)
})
.catch(error => {
    questionContainer.innerHTML = 'Failed to load questions';
    console.error('Error fetching questions:', error);
});



// answers = shuffleArray(answers);

function displayQuestion(index){
    
    if(questions.length > 0){
        questionContainer.innerHTML = `
        <h3 style="font-weight:lighter">Question <b>${currentIndex + 1}</b> of <b>${questions.length}:</b> </h3> <h5><b>${currentIndex + 1}.)</b> ${questions[currentIndex].question}</h5>`
        console.log(questions[currentIndex].question)
        const selectedQuestion = questions[index];
        console.log(selectedQuestion.incorrectAnswers.concat(selectedQuestion.correctAnswer))
            let answers = selectedQuestion.incorrectAnswers.concat(selectedQuestion.correctAnswer);
        answers = shuffleArray(answers);
        // console.log(answers)
          answers = shuffleArray(answers);      
        //   console.log(answerArr)
        displayAnswers(answers);
    }
}

//   // Display incorrect answers and correct answers
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
 

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

