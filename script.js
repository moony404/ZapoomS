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
};

// bubble part
// Sélectionner le bouton
const button = document.querySelector('.button');

// Fonction pour démarrer l'animation
function startAnimation() {
  button.classList.add('animate');

  // Retirer la classe après la durée de l'animation (2.5 secondes)
  setTimeout(() => {
    button.classList.remove('animate');
  }, 2500);
}

// Ajouter un écouteur d'événement pour le survol
button.addEventListener('mouseenter', startAnimation);