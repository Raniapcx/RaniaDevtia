

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



// أولاً، تأكد من تهيئة EmailJS بمفتاحك العام
(function() {
  emailjs.init("BzzzgWOeKEBrfr9nV"); // استبدل YOUR_PUBLIC_KEY بمفتاحك العام من EmailJS
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // منع إعادة تحميل الصفحة عند الإرسال

  // جمع البيانات من النموذج
  const formData = {
      name: document.getElementById('nom').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
  };

  // إرسال البريد الإلكتروني باستخدام EmailJS
  emailjs.send("service_dy21ajq", "template_25vmwbe", formData)
      .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          alert("Votre message a été envoyé avec succès !");
      }, function(error) {
          console.log('FAILED...', error);
          alert("Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.");
      });
});
