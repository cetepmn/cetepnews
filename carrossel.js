let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');

function changeSlide(index) {
  const totalSlides = slides.length;
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  // Mover o carrossel
  document.querySelector('.carousel-container').style.transform = `translateX(-${currentIndex * 100}%)`;

  // Atualizar bolinhas
  dots.forEach((dot, idx) => {
    dot.classList.remove('active');
    if (idx === currentIndex) {
      dot.classList.add('active');
    }
  });
}

// Função para avançar automaticamente
function autoChangeSlide() {
  setInterval(() => {
    changeSlide(currentIndex + 1);
  }, 3000); // Troca a cada 3 segundos
}

// Adicionar eventos de click nas bolinhas
dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => changeSlide(idx));
});

// Iniciar a troca automática
autoChangeSlide();

