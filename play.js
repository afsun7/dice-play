document.querySelector("#btnGo").addEventListener("click", random);

let name1 = prompt("Enetr your name");
let name2 = prompt("enter your name");
let num1, num2;
let score1 = 0;
let score2 = 0;
let countrer = 0;
function random() {
  countrer++;
  document.getElementById("namePlayer1").innerHTML = name1;
  document.getElementById("namePlayer2").innerHTML = name2;
  num1 = Math.floor(Math.random() * 6 + 1);
  num2 = Math.floor(Math.random() * 6 + 1);
  console.log(num1);
  console.log(num2);
  document.querySelector("#img1").setAttribute("src", num1 + ".jpg");
  document.querySelector("#img2").setAttribute("src", num2 + ".jpg");

  if (num1 > num2) {
    score1++;
    console.log(`score1:${score1}`);

    document.getElementById("p.score1").innerHTML = score1;
  } else if (num1 < num2) {
    score2++;
    console.log(`score2:${score2}`);
    document.getElementById("p.score2").innerHTML = score2;
  }
  if (countrer > 5) {
    document.querySelector("#btnGo").disabled = true;
    // document.querySelector("#btnGo").classlist.add = "disabled";
    document.querySelector("#restart").addEventListener("click", restart);
    function restart() {
      document.querySelector("#btnGo").disabled = false;
      score1 = 0;
      score2 = 0;
      countrer = 0;
      num1 = 0;
      num2 = 0;
      document.getElementById("p.score1").innerHTML = "0";
      document.getElementById("p.score2").innerHTML = "0";
    }
  }
}
