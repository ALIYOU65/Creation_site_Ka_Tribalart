const selectObjet = document.getElementById('objet');
const prixAffiche = document.getElementById('prix-affiche');
const boutonAjouter = document.getElementById('ajouter-panier');


selectObjet.addEventListener('change', function () {
    const prix = selectObjet.options[selectObjet.selectedIndex].dataset.price;
    prixAffiche.textContent = `Prix : ${prix} €`;
});


boutonAjouter.addEventListener('click', function () {
    const objetSelectionne = selectObjet.options[selectObjet.selectedIndex].text;
    const prix = selectObjet.options[selectObjet.selectedIndex].dataset.price;

    if (prix > 0) {
        alert(`L'objet "${objetSelectionne}" a été ajouté au panier pour ${prix} €.`);
    } else {
        alert("Veuillez sélectionner un objet avant de confirmer l'achat.");
    }
});


