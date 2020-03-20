var message = "Ici la variable globale !";
function showMsg() {
  var message = "Ici la variable locale !";
  alert(message);
}
showMsg();
alert(message);//ne s'affiche pas
