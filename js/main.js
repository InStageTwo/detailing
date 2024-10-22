
// document.addEventListener("DOMContentLoaded", function() {
//   const containers = document.querySelectorAll('.service-container');
 
//   containers.forEach((container) => {
//   const slider = container.querySelector('.slider');
//   const image = container.querySelector('.image.after');
//   const sliderLine = container.querySelector('.slider-line');
 
//     if (slider && image && sliderLine) {
//       slider.addEventListener('input', (e) => {
//         image.style.width = `${e.target.value}%`;
//         sliderLine.style.left = `${e.target.value}%`;
//       });
//     }
//   });
// });



const cards = [
  { title: 'Полировка кузова', copy: 'Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains', button: 'Заказать', image: '1' },
  { title: 'Оклейка авто пленкой', copy: 'Plan your next beach trip with these fabulous destinations', button: 'Заказать', image: '2' },
  { title: 'Нанесение керамики', copy: 'It\'s the desert you\'ve always dreamed of', button: 'Заказать', image: '3' },
  { title: 'Тонировка', copy: 'Seriously, straight up, just blast off into outer space today', button: 'Заказать', image: '4' }
];

const cardsContainer = document.getElementById('cardsContainer');

cards.forEach((card, index) => {
  const cardElement = document.createElement('div');
  cardElement.className = 'card';
  cardElement.style.backgroundImage = `url(assets/img/${card.image}.jpg)`;
  

  const contentElement = document.createElement('div');
  contentElement.className = 'content';

  const titleElement = document.createElement('h2');
  titleElement.className = 'service-title';
  titleElement.textContent = card.title;

  const copyElement = document.createElement('p');
  copyElement.className = 'copy';
  copyElement.textContent = card.copy;

  const buttonElement = document.createElement('button');
  buttonElement.className = 'service-btn';
  buttonElement.textContent = card.button;

  contentElement.appendChild(titleElement);
  contentElement.appendChild(copyElement);
  contentElement.appendChild(buttonElement);
  cardElement.appendChild(contentElement);
  cardsContainer.appendChild(cardElement);
});
