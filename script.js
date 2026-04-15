document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger, SplitText);

  const name1Split = new SplitText("#name-1", { type: "chars" });
  const name2Split = new SplitText("#name-2", { type: "chars" });
  const multimediaSplit = new SplitText("#multimedia", { type: "chars" });
  const continueScrolling = new SplitText(".scrollText", { type: "chars" });

  const tl = gsap.timeline();

  // 1. draw the outline
  tl.from(".path", {
    duration: 1.2,
    stagger: 0.08,
    drawSVG: "0%",
    ease: "power1.inOut",
  });

  // 2. animate JANNALYN
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

  // 3. animate TAN
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

  // 4. animate subtitle
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

  // 5. fill it in
  tl.to(
    ".path",
    {
      fillOpacity: 1,
      duration: 0.6,
      stagger: 0.05,
    },
    "<",
  );

  // 6. Continue Scrolling
  tl.from(
    continueScrolling.chars,
    {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    },
    "-+15",
  );
});
