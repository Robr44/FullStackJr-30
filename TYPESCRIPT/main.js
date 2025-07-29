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
var numerito = "Holiwis"; //JS
// Datos primitivos
var numero = 1; // TS
var nombre = "Roberto";
var activo = true;
var vacio = null;
//TIPOS DE DATOS QUE NO USAREMOS
var nose = "PUEDO SER CUALQUIER COSA";
var noDefinido = undefined;
console.log(numerito);
console.log(numero);
function saludar(nombreParam) {
    return "Holiwis, ".concat(nombreParam);
}
console.log(saludar("Roberto"));
