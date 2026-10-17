// Scale the deck iframe from its native size down to the width of its card.
const frame = document.getElementById('deck-frame');
const deck = document.getElementById('deck-iframe');
const NATIVE_WIDTH = 1200;

function fitDeck() {
  deck.style.transform = `scale(${frame.clientWidth / NATIVE_WIDTH})`;
}
new ResizeObserver(fitDeck).observe(frame);

// The deck's own nav is tiny once scaled, so these buttons click it for the visitor.
// This works because the deck is served from the same origin as the page.
function deckClick(id) {
  const button = deck.contentDocument && deck.contentDocument.getElementById(id);
  if (button) button.click();
}
document.getElementById('deck-prev').addEventListener('click', () => deckClick('prev-btn'));
document.getElementById('deck-next').addEventListener('click', () => deckClick('next-btn'));

// Revision clouds: a scalloped red outline around each card's Results section.
// Each one is seeded from its card's id, so it looks hand-drawn but is the same on every redraw.
const SVG_NS = 'http://www.w3.org/2000/svg';
const CLOUD_MARGIN = 12; // the svg extends this far past the section so the scallops can bulge out
const SCALLOP = 30; // target scallop width in px
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

// mulberry32, seeded from a string
function seededRandom(text) {
  let a = 0;
  for (const ch of text) a = (Math.imul(a, 31) + ch.charCodeAt(0)) >>> 0;
  return () => {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function cloudPath(w, h, random) {
  const m = CLOUD_MARGIN;
  const corners = [[m, m], [m + w, m], [m + w, m + h], [m, m + h]];
  const points = [];
  corners.forEach(([x0, y0], i) => {
    const [x1, y1] = corners[(i + 1) % 4];
    const n = Math.max(2, Math.round(Math.hypot(x1 - x0, y1 - y0) / SCALLOP));
    for (let k = 0; k < n; k++) {
      const t = (k + (k ? random() - 0.5 : 0) * 0.5) / n;
      points.push([
        x0 + (x1 - x0) * t + (random() - 0.5) * 5,
        y0 + (y1 - y0) * t + (random() - 0.5) * 5,
      ]);
    }
  });
  // Clockwise arcs bulge outward; a radius a little over half the chord gives a shallow, uneven scallop.
  let d = `M${points[0][0].toFixed(1)} ${points[0][1].toFixed(1)}`;
  points.forEach(([x0, y0], i) => {
    const [x1, y1] = points[(i + 1) % points.length];
    const r = (Math.hypot(x1 - x0, y1 - y0) / 2) * (1.05 + random() * 0.25);
    d += `A${r.toFixed(1)} ${r.toFixed(1)} 0 0 1 ${x1.toFixed(1)} ${y1.toFixed(1)}`;
  });
  return d;
}

document.querySelectorAll('.card .results').forEach(section => {
  const svg = document.createElementNS(SVG_NS, 'svg');
  const path = document.createElementNS(SVG_NS, 'path');
  svg.classList.add('cloud');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');
  svg.style.left = svg.style.top = `${-CLOUD_MARGIN}px`;
  svg.append(path);
  section.append(svg);

  const seed = section.closest('.card').id;
  let inked = reduceMotion; // once true, the cloud stays fully drawn

  function draw() {
    const w = section.offsetWidth;
    const h = section.offsetHeight;
    svg.setAttribute('width', w + 2 * CLOUD_MARGIN);
    svg.setAttribute('height', h + 2 * CLOUD_MARGIN);
    path.setAttribute('d', cloudPath(w, h, seededRandom(seed)));
    if (inked) {
      path.style.strokeDasharray = 'none';
    } else {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
    }
  }
  new ResizeObserver(draw).observe(section);

  if (!reduceMotion) {
    // Each cloud draws itself once, the first time it scrolls into view.
    new IntersectionObserver(([entry], observer) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      inked = true;
      path.style.transition = 'stroke-dashoffset 1.6s ease-out';
      path.style.strokeDashoffset = 0;
      path.addEventListener('transitionend', () => { path.style.strokeDasharray = 'none'; }, { once: true });
    }, { threshold: 0.3 }).observe(section);
  }
});

// Detail views: build each callout's leader line and target dot from its data attributes.
// data-bubble is where the numbered bubble sits and data-target the point it marks, as "x,y" percent of the image.
document.querySelectorAll('.detail-view').forEach(view => {
  const leaders = document.createElementNS(SVG_NS, 'svg');
  leaders.classList.add('detail-leaders');
  leaders.setAttribute('viewBox', '0 0 100 100');
  leaders.setAttribute('preserveAspectRatio', 'none');
  leaders.setAttribute('aria-hidden', 'true');
  view.querySelectorAll('.callout').forEach(callout => {
    const [bx, by] = callout.dataset.bubble.split(',').map(Number);
    const [tx, ty] = callout.dataset.target.split(',').map(Number);
    callout.style.left = `${bx}%`;
    callout.style.top = `${by}%`;
    for (const name of ['halo', 'line']) {
      const line = document.createElementNS(SVG_NS, 'line');
      line.classList.add(name);
      line.setAttribute('x1', bx);
      line.setAttribute('y1', by);
      line.setAttribute('x2', tx);
      line.setAttribute('y2', ty);
      leaders.append(line);
    }
    const dot = document.createElement('span');
    dot.className = 'callout-dot';
    dot.style.left = `${tx}%`;
    dot.style.top = `${ty}%`;
    view.append(dot);
  });
  view.prepend(leaders);
});
