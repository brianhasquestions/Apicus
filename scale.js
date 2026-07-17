/* ============================================================
   Apicus (apicus.org) - scale-readiness checklist
   ============================================================ */

"use strict";

(function () {
  const grid = document.getElementById("checkGrid");
  if (!grid) return;

  const STORAGE_KEY = "apicus-scale-checklist";
  const countEl = document.getElementById("checkCount");
  const meterEl = document.getElementById("checkMeter");
  const verdictEl = document.getElementById("checkVerdict");
  const boxes = [...grid.querySelectorAll("input[type=checkbox]")];

  const VERDICTS = [
    [0, "Not yet: fund the search, not the scale"],
    [4, "Foundations forming: keep building before you pitch"],
    [7, "A fundable story is taking shape"],
    [10, "Scale-ready: investors will follow the machine"]
  ];

  function load() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      boxes.forEach(b => { b.checked = !!saved[b.dataset.key]; });
    } catch { /* corrupted storage, start fresh */ }
  }

  function save() {
    const state = {};
    boxes.forEach(b => { state[b.dataset.key] = b.checked; });
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { /* storage unavailable */ }
  }

  function render() {
    const done = boxes.filter(b => b.checked).length;
    countEl.textContent = done;
    meterEl.style.width = (done / boxes.length) * 100 + "%";
    let verdict = VERDICTS[0][1];
    VERDICTS.forEach(([min, label]) => { if (done >= min) verdict = label; });
    verdictEl.textContent = verdict;
    boxes.forEach(b => b.closest(".check-item").classList.toggle("done", b.checked));
  }

  grid.addEventListener("change", () => { save(); render(); });

  load();
  render();
})();
