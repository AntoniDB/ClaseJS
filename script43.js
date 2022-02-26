//sentencia for of para recorrer arrays
const productos = [{id:"1",nombre:"arroz",precio:"2"},{id:"2",nombre:"azucar",precio:"3"},{id:"3",nombre:"sal",precio:"6"}];
for(const producto of productos){
    console.log(producto.id);
    console.log(producto.nombre);
    console.log(producto.precio);
}