'use strict';

const cards = (function () {

    const blank_img_src="images/blank.png";
    const back_img_src = "images/back.png";

    function getImageUrl(imgFileCount)
    {
        return "images/card_"+imgFileCount+".png"
    }

    (function ($) {
        $.fn.randomize = function (tree, childElem) {
            return this.each(function () {
                var $this = $(this);
                if (tree) $this = $(this).find(tree);
                var unsortedElems = $this.children(childElem);
                var elems = unsortedElems.clone();

                elems.sort(function () {
                    return (Math.round(Math.random()) - 0.5);
                });

                for (var i = 0; i < elems.length; i++)
                    unsortedElems.eq(i).replaceWith(elems[i]);
            });
        };
    })(jQuery);

    return {
        showimage: function (imageCount) {
            let htmlImagelist = "";
            let imgFileCount = 1;
            let card = "";
            let imgurl = "";
            for (var i = 1; i <= imageCount; i++) {
              if (i % 2 === 0) {
                  imgurl = getImageUrl(imgFileCount);
                card += `<div class="flip-card card_${imgFileCount}" data-cardnumber="${imgFileCount}" onclick="cards.flipcard(this, '${imgFileCount}')">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <a href="#">
                        <img class="img_${imgFileCount}" src="${back_img_src}" alt="cardclosed image">
                      </a>
                    </div>
                    <div class="flip-card-back">
                    <a href="#">
                        <img src="${imgurl}" alt="cardopened image">
                    </a>
                    </div>
                </div>
            </div>`
                imgFileCount += 1
              } else {
                imgurl = getImageUrl(imgFileCount);
                card += `<div class="flip-card card_${imgFileCount}" data-cardnumber="${imgFileCount}" onclick="cards.flipcard(this, '${imgFileCount}')">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                    <a href="#">
                        <img class="img_${imgFileCount}" src="${back_img_src}" alt="cardclosed image">
                    </a>
                    </div>
                    <div class="flip-card-back">
                    <a href="#">
                        <img src="${imgurl}" alt="cardopened image">
                    </a>
                    </div>
                </div>
            </div>`
              }
          
              if (i % 8 === 0) {
                htmlImagelist += `<div class="flex">${card}</div>`
                card = "";
              }
            }
            $('#cards').html(htmlImagelist);
            setTimeout(() => {
              $("#form_submit").randomize("#cards", ".flex");
             
            }, 500)
            setTimeout(() => {
              $("#form_submit").randomize("#cards .flex", ".flip-card");
              $('#cards').show();
             
            }, 1500)
        },

        /// new updated
        flipcard: (element, cardNumber) => {
           
            const obj_card = new Card($(element),cardNumber,cardNumbers);

            if (obj_card.CheckBlank()) {
                obj_card.imageElement.removeClass('flip')
                obj_card.imageElement.addClass('unflip')
                obj_card.cardNumbers.delete(cardNumber)
            } else {
                if (obj_card.cardNumbers.has(cardNumber)) {
                obj_card.imageElement.removeClass('unflip')
                obj_card.imageElement.addClass('flip')
                // score += 1;
                // tclick += 1;
                score = score_obj.increment(score,tclick);
                
                
                $('#Score').html(score)
                const CardTags = document.querySelectorAll(`.card_${cardNumber}`)
                CardTags.forEach((ele) => {
                    $(ele).removeClass('unflip')
                    $(ele).addClass('flip')
                
                
                })
                const imgTags = document.querySelectorAll(`.img_${cardNumber}`)
                imgTags.forEach((ele) => {
                    
                    $(ele).attr('src', blank_img_src)
                })
                } else {
                tclick += 1;
                obj_card.cardNumbers.delete(cardNumber)
                }
                $(element).removeClass('unflip')
                $(element).addClass('flip')
                obj_card.cardNumbers.add(cardNumber)
            }

            if(score == totalCards / 2)
            {
                // highScore = parseInt((score/tclick)*100);
                // currentHighScore = localStorage.getItem("highscore");

                // if(currentHighScore != null)
                // {
                //   if(highScore > currentHighScore)
                //   {
                //     $('#highScore').html(highScore+"%");
                //     localStorage.setItem("highscore",highScore);
                //   }
                // }else
                // {
                //   localStorage.setItem("highscore",highScore);
                // }
                score_obj.calculateHighScore(score,tclick);
            
                    }
        }
    }
})();