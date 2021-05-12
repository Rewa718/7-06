const number = 12
let guess = 0
guess = parseInt(prompt('enter your guess'))
while (guess != number) {
  if (guess < 12) {
    guess = prompt('Your guess is too small, please try again')
  } else {
    guess = prompt('Your guess is too big, please try again')
  }
}
alert('You guessed correctly! Game over')
