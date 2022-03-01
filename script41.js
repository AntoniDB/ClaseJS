//funcion eliminar valor de array
const nombres = ["pedro","ana","jose","rodolfo","auron","rubius","santiago","victor","verde","ash"];

//funcion eliminar
//funcion flecha: const eliminar = (nombre) => {let index = nombres.indexOf(nombre);}
function eliminar(nombre){
    //indeof para buscar posición de parametro ingresado
    let index = nombres.indexOf(nombre);
    //si posición es distinto a -1 entonces se encontro nombre y devulve posición
    if(index != -1){
        //se borra parámetro dando posicion"index" y cnatidad de paramtros a borrar
        nombres.splice(index,1);
        console.log("se elimino a "+nombre);
    }else{
        console.log("nombre no existe");
    }
}
eliminar("rubius");
console.log(nombres);
