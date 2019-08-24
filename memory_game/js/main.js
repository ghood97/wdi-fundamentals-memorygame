const cards = [{rank: "queen", suit: "hearts", cardImage: "images/queen-of-hearts.png"},
               {rank: "queen", suit: "diamonds", cardImage: "images/queen-of-diamonds.png"},
               {rank: "king", suit: "hearts", cardImage: "images/king-of-hearts.png"},
               {rank: "king", suit: "diamonds", cardImage: "images/king-of-diamonds.png"}];
let cardsInPlay = [];
let score = 0;

function disable()
{
  let cardElements = document.querySelectorAll('img');
  for(let i=0; i<cardElements.length; i++)
  {
    cardElements[i].removeEventListener('click', flipCard);
  }
}

function reset()
{
  cardsInPlay = [];
  let cardsToReset = document.querySelectorAll('img');
  for(let i=0; i<cardsToReset.length; i++)
  {
    cardsToReset[i].setAttribute('src', 'images/back.png');
    cardsToReset[i].addEventListener('click', flipCard);
  }
  document.getElementById('score').textContent = "Score: " + score;

}

function createBoard()
{
  for(let i=0; i<cards.length; i++)
  {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
    document.getElementById('reset').addEventListener('click', reset);
  }
}

function checkMatch()
{
  if(cardsInPlay[0] === cardsInPlay[1])
  {
    alert("You found a match!");
    score++;
  }
  else
  {
    alert("Sorry, try again.");
  }
}

function flipCard()
{
  let cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);
  if(cardsInPlay.length === 2)
  {
    disable();
    checkMatch();
  }
};
createBoard();
