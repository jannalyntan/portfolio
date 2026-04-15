// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".box", {
    x: 200,
    rotation: 360,
    scale: 2,
    scrollTrigger: ".box",
  });
});
