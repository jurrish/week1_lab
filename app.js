var question = 'what\'s your name?';
var counter = 0;
var userName = prompt(question);
alert('Hello ' + userName + '! Welcome to my Page!');
console.log(userName);

var guessFavMovie = prompt('Is my favorite movie Shawshank Redemption? Y/N').toUpperCase();
if(guessFavMovie === 'Y' || guessFavMovie === 'YES') {
  alert('That is correct!');
  counter++;
  console.log(userName + ' answered : ' + guessFavMovie);
} else {
  alert('Incorrect. My favorite movie IS Shawshank Redemption');
  console.log(userName + ' answered ' + guessFavMovie);
}

var guessFavFood = prompt('Is my favorite food pizza? Y/N').toUpperCase();
if(guessFavFood === 'N' || guessFavFood === 'NO') {
  alert('That\'s correct. My favorite food is sushi, not pizza.');
  console.log(userName + ' answered ' + guessFavFood);
  counter++;
} else if(guessFavFood === '') {
  alert('You didn\'t enter a value');
} else {
  alert('You are incorrect. Pizza is not my favorite food. Sushi is.');
  console.log(userName + ' answered ' + guessFavFood);
}

var guessFavColor = prompt('Is my favorite color blue? Y/N').toUpperCase();
if(guessFavColor === 'Y' || guessFavColor === 'YES') {
  alert('That\'s correct!');
  console.log(userName + ' answered ' + guessFavColor);
  counter++;
} else if(guessFavColor === '') {
  alert('You didn\t enter a value');
} else {
  alert('Incorrect. My favorite color is blue');
  console.log(userName + ' answered ' + guessFavColor);
}

var guessMyAge = parseInt(prompt('How old do you think I am?'));
if(guessMyAge < 31) {
  alert('Sorry ' + userName + ' your guess is too low');
  console.log(userName + ' answered ' + guessMyAge);
} else if(guessMyAge > 31) {
  alert('Sorry ' + userName + ' your guess is too high');
  console.log(userName + ' answered ' + guessMyAge);
} else {
  alert('Good guess!');
  console.log(userName + ' answered ' + guessMyAge);
  counter++;
}

var correctGuesses = alert('Congrats, ' + userName + ' you got ' + counter + ' out of 4 questions correct!');

var guessMyNumber = parseInt(prompt('What do you think my favorite number is? 1-10'));
while (guessMyNumber !== 7) {
  if (guessMyNumber < 7) {
    guessMyNumber = parseInt(prompt('too low. try again'));
  } else if (guessMyNumber > 7) {
    guessMyNumber = parseInt(prompt('too high. try again'));
  } else if (guessMyNumber === (guessMyNumber.length === 0)) {
    prompt('Please enter a numberical answer between 1-10');
  } else if (guessMyNumber === 7) {
    alert('Good guess!');
  }
}
