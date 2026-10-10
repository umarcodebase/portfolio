/* =========================================================
   Umar Shahzad · Portfolio scripts (vanilla JS, no libraries)
   ========================================================= */

/* ---------------------------------------------------------
   1. CERTIFICATES  ← edit here. One line per certificate.
   - img: path inside /images/certs/ (leave "" until you have the picture)
   - category: one of the FILTER names, or a new one (it appears automatically)
   - issuer / date: leave "" to hide
   --------------------------------------------------------- */
const CERTIFICATES = [
  { title: "EOT Training",                         issuer: "Amazon Web Services (AWS)", date: "2026", category: "Data Center", img: "" },
  { title: "Global Safety Training",               issuer: "Amazon Web Services (AWS)", date: "2026", category: "Safety",      img: "" },
  { title: "OSHA Workplace Safety Training",       issuer: "", date: "", category: "Safety",      img: "" },
  { title: "Jenbacher 420 Gas Engine O&M",         issuer: "", date: "", category: "Electrical",  img: "" },
  { title: "ETAP Certification",                   issuer: "", date: "", category: "Software",    img: "" },
  { title: "AutoCAD Certification",                issuer: "", date: "", category: "Software",    img: "" },
  { title: "Renewable Energy Technologies",        issuer: "", date: "", category: "Electrical",  img: "" },
  { title: "Project Management with Data Analytics", issuer: "", date: "", category: "Professional", img: "" },
  { title: "Agile Fundamentals Certification",     issuer: "", date: "", category: "Professional", img: "" },
  { title: "Identify and Prevent Phishing Attacks", issuer: "", date: "", category: "Professional", img: "" },
];

/* ---------------------------------------------------------
   2. GRID-TO-RACK CHAIN  (evidence per power-chain stage)
   type: "hands" = hands-on / project, "exp" = exposure / training / academic
   --------------------------------------------------------- */
const CHAIN = [
  { id: "grid", ico: "⚡", name: "Grid & HV", title: "Utility grid & HV transmission", items: [
    ["hands", "Bid development for three live 132 kV grid and transmission projects (Barqtron)"],
    ["hands", "Grid-station and transmission-line surveys and on-site substation assessments"],
    ["hands", "Wind-turbine grid-integration studies automated in PowerFactory from Python (LUH)"],
    ["exp",   "MSc courses: Electric Power Systems · Technologies for HVAC and HVDC Transmission · Smart Grids"] ] },
  { id: "tx", ico: "🔁", name: "Transformer", title: "Power transformers", items: [
    ["hands", "Supported preventive maintenance of 500/220 kV power transformers (NTDC)"],
    ["hands", "MSc thesis: structural dynamics of a transformer-core yoke, FEM validated <5% up to 2,000 Hz"],
    ["hands", "Coordinated procurement of HV power transformers within ~$5M package (Barqtron)"] ] },
  { id: "sw", ico: "🎛️", name: "Switchgear", title: "Switchgear & protection", items: [
    ["hands", "Procurement scope for HV switchgear and XLPE cable systems (Barqtron)"],
    ["hands", "Maintenance support on circuit breakers, CTs, PTs and arresters (NTDC)"],
    ["hands", "Three-phase fault detection & under/overvoltage protection prototype, 97% accuracy"],
    ["exp",   "Distance, differential and Buchholz protection studied in live HV operations · Power System Protection (A)"] ] },
  { id: "ups", ico: "🔋", name: "UPS & Gen", title: "UPS & generators", items: [
    ["exp", "AWS DCEO exposure to UPS systems and generators in Milan"],
    ["exp", "Power Prep, Power Ups and TPVR-based procedures (AWS)"],
    ["exp", "Jenbacher 420 gas engine O&M training"] ] },
  { id: "pdu", ico: "🗄️", name: "PDU & Rack", title: "PDUs & IT load", items: [
    ["exp", "AWS DCEO exposure to PDUs and mission-critical electrical distribution"],
    ["exp", "Electrical safety and operational training (AWS)"] ] },
  { id: "mon", ico: "📡", name: "Monitoring", title: "Monitoring, controls & data", items: [
    ["exp",   "AWS DCEO exposure to monitoring and alarms"],
    ["hands", "Three PMU prototypes with GPS time-sync, 40,000+ synchronised measurements"],
    ["hands", "PLC programming and SCADA configuration in Factory I/O; IoT temperature monitoring"],
    ["hands", "Python data pipelines and ML load prediction (91% accuracy)"] ] },
];

/* Target roles cycled by the typewriter */
const ROLES = [
  "Data Center Operations Engineer",
  "Critical Facilities Engineer",
  "Data Center Electrical Engineer",
  "Mission-Critical Engineer",
  "Power Systems Engineer",
];

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

/* ---------- Theme toggle (remembered per browser) ---------- */
(function theme() {
  const root = document.documentElement, btn = $("#themeToggle");
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  if (saved === "light" || saved === "dark") root.dataset.theme = saved;
  else if (window.matchMedia("(prefers-color-scheme: light)").matches) root.dataset.theme = "light";
  const label = () => btn.setAttribute("aria-label", root.dataset.theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  label();
  btn.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
    label();
  });
})();

/* ---------- Mobile menu ---------- */
(function menu() {
  const burger = $("#burger"), links = $("#navLinks");
  const close = () => { links.classList.remove("is-open"); burger.setAttribute("aria-expanded", "false"); };
  burger.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(open));
  });
  $$("a", links).forEach(a => a.addEventListener("click", close));
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
})();

/* ---------- Scroll progress + navbar state + active section ---------- */
(function scrollUI() {
  const bar = $("#progressBar"), nav = $("#nav");
  const navLinks = $$(".nav__links a");
  const onScroll = () => {
    const h = document.documentElement;
    const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
    bar.style.width = (p * 100).toFixed(2) + "%";
    nav.classList.toggle("is-scrolled", h.scrollTop > 10);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const spy = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      navLinks.forEach(a => a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach(s => spy.observe(s));
})();

/* ---------- Scroll reveal ---------- */
(function reveal() {
  const els = $$(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("is-visible")); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  els.forEach(e => io.observe(e));
})();

/* ---------- Typewriter ---------- */
(function typewriter() {
  const el = $("#typewriter");
  if (reduceMotion) { el.textContent = ROLES.join(" · "); return; }
  let r = 0, i = ROLES[0].length, deleting = true;
  const tick = () => {
    const word = ROLES[r];
    i += deleting ? -1 : 1;
    el.textContent = word.slice(0, i);
    let wait = deleting ? 35 : 70;
    if (!deleting && i === word.length) { deleting = true; wait = 1900; }
    else if (deleting && i === 0) { deleting = false; r = (r + 1) % ROLES.length; wait = 350; }
    setTimeout(tick, wait);
  };
  setTimeout(tick, 2200);
})();

/* ---------- Animated counters (real numbers only, set in HTML) ---------- */
(function counters() {
  const els = $$(".count");
  const fmt = (n, sep) => sep ? n.toLocaleString("en-US") : String(n);
  const run = el => {
    const to = +el.dataset.to, sep = !!el.dataset.sep;
    if (reduceMotion) { el.textContent = fmt(to, sep); return; }
    const t0 = performance.now(), dur = 1600;
    const step = t => {
      const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      el.textContent = fmt(Math.round(to * e), sep);
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } });
  }, { threshold: 0.6 });
  els.forEach(e => io.observe(e));
})();

/* ---------- Grid-to-rack interactive chain ---------- */
(function chain() {
  const track = $(".chain__track"), panel = $("#chainPanel");
  const show = idx => {
    const c = CHAIN[idx];
    $$(".chain__node", track).forEach((b, j) => { b.setAttribute("aria-selected", String(j === idx)); b.tabIndex = j === idx ? 0 : -1; });
    panel.innerHTML = `<h4>${c.title}</h4><ul>${c.items.map(([t, txt]) =>
      `<li><span class="tag tag--${t}">${t === "hands" ? "hands-on" : "exposure"}</span><span>${txt}</span></li>`).join("")}</ul>`;
  };
  CHAIN.forEach((c, idx) => {
    const b = document.createElement("button");
    b.className = "chain__node"; b.type = "button"; b.setAttribute("role", "tab");
    b.innerHTML = `<span class="ico" aria-hidden="true">${c.ico}</span>${c.name}`;
    b.addEventListener("click", () => show(idx));
    b.addEventListener("keydown", e => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      const n = (idx + (e.key === "ArrowRight" ? 1 : -1) + CHAIN.length) % CHAIN.length;
      show(n); track.children[n].focus();
    });
    track.appendChild(b);
  });
  show(1);
})();

/* ---------- Certificates: grid, filters, lightbox ---------- */
(function certificates() {
  const grid = $("#certGrid"), filters = $("#certFilters");
  const box = $("#lightbox"), boxImg = $("#lightboxImg"), boxCap = $("#lightboxCap");
  const cats = ["All", ...new Set(CERTIFICATES.map(c => c.category))];

  const render = cat => {
    grid.innerHTML = "";
    CERTIFICATES.filter(c => cat === "All" || c.category === cat).forEach(c => {
      const meta = [c.issuer, c.date].filter(Boolean).join(" · ");
      const card = document.createElement("article");
      card.className = "cert";
      card.innerHTML = (c.img
        ? `<button class="cert__thumb" type="button" aria-label="View ${c.title} certificate"><img src="images/certs/${c.img}" alt="${c.title} certificate" loading="lazy"></button>`
        : `<div class="cert__thumb cert__thumb--empty" aria-hidden="true">✓</div>`) +
        `<div class="cert__info"><h3>${c.title}</h3>${meta ? `<p>${meta}</p>` : ""}<span class="cert__cat">#${c.category.replace(/\s/g, "")}</span></div>`;
      const btn = $(".cert__thumb", card);
      if (c.img && btn.tagName === "BUTTON") btn.addEventListener("click", () => {
        boxImg.src = "images/certs/" + c.img; boxImg.alt = c.title + " certificate";
        boxCap.textContent = [c.title, meta].filter(Boolean).join(" · ");
        box.showModal();
      });
      grid.appendChild(card);
    });
  };

  cats.forEach((cat, i) => {
    const b = document.createElement("button");
    b.className = "filter"; b.type = "button"; b.textContent = cat;
    b.setAttribute("aria-pressed", String(i === 0));
    b.addEventListener("click", () => {
      $$(".filter", filters).forEach(f => f.setAttribute("aria-pressed", "false"));
      b.setAttribute("aria-pressed", "true"); render(cat);
    });
    filters.appendChild(b);
  });
  render("All");

  $("#lightboxClose").addEventListener("click", () => box.close());
  box.addEventListener("click", e => { if (e.target === box) box.close(); });
})();

/* ---------- CEFR bars (A1..C2 = 1..6) ---------- */
$$(".cefr").forEach(el => {
  const lvl = +el.dataset.level;
  el.innerHTML = Array.from({ length: 6 }, (_, i) => `<i class="${i < lvl ? "on" : ""}"></i>`).join("");
});

/* ---------- Copy email ---------- */
(function copyEmail() {
  const btn = $("#copyEmail"), msg = $("#copiedMsg");
  btn.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(btn.dataset.email); msg.textContent = "Copied ✓"; }
    catch (e) { msg.textContent = btn.dataset.email; }
    setTimeout(() => (msg.textContent = ""), 2200);
  });
})();

$("#year").textContent = new Date().getFullYear();

/* ---------- Hero canvas: lightweight power-grid / circuit traces with travelling pulses ---------- */
(function gridCanvas() {
  const cv = $("#gridCanvas");
  if (!cv || reduceMotion) return;
  const ctx = cv.getContext("2d");
  let W, H, traces = [], pulses = [], raf, running = true;
  const DPR = Math.min(window.devicePixelRatio || 1, 1.5);
  const colour = () => getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#22d3ee";

  const build = () => {
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = W * DPR; cv.height = H * DPR; ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    const G = 40, n = Math.round((W * H) / 26000);
    traces = []; pulses = [];
    for (let k = 0; k < n; k++) {
      // orthogonal "bus bar" path snapped to a 40px grid
      let x = Math.round(Math.random() * W / G) * G, y = Math.round(Math.random() * H / G) * G;
      const pts = [[x, y]];
      for (let s = 0; s < 3 + (Math.random() * 3 | 0); s++) {
        if (s % 2 === 0) x += (Math.random() < .5 ? -1 : 1) * G * (2 + (Math.random() * 4 | 0));
        else y += (Math.random() < .5 ? -1 : 1) * G * (1 + (Math.random() * 3 | 0));
        pts.push([x, y]);
      }
      let len = 0; for (let i = 1; i < pts.length; i++) len += Math.abs(pts[i][0] - pts[i - 1][0]) + Math.abs(pts[i][1] - pts[i - 1][1]);
      traces.push({ pts, len });
      if (Math.random() < .55) pulses.push({ t: traces.length - 1, d: Math.random() * len, v: .6 + Math.random() * 1.2 });
    }
  };

  const pointAt = (tr, d) => {
    for (let i = 1; i < tr.pts.length; i++) {
      const [x0, y0] = tr.pts[i - 1], [x1, y1] = tr.pts[i];
      const seg = Math.abs(x1 - x0) + Math.abs(y1 - y0);
      if (d <= seg) { const k = d / seg; return [x0 + (x1 - x0) * k, y0 + (y1 - y0) * k]; }
      d -= seg;
    }
    return tr.pts[tr.pts.length - 1];
  };

  const draw = () => {
    const c = colour();
    ctx.clearRect(0, 0, W, H);
    ctx.globalAlpha = .14; ctx.strokeStyle = c; ctx.lineWidth = 1;
    traces.forEach(tr => {
      ctx.beginPath(); tr.pts.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.stroke();
      const [ex, ey] = tr.pts[tr.pts.length - 1]; ctx.strokeRect(ex - 3, ey - 3, 6, 6); // node / terminal
    });
    ctx.globalAlpha = .9; ctx.fillStyle = c; ctx.shadowColor = c; ctx.shadowBlur = 10;
    pulses.forEach(p => {
      const tr = traces[p.t]; p.d += p.v; if (p.d > tr.len) p.d = 0;
      const [x, y] = pointAt(tr, p.d); ctx.beginPath(); ctx.arc(x, y, 1.8, 0, Math.PI * 2); ctx.fill();
    });
    ctx.shadowBlur = 0;
    if (running) raf = requestAnimationFrame(draw);
  };

  build(); draw();
  let rT; window.addEventListener("resize", () => { clearTimeout(rT); rT = setTimeout(build, 200); });
  // Pause when the hero is off-screen or the tab is hidden (saves battery / CPU)
  new IntersectionObserver(([en]) => {
    running = en.isIntersecting && !document.hidden;
    cancelAnimationFrame(raf); if (running) raf = requestAnimationFrame(draw);
  }).observe(cv);
  document.addEventListener("visibilitychange", () => {
    running = !document.hidden; cancelAnimationFrame(raf); if (running) raf = requestAnimationFrame(draw);
  });
})();
