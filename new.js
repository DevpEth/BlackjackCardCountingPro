var decksLeft = 8;
var cardsLeft = 52 * decksLeft;
var card = 32; 
var runningCount = 0;

var deckRatio = 1 / 52 ;
var clickCount = {
  "2": card, 
  "3": card, 
  "4": card, 
  "5": card, 
  "6": card, 
  "7": card, 
  "8": card, 
  "9": card, 
  "10": card, 
  "J": card, 
  "Q": card, 
  "K": card, 
  "A": card
};

function updateCount(cardValue) {
  if (cardValue >= 2 && cardValue <= 6) {
    runningCount++;
  } else if (cardValue >= 10 || cardValue === "J" || cardValue === "Q" || cardValue === "K" || cardValue === "A") {
    runningCount--;
  }
}

function calculateTrueCount(runningCount, decksLeft) {
  return (runningCount / decksLeft).toFixed(2);
}

function handleClick(event) {
  if (isCounting) {
    var id = event.target.id;
    var count = clickCount[id.slice(4)];
    if (count > 0 && cardsLeft > 0) {
      cardsLeft--;
      count--;
      decksLeft -= deckRatio;
      updateCount(id.slice(4));
      var trueCount = calculateTrueCount(runningCount, decksLeft);
      document.getElementById("card-counter").textContent = cardsLeft;
      document.getElementById("running-count").textContent = runningCount;
      document.getElementById("decks-counter").textContent = decksLeft.toFixed(2);
      document.getElementById("true-count").textContent = trueCount;
      event.target.querySelector('.click-count').textContent = count;
      clickCount[id.slice(4)] = count;
    }
  }
}

var buttons = document.getElementsByClassName("card-button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", handleClick);
}

var isCounting = false;

function toggleCounting() {
  isCounting = !isCounting;
  var countBtn = document.getElementById("count-btn");
  if (isCounting) {
    countBtn.textContent = "Stop Count";
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].removeAttribute("disabled");
    }
  } else {
    countBtn.textContent = "Start Count";
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("disabled", true);
    }
  }
}

var countBtn = document.getElementById("count-btn");
countBtn.addEventListener("click", toggleCounting);






var resetBtn = document.createElement("button");
resetBtn.setAttribute("id", "reset-btn");
resetBtn.textContent = "Reset Count";
resetBtn.addEventListener("click", function() {
  var resetBtn = document.createElement("button");
resetBtn.textContent = "Reset Count";
resetBtn.addEventListener("click", function() {
});


  cardsLeft = 52 * decksLeft;
  runningCount = 0;
  decksLeft = 8;
  for (var key in clickCount) {
    clickCount[key] = card;
    document.getElementById("btn-" + key).querySelector('.click-count').textContent = card;
  }
  document.getElementById("card-counter").textContent = cardsLeft;
  document.getElementById("running-count").textContent = runningCount;
  document.getElementById("decks-counter").textContent = decksLeft.toFixed(2);
  document.getElementById("true-count").textContent = "0.00";
});


countBtn.insertAdjacentElement("afterend", resetBtn);


var resetBtn = document.createElement("button");
resetBtn.setAttribute("id", "reset-btn");
resetBtn.textContent = "Reset Count";
resetBtn.addEventListener("click", function() {
  runningCount = 0;
  decksLeft = 8;
  cardsLeft = 52 * decksLeft;
  document.getElementById("card-counter").textContent = cardsLeft;
  document.getElementById("running-count").textContent = runningCount;
  document.getElementById("decks-counter").textContent = decksLeft;
  document.getElementById("true-count").textContent = calculateTrueCount(runningCount, decksLeft);
  for (var i = 0; i < buttons.length; i++) {
    var cardValue = buttons[i].id.slice(4);
    clickCount[cardValue] = card;
    buttons[i].querySelector('.click-count').textContent = card;
  }
});
