// Données d'exemple pour les produits
const produits = [
  { id: 1, nom: "Produit 1", prix: 19.99, image: "https://picsum.photos/300/300?random=4" },
  { id: 2, nom: "Produit 2", prix: 29.99, image: "https://picsum.photos/300/300?random=5" },
  { id: 3, nom: "Produit 3", prix: 39.99, image: "https://picsum.photos/300/300?random=6" },
];

// Écouteurs d'événements
document.addEventListener('DOMContentLoaded', () => {
  mettreAJourComptePanier();
  afficherProduits();
  afficherPanier();

  const btnMenuMobile = document.getElementById('btnMenuMobile');
  const menuMobile = document.getElementById('menuMobile');
  if (btnMenuMobile && menuMobile) {
      btnMenuMobile.addEventListener('click', () => {
          menuMobile.classList.toggle('hidden');
      });
  }




  const formConnexion = document.getElementById('formConnexion');
  if (formConnexion) {
      formConnexion.addEventListener('submit', (e) => {
          e.preventDefault();
          alert('Connexion simulée. Dans une vraie application, cela enverrait les données au serveur.');
      });
  }

  const formContact = document.getElementById('formContact');
  if (formContact) {
      formContact.addEventListener('submit', (e) => {
          e.preventDefault();
          alert('Message envoyé avec succès !');
          formContact.reset();
      });
  }
});

        //contact        
        
       

        function isElementInViewport(el) {
          var rect = el.getBoundingClientRect();
          return (
              rect.top >= 0 &&
              rect.left >= 0 &&
              rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
              rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
      }
      
      function handleScroll() {
          var elements = document.querySelectorAll('#about-me, #skills');
          elements.forEach(function(element) {
              if (isElementInViewport(element)) {
                  element.classList.add('visible');
              }
          });
      }
      
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('load', handleScroll);