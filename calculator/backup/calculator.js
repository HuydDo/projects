function cal(val) {
  document.getElementById("ele").value += val
}

function solve() {
  let x = document.getElementById("ele").value
  let y = eval(x)
  document.getElementById("ele").value = y
}

function clr() {
  document.getElementById("ele").value = ""
}


