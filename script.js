document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("soundPopup");
  const enterBtn = document.getElementById("startExperience");
  const video = document.getElementById("showreelVideo");

  document.body.style.overflow = "hidden";

  enterBtn.addEventListener("click", () => {
    if (video) {
      video.muted = false;
      video.volume = 1;
      video.playsInline = true;
    }

    popup.style.opacity = "0";
    popup.style.pointerEvents = "none";
    popup.style.transition = "0.5s ease";

    document.body.style.overflow = "auto";

    startPortfolioAnimations();

    setTimeout(() => {
      popup.remove();
    }, 600);
  });
});

function startPortfolioAnimations() {
  gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger, SplitText);

  const name1Split = new SplitText("#name-1", { type: "chars" });
  const name2Split = new SplitText("#name-2", { type: "chars" });
  const multimediaSplit = new SplitText("#multimedia", { type: "chars" });
  const continueScrolling = new SplitText(".scrollText", { type: "chars" });

  /* ------------------------- */
  /* LOGO INTRO */
  /* ------------------------- */

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

  /* ------------------------- */
  /* INITIAL STATES */
  /* ------------------------- */

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
  gsap.set(".deco-bag-bl", { opacity: 0, scale: 0 });

  gsap.set(".deco-money-ll", { opacity: 0, y: -550, rotation: 3 });
  gsap.set(".deco-money-br", { opacity: 0, y: -880, rotation: -8 });
  gsap.set(".deco-money-tl", { opacity: 0, y: -20, rotation: 10 });
  gsap.set(".deco-money-lr", { opacity: 0, y: -20, rotation: -12 });

  gsap.set(".deco-money-ll-2", { opacity: 1, y: -700, rotation: 18 });
  gsap.set(".deco-money-lr-2", { opacity: 1, y: -850, rotation: -12 });
  gsap.set(".deco-money-br-2", { opacity: 1, y: -950, rotation: 8 });
  gsap.set(".deco-money-tl-2", { opacity: 1, y: -1100, rotation: -18 });

  gsap.set("#nameZen-container", { x: 80, opacity: 0 });
  gsap.set(".mac-wrapper", { x: 120, opacity: 0 });

  gsap.set(".ripple, .ripple2, .ripple3", {
    scale: 0.2,
    opacity: 0,
  });

  gsap.set("#omi-container", { x: 160, opacity: 0 });
  gsap.set(".part3 .iphone2", { x: -160, opacity: 0, scale: 0.85 });

  gsap.set(".deco-omi-1", {
    opacity: 0,
    y: 120,
    rotation: -12,
    scale: 0.8,
  });

  gsap.set(".deco-omi-2", {
    opacity: 0,
    y: -120,
    rotation: 12,
    scale: 0.8,
  });

  /* ------------------------- */
  /* INTRO SCROLL */
  /* ------------------------- */

  const introScrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".introduction",
      start: "top top",
      end: "+=2500",
      scrub: 1.5,
    },
  });

  introScrollTl
    .to(".line-1", { opacity: 1, duration: 1 }, 0)
    .to("#circleAnimation", { scale: 0.25, duration: 1 }, 0)

    .to(".line-2", { opacity: 1, duration: 2 }, 2)
    .to("#circleAnimation", { scale: 0.5, duration: 2 }, 2)

    .to(".line-3", { opacity: 1, duration: 2 }, 4)
    .to("#circleAnimation", { scale: 1, duration: 2, opacity: 0.18 }, 4)

    .to(
      "#circleAnimation",
      {
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      },
      6,
    )

    .to(
      "#circleAnimation",
      {
        backgroundColor: "#ffffff",
        duration: 1.2,
        ease: "power3.out",
      },
      6.3,
    )

    .to(
      ".intro-text",
      {
        opacity: 0,
        duration: 1,
      },
      6.2,
    )

    /* slower white expansion */
    .to(
      "#circleAnimation",
      {
        scale: 9,
        duration: 6,
        ease: "power2.out",
      },
      6.8,
    )

    /* part1 fades in later */
    .to(
      ".part1",
      {
        opacity: 1,
        duration: 1.5,
      },
      8,
    )

    /* iphone starts MUCH later */
    .to(
      ".iphone",
      {
        opacity: 1,
        scale: 1,
        duration: 3.5,
        ease: "power3.out",
      },
      8.6,
    )

    .to(
      ".iphone",
      {
        x: 0,
        duration: 3.5,
        ease: "power3.out",
      },
      9,
    )

    .to(
      ".deco-plane",
      {
        x: 700,
        duration: 17,
        ease: "power3.out",
      },
      6.8,
    )

    .to(
      ".deco-bag-bl",
      {
        opacity: 1,
        scale: 1,
        duration: 1.4,
        ease: "power3.out",
      },
      7.1,
    )

    .to(
      "#splitz-container",
      {
        opacity: 1,
        x: 0,
        duration: 3,
        ease: "power3.out",
      },
      8.6,
    )

    .to(".deco-money-ll", { opacity: 1, duration: 0.8 }, 8)
    .to(".deco-money-br", { opacity: 1, duration: 0.8 }, 9)
    .to(".deco-money-tl", { opacity: 1, duration: 0.8 }, 8.6)
    .to(".deco-money-lr", { opacity: 1, duration: 0.8 }, 8.9)

    .to(
      ".deco-money-ll",
      {
        y: 3200,
        rotation: -95,
        duration: 15,
        ease: "none",
      },
      8,
    )

    .to(
      ".deco-money-br",
      {
        y: 2800,
        rotation: 110,
        duration: 12,
        ease: "none",
      },
      8.3,
    )

    .to(
      ".deco-money-tl",
      {
        y: 2400,
        rotation: -70,
        duration: 16,
        ease: "none",
      },
      8.6,
    )

    .to(
      ".deco-money-lr",
      {
        y: 3500,
        rotation: 120,
        duration: 13,
        ease: "none",
      },
      8.9,
    );

  /* ------------------------- */
  /* HORIZONTAL SCROLL */
  /* ------------------------- */

  if (document.querySelector(".horizontalscrolling")) {
    let rippleStarted = false;

    const startRipples = () => {
      if (rippleStarted) return;
      rippleStarted = true;

      gsap.to(".ripple", {
        scale: 3,
        opacity: 0,
        duration: 15,
        ease: "power2.out",
        repeat: -1,
        stagger: {
          each: 0.55,
          repeat: -1,
        },
        startAt: {
          scale: 0.2,
          opacity: 0.3,
        },
      });

      gsap.to(".ripple2", {
        scale: 2.8,
        opacity: 0,
        duration: 10,
        ease: "power2.out",
        repeat: -1,
        stagger: {
          each: 0.65,
          repeat: -1,
        },
        startAt: {
          scale: 0.2,
          opacity: 0.22,
        },
      });
      /* add to ripple start function */
      gsap.to(".ripple3", {
        scale: 2.6,
        opacity: 0,
        duration: 15,
        ease: "power2.out",
        repeat: -1,
        stagger: {
          each: 0.7,
          repeat: -1,
        },
        startAt: {
          scale: 0.2,
          opacity: 0.18,
        },
      });
    };

    const horizontalTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".horizontalscrolling",
        start: "top top",
        end: "+=5200",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    horizontalTl
      // hold Part 1
      .to(".horizontalscrolling", {
        x: "0vw",
        duration: 1.6,
        ease: "none",
      })

      // move to Part 2
      .to(".horizontalscrolling", {
        x: "-100vw",
        duration: 1.8,
        ease: "none",
      })

      // start ripple animation
      .call(startRipples, null, 1.25)

      // Part 2 content
      .to(
        "#nameZen-container",
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
        },
        1.55,
      )

      .to(
        ".mac-wrapper",
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
        },
        1.65,
      )

      // hold Part 2
      .to(".horizontalscrolling", {
        x: "-100vw",
        duration: 0.8,
        ease: "none",
      })

      // move to Part 3
      .to(".horizontalscrolling", {
        x: "-200vw",
        duration: 1.8,
        ease: "none",
      })

      // Part 3 phone
      .to(
        ".part3 .iphone2",
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 2,
          ease: "power3.out",
        },
        "<1.1",
      )

      // Part 3 text/card
      .to(
        ".part3 #omi-container",
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
        },
        "<0.15",
      )

      // Omi decoration 1
      .to(
        ".deco-omi-1",
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          scale: 1,
          duration: 1,
          ease: "back.out(1.4)",
        },
        "<0.2",
      )

      // Omi decoration 2
      .to(
        ".deco-omi-2",
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          scale: 1,
          duration: 1,
          ease: "back.out(1.4)",
        },
        "<0.2",
      )

      // hold Part 3
      .to(".horizontalscrolling", {
        x: "-200vw",
        duration: 0.8,
        ease: "none",
      });
  }

  /* ------------------------- */
  /* MOTION TITLE */
  /* ------------------------- */

  if (document.querySelector(".motion-title-section h2")) {
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
  }

  /* ------------------------- */
  /* SHOWREEL VIDEO */
  /* ------------------------- */

  const showreelVideo = document.querySelector("#showreelVideo");

  if (showreelVideo) {
    showreelVideo.muted = false;
    showreelVideo.volume = 1;
    showreelVideo.playsInline = true;

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

        onUpdate: (self) => {
          if (self.progress >= 0.25 && self.progress < 0.75) {
            showreelVideo.muted = false;
            showreelVideo.volume = 1;
            showreelVideo.play().catch(() => {});
          }

          if (self.progress >= 0.75) {
            showreelVideo.pause();
          }

          if (self.progress < 0.25) {
            showreelVideo.pause();
            showreelVideo.currentTime = 0;
          }
        },

        onLeaveBack: () => {
          showreelVideo.pause();
          showreelVideo.currentTime = 0;
        },
      },
    });

    showreelTl
      .to("#showreelVideo", {
        scale: 1,
        duration: 1,
        ease: "none",
      })

      .to("#showreelVideo", {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "none",
      })

      .to("#showreelVideo", {
        scale: 0.75,
        opacity: 0.25,
        duration: 1,
        ease: "none",
      })

      .to(".leaving-video-text", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "none",
      });
  }

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });

  ScrollTrigger.refresh();
}
