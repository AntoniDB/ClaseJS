//Métodos personalizados, funcion dentro de método
function persona(nombre,apellido,edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.mira = function(){
        console.log("Hola soy "+this.nombre+" "+this.apellido+" y tengo "+this.edad+" años");
    }
}

const persona1 = new persona("antonio", "dios", 32);
const persona2 = new persona("tessy", "dios", 25);
const persona3 = new persona("wendy", "dios", 34);

persona1.mira();