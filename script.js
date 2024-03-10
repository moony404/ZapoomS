document.addEventListener("DOMContentLoaded", () => {
  // fetch night mode state in user localStorage
  let theme = localStorage.getItem("theme") || false;

  // set up theme
  if (theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }
});


document.getElementById('nightMode').onclick = () => {
  var currentTheme = document.documentElement.getAttribute("data-theme");
    var newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem( "theme" , newTheme );
};