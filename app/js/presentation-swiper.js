document.addEventListener('DOMContentLoaded', function(){ 
  const slides = document.querySelector('#js-presentation-swiper'),
        pagination = document.querySelector('#js-presentation-pagination');

  let mySwiper = new Swiper(slides, {
      // Optional parameters
      slidesPerView: 1,
      watchSlidesVisibility: true,
      loop: false,
    
      // If we need pagination
      pagination: {
        el: pagination,
        type: 'bullets',
        clickable: true,
      },
  })
});