// script.js is exectued on all pages of ZapoomS
// document.addEventListener("DOMContentLoaded", () => {
//   //fetch night mode state in user localStorage
//   let theme = localStorage.getItem("theme") || false;
//   //set up theme
//   if (theme) {
//     document.documentElement.setAttribute("data-theme", theme);
//   }
// });
// document.getElementById('button_theme').onclick = () => {
//   var currentTheme = document.documentElement.getAttribute("data-theme");
//   var newTheme = currentTheme === "dark" ? "light" : "dark";
//   document.documentElement.setAttribute("data-theme", newTheme);
//   localStorage.setItem( "theme" , newTheme );
// };

// function toggleThemeIcon() {
//   let img = document.getElementById("icon_theme");
//   // Ajoute la classe pour l'animation de fondu
//   img.classList.add("fade-out");
//   // Attends la fin de l'animation avant de changer l'image
//   setTimeout(() => {
//     img.src = img.src.includes("img/sun.svg") ? "img/moon.svg" : "img/sun.svg";
//     img.classList.remove("fade-out"); // Réactive l'opacité après le changement
//   }, 200); // Doit correspondre à la durée de transition en CSS
// }

// document.getElementById('button_theme').onclick = () => {
//   let img = document.getElementById("icon_theme");
//   // Ajoute la classe pour le fondu
//   img.classList.add("fade-out");
//   // Attends la fin de l'animation avant de changer l'image
//   setTimeout(() => {
//     img.src = img.src.includes("img/sun.svg") ? "img/moon.svg" : "img/sun.svg";
//     img.classList.remove("fade-out"); // Réactive l'opacité après le changement
//   }, 200); // Durée de l'animation
// };

function toggleTheme() {
  let img = document.getElementById("icon_theme");
  let currentTheme = document.documentElement.getAttribute("data-theme");
  let newTheme = currentTheme === "dark" ? "light" : "dark";

  // Change le thème et stocke la préférence
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  // Ajoute une animation de fondu avant de changer l'image
  img.classList.add("fade-out");

  setTimeout(() => {
    img.src = newTheme === "dark" ? "img/moon.svg" : "img/sun.svg";
    img.classList.remove("fade-out"); // Réactive l'opacité après le changement
  }, 300); // Doit correspondre à la durée de transition en CSS
}

// Vérifier et appliquer le bon thème + icône au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  let savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  
  // Synchroniser l'icône avec le bon thème
  let img = document.getElementById("icon_theme");
  img.src = savedTheme === "dark" ? "img/moon.svg" : "img/sun.svg";
});
function toggleTheme() {
  let img = document.getElementById("icon_theme");
  let currentTheme = document.documentElement.getAttribute("data-theme");
  let newTheme = currentTheme === "dark" ? "light" : "dark";

  // Change le thème et stocke la préférence
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  // Ajoute une animation de fondu avant de changer l'image
  img.classList.add("fade-out");

  setTimeout(() => {
    img.src = newTheme === "dark" ? "img/moon.svg" : "img/sun.svg";
    img.classList.remove("fade-out"); // Réactive l'opacité après le changement
  }, 200);
}

// Vérifier et appliquer le bon thème + icône au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  let savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  
  let img = document.getElementById("icon_theme");
  img.src = savedTheme === "dark" ? "img/moon.svg" : "img/sun.svg";
});


// code pour le bouton ZapoomS dans index.html
function ZapoomS() {

}

function red() {
  // red button macOS
}

function yellow() {
  // yellow
}

function green() {
  // green
}