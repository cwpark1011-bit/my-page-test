function toggleMenu(){
  const nav = document.getElementById('site-nav');
  nav.classList.toggle('open');
}
const yearEl = document.getElementById('year');
if(yearEl){ yearEl.textContent = new Date().getFullYear(); }
