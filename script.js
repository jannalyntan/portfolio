document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger, SplitText);

  // -------------------------
  // SPLIT TEXT
  // -------------------------
  const name1Split = new SplitText("#name-1", { type: "chars" });
  const name2Split = new SplitText("#name-2", { type: "chars" });
  const multimediaSplit = new SplitText("#multimedia", { type: "chars" });
  const continueScrolling = new SplitText(".scrollText", { type: "chars" });
  const splitz = new SplitText(".splitz", { type: "chars" });

  const showreelVideo = document.querySelector("#showreelVideo");

  // -------------------------
  // INTRO TIMELINE
  // -------------------------
  const tl = gsap.timeline();

  tl.from(".path", {
    duration: 1.2,
    stagger: 0.08,
    drawSVG: "0%",
    ease: "power1.inOut",
  });
  tl.from(
    name1Split.chars,
    {
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.06,
      ease: "power2.out",
    },
    "<",
  );
  tl.from(
    name2Split.chars,
    {
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.03,
      ease: "power2.out",
    },
    "<0.75",
  );
  tl.from(
    multimediaSplit.chars,
    {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.03,
      ease: "power2.out",
    },
    "<0.75",
  );
  tl.to(".path", { fillOpacity: 1, duration: 0.6, stagger: 0.05 }, "<");
  tl.from(
    continueScrolling.chars,
    {
      opacity: 0,
      y: 10,
      duration: 0.8,
      stagger: 0.03,
      ease: "power2.out",
    },
    "+=0.5",
  );

  // -------------------------
  // INITIAL STATES
  // -------------------------
  gsap.set(".line-1, .line-2, .line-3", { opacity: 0.35 });
  gsap.set("#circleAnimation", {
    scale: 0,
    backgroundColor: "#000000",
    opacity: 0.12,
  });
  gsap.set(".part1", { opacity: 0 });
  gsap.set(".iphone", { opacity: 0, scale: 0.82, x: 400 });
  gsap.set("#splitz-container", { opacity: 0, x: 120 });
  gsap.set(".deco-plane", { x: -2700 });
  gsap.set(".deco-money-tl", { opacity: 0, y: -50 });
  gsap.set(".deco-money-br", { opacity: 0, y: -100 });
  gsap.set(".deco-bag-bl", { scale: 0 });
  gsap.set(".deco-money-ll", { y: -700, rotation: 3 });
  gsap.set(".deco-money-lr", { y: -100, rotation: 3, opacity: 0 });

  gsap.set("#nameZen-container", { x: 80, opacity: 0 });
  gsap.set(".mac-wrapper", { x: 120, opacity: 0 });

  // -------------------------
  // INTRODUCTION SCROLL TIMELINE (unchanged)
  // -------------------------
  const introScrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".introduction",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
  });

  introScrollTl
    .to(".line-1", { opacity: 1, duration: 1 }, 0)
    .to("#circleAnimation", { scale: 0.25, duration: 1 }, 0)
    .to(".line-2", { opacity: 1, duration: 1 }, 1)
    .to("#circleAnimation", { scale: 0.5, duration: 1 }, 1)
    .to(".line-3", { opacity: 1, duration: 1 }, 2)
    .to("#circleAnimation", { scale: 1, duration: 1, opacity: 0.18 }, 2)
    .to(
      "#circleAnimation",
      { backgroundColor: "#ffffff", opacity: 1, duration: 1 },
      3,
    )
    .to(".intro-text", { opacity: 0, duration: 0.8 }, 3)
    .to("#circleAnimation", { scale: 7, duration: 2, ease: "none" }, 3.2)

    .to(".part1", { opacity: 1, duration: 0.5 }, 3.4)
    .to(".iphone", { opacity: 1, scale: 1, duration: 0.8 }, 3.1)
    .to(".iphone", { x: 0, duration: 1.2 }, 3.8)
    .to(".deco-plane", { x: 1600, duration: 7, ease: "power3.out" }, 3.8)

    .to(
      ".deco-bag-bl",
      { opacity: 1, scale: 1, duration: 1.4, ease: "power3.out" },
      4.1,
    )

    .to(
      ".deco-money-ll",
      { y: 100, duration: 9, rotation: -10, opacity: 1, ease: "power3.out" },
      4.15,
    )
    .to(
      ".deco-money-br",
      { y: 100, duration: 5, rotation: -10, opacity: 1, ease: "power3.out" },
      4.15,
    )
    .to(
      ".deco-money-tl",
      { y: 0, duration: 4, rotation: 6, opacity: 1, ease: "power2.out" },
      4.15,
    )

    .to(
      "#splitz-container",
      { opacity: 1, x: 0, duration: 2, ease: "power3.out" },
      4.35,
    )
    .to(
      splitz.chars,
      { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" },
      4.35,
    )
    .to(
      ".deco-money-lr",
      { y: 250, duration: 2, opacity: 1, rotation: -10, ease: "power3.out" },
      4.7,
    );

  // -------------------------
  // HORIZONTAL SCROLL
  // -------------------------
  gsap.set("#nameZen-container", { x: 80, opacity: 0 });
  gsap.set(".mac-wrapper", { x: 120, opacity: 0 });

  const horizontalTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".horizontalscrolling",
      start: "top top",
      end: "+=1800",
      scrub: 1,
      pin: true,
      anticipatePin: 1,
    },
  });

  horizontalTl
    .to(".horizontalscrolling", {
      x: "-100vw",
      ease: "none",
    })

    .to(
      "#nameZen-container",
      {
        x: 0,
        opacity: 1,
        ease: "power2.out",
      },
      0.25,
    )
    .to(
      ".mac-wrapper",
      {
        x: 0,
        opacity: 1,
        ease: "power2.out",
      },
      0.35,
    );
});
