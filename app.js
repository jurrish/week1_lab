var pUserName = document.getElementById('user-Name');
var pAnsOne = document.getElementById('ans-one');
var pAnsTwo = document.getElementById('ans-two');
var pAnsThree = document.getElementById('ans-three');
var pAnsFour = document.getElementById('ans-four');
var pAnsFive = document.getElementById('ans-five');
var pCorrectGuesses = document.getElementById('correctGuesses');

var imageOne = document.getElementById('image-one');
var imageTwo = document.getElementById('image-two');
var imageThree = document.getElementById('image-three');
var imageFour = document.getElementById('image-four');
var imageFive = document.getElementById('image-five');
// var ele = document.getElementById('correct');
// var eleTwo = document.getElementById('wrong');
var counter = 0;

var els = [pAnsOne, pAnsTwo, pAnsThree, pAnsFour, pAnsFive];
var imgArray = [imageOne, imageTwo, imageThree, imageFour, imageFive];

var arrayQuestions = [
  'Is my favorite movie Shawshank Redemption? (Y/N)',
  'Is my favorite food pizza? (Y/N)',
  'Is my favorite color blue? (Y/N)',
  'Guess my age!',
  'Guess my favorite number! (1-10)'
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

function game(question, answer, element, image) {
  var userInput = prompt(question).toUpperCase();
  if(isNaN(parseInt(userInput)) === false) {//if the value in the string is a number, then do something

   //isNaN(parseInt(userInput))===false [checking if it's a number value, turning it into a boolean]
    userInput = parseInt(userInput);//if it's a number, this turns the   string value into a true number to be evaluated
  }
  if (typeof answer === 'number') {
    var newCounter = 0;
    while (newCounter <= 3) {
      if(userInput === answer) {//just checking if it's a number or not - if it is, DO THIS:
        image.src = 'http://www.slyck.com/newspics/gdr.jpg';
        element.textContent = 'Good Guess!';
        element.className = 'correct';
        counter++;
        break;
      } else if(userInput !== answer) {
        image.src = 'https://iwanticewater.files.wordpress.com/2014/12/bob_barker_talks_beating_up_adam_sandler_in_happy_gilmore.jpg?w=395&h=222&crop=1';
        element.textContent = 'try again!';
        element.className = 'wrong';
        newCounter++;
        console.log('running');
        userInput = parseInt(prompt('try again!'));
      }
    }
  } else {//all other data types(ie - other strings)
    console.log('your number values are correct. we\'re checking if user inputted a string value');
    if(userInput === answer){
      image.src = 'http://www.slyck.com/newspics/gdr.jpg';
      element.textContent = 'Correct!';
      element.className = 'correct';
      counter++;
    } else {
      image.src = 'https://iwanticewater.files.wordpress.com/2014/12/bob_barker_talks_beating_up_adam_sandler_in_happy_gilmore.jpg?w=395&h=222&crop=1';
      element.textContent = 'newwwp';
      element.className = 'wrong';
    }
  }
  document.getElementById('correctGuesses').textContent = userName + ' you got : ' + counter + ' answers out of ' + arrayAnswers.length + ' correct!';
}

// function colorChange() {
//   if(userInput === answer) {
//     ele.addClass = 'correct';
//   } else {
//     ele.addClass = 'wrong';
//   }
// }
//
// colorChange();

for(var i = 0; i < arrayQuestions.length; i++) {
  game(arrayQuestions[i], arrayAnswers[i], els[i], imgArray[i]);
}
