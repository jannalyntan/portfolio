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
