var c = document.getElementById("c");
var ctx = c.getContext("2d");

c.height = window.innerHeight;
c.width = window.innerWidth;

var mass = "1234567890";

document.getElementById("option").addEventListener("change", function () {
  var select = document.getElementById("option");
  var text = select.options[select.selectedIndex].text;
  if (text == "Цифры") {
    mass = "1234567890";
  }
  if (text == "Сердца") {
    mass = "❤❤❤";
  }
  if (text == "Иероглифы") {
    mass = "刃令難骨詩海雪起及英次誤能函純船述窗";
  }
  if (text == "Шахматные фигуры") {
    mass = "♔♕♖♗♘♟";
  }
  if (text == "Двоичный код") {
    mass = "01";
  }
});

mass = mass.split("");

var font_size = 30;

var columns = c.width / font_size;
var drops = [];

for (var x = 0; x < columns; x++) {
  drops[x] = 1;
}

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, c.width, c.height);
  //var mass_color = "#FF0000 #00FF00 #0000ff #000000 #800080";

  var mass_color = "#00FF00";
  mass_color = mass_color.split(" ");
  ctx.fillStyle = mass_color[Math.floor(Math.random() * mass_color.length)];

  ctx.font = font_size + "px arial";

  for (var i = 0; i < drops.length; i++) {
    var text = mass[Math.floor(Math.random() * mass.length)];
    ctx.fillText(text, i * font_size, drops[i] * font_size);
    if (drops[i] * font_size > c.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}

setInterval(draw, 35);
