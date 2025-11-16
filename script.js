window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  document.getElementById("name").style.transform = `translateY(${
    scrollY * 0.05
  }px)`;
});

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
