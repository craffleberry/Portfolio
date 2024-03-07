function moveSlider(direction) {
    const slider = document.querySelector('.slider');
    const scrollAmount = slider.offsetWidth;
    slider.scrollLeft += scrollAmount * direction;
  }