var images = document.querySelectorAll('.tipos-runas img');
var tables = document.querySelectorAll('.runas div');

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        tables.forEach(table => {
            table.style.display = 'none';
        });

        tables[index].style.display = 'block';
    });
});

tables[0].style.display = 'block';
