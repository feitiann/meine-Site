// 语言切换按钮
const langToggle = document.getElementById("langToggle");

// 默认语言：中文
let currentLang = localStorage.getItem("lang") || "zh";
setLanguage(currentLang);

// 切换语言时执行
langToggle.addEventListener("click", () => {
  currentLang = currentLang === "zh" ? "en" : "zh";
  localStorage.setItem("lang", currentLang);
  setLanguage(currentLang);
});

// 设置语言显示
function setLanguage(lang) {
  const zhEls = document.querySelectorAll('[data-lang="zh"]');
  const enEls = document.querySelectorAll('[data-lang="en"]');

  if (lang === "zh") {
    zhEls.forEach(el => el.style.display = "");
    enEls.forEach(el => el.style.display = "none");
    langToggle.textContent = "EN | 中文";
  } else {
    zhEls.forEach(el => el.style.display = "none");
    enEls.forEach(el => el.style.display = "");
    langToggle.textContent = "中文 | EN";
  }
}
