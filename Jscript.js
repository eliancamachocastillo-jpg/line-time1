// Control de tamaño de fuente
const htmlEl = document.documentElement;
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

// Detecta el tamaño actual del HTML
let currentFontSize = parseInt(
  window.getComputedStyle(htmlEl).getPropertyValue("font-size")
);

increaseBtn.addEventListener("click", () => {
  if (currentFontSize < 28) {
    currentFontSize += 1;
    htmlEl.style.fontSize = currentFontSize + "px";
  }
});

decreaseBtn.addEventListener("click", () => {
  if (currentFontSize > 10) {
    currentFontSize -= 1;
    htmlEl.style.fontSize = currentFontSize + "px";
  }
});

// Navegación con teclado
const items = Array.from(document.querySelectorAll(".item"));
items.forEach((item, i) => {
  item.addEventListener("keydown", e => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      items[(i + 1) % items.length].focus();
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      items[(i - 1 + items.length) % items.length].focus();
    }
  });
});
