const number = 12
let guess = 0
guess = parseInt(prompt('enter your guess'), 10)
while (guess !== number) {
  if (guess < number) {
    guess = parseInt(prompt('Your guess is too small, please try again'), 10)
  } else {
    guess = parseInt(prompt('Your guess is too big, please try again'), 10)
  }
}
alert('You guessed correctly! Game over')
