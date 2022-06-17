'use strict';

{
  const mainImage = document.getElementById('mainImage');
  const mainImageStock = [
    "img/banner01.jpeg",
    "img/banner02.jpeg",
    "img/banner03.jpeg",
    "img/banner04.jpeg",
    "img/banner05.jpeg",
    "img/banner06.jpeg",
  ];

  const mainOpen = document.querySelectorAll('.mainOpen');
  const mainPlus = document.querySelectorAll('.plus');
  const mainAnimal = document.querySelectorAll('.mainAnimal');

  function mainImageScroll(){
    setTimeout(() =>{
      mainImage.style.transform = `translateX(${-100 / mainImageStock.length}%)`;
      mainImage.style.transition = 'transform 1s';

      setTimeout(() =>{
        const image = document.querySelectorAll('#mainImage > li');
        const cloneImage = image[0].cloneNode(true);
        mainImage.appendChild(cloneImage);
        image[0].remove();
        mainImage.style.transition = 'none';
        mainImage.style.transform = 'none';
      }, 1100);

      mainImageScroll();
    }, 3000);
  }

  for(let i = 0; i < mainImageStock.length; i++){
    const li = document.createElement('li');
    const img = document.createElement('img');

    img.src = mainImageStock[i];
    li.appendChild(img);
    mainImage.appendChild(li);
  }

  mainOpen.forEach((open, index) =>{
    open.addEventListener('click', e =>{
      e.preventDefault();
      mainAnimal[index].classList.toggle('hidden');

      if(mainAnimal[index].classList.contains('hidden')){
        mainPlus[index].textContent = '+'
      } else {
        mainPlus[index].textContent = '-'
      }
    });
  });

  mainImageScroll();
}