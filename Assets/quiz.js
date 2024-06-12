const nextButton = document.querySelector('#next-button');
const answersList = document.getElementById('answers');
const quest = document.getElementById('quest');
const div = document.querySelector("#quiz");
const resultButton = document.getElementById('result-button');


let result = 0;
let index = 0;
let totalMarks = 0;


let questions = [];
let currentQuestionIndex = 0;

const getQuestions = async () => {
    //using async await
  
    try {
      const data = await fetch("https://the-trivia-api.com/v2/questions");
      const response = await data.json();
      console.log(response);
      totalMarks = response.length * 10;
      questions = response;
      console.log("TotalMarks:"+ " " +totalMarks)
      showQuestions(response);
    } catch (error) {
      console.log("error===>", error);
    }
  
  };
  getQuestions();

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

        function showQuestions(arr){
            
            currentQuestionIndex++;
            if (index < questions.length) {
                const answerArr = [
                  ...arr[index].incorrectAnswers,
                  arr[index].correctAnswer,
                ];
                resultButton.style.display = 'none';
                div.innerHTML += `
                <h2 style="font-weight:lighter;color:brown">Question <b>${currentQuestionIndex} </b>of <b>${questions.length} :</b></h2>
                <h3 style="font-weight:500;color:black"><b>Q${index + 1}</b>: ${arr[index].question.text}</h3>
                <ul>
                    ${shuffleArray(answerArr).map((items) => `
                    <card >
                    <li id="jk" >
                    <input type="radio" name="choice" class="choice" id="${items}" value="${items}">
                    <label for="${items}" class="radio-label" ><span id="lB">${items}</span></label>
                </li>
            `).join('')}
        </ul>
        </card>
    `;
              
              } else {
                   console.log("question completed");
                   div.innerHTML = `<h2 style="color:green;text-align:center;">Questions Completed</h2>`
                    console.log(result)
                    resultButton.style.display = 'block';
                    nextButton.style.display = 'none'            
                    localStorage.setItem(
                    "result",
                    JSON.stringify({
                    totalMarks,
                    result,
                })
                );
              }
            
            }
            
              
        

function Result(){
    window.location = 'result.html'
    localStorage.setItem(
        "result",
        JSON.stringify({
          totalMarks,
          result,
        })
      );

}



let chechArr = [];


let unansweredQuestions = 0;
nextButton.addEventListener("click", () => {
    const choice = document.querySelectorAll(".choice");
    div.innerHTML = "";
    let answerSelected = false; 

    choice.forEach((item) => {
      if (item.checked) {
        answerSelected = true;
        if (item.value === questions[index].correctAnswer) {
            result += 10;
        // console.log(questions[index].incorrectAnswers)
        const quest = index + 1;
        const Correct =questions[index].question.text
        chechArr.push(`Question no ${quest}: ${Correct} Answer:${item.value}.`)
        console.log(chechArr);
        
        console.log(Correct)
        console.log(chechArr.length)
        const chechArrJSON = JSON.stringify(chechArr);
        localStorage.setItem('correct', chechArrJSON);
        const number = chechArr.length;
        localStorage.setItem('numberKey', number)
        
        }
      }
    });
    if (!answerSelected) {
    message = 'no answer is selected';
    console.log(message);
    unansweredQuestions++;
    console.log(unansweredQuestions)
    if(unansweredQuestions === 10){
      const numkey = unansweredQuestions;
      // console.log(numkey)
      localStorage.setItem('numkey',numkey);
    }
  }
        div.innerHTML = "";  
        index += 1;
        showQuestions(questions);
  
  });
  