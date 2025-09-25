<?php
function busquedaLineal($lista, $elementoBuscado){
    for ($i = 0; $i < count($lista); $i++){
        if ($lista[$i] == $elementoBuscado){
            return $i;
        }
    }
    return -1;// No encontramos el elemento
}

// Ejemplo practivo con estudiantes del FSJ30
$estudiantes = [
    "Ana", "Luis", "Carlos", "Marta", "Sofía"
];

$posicion = busquedaLineal($estudiantes, "Marta");

if ($posicion !== -1){
    echo "Marta está en la posición $posicion";
} else {
    echo "Marta no está en la lista";
}