<?php 

//Arrays
//Declaracion
//Array indexados

use Dom\Node as DomNode;

$array = [1,2,3,4,5];
$array2 = array();
$array3 = new ArrayObject();

//Array asociativos
$arrayAsociativo = [
    "nombre" => "Jairo",
    "edad" => 30,
    "departamento" => "La libertad"
];

print_r($arrayAsociativo["nombre"] . "\n");

//Array propiedades y metodos

//Saber el largo del array
print count($array)."\n";

//Agregar un elemento al final del array
array_push($array, 6);
$array[] = 7;

//Agregar un elemento al inicio del array
array_unshift($array, 0);

print_r($array);

//Eliminar el ultimo elemento del array
array_pop($array);
print_r($array);

//Eliminar el primer elemento del array
array_shift($array);
print_r($array);

//Recorrer un array
foreach($array as $valor){
    echo "Valor: {$valor}\n";
}

//Arrays multidimensionales
$arrayMultimensional = [
    "nombre" => "Jairo",
    "edad" => 30,
    "hobbies" => ["Programar", "Leer", "Correr", "otros" => [ "Jugar jueguitos" => ["LOL","DOTA2","CS2"]]]

];

print_r($arrayMultimensional);


//Clases y objetos 

class Persona {
    //Atributos o propiedades
    private $nombre;
    private $edad;

    //constructor
    function __construct($nombreParam, $edadParam){
        $this->nombre = $nombreParam;
        $this->edad = $edadParam;
    }

    //Metodos o funciones
    public function getNombre() {
        return $this->nombre;
    }

    public function getEdad() {
        return $this->edad;
    }

    /**
     * Set the value of nombre
     * @param string $nombre
     * @return  self
     */ 
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;

        return $this;
    }

    /**
     * Set the value of edad
     * @param int $edad
     * @return  self
     */ 
    public function setEdad($edad)
    {
        $this->edad = $edad;

        return $this;
    }

    

	
}

//Crear un objeto
$persona1 = new Persona("Jairo", 30);

//Acceder a los metodos del objeto
echo $persona1->getNombre() . "\n";


//LIFO -> Stack -> Last In First Out

class Stack {
    private $data;

    //Constructor con parametros OPCIONALES
    function __construct($dataParams = []){
        $this->data = $dataParams;
    }

    //Agregar un elemento
    function add($element){
        array_push($this->data, $element);
        //$this->data[] = $element;
    }

    //Eliminar un elemento
    function remove(){
        return array_pop($this->data);
    }
}

$stacito = new Stack([1,2,3,4]);
//FIFO -> Queue -> First In First Out

class Queue{
    private $data;

    function __construct($dataParams = []){
        $this->data = $dataParams;
    }

    //Agregar un elemento
    function add($element){
        array_push($this->data, $element);
    }

    //Eliminar un elemento
    function remove(){
        return array_shift($this->data);
    }
}

class Node{
    private $value;
    private $next;

    function __construct($valueParam){
        $this->value = $valueParam;
        $this->next = null;
    }

    public function getValue() {
        return $this->value;
    }

    public function getNext() {
        return $this->next;
    }

    public function setNext($next) {
        $this->next = $next;
    }
}

class LinkedList{
    private $head;

    function __construct(){
        $this->head = null;
    }

    function add($value){
        //Creamos un nuevo nodo
        $newNode = new Node($value);

        if($this->head === null){
            $this->head = $newNode;
        }else{
            $current = $this->head;

            //Recorremos la lista mientras el siguiente no sea nulo
            while($current->getNext() !== null){
                $current = $current->getNext();
            }
            //Cuando encontramos el final, agregamos el nuevo nodo
            $current->setNext($newNode);
        }
    }

    //Funcion para encontrar un dato. Devolveria un mensaje si este dato existe
    //Funcion para eliminar

}

$listita = new LinkedList();
$listita->add(3);
$listita->add(1);
$listita->add(5);
print_r($listita);


class Nodo {
    private $value;
    private $left;
    private $right;

    function __construct($valueParam)
    {
        $this->value = $valueParam;
        $this->left = null;
        $this->right = null;
    }

    function getValue(){
        return $this->value;
    }

    function getRight(){
        return $this->right;
    }

    function getLeft(){
        return $this->left;
    }

    function setRight($data){
        $this->right = $data;
    }

    function setLeft($data){
        $this->left = $data;
    }

    function setValue($data){
        $this->value = $data;
    }

    
}


class BinaryThree{
    private $root;

    function __construct($data = null)
    {
        $this->root = $data;
    }

    function insert($data){
        $newNode = new Nodo($data);

        if($this->root === null){
            $this->root = $newNode;
            return $this->root;
        }

        $current = $this->root;

        while(true){

            if($newNode->getValue() > $current->getValue()){
                if($current->getRight() === null){
                $current->setRight($newNode);
                return $newNode;
                }else{
                    $current = $current->getRight();
                }

            }else {
                if($current->getLeft() === null){
                    $current->setLeft($newNode);
                    return $newNode;
                }else{
                     $current = $current->getLeft();
                }
            }
        }
    }

    //Funcion para encontrar un dato. Devolveria un mensaje si este dato existe
    //Funcion para eliminar
}

$nuevoNodo = new Nodo(10);

$arbolito = new BinaryThree($nuevoNodo);
print_r($arbolito);
echo "\n";
$arbolito->insert(17);
$arbolito->insert(19);
$arbolito->insert(13);
print_r($arbolito);
?>