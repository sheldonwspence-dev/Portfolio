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
