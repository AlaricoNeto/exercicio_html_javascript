
function validateForm() {
  var a = document.forms["myForm"]["fieldA"].value;
  var b = document.forms["myForm"]["fieldB"].value;
  if (b <= a) {
    alert("O campo B deve ser maior que o campo A!");
    return false;
  } else {
    alert("Formulário válido!");
    return true;
  }
}
