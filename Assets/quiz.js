
const div = document.querySelector("#quiz");
// const renderQuestion = (arr) => {
//     arr.map((item) => {
//       div.innerHTML += `
//       <h1>${item.category}</h1>
//       `
//     });
// };

// const getQuestions = async () => {
//   try {
//     const data = await fetch("https://the-trivia-api.com/v2/questions");
//     const response = await data.json();
//     console.log(response);
//     renderQuestion(response);
//   } catch (error) {
//     console.log("error===>", error);
//   }
// };

// getQuestions();


// const div = document.querySelector('#quiz');
// const renderQuestion  = (arr) => {
//     arr.map((item)=> {
//         div.innerHTML += `<h1>${item.category}</h1>`
//     })
// }


// const getQuestions = async () => {
//     try {
//         const data = await fetch('https://the-trivia-api.com/v2/questions');
//         const response = await data.json();
//         console.log(response);
//         renderQuestion(response);
//     }catch(error) {
//         console.error("error===>",error);
//     }
// }
// getQuestions()




// let apiData;


// const getQuestions = async () => {
//   try {
//     const data = await fetch("https://the-trivia-api.com/v2/questions");
//     const response = await data.json();
//     console.log(response);
//     const questions = response.map(item => item.question.text);
//     console.log(questions)
//     div.innerHTML += `
//     <h1>Question: ${questions}</h1>`
//     renderQuestion(response);
//   } catch (error) {
//     console.log("error===>", error);
//   }
// };

// getQuestions();


// const div = document.querySelector("#quiz");
// const renderQuestion = (arr) => {
//   //   arr.map((item) => {
//   //     div.innerHTML += `
//   //     <h1>${item.}</h1>
//   //     `
//   //   });
  
  
// };


// // declare variable
// let apiData;
// // function to get question
// const getQuestions = async () =>{
//   try{
//     // get data from api
//     const data = await fetch("https://the-trivia-api.com/v2/questions");
//     const response = await data.json();
//     // log repsonse
//     console.log(response);
//     // get only questions from this api
//     const questions = response.map(item=> item.question.text);
//     // log the questions
//     console.log(questions);
//     // render all questions on the screen
//     div.innerHTML+= `
//     <h1>Question: ${questions}</h1>`
//     renderQuestion(response);
//     // using catch to work try properly
//   }catch(error){
//     console.log(`error ==>`,error);
//   }
// }
// // call the function
// getQuestions();


// // make function to render questions by index
// const renderQuestion = (arr) =>{
//   // using map for  get items and index and render
//   arr.map((item ,index)=>{
//     div.innerHTML+=`
//     <h1>Question: ${index} ${item.question.text}</h1>`
//   })
// }



// // declare an empty variable;
// let apiData;
// // make function to get questions using async await
// const getQuestions  = async () =>{
//   // using  try catch method to get api
//  try{
//   // get api data using fecth
//  const data = await fetch('https://the-trivia-api.com/v2/questions');
// //  making response variable to get data from api in array form
//  const response = await data.json();
// //  log the response to check
//  console.log(response);
// //  declare questions variable and using map on response to get only questions
//  const questions = response.map(item=> item.question.text);
// //  log the questions to check
//  console.log(questions);
// //  render the questions on screen
//  div.innerHTML += `
//  <h1>Questions: ${questions}</h1>`
// //  call the renderQuestion function to get response data in the below function
//  renderQuestions(response);
// //  using catch to work try properly
//  }catch(error){
//   // log the error
//   console.log(`error==>`,error);
//  }
// }
// // call the function
// getQuestions();

// // Make function to show all questions one by one;
// const renderQuestions= (arr) =>{
// arr.map((item,index)=>{
//   div.innerHTML+= `
//   <h1>Question: ${index} ${item.question.text}</h1>`
// })
// }


// // Make function to get data from api;
// const getQuestions = async ()=>{
//   // Using try-Catch to get data;
//   try{
//     // declare data and using fetch method in the data;
//     const data = await fetch('https://the-trivia-api.com/v2/questions');
//     // Declare response and using json to convert data into an array;
//     const response = await data.json();
//     // log the response to check data in array form;
//     console.log(response);
//     // Declare questions and use map method on response to render item and index on screen;
//     const questions = response.map((item,index)=>{
//       return item.question.text + index
//     });
//     // log the questions to check;
//     console.log(questions);
//     // render all quesions on the screen;
//     div.innerHTML += `
//     <h1>${questions}</h1>`
//     // call the renderQuestions function to get data from response in the  renderQuestion function;
//     renderQuestions(response);
//     // Using catch method to work try properly;
//   }catch(error){
//     console.log(`error==>`,error);
//   }
// }
// // Call the getQuestion function to work;
// getQuestions();


// let indexQuestion = 0;
// // Make renderQuestions function to render questions step by step on screen;
// const renderQuestions = (response) =>{
//   // Using map method on resppnse to render questions step by step on screen;
//   response.map((item,indexQuestion)=>{
//     div.innerHTML+= `
//     <h1>Q ${indexQuestion} ${item.question.text}</h1>`
//   })
// }


// // Making func to get questions from api
// const  getQuestions = async ()=>{
//     // Using try-catch method to get data
//     try{
//         // Using fetch method
//         const data = await fetch('https://the-trivia-api.com/v2/questions');
//         // Declare response and apply .json on data to convert into an array
//         const response = await data.json();
//         // Log the response to check
//         console.log(response);
//         // Declare questions and using map method on response to get only questions and index of questions
//         const questions = response.map((item,index)=>{
//             return `Question ${index}) ${item.question.text}<br>`
//         })
//         // Log the questions to check
//         console.log(questions);
//         // Render the questions on the screen
//         div.innerHTML += `
//         <h1>${questions}</h1>`
//         // Calling the below func to get data from response and taking response as an argument to work
//         renderQuestions(response);
//         // Using catch method to work try properly
//     }catch(error){
//         // Logging the error ,if there an error in the api
//         console.log(`error==>`,error);
//     }
// }
// // Calling the func to work
// getQuestions()
    
// // Making func to render questions by index on the screen
// const renderQuestions = (arr) =>{
//     // Applying map method on the arr which was taken as an argument
//  arr.map((item,index)=>{
//     div.innerHTML+=`
//     <h1>Question ${index}) ${item.question.text}</h1>`
//  })   
// }