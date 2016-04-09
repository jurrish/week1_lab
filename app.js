var question = 'what\'s your name?';
var counter = 0;
var userName = prompt(question);
alert('Hello ' + userName + '! Welcome to my Page!');
console.log(userName);

var guessFavMovie = prompt('Is my favorite movie Shawshank Redemption? Y/N');
guessFavMovie = guessFavMovie.toUpperCase();
if(guessFavMovie === 'Y') {
  alert('That is correct!');
  counter++;
  console.log(userName + ' answered : ' + guessFavMovie);
} else {
  alert('Incorrect. My favorite movie IS Shawshank Redemption');
  console.log(userName + ' answered ' + guessFavMovie);
}

var guessFavFood = prompt('Is my favorite food pizza? Y/N');
guessFavFood = guessFavFood.toUpperCase();
if(guessFavFood !== 'Y') {
  alert('That\'s correct. My favorite food is sushi, not pizza.');
  console.log(userName + ' answered ' + guessFavFood);
  counter++;
} else {
  alert('You are incorrect. Pizza is not my favorite food. Sushi is.');
  console.log(userName + ' answered ' + guessFavFood);
}

var guessFavColor = prompt('Is my favorite color blue? Y/N');
guessFavColor = guessFavColor.toUpperCase();
if(guessFavColor === 'Y') {
  alert('That\'s correct!');
  console.log(userName + ' answered ' + guessFavColor);
  counter++;
} else {
  alert('Incorrect. My favorite color is blue');
  console.log(userName + ' answered ' + guessFavColor);
}

var guessMyNumber = prompt('What do you think my favorite number is? Guess 1-10');
if(guessMyNumber < 7) {
  alert('Sorry ' + userName + ' your guess is too low');
  console.log(userName + ' answered ' + guessMyNumber);
} else if(guessMyNumber > 7) {
  alert('Sorry ' + userName + ' your guess is too high');
  console.log(userName + ' answered ' + guessMyNumber);
} else {
  alert('Great guess! My favorite number is 7');
  console.log(userName + ' answered ' + guessMyNumber);
  counter++;
}

var correctGuesses = alert('Congrats, ' + userName + ' you got ' + counter + ' out of 4 questions correct!');
