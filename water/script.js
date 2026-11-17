/* Guardians of Water – interactions */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* Light / Dark Matter comparison slider */
  const slider = $("#slider");
  if (slider) {
    const range = $("input", slider);
    const update = () => slider.style.setProperty("--pos", range.value + "%");
    range.addEventListener("input", update);
    update();
  }

  /* Pillar filters: toggle pillars, All / Clear */
  const pillars = $$("#pillars .pillar");
  const [clearBtn, allBtn] = [$("[data-clear]"), $("[data-all]")];
  const setSeg = (all) => {
    allBtn.classList.toggle("on", all);
    clearBtn.classList.toggle("on", !all);
  };
  pillars.forEach((p) =>
    p.addEventListener("click", () => {
      p.classList.toggle("off");
      setSeg(pillars.every((x) => !x.classList.contains("off")));
    }),
  );
  clearBtn?.addEventListener("click", () => {
    pillars.forEach((p) => p.classList.remove("off"));
    setSeg(true);
  });
  allBtn?.addEventListener("click", () => {
    pillars.forEach((p) => p.classList.remove("off"));
    setSeg(true);
  });

  /* Buttons: active / inactive */
  $$(".toggle").forEach((b) =>
    b.addEventListener("click", () => {
      $$(".toggle").forEach((x) => x.classList.toggle("on", x === b));
    }),
  );

  /* Timeline */
  $$("#timeline button").forEach((b) =>
    b.addEventListener("click", () => {
      $$("#timeline button").forEach((x) => x.classList.toggle("on", x === b));
    }),
  );

  /* Search bar demo */
  const entities = [
    "Aboriginal Water Program (2016)",
    "Basin Plan (2012)",
    "Productivity Commission (PC)",
    "Water Services Association of Australia",
    "Water for Victoria (2016)",
    "Victorian Water Act (1989)",
    "Water Act (2007)",
    "Bureau of Meteorology (BoM)",
  ];
  const input = $("#search"),
    results = $("#results");
  input?.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    results.innerHTML = q
      ? entities
          .filter((e) => e.toLowerCase().includes(q))
          .map((e) => `<li>${e}</li>`)
          .join("")
      : "";
  });

  /* Follow the Water: simple trace between two policies */
  const from = $("#from"),
    to = $("#to"),
    trace = $("#trace");
  const showTrace = () => {
    trace.textContent =
      from.value === to.value
        ? "Pick two different policies."
        : `${from.value} → National Water Agreement → ${to.value}`;
  };
  from?.addEventListener("change", showTrace);
  to?.addEventListener("change", showTrace);
  if (trace) showTrace();
})();
