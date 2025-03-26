// scroll-fix.js
// Този скрипт се грижи за всеки JS проблем със скролирането
// Към момента активира плавно превъртане ако се наложи ръчно

document.addEventListener("DOMContentLoaded", () => {
  document.body.style.overflowY = "auto";
  document.body.style.height = "auto";

  // Защитна мярка – ако нещо насила скрива скрола
  setTimeout(() => {
    if (getComputedStyle(document.body).overflowY !== "auto") {
      document.body.style.overflowY = "scroll";
    }
  }, 500);
});
