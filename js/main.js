
document.addEventListener("DOMContentLoaded", function() {
  const containers = document.querySelectorAll('.service-container');
 
  containers.forEach((container) => {
  const slider = container.querySelector('.slider');
  const image = container.querySelector('.image.after');
  const sliderLine = container.querySelector('.slider-line');
 
    if (slider && image && sliderLine) {
      slider.addEventListener('input', (e) => {
        image.style.width = `${e.target.value}%`;
        sliderLine.style.left = `${e.target.value}%`;
      });
    }
  });
});