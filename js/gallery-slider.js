
  let slideIndex = 1;
  showSlides(slideIndex);

  let slideArrowPrev = document.querySelector('.gallery-slider-button-prev');
  let slideArrowNext = document.querySelector('.gallery-slider-button-next');

  slideArrowPrev.onclick = function () {
    plusSlides(-1);
  };
  slideArrowNext.onclick = function () {
    plusSlides(1);
  };

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.querySelectorAll('.gallery-slider');

    let dots = document.getElementsByClassName("gallery-slider-bottom-img--demo");


    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }


    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" demo--active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " demo--active";
  }
