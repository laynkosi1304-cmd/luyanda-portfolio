/* Luyanda Nkosi portfolio — site behaviour. Sections: menu · reveal · scroll-spy · ticker · wordmark · CV dialog · stickers */
(function () {
  "use strict";
  var doc = document.documentElement;
  doc.classList.add("js");
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return [].slice.call((c || document).querySelectorAll(s)); };
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Mobile menu: also closes on Escape, link tap, or when resized up to desktop */
  var burger = $("#burger"), links = $("#navLinks");
  function setMenu(open) {
    links.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open);
    burger.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
  }
  burger.addEventListener("click", function () { setMenu(!links.classList.contains("open")); });
  $$("a", links).forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });
  matchMedia("(min-width:701px)").addEventListener("change", function (m) { if (m.matches) setMenu(false); });

  /* Reveal on scroll */
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: .15 });
  $$(".rv,.wm").forEach(function (el) { io.observe(el); });

  /* Active nav link */
  var navA = $$("a[href^='#']", links);
  var spy = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) navA.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id); });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  $$("section[id]").forEach(function (s) { spy.observe(s); });

  /* Ticker: duplicate content for a seamless loop */
  var tick = $("#tick");
  if (tick) tick.innerHTML += tick.innerHTML;

  /* Footer wordmark scales to fill its box */
  var wm = $("#wm");
  function fit() {
    if (!wm) return;
    wm.style.fontSize = "100px";
    var w = wm.getBoundingClientRect().width;
    if (w) wm.style.fontSize = (100 * wm.parentElement.clientWidth / w) + "px";
  }
  fit();
  addEventListener("resize", fit);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);

  /* CV dialog with focus trap */
  var modal = $("#cvModal"), closeBtn = $("#cvClose"), last = null;
  if (modal && closeBtn) {
    var openCv = function () { last = document.activeElement; modal.hidden = false; document.body.classList.add("lock"); closeBtn.focus(); };
    var closeCv = function () { modal.hidden = true; document.body.classList.remove("lock"); if (last && last.focus) last.focus(); };
    $$("[data-cv-open]").forEach(function (b) { b.addEventListener("click", openCv); });
    closeBtn.addEventListener("click", closeCv);
    modal.addEventListener("click", function (e) { if (e.target === modal) closeCv(); });
    document.addEventListener("keydown", function (e) {
      if (modal.hidden) return;
      if (e.key === "Escape") closeCv();
      if (e.key === "Tab") {
        var f = $$("a[href],button", modal), a = f[0], z = f[f.length - 1];
        if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
        else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
      }
    });
  }

  /* Stickers: mouse and pen users can peel them and move them around;
     touch users get a tap-to-spin so page scrolling is never blocked. */
  $$(".drag").forEach(function (el) {
    var sx, sy, ox, oy, moving = false;
    el.addEventListener("pointerdown", function (e) {
      if (e.pointerType === "touch") {
        if (!reduce) { el.classList.remove("tap"); void el.offsetWidth; el.classList.add("tap"); }
        return;
      }
      moving = true; el.setPointerCapture(e.pointerId); el.classList.add("dragging");
      sx = e.clientX; sy = e.clientY;
      var t = el.style.translate.split(" "); ox = parseFloat(t[0]) || 0; oy = parseFloat(t[1]) || 0;
      e.preventDefault();
    });
    el.addEventListener("pointermove", function (e) {
      if (!moving) return;
      el.style.translate = (ox + e.clientX - sx) + "px " + (oy + e.clientY - sy) + "px";
    });
    function drop() { moving = false; el.classList.remove("dragging"); }
    el.addEventListener("pointerup", drop);
    el.addEventListener("pointercancel", drop);
    el.addEventListener("animationend", function () { el.classList.remove("tap"); });
  });

  var y = $("#year");
  if (y) y.textContent = new Date().getFullYear();
})();
