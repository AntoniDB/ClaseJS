let ventaNombre;
let ventaTipo;
let ventaPeso;
let ventaCantidad;
let ventaPrecio;
let ventaDescuento;
let ventaAdicional;
let ventaDelivery;
let operacion;
let productosnombre;
let productosprecio;

function llenaproducto(){
    productosnombre = prompt("Ingresa Nombre de nuevo producto");
    productosprecio = prompt("Ingresa Precio de nuevo producto");
}
function llena(){
    ventaNombre = prompt("Nombre de Producto","Ejem: Torta Helada");
    ventaTipo = prompt("Ingresa tipo","Ejem: torta");
    ventaPeso = prompt("Ingresa el peso");
    ventaCantidad = prompt("¿Que cantidad?");
    ventaPrecio = prompt("Ingresa precio");
    ventaDescuento = prompt("Aplicar descuento? (febrero) (julio) (navidad)");
    ventaAdicional = prompt("Desea adicional (si)(no)");
    ventaDelivery = prompt("Desea delivery (si)(no) Se recargaran S/5 soles, no aplica a precio con descuento");
}

class Productos{
    constructor(producto,precio){
        this.producto = producto.toUpperCase();
        this.precio = parseFloat(precio);
    }
    masIgv(){
        this.precio = this.precio * 0.18;
    }
}
    
class Venta{
    constructor(nombre, tipo, peso, cantidad, precio, descuento){
            this.nombre = nombre.toUpperCase();
            this.tipo = tipo;
            this.peso = peso;
            this.cantidad = parseInt(cantidad);
            this.precio = parseFloat(precio);
            this.descuento = descuento;
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
            this.precio = this.precio + 5; 
        }
}
 
const nuevoProducto = [{producto:"torta chocolate",precio:140},{producto:"torta 3 leches", precio:120},{producto:"torta helada",precio:90}];
const ventaProducto = [];

function inicia(){
    operacion = prompt("Que quieres hacer. (producto)(simulador)")
    if(operacion == "producto"){
        llenaproducto();
        nuevoProducto.push(new Productos(productosnombre,productosprecio));
        for(const np of nuevoProducto){
            //np.masIgv();
            console.log(np);
            break;
        }
    }else{
        llena();
        ventaProducto.push(new Venta(ventaNombre,ventaTipo,ventaPeso,ventaCantidad,ventaPrecio,ventaDescuento));
        let otroProducto = prompt("Desea agregar otro producto? (si)(no)");

        if(otroProducto == "si"){
            llena();
            ventaProducto.push(new Venta(ventaNombre,ventaTipo,ventaPeso,ventaCantidad,ventaPrecio,ventaDescuento));
        }
    }
}
inicia();
//llena();
    //array
//const ventaProducto = [];
//ventaProducto.push(new Venta(ventaNombre,ventaTipo,ventaPeso,ventaCantidad,ventaPrecio,ventaDescuento));

//let otroProducto = prompt("Desea agregar otro producto? (si)(no)");

//if(otroProducto == "si"){
//    llena();
//    ventaProducto.push(new Venta(ventaNombre,ventaTipo,ventaPeso,ventaCantidad,ventaPrecio,ventaDescuento));
//}

for(const vp of ventaProducto){
    if(ventaAdicional == "si"){
        vp.deseadicional();
    }
    switch(ventaDescuento){
        case "febrero": vp.descuentoFebrero(); vp.porcantidad();
        break;
        case "julio": vp.descuentoJulio(); vp.porcantidad();
        break;
        case "navidad": vp.descuentoNavidad(); vp.porcantidad();
        break;
        default: vp.porcantidad();
        break;
    }
    if(ventaDelivery == "si"){
        vp.deseadelivery();
    }
}
    //haciendo el total del presupuesto con map() y reduce()
    //const total = ventaProducto.map((el) => el.precio).reduce((acumulador, elemento) => acumulador + elemento, 0);
    const total = ventaProducto.reduce((acumulador,el)=> acumulador + el.precio,0);
    
    alert("El precio total del presupuesto es "+total);
    console.table(ventaProducto);

    
    