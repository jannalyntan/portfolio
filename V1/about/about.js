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
