// ---------Responsive-navbar-active-animation-----------
function test() {
    var tabsNewAnim = $('#navbarSupportedContent');
    var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
        "top": itemPosNewAnimTop.top + "px",
        "left": itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
        $('#navbarSupportedContent ul li').removeClass("active");
        $(this).addClass('active');
        var activeWidthNewAnimHeight = $(this).innerHeight();
        var activeWidthNewAnimWidth = $(this).innerWidth();
        var itemPosNewAnimTop = $(this).position();
        var itemPosNewAnimLeft = $(this).position();
        $(".hori-selector").css({
            "top": itemPosNewAnimTop.top + "px",
            "left": itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
        });
    });
}
$(document).ready(function () {
    setTimeout(function () { test(); });
});
$(window).on('resize', function () {
    setTimeout(function () { test(); }, 500);
});
$(".navbar-toggler").click(function () {
    $(".navbar-collapse").slideToggle(300);
    setTimeout(function () { test(); });
});


// Funcion para validar si las 2 contraseñas tecleados son iguales
function checkPass() {
    var check1 = document.myForm.check1.value;
    var check2 = document.myForm.check2.value;
    if (check1 == "" || check2 == "") {
        document.myForm.txtOutput.value = "Favor de llenar ambos campos";
    } else {
        if (check1 == check2) {
            document.myForm.txtOutput.value = "Sí Coinciden";
        } else {
            document.myForm.txtOutput.value = "No coinciden, vuelve a intentarlo";
        }
    }
}




// Función para verificar la seguridad de la contraseña
function passwordStrength(pw) {
    return /.{8,}/.test(pw) * (  /* at least 8 characters */
      /.{12,}/.test(pw)          /* bonus if longer */
      + /[a-z]/.test(pw)         /* a lower letter */
      + /[A-Z]/.test(pw)         /* a upper letter */
      + /\d/.test(pw)            /* a digit */
      + /[^A-Za-z0-9]/.test(pw)  /* a special character */
     )
}
  
let pwInput = document.getElementById("pwd")

pwInput.addEventListener('keyup', function() { 
 document.getElementById("strength").value = 
 passwordStrength(pwInput.value)
})
