const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
// const wave = document.querySelector('.greeting-img');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  nav.classList.toggle('flex');
  nav.classList.toggle('hidden');
  // wave.style.display = 'none';
})