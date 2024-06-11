const nextButton = document.querySelector('#next-button');
const answersList = document.getElementById('answers');
const quest = document.getElementById('quest');



let questions = [];
        let currentQuestionIndex = 0;

        fetch('https://the-trivia-api.com/v2/questions')
            .then(response => response.json())
            .then(data => {
                questions = data.map(item => ({
                    question: item.question.text,
                    incorrectAnswers: item.incorrectAnswers,
                    correctAnswer: item.correctAnswer
                }));
                document.getElementById("result-button").style.display = 'none'
                showQuestion();
            })
            .catch(error => {
                document.getElementById('question-container').innerHTML = 'Failed to load questions';
                console.error('Error fetching questions:', error);
            });
            
        document.getElementById('next-button').addEventListener('click', () => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            }
            
             else {
                quest.innerHTML = '';
                document.getElementById('question-container').innerHTML = '<h2>Questions completed</h2>';
                document.getElementById('answers-container').innerHTML = '';
                document.getElementById("next-button").style.display = 'none'
                document.getElementById("result-button").style.display = 'block'
                               

            }
        });
const ul = document.querySelector('ul');
        function showQuestion() {
            const question = questions[currentQuestionIndex];
            document.getElementById('quest').innerHTML = `<h3 style="font-weight:lighter">Question <b>${currentQuestionIndex + 1}</b> of <b>${questions.length}:</b></h3>`
            document.getElementById('question-container').innerHTML = `<h3 style="font-weight:lighter"><b>Q${currentQuestionIndex + 1}:</b> <b>${question.question}</b></h3>`;
            const answersContainer = document.getElementById('answers-container');
            answersContainer.innerHTML = '';

            const allAnswers = [...question.incorrectAnswers, question.correctAnswer];
            allAnswers.sort(() => Math.random() - 0.5); // Shuffle the answers
            allAnswers.forEach(answer => {
                const answerElement = document.createElement('ul');
                answerElement.innerHTML = `<li style="list-style:none;font-weight:lighter"><b><input style="margin-right:1%" type="radio" name="choice" class="choice" id=${answer} value=${answer}><label  for=${answer}>${answer}</label></b></li>`;
                answersContainer.appendChild(answerElement);
            });
        }

function result(){
    window.location = 'result.html'
}





nextButton.addEventListener("click", () => {
    const choice = document.querySelectorAll(".choice");
    div.innerHTML = "";
    choice.forEach((item) => {
      if (item.checked) {
        if (item.nextSibling.innerHTML === questionsArr[index].correctAnswer) {
          result += 10;
        }
      }
    });
    index += 1;
    renderQuestion(questionsArr);
  });





// how to get checked value from radio btn

// const input = document.querySelectorAll(".gender");
// function hello() {
//     let isChecked = false;

//     input.forEach((item) => {
//         if (item.checked) {
//             console.log(item.value);
//             isChecked = true;
//         }
//     });

//     if (!isChecked) {
//         alert("Please check a value.");
//     }
// }




