// window.alert allows us to add a message to the page as the user loads the page. 

window.alert("This is an alert! JavaScript is running!");


// window.prompt allows us to get information from the user
var playerName = window.prompt("What is your robot's name?");
//window.alert("Welcome to the fight " + playerName);
//console.log is the developers console

var playerHealth = 100;
var playerAttack = 15;
var playerMoney=10;
console.log(playerName, playerHealth, playerAttack);

// var enemyName = "Roborto";
var enemies = ["Roborto", "Amy", "Robo Cop"];
var enemyHealth = 50;
var enemyAttack = 12;


console.log(enemies[1])
// for (var i = 0; i < enemies.length; i++) {
//     console.log(enemies[i]);
// }

window.alert('You will have to defeat ' + enemies + " to be crowned Champ")

// fight function
//same function declaration as below
// function fight() {
//     window.alert("Fight To The Death");
// }
//break key word in loops allow us to break out of the loop

var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
      // ask user if they'd liked to fight or run
      var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
      // if user picks "skip" confirm and then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerName + ' has decided to skip this fight. Goodbye!');
          // subtract money from playerMoney for skipping
          playerMoney = playerMoney - 10;
          console.log("playerMoney", playerMoney)
          break;
        }
      }
  
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
      );
  
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died!');
  
        // award player money for winning
        playerMoney = playerMoney + 20;
  
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
      }
  
      // remove players's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
      );
  
      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerName + ' still has ' + playerHealth + ' health left.');
      }
    }
  };
var startGame = function () {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
  for (var i = 0; i < enemies.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators!" + ( i + 1 ) );
        //debugger;
        enemyHealth = 50;
        fight(enemies[i]);
      }
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
        }
    }
    // play again
  endGame();
};

// function to end the entire game
var endGame = function() {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
      window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } 
    else {
      window.alert("You've lost your robot in battle.");
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
    // restart the game
    startGame();
    } 
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
  };

startGame();
//fight()

// if (playerHealth > 0) {
//     console.log("Your player is still alive!");
//   }
  // else condition to check for alternatives
// else {
// console.log("This will run instead.");
// }
// in javascript equivalency is depicted by 3 = signs, i.e. ===
// double || means or in js



// // This is a String data type; it must be wrapped in double quotes (" ") or single quotes (' ').
// var stringDataType = "This is a string, which is a fancy way to say text";

// // This is a Number data type; it can be an integer (whole number) or have decimals (floated numbers).
// var numberIntegerDataType = 10;
// var numberFloatDataType = 10.4;

// // This is a Boolean data type, which can only be given a value of true or false.
// var booleanDataType = true;