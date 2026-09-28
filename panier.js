// panier.js — Gestion du badge du panier (à importer sur TOUTES les pages)

function AjoutersurPanier(){
    let panier = JSON.parse(localStorage.getItem("panier")) || [];
    let total = panier.reduce((acc, article) => acc + article.quantité, 0);
    const icon = document.getElementById("icon-panier");

    // Vérifie que l'élément existe AVANT de le modifier
    if(icon) {
        if(total > 0) {
            icon.textContent = total;
        } else {
            icon.textContent = "";
        }
    }
}

AjoutersurPanier();