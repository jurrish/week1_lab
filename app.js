var pUserName = document.getElementById('user-Name');
var pAnsOne = document.getElementById('ans-one');
var pAnsTwo = document.getElementById('ans-two');
var pAnsThree = document.getElementById('ans-three');
var pAnsFour = document.getElementById('ans-four');
var pAnsFive = document.getElementById('ans-five');
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
if(isNaN(parseInt(userInput)) === false) {//if the value in the string is a number, then do something

   //isNaN(parseInt(userInput))===false [checking if it's a number value, turning it into a boolean]
  userInput = parseInt(userInput);//if it's a number, this turns the string value into a true number to be evaluated
}
if (typeof answer === 'number') {
    var newCounter = 0;
    while (newCounter <= 3) {
      if(userInput === answer) {//just checking if it's a number or not - if it is, DO THIS:
        element.textContent = 'Good Guess!';
        break;
      } else if(userInput !== answer) {
        element.textContent = 'try again!';
        newCounter++;
        console.log('running');
        userInput = parseInt(prompt('try again!'));
      }
    }
  } else {
    console.log('your number values are correct. we\'re checking if user inputted a string value');
    if(userInput === answer){
      element.textContent = 'Correct!';
    } else {
      element.textContent = 'Newwwp';
    }
  }
}

for(var i = 0; i < arrayQuestions.length; i++) {
  game(arrayQuestions[i], arrayAnswers[i], els[i]);
}
