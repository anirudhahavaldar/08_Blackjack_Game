const messageEl = document.getElementById('message-el')
const cardEl = document.getElementById('cards-el')
const sumEl = document.getElementById('sum-el')
const startBtn = document.getElementById('start-btn')
const newCardBtn = document.getElementById('new-card-btn')

let cards = []
let message = ''
let hasBlackjack = false
let isAlive = false

startBtn.addEventListener('click', startGame)

function startGame() {
  const firstCard = getRandomNumber()
  const secondCard = getRandomNumber()
  cards = [firstCard, secondCard]
  renderGame(cards)
  //   console.log(cards)
}

function renderGame(cards) {
  let sum = 0
  cardEl.textContent = 'Cards: '
  for (let card of cards) {
    sum += card
    cardEl.textContent += card + ' '
  }
  sumEl.textContent = 'Sum: ' + sum
  if (sum < 21) {
    isAlive = true
    message = 'Do you want a new card?'
  } else if (sum === 21) {
    message = 'Congrats you have got Blackjack🥳'
    hasBlackjack = true
  } else {
    isAlive = false
    message = 'Better luck next time'
  }
  messageEl.textContent = message
}
newCardBtn.addEventListener('click', newCard)

function newCard() {
  if (isAlive && !hasBlackjack) {
    const newRandomCard = getRandomNumber()
    console.log(cards)
    cards.push(newRandomCard)
    console.log(cards)
    renderGame(cards)
  }
}

function getRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 13 + 1)

  if (randomNumber > 10) return 10
  else if (randomNumber === 1) return 11
  else return randomNumber
}
