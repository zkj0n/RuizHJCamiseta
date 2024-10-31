document.addEventListener('DOMContentLoaded', function() {
// cambiar la camiseta
function changeShirt() {
    const shirt = document.getElementById('shirt');
    const radio = document.getElementById('black').checked;
    let shirtText = document.querySelector('.shirt-text');
    let charTitle = document.querySelector('.char-title');
    if (radio){ // si el radio button esta seleccionado se pondra la camiseta negra
        shirt.src = '../img/camiseta/black.png';
        shirtText.style.color = '#fff';
        charTitle.style.color = '#fff';
    } else {
        shirt.src = '../img/camiseta/white.png';
        shirtText.style.color = '#000';
        charTitle.style.color = '#000';
    }

}

document.getElementById('black').addEventListener('click', changeShirt);
document.getElementById('white').addEventListener('click', changeShirt);

// cambiar texto de la camiseta a partir del input
function changeText() {
    let shirtText = document.querySelector('.shirt-text');
    let title = document.getElementById('title').value;
    // si el texto supera 10 caracteres saltara un error
    if (title.length > 10){
        alert('el texto no puede superar los 10 caracteres');
    } else if (title.length === 0){
        shirtText.innerHTML = 'title'; // si no hay texto se pondra title
    } 
    else {
        shirtText.innerHTML = title;
    }
}
document.getElementById('title').addEventListener('input', changeText);


// subir o bajar el texto de la camiseta
const rangeEjeX = document.getElementById('ejeX');
const rangeEjeY = document.getElementById('ejeY');


function moveText() {
    let shirtText = document.querySelector('.shirt-text');
    // transformar para que suba o baje a partir de donde esta
    shirtText.style.transform = `translate(${rangeEjeX.value}%, ${rangeEjeY.value}%)`;
}

rangeEjeX.addEventListener('input', moveText);
rangeEjeY.addEventListener('input', moveText);
let charTitle = document.querySelector('.char-title');

// arrastrar las imagenes a la camiseta
const imagenes = document.querySelectorAll('.img');
const shirt = document.querySelector('.shirt');
const shirtImage = document.querySelector('.shirt-image');
const reverseImage = document.querySelector('.reverse-image');
let nombre =""; // aqui almacenamos el nombre de la imagen que se esta moviendo
// al comenzar a mover la imagen se guarda la ruta 
imagenes.forEach(imagen => {
    imagen.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('src', event.target.src);
        nombre= event.target.id; // guardamos el nombre de la imagen
    });
});
// prevenir que se abra la imagen al soltarla
shirtImage.addEventListener('dragover', (event) => {
    event.preventDefault();
});
// al soltarla cambiar la imagen
shirtImage.addEventListener('drop', (event) => {
    event.preventDefault();
    let src = event.dataTransfer.getData('src');
    shirtImage.src = src;
    reverseImage.src = src;
    // cambiar el titulo de la imagen
    charTitle.innerHTML = nombre;
    
});

// tambien se puede clicar la imagen para cambiarla
imagenes.forEach(imagen => {
    imagen.addEventListener('click', (event) => {
        shirtImage.src = event.target.src;
        reverseImage.src = event.target.src;
        charTitle.innerHTML = event.target.id;
    });
});



});