document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger, SplitText);

  // -------------------------
  // SPLIT TEXT
  // -------------------------
  const name1Split = new SplitText("#name-1", { type: "chars" });
  const name2Split = new SplitText("#name-2", { type: "chars" });
  const multimediaSplit = new SplitText("#multimedia", { type: "chars" });
  const continueScrolling = new SplitText(".scrollText", { type: "chars" });

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
  gsap.set(".line-1, .line-2, .line-3", {
    opacity: 0.35,
  });

  gsap.set("#circleAnimation", {
    scale: 0,
    backgroundColor: "#000000",
    opacity: 0.12,
  });

  gsap.set(".iphone", {
    opacity: 0,
    y: 180,
    scale: 0.82,
  });

  gsap.set("#splitz-container", {
    opacity: 0,
    x: 120,
  });

  // optional: make part1 sit above the white circle reveal nicely
  gsap.set(".part1", {
    position: "relative",
    zIndex: 2,
  });

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
      {
        backgroundColor: "#ffffff",
        opacity: 1,
        duration: 1,
      },
      3,
    )

    .to(
      ".intro-text",
      {
        opacity: 0,
        duration: 0.8,
      },
      3,
    )

    .to(
      "#circleAnimation",
      {
        scale: 7,
        duration: 2,
        ease: "none",
      },
      3.2,
    )

    // phone appears and moves into place
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

    // text card appears slightly after
    .to(
      "#splitz-container",
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
      },
      4.35,
    );
});