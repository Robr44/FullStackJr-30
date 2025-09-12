<?php
//Diferencias vs JavaScript
// 1. PHP es un lenguaje compilado (se interpreta por apache)
// 2. PHP es un  lenguaje de tipado debil pero con tipado obligatorio
// 3. PHP no es case sensitive (no distingue entre mayusculas y minusculas) en variables y funciones
//4. PHP vamos a utilizar una POO con todos los pilares
// Deliminatores

/* Comentario 
multilinea
*/

// Salto de linea /n
// La concatenacion va a ser con el punto (.)

echo "Hola Mundo"."\n"; 
print " Hola con print \n";
echo "Hola 2" . " \n";

// Variables
// let nombre = "Juan";
$nombre = "Juan";

// Constantes
define("PI", 3.1416);

// Template strings
$templateString = "Hola mi nombe es $nombre ";
echo $templateString . "\n";

// Operadores matematicos
$suma = 2 + 3;
$resta = 5 - 2;
$multiplicacion = 3 * 4;
$division = 10 / 2; 
$modulo = 10 % 3; // Resto de la division
$exponente = 2 ** 3; // Potencia

// Operadores de comparacion
$igual = (5 == 5); // true
$igualdadEstricta = (5 === "5"); // false
$diferente = (5 != 3); // true
$diferenteEstricta = (5 !== "5"); // true
$mayor = (5 > 3); // true
$menor = (3 < 5); // true
$mayorIgual = (5 >= 5); // true
$menorIgual = (3 <= 5); // true

// Operadores logicos AND (&&), OR (||), NOT (!)
$y = (2>3 && 3<=2); // false
$o = (3>5 || 2<=5); // true
$no = !true; // false

// Funciones
// Funcion expesada
function saludar($nombre) {
    return "Hola $nombre \n";
}

echo saludar("Juan")."\n";

// Funcion anonima
$despedir = function($nombre) {
    return "Adios $nombre \n";
};

echo $despedir("Juan")."\n";

// Funcion flecha (PHP 7.4+)
$gritar = fn($nombre) => "Hola, $nombre \n";

echo $gritar("Juan")."\n";

//Estructuras condicionales
// If, else, elseif
$edad = 18;
if ($edad < 18) {
    echo "Eres menor de edad \n";
} elseif ($edad === 18) {
    echo "Tienes 18 años \n";
} else {
    echo "Eres mayor de edad \n";
}

// Switch case
$dia = 3;
switch ($dia) {
    case 1:
        echo "Lunes \n";
        break;
    case 2:
        echo "Martes \n";
        break;
    case 3:
        echo "Miercoles \n";
        break;
    default:
        echo "Otro dia que no tenemos clases \n";
        break;
}

//Ternario
$mensaje = ($edad < 18) ? "Eres menor de edad" : "Eres mayor de edad";
echo $mensaje."\n";


//Estructuras repetitivas
// While
$contador = 0;

while($contador < 5){
    echo "Contador: {$contador}\n";
    $contador++;
}

// Do while
$contador = 0;
do{
    echo "Contador do while: {$contador}\n";
    $contador++;
} while($contador < 5);

// For
for($i = 0; $i < 5; $i++){
    echo "Contador for: {$i}\n";
}
?>