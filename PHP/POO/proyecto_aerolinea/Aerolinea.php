<?php
print_r($_POST);
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