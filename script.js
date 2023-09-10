const infoText = document.getElementById('info-text');
const swipeButton = document.getElementById('swipe-button');

let swipeCount = 0;

// Exemple d'informations historiques ou anecdotiques
const informationList = [
    "Le Titanic a coulé en 1912.",
    "La Tour Eiffel a été construite en 1889.",
    "Isaac Newton a découvert la loi de la gravité.",
    // Ajoutez d'autres informations ici
];

function displayRandomInformation() {
    const randomIndex = Math.floor(Math.random() * informationList.length);
    infoText.textContent = informationList[randomIndex];
}

swipeButton.addEventListener('click', () => {
    if (swipeCount < 3) {
        displayRandomInformation();
        swipeCount++;
    } else {
        // Mettez ici la logique pour passer à un paiement
        infoText.textContent = "Vous avez atteint votre limite de swipes gratuits. Veuillez payer pour continuer.";
        swipeButton.disabled = true;
    }
});

// Affiche la première information au chargement de la page
displayRandomInformation();