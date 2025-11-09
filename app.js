const images = ['1.jpg', '2.jpg', '3.jpg', "4.jpg"];
const targetImage = document.querySelector('.profile-image img');
let i = 1;

targetImage.addEventListener('click', () => {

    targetImage.style.opacity = '0';

    setTimeout(() => {
  i = (i + 1) % images.length;
  targetImage.src = 'images/' + images[i];
  targetImage.style.opacity = '1';
}, 200);



});