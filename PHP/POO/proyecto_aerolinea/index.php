<?php
print_r($_POST);

// Llamamos a la clase Aerolinea para crear un objeto
// include -> Incluir el archivo y si no existe, mostrar un error y continuar la ejecucion del codigo
// require -> Requerir el archivo y si no existe, mostrar un error y detener la ejecucion del codigo

// include_once -> Incluir el archivo una sola vez, si se vuelve a llamar dentro del archivo, va a usar la misma refencia
// require_once -> Requerir el archivo una sola vez, si se vuelve a llamar dentro del archivo, va a usar la misma refencia

require_once './Aerolinea.php';

$aerolineas = [];

if(isset($_POST['nombre_aerolinea'],$_POST['cantidad_aviones'],$_POST['tipo_aerolinea'])){
  
    $nombre = $_POST['nombre_aerolinea'];
    $cant_aviones = $_POST['cantidad_aviones'];
    $tipo_aero = $_POST['tipo_aerolinea'];

    $aerolineacita = new Aerolinea($nombre, $cant_aviones, $tipo_aero);

    print_r($aerolineacita);
    array_push($aerolineas, $aerolineacita);
    echo "<h1>aerolineas:</h1> <br> ";
    print_r($aerolineas);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practica CRUD Aerolineas</title>
</head>
<body style="background-color: gray">
    <h1>¡¡Bienvenido a aerolineas!!</h1>

    <h3>Crear una nueva aerolinea</h3>
    <form action="" method="POST">
        <label for="nombre_aerolinea">Nombre Aerolinea: </label>
        <input type="text" name="nombre_aerolinea" required>
        
        <label for="cantidad_aviones">Cantidad Aviones: </label>
        <input type="number" name="cantidad_aviones" required>

        <label for="tipo_aerolinea">Tipo de Aerolinea</label>
        <select type="text" name="tipo_aerolinea" required>
            <option value="">--Selecciona--</option>
            <option value="Privado">Privado</option>
            <option value="Comercial">Comercial</option>
            <option value="Carga">Carga</option>
            <option value="Nacional">Nacional</option>
        </select>
        <button type="submit">Crear</button>
    </form>
</body>
</html>