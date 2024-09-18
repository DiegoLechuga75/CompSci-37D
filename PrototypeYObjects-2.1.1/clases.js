class Animal {

    #nombre;
    edad;
    color;
    especie;

    constructor(nombre, edad, color){
        this.#nombre = nombre;
        this.edad = edad;
        this.color = color;
    }

    showInfo(){
        console.log(`El ${this.especie} ${this.#nombre} tiene ${this.edad} años y es de color ${this.color}`);
    }

    get nombre(){
        return this.#nombre;
    }

    set nombre(nombre){
        this.#nombre = nombre;
    }
}

class Gato extends Animal {
    constructor(nombre, edad, color){
        super(nombre, edad, color);
        this.especie = "Gato";
    }

    cazar(animal){
        console.log(`El gato ${this.nombre} cazó un ${animal.especie}`);
    }

    hacerRuido(){
        console.log("Miau miau");
    }
}

class Perro extends Animal {
    constructor(nombre, edad, color){
        super(nombre, edad, color);
        this.especie = "Perro";
    }

    dormir(){
        console.log(`El perro ${this.nombre} esta durmiendo`);
    }

    hacerRuido(){
        console.log("Gau Gau");
    }
}

class Raton extends Animal {
    constructor(nombre, edad, color){
        super(nombre, edad, color);
        this.especie = "Ratón";
    }
    
    hacerRuido(){
        console.log("Squeak");
    }
}

let mantequilla = new Gato("Mantequilla", 2, "Naranja");
let milaneso = new Perro("Milaneso", 3, "Negro");
let ratonGenerico = new Raton("Raton", 1, "Gris");

console.log(typeof mantequilla.edad.toString());
console.log(mantequilla);

mantequilla.showInfo();
milaneso.showInfo();

mantequilla.cazar(ratonGenerico);
milaneso.dormir();
ratonGenerico.showInfo();

mantequilla.hacerRuido();
milaneso.hacerRuido();
ratonGenerico.hacerRuido();





