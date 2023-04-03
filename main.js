var randomNumber = Math.floor(Math.random() * 10) + 1;
var guessCount = 0;
var guessLimit = 3;
var guesses = [];

document.getElementById("replay").style.display = "none";

const button = document.getElementById('btnTest');
button.onclick = function() {
    tester();
}

function tester() {

    var uNum = parseInt(document.getElementById("userInput").value);
    console.log(uNum)
    guessCount++;
    
   
    if (guessCount > 3) { 
        rejouer();  
    }

    if (uNum = randomNumber) {
        document.getElementById("childResult").innerHTML = "Bravo vous avez gagné en  " + guessCount + "Essai!";
        rejouer();
    }
    else if (guessCount === guessLimit) {
        document.getElementById("childResult").innerHTML = "Perdu! le numéro était " + randomNumber + ".";
    } else if (uNum < randomNumber) {
        document.getElementById("childResult").innerHTML = "Essai " + guessCount + ": " + uNum + " est trop petit. Essayez encore!";
    } else if (uNum > randomNumber) {
        document.getElementById("childResult").innerHTML = "Essai " + guessCount + ": " + uNum + " est trop grand. Essayez encore!";
    }
}

function rejouer() {
    var title = document.querySelector("h2");
        title.parentNode.removeChild(title);
        document.getElementById("replay").style.display = "block";
    randomNumber = Math.floor(Math.random() * 10) + 1;
    guessCount = 0;
    guesses = [];
    document.getElementById("userInput").value = "0"
    document.getElementById("childResult").innerHTML = "";
}

