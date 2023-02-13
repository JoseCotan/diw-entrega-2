var objetos = document.querySelector(".objetos");
var links = document.querySelectorAll(".tipo");

links.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();

    let clase = this.textContent.toLowerCase();
    let imagenes = objetos.querySelectorAll("img");

    imagenes.forEach(imagen => {
      if (imagen.classList.contains(clase) || clase === "todos") {
        imagen.style.display = "block";
      } else {
        imagen.style.display = "none";
      }
    });
  });
});
