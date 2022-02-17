//clases, contructor dentro de clase y funcion dentro de clase(no lleva palabra function)

class persona {
    constructor(nombre, dni, edad) {
        this.nombre = nombre;
        this.dni = dni;
        this.edad = edad;
    }
    hablar(){
        console.log("Hola soy "+this.nombre+ " mi dni es "+this.dni+ " y mi edad es "+this.edad);
    }
}

const hombre1 = new persona("Ulises", 46785912,"35");
hombre1.hablar();
