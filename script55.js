///local storage y session storage

localStorage.setItem("saludo","Hola Antonio");
//localstorage.setItem("boolea",true);
localStorage.setItem("numero",20);
localStorage.setItem('bienvenida', '¡Hola Coder!');
localStorage.setItem('esValido', true);
localStorage.setItem('unNumero', 20);


// leer valor de local storage
let mensaje = localStorage.getItem("saludo");
console.log(mensaje);

//sesion storage

sessionStorage.setItem("digitos",[1,2,3,4,5,6,7,8,9,10]);
sessionStorage.setItem("correo","correo@correo.com");


//leer valor de session storage
let lista = sessionStorage.getItem("digitos").split(",");
let correito = sessionStorage.getItem("correo");

console.log(typeof correito);   
console.log(typeof lista);



//recorrer todos los datos del local storage con for y key

for(let i = 0;i<localStorage.length;i++){
    let clave = localStorage.key(i);
    console.log("clave: "+clave);
    console.log("Datos: "+localStorage.getItem(clave));
}

///eliminar elementos con removeItem

localStorage.removeItem("bienvenida");
sessionStorage.removeItem("correo");

///eliminar todo con clear
    //localstorage.clear();
    //sessionStorage.clear();

//almacenar objetos
const datitos = {id:1,nombre:"Antonio",edad:32};
localStorage.setItem("datos",datitos);

///Json metodo stringify

const producto = {id:1,nombre:"ulises",};
const jsonprodu = JSON.stringify(producto);

console.log(jsonprodu);
console.log(producto);
console.log(typeof jsonprodu);
console.log(typeof producto);

localStorage.setItem("Producto1",jsonprodu);


///JASON metodo parce

const projson = '{"id":2,"nombre":"arroz"}';
const producto3 = JSON.parse(projson);

console.log(typeof producto3);
console.log(typeof projson);
console.log(producto3.nombre);

const producto4 = JSON.parse(localStorage.getItem("Producto1")