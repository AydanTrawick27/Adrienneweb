'use strict';
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() { menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open); });
nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
window.matchMedia('(min-width: 761px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
const progress = document.querySelector('.reading-progress');
let framePending = false;
function updateProgress() { const height = document.documentElement.scrollHeight - innerHeight; progress.style.width = `${height > 0 ? Math.min(100, scrollY / height * 100) : 0}%`; framePending = false; }
addEventListener('scroll', () => { if (!framePending) { framePending = true; requestAnimationFrame(updateProgress); } }, { passive: true });
addEventListener('resize', updateProgress); updateProgress();
const navLinks = [...nav.querySelectorAll('a')];
if ('IntersectionObserver' in window) {
 const observer = new IntersectionObserver(entries => { for (const entry of entries) { if (!entry.isIntersecting) continue; navLinks.forEach(link => { if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); }); } }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
 document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
}
function revealReference() { if (!location.hash.startsWith('#ref-')) return; const target = document.getElementById(location.hash.slice(1)); if (!target) return; const disclosure = target.closest('details'); if (disclosure) disclosure.open = true; requestAnimationFrame(() => target.scrollIntoView({ block: 'center' })); }
addEventListener('hashchange', revealReference); revealReference();
let printDisclosureState = [];
addEventListener('beforeprint', () => { printDisclosureState = [...document.querySelectorAll('details')].map(el => [el, el.open]); printDisclosureState.forEach(([el]) => { el.open = true; }); });
addEventListener('afterprint', () => { printDisclosureState.forEach(([el, open]) => { el.open = open; }); });
