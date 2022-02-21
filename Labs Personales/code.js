document.getElementById("h1").innerHTML = "Datos de Lab"

function showImage() {
    // Get the checkbox
    var checkBox = document.getElementById("valorant");
    // Get the output text
    var text = document.getElementById("text");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }