document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger, SplitText);

  // -------------------------
  // SPLIT TEXT
  // -------------------------
  const name1Split = new SplitText("#name-1", { type: "chars" });
  const name2Split = new SplitText("#name-2", { type: "chars" });
  const multimediaSplit = new SplitText("#multimedia", { type: "chars" });
  const continueScrolling = new SplitText(".scrollText", { type: "chars" });
  const splitzTtitle = new SplitText("#splitz", { type: "chars" });

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
  // SCROLL SECTION
  // -------------------------
  gsap.set(".line-1, .line-2, .line-3", {
    opacity: 0.35,
  });

  gsap.set("#circleAnimation", {
    scale: 0,
    backgroundColor: "#000000",
    opacity: 0.12,
  });

  gsap.set("#iphone, #iphoneIMG-1", {
    opacity: 0,
  });

  const introScrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".introduction",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
  });

  introScrollTl
    // line 1
    .to(".line-1", { opacity: 1, duration: 1 }, 0)
    .to("#circleAnimation", { scale: 0.25, duration: 1 }, 0)

    // line 2
    .to(".line-2", { opacity: 1, duration: 1 }, 1)
    .to("#circleAnimation", { scale: 0.5, duration: 1 }, 1)

    // line 3
    .to(".line-3", { opacity: 1, duration: 1 }, 2)
    .to("#circleAnimation", { scale: 1, duration: 1, opacity: 0.18 }, 2)

    // invert moment
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
        color: "transparent",
        duration: 1,
      },
      3,
    )

    // expand to fill the whole screen
    .to(
      "#circleAnimation",
      {
        scale: 6,
        duration: 2,
        ease: "none",
      },
      3.2,
    )

    // expand to fill the whole screen
    .to(
      "#iphone, #iphoneIMG-1",
      {
        opacity: 1,
        duration: 2,
      },
      3.6,
    )

    // expand to fill the whole screen
    .to(
      "#iphone, #iphoneIMG-1",
      {
        y: 40,
        duration: 2,
      },
      4,
    );

  tl.from(
    splitzTtitle.chars,
    {
      opacity: 1,
      y: 10,
      duration: 0.8,
      stagger: 0.03,
      ease: "power2.out",
    },
    "+=0.5",
  );
});
