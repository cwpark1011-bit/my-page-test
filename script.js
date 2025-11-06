function toggleMenu(){
  const nav = document.getElementById('site-nav');
  nav.classList.toggle('show');
}
document.getElementById('year')?.appendChild(document.createTextNode(new Date().getFullYear()));
