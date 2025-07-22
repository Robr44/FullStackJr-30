let cursosCarrito = [];
const contenedorCarrito = document.getElementById('cuerpo-carrito');

function vaciarCarrito(event) {
    console.log("Carrito vaciado");
}

function agregarCurso(evento) {
    console.log("Curso agregado al carrito");
    // console.log(event.target.parentElement.parentElement);
    let curso = leerDatosCurso(evento.target.parentElement.parentElement);
    console.log(curso);
    cursosCarrito.push(curso);
    console.log(cursosCarrito);
    pintarCarritoHTML();
}

function leerDatosCurso(curso) {
    console.log(curso);
    console.log(curso.querySelector('a').getAttribute('data-id'));
    console.log(curso.querySelector('img').src);
    console.log(curso.querySelector('h4').textContent);
    console.log(curso.querySelector('h5').textContent);

    const infoCurso = {
        id: curso.querySelector('a').getAttribute('data-id'),
        imagen: curso.querySelector('img').src,
        nombre: curso.querySelector('h4').textContent,
        precio: curso.querySelector('h5').textContent,
        cantidad: 1
    }
    return infoCurso;

}

function pintarCarritoHTML(){
    cursosCarrito.map((curso) => {
        //crear una fila
        const fila = document.createElement('tr');

        //asignar los valores en celdas
        fila.innerHTML= `
            <td><img src="${curso.imagen}"></td>
            <td>${curso.nombre}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad}</td>
            <td><a class="btn btn-danger">Eliminar</a></td>
        `
        contenedorCarrito.appendChild(fila);
    })
}
pintarCarritoHTML()