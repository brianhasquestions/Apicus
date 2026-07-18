/* ============================================================
   Apicus (apicus.org) - patent vs trade secret checker
   ============================================================ */

"use strict";

(function () {
  const grid = document.getElementById("ipGrid");
  const out = document.getElementById("ipVerdict");
  if (!grid || !out) return;

  const boxes = [...grid.querySelectorAll("input[type=checkbox]")];
  const state = () => Object.fromEntries(boxes.map(b => [b.dataset.q, b.checked]));

  function render() {
    const s = state();
    boxes.forEach(b => b.closest(".check-item").classList.toggle("done", b.checked));

    let verdict;
    if (s.visible) {
      verdict = "<strong>Patent and file before you ship.</strong> If competitors can reverse-engineer it from the product, trade secrecy dies on launch day. File a provisional before any public demo" +
        (s.fast ? ", though weigh the 2&ndash;3 year grant timeline against how fast the technology ages" : "") + "." + (s.secret ? " If only part of it ships, split by component: patent the visible piece and keep the server side secret." : "");
    } else if (s.secret) {
      verdict = "<strong>Trade secret is likely the better trade.</strong> If the how stays server-side, secrecy is immediate, cheap, and indefinite for as long as the reasonable measures hold, whereas a patent would publish your method to every competitor. Make the reasonable measures real: access controls, PIIAs, and NDAs" +
        (s.moat ? ". For the investor-visible moat, document the secret's existence and protection regime for diligence; a well-guarded secret is a valuable asset too" : "") + ".";
    } else if (s.moat) {
      verdict = "<strong>Patent for the balance sheet.</strong> Deep tech, biotech, and hardware valuations lean on filings that investors and acquirers can see, cite, and value. Budget for real counsel; a vanity patent helps nobody.";
    } else if (s.fast) {
      verdict = "<strong>Probably neither.</strong> Patents take years to grant; if the technology ages out first, the money is better spent shipping. Your code is already copyrighted and your processes can stay secret for free.";
    } else {
      verdict = "<strong>Start with the defaults.</strong> Copyright already covers your code, trade secrecy covers your internals if you protect them, and a trademark filing protects the brand. Revisit patents when something reverse-engineerable or fundable appears.";
    }
    out.innerHTML = verdict;
  }

  grid.addEventListener("change", render);
  render();
})();
