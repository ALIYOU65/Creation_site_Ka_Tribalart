const pagesObjets = {
    oba: "tête_oba.html",
    tchokwe: "masque_tchokwé.html",
    nkisi: "statue_nkisi.html",
    baoulé: "masque_baoulé.html",
    bacongo: "statue_bacongo.html",
    ife: "tête_ifé.html",
};

function filtrerCartes() {
    const recherche = document.getElementById("barre_recherche").value.toLowerCase().trim();
    const categorieSelectionnee = document.getElementById("liste_objets").value;
    const cartes = document.querySelectorAll(".carte");

    cartes.forEach((carte) => {
        const categorie = carte.dataset.categorie;
        const titre = carte.querySelector("h2").textContent.toLowerCase();
        const correspondRecherche = !recherche || titre.includes(recherche);
        const correspondCategorie = categorieSelectionnee === "all" || categorie === categorieSelectionnee;

        if (correspondRecherche && correspondCategorie) {
            carte.style.display = "block";
        } else {
            carte.style.display = "none";
        }
    });
}

function ouvrirPage(categorie) {
    if (pagesObjets[categorie]) {
        window.location.href = pagesObjets[categorie];
    } else {
        alert("Aucune page trouvée pour cet objet.");
    }
}

function rechercherObjet() {
    const recherche = document.getElementById("barre_recherche").value.toLowerCase().trim();
    const categorieSelectionnee = document.getElementById("liste_objets").value;
    const cartes = document.querySelectorAll(".carte");

    let categorieTrouvee = null;

    cartes.forEach((carte) => {
        const categorie = carte.dataset.categorie;
        const titre = carte.querySelector("h2").textContent.toLowerCase();

        if (
            (recherche && titre.includes(recherche)) ||
            (categorieSelectionnee !== "all" && categorie === categorieSelectionnee)
        ) {
            categorieTrouvee = categorie;
        }
    });

    if (categorieTrouvee) {
        ouvrirPage(categorieTrouvee);
    } else {
        alert("Aucun objet trouvé.");
    }
}

document.getElementById("barre_recherche").addEventListener("input", filtrerCartes);
document.getElementById("liste_objets").addEventListener("change", filtrerCartes);
document.getElementById("bouton_recherche").addEventListener("click", rechercherObjet);
