function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Alteração de imagem conforme tema
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de Thialla Menezes fundo escuro")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de Thialla Menezes fundo branco")
  }
}
