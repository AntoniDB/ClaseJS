/// clase con métodos, ejemplos

class productos{
    constructor(nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    masIva(){
        this.precio = this.precio * 1.21;
    }
    vender(){
        this.vendido = true;
    }
}

const producto1 = new productos ("arroz", "120");

producto1.masIva();
producto1.vender();

console.log(producto1.precio);
console.log(producto1.vendido);