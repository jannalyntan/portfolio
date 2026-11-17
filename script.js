/* ============================================================
   PORTFOLIO SCRIPT
   Sections:
   1. Settings (tweak timings here)
   2. Entry popup
   3. Main entry point
   4. Logo intro
   5. Phone version (<= 500px)
   6. Initial states (desktop / tablet)
   7. Intro scroll (circle + Part 1 reveal)
   8. Wave float loop
   9. Horizontal scroll (Parts 2-4)
   10. Motion title
   11. Showreel video
   12. Scroll progress bar
   ============================================================ */

/* ------------------------------------------------------------ */
/* 1. SETTINGS                                                  */
/* ------------------------------------------------------------ */

/* When Part 1 (Guardians of Water) starts appearing on the intro
   scroll timeline. It was 8. Lower = earlier, higher = later. */
const PART1_START = 7.2;

/* ------------------------------------------------------------ */
/* 2. ENTRY POPUP                                               */
/* ------------------------------------------------------------ */

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

/* ------------------------------------------------------------ */
/* 3. MAIN ENTRY POINT                                          */
/* ------------------------------------------------------------ */

function startPortfolioAnimations() {
  gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger, SplitText);

  initLogoIntro();

  /* Phones get a simpler, vertical layout and stop here */
  if (window.innerWidth <= 500) {
    initPhoneVersion();
    return;
  }

  setInitialStates();
  initIntroScroll();
  floatWaves();
  initHorizontalScroll();
  initMotionTitle();
  initShowreel();

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });

  ScrollTrigger.refresh();
}

/* ------------------------------------------------------------ */
/* 4. LOGO INTRO                                                */
/* ------------------------------------------------------------ */

function initLogoIntro() {
  const name1Split = new SplitText("#name-1", { type: "chars" });
  const name2Split = new SplitText("#name-2", { type: "chars" });
  const multimediaSplit = new SplitText("#multimedia", { type: "chars" });
  const jumpToSplit = new SplitText("#jumpTo", { type: "chars" });
  const buttonSplit = new SplitText(".button-array button", { type: "chars" });
  const continueScrolling = new SplitText(".scrollText", { type: "chars" });

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
      jumpToSplit.chars,
      {
        opacity: 0,
        duration: 0.5,
        stagger: 0.03,
        ease: "power2.out",
      },
      "+=0.1",
    )

    /* buttons appear first */
    .from(
      ".button-array a",
      {
        opacity: 0,
        y: 25,
        scale: 0.95,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
      },
      "+=0.2",
    )

    /* button words animate in */
    .from(
      buttonSplit.chars,
      {
        opacity: 0,
        y: 8,
        duration: 0.35,
        stagger: 0.015,
        ease: "power2.out",
      },
      "<0.1",
    )

    /* "continue scrolling" comes after buttons */
    .from(
      continueScrolling.chars,
      {
        opacity: 0,
        y: 10,
        duration: 0.8,
        stagger: 0.03,
        ease: "power2.out",
      },
      "+=0.15",
    );
}

/* ------------------------------------------------------------ */
/* 5. PHONE VERSION (<= 500px)                                  */
/* ------------------------------------------------------------ */

function initPhoneVersion() {
  gsap.set(".horizontalscrolling", {
    x: 0,
    clearProps: "transform",
  });

  gsap.set(".part1, .part2, .part3, .part4", {
    opacity: 1,
    x: 0,
    y: 0,
    clearProps: "transform",
  });

  gsap.set(".motion-title-section, .motion-title-section h2", {
    opacity: 1,
    visibility: "visible",
    clearProps: "transform",
  });

  gsap.set(".showreel-section", {
    opacity: 1,
    visibility: "visible",
    clearProps: "transform",
  });

  gsap.set("#showreelVideo", {
    opacity: 1,
    visibility: "visible",
    scale: 1,
    clearProps: "transform",
  });

  /* Project images fade up as they scroll into view */
  gsap.utils
    .toArray(".iphoneMac, .iphone2, .mac-wrapper, .human-error-preview")
    .forEach((item) => {
      gsap.from(item, {
        opacity: 0,
        y: 40,
        scale: 0.96,
        duration: 0.8,
        ease: "power2.out",

        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

  const showreelVideo = document.querySelector("#showreelVideo");

  if (showreelVideo) {
    showreelVideo.pause();
    showreelVideo.currentTime = 0;
    showreelVideo.muted = true;
    showreelVideo.controls = true;
  }

  ScrollTrigger.refresh();
}

/* ------------------------------------------------------------ */
/* 6. INITIAL STATES (desktop / tablet)                         */
/* ------------------------------------------------------------ */

function setInitialStates() {
  /* Intro text + circle */
  gsap.set(".line-1, .line-2, .line-3", { opacity: 0.1 });

  gsap.set("#circleAnimation", {
    scale: 0,
    backgroundColor: "#000000",
    opacity: 0.12,
  });

  /* Part 1 — Guardians of Water */
  gsap.set(".part1", { opacity: 0 });
  gsap.set(".iphoneMac", { opacity: 0, scale: 0.82, x: -120 });
  gsap.set("#splitz-container", { opacity: 0, x: 120 });
  gsap.set(".deco-wave-top", { x: 300, opacity: 0 });
  gsap.set(".deco-wave-bottom", { x: -300, opacity: 0 });

  /* Part 2 — Name Zen */
  gsap.set("#nameZen-container", { x: 80, opacity: 0 });
  gsap.set(".mac-wrapper", { x: 120, opacity: 0 });

  gsap.set(".ripple, .ripple2, .ripple3", {
    scale: 0.2,
    opacity: 0,
  });

  if (window.innerWidth <= 768) {
    gsap.set(".ripple, .ripple2, .ripple3", {
      opacity: 0.18,
      scale: 1,
    });
  }

  /* Part 3 — Omi */
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

  /* Part 4 — Human Error 404 */
  gsap.set("#human-error-container", { x: 160, opacity: 0 });
  gsap.set(".human-error-preview", { x: -160, opacity: 0, scale: 0.9 });
}

/* ------------------------------------------------------------ */
/* 7. INTRO SCROLL (circle + Part 1 reveal)                     */
/* ------------------------------------------------------------ */

function initIntroScroll() {
  const introScrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".introduction",
      start: "top top",
      end: "+=2500",
      scrub: 1.5,
    },
  });

  introScrollTl

    /* ---- Intro text + circle growing ---- */
    .to(".line-1", { opacity: 1, duration: 1 }, 0)
    .to("#circleAnimation", { scale: 0.25, duration: 1 }, 0)

    .to(".line-2", { opacity: 1, duration: 2 }, 2)
    .to("#circleAnimation", { scale: 0.5, duration: 2 }, 2)

    .to(".line-3", { opacity: 1, duration: 2 }, 4)
    .to("#circleAnimation", { scale: 1, duration: 2, opacity: 0.18 }, 4)

    /* ---- Circle turns white and expands ---- */
    .to("#circleAnimation", { opacity: 1, duration: 1, ease: "power3.out" }, 6)
    .to(
      "#circleAnimation",
      { backgroundColor: "#ffffff", duration: 1.2, ease: "power3.out" },
      6.3,
    )
    .to(".intro-text", { opacity: 0, duration: 1 }, 6.2)
    .to("#circleAnimation", { scale: 9, duration: 6, ease: "power2.out" }, 6.8)

    /* ---- Part 1 reveal (all timed from PART1_START) ---- */
    .to(".part1", { opacity: 1, duration: 1.5 }, PART1_START)

    .to(
      ".deco-wave-top",
      { x: 0, opacity: 0.5, duration: 4, ease: "power2.out" },
      PART1_START,
    )
    .to(
      ".deco-wave-bottom",
      { x: 0, opacity: 0.5, duration: 4, ease: "power2.out" },
      PART1_START + 0.2,
    )

    .to(
      ".iphoneMac",
      { opacity: 1, scale: 1, duration: 3.5, ease: "power3.out" },
      PART1_START + 0.6,
    )
    .to(
      ".iphoneMac",
      { x: 0, duration: 3.5, ease: "power3.out" },
      PART1_START + 1,
    )

    .to(
      "#splitz-container",
      { opacity: 1, x: 0, duration: 3, ease: "power3.out" },
      PART1_START + 0.6,
    );
}

/* ------------------------------------------------------------ */
/* 8. WAVE FLOAT LOOP                                           */
/* ------------------------------------------------------------ */

function floatWaves() {
  gsap.to(".deco-wave-top", {
    y: 25,
    rotation: "+=4",
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  gsap.to(".deco-wave-bottom", {
    y: -25,
    rotation: "-=4",
    duration: 7,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
}

/* ------------------------------------------------------------ */
/* 9. HORIZONTAL SCROLL (Parts 2-4)                             */
/* ------------------------------------------------------------ */

function initHorizontalScroll() {
  if (!document.querySelector(".horizontalscrolling")) return;

  /* ---- Ripples (Name Zen) ---- */

  let rippleStarted = false;

  const rippleConfigs = [
    { target: ".ripple", scale: 3, duration: 15, each: 0.55 },
    { target: ".ripple2", scale: 2.8, duration: 10, each: 0.65 },
    { target: ".ripple3", scale: 2.6, duration: 15, each: 0.7 },
    { target: ".ripple4", scale: 2.6, duration: 15, each: 0.7 },
  ];

  const startRipples = () => {
    if (rippleStarted) return;
    rippleStarted = true;

    rippleConfigs.forEach(({ target, scale, duration, each }) => {
      gsap.to(target, {
        scale,
        opacity: 0,
        duration,
        ease: "power2.out",
        repeat: -1,
        stagger: { each, repeat: -1 },
        startAt: { scale: 0.2, opacity: 0.75 },
      });
    });
  };

  /* ---- Horizontal timeline ---- */

  const horizontalTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".horizontalscrolling",
      start: "top top",
      end: "+=7000",
      scrub: 1,
      pin: true,
      anticipatePin: 1,
    },
  });

  horizontalTl
    /* hold Part 1 */
    .to(".horizontalscrolling", { x: "0vw", duration: 1.6, ease: "none" })

    /* move to Part 2 */
    .to(".horizontalscrolling", { x: "-100vw", duration: 1.8, ease: "none" })
    .call(startRipples, null, 1.25)

    .to(
      "#nameZen-container",
      { x: 0, opacity: 1, duration: 0.7, ease: "power2.out" },
      1.55,
    )
    .to(
      ".mac-wrapper",
      { x: 0, opacity: 1, duration: 0.7, ease: "power2.out" },
      1.65,
    )

    /* hold Part 2 */
    .to(".horizontalscrolling", { x: "-100vw", duration: 0.8, ease: "none" })

    /* move to Part 3 */
    .to(".horizontalscrolling", { x: "-200vw", duration: 1.8, ease: "none" })

    .to(
      ".part3 .iphone2",
      { opacity: 1, x: 0, scale: 1, duration: 2, ease: "power3.out" },
      "<1.1",
    )
    .to(
      ".part3 #omi-container",
      { opacity: 1, x: 0, duration: 0.9, ease: "power3.out" },
      "<0.15",
    )
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

    /* hold Part 3 */
    .to(".horizontalscrolling", { x: "-200vw", duration: 0.8, ease: "none" })

    /* move to Part 4 */
    .to(".horizontalscrolling", { x: "-300vw", duration: 1.8, ease: "none" })

    .to(
      ".human-error-preview",
      { opacity: 1, x: 0, scale: 1, duration: 1, ease: "power3.out" },
      "<0.8",
    )
    .to(
      "#human-error-container",
      { opacity: 1, x: 0, duration: 0.9, ease: "power3.out" },
      "<0.15",
    )

    /* hold Part 4 */
    .to(".horizontalscrolling", { x: "-300vw", duration: 0.8, ease: "none" });

  /* ---- Stars (Part 4) ---- */

  gsap.to("#star-1", {
    y: -15,
    scale: 1.15,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  gsap.to("#star-2", {
    y: -10,
    scale: 0.75,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 0.8,
  });

  gsap.to("#star-1, #star-2", {
    opacity: 0.4,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
}

/* ------------------------------------------------------------ */
/* 10. MOTION TITLE                                             */
/* ------------------------------------------------------------ */

function initMotionTitle() {
  if (!document.querySelector(".motion-title-section h2")) return;

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

/* ------------------------------------------------------------ */
/* 11. SHOWREEL VIDEO                                           */
/* ------------------------------------------------------------ */

function initShowreel() {
  const showreelVideo = document.querySelector("#showreelVideo");
  if (!showreelVideo) return;

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
    .to("#showreelVideo", { scale: 1, duration: 1, ease: "none" })
    .to("#showreelVideo", { scale: 1, opacity: 1, duration: 2, ease: "none" })
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

/* ------------------------------------------------------------ */
/* 12. SCROLL PROGRESS BAR                                      */
/* ------------------------------------------------------------ */

const progressBar = document.querySelector(".scroll-progress-bar");

window.addEventListener("scroll", () => {
  if (!progressBar) return;

  const scrollTop = window.scrollY;
  const documentHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  progressBar.style.width = `${(scrollTop / documentHeight) * 100}%`;
});
