/* Ejemplo de uso de Interfaces en POO */

// Ejemplo simple -> No es una estructura que usariamos en un proyecto

class Animal{
    private nombre:string;
    private especie:string;

    constructor(nombreParam:string, especieParam:string){
        this.nombre = nombreParam;
        this.especie = especieParam;
    }

    comer():string{
        return "Estoy comiendo"
    }

    getAnimal():Animal{
        return this;
    }
}

let cr7 = new Animal("c", "chucho");
console.log(cr7.getAnimal());


// El extends nos avisa q8e esta usando el pilar de Herencia
class Gato extends Animal implements IAnimal{
    //Tenemos 2 atributos publicos, NO HAY ENCAPSULAMIENTO
    raza:string;
    color:string;

    constructor(nombreParam:string, especieParam:string, razaParam:string, colorParam:string){
        super(nombreParam, especieParam)
        this.raza = razaParam;
        this.color = colorParam;
    }

    comunicacion():string{
        return "miau re miau"
    }
}

// Implements le avisa a JS y TS que la clase Perro OBLIGATORIAMENTE  tiene que tener lo que declara
// IAnimal
class Perro extends Animal implements IAnimal{

    raza:string;
    color:string;

    comunicacion():string{
        return "guau re guau"
    }
}

interface IAnimal{

    // Los atributos tienen que quedar publicos
     raza:string;
     color:string;
    // Los metodos tienen que quedar publicos
    comunicacion():string;
}
