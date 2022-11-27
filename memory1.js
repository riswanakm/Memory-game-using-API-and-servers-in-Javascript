

var randomImages;
const cardNumbers = new Set();
var score = 0
var highScore = 0
var tclick = 0;
var totalCards = 0;
var player_name;

$(document).ready(function () {

  player_name = settings.getStorePlayername();
  totalCards = parseInt(settings.getStoreCardsNum());
  highScore = parseInt(settings.getHighScore());
  if(player_name)
    $('#player').append(": "+player_name);

  if(isNaN(totalCards) || totalCards == 0)
    totalCards = 48;
  
  if(isNaN(highScore) || highScore == 0)
    highScore = 0;

  $('#highScore').html(highScore +"%")
  $('#Score').html(score)
  $('#num_cards').val(totalCards)
  $("#tabs").tabs();

  $('#cards').hide();
  cards.showimage(totalCards);
  
});

function store()
{
  const pname = $("#player_name").val();
  const num_cards = $("#num_cards").val();
  settings.store(pname,num_cards);
}



setInterval(() => {
  const flippedCards = document.querySelectorAll('.flip-card.flip')
  if (flippedCards.length) {
    flippedCards.forEach((ele) => {
      cardNumbers.delete(String($(ele).data('cardnumber')))
      $(ele).removeClass('flip')
      $(ele).addClass('unflip')
    })
  }
}, 3000)








