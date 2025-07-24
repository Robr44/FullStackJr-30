let cursosCarrito = [];
const contenedorCarrito = document.getElementById('cuerpo-carrito');

function vaciarCarrito(event) {
    console.log("Carrito vaciado");

    cursosCarrito = [];
    contenedorCarrito.innerHTML = "";
}

function agregarCurso(evento) {
    console.log("Curso agregado al carrito");
    // console.log(event.target.parentElement.parentElement);
    let curso = leerDatosCurso(evento.target.parentElement.parentElement);
    console.log(curso);

    // chequeamos si el curso existe previamente y guardamos true o false
    const existe = cursosCarrito.some( (cursoArr) => cursoArr.id === curso.id)

    if(existe){
        cursosCarrito.map( (cursoArr) => {
            if(cursoArr.id === curso.id){
                cursoArr.cantidad += 1;

                //Aumentar el precio
                // Utilizar un metodo string que pueda quitar el primer caracter
                cursoArr.precio += cursoArr.precio.substring(1);
                return cursoArr;
            }
        })
    }else{
    cursosCarrito.push(curso);
    }
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
    // Limpiar el carrito de compras
    contenedorCarrito.innerHTML="";

    cursosCarrito.map((curso) => {
        //crear una fila
        const fila = document.createElement('tr');

        //asignar los valores en celdas
        fila.innerHTML= `
            <td><img src="${curso.imagen}" width="80" ></td>
            <td>${curso.nombre}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad}</td>
            <td><a class="btn btn-danger">Eliminar</a></td>
        `
        contenedorCarrito.appendChild(fila);
    })
}
pintarCarritoHTML();