// TODO: Declare a variable "cards", which is an array that holds all elements with class "card"
// Hint: Use getElementsByClassName()

// deck of all cards in game
const deck = document.getElementById('card-deck');

// TODO: Declare a variable "move" that will hold a number value for the number of moves made

// TODO: Declare a variable "counter" that will hold the element with class "moves"
// Hint: Use querySelector()

// declaring variable of matchedCards
let matchedCard = document.getElementsByClassName('match');

// TODO: Declare a variable "openedCards" as an empty array

// TODO: Declare variables "second" and "minute" that hold a number value for seconds/minutes elapsed

// TODO: Declare variable "timer" that will hold the element with class "timer"
// Hint: Use querySelector()

// Use this variable for assigning the setInterval()
var interval;

// @description shuffles cards
// @param {array}
// @returns shuffledarray
function shuffle(array) {
   var currentIndex = array.length, temporaryValue, randomIndex;

   while (currentIndex !== 0) {
       randomIndex = Math.floor(Math.random() * currentIndex);
       currentIndex -= 1;
       temporaryValue = array[ currentIndex ];
       array[ currentIndex ] = array[ randomIndex ];
       array[ randomIndex ] = temporaryValue;
   }

   return array;
};


// @description reset/initialize the game when page is refreshed / loads
document.body.onload = startGame();


// @description function to start a new play
function startGame() {

   // empty the openCards array
   openedCards = [];

   // shuffle deck
   cards = shuffle(cards);

   for (var i = 0; i < cards.length; i++) {
       const card = cards[i];
       // TODO: Reset "deck" innerHTML
       // TODO: Append each "card" (from cards array) to the "deck" element

       // remove dynamic classes from card
       card.classList.remove('show', 'open', 'match', 'disabled');
   }

   // TODO: Reset the moves counter and value displayed in HTML

   // TODO: Reset the timer counter variables: second, minute
   // TODO: Set the innerHTML for the "timer" element to display starting time
   timer.innerHTML = '0 mins 0 secs';

   // TODO: Stop the "interval" timer
   // Hint: See clearInterval()
}


// @description toggles open and show class to display cards
var displayCard = function () {
   this.classList.toggle('open');
   this.classList.toggle('show');
   this.classList.toggle('disabled');
};


// @description add opened cards to OpenedCards list and check if cards are match or not
function cardOpen() {
   const selectedCard = this;

   // TODO: Append "selectedCard" to the "openedCards" array

   // TODO: Add conditional to check if 2 cards are "open"
       // TODO: Increment the number of "moves" and start the "timer" if it was the first move
       // TODO: Call matched() or unmatched() depending on whether both cards have the same "type" attribute
};


// @description when cards match
function matched() {
   openedCards[0].classList.add('match', 'disabled');
   openedCards[1].classList.add('match', 'disabled');
   openedCards[0].classList.remove('show', 'open', 'no-event');
   openedCards[1].classList.remove('show', 'open', 'no-event');
   openedCards = [];
}


// description when cards don't match
function unmatched() {
   openedCards[0].classList.add('unmatched');
   openedCards[1].classList.add('unmatched');
   disable();
   setTimeout(function() {
       openedCards[0].classList.remove('show', 'open', 'no-event', 'unmatched');
       openedCards[1].classList.remove('show', 'open', 'no-event', 'unmatched');
       enable();
       openedCards = [];
   }, 1100);
}


// @description disable cards temporarily
function disable() {
   Array.prototype.filter.call(cards, function (card) {
       card.classList.add('disabled');
   });
}


// @description enable cards and disable matched cards
function enable() {
   Array.prototype.filter.call(cards, function (card) {
       card.classList.remove('disabled');
       for (var i = 0; i < matchedCard.length; i++) {
           matchedCard[i].classList.add('disabled');
       }
   });
}


// @description game timer
function startTimer() {
   interval = setInterval(function () {
       timer.innerHTML = minute + ' mins ' + second + ' secs';
       second++;
       if (second == 60) {
           minute++;
           second = 0;
       }
       if (minute == 60) {
           hour++;
           minute = 0;
       }
   }, 1000);
}


// @description congratulations when all cards match, show details
function congratulations() {
   if (matchedCard.length == 16) {
       // TODO: Stop the "interval" timer
       // Hint: See clearInterval()

       document.querySelector('.popup').classList.add('show');

       // TODO: Update HTML for element with id "finalMove" to show "moves" value

       // TODO: Update HTML for element with id "totalTime" to show innerHTML from "timer" element
   };
}


// @desciption for user to play Again
function playAgain() {
   // TODO: Should call the existing "startGame()" method to start a new game
}

// loop to add event listeners to each card
for (var i = 0; i < cards.length; i++) {
   const card = cards[i];

   // TODO: Add 'click' event listener to call exising "displayCard" method

   card.addEventListener('click', cardOpen);
   card.addEventListener('click', congratulations);
};