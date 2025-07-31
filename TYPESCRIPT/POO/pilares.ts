// POO = Paradigma -> modelo de programar
// Que programamos bajo unas reglas en especifico
// Codigo reutilizable
// Se basa en el uso de objetos y clases para organizar y estucturar el codigo
// Es un paradigma que esta orientado a clases y objetos

/*
    POO -> Es una forma de ver y pensar el codigo y las soluciones de implementaciones de software
    vamos a imaginar moldes para poder estandarizar las cosas -> Clases
    Utilizar los moldes para crear funcionalidades en nuestra app -> Objetos
*/

/*
    PILARES DE POO O OOP
    -Herencia -> Obtener las caracteristicas y comportamientos del padre
    -Polimorfismo -> Podemos cambiar el funcionamiento de los comportamientos del hijo frente al padre

    -Encapsulamiento -> Limitar el acceso a la informacion
    *Modificadores de acceso: Public, Protected, Private, Default = Public
    -Abstraccion -> Nos da herramientas(metodos) para acceder a informacion limitada
*/

class Animal{

    // Atributos o propiedades -> Caracteristicas de esta clase
    public especie:string;
    private edad:number;
    private genero:string;
    private color :string;

    // Constructor -> Metodo que se ejecuta al instanciar un objeto de una clase -> NEW
    constructor(especieParam:string, edadParam:number, generoParam:string, colorParam:string){
        this.especie = especieParam;
        this.edad = edadParam;
        this.genero = generoParam;
        this.color = colorParam;
    }

    // Metodos -> Funciones que van a pertenecer a una clase -> Comportamiento
    comer():string
    {
        return "Estoy comiendo";
    }

    // Getters y Setters
    getEdad():number{
        return this.edad;
    }

    setEdad(edadParam:number){
        this.edad = edadParam;
    }

    // Abstraccion
    aumentarEdad(){
        this.edad += 1;
    }
}

const animalito = new Animal("Chucho", 2, "Macho", "Negro");

// Accedemos a un atributo del objeto instanciado(creado en base) de una clase
// console.log(animalito.especie);
console.log(animalito.getEdad());

class Perro extends Animal{
    private raza:string;
    private nombre:string;

    constructor(especieParam:string, edadParam:number, generoParam:string, colorParam:string, razaParam:string, nombreParam:string){
        // Traemos la funcionalidad del constructor padre
        super(especieParam, edadParam, generoParam,colorParam)
        this.raza = razaParam;
        this.nombre = nombreParam;
    }

    ladrar():string{
        return "guau guau";
    }

    // Polimorfismo
    aumentarEdad(): void {
        this.setEdad(this.getEdad()+7)
    }

}

const perrito = new Perro("Perro", 5, "Macho", "Negro", "Aguacatero", "Moncho");

// Ejemplo de caso de uso
class Usuario{
    private email:string;
    private passwod:string

    constructor(emailParam:string, passwordParam:string){
        this.email = emailParam;
        this.passwod = passwordParam;
    }
    
    login(fnConexion){
        fnConexion(this.email, this.passwod);
    }

    changePassword(newPassword:string){
        this.passwod = newPassword;
    }

    showCredentials():Usuario{
        return this;
    }
}

const usuarito = new Usuario("ede@gmail.com", "12345");
usuarito.changePassword('54321')
console.log(usuarito.showCredentials());

// Tipo personalizado

type User = {
    name:string,
    email:string,
    password:string,
    rol:string
}

let usuarito2:User ={
    name:"Roberto",
    email:"robert@kodigo.com",
    password: "12345",
    rol:"admin"
}

interface IUser {
    name:string,
    email:string,
    password:string,
    rol:string
}

let usuarito3:IUser ={
     name:"Roberto",
    email:"robert@kodigo.com",
    password: "12345",
    rol:"admin",
}
