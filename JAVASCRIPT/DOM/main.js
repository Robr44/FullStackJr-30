console.log("Holaaa");


// Obtenemos un elemento del FrontEnd(HTML)
let elementoDOM = document.getElementById('saludar');
console.log(elementoDOM);

let contenidoDOM = document.querySelector('#contenido');
console.log(contenidoDOM);

const btnApretable = document.querySelector('#btnMagico');

const btnArraycito = document.getElementById('btnArraycito');

// Propiedades de los elementos
// InnerHTML -> obtienen todo el contenido HTML del elemento
// innerText -> Obtiene solo el texto del elemento
console.log(elementoDOM.innerHTML);
console.log(elementoDOM.innerText);

elementoDOM.innerHTML = "<h2>Chao</h2>";
contenidoDOM.innerHTML = "<h1>Este texto esta inyectado con JS</h1>";

console.log(btnApretable);
// Metodos de los elementos
btnApretable.addEventListener('click', () => {
    alert('Como tas?');
    console.log("Funcionó el botón");

    let dato = prompt("Ingresa tu nombre porfa.")
    console.log(dato);
})

// Metodo de JS
// Almacenar datos en local para el usuario

let arraycito = [1,2,3];
console.log(arraycito);

// localStorage -> Almacenamiento local en el navegador del usuario
// localStorage -> Esta diseñado para guardar OBJETOS
localStorage.setItem('arraycito', JSON.stringify(arraycito));

console.log(localStorage.getItem('arraycito'))


btnArraycito.addEventListener('click', () => {
    console.log("Estoy bien");
    arraycito.push(4);
    console.log(arraycito);
})