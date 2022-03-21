var count = 0;
var räkscore = 0;
var fiskscore = 0;
var hajscore = 0;
var valscore = 0;

document.querySelector(".click").addEventListener("click", clicker);

document.querySelector(".knapp").addEventListener("click", claim);

document.getElementById("räknarknapp").src = "fishing1.png";

document.getElementById("firre").src = "questionmark.png";

document.getElementById("hajar").src = "questionmark.png";

document.getElementById("valar").src = "questionmark.png";

setInterval(räkauto, 800);

setInterval(fiskauto, 300);

setInterval(hajauto, 100);

setInterval(valauto, 30);

function clicker() {
  if (count < 100) {
    count++;
    document.querySelector(".score").innerText = count;
    document.getElementById("räknarknapp").src = "fishing1.png";
  }
  if (count >= 100 && count < 1000) {
    count = count + 2;
    document.querySelector(".score").innerText = count;
    document.getElementById("räknarknapp").src = "fishing2.png";
    document.getElementById("firre").src = "fish.png";
    document.querySelector("p").innerText = "Next fish at 1000";
  }
  if (count >= 1000 && count < 5000) {
    count = count + 4;
    document.querySelector(".score").innerText = count;
    document.getElementById("räknarknapp").src = "fishing3.jpg";
    document.getElementById("hajar").src = "shark.png";
    document.querySelector("p").innerText = "Next fish at 5000";
  }
  if (count >= 5000) {
    count = count + 7;
    document.querySelector(".score").innerText = count;
    document.getElementById("räknarknapp").src = "fishing4.jpg";
    document.getElementById("valar").src = "whale.png";
    document.querySelector("p").innerText = "Next fish at 15000";
  }
  if (count >= 15000) {
    win();
    document.querySelector("p").innerText = "";
  }
}

function räkauto() {
  räkscore++;
  document.querySelector(".räk_score").innerText = räkscore;
}

function fiskauto() {
  if (count >= 100) {
    fiskscore++;
    document.querySelector(".fisk_score").innerText = fiskscore;
  }
}

function hajauto() {
  if (count >= 1000) {
    hajscore++;
    document.querySelector(".haj_score").innerText = hajscore;
  }
}

function valauto() {
  if (count >= 5000) {
    valscore++;
    document.querySelector(".val_score").innerText = valscore;
  }
}

function claim() {
  count = räkscore + fiskscore + hajscore + valscore + count;
  document.querySelector(".score").innerText = count;
  document.querySelector(".räk_score").innerText = 0;
  document.querySelector(".fisk_score").innerText = 0;
  document.querySelector(".haj_score").innerText = 0;
  document.querySelector(".val_score").innerText = 0;

  räkscore = 0;
  fiskscore = 0;
  hajscore = 0;
  valscore = 0;
}

function win() {
  document.querySelector(".overlay").style.display = "block";

  setTimeout(function () {
    document.querySelector(".lampor").style.opacity = 1;
  }, 2000);

  setTimeout(function () {
    document.querySelector(".fishAndChips").style.opacity = 1;
  }, 4000);
}
