class Card {

     imageElement = null;
     card_number = 0;
     cardNumbers = new Set();

    constructor(selectedElement, card_number, cards)
    {
        this.imageElement = selectedElement;
        this.card_number = card_number;
        this.cardNumbers = cards;

    }

    CheckBlank()
    {
        return $(this.imageElement).hasClass('flip');
    }

}