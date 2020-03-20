/*function myFunction(arg) {
  var arg = 5;
  alert("Votre argument : " + arg);
}
myFunction("En voilà un beau test !");*/

/*function myFunction(arg) {
  alert("Votre argument : " + arg);
}
myFunction(prompt("Que souhaitez-vous passer en argument à la fonction ?"));*/

function moar(first, second) {
  alert("Votre premier argument : " + first);
  alert("Votre deuxième argument : " + second);
}
moar(
  prompt("Entrez votre premier argument :"),
  prompt("Entrez votre deuxième argument :")
);
