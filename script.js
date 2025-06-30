const floaters = document.querySelectorAll('.floater');

function randomizeFloater(floater) {
  const side = Math.random() > 0.5 ? 'left' : 'right';
  const topOffset = Math.floor(Math.random() * 90) + 5; // 5% to 95%
  const horizontalJitter = Math.random() * 20; // up to 20px inward
  const delay = Math.random() * 1000; // up to 1s
  const scale = 0.6 + Math.random() * 0.6; // scale between 0.6 and 1.2
  const rotation = (Math.random() - 0.5) * 30; // -15 to +15 degrees

  floater.style.top = `${topOffset}%`;
  floater.style.left = side === 'left' ? `${horizontalJitter}px` : 'unset';
  floater.style.right = side === 'right' ? `${horizontalJitter}px` : 'unset';
  floater.style.transition = `opacity 1s ease, transform 1.2s ease`;
  floater.style.transform = `scale(${scale}) rotate(${rotation}deg)`;

  setTimeout(() => {
    floater.style.opacity = 1;
    setTimeout(() => {
      floater.style.opacity = 0;
    }, 1200);
  }, delay);
}

window.addEventListener('scroll', () => {
  floaters.forEach(floater => {
    if (Math.random() > 0.7) {
      randomizeFloater(floater);
    }
  });
});
