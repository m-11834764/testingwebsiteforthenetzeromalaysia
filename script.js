// Chart data: [label, value, style]. Figures are explained in the notes on each page.
const CHARTS = {
  mix: { unit: "%", max: 60, rows: [
    ["Coal, 2024", 56.5, "coal"], ["Coal, 2025", 58.6, "coal"],
    ["Gas, 2024", 36.4, "gas"], ["Gas, 2025", 33.1, "gas"],
    ["Solar, 2024", 2.1, "sun"], ["Solar, 2025", 2.4, "sun"]
  ]},
  re: { unit: "%", max: 70, rows: [
    ["2021 (actual)", 23, ""], ["Oct 2025 (reported)", 30, ""],
    ["2035 (target)", 40, "target"], ["2050 (target)", 70, "target"]
  ]},
  ev: { unit: "", max: 30000, rows: [
    ["Nov 2022", 700, "sun"], ["Dec 2023", 1434, "sun"], ["Jan 2024", 2020, "sun"],
    ["Sep 2025", 4100, "sun"], ["Dec 2025", 5719, "sun"],
    ["2025 target", 10000, "target"], ["2030 target", 30000, "target"]
  ]},
  av: { unit: "%", max: 50, rows: [
    ["Sustainable fuel", 46.2, ""], ["Carbon offsets", 30.8, "gas"],
    ["Aircraft technology", 18, "sun"], ["Operations", 5, "coal"]
  ]}
};

function drawChart(el) {
  const c = CHARTS[el.dataset.chart];
  if (!c || el.dataset.drawn) return;
  el.dataset.drawn = "1";
  c.rows.forEach(([label, value, style]) => {
    const row = document.createElement("div");
    row.className = "row";
    const span = document.createElement("span");
    span.textContent = label;
    const track = document.createElement("div");
    track.className = "track";
    const fill = document.createElement("div");
    fill.className = "fill " + style;
    fill.dataset.w = (value / c.max * 100) + "%";
    track.appendChild(fill);
    const b = document.createElement("b");
    b.textContent = value.toLocaleString("en-MY") + c.unit;
    row.append(span, track, b);
    el.appendChild(row);
  });
}

function showPage() {
  const id = location.hash.slice(1);
  const page = document.getElementById(id) || document.getElementById("home");
  document.querySelectorAll(".page").forEach(p => { p.hidden = p !== page; });
  document.querySelectorAll("nav a").forEach(a => {
    if (a.getAttribute("href") === "#" + page.id) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
  document.title = (page.id === "home" ? "" : page.dataset.title + " | ") + "Net-zero Malaysia";
  page.querySelectorAll(".chart").forEach(drawChart);
  requestAnimationFrame(() => page.querySelectorAll(".fill").forEach(f => { f.style.width = f.dataset.w; }));
  window.scrollTo(0, 0);
  closeMenu();
}

const menu = document.getElementById("menu");
const burger = document.querySelector(".burger");
function closeMenu() { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
burger.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(open));
});

function updateClock() {
  const ms = new Date(2050, 0, 1) - new Date();
  document.getElementById("days").textContent = Math.max(0, Math.ceil(ms / 864e5)).toLocaleString("en-MY");
}

window.addEventListener("hashchange", showPage);
updateClock();
showPage();
