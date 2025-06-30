const floaters = document.querySelectorAll('.floater');

function randomizeFloater(floater) {
  const side = Math.random() > 0.5 ? 'left' : 'right';
  const offset = Math.floor(Math.random() * 100); // vertical position
  const delay = Math.random() * 500; // delay in ms

  floater.style.top = `${offset}%`;
  floater.style.left = side === 'left' ? '0' : 'unset';
  floater.style.right = side === 'right' ? '0' : 'unset';

  setTimeout(() => {
    floater.style.opacity = 1;
    floater.style.transform = 'scale(1.2)';
    setTimeout(() => {
      floater.style.opacity = 0;
      floater.style.transform = 'scale(0.8)';
    }, 1000);
  }, delay);
}

window.addEventListener('scroll', () => {
  floaters.forEach(floater => {
    if (Math.random() > 0.7) { // only animate some on each scroll
      randomizeFloater(floater);
    }
  });
});
