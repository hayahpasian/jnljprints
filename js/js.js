$(document).ready(function(){
  $('.slider').slick({
    centerMode: true,
     arrows: false,
  centerPadding: '5%',
  slidesToShow: 3,
  adaptiveHeight:true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1
      }
    }
  ]
  });
});