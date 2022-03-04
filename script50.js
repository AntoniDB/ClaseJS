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
            this.nombre = nombre;
            this.tipo = tipo;
            this.peso = peso;
            this.cantidad = parseInt(cantidad);
            this.precio = parseInt(precio);
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
        }
        deseadeliveryoper(){
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
const ventaTemporal = [];
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

function llena(){
    ventaPrecio = 0;
    ventaNombre = document.getElementById("nombrec").value;
    ventaTipo = document.getElementById("tipoc").value;
    ventaPeso = document.getElementById("pesoc").value;
    ventaCantidad = document.getElementById("cantidadc").value;
    ventaPrecio = document.getElementById("precioc").value;
    ventaDescuento = document.getElementById("descuentoc").value;
    ventaAdicional = document.getElementById("adicionalc").value;
    ventaDelivery = document.getElementById("deliveryc").value;

    ventaTemporal.push(new Venta(ventaNombre,ventaTipo,ventaPeso,ventaCantidad,ventaPrecio,ventaDescuento));
    for(const vta of ventaTemporal){
        if(ventaAdicional == "si"){
            vta.deseadicional();
        }
        if(ventaDelivery == "si"){
            vta.deseadelivery();
        }
    }
    console.table(ventaTemporal);

    ventaProducto.push(new Venta(ventaNombre,ventaTipo,ventaPeso,ventaCantidad,ventaPrecio,ventaDescuento));
    
    for(const vtp of ventaProducto){
        if(ventaAdicional == "si"){
            vtp.deseadicional();
        }
        if(ventaDelivery == "si"){
            vtp.deseadelivery();
        }
        vtp.porcantidad()
    }
    console.table(ventaProducto);

    let padre = document.getElementById("contenido");
    for(const vpt of ventaTemporal){
        let tr = document.createElement("tr");
        tr.innerHTML = `<th scope="row">${vpt.nombre}</th><td>${vpt.tipo}</td><td>${vpt.peso}</td><td>${vpt.cantidad}</td><td>${vpt.precio}</td><td>${vpt.descuento}</td><td>${vpt.adicional}</td><td>${vpt.delivery}</td>`;
        padre.appendChild(tr);
    }
    let indeli = ventaTemporal.length;
    ventaTemporal.splice(0,indeli)
}

function ingresa(){
    
    for(const vp of ventaProducto){
        //if(ventaAdicional == "si"){
        //    vp.deseadicional();
        //}
        switch(vp.descuento){
            case "febrero": vp.descuentoFebrero(); 
            break;
            case "julio": vp.descuentoJulio(); 
            break;
            case "navidad": vp.descuentoNavidad(); 
            break;
            default: ;
            break;
        }
        if(vp.delivery = true){
            vp.deseadeliveryoper();
        }
    }
        //haciendo el total del presupuesto con map() y reduce()
        //const total = ventaProducto.map((el) => el.precio).reduce((acumulador, elemento) => acumulador + elemento, 0);
        const total = ventaProducto.reduce((acumulador,el)=> acumulador + el.precio,0);
        alert("El precio total del presupuesto es "+total);
        console.table(ventaProducto);
        ///llenando tabla en dom
    let padre = document.getElementById("contenido");

    for(const vpt of ventaProducto){
        let tr = document.createElement("tr");
        tr.innerHTML = `<th scope="row" class="table-warning">SubTotal&nbsp;${vpt.nombre}</th><td class="table-warning">${vpt.tipo}</td><td class="table-warning">${vpt.peso}</td><td class="table-warning">${vpt.cantidad}</td><td class="table-warning">${vpt.precio}</td><td class="table-warning">${vpt.descuento}</td><td class="table-warning">${vpt.adicional}</td><td class="table-warning">${vpt.delivery}</td>`;
        padre.appendChild(tr);
    }    
}
//llena();
let btncalcula = document.getElementById("btncalcular");
btncalcula.addEventListener("click", ingresa);    
let btnllena = document.getElementById("btnagregar");
btnllena.addEventListener("click", llena);
//console.log(ventaNombre);
//ingresa();
//llenap();
//ingresap();
//buscar();
//revisar(ventaTemporal,console.table);
//revisar(ventaProducto,console.table);    