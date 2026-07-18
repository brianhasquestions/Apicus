/* ============================================================
   Apicus (apicus.org) - board balance checker
   ============================================================ */

"use strict";

(function () {
  const f = document.getElementById("seatF");
  const v = document.getElementById("seatV");
  const i = document.getElementById("seatI");
  const out = document.getElementById("balanceVerdict");
  if (!f || !v || !i || !out) return;

  function clamp(el) {
    const n = Math.max(0, Math.min(9, parseInt(el.value, 10) || 0));
    el.value = n;
    return n;
  }

  function render() {
    const nf = clamp(f), nv = clamp(v), ni = clamp(i);
    const total = nf + nv + ni;

    if (total === 0) {
      out.innerHTML = "Add some seats to see who holds the room.";
      return;
    }

    let verdict;
    if (nf > nv + ni) {
      verdict = "<strong>Founders control the board outright.</strong> No coalition of investors and independents can outvote you. This is the position to protect for as long as the company's stage allows.";
    } else if (nv > nf + ni) {
      verdict = "<strong>Investors control the board outright.</strong> The CEO serves at their pleasure and every contested vote is already decided. If this is a term sheet, negotiate before you sign; if it's your current board, add an independent or a founder seat at the next round.";
    } else if (nf === nv && ni > 0) {
      verdict = "<strong>Split camps: the independent" + (ni > 1 ? "s" : "") + " decide" + (ni > 1 ? "" : "s") + " every contested vote,</strong> including whether the founder-CEO keeps the job. Insist the independent is chosen jointly and choose someone whose judgment you'd accept on your worst day.";
    } else if (nf === nv && ni === 0) {
      verdict = "<strong>Dead even with no tiebreaker.</strong> This board deadlocks by design; every contested vote fails and the status quo wins. Add an independent seat before it matters.";
    } else {
      verdict = "<strong>No single camp holds a majority.</strong> Contested votes come down to coalitions and in practice that means the independents and the most persuasive person in the room. Keep the paper tight and the relationships tighter.";
    }

    if (total % 2 === 0) {
      verdict += " <strong>Note:</strong> an even number of seats (" + total + ") invites deadlock and deadlock favors whoever benefits from nothing happening. Boards are built odd for a reason.";
    }

    out.innerHTML = verdict;
  }

  [f, v, i].forEach(el => el.addEventListener("input", render));
  render();
})();
