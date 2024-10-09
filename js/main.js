const containers = document.querySelectorAll('.service-card');

containers.forEach((container) => {
  const slider = container.querySelector('.slider');
  slider.addEventListener('input', (e) => {
    container.style.setProperty('--position', `${e.target.value}%`);
  });
});




