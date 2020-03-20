/*for (var iter = 1; iter <= 5; iter++) {
  alert("Itération n°" + iter);
}*/

/*for (var prenoms = "", prenom; true; ) {
  prenom = prompt("Entrez un prénom :");
  if (prenom) {
    prenoms += prenom + " ";
  } else {
    break;
  }
}
alert(prenoms);*/

for (var i = 0, prenoms = "", prenom; true; i++) {
  prenom = prompt("Entrez un prénom :");
  if (prenom) {
    prenoms += prenom + " ";
  } else {
    break;
  }
}
alert("Il y a " + i + " prénoms :\n\n" + prenoms);
