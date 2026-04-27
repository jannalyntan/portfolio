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

  const splitzElement = document.querySelector(".splitz");
  let splitz = null;

  if (splitzElement) {
    splitz = new SplitText(".splitz", { type: "chars" });
  }

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

  /* ------------------------- */
  /* INTRO SCROLL */
  /* ------------------------- */

  const introScrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".introduction",
      start: "top top",
      end: "+=2500",
      scrub: 1.5,
      scrub: true,
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
      5,
    )
    .to(
      "#circleAnimation",
      {
        backgroundColor: "#ffffff",
        duration: 1,
        ease: "power3.out",
      },
      5.25,
    )

    .to(".intro-text", { opacity: 0, duration: 0.8 }, 5)

    .to(
      "#circleAnimation",
      {
        scale: 7,
        duration: 4,
        ease: "power3.out",
      },
      5.5,
    )

    .to(".part1", { opacity: 1, duration: 0.5 }, 5.4)

    .to(
      ".iphone",
      {
        opacity: 1,
        scale: 1,
        duration: 3,
      },
      5.1,
    )

    .to(
      ".iphone",
      {
        x: 0,
        duration: 3,
      },
      6,
    )

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
      "#splitz-container",
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power3.out",
      },
      6.35,
    );

  if (splitz) {
    introScrollTl.to(
      splitz.chars,
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power3.out",
      },
      6.35,
    );
  }

  introScrollTl
    .to(".deco-money-ll", { opacity: 1, duration: 0.8 }, 7)
    .to(".deco-money-br", { opacity: 1, duration: 0.8 }, 8)
    .to(".deco-money-tl", { opacity: 1, duration: 0.8 }, 7.6)
    .to(".deco-money-lr", { opacity: 1, duration: 0.8 }, 7.9)

    .to(
      ".deco-money-ll",
      {
        y: 3200,
        rotation: -95,
        duration: 15,
        ease: "none",
      },
      7,
    )

    .to(
      ".deco-money-br",
      {
        y: 2800,
        rotation: 110,
        duration: 12,
        ease: "none",
      },
      7.3,
    )

    .to(
      ".deco-money-tl",
      {
        y: 2400,
        rotation: -70,
        duration: 16,
        ease: "none",
      },
      7.6,
    )

    .to(
      ".deco-money-lr",
      {
        y: 3500,
        rotation: 120,
        duration: 13,
        ease: "none",
      },
      7.9,
    );

  /* ------------------------- */
  /* HORIZONTAL SCROLL */
  /* ------------------------- */

  if (document.querySelector(".horizontalscrolling")) {
    const horizontalTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".horizontalscrolling",
        start: "top top",
        end: "+=2600",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    horizontalTl
      .to(".horizontalscrolling", {
        x: "0vw",
        duration: 0.45,
        ease: "none",
      })

      .to(
        ".deco-money-ll-2",
        {
          opacity: 1,
          y: 3600,
          rotation: -160,
          duration: 3.8,
          ease: "none",
        },
        0.05,
      )

      .to(
        ".deco-money-lr-2",
        {
          opacity: 1,
          y: 3950,
          rotation: 145,
          duration: 4.2,
          ease: "none",
        },
        0.42,
      )

      .to(
        ".deco-money-br-2",
        {
          opacity: 1,
          y: 4300,
          rotation: -120,
          duration: 4.6,
          ease: "none",
        },
        0.9,
      )

      .to(
        ".deco-money-tl-2",
        {
          opacity: 1,
          y: 3450,
          rotation: 110,
          duration: 4.1,
          ease: "none",
        },
        1.35,
      )

      .to(
        ".horizontalscrolling",
        {
          x: "-100vw",
          duration: 1.8,
          ease: "none",
        },
        0.55,
      )

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

      .to(
        ".horizontalscrolling",
        {
          x: "-100vw",
          duration: 0.7,
          ease: "none",
        },
        2.35,
      );
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

  const video = document.querySelector("#showreelVideo");

  if (video) {
    video.muted = false;
    video.volume = 1;
    video.playsInline = true;

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
            video.muted = false;
            video.volume = 1;
            video.play().catch(() => {});
          }

          if (self.progress >= 0.75) {
            video.pause();
          }

          if (self.progress < 0.25) {
            video.pause();
            video.currentTime = 0;
          }
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
