// Peticiones asincronas

/*
    LAS PROMESAS TIENEN 3 ESTADOS
    PENDING -> TODAVIA NO HAY UNA RESPUESTA
    RESPONSE (Resolve) -> SI LA PROMESA SE CUMPLIO
    REJECTED -> RECHAZA LA PROMESA, NO SE CUMPLIO

*/
console.log("Holiwis");

// Simular una peticion a una API
function getCoach(id){ 
    return new Promise( (resolve, reject) => { 
    setTimeout(() => { 
        if ( id === 1){
            resolve({id: 1, name: "Jairo"});
        } else {
            reject("No se encontro ese coach");
        }
    },2000  )
    })
}
//console.log(getCoach(1));

// Manejo de asíncronismo o promesas
// Then (da las buenas noticias) y catch (da las malas noticias)

function traerDatos(){
    getCoach(1)
    .then( (data) => {
        console.log(data);
    })
    .catch( (error) => {
        console.error(error);
    });
}
traerDatos();

// Async y await
async function obtenerDatos(){
    try{
    const coach = await getCoach(1);
    console.log(coach);
    }catch(error){
        console.error(error);
    }
}
obtenerDatos();


// FETCH -> Va a ser nuestro metodo(interfaz) para hacer peticiones HTTP

 async function getDittoAwait(){
    try{ // MANEJO DE ERRORES
        let respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/ditto'); // Espera a traer la respuesta 
    console.log(respuesta)  // Ver que respuesta nos da la API
    let cuerpo = respuesta.json(); // Obtenemos el cuerpo de la respuesta anterior
    console.log(cuerpo); // Mostrar el cuerpo, ahi estan los datos
    }catch(error){ // MANEJO DE ERRORES
        console.error(error);
    }
 }
 getDittoAwait();

 function getDittoThen(){
    fetch('https://pokeapi.co/api/v2/pokemon/ditto') // Buscar los datos en la API
    .then( (data) => { // Decimos a JS que espere a que vuelva con la respuesta
        console.log(data); // Nos va a dar meta datos
        return data.json(); // Retornar la data para usarla despues, SOLO EL BODY EN TIPO JSON
    })
    .then( (data) => { // Voy a utilizar el body que retorné antes(data)
        console.log(data); // Muestro el cuerpo, donde estan los datos
    })
    .catch( (error) => { 
        console.log(error);
    })
 }
 getDittoThen();

 function saludar(){
    console.log("Que ondas")
 }