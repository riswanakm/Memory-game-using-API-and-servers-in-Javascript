'use strict';


const settings = {

    store: function (player_name, num_cards) {

        if (player_name === "" || player_name == null) {
            document.getElementById("error").innerHTML = "Please enter your name";
          } else {
            sessionStorage.setItem("#player_name", player_name);
            sessionStorage.setItem("#num_cards", num_cards);
          }
      
          setTimeout(function(){
            window.location.reload();
          });
          
    },
    getStoreCardsNum: function(){
        var num_cards = sessionStorage.getItem("#num_cards", num_cards);
        return num_cards;
    },
    getStorePlayername: function () {
       //retrieves items in the sessionStorage

        var name = sessionStorage.getItem("#player_name", player_name);
        return name;
     
    },
    getHighScore: function(){
       var currentHighScore = localStorage.getItem("highscore");
        return currentHighScore;
    }

}