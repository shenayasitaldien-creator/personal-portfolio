const text = "about me";
const element = document.querySelector(".about-me");
if (element) {
  element.textContent = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      element.textContent += text[i];
      i++;
      setTimeout(type, 200);
    }
  }

  type();
}

const aboutContent = document.querySelector(".about-content");
if (aboutContent) {
  aboutContent.style.opacity = "0";
  aboutContent.style.transform = "translateX(-60px)";
  aboutContent.style.transition = "opacity 2s ease, transform 0.8s ease";

  setTimeout(() => {
    aboutContent.style.opacity = "1";
    aboutContent.style.transform = "translateX(0)";
  }, 300);
}

const cards = document.querySelectorAll(".card");
cards.forEach((card, index) => {
  setTimeout(() => {
    card.classList.add("visible");
  }, 150 * index);
});