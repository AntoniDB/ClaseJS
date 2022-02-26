//crear un array y poner de tope 5 valores
const NOMBRES = [];
let tope = 5;
//hacer hasta que longitud de array nombres sea igual a tope
do {
    let entrada = prompt("Ingresa nombre: ");
    NOMBRES.push(entrada.toUpperCase());
    console.log(NOMBRES.length);
}while(NOMBRES.length != tope);
//agregar dos nuevos valores concatenando
const NUEVOSNOMBRES = NOMBRES.concat("ana","pedro");
//agregando salto de linea
console.log(NUEVOSNOMBRES.join("\n"));