<?php
function binarySearch($array, $valor) {
    $inicio = 0;
    $fin = count($array) - 1;

    while ($inicio <= $fin) {
        $medio = intval(($inicio + $fin) / 2);

        if ($array[$medio] == $valor) {
            return $medio;
        }

        if ($array[$medio] < $valor) {
            $inicio = $medio + 1;
        } else {
            $fin = $medio - 1;
        }
    }

    return -1; 
}

$datos = [3, 8, 15, 22, 37, 42, 56, 71, 89];
$buscado = 44;
$resultado = binarySearch($datos, $buscado);

if ($resultado != -1) {
    echo "El número $buscado está en la posición $resultado";
} else {
    echo "El número $buscado no está en la lista";
}
?>
