/*var number = 1;
while (number < 10) {
number++; 
}
alert(number); */

var prenoms = '', prenom;
while (true) {
prenom = prompt('Entrez un prénom :'); 
if (prenom) {
prenoms += prenom + ' '; 
} else {
break; 
}
} alert(prenoms);  