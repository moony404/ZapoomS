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

console.log("5A 61 70 6F 6F 6D 53");
const str = `
ZZZZZZZZ
    ZZ
   ZZ
  ZZ
ZZZZZZZZ
`;
console.log(str)


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








// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}