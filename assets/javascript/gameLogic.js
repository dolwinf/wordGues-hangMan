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
console.log(randomWord);

var dashedWords = [];
for (var i = 0; i < randomWord.length; i++) {
	dashedWords[i] = "_";
}

dashedWords.join(" ");

document.getElementById("test").innerHTML = dashedWords;
