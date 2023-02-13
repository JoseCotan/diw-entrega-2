var input = document.getElementById("input");
input.addEventListener("input", mostrarImagen);

function mostrarImagen() {
    let inputValue = input.value;

    let images = document.querySelectorAll(".campeones img");
    images.forEach(img => {
        img.style.display = "none";
    });

    if (!inputValue) {
        images.forEach(img => {
            img.style.display = "block";
        });
        return;
    }

    let imagesToShow = document.querySelectorAll(`.campeones img[id*='${inputValue}']`);
    imagesToShow.forEach(img => {
        img.style.display = "block";
    });
}
