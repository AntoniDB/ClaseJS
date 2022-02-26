let ventaNombre = prompt("Nombre de Producto","Ejem: Torta Helada");
let ventaTipo = prompt("Ingresa tipo","Ejem: torta");
let ventaPeso = prompt("Ingresa el peso");
let ventaCantidad = prompt("¿Que cantidad?");
let ventaPrecio = prompt("Ingresa precio");
let ventaAdicional = prompt("Desea adicional (si)(no)");
let ventaDelivery = prompt("Desea delivery (si)(no)");
let ventaDescuento = prompt("Aplicar descuento? (febrero) (julio) (navidad)")

class Producto{
    constructor(nombre, tipo, peso, cantidad, precio){
        this.nombre = nombre.toUpperCase();
        this.tipo = tipo;
        this.peso = peso;
        this.cantidad = parseInt(cantidad);
        this.precio = parseFloat(precio);
        this.adicional = false;
        this.delivery = false;
    }
    descuentoFebrero(){
        this.precio = this.precio - (this.precio * 0.10);
    }
    descuentoJulio(){
        this.precio = this.precio - (this.precio * 0.15);
    }
    descuentoNavidad(){
        this.precio = this.precio - (this.precio * 0.20);
    }
    porcantidad(){
        this.precio = this.precio * this.cantidad;
    }
    deseadicional(){
        this.adicional = true;
    }
    deseadelivery(){
        this.delivery = true;
    }
    
}
const ventaProducto = new Producto(ventaNombre,ventaTipo,ventaPeso,ventaCantidad,ventaPrecio);

if(ventaAdicional == "si"){
    ventaProducto.deseadicional();
}
if(ventaDelivery == "si"){
    ventaProducto.deseadelivery();
}
switch(ventaDescuento){
    case "febrero" : ventaProducto.descuentoFebrero(); ventaProducto.porcantidad();
    break;
    case "julio": ventaProducto.descuentoJulio(); ventaProducto.porcantidad();
    break;
    case "navidad": ventaProducto.descuentoNavidad(); ventaProducto.porcantidad();
    break;
    default: ventaProducto.porcantidad();
    break;
}
function muestraventa(){
    for(const propiedad in ventaProducto){
        console.log(ventaProducto[propiedad]);
    }
}
function muestraprecio(){
    alert("El precio final del presupuesto es "+ventaProducto.precio);
}
function muestratabla(){
    const objeto = [
        {PRODUCTO: ventaProducto.nombre, TIPO: ventaProducto.tipo, PESO: ventaProducto.peso, CANTIDAD: ventaProducto.cantidad, PRECIO: ventaProducto.precio, ADICIONAL: ventaProducto.adicional, DELIVERY: ventaProducto.delivery},
    ];
    console.table(objeto);
}

muestraventa();
muestraprecio();
muestratabla();






