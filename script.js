

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
