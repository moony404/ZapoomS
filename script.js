// script.js is exectued on all pages of ZapoomS
document.addEventListener("DOMContentLoaded", () => {
  //fetch night mode state in user localStorage
  let theme = localStorage.getItem("theme") || false;
  //set up theme
  if (theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }
});

document.getElementById('buttontheme').onclick = () => {
  var currentTheme = document.documentElement.getAttribute("data-theme");
  var newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem( "theme" , newTheme );
  // Met à jour le texte affiché
  document.getElementById("theme-status").textContent = "Thème actuel : " + newTheme;
};



if (document.documentElement.getAttribute('theme') === 'dark') {
  console.log('Le thème est sombre');
} else {
  console.log('Le thème est clair');
}

// console.log(document.documentElement.getAttribute('data-theme'))


// document.addEventListener("DOMContentLoaded", () => {
//   // Initialiser le thème à partir du localStorage ou par défaut à "light"
//   const initTheme = () => {
//     const theme = localStorage.getItem("theme") || "light";
//     document.documentElement.setAttribute("data-theme", theme);
//   };

//   // Changer le thème sur le clic d’un bouton
//   document.getElementById("buttontheme").onclick = () => {
//     const currentTheme = document.documentElement.getAttribute("data-theme");
//     const newTheme = currentTheme === "dark" ? "light" : "dark";
//     document.documentElement.setAttribute("data-theme", newTheme);
//     localStorage.setItem("theme", newTheme);

//     // Optionnel : envoyer un événement personnalisé pour informer les autres scripts
//     window.dispatchEvent(new Event("themeChanged"));
//   };

//   // Initialiser le thème au chargement de la page
//   initTheme();
// });
