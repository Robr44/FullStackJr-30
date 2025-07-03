//Comentarios -> Deshabilitar lineas
/*
    Multi
    Lineas
*/

//Impresiones en consola

console.log("Holiwis");

//variables y constantes
let variable = "Roberto"; //No deja re-declarar variables
var variablecita = "VR"; //Deja re-declarar

const numero = 3.1416;

console.log(numero);

//Concatenacion -> SUMA DE ALGO A UN STRING
console.log("Hola " + variable);

console.log("5" + 5);

//Cambiar los tipos de valores o variables
//Parse
let cinco = parseInt("5");
console.log(cinco + 5);

//Operadoes matematicos
let suma = 5 + 5;
let resta = 10 - 5;
let division = 4 / 2;
let multiplicacion = 2 * 2;
let residuo = 10 % 2;

//Operadores Logicos
// OR || AND && NOT !

//Operadores de comparacion paa tipo de dato y el valor
//Igualdad, desigual
let igualdad = "5" == 5;
console.log(igualdad);
let igualdadEstricta = "5" === 5;
console.log(igualdadEstricta);

let desigual = "5" != 5;
console.log(desigual);
let desigualEstricta = "5" !== 5;
console.log(desigualEstricta);

//Operadores de comparaciones matematicas
let mayorQue = 5 > 3;
let menorQue = 5 < 3;
let mayorIgual = 5 >= 3;
let menorIgual = 5 <= 3;

//Estructuras de control o condicionales
if (false) {
  console.log("Esto funciona");
} else if (true) {
  console.log("Aca no llega");
}

switch (opcion) {
  case 1:
    console.log("Se comunico con la administracion");
    break;
  default:
    console.log("No es una opción que manejemos");
}

//Ternario
condicion ? "caso true" : "caso false";

//Estucturas repetitivas o bucles
contador = 0;
while(contador < 5 ){
    console.log(contador);
    contador++; //condicion de corte
}

do{
     console.log(contador);
    contador++
}while(contador < 5);

for(let i = 0; i <5 ; i++){
    console.log(i);
}

//Funciones

function saludar(){
    console.log("Hola Mundo");
}

//Funciones anónimas
const funcioncita = function () { console.log("Soy anonimo")};

funcioncita();

//Fat Arrow Functions funciones flecha
const funcionFlecha = () => {console.log("Soy anonimo")};
funcionFlecha();