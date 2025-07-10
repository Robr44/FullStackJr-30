// Estuctura de datos

// Datos primitivos -> string, interger, float, double, bool, null
// UNDEFINED -> VACIO PARA EL SISTEMA
let vacio = null;
console.log(vacio);

vacio = "string re estandar";
console.log(vacio);

// Objetos
// Objetos literales
// Ejemplo formulaio con datos de usuario
let perro = {
  // clave : valor
  nombre: "Chochan",
  edad: 4,
};

let perro2 = {
  // clave : valor
  nombre: "Pepito",
  edad: 18,
};

// Mostrar una caracteristica del perro
console.log(perro.nombre);

// POO -> Programacion Orientada a Objetos
// Forma de escribir el codigo -> Reutilizable

// Clases y objeto
// Clases --> Molde
// Objeto -> Instancia de una clase = Creamos algo en base a:

class Persona {
  // Caracteristicas de esa clase -> Atributos/Propiedades
  // Constructor -> METODO PARA CREAR OBJETOS a traves de este molde
  constructor(nombreParam, edadParam) {
    // this -> APUNTAMOS A ESTA CLASE
    this.nombre = nombreParam;
    this.edad = edadParam;
  }

  // Metodos -> Funciones, cosas que hace esta clase
  correr() {
    console.log("Estoy corriendo.");
    return "Estoy coriendo";
  }
}

// Utilizar el constructor de Persona -> INSTANCIA OBJETOS
let personita = new Persona("Roberto", 20);
let personita2 = new Persona("Edenilson", 20);
console.log(personita);
console.log(personita2);

// Acceder a algo de un objeto
personita.correr();

// PILARES POO --> OOP
// Existen para asegurarnos un codigo mas escalable, flexible y seguro
// 4 pilares

// PILARES QUE SI SE PUEDEN UTILIZAR EM JAVASCRIPT
// Herencia -> Una clase hija de otra, copia el comportamiento del padre.
// Polimorfismo -> Cambiar el comportamiento de un metodo del padre, con respecto a su hijo

// Herencia
class Programador extends Persona {
  constructor(nombreParam, edadParam, lenguajesParam) {
    // Seguir usando las propiedade/caracteristicas del padre
    // supér() recibe en sus parentesis, los parametros de la clase padre
    super(nombreParam, edadParam);

    // Caracteristicas propias del programador
    this.lenguajeProgra = lenguajesParam;
  }

  // Metodo propio de pogamador
  codear() {
    console.log("Estoy codeando");
  }

  // POLIMORFISMO
  correr() {
    //super.correr();
    console.log("no corro tan rapido, pero puedo trotar")
  }
}

// Crear un pogramador
let programador = new Programador("Roberto ", 20, "C#");
console.log(programador);
programador.correr();


// PILARES QUE NO SE PUEDEN UTILIZAR EN JAVASCRIPT
// Encapsulamiento -> LIMITAR EL ACCESO A LA INFOMACION DE UNA CLASE -> Modificadores de acceso
// Abstraccion -> Nos da herramientas o metodos para acceder a informacion encapsulada


// ARRAYS
// Array indexado -> Ordena de Indice 0 en adelante
let arraycitoIdx = [18, 19, 25, 33];
console.log(arraycitoIdx);

// "Array asociativo" -> Guardamos en clave valor
let arrayAociativo = {
  nombre: "Roberto"
}
console.log(arrayAociativo['nombre']);

// Array multidimensional
// Creamos un array con varias dimensiones (Array dentro de array)
let arraycitoMulti = [[1,2], [{nombre : "Roberto"}]];
console.log(arraycitoMulti[0]);
//console.log(arraycitoMulti[1][0]['nombre'])

// Accedemos a la posicion 0 -> ES LA PRIMERA ARRAY
let cajaDeIndiceCero = arraycitoMulti[0];
// Imprimir el 2
console.log(cajaDeIndiceCero[1]);

// Accedemos a la posicion 1
let cajaDeIndiceUno = arraycitoMulti[1];
// Accedemos a la caja para poder ver su contenido
console.log(cajaDeIndiceUno[0]);

// Estos console.log muestran cualquiera el nombre
console.log(cajaDeIndiceUno[0].nombre);
console.log(arraycitoMulti[1][0].nombre);


// Metodos para arrays

let nombres = ["Roberto", "Edenilson", "Mangandi", "Escobar"];

// DAR VUELTA UN ARRAY
let nombresAlReves = nombres.reverse();

// Recorrer Arrays
// Foreach -> Recorre el array y nos deja  utilizar la posiciony el indice del array
nombresAlReves.forEach((value, index) => {
  console.log(index);
  console.log(value);
})


// Foreach que reciba array completo

let arrayNum = [1,2,3,4,5,6];

arrayNum.forEach((value, index, array) => {
  arrayNum.pop();
    console.log(array);
})
arrayNum.forEach((value, index, array) => {
  if(index+1 < array.length){
    console.log(array[index+1]);
    
    if(array[index] < array[index+1])
      console.log(value);
  }
})

// Metodos Utiles
// Map -> Recorre el array y nos retorna algo por cada posicion -> transformar valores
let nombrees = ["Roberto", "Edenilson", "Mangandi", "Escobar"];
const nombresMayus = nombrees.map((value) => {
  return value.toUpperCase();
})
console.log(nombresMayus)

let numeritos = [1,3,5,7];

let numeritosPorDos = numeritos.map((value) => {
  return value * 2;
})
console.log(numeritosPorDos)


// Filtrar la informacion
// Filter -> filtramos la info y la retornamos en base a una condicion

const usuarios = [
{nombre: "Roberto", edad: 20}, 
{ nombre: "Edenilson", edad: 28},
{ nombre: "Mangandi", edad: 27}]

// Array.filter( (apodoValorDeCadaPosicion ) => { return CONDICION A CUMPLIR })
const mayoresDe20 = usuarios.filter( (value) => { return value.edad > 21})
console.log(mayoresDe20);

// Find => Buscamos y retornamos un solo dato

const usuarioEdenilson = usuarios.find( usuario => usuario.nombre === "Edenilson");
console.log(usuarioEdenilson);


// Metodos OBLIGATORIOS para trabajar con un Array
let array = [];
// Agregar datos al array
// AL FINAL
array.push(2);

// EN PRIMERA POSICION
array.unshift(1);

// Eliminar datos del array
// AL FINAL
array.pop();

// AL PRINCIPIO
array.shift();
console.log(array)

// Obtener el largo de un array
let largor = array.length;
console.log(largor)

// Strings
// La propiedad length sirve tambien para strings
console.log("Hola Roberto ".length);

// Metodo para eliminar los espacios al principio y al final
let sinEspacios = "Hola Roberto ".trim();
console.log(sinEspacios);
console.log(sinEspacios.length);

