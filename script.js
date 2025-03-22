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
  // il faut changer le bouton en mettant une lune quand on clique dessus et inversement
};

document.getElementById('button_theme').onclick = () => {
  let img = document.getElementById("icon_theme");
  // Vérifie l'image actuelle et alterne
  if (img.src.includes("img/sun.svg")) {
    img.src = "img/moon.svg";
  } else {
    img.src = "img/sun.svg";
  }
};

// document.getElementById('button_theme').onclick = () => {
//   let img = document.getElementById("icon_theme");

//   // Ajoute la classe pour le fondu
//   img.classList.add("fade-out");

//   // Attends la fin de l'animation avant de changer l'image
//   setTimeout(() => {
//     img.src = img.src.includes("img/sun.svg") ? "img/moon.svg" : "img/sun.svg";
//     img.classList.remove("fade-out"); // Réactive l'opacité après le changement
//   }, 300); // Durée de l'animation (doit être la même que celle du CSS)
// };