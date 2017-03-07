var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var gameBoard = document.getElementById('game-board');

//creates card board
function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
		gameBoard.appendChild(cardElement);
		gameBoard.appendChild(cardElement);
	}
}

//checks to see if two cards match
function isMatch(cards) {
	if (cards[0] === cards[1]) {
		alert("You found a match!");
	} 	else {
		alert("Sorry, try again.");
	}
}

//checks to see if there are cards in play
function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
		console.log(this.getAttribute('data-card'));
		if (this.getAttribute('data-card') === 'king') {
			this.innerHTML = "<img src='/Users/juliamijiyi/Fundamentals/wdi-fundamentals-memorygame/kingofhearts.png'>";
		}	else if (this.getAttribute('data-card') === 'queen') {
			this.innerHTML = "<img src='/Users/juliamijiyi/Fundamentals/wdi-fundamentals-memorygame/queenofhearts.png'>";
		}
		if (cardsInPlay.length === 2) {
			isMatch(cardsInPlay);
			cardsInPlay = [];
		}
}

createBoard();

