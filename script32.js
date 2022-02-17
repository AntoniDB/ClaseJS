//recorrer valores de objeto, mostrar todos los valores

const personal = {
    nombre: "Antonio",
    apellido: "dios",
    edad: 32,
    dni: 46475271,
}

for(const propiedad in personal){
    console.log(personal[propiedad]);
}