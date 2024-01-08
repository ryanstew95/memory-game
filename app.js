const cardArray = [
  {
    name: 'fries',
    img: 'images/fries.png',
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png',
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png',
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png',
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png',
  },
  {
    name: 'pizza',
    img: 'images/pizza.png',
  },
  {
    name: 'fries',
    img: 'images/fries.png',
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png',
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png',
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png',
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png',
  },
  {
    name: 'pizza',
    img: 'images/pizza.png',
  }
];

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard () {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    gridDisplay.appendChild(card)
  }
}
createBoard()

function checkMatch() {
  const cards = document.querySelectorAll('#grid img');
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];
  console.log('check for match!');

  if (optionOneId == optionTwoId) {
    alert('you have clicked the same image!');
    cards[optionOneId].setAttribute('src', 'images/blank.png');

  }

  if (cardsChosen[0] == cardsChosen[1]) {
    alert('You found a match!');

    cards[optionOneId].removeEventListener('click', flipCard);
    cards[optionTwoId].removeEventListener('click', flipCard);


    cards[optionOneId].classList.add('matched');
    cards[optionTwoId].classList.add('matched');

    cardsWon.push(cardsChosen);
  } else {
    alert('Sorry try again!');
    cards[optionOneId].setAttribute('src', 'images/blank.png');
    cards[optionTwoId].setAttribute('src', 'images/blank.png');
  }

  resultDisplay.textContent = cardsWon.length;
  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.innerHTML = 'Congratulations you found them all!';
  }
}


function flipCard() {
  let cardId = this.getAttribute('data-id')
  if (cardsChosenIds.includes(cardId)) {
    alert('You have clicked the same image!');
    return;
  }
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenIds.push(cardId)
this.setAttribute('src', cardArray[cardId].img)
if (cardsChosen.length === 2) {
  setTimeout(() => {
    checkMatch()
  }, 500);
}
}