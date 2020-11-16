// initialize num = 0
var num = document.getElementById("num").innerText = 0;

// update num += 1
const upButton = () => {
  num += 1;
  document.getElementById("num").innerText = num;
}

// update num -= 1
const downButton = () => {
  num -= 1;
  document.getElementById("num").innerText = num;
}

// resets num = 0
const resetButton = () => {
  document.getElementById("num").innerHTML = 0;
}