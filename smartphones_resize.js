let resize = function () {
  // Assurez-vous que le canvas occupe la totalité de l'écran sans déborder
  canvas.width = window.innerWidth; // Largeur = taille de l'écran
  canvas.height = window.innerHeight; // Hauteur = taille de l'écran
};
window.addEventListener("resize", resize);
resize();