/* ==========================================================
   BioSite — renderização a partir do config.js
   Não precisa editar este arquivo para um novo cliente.
   ========================================================== */
(function () {
  "use strict";
  var C = window.BIOSITE_CONFIG || {};
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var svg = function (body, vb) {
    return '<svg viewBox="' + (vb || "0 0 24 24") + '" aria-hidden="true">' + body + "</svg>";
  };
  var line = function (d) {
    return svg('<path d="' + d + '" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>');
  };

  /* ---------- Ícones ---------- */
  var ICON = {
    share: line("M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7M16 6l-4-4-4 4M12 2v13"),
    more: svg('<circle cx="12" cy="5" r="2" fill="currentColor"/><circle cx="12" cy="12" r="2" fill="currentColor"/><circle cx="12" cy="19" r="2" fill="currentColor"/>'),
    copy: line("M9 9h10v10H9zM5 15H4V4h11v1"),
    star: svg('<path fill="currentColor" d="M12 2.5l2.9 6 6.6.8-4.9 4.6 1.3 6.5L12 17.2 6.1 20.4l1.3-6.5L2.5 9.3l6.6-.8z"/>'),
    arrow: line("M9 6l6 6-6 6"),
    close: line("M6 6l12 12M18 6L6 18"),
    prev: line("M15 6l-6 6 6 6"),
    next: line("M9 6l6 6-6 6"),
    whatsapp: svg('<path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.7-.4z"/>'),
    google: svg('<path fill="#4285F4" d="M22.6 12.2c0-.8-.1-1.5-.2-2.2H12v4.2h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2.1-1.9 3.3-4.8 3.3-8z"/><path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.6-2.7c-1 .7-2.2 1-3.7 1-2.9 0-5.3-1.9-6.2-4.5H2.1v2.8A11 11 0 0 0 12 23z"/><path fill="#FBBC05" d="M5.8 14.1a6.6 6.6 0 0 1 0-4.2V7.1H2.1a11 11 0 0 0 0 9.8z"/><path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.2 1.7l3.2-3.2A11 11 0 0 0 2.1 7.1l3.7 2.8C6.7 7.3 9.1 5.4 12 5.4z"/>'),
    // redes
    instagram: svg('<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>'),
    tiktok: svg('<path fill="currentColor" d="M16.6 2h-3.3v13.2a2.9 2.9 0 1 1-2.1-2.8V9a6.3 6.3 0 1 0 5.4 6.2V8.6a7.6 7.6 0 0 0 4.4 1.4V6.7a4.4 4.4 0 0 1-4.4-4.4z"/>'),
    facebook: svg('<path fill="currentColor" d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.5 1.6-1.5h1.6V4.4a22 22 0 0 0-2.4-.1c-2.4 0-4 1.5-4 4.1v2.4H7.6V14h2.7v8z"/>'),
    youtube: svg('<path fill="currentColor" d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3z"/>'),
    x: svg('<path fill="currentColor" d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.8-6.3L5.4 21H2.3l7.2-8.3L2 3h6.4l4.4 5.8zm-1.1 16.2h1.7L7.4 4.7H5.5z"/>'),
    website: line("M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"),
    // links
    calendario: line("M4 6h16v14H4zM4 10h16M8 3v5M16 3v5"),
    tesoura: line("M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM20 4L8.1 15.9M14.5 14.5L20 20M8.1 8.1L12 12"),
    mapa: line("M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"),
    tag: line("M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9zM7.5 7.5h.01"),
    presente: line("M4 11h16v10H4zM3 7h18v4H3zM12 7v14M12 7C10 3 7 4 7 5.5S9 7 12 7zM12 7c2-4 5-3 5-1.5S15 7 12 7z"),
    link: line("M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1")
  };

  /* ---------- Tema (cores da marca) ---------- */
  var root = document.documentElement;
  Object.keys(C.tema || {}).forEach(function (k) {
    root.style.setProperty("--" + k.replace(/[A-Z]/g, function (m) { return "-" + m.toLowerCase(); }), C.tema[k]);
  });
  var meta = document.createElement("meta");
  meta.name = "theme-color";
  meta.content = (C.tema && C.tema.brandBg) || "#ffffff";
  document.head.appendChild(meta);
  if (C.nome) document.title = C.nome;

  var hide = function (id) { $(id).hidden = true; };
  var prettyUrl = function (u) { return String(u).replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""); };
  var pageUrl = function () { return location.href.split("#")[0]; };

  /* ---------- Toast ---------- */
  var toastTimer;
  function toast(msg) {
    var t = $("toast");
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.hidden = true; }, 3200);
  }
  function copyLink() {
    var url = pageUrl();
    var ok = function () { toast("Link copiado!"); };
    var fail = function () { toast(url); };
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(ok, fail);
      else fail();
    } catch (e) { fail(); }
  }

  /* ---------- 0. Barra de ações ---------- */
  $("btn-share").innerHTML = ICON.share;
  $("btn-menu").innerHTML = ICON.more;
  $("btn-share").addEventListener("click", function () {
    var data = { title: C.nome, url: pageUrl() };
    if (navigator.share) {
      navigator.share(data).catch(function (err) { if (err && err.name !== "AbortError") copyLink(); });
    } else copyLink();
  });

  var menu = $("menu");
  var waShare = "https://wa.me/?text=" + encodeURIComponent((C.nome || "") + " " + pageUrl());
  menu.innerHTML =
    '<button type="button" role="menuitem" data-act="copy">' + ICON.copy + "Copiar link</button>" +
    '<a role="menuitem" href="' + esc(waShare) + '" target="_blank" rel="noopener">' + ICON.whatsapp + "Enviar no WhatsApp</a>" +
    (C.avaliacao && C.avaliacao.url ? '<a role="menuitem" href="' + esc(C.avaliacao.url) + '" target="_blank" rel="noopener">' + ICON.star + "Avaliar no Google</a>" : "");
  function setMenu(open) {
    menu.hidden = !open;
    $("btn-menu").setAttribute("aria-expanded", String(open));
  }
  $("btn-menu").addEventListener("click", function (e) { e.stopPropagation(); setMenu(menu.hidden); });
  menu.addEventListener("click", function (e) {
    var b = e.target.closest("[data-act]");
    if (b && b.dataset.act === "copy") copyLink();
    setMenu(false);
  });
  document.addEventListener("click", function () { setMenu(false); });

  /* ---------- 1. Capa + 2. Identidade ---------- */
  if (C.capa) $("cover").style.backgroundImage = 'url("' + C.capa + '")';
  var av = $("avatar");
  if (C.logo) {
    av.innerHTML = '<img src="' + esc(C.logo) + '" alt="Logo ' + esc(C.nome) + '" width="92" height="92">';
  } else {
    av.textContent = (C.nome || "?").replace(/^(barbearia|studio|salão)\s+/i, "").charAt(0).toUpperCase();
  }
  $("name").textContent = C.nome || "";
  C.handle ? ($("handle").textContent = C.handle) : hide("handle");

  /* ---------- 3. Linha de ações: WhatsApp + redes ---------- */
  var wa = C.whatsapp || {};
  var chipsHtml = "";
  if (wa.numero) {
    var waUrl = "https://wa.me/" + String(wa.numero).replace(/\D/g, "") + (wa.mensagem ? "?text=" + encodeURIComponent(wa.mensagem) : "");
    chipsHtml += '<a class="chip chip-whatsapp" href="' + esc(waUrl) + '" target="_blank" rel="noopener">' +
      '<span class="chip-icon">' + ICON.whatsapp + "</span>" +
      '<span class="chip-text"><span class="chip-label">' + esc(wa.rotulo || "Falar no WhatsApp") + "</span></span></a>";
  }
  chipsHtml += (C.redes || []).map(function (r) {
    return '<a class="chip" href="' + esc(r.url) + '" target="_blank" rel="noopener">' +
      '<span class="chip-icon">' + (ICON[r.tipo] || ICON.link) + "</span>" +
      '<span class="chip-text"><span class="chip-label">' + esc(r.rotulo) + "</span>" +
      (r.handle ? '<span class="chip-handle">' + esc(r.handle) + "</span>" : "") + "</span></a>";
  }).join("");

  if (chipsHtml) {
    var row = $("chips"), aL = $("arrow-left"), aR = $("arrow-right");
    row.innerHTML = chipsHtml;
    aL.innerHTML = ICON.prev;
    aR.innerHTML = ICON.next;
    var updateArrows = function () {
      var max = row.scrollWidth - row.clientWidth;
      aL.hidden = row.scrollLeft <= 2;
      aR.hidden = row.scrollLeft >= max - 2;
    };
    var step = function (dir) { row.scrollBy({ left: dir * row.clientWidth * 0.75, behavior: "smooth" }); };
    aL.addEventListener("click", function () { step(-1); });
    aR.addEventListener("click", function () { step(1); });
    row.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    window.addEventListener("load", updateArrows);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(updateArrows);
    updateArrows();
  } else hide("actions");

  /* ---------- 4. Sobre ---------- */
  C.sobre ? ($("about").textContent = C.sobre) : hide("sec-about");

  /* ---------- 5. Links ---------- */
  var links = C.links || [];
  if (links.length) {
    $("links").innerHTML = links.map(function (l) {
      return '<a class="link-card" href="' + esc(l.url) + '" target="_blank" rel="noopener">' +
        '<span class="link-icon">' + (ICON[l.icone] || ICON.link) + "</span>" +
        '<span class="link-text"><span class="link-title">' + esc(l.titulo) + "</span>" +
        '<span class="link-url">' + esc(prettyUrl(l.url)) + "</span></span>" +
        '<span class="link-arrow">' + ICON.arrow + "</span></a>";
    }).join("");
  } else hide("sec-links");

  /* ---------- 6. Avalie no Google ---------- */
  var rv = C.avaliacao || {};
  if (rv.url) {
    var score = rv.nota
      ? '<p class="review-score"><strong>' + esc(rv.nota) + "</strong> no Google" +
        (rv.totalAvaliacoes ? " · " + esc(rv.totalAvaliacoes) + " avaliações" : "") + "</p>"
      : "";
    $("review").innerHTML =
      '<div class="review-stars" aria-hidden="true">' + new Array(6).join(ICON.star) + "</div>" + score +
      '<h2 class="review-title">' + esc(rv.titulo || "Avalie no Google") + "</h2>" +
      (rv.texto ? '<p class="review-text">' + esc(rv.texto) + "</p>" : "") +
      '<a class="btn btn-google" href="' + esc(rv.url) + '" target="_blank" rel="noopener">' + ICON.google +
      "<span>" + esc(rv.rotulo || "Avaliar no Google") + "</span></a>";
  } else hide("sec-review");

  /* ---------- 7. Galeria + lightbox ---------- */
  var gal = C.galeria || {};
  var imgs = gal.imagens || [];
  var current = 0, lastFocus = null;
  if (imgs.length) {
    if (gal.titulo) $("gallery-title").textContent = gal.titulo;
    $("gallery").innerHTML = imgs.map(function (im, i) {
      return '<button type="button" class="gallery-item" data-i="' + i + '" aria-label="Ampliar: ' + esc(im.legenda || "imagem " + (i + 1)) + '">' +
        '<img src="' + esc(im.src) + '" alt="' + esc(im.legenda || "") + '" loading="lazy"></button>';
    }).join("");
    $("gallery").addEventListener("click", function (e) {
      var it = e.target.closest(".gallery-item");
      if (it) openLb(+it.dataset.i);
    });
  } else hide("sec-gallery");

  var lb = $("lightbox");
  $("lb-close").innerHTML = ICON.close;
  $("lb-prev").innerHTML = ICON.prev;
  $("lb-next").innerHTML = ICON.next;
  function showLb(i) {
    current = (i + imgs.length) % imgs.length;
    $("lb-img").src = imgs[current].src;
    $("lb-img").alt = imgs[current].legenda || "";
    $("lb-caption").textContent = (imgs[current].legenda || "") + "  ·  " + (current + 1) + "/" + imgs.length;
  }
  function openLb(i) {
    lastFocus = document.activeElement;
    showLb(i);
    lb.hidden = false;
    document.body.style.overflow = "hidden";
    $("lb-close").focus();
  }
  function closeLb() {
    lb.hidden = true;
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }
  $("lb-close").addEventListener("click", closeLb);
  $("lb-prev").addEventListener("click", function () { showLb(current - 1); });
  $("lb-next").addEventListener("click", function () { showLb(current + 1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) closeLb(); });
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) { if (e.key === "Escape") setMenu(false); return; }
    if (e.key === "Escape") closeLb();
    if (e.key === "ArrowLeft") showLb(current - 1);
    if (e.key === "ArrowRight") showLb(current + 1);
  });
  var x0 = null;
  lb.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) showLb(current + (dx < 0 ? 1 : -1));
    x0 = null;
  });

  /* ---------- 8. Rodapé ---------- */
  $("footer").textContent = "© " + new Date().getFullYear() + " " + (C.nome || "") + (C.rodape ? " · " + C.rodape : "");
})();
