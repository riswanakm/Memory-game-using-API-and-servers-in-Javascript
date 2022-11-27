"use strict";


const score_obj = ( () =>
{
    var turns = 0;
    var match_count = 0;
    let scores;

   

    const saveScores = (highScore) => {
        localStorage.setItem("highscore",highScore);

    }

    const retrieveScores = () => {
        return localStorage.getItem("highscore");
    }

    return {
        increment(score,tclick){  
            score++;
            tclick++;
            return score;
        },

        calculateHighScore(score,tclick) {
            this.match_count = score;
            this.turns = tclick;
            highScore = parseInt((this.match_count/this.turns)*100);
            // currentHighScore = retrieveScores();
            var currentHighScore = retrieveScores();
            if(currentHighScore != null)
            {
              if(highScore > currentHighScore)
              {
                $('#highScore').html(highScore+"%");
                saveScores(highScore);
              }
            }else
            {
                saveScores(highScore);
            }
        }

    };

}

)();

