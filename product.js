// product.js — Afficher seulement le produit cliqué

document.addEventListener('DOMContentLoaded', function() {

    const hash = window.location.hash;      // ex : "#shatvow"
    const produits = document.querySelectorAll('.product-page');

    if (!produits.length) return;

    // 1. Cacher TOUS les produits
    produits.forEach(function(produit) {
        produit.style.display = 'none';
    });

    // 2. Afficher SEULEMENT celui qui est ciblé
    if (hash) {
        const cible = document.querySelector(hash);
        if (cible) {
            cible.style.display = 'block';
        } else {
            // Si l'ancre ne correspond à rien → montrer le premier
            produits[0].style.display = 'block';
        }
    } else {
        // Pas d'ancre du tout → montrer le premier
        produits[0].style.display = 'block';
    }
});