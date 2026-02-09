document.addEventListener("scroll", function () {
  const reveals = document.querySelectorAll(".scroll-reveal");

  reveals.forEach((el, index) => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      // add a slight delay for each item
      el.style.transitionDelay = `${index * 0.15}s`;
      el.classList.add("visible");
    }
  });
});

window.addEventListener("load", () => {
  const images = document.querySelectorAll(".fade-in-on-load");

  images.forEach((img, index) => {
    // Stagger the reveal slightly
    img.style.transitionDelay = `${index * 0.2}s`;
    img.classList.add("visible");
  });
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
