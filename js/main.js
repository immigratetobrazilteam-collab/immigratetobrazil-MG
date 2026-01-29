/** MG JS - Belo Horizonte - Heritage-warm with brown and copper tones */
const STATE_CONFIG = {
  stateCode: 'mg',
  capital: 'Belo Horizonte',
  formspreeUrl: 'https://formspree.io/f/xmgqbddb',
  colors: { primary: '#8b4513', secondary: '#a0522d', accent: '#daa520' },
  animations: {"enabled": true, "header": {"type": "mineralSlide", "duration": "0.6s", "easing": "ease-out", "delay": "0s"}, "sections": {"type": "mineiroReveal", "duration": "1s", "easing": "ease-out", "stagger": "0.15s"}, "hero": {"type": "mountainParallax", "speed": 0.5, "direction": "vertical"}, "cards": {"type": "gemLift", "sparkle": true, "scale": 1.04}, "images": {"type": "crystalReveal", "facets": true, "duration": "0.9s"}},
  interactions: {"hover": "mineral-shine", "scroll": "mountain-climb", "transitions": "gem-sparkle", "click": "crystal-burst"},
  premiumEffects: ["mineral-gradient", "gem-sparkle", "mountain-shadows", "crystal-refraction"]
};

const SECTIONS = ["mg-index-section--map", "mg-index-section-frequently-asked-questions-about-living-in-", "mg-index-contact"];

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        await fetch(STATE_CONFIG.formspreeUrl, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
        alert('Message sent!');
        form.reset();
      } catch(err) { alert('Error'); }
    });
  });
});
