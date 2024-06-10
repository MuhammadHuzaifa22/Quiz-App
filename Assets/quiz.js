const nextButton = document.querySelector('#next-button');
// const questionContainer = document.querySelector('#question-container');
const answersList = document.getElementById('answers');


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
            } else {
                document.getElementById('question-container').innerHTML = 'Questions completed';
                document.getElementById('answers-container').innerHTML = '';
                const  checkResult = document.getElementById('next-button').innerHTML ='Check Result';
                if(function CheckResult()){
                    window.location = 'result.html'
                }
            }
        });

        function showQuestion() {
            const question = questions[currentQuestionIndex];
            document.getElementById('question-container').innerHTML = `<h3 style="font-weight:lighter"><b>Q${currentQuestionIndex + 1}:</b> ${question.question}</h3>`;
            const answersContainer = document.getElementById('answers-container');
            answersContainer.innerHTML = '';

            const allAnswers = [...question.incorrectAnswers, question.correctAnswer];
            allAnswers.sort(() => Math.random() - 0.5); // Shuffle the answers

            allAnswers.forEach(answer => {
                const answerElement = document.createElement('div');
                answerElement.innerHTML = answer;
                answersContainer.appendChild(answerElement);
            });
        }