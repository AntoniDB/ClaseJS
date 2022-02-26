//clase productos
class Producto {
    constructor (nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva(){
        this.precio = this.precio * 0.80;
    }
    estadovendido(){
        this.vendido = true;
    }
}
const arrayQ = [];
arrayQ.push(new Producto("aceite","15"));
arrayQ.push(new Producto("leche","48"));
arrayQ.push(new Producto("harina","42"));

for(array of arrayQ){
    array.sumaIva();
    array.estadovendido();
    console.log(array);
        
}