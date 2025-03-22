// script.js is exectued on all pages of ZapoomS
document.addEventListener("DOMContentLoaded", () => {
  //fetch night mode state in user localStorage
  let theme = localStorage.getItem("theme") || false;
  //set up theme
  if (theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }
});
document.getElementById('button_theme').onclick = () => {
  var currentTheme = document.documentElement.getAttribute("data-theme");
  var newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem( "theme" , newTheme );
  // il faut changer le bouton en mettanrt une lune quand on clique dessus
};

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  updateThemeIcon(theme);
}

function updateThemeIcon(theme) {
  const buttonTheme = document.getElementById('button_theme');
  if (buttonTheme) {
    if (theme === "dark") {
      buttonTheme.innerHTML = '🌙'; // Lune
    } else {
      buttonTheme.innerHTML = '☀️'; // Soleil
    }
  }
}