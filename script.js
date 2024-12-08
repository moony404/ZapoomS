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
};






document.getElementById("changeBlobColor").addEventListener("click", () => {
  // Exemple : définir une couleur aléatoire
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  
  // Mettre à jour la couleur du blob
  blob.setColor(randomColor);
  
  // Relancer le rendu pour refléter la nouvelle couleur
  blob.render();
});
document.getElementById("buttontheme").onclick = () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  // Change la couleur du blob en fonction du thème
  const blobColor = newTheme === "dark" ? "#FFFFFF" : "#000000";
  blob.setColor(blobColor);

  // Redessiner le blob
  blob.render();
};