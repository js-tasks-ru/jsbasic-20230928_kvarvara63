function initCarousel() {
  let sliderInner = document.querySelector('.carousel__inner');
  let carouselSlide = document.querySelector('.carousel__slide');

  let rightButton = document.querySelector('.carousel__arrow carousel__arrow_right');
  let leftButton = document.querySelector('.carousel__arrow carousel__arrow_left');
  let numberSlider = 0;

  leftButton.addEventListener('click', event => {
      numberSlider -= 1;
      sliderInner.style.transform = `translateX(-${numberSlider * 300}px)`;
  })

  rightButton.addEventListener('click', event => {
    numberSlider += 1;
    sliderInner.style.transform = `translateX(${numberSlider * 300}px)`;
  })
  function removeButton(numberSlider){
    if (numberSlider == 3){
      rightButton.style.display = 'none';
      leftButton.style.display = '';
    } else if (numberSlider == 0){
      leftButton.style.display = 'none';
      rightButton.style.display = '';
    } else if (numberSlider == 1 || numberSlider == 2 ){
      rightButton.style.display = '';
      leftButton.style.display = '';
    } 
  }
}
