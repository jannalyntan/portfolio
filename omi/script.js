document.addEventListener("DOMContentLoaded", () => {
  const bg = document.getElementById("patternBg");

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  function createPatternBackground() {
    if (!bg) return;

    bg.innerHTML = "";

    const pageHeight = document.documentElement.scrollHeight;
    const pageWidth = window.innerWidth;

    bg.style.height = `${pageHeight}px`;

    const totalCircles = Math.floor(pageHeight / 110);
    const totalSquiggles = Math.floor(pageHeight / 330);

    for (let i = 0; i < totalCircles; i++) {
      const circle = document.createElement("div");
      const size = random(18, 90);
      const isOutline = Math.random() > 0.45;

      circle.classList.add("pattern-circle", isOutline ? "outline" : "filled");

      circle.style.width = `${size}px`;
      circle.style.height = `${size}px`;
      circle.style.left = `${random(-40, pageWidth - 20)}px`;
      circle.style.top = `${random(0, pageHeight)}px`;

      if (isOutline) {
        circle.style.borderWidth = `${random(3, 7)}px`;
      }

      bg.appendChild(circle);
    }

    for (let i = 0; i < totalSquiggles; i++) {
      const squiggle = document.createElement("div");

      squiggle.classList.add("pattern-squiggle");

      squiggle.style.left = `${random(-40, pageWidth - 120)}px`;
      squiggle.style.top = `${random(0, pageHeight)}px`;
      squiggle.style.width = `${random(90, 180)}px`;
      squiggle.style.transform = `rotate(${random(-180, 180)}deg)`;

      squiggle.innerHTML = `
        <svg viewBox="0 0 160 80">
          <path d="M10 45 C45 10, 75 75, 115 35 C130 22, 142 25, 150 30" />
        </svg>
      `;

      bg.appendChild(squiggle);
    }
  }

  createPatternBackground();

  window.addEventListener("resize", createPatternBackground);

  gsap.registerPlugin(ScrollTrigger);

  const backBtn = document.getElementById("backBtn");

  if (backBtn) {
    backBtn.addEventListener("click", () => {
      window.location.href = "../index.html";
    });
  }

  gsap.utils.toArray("section").forEach((section) => {
    const textBlocks = section.querySelectorAll(
      ".words, .case-card, .feature-card, .quote-card, .journey-list, .ethics-grid",
    );

    const mainImages = section.querySelectorAll(".phone-img");

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
      stagger: 0.15,
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
    });
  });

  gsap.utils.toArray(".soft-blob").forEach((blob, index) => {
    gsap.to(blob, {
      scrollTrigger: {
        trigger: blob.closest("section") || document.body,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
      y: index % 2 === 0 ? -160 : 140,
      x: index % 2 === 0 ? 80 : -80,
      scale: 1.12,
      ease: "none",
    });
  });

  gsap.utils.toArray(".sparkle").forEach((sparkle) => {
    gsap.to(sparkle, {
      scrollTrigger: {
        trigger: sparkle.closest("section") || document.body,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2,
      },
      rotation: 90,
      y: -120,
      ease: "none",
    });
  });
});
