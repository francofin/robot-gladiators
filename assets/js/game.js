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

var fight = function(enemyName) {
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Fight, Train or Skip for fee?");
    if (promptFight === "fight" || promptFight === "FIGHT") {
        enemyHealth -= playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } 
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        playerHealth -= enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        } 
        else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
    }
      // if player choses to skip
    else if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight!");
            playerMoney -= 2;
            console.log(playerName + " Now Has " + playerMoney + " left");
        }
        else {
            fight();
        }
    } 
    else {
      window.alert("You need to pick a valid option. Try again!");
    }
  };

  for (var i = 0; i < enemies.length; i++) {
        fight(enemies[i]);
    }

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