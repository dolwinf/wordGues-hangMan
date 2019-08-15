var words = [
  "sydney",
  "moscow",
  "newyork",
  "florida",
  "brisbane",
  "dubai",
  "mumbai",
  "rome",
  "jerusalem",
  "toronto"
];

var randomWord = words[Math.floor(Math.random() * words.length)];
var randomWordSplit = randomWord.split("");
console.log(randomWordSplit);

var dashedWords = [];
for (var i = 0; i < randomWordSplit.length; i++) {
  dashedWords[i] = "_ ";
}

document.getElementById("test").innerHTML = dashedWords;

guessesRemaining = 15;
document.getElementById("guesses-label").textContent = guessesRemaining;

document.addEventListener("keyup", function(event) {
  var keyPressed = event.key;
  if (randomWordSplit.includes(keyPressed)) {
    var index = randomWordSplit.indexOf(keyPressed);
    dashedWords[index] = keyPressed;
    document.getElementById("test").innerHTML = dashedWords;
    randomWordSplit[index] = 0;
    const check = randomWordSplit.every(function(item) {
      if (item == 0) {
        return true;
      }
    });

    if (check) {
      document.getElementById("test2").textContent =
        "Winner! You saved Jhonny's SOUL!!!!!!!";
      document.getElementById("image").src = "assets/images/devil-defeated.jpg";
      document.getElementById("image").style = "width: 300px; height: 300px";
    }
  } else {
    guessesRemaining--;
    document.getElementById("guesses-label").textContent = guessesRemaining;
    if (guessesRemaining < 1) {
      document.getElementById("guesses-label").textContent =
        "You've LOST! Restart the game before the devil takes your soul.";
      document.getElementById("image").src = "assets/images/devil-cranky.gif";
      document.getElementById("image").style = "width: 300px; height: 300px";
    }
  }
});
