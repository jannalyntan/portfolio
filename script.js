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

  tl.to(
    ".path",
    {
      fillOpacity: 1,
      duration: 0.6,
      stagger: 0.05,
    },
    "<",
  );

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

  // FIX 1: removed the gsap.set(".part1") block that was overriding
  // position:sticky with position:relative. CSS handles positioning.

  // FIX 2: part1 itself starts at opacity 0 so it can be faded in
  gsap.set(".part1", { opacity: 0 });

  gsap.set(".iphone", { opacity: 0, y: 180, scale: 0.82 });
  gsap.set("#splitz-container", { opacity: 0, x: 120 });
  gsap.set(".deco-plane", { x: -2700 });
  gsap.set(".deco-money-tl", { y: -350 });
  gsap.set(".deco-money-br", { y: -1000 });
  gsap.set(".deco-bag-bl", { scale: 0 });
  gsap.set(".deco-money-ll", { y: -600, rotation: 3 });
  gsap.set(".deco-money-lr", { y: -100, rotation: 3, opacity: 0 });

  // -------------------------
  // SCROLL SECTION
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

    .to(
      ".deco-plane",
      {
        x: 625,
        duration: 7,
        ease: "power3.out",
      },
      3.35,
    )

    .to(
      ".deco-money-br",
      {
        y: 100,
        duration: 5,
        rotation: -10,
        ease: "power3.out",
      },
      4.15,
    )

    // FIX 3: fade in .part1 itself before animating its children
    .to(".part1", { opacity: 1, duration: 0.5 }, 3.8)

    // phone slides up
    .to(
      ".iphone",
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.4,
        ease: "power3.out",
      },
      4.1,
    )

    .to(
      ".deco-money-ll",
      {
        y: 100,
        duration: 9,
        rotation: -10,
        ease: "power3.out",
      },
      4.15,
    )

    .to(
      ".deco-bag-bl",
      {
        opacity: 1,
        scale: 1,
        duration: 1.4,
        ease: "power3.out",
      },
      4.1,
    )

    .to(
      ".deco-money-lr",
      {
        y: 200,
        duration: 1.2,
        opacity: 1,
        rotation: -10,
        ease: "power3.out",
      },
      4.15,
    )

    .to(
      ".deco-money-tl",
      {
        y: 0,
        duration: 4,
        rotation: 6,
        ease: "power2.out",
      },
      4.15,
    )

    // text card slides in
    .to(
      "#splitz-container",
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power3.out",
      },
      4.35,
    )

    .to(
      splitz.chars,
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
      },
      4.35,
    );
});
