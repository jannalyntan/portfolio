document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const backBtn = document.getElementById("backBtn");

  backBtn.addEventListener("click", () => {
    window.location.href = "../index.html";
  });
  /* ------------------------------ */
  /* Text + phone section animation */
  /* ------------------------------ */

  gsap.utils.toArray("section").forEach((section) => {
    const textBlocks = section.querySelectorAll(".words, .words2, .words3");
    const mainImages = section.querySelectorAll("img:not(.deco)");

    gsap.from(textBlocks, {
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        end: "center center",
        scrub: 1,
      },
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
    });

    gsap.from(mainImages, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "center center",
        scrub: 1,
      },
      y: 120,
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.15,
    });
  });

  /* ------------------------------ */
  /* Floating decoration animation */
  /* ------------------------------ */

  gsap.utils.toArray(".bill").forEach((bill, index) => {
    gsap.to(bill, {
      scrollTrigger: {
        trigger: bill.closest("section") || document.body,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
      y: -180,
      x: index % 2 === 0 ? 80 : -80,
      rotation: index % 2 === 0 ? 35 : -35,
      ease: "none",
    });
  });

  gsap.utils.toArray(".moneybag").forEach((bag, index) => {
    gsap.to(bag, {
      scrollTrigger: {
        trigger: bag.closest("section") || document.body,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
      y: -120,
      rotation: index % 2 === 0 ? 12 : -12,
      scale: 1.08,
      ease: "none",
    });
  });

  gsap.utils.toArray(".plane").forEach((plane, index) => {
    gsap.to(plane, {
      scrollTrigger: {
        trigger: plane.closest("section") || document.body,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2,
      },
      x: index % 2 === 0 ? 220 : -220,
      y: -80,
      ease: "none",
    });
  });
});
