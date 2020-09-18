// window.alert allows us to add a message to the page as the user loads the page. 

window.alert("This is an alert! JavaScript is running!");

console.log(Math.PI)

// window.prompt allows us to get information from the user
// var playerInfo.name = window.prompt("What is your robot's name?");
//window.alert("Welcome to the fight " + playerInfo.name);
//console.log is the developers console

// var playerInfo.health = 100;
// var playerInfo.attack = 15;
// var playerInfo.money=10;




// console.log(enemies[1])
// for (var i = 0; i < enemies.length; i++) {
//     console.log(enemies[i]);
// }

window.alert('You will have to defeat ' + enemyInfo + " to be crowned Champ")

// fight function
//same function declaration as below
// function fight() {
//     window.alert("Fight To The Death");
// }
//break key word in loops allow us to break out of the loop

var fight = function(enemy) {
    while (playerInfo.health > 0 && enemy.health > 0) {
      // ask user if they'd liked to fight or run
      var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
      // if user picks "skip" confirm and then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
          // subtract money from playerInfo.money for skipping
          playerInfo.money = playerInfo.money - 10;
          console.log("playerInfo.money", playerInfo.money)
          break;
        }
      }
  
      // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
      var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

      enemy.health = Math.max(0, enemy.health - damage);

      console.log(
        playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
      );
  
      // check enemy's health
      if (enemy.health <= 0) {
        window.alert(enemy.name + ' has died!');
  
        // award player money for winning
        playerInfo.money = playerInfo.money + 20;
  
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
      }
  
      // remove players's health by subtracting the amount set in the enemyAttack variable
      var damage = randomNumber(enemy.attack - 3, enemy.attack);

      playerInfo.health = Math.max(0, playerInfo.health - damage);
      console.log(
        enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
      );
  
      // check player's health
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
      }
    }
  };

  

var startGame = function () {
    playerInfo.reset(); 
  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
        //debugger;
        var pickedenemy = enemyInfo[i];
        pickedenemy.health = randomNumber(40, 60);
        fight(pickedenemy);
        if (playerInfo.health > 0 && i < enemies.length - 1) {
            var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
            if (storeConfirm) {
            shop();
            }
        }
      }
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
        }
    }
    // play again
  endGame();
};

// function to generate a random numeric value
var randomNumber = function(min_num, max_num) {
  var value = Math.floor(Math.random() * (max_num - min_num +1 )) + min_num;

  return value;
};

// function to end the entire game
var endGame = function() {
    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
      window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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

var shop = function() {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
      );
      switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            // if (playerInfo.money >= 7) {
            //     window.alert("Refilling player's health by 20 for 7 dollars.");

            //     // increase health and decrease money
            //     playerInfo.health = playerInfo.health + 20;
            //     playerInfo.money = playerInfo.money - 7;
            // }
            // else {
            //     window.alert("You don't have enough money!");
            // }

            playerInfo.refillHealth();

            break;
        case "UPGRADE":
        case "upgrade":
            // if (playerInfo.money >= 7) {
            //     window.alert("Upgrading player's attack by 6 for 7 dollars.");
            
            //    // increase attack and decrease money
            //     playerInfo.attack = playerInfo.attack + 6;
            //     playerInfo.money = playerInfo.money - 7;
            //   }
            //   else {
            //     window.alert("You don't have enough money!");
            //   }

            playerInfo.upgradeAttack();
            
              break;
        case "LEAVE":
        case "leave":
          window.alert("Leaving the store.");
      
          // do nothing, so function will end
          break;
        default:
          window.alert("You did not pick a valid option. Try again.");
      
          // call shop() again to force player to pick a valid option
          shop();
          break;
      }

};

var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function() {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    } 
    else {
      window.alert("You don't have enough money!");
    }
  }, // comma!
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    } 
    else {
      window.alert("You don't have enough money!");
    }
  }
};
console.log(playerInfo.name, playerInfo.health, playerInfo.attack);

// var enemyName = "Roborto";
var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];

startGame();




// if (playerInfo.health > 0) {
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