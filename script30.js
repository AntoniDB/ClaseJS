// funcion constructora para objeto

function persona (nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

const persona1 = new persona("antonio", "dios", 48794251);
const persona2 = new persona("wendy", "dios", 84591524);


console.log(persona1.edad)