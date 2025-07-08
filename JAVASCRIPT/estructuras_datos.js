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

//Herencia
class Programador extends Persona {
  constructor(nombreParam, edadParam, lenguajesParam) {
    //Seguir usando las propiedade/caracteristicas del padre
    //supér() recibe en sus parentesis, los parametros de la clase padre
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

//Crear un pogramador
let programador = new Programador("Roberto ", 20, "C#");
console.log(programador);
programador.correr();


// PILARES QUE NO SE PUEDEN UTILIZAR EN JAVASCRIPT
//Encapsulamiento -> LIMITAR EL ACCESO A LA INFOMACION DE UNA CLASE -> Modificadores de acceso
//Abstraccion -> Nos da herramientas o metodos para acceder a informacion encapsulada
