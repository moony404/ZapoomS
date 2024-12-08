function resizeCanvas() {
  const canvas = document.getElementById('myCanvas');
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    canvas.width = window.innerWidth * 0.9; // Ajuste à 90% de la largeur de l'écran
    canvas.height = canvas.width * 0.75; // Exemple : Ratio 4:3
  } else {
    canvas.width = 800; // Taille par défaut
    canvas.height = 600;
  }
}

// Redimensionner au chargement et à chaque modification de la fenêtre
window.addEventListener('load', resizeCanvas);
window.addEventListener('resize', resizeCanvas);