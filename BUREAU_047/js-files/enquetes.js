   
let nomCorrect;

if (window.location.pathname.includes("enquetes_01")) {
    nomCorrect = "Marc Delmas";
}
else if (window.location.pathname.includes("enquetes_02")) {
    nomCorrect = "Yanis Morel";
}
else if (window.location.pathname.includes("enquetes_03")) {
    nomCorrect = "Mehdi Saïdi";
}
else if (window.location.pathname.includes("enquetes_04")) {
    nomCorrect = "Camille Laurent";
}
else if (window.location.pathname.includes("enquetes_05")) {
    nomCorrect = "Samuel Durand";
}
else if (window.location.pathname.includes("enquetes_06")) {
    nomCorrect = "Hélène Vasseur";
}
else if (window.location.pathname.includes("enquetes_10")) {
    nomCorrect = "Nora Kessar";
}
else if (window.location.pathname.includes("enquetes_11")) {
    nomCorrect = "Étienne Cordier";
}
else if (window.location.pathname.includes("enquetes_12")) {
    nomCorrect = "Mathilde Orsini";
}


let formulaire = document.querySelector(".answer-form");

formulaire.addEventListener("submit", function(event) {

    event.preventDefault();

    let nom = document.querySelector("#nom").value;
    let resultat = document.querySelector("#resultat");

    if (nom == nomCorrect) {
        resultat.textContent = "IDENTITÉ CORRECTE.";
    }
    else {
        resultat.textContent = "RÉPONSE INCORRECTE. RÉESSAIE.";
    }

});