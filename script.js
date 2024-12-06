window.revelar = ScrollReveal({reset: true})

revelar.reveal('.txt_russo', 
  {
  duration: 2000
  distance: '90px'
  })
  
  


window.reveal = ScrollReveal({ reset: true });

  reveal.reveal('.txt_russo', {
    duration: 2000,
    distance: '90px'
  });
// Função para rolar suavemente para um elemento
function smoothScroll(target) {
  const element = document.getElementById(target);
  element.scrollIntoView({ behavior: 'smooth' });
}

// Adiciona um ouvinte de evento ao link com a classe "scroll-link"
document.querySelector('.scroll-link').addEventListener('click', function(e) {
  e.preventDefault();
  const target = this.getAttribute('href');
  smoothScroll(target.substring(1));
});