var potencias = secondAndThirdPower;
potencias();

document.getElementById("h1").innerHTML = "Datos de Lab";

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('body').appendChild(table);

function showText() {
  // Get the checkbox
  var checkBox = document.getElementById("valorant");
  // Get the output text
  var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

function secondAndThirdPower() {
  var num = prompt("Favor de ingresar cualquier entero ", "1");
  for (let i = 0; i < num+1; i++) {
    if (i != 0 && i<=num) {
      square = Math.pow(i, 2);
      cube = Math.pow(i, 3);
      document.write("Cuadrado: ", square, "Cubo: ", cube);
    }
   
  }
}





