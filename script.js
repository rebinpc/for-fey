const button = document.getElementById("loveButton");
const letter = document.getElementById("letter");

button.addEventListener("click", () => {
  letter.classList.remove("hidden");
  button.textContent = "❤️ نامه باز شد";
  for (let i = 0; i < 22; i++) {
    setTimeout(createHeart, i * 50);
  }
});

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = ["❤️", "💗", "💕", "💖", "🌹"][Math.floor(Math.random() * 5)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (16 + Math.random() * 24) + "px";
  heart.style.animationDuration = (4 + Math.random() * 5) + "s";
  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 9500);
}

setInterval(createHeart, 900);
