let ventaNombre;
let ventaTipo;
let ventaPeso;
let ventaCantidad;
let ventaPrecio;
let ventaDescuento;
let ventaAdicional;
let ventaDelivery;
let productoNombre;
let productoPrecio;

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

function llenap(){
    productoNombre = prompt("Nombre del nuevo producto");
    productoPrecio = prompt("Precio del nuevo producto");
}

class Productos{
    constructor(producto,precio){
        this.producto = producto.toUpperCase();
        this.precio = parseInt(precio);
        this.estado = false;
    }
    cambiaestado(){
        this.estado = true;
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
    
////Arrays
const datosProducto = [
    {producto:"torta de chocolate",precio:140,estado:false},
    {producto:"torta helada",precio:110,estado:false},
    {producto:"torta 3 leches",precio:100,estado:false},
    {producto:"cupcake",precio:50,estado:false},
    {producto:"torta fondant", precio:170,estado:false},
];
const ventaProducto = [];
//////Arrays

//busqueda 
function buscar(){
    let texto = prompt("Que busco?");
    const busqueda = datosProducto.filter((el) => el.producto.includes(texto))
    console.log(busqueda);
}

function revisar(array,fn) {
    for(const ar of array) {
        fn(ar);
    }
}

function ingresap(){
datosProducto.push(new Productos(productoNombre, productoPrecio));
    //for(const dp of datosProducto){
    //dp.cambiaestado(); //////revisar, no funciona
    //}    
}

function ingresa(){
ventaProducto.push(new Venta(ventaNombre,ventaTipo,ventaPeso,ventaCantidad,ventaPrecio,ventaDescuento));
let otraVenta = prompt("Desea agregar otro producto? (si)(no)");
    if(otraVenta == "si"){
        llena();
        ventaProducto.push(new Venta(ventaNombre,ventaTipo,ventaPeso,ventaCantidad,ventaPrecio,ventaDescuento));
    }
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
}
    
llena();
ingresa();
//llenap();
//ingresap();
//buscar();
//revisar(datosProducto,console.table);
//revisar(ventaProducto,console.table);    