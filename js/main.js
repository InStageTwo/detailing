
// const containers = document.querySelectorAll('.service-container');

// containers.forEach((container) => {
//   const slider = container.querySelector('.slider');

//   if (slider) {
//     slider.addEventListener('input', (e) => {
//       container.style.setProperty('--position', `${e.target.value}%`);
//     });
//   }
// });


// const slider = document.getElementById("slider");
// slider.addEventListener("input", function(e) {
//   document.querySelector(".image.after").style.width = e.target.value + "%";
// });

const containers = document.querySelectorAll('.service-container');

containers.forEach((container) => {
  const slider = container.querySelector('.slider');
  const image = container.querySelector('.image.after');

  if (slider && image) {
    slider.addEventListener('input', (e) => {
      image.style.width = `${e.target.value}%`;
    });
  }
});