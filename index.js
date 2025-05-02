const formulaire = document.getElementById("formulaire");
const popup = document.getElementById("popup");

formulaire.addEventListener("submit", function(event) {
    event.preventDefault(); // empêche l'envoi réel du formulaire
    popup.style.display = "block";
});

function closePopup() {
    popup.style.display = "none";
    formulaire.reset(); // vide les champs du formulaire
}
