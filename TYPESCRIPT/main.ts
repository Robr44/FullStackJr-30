// Diferencias entre JS y TS

/* JS
- Flexible
- Facil de aprender
- Forma de programar sea a taves de funciones
- WEB -> Navegador (Interpretado)
*/

/* TS
- Tipado duro -> YA NO ES TAN FLEXIBLE
- POO -> Forma de programar -> Los pilares estan COMPLETOS
- Un poco mas dificil de aprender
- Compilado (TSC) -> TRADUCIR EL CODIGO DE TS A JS
*/

// Declaracion de variables
let numerito = "Holiwis"; //JS

// Datos primitivos
let numero:number = 1; // TS
let nombre:string = "Roberto";
let activo:boolean = true;
let vacio:null = null;

//TIPOS DE DATOS QUE NO USAREMOS
let nose:any = "PUEDO SER CUALQUIER COSA";
let noDefinido:undefined = undefined;

console.log(numerito);
console.log(numero);


// Declaracion de funciones
function saludar(nombreParam:string):string{
    return `Holiwis, ${nombreParam}`
}

console.log(saludar("Roberto"));

// Estructuras de datos
// Array
// Vamos a guardar un array de numeros 0 un array de STRINGS
let arraycito: number[] | string[] = [1,2,3];
arraycito = ["as"];

// Vamos a guardar dentro del ARRAY, numeros o strings
let arraycitoDobleDato: (number|string)[] = [123,"numero de la suerte", 2455]

//araycito.push("ADS") NO FUNCIONA

//Tupla 
let arrayEspecifico: [number, string, string] = [20, "Roberto", "EDE"];

// Podemos llegar a tener 2 tipos de datos
//VARIABLE : 1 TYPO | 2 TYPO
let dosTiposDeDatos:null | string = null;

dosTiposDeDatos = "";

// Tipon de dato personalizado

type Persona ={
    name: string;
    age: number;
}

let programador: Persona = {name: "Roberto", age: 27};

let fsj30: Persona[] = [{name: "Roberto", age: 27}, {name: "Edeniilson", age: 20}]
