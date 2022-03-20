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

const cantia =[1,2,3,4,5,6];
const cantib = [{id:1,name:"Pack de 3"},{id:2,name:"Pack de 6"},{id:3,name:"Pack de 12"}];
const cantic = [{id:1,name:"Unidades x 15"},{id:2,name:"Unidades x 30"},{id:3,name:"Unidades x 50"},{id:4,name:"Unidades x 100"}];

let tiposelect = document.getElementById("tipoc");
let cantidadselect = document.getElementById("cantidadc");

///select dependiente de otro select
tiposelect.onclick = () => {        
    let valuetipo = parseInt(tiposelect.value);
    if(valuetipo != 0){
        switch(valuetipo){
            case 1:
                cantidadselect.innerHTML = "";
                for(const canta of cantia){
                    let opt = document.createElement("option");
                    opt.innerHTML = `${canta}`;
                    opt.value = canta;
                    cantidadselect.appendChild(opt);
                }
                console.log(cantidadselect.length);
            break;
            case 2:
                cantidadselect.innerHTML = "";
                for(const cantb of cantib){
                    let opt = document.createElement("option");
                    opt.innerHTML = `${cantb.name}`;
                    opt.value = cantb.id;
                    cantidadselect.appendChild(opt);
                } 
            break;
            case 3:
                cantidadselect.innerHTML = "";
                for(const cantc of cantic){
                    let opt = document.createElement("option");
                    opt.innerHTML = `${cantc.name}`;
                    opt.value = cantc.id;
                    cantidadselect.appendChild(opt);
                }
            break;
            default: console.log("Selecionar Tipo Producto")
            break;
        }
    }
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
///SPREAD DE Arrays
console.log(...datosProducto);

const ventaProducto = [];
const ventaTemporal = [];
//////Arrays
let almacenado = [];
let almacenador = JSON.parse(localStorage.getItem("calculado"));
if(almacenador){
    almacenado = almacenador;
    let padrealer = document.getElementById("padrealert");
    let divalerls = document.createElement("div");

    for(const alma of almacenado){
        divalerls.innerHTML = `<div id="alertlost"><div class="alert alert-info" role="alert">Quedaron elementos sin calcular. Puedes verlos aquí&nbsp;&nbsp;<button type="button" class="btn btn-outline-info btn-sm" id="lsbtn">Info</button></div>`;
    }
    padrealer.appendChild(divalerls);
    let btnlsv = document.getElementById("lsbtn");
    btnlsv.addEventListener('click',()=>{
    for(const alma of almacenado){
    Swal.fire({
        width: 400,
        html: `<b>Nombre:&nbsp;</b>${alma.nombre}<br><b>Tipo:&nbsp;</b>${alma.tipo}<br><b>Peso:&nbsp;</b>${alma.peso}<br><b>Cantidad:&nbsp;</b>${alma.cantidad}<br><b>Precio:&nbsp;</b>${alma.precio}<br><b>Descuento:&nbsp;</b>${alma.descuento}<br><b>Adicional:&nbsp;</b>${alma.adicional}<br><b>Delivery:&nbsp;</b>${alma.delivery}`,
        title: 'Producto guardado sin calcular',
        icon: 'info',
        confirmButtonText: 'De acuerdo'
    })}

    })
}



//busqueda 
function buscar(){
    let texto = prompt("Que busco?");
    const busqueda = datosProducto.filter((el) => el.producto.includes(texto))
    console.log(busqueda);
    //acceso condicional a un objeto
    console.log(datosProducto?.producto?.texto || "No existe el producto");
    //DESESTRUCTURACIÓN
    const {producto, precio} = datosProducto;
    console.log(producto);
    console.log(precio);
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
    
    //ventaNombre == "" && alert("Debe rellenar los campos")&& location.reload();
    if(ventaNombre == ""){
        alert("Deber rellenar los campos");
        location.reload();
    }
    ventaTemporal.push(new Venta(ventaNombre,ventaTipo,ventaPeso,ventaCantidad,ventaPrecio,ventaDescuento));
    for(const vta of ventaTemporal){
    ///OPERADOR LOGICO AND    
        ventaAdicional == "si" && vta.deseadicional();
        ventaDelivery == "si" && vta.deseadelivery();
    }
    
    console.table(ventaTemporal);
    ///llenar array ventaProducto con item de arrayTemporal
    ventaTemporal.map((item) => { ventaProducto.push(item);
    return item;
    });
    
    console.table(ventaProducto);

    
    let padre = document.getElementById("contenido");
    for(const vpt of ventaTemporal){
        let tr = document.createElement("tr");
        tr.innerHTML = `<th scope="row">${vpt.nombre}</th><td>${vpt.tipo}</td><td>${vpt.peso}</td><td>${vpt.cantidad}</td><td>${vpt.precio}</td><td>${vpt.descuento}</td><td>${vpt.adicional}</td><td>${vpt.delivery}</td>`;
        padre.appendChild(tr);
    }
    //almacenando localstorage con array temporal
    localStorage.setItem("calculado",JSON.stringify(ventaTemporal));
    //DESESTRUCTURACIÓN DE ARRAY
    const [a,b] = ventaTemporal;
    console.log(a);
    console.log(b);
    //eliminando array temporal para luego llenarlo nuevamente
    let indeli = ventaTemporal.length;
    ventaTemporal.splice(0,indeli)
    
    //eliminando el atributo disabled al botón calcular del dom
    let botcal = document.getElementById("btncalcular");
    botcal.removeAttribute("disabled");
    //eliminar atributo disabled del boton elminar del dom
    let elim = document.getElementById("btnborra");
    elim.removeAttribute("disabled");
    ///LIBRERIA TOASTIFY
    Toastify({
        text: "Producto agregado",
        duration: 3000,
        gravity: 'top',
        position: 'right',
        style: {
            background: "linear-gradient(to right, #CDF0EA, #CDF0EA)", color: "#141E27", fontWeight: "bold"
          },
    }).showToast();
}

function ingresa(){
    
    for(const vp of ventaProducto){
        
        vp.porcantidad()
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
        if(vp.delivery != false){
            vp.deseadeliveryoper();
        }
    }
    ///eliminar elemento en dom para mostrar solo precio total
    let elimalert = document.getElementById("alertelim");
    elimalert.remove();
        
    //total de presupuesto con reduce
    const total = ventaProducto.reduce((acumulador,el)=> acumulador + el.precio,0);
    ///crear elemento en dom para mostrar precio total
    let padrealer = document.getElementById("padrealert");
    let divaler = document.createElement("div");
    divaler.innerHTML = `<div class="alert alert-info" role="alert">El precio total del presupuesto es <strong>S/.${total}</strong>, el precio incluye el delivery</div>`;
    padrealer.appendChild(divaler);

    
    //alert("El precio total del presupuesto es "+total);
    console.table(ventaProducto);

    //alert("Al producto "+nombre +" se le está aplicando el delivery en el total: "+precio);
    ///llenando tabla en dom
    let padre = document.getElementById("contenido");
    for(const vpt of ventaProducto){
        let tr = document.createElement("tr");
        tr.innerHTML = `<th scope="row" class="table-secondary">SubTotal&nbsp;${vpt.nombre}</th><td class="table-secondary">${vpt.tipo}</td><td class="table-secondary">${vpt.peso}</td><td class="table-secondary">${vpt.cantidad}</td><td class="table-secondary">${vpt.precio}</td><td class="table-secondary">${vpt.descuento}</td><td class="table-secondary">${vpt.adicional}</td><td class="table-secondary">${vpt.delivery}</td>`;
        padre.appendChild(tr);
    }    
    //borrar local storage luego de calcular
    localStorage.clear();

    
    
}

//llena();
let btncalcula = document.getElementById("btncalcular");
btncalcula.addEventListener("click", ingresa);
let btnllena = document.getElementById("btnagregar");
btnllena.addEventListener("click", llena);

///USO DE LIBRERIA SWEET ALERT
let btnborr = document.getElementById("btnborra");
btnborr.addEventListener('click', () => {
     Swal.fire({
        title: 'Desea eliminar el item agregado',
        width: 300,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sipi',
        cancelButtonText: 'No'
    }).then((result) => {
        
        if (result.isConfirmed) {
            let indeli = ventaTemporal.length;
            ventaTemporal.splice(0,indeli);
            location.reload();
            localStorage.clear();
            Swal.fire({
                title: 'Eliminado',
                icon: 'success',
                text: 'El item ha sido eliminado puede agregar otro'
            })
            
            
        }
        
    })
})

//console.log(ventaNombre);
//ingresa();
//llenap();
//ingresap();
//buscar();
//revisar(ventaTemporal,console.table);
//revisar(ventaProducto,console.table);    