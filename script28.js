//ejemplo calcular precio descontando el iva
const suma = (a,b) => { return a + b;}
const resta = (a,b) => { return a - b;}
const iva = (x) => {return x * 0.21;}

let producto = 400;
let descuento = 50;

let resultado = resta(suma(producto,iva(producto)),descuento);
console.log(resultado);