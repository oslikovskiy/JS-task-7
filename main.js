var question = confirm("Do you want to play the game?");
var question2;
var userNumber;
var thePrize = 0;

if (question == true) {  
  
  console.log("Let's start the game, you have 3 attemps to guess the number =) ");
  
    for(var i = 1; i <=3; i++) {
      
      userNumber = parseInt(prompt("Please enter the number from 0 to 5"));
      var randomNumber = parseInt(Math.round(Math.random() * 5));
      
        if ( i == 1 && userNumber == randomNumber) {
          question2 = confirm("You win 10$, do you wont to play again?");
          thePrize = thePrize + 10;
            if(question2 = true) {
              i = 0;
            }
            else {
              alert("Thank you. You win " + thePrize + "$");
              break;
            }
        }
        else if ( i == 2 && userNumber == randomNumber) {
          question2 = confirm("You win 5$, do you wont to play again?");
          thePrize = thePrize + 5;
            if(question2 = true) {
              i = 0;
            }
            else {
              alert("Thank you. You win " + thePrize + "$")
              break;
            }
        }
        else if ( i == 3 && userNumber == randomNumber) {
          question2 = confirm("You win 2$, do you wont to play again?");
          thePrize = thePrize + 2;
            if(question2 = true) {
              i = 0;
            }
            else {
              alert("Thank you. You win " + thePrize + "$");
              break;
            }
        }
        else if ( i == 3 && userNumber != randomNumber) {
        question2 = confirm("Sorry, but you loose... You can try it again !!! ");
          if (question2 == true) {
            i = 0;
          }
          else {
            alert("Yiu win " + thePrize + "$");
            break;
          } 
      }
    }
  }
  else {
    console.log("Today you will not win the jackpot, but you could");
  }
