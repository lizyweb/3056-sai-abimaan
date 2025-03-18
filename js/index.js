document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  window.onpageshow = function(event) {
    if (event.persisted) {
      location.reload(); // Reload the page when navigated back to
    }
  };


// Vendor carousel
$('.vendor-carousel').owlCarousel({
  loop: true,
  margin: 45,
  dots: false,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000, 
  autoplayHoverPause: false,
  autoplaySpeed: 1000,
  smartSpeed: 1000,
  responsive: {
      0:{
          items:2
      },
      576:{
          items:3
      },
      768:{
          items:4
      },
      992:{
          items:5
      }
  }
});
  
});

