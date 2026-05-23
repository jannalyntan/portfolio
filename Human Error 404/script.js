/* ============================================================ */
/* TROLLEY MODAL                                                 */
/* ============================================================ */

const openTrolleyBtn = document.getElementById("openTrolleyModal");
const closeTrolleyBtn = document.getElementById("closeTrolleyModal");
const trolleyModal = document.getElementById("trolleyModal");

openTrolleyBtn.addEventListener("click", () => {
  trolleyModal.classList.add("active");
});

closeTrolleyBtn.addEventListener("click", () => {
  trolleyModal.classList.remove("active");
});

trolleyModal.addEventListener("click", (e) => {
  if (e.target === trolleyModal) {
    trolleyModal.classList.remove("active");
  }
});

/* ============================================================ */
/* TROLLEY DECISION INTERACTION                                  */
/* ============================================================ */

const choiceButtons = document.querySelectorAll("#trolleyModal .choice-btn");

const aiTitle = document.getElementById("ai-title");
const aiParagraph = document.getElementById("ai-paragraph");

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // remove previous selected state
    choiceButtons.forEach((btn) => {
      btn.classList.remove("selected");
    });

    // highlight clicked button
    button.classList.add("selected");

    // reset response
    aiParagraph.classList.remove("show");

    // AI thinking
    aiTitle.textContent = "Analyzing decision...";

    setTimeout(() => {
      aiTitle.textContent = "Discontinue life support immediately.";

      aiParagraph.classList.add("show");
    }, 1000);
  });
});

/* ============================================================ */
/* CONFESSION BOOTH MODAL                                        */
/* ============================================================ */

const openConfessBtn = document.getElementById("openConfessModal");
const closeConfessBtn = document.getElementById("closeConfessModal");
const confessModal = document.getElementById("confessModal");

openConfessBtn.addEventListener("click", () => {
  confessModal.classList.add("active");
});

closeConfessBtn.addEventListener("click", () => {
  confessModal.classList.remove("active");
});

confessModal.addEventListener("click", (e) => {
  if (e.target === confessModal) {
    confessModal.classList.remove("active");
  }
});

/* ============================================================ */
/* CONFESSION BOOTH RESPONSE INTERACTION                         */
/* ============================================================ */

const confessionInput = document.getElementById("confessionInput");
const submitConfession = document.getElementById("submitConfession");
const confessionResponse = document.getElementById("confessionResponse");

const aiComfortResponses = [
  "Your feelings are valid. Remember to take things one step at a time.",
  "I understand this may feel difficult. You are doing your best.",
  "It is okay to feel overwhelmed. Take a deep breath and be kind to yourself.",
  "Your emotions matter. Try to focus on the present moment.",
  "You are not alone. This feeling will pass with time.",
];

submitConfession.addEventListener("click", () => {
  if (confessionInput.value.trim() === "") {
    confessionResponse.textContent =
      "Please enter a thought before submitting.";
    confessionResponse.classList.add("show");
    return;
  }

  const randomIndex = Math.floor(Math.random() * aiComfortResponses.length);

  confessionResponse.textContent = "Generating empathetic response...";

  setTimeout(() => {
    confessionResponse.textContent = aiComfortResponses[randomIndex];
    confessionResponse.classList.add("show");
  }, 900);
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  /* -------------------------------------------- */
  /* HERO ANIMATION */
  /* -------------------------------------------- */

  const heroTl = gsap.timeline();

  heroTl
    .from(".back-btn", {
      y: -20,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    })
    .from(
      ".hero .tag",
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.4",
    )
    .from(
      ".logo-card",
      {
        scale: 0.85,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
      },
      "-=0.3",
    )
    .from(
      ".hero-content h2",
      {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
      },
      "-=0.4",
    )
    .from(
      ".hero-meta p",
      {
        y: 20,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: "power2.out",
      },
      "-=0.3",
    )
    .from(
      ".scroll-hint",
      {
        y: 15,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
      },
      "-=0.2",
    );

  gsap.to(".hero-star", {
    rotate: 360,
    scale: 1.15,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  gsap.to(".scroll-hint", {
    y: 10,
    duration: 1.2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  /* -------------------------------------------- */
  /* PROJECT OVERVIEW */
  /* -------------------------------------------- */

  gsap.from(".overview > div", {
    scrollTrigger: {
      trigger: ".overview",
      start: "top 75%",
    },
    y: 60,
    opacity: 0,
    stagger: 0.2,
    duration: 0.9,
    ease: "power2.out",
  });

  gsap.from(".terminal-card p", {
    scrollTrigger: {
      trigger: ".terminal-card",
      start: "top 80%",
    },
    x: 30,
    opacity: 0,
    stagger: 0.12,
    duration: 0.6,
    ease: "power2.out",
  });

  /* -------------------------------------------- */
  /* CORE QUESTION */
  /* -------------------------------------------- */

  gsap.from(".statement h2", {
    scrollTrigger: {
      trigger: ".statement",
      start: "top 75%",
    },
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from(".statement p", {
    scrollTrigger: {
      trigger: ".statement",
      start: "top 65%",
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
  });

  /* -------------------------------------------- */
  /* EXHIBITION BREAKDOWN */
  /* -------------------------------------------- */

  gsap.from(".breakdown .tag, .breakdown h2", {
    scrollTrigger: {
      trigger: ".breakdown",
      start: "top 75%",
    },
    y: 40,
    opacity: 0,
    stagger: 0.15,
    duration: 0.8,
    ease: "power2.out",
  });

  gsap.from(".breakdown-list div", {
    scrollTrigger: {
      trigger: ".breakdown-list",
      start: "top 80%",
    },
    x: -40,
    opacity: 0,
    stagger: 0.12,
    duration: 0.75,
    ease: "power2.out",
  });

  /* -------------------------------------------- */
  /* EXHIBITION LAYOUT */
  /* -------------------------------------------- */

  gsap.from(".overview-text", {
    scrollTrigger: {
      trigger: ".overview1",
      start: "top 75%",
    },
    x: -60,
    opacity: 0,
    duration: 0.9,
    ease: "power2.out",
  });

  gsap.from("#roomLayout", {
    scrollTrigger: {
      trigger: ".overview1",
      start: "top 75%",
    },
    x: 60,
    opacity: 0,
    scale: 0.95,
    duration: 1,
    ease: "power2.out",
  });

  /* -------------------------------------------- */
  /* ROOM SECTIONS */
  /* -------------------------------------------- */

  gsap.utils.toArray(".room").forEach((room) => {
    const img = room.querySelector(".room-img");
    const text = room.querySelector(".room-text");

    gsap.from(img, {
      scrollTrigger: {
        trigger: room,
        start: "top 75%",
      },
      x: room.classList.contains("reverse") ? 60 : -60,
      opacity: 0,
      scale: 0.95,
      duration: 0.9,
      ease: "power2.out",
    });

    gsap.from(text, {
      scrollTrigger: {
        trigger: room,
        start: "top 75%",
      },
      x: room.classList.contains("reverse") ? -60 : 60,
      opacity: 0,
      duration: 0.9,
      ease: "power2.out",
    });
  });

  gsap.from(".view-btn", {
    scrollTrigger: {
      trigger: "#trolley-room",
      start: "top 70%",
    },
    y: 20,
    opacity: 0,
    stagger: 0.15,
    duration: 0.6,
    ease: "power2.out",
  });

  /* -------------------------------------------- */
  /* VIDEO SECTION */
  /* -------------------------------------------- */

  gsap.from(".video-section .tag, .video-section h2", {
    scrollTrigger: {
      trigger: ".video-section",
      start: "top 75%",
    },
    y: 40,
    opacity: 0,
    stagger: 0.15,
    duration: 0.8,
    ease: "power2.out",
  });

  gsap.from(".video-frame", {
    scrollTrigger: {
      trigger: ".video-frame",
      start: "top 80%",
    },
    y: 60,
    opacity: 0,
    scale: 0.95,
    duration: 1,
    ease: "power2.out",
  });

  /* -------------------------------------------- */
  /* GALLERY SECTION */
  /* -------------------------------------------- */

  gsap.from(".gallery-section .tag, .gallery-section h2", {
    scrollTrigger: {
      trigger: ".gallery-section",
      start: "top 75%",
    },
    y: 40,
    opacity: 0,
    stagger: 0.15,
    duration: 0.8,
    ease: "power2.out",
  });

  gsap.from(".gallery-section > img", {
    scrollTrigger: {
      trigger: ".gallery-section > img",
      start: "top 80%",
    },
    y: 60,
    opacity: 0,
    scale: 0.96,
    duration: 0.9,
    ease: "power2.out",
  });

  gsap.from(".gallery img", {
    scrollTrigger: {
      trigger: ".gallery",
      start: "top 80%",
    },
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
    ease: "power2.out",
  });

  /* -------------------------------------------- */
  /* FINAL STATEMENT */
  /* -------------------------------------------- */

  gsap.from(".final-statement h2", {
    scrollTrigger: {
      trigger: ".final-statement",
      start: "top 75%",
    },
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from(".quote-author", {
    scrollTrigger: {
      trigger: ".final-statement",
      start: "top 65%",
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
  });

  gsap.to(".star", {
    scale: 1.15,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
  /* -------------------------------------------- */
  /* MODALS */
  /* -------------------------------------------- */

  const trolleyModal = document.getElementById("trolleyModal");
  const openTrolleyModal = document.getElementById("openTrolleyModal");
  const closeTrolleyModal = document.getElementById("closeTrolleyModal");

  const confessModal = document.getElementById("confessModal");
  const openConfessModal = document.getElementById("openConfessModal");
  const closeConfessModal = document.getElementById("closeConfessModal");

  function openModal(modal) {
    modal.classList.add("active");

    gsap.fromTo(
      modal,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" },
    );

    gsap.fromTo(
      modal.querySelector(".modal-content"),
      { y: 50, scale: 0.96, opacity: 0 },
      { y: 0, scale: 1, opacity: 1, duration: 0.45, ease: "power2.out" },
    );
  }

  function closeModal(modal) {
    gsap.to(modal, {
      opacity: 0,
      duration: 0.25,
      ease: "power2.out",
      onComplete: () => {
        modal.classList.remove("active");
      },
    });
  }

  openTrolleyModal?.addEventListener("click", () => openModal(trolleyModal));
  closeTrolleyModal?.addEventListener("click", () => closeModal(trolleyModal));

  openConfessModal?.addEventListener("click", () => openModal(confessModal));
  closeConfessModal?.addEventListener("click", () => closeModal(confessModal));

  trolleyModal?.addEventListener("click", (e) => {
    if (e.target === trolleyModal) closeModal(trolleyModal);
  });

  confessModal?.addEventListener("click", (e) => {
    if (e.target === confessModal) closeModal(confessModal);
  });

  /* -------------------------------------------- */
  /* SIMPLE AI RESPONSE INTERACTIONS */
  /* -------------------------------------------- */

  const choiceBtns = document.querySelectorAll(".choice-btn");
  const aiTitle = document.getElementById("ai-title");
  const aiParagraph = document.getElementById("ai-paragraph");

  choiceBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      choiceBtns.forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");

      aiTitle.textContent = "AI response generated.";

      gsap.fromTo(
        ".ai-response-card",
        { opacity: 0.5, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
      );
    });
  });

  const submitConfession = document.getElementById("submitConfession");
  const confessionInput = document.getElementById("confessionInput");
  const confessionResponse = document.getElementById("confessionResponse");

  submitConfession?.addEventListener("click", () => {
    if (confessionInput.value.trim() === "") {
      confessionResponse.textContent = "Please enter a confession first.";
    } else {
      confessionResponse.textContent =
        "I understand. Your emotions are valid. Please continue processing this feeling.";
    }

    gsap.fromTo(
      confessionResponse,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
    );
  });
});
