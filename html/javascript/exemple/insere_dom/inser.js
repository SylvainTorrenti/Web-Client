var newLink = document.createElement("a");
newLink.id = "sdz_link";
newLink.href = "http://blog.crdp-versailles.fr/rimbaud/";
newLink.title = "Découvrez le blog de la Classe Actu !";
newLink.setAttribute("tabindex", "10");
document.getElementById("myP").appendChild(newLink);
var newLinkText = document.createTextNode("Le Tonnerre de Rimbaud");
newLink.appendChild(newLinkText);
