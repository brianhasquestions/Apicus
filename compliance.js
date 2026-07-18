/* ============================================================
   Apicus (apicus.org) - compliance timing checker
   ============================================================ */

"use strict";

(function () {
  const grid = document.getElementById("whenGrid");
  const out = document.getElementById("whenVerdict");
  if (!grid || !out) return;

  const boxes = [...grid.querySelectorAll("input[type=checkbox]")];
  const state = () => Object.fromEntries(boxes.map(b => [b.dataset.q, b.checked]));

  function render() {
    const s = state();
    boxes.forEach(b => b.closest(".check-item").classList.toggle("done", b.checked));

    let verdict;
    if (s.regulated) {
      verdict = "<strong>Compliance is table stakes for your data class, starting now.</strong> HIPAA, PCI, and government obligations attach the moment you touch the data, not when a customer asks. Build to the framework from day one, and scope out whatever regulated data you don't truly need.";
    } else if (s.blocked) {
      verdict = "<strong>Certify now.</strong> A deal dying in security review is the market telling you the audit pays for itself. Start SOC 2 Type I as the bridge, open the Type II observation window right behind it, and keep selling while the auditors work.";
    } else if (s.questionnaires || s.enterprise) {
      verdict = "<strong>Get compliance-ready, hold off on the audit.</strong> Adopt the controls, write the short policies, and keep a filled questionnaire ready to return in a day. Start the paid audit when the pipeline math justifies it, which at this trajectory is soon.";
    } else {
      verdict = "<strong>Focus on product and sales.</strong> No buyer is asking and no regulation applies, so certification would be runway spent on theater. Do the security basics because they're cheap and right, and revisit this check each quarter.";
    }
    out.innerHTML = verdict;
  }

  grid.addEventListener("change", render);
  render();
})();
