function myFunction(p1, p2) {
  return p1 * p2;
}

function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  // document.getElementById("demo").innerText = time;
  document.getElementById("demo").textContent = time;

  setTimeout(showTime, 1000);
}
document.getElementById("demo").innerHTML = showTime();

var date=new Date();
var day=date.getDate();
var month=date.getMonth()+1;
var year=date.getFullYear();
document.write("<br>Date is: "+month+"/"+day+"/"+year);

var myVar = setInterval(myTimer ,1000);
function myTimer() {
var d = new Date();
document.getElementById("demo1").innerHTML = d.toLocaleTimeString();
}

function move() {
  var elem = document.getElementById("myBar");
  var width = 0;
  var id = setInterval(frame, 100);
  function frame() {
    if (width == 100) {
    clearInterval(id);
    } else {
    width++;
    elem.style.width = width + '%';
    }
 }
}


var myVar1 = setInterval(setColor, 2000);
    
function setColor() {
 var x = document.body;
 x.style.backgroundColor = x.style.backgroundColor == "gray" ? "lightgray" : "gray";
}
  
 function stopColor() {
  clearInterval(myVar1);
 }

