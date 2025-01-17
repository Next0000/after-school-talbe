
const thumb = document.querySelectorAll('.slide1');
 
const switchThumb = (index) => {
  document.querySelector('.thumb-media-active').classList.remove('thumb-media-active');
  thumb[index].classList.add('thumb-media-active');
}
 


//サムネ
var infiniteSlider = new Swiper(".infinite-slider", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
    speed: 300,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0:{
            direction: "horizontal",
        },
        // ウィンドウサイズが750px以下
        750: {
            direction: "vertical",
        }
    },

    on: {
        afterInit: (swiper) => {
          thumb[swiper.realIndex].classList.add('thumb-media-active');
          for (let i = 0; i < thumb.length; i++) {
            thumb[i].onclick = () => {
              swiper.slideTo(i);
            };
          }
        },
        slideChange: (swiper) => {
          switchThumb(swiper.realIndex);
        },
      }
});



  
  