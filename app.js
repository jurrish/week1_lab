var pUserName = document.getElementById('user-Name');
var pAnsOne = document.getElementById('ans-one');
// var pElOne = document.getElementById('ans-one');
var pAnsTwo = document.getElementById('ans-two');
var pAnsThree = document.getElementById('ans-three');
var pAnsFour = document.getElementById('ans-four');
var pAnsFive = document.getElementById('ans-five');
// var question = 'what\'s your name?';
var counter = 0;
var els = [pAnsOne, pAnsTwo, pAnsThree, pAnsFour, pAnsFive];
var arrayQuestions = [
  'Is my favorite movie Shawshank Redemption? (Y/N)',
  'Is my favorite food pizza? (Y/N)',
  'Is my favorite color blue? (Y/N)',
  'Guess my age!',
  'Guess my favorite number!'
];
var arrayAnswers = [
  'Y',//['Y', 'YES'] referenced as userInput === answer[0]
  'N',
  'Y',
  31,
  7,
];

var userName = prompt('What\'s your name?');
pUserName.textContent = userName;

function game(question, answer, element) {
  var userInput = prompt(question).toUpperCase();
  var checkBoolean = isNaN(userInput);//turns to boolean T/F value
  if(checkBoolean === true && userInput === answer) {//check to see if the value is a string or boolean
    element.textContent = 'Great Guess!';
    // counter++;
  } else if(userInput !== answer && checkBoolean !== true){
    var newCheck = parseInt(checkAnswer);
  } else if(newCheck === true && userInput === answer){
    element.textContent = 'Great Guess!';
  } else {
    element.textContent = 'Nope. Try again';
    // element.textContent = 'Nope, that is incorrect';
    //turn the value into an integer and run this code:
  }
  //
}

for(i = 0; i < arrayQuestions.length; i++) {
  game(arrayQuestions[i], arrayAnswers[i], els[i]);
}
// function userName() {
//   var userInput = prompt(arrayQuestions[0]).toUpperCase();
//   pUserName.textContent = userInput;//set the content of a node by using node.textContent = "text"/variable (w3schools)
//   arrayAnswers.push(userInput);//the userInput is now stored in an array called arrayAnswers at index 0. This reads arrayAnswers is using the push method on userInput and indexing it.
//   console.log('arrayAnswers : ' + arrayAnswers[0]);
// }
// userName();

// var question = 'what\'s your name?';
// var counter = 0;
// var userName = prompt(question);
// alert('Hello ' + userName + '! Welcome to my Page!');
// console.log(userName);
//
// function questionTwo() {
//   var quesOne = prompt(arrayQuestions[1]).toUpperCase();
//   if(quesOne === 'Y' || quesOne === 'YES') {
//     pAnsOne.textContent = 'You answered: ' + quesOne + '. That is correct! My favorite movie IS Shawshank Redemption';
//     arrayAnswers.push(quesOne);
//     counter++;
//   } else {
//     pAnsOne.textContent = 'Sorry, you guessed: ' + quesOne + ' and that is wrong';
//     arrayAnswers.push(quesOne);
//   }
//   console.log(arrayAnswers[1]);
// }
// questionTwo();
// // var guessFavMovie = prompt('Is my favorite movie Shawshank Redemption? Y/N').toUpperCase();
// // if(guessFavMovie === 'Y' || guessFavMovie === 'YES') {
// //   alert('That is correct!');
// //   counter++;
// //   console.log(userName + ' answered : ' + guessFavMovie);
// // } else {
// //   alert('Incorrect. My favorite movie IS Shawshank Redemption');
// //   console.log(userName + ' answered ' + guessFavMovie);
// // }
// //
// function questionThree() {
//   var quesTwo = prompt(arrayQuestions[2]).toUpperCase();
//   if(quesTwo === 'N' || quesTwo === 'NO'){
//     pAnsTwo.textContent = 'You answered: ' + quesTwo + '. That is correct! My favorite food is not Pizza. I actually like Sushi the most.';
//     arrayAnswers.push(quesTwo);
//     counter++;
//   } else {
//     pAnsTwo.textContent = 'You answered: ' + quesTwo + '. That is incorrect. Pizza is good, but not my favorite.';
//     arrayAnswers.push(quesTwo);
//   }
//   console.log(arrayAnswers[2]);
// }
// questionThree();
// // var guessFavFood = prompt('Is my favorite food pizza? Y/N').toUpperCase();
// // if(guessFavFood === 'N' || guessFavFood === 'NO') {
// //   alert('That\'s correct. My favorite food is sushi, not pizza.');
// //   console.log(userName + ' answered ' + guessFavFood);
// //   counter++;
// // } else if(guessFavFood === '') {
// //   alert('You didn\'t enter a value');
// // } else {
// //   alert('You are incorrect. Pizza is not my favorite food. Sushi is.');
// //   console.log(userName + ' answered ' + guessFavFood);
// // }
// //
// function questionFour() {
//   var quesThree = prompt(arrayQuestions[3]).toUpperCase();
//   if(quesThree === 'Y' || quesThree === 'YES') {
//     pAnsThree.textContent = 'You typed: ' + quesThree + '. That is correct. My favorite color is blue';
//     arrayAnswers.push(quesThree);
//     counter++;
//   } else {
//     pAnsThree.textContent = 'You typed: ' + quesThree + ', and that is incorrect. My favorite color IS blue';
//     arrayAnswers.push(quesThree);
//   }
//   console.log(arrayAnswers[3]);
// }
// questionFour();
// // var guessFavColor = prompt('Is my favorite color blue? Y/N').toUpperCase();
// // if(guessFavColor === 'Y' || guessFavColor === 'YES') {
// //   alert('That\'s correct!');
// //   console.log(userName + ' answered ' + guessFavColor);
// //   counter++;
// // } else if(guessFavColor === '') {
// //   alert('You didn\t enter a value');
// // } else {
// //   alert('Incorrect. My favorite color is blue');
// //   console.log(userName + ' answered ' + guessFavColor);
// // }
// //
// function questionFive() {
//   var quesFour = prompt(arrayQuestions[4]);
//   while (quesFour !== 31) {
//     pAnsFour.textContent = 'You guessed: ' + quesFour + ' Good guess!';
//     prompt(arrayQuestions[4]);
//   } if (quesFour < 31) {
//     pAnsFour.textContent = 'Guess higher!';
//     prompt(arrayQuestions[4]);
//   } else if (quesFour > 31) {
//     pAnsFour.textContent = 'Guess Lower!';
//     prompt(arrayQuestions[4]);
//   } else {
//     pAnsFour.textContent = 'Good Guess!';
//     counter++;
//     arrayAnswers.push(quesFour);
//   }
//   // } else if (quesFour === 31) {
//   //   return pAnsFour.textContent = 'Good Guess!';
//   //   counter++;
//   //   arrayAnswers.push(quesFour);
//   // }
// }
// questionFive();
// //   } else if (quesFour > 31) {
// //     pAnsFour.textContent = 'Guess lower!';
// //   } else {
// //     pAnsFour.textContent = 'Good guess! I am 31';
// //     counter++;
// //   }
// // }
// // var guessMyAge = parseInt(prompt('How old do you think I am?'));
// // if(guessMyAge < 31) {
// //   alert('Sorry ' + userName + ' your guess is too low');
// //   console.log(userName + ' answered ' + guessMyAge);
// // } else if(guessMyAge > 31) {
// //   alert('Sorry ' + userName + ' your guess is too high');
// //   console.log(userName + ' answered ' + guessMyAge);
// // } else {
// //   alert('Good guess!');
// //   console.log(userName + ' answered ' + guessMyAge);
// //   counter++;
// // }
// //
// // var correctGuesses = alert('Congrats, ' + userName + ' you got ' + counter + ' out of 4 questions correct!');
// //
// // var guessMyNumber = parseInt(prompt('What do you think my favorite number is? 1-10'));
// // while (guessMyNumber !== 7) {
// //   if (guessMyNumber < 7) {
// //     guessMyNumber = parseInt(prompt('too low. try again'));
// //   } else if (guessMyNumber > 7) {
// //     guessMyNumber = parseInt(prompt('too high. try again'));
// //   } else if (guessMyNumber === (guessMyNumber.length === 0)) {
// //     prompt('Please enter a numberical answer between 1-10');
// //   } else if (guessMyNumber === 7) {
// //     alert('Good guess!');
// //   }
// // }
