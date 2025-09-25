<?php
function quickSort($array) {
    if (count($array) < 2) {
        return $array; // Caso base: ya está ordenado
    }

    $pivote = $array[0]; 
    $menores = [];
    $mayores = [];

    for ($i = 1; $i < count($array); $i++) {
        if ($array[$i] <= $pivote) {
            $menores[] = $array[$i];
        } else {
            $mayores[] = $array[$i];
        }
    }

    return array_merge(quickSort($menores), [$pivote], quickSort($mayores));
}

$datos = [33, 10, 55, 71, 29, 5, 15];
print_r(quickSort($datos));
?>