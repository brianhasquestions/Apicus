/* ============================================================
   Apicus (apicus.org) - shared page behaviors (all pages)
   Reveal-on-scroll, count-up stats, progress bar, active nav
   ============================================================ */

"use strict";

/* reveal on scroll */
const apicusRevealIO = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add("in"); apicusRevealIO.unobserve(en.target); }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
document.querySelectorAll(".reveal, .chart-panel, .matrix-panel").forEach(el => apicusRevealIO.observe(el));

/* count-up stats */
const apicusReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const apicusCounterIO = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    apicusCounterIO.unobserve(en.target);
    const el = en.target;
    const target = +el.dataset.count;
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    if (apicusReduceMotion || target === 0) { el.textContent = prefix + target + suffix; return; }
    const dur = 1400;
    const t0 = performance.now();
    (function tick(t) {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  });
}, { threshold: 0.6 });
document.querySelectorAll(".stat-num").forEach(el => apicusCounterIO.observe(el));

/* scroll progress bar + active section link */
const apicusProgressBar = document.getElementById("progressBar");
const apicusNavLinks = [...document.querySelectorAll(".nav-links a")]
  .filter(a => (a.getAttribute("href") || "").startsWith("#"));
const apicusSections = apicusNavLinks
  .map(a => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

let apicusTicking = false;
window.addEventListener("scroll", () => {
  if (apicusTicking) return;
  apicusTicking = true;
  requestAnimationFrame(() => {
    if (apicusProgressBar) {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      apicusProgressBar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
    }
    let current = null;
    apicusSections.forEach(sec => { if (sec.getBoundingClientRect().top < 160) current = sec; });
    apicusNavLinks.forEach(a => a.classList.toggle("active", current && a.getAttribute("href") === "#" + current.id));
    apicusTicking = false;
  });
}, { passive: true });
