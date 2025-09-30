<?php
echo "<h3>Procesamiento de Datos.</h3>";

/*
    CRUD (Create, Read, Update, Delete)

    Variables reservadas PHP
    $_FILES -> Trabajar o manejar archivos subidos por el cliente
    $_POST -> Manejar datos enviados por el cliente 
    $_SESSION -> Nos permite guardar datos en el almacenamiento local del cliente
    $_COOKIE -> Manejar las cookies del navegador del cliente
    
*/
print_r($_POST);
print_r($_POST["nombre"]);
//print_r($_GET);

class Usuaio{
    private $nombre;
    private $edad;
    private $email;

    function __construct($nombreParam, $edadParam, $emailParam){
        $this->nombre = $nombreParam;
        $this->edad = $edadParam;
        $this->email = $emailParam;
    }

    function getUser(){
        return $this;
    }
}

    $user = new Usuaio($_POST["nombre"], $_POST["edad"], $_POST["email"]);

    print_r($user->getUser());
?>