
//burger
const burgerListBar = document.querySelector('.burger-navigation-bar');

(function () {
  const burger = document.querySelector('.burger');
  burger.addEventListener('click', ()=> {
     burger.classList.toggle('burger_active');
     burgerListBar.classList.toggle('active');
  });
}());