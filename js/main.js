'use strict';

{
  const mainImage = document.getElementById('mainImage');
  const mainImageStock = [
    "img/dog01.jpeg",
    "img/dog02.jpeg",
    "img/dog03.jpeg",
    "img/dog04.jpeg",
  ];

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

  mainImageScroll();
}