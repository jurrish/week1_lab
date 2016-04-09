var question = 'what\'s your name?';
var userName = prompt(question);
alert('Hello ' + userName + '! Welcome to my Page!');
console.log(userName);

var guessFavMovie = prompt('Is my favorite movie Shawshank Redemption? Y/N');
guessFavMovie = guessFavMovie.toUpperCase();
if(guessFavMovie === 'Y' || 'YES') {
  alert('That is correct!');
  console.log(userName + ' answered ' + guessFavMovie);
} else {
  alert('Incorrect! Shawshank Redemption is my favorite movie');
  console.log(userName + ' answered ' + guessFavMovie);
}

// var guessFavFood = prompt('Is my favorite food pizza? Y/N');
// if(guessFavFood !== 'Y'){
//   alert('That\'s correct. My favorite food is sushi, not pizza.');
//   console.log(userName + ' answered ' + guessFavFood);
// } else {
//   alert('You are incorrect. Pizza is not my favorite food. Sushi is.');
//   console.log(userName + ' answered ' + guessFavFood);
// }
//
// var guessFavColor = prompt('Is my favorite color blue? Y/N');
// if(guessFavColor === 'Y') {
//   alert('That\'s correct!');
//   console.log(userName + ' answered ' + guessFavColor);
// } else {
//   alert('Incorrect. My favorite color is blue');
//   console.log(userName + ' answered ' + guessFavColor);
// }
//
// var guessMyNumber = prompt('What do you think my favorite number is? Guess 1-10');
// if(guessMyNumber < 7) {
//   alert('Sorry ' + userName + ' your guess is too low');
//   console.log(userName + ' answered ' + guessMyNumber);
// } else if(guessMyNumber > 7) {
//   alert('Sorry ' + userName + ' your guess is too high');
//   console.log(userName + ' answered ' + guessMyNumber);
// } else {
//   alert('Great guess! My favorite number is 7');
//   console.log(userName + ' answered ' + guessMyNumber);
// }
