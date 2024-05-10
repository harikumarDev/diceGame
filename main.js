const p1 = document.getElementById("player1");
const p2 = document.getElementById("player2");
const btn = document.querySelector("button");
const output = document.querySelector("#output");

btn.addEventListener("click", () => {
  let rolls = [roll(6), roll(6)];
  p1.innerHTML = rolls[0];
  p2.innerHTML = rolls[1];
  if (rolls[0] == rolls[1]) updateOut("Its a draw. :)");
  else if (rolls[0] > rolls[1]) updateOut("Player1 Wins");
  else updateOut("Player2 Wins");
});

function roll(n) {
  let num = Math.floor(Math.random() * n) + 1;
  let m = 9855 + num;
  let code = "&#" + m + ";";
  return code;
}

function updateOut(str) {
  output.innerText = str;
}
