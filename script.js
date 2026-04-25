document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger, SplitText);

  const name1Split = new SplitText("#name-1", { type: "chars" });
  const name2Split = new SplitText("#name-2", { type: "chars" });
  const multimediaSplit = new SplitText("#multimedia", { type: "chars" });
  const continueScrolling = new SplitText(".scrollText", { type: "chars" });
  const splitz = new SplitText(".splitz", { type: "chars" });

  // -------------------------
  // LOGO INTRO
  // -------------------------
  const tl = gsap.timeline();

  tl.from(".path", {
    duration: 1.2,
    stagger: 0.08,
    drawSVG: "0%",
    ease: "power1.inOut",
  })
    .from(
      name1Split.chars,
      {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.06,
        ease: "power2.out",
      },
      "<",
    )
    .from(
      name2Split.chars,
      {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.03,
        ease: "power2.out",
      },
      "<0.5",
    )
    .from(
      multimediaSplit.chars,
      {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.03,
        ease: "power2.out",
      },
      "<0.5",
    )
    .to(
      ".path",
      {
        fillOpacity: 1,
        duration: 0.6,
        stagger: 0.05,
      },
      "<",
    )
    .from(
      continueScrolling.chars,
      {
        opacity: 0,
        y: 10,
        duration: 0.8,
        stagger: 0.03,
        ease: "power2.out",
      },
      "+=0.2",
    );

  // -------------------------
  // INITIAL STATES
  // -------------------------
  gsap.set(".line-1, .line-2, .line-3", { opacity: 0.1 });

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
  // INTRO SCROLL
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

    .to(".line-2", { opacity: 1, duration: 2 }, 2)
    .to("#circleAnimation", { scale: 0.5, duration: 1 }, 2)

    .to(".line-3", { opacity: 1, duration: 2 }, 4)
    .to("#circleAnimation", { scale: 1, duration: 1, opacity: 0.18 }, 4)

    .to(
      "#circleAnimation",
      {
        backgroundColor: "#ffffff",
        opacity: 1,
        duration: 1,
      },
      5,
    )

    .to(".intro-text", { opacity: 0, duration: 0.8 }, 5)
    .to("#circleAnimation", { scale: 7, duration: 2, ease: "none" }, 5.2)

    .to(".part1", { opacity: 1, duration: 0.5 }, 5.4)
    .to(".iphone", { opacity: 1, scale: 1, duration: 3 }, 5.1)
    .to(".iphone", { x: 0, duration: 3 }, 6)

    .to(
      ".deco-plane",
      {
        x: 700,
        duration: 17,
        ease: "power3.out",
      },
      5.8,
    )

    .to(
      ".deco-bag-bl",
      {
        opacity: 1,
        scale: 1,
        duration: 1.4,
        ease: "power3.out",
      },
      6.1,
    )

    .to(
      ".deco-money-ll",
      {
        y: 100,
        duration: 9,
        rotation: -10,
        opacity: 1,
        ease: "power3.out",
      },
      7,
    )

    .to(
      ".deco-money-br",
      {
        y: 100,
        duration: 5,
        rotation: -10,
        opacity: 1,
        ease: "power3.out",
      },
      7,
    )

    .to(
      ".deco-money-tl",
      {
        y: 0,
        duration: 4,
        rotation: 6,
        opacity: 1,
        ease: "power2.out",
      },
      7,
    )

    .to(
      "#splitz-container",
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power3.out",
      },
      6.35,
    )

    .to(
      splitz.chars,
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power3.out",
      },
      6.35,
    )

    .to(
      ".deco-money-lr",
      {
        y: 250,
        duration: 2,
        opacity: 1,
        rotation: -10,
        ease: "power3.out",
      },
      6.7,
    );

  // -------------------------
  // HORIZONTAL SCROLL
  // Part 1 holds, money drops, then Part 2 comes in
  // -------------------------
  const horizontalTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".horizontalscrolling",
      start: "top top",
      end: "+=3600",
      scrub: 1,
      pin: true,
      anticipatePin: 1,
    },
  });

  horizontalTl
    // Hold on Part 1 first
    .to(".horizontalscrolling", {
      x: "0vw",
      duration: 1.2,
      ease: "none",
    })

    // Money drops while still on Part 1 / moving toward Part 2
    .to(
      ".deco-money-ll",
      {
        y: 1200,
        rotation: -55,
        ease: "none",
        duration: 4.7,
      },
      0.8,
    )

    .to(
      ".deco-money-br",
      {
        y: 1150,
        rotation: 50,
        ease: "none",
        duration: 4.7,
      },
      0.8,
    )

    .to(
      ".deco-money-tl",
      {
        y: 950,
        rotation: -45,
        ease: "none",
        duration: 4.7,
      },
      0.8,
    )

    .to(
      ".deco-money-lr",
      {
        y: 1300,
        rotation: 45,
        ease: "none",
        duration: 4.7,
      },
      0.8,
    )
    // Move to Part 2
    .to(
      ".horizontalscrolling",
      {
        x: "-100vw",
        duration: 2,
        ease: "none",
      },
      1.2,
    )

    .to(
      "#nameZen-container",
      {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 0.8,
      },
      1.7,
    )

    .to(
      ".mac-wrapper",
      {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 0.8,
      },
      1.8,
    )

    // Hold Part 2 before Motion Graphics rises
    .to(".horizontalscrolling", {
      x: "-100vw",
      duration: 1.5,
      ease: "none",
    });

  // -------------------------
  // MOTION GRAPHICS TITLE
  // -------------------------
  const motionTitleSplit = new SplitText(".motion-title-section h2", {
    type: "chars",
  });

  gsap.set(motionTitleSplit.chars, {
    y: 80,
    opacity: 0,
  });

  gsap.to(motionTitleSplit.chars, {
    y: 0,
    opacity: 1,
    stagger: 0.04,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".motion-title-section",
      start: "top 55%",
      toggleActions: "play none none reverse",
    },
  });

  // -------------------------
  // SHOWREEL VIDEO
  // 75% -> 100% play -> 75% pause -> leaving text
  // -------------------------
  const video = document.querySelector("#showreelVideo");

  if (video) {
    gsap.set("#showreelVideo", {
      scale: 0.75,
      opacity: 1,
    });

    gsap.set(".leaving-video-text", {
      opacity: 0,
      y: 40,
    });

    const showreelTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".showreel-section",
        start: "top top",
        end: "+=3200",
        scrub: true,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,

        onEnter: () => {
          video.pause();
          video.currentTime = 0;
        },

        onLeaveBack: () => {
          video.pause();
          video.currentTime = 0;
        },
      },
    });

    showreelTl
      .to("#showreelVideo", {
        scale: 1,
        duration: 1,
        ease: "none",
        onComplete: () => {
          video.play().catch(() => {});
        },
        onReverseComplete: () => {
          video.pause();
          video.currentTime = 0;
        },
      })

      .to("#showreelVideo", {
        scale: 1,
        duration: 1,
        ease: "none",
      })

      .to("#showreelVideo", {
        scale: 0.75,
        opacity: 0.5,
        duration: 1,
        ease: "none",
        onStart: () => {
          video.pause();
        },
        onReverseComplete: () => {
          video.play().catch(() => {});
        },
      })

      .to(".leaving-video-text", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "none",
      })

      .to(".leaving-video-text", {
        opacity: 1,
        duration: 0.7,
        ease: "none",
      });
  }

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});
