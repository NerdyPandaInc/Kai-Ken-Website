document.getElementById("enter-btn").addEventListener("click", () => {
  const overlay = document.getElementById("entry-overlay");
  const music = document.getElementById("bg-music");

  overlay.classList.add("hidden");

  setTimeout(() => {
    music.play().catch((err) => {
      console.warn("Autoplay blocked:", err);
    });
  }, 300);
});
