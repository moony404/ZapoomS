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