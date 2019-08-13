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
  dashedWords[i] = "_";
}

document.getElementById("test").innerHTML = dashedWords;

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
      document.getElementById("test2").innerHTML = "Winner!";
    }
  }
});
