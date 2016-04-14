var pUserName = document.getElementById('user-Name');
var pAnsOne = document.getElementById('ans-one');
// var pElOne = document.getElementById('ans-one');
var pAnsTwo = document.getElementById('ans-two');
var pAnsThree = document.getElementById('ans-three');
// var question = 'what\'s your name?';
var counter = 0;

var arrayQuestions = [
  'what\'s your name?',
  'Is my favorite movie Shawshank Redemption? (Y/N)',
  'Is my favorite food pizza? (Y/N)',
  'Is my favorite color blue? (Y/N)'
];
var arrayAnswers = [];

function userName() {
  var userInput = prompt(arrayQuestions[0]).toUpperCase();
  pUserName.textContent = userInput;//set the content of a node by using node.textContent = "text"/variable (w3schools)
  arrayAnswers.push(userInput);//the userInput is now stored in an array called arrayAnswers at index 0. This reads arrayAnswers is using the push method on userInput and indexing it.
  console.log('arrayAnswers : ' + arrayAnswers[0]);
}
userName();

// var question = 'what\'s your name?';
// var counter = 0;
// var userName = prompt(question);
// alert('Hello ' + userName + '! Welcome to my Page!');
// console.log(userName);
//
function questionTwo() {
  var quesOne = prompt(arrayQuestions[1]).toUpperCase();
  if(quesOne === 'Y' || quesOne === 'YES') {
    pAnsOne.textContent = 'You answered: ' + quesOne + '. That is correct! My favorite movie IS Shawshank Redemption';
    arrayAnswers.push(quesOne);
    counter++;
  } else {
    pAnsOne.textContent = 'Sorry, you guessed: ' + quesOne + ' and that is wrong';
    arrayAnswers.push(quesOne);
  }
  console.log(arrayAnswers[1]);
}
questionTwo();
// var guessFavMovie = prompt('Is my favorite movie Shawshank Redemption? Y/N').toUpperCase();
// if(guessFavMovie === 'Y' || guessFavMovie === 'YES') {
//   alert('That is correct!');
//   counter++;
//   console.log(userName + ' answered : ' + guessFavMovie);
// } else {
//   alert('Incorrect. My favorite movie IS Shawshank Redemption');
//   console.log(userName + ' answered ' + guessFavMovie);
// }
//
function questionThree() {
  var quesTwo = prompt(arrayQuestions[2]).toUpperCase();
  if(quesTwo === 'N' || quesTwo === 'NO'){
    pAnsTwo.textContent = 'You answered: ' + quesTwo + '. That is correct! My favorite food is not Pizza. I actually like Sushi the most.';
    arrayAnswers.push(quesTwo);
    counter++;
  } else {
    pAnsTwo.textContent = 'You answered: ' + quesTwo + '. That is incorrect. Pizza is good, but not my favorite.';
    arrayAnswers.push(quesTwo);
  }
  console.log(arrayAnswers[2]);
}
questionThree();
// var guessFavFood = prompt('Is my favorite food pizza? Y/N').toUpperCase();
// if(guessFavFood === 'N' || guessFavFood === 'NO') {
//   alert('That\'s correct. My favorite food is sushi, not pizza.');
//   console.log(userName + ' answered ' + guessFavFood);
//   counter++;
// } else if(guessFavFood === '') {
//   alert('You didn\'t enter a value');
// } else {
//   alert('You are incorrect. Pizza is not my favorite food. Sushi is.');
//   console.log(userName + ' answered ' + guessFavFood);
// }
//
function questionFour() {
  var quesThree = prompt(arrayQuestions[3]).toUpperCase();
  if(quesThree === 'Y' || quesThree === 'YES') {
    pAnsThree.textContent = 'You typed: ' + quesThree + '. That is correct. My favorite color is blue';
    arrayAnswers.push(quesThree);
    counter++;
  } else {
    pAnsThree.textContent = 'You typed: ' + quesThree + ', and that is incorrect. My favorite color IS blue';
    arrayAnswers.push(quesThree);
  }
  console.log(arrayAnswers[3]);
}
questionFour();
// var guessFavColor = prompt('Is my favorite color blue? Y/N').toUpperCase();
// if(guessFavColor === 'Y' || guessFavColor === 'YES') {
//   alert('That\'s correct!');
//   console.log(userName + ' answered ' + guessFavColor);
//   counter++;
// } else if(guessFavColor === '') {
//   alert('You didn\t enter a value');
// } else {
//   alert('Incorrect. My favorite color is blue');
//   console.log(userName + ' answered ' + guessFavColor);
// }
//
// var guessMyAge = parseInt(prompt('How old do you think I am?'));
// if(guessMyAge < 31) {
//   alert('Sorry ' + userName + ' your guess is too low');
//   console.log(userName + ' answered ' + guessMyAge);
// } else if(guessMyAge > 31) {
//   alert('Sorry ' + userName + ' your guess is too high');
//   console.log(userName + ' answered ' + guessMyAge);
// } else {
//   alert('Good guess!');
//   console.log(userName + ' answered ' + guessMyAge);
//   counter++;
// }
//
// var correctGuesses = alert('Congrats, ' + userName + ' you got ' + counter + ' out of 4 questions correct!');
//
// var guessMyNumber = parseInt(prompt('What do you think my favorite number is? 1-10'));
// while (guessMyNumber !== 7) {
//   if (guessMyNumber < 7) {
//     guessMyNumber = parseInt(prompt('too low. try again'));
//   } else if (guessMyNumber > 7) {
//     guessMyNumber = parseInt(prompt('too high. try again'));
//   } else if (guessMyNumber === (guessMyNumber.length === 0)) {
//     prompt('Please enter a numberical answer between 1-10');
//   } else if (guessMyNumber === 7) {
//     alert('Good guess!');
//   }
// }
