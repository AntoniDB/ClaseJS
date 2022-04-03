///OPERADORES Y CONDICIONALES AVANZADOS
///OPERADOR ++

//let num = num++;

///OPERADOR TERNARIO

let temperatura = 30;
if(temperatura<30){
    console.log("Hace calor")
}else{
    console.log("Hace frio")
}

//
temperatura < 30 ? console.log("hace calor") : console.log("hace frio");

///otro ejemplo operador ternarios

const usuario= {nombre: "Antonio",edad:22}

let permiso;

if(usuario.edad > 18){
    permiso = true;
}else{
    permiso = false;
}
if(permiso){
    alert("No puede comporar alcohol");
}else{
    alert("si puede comprar alcoolh");
}

///
const permiso2 = (usuario.edad >18) ? true : false;
permiso ? alert("Puede tomar alcool") : alert("No puede");


///OPERADOR LOGICO AND
const carro = [];

if(carro.length === 0){
    console.log("El carro está vacío")
}

///
carro.length === 0 && console.log("El carrito está vacío");


///DESESTRUCTURACION
//normal
const usuarito = {
    nombre: "Antonio Dios",
    edad: 32,
    telefono: {
        cel: 952648791,
        fij: 1845962,
        trab: 44589657
    }
}

let nombrecito = usuarito.nombre;
console.log(nombrecito);
//normal

//desestruturado
const {nombre, edad} = usuarito;
console.log(nombre);
console.log(edad);
//cuando no existe la propiedad en el objeto
const {hobbie} = usuarito;
console.log(hobbie);//undefined
///acceder a propiedades de un objeto dentro de un objeto
const {telefono: {fij}} = usuarito;
console.log(nombre);
console.log(fij);

///alias para darle un nombre si la propiedad tiene nombre complejo

const item = {
    item_id: 1,
    item_nombre: "ulises",
    item_edad: 23
}

const {
    item_id: id,
    item_nombre: nomb,
    item_edad: edad2
} = item;

console.log(id);
console.log(nomb);
console.log(edad2);

//desestructuracion dentro de una función
const desestructurar = (intro)=>{
    const {item_id, item_nombre} = intro;
    console.log(item_id,item_nombre);
}
desestructurar(item);


///desestructuracion en parámetros
window.addEventListener("click", ({x,y}) => {
    console.log(x,y);
})

///desestructuracion de arrays
const muebles = ["silla","mesa","sillon","vitrina"];
const [a,b] = muebles;
console.log(a);


///spread de arrays (desparramar)
console.log(...muebles);

///spread para funciones matematicas

const mayor = [5,1,9,50,4,75,84,72];
console.log(Math.max(...mayor));

///spreads de array dentro de objetos, la propiedad del objketo es el indice de cada elemento del array

const nombre1 = ["Antonio","Wendy","Tessy"];
const nombre2 = ["Elena","Ulises"];

const nombres = [...nombre1,...nombre2];
console.log(nombres);

const objnom = {
    ...nombres
}
console.log(objnom);

///spread de objetos

const usuario20 = {id:1,nombre:"Antonio",edad:32};
const usuario30 = {...usuario20};
console.log(usuario30);

const usuario45 = {
    ...usuario20,
    curso: "java",
    nivel: "no entender"
}
console.log(usuario45);

///rest parameters (agrupar valores dentro de un spread mediante un funcion) 
//para almacenar elemtos dentro de un array mediante una funcion y luego
//poder trabajarlos

function suma(...numero){
    console.log(numero);
}
suma(5,8,9,4,2,6,8,4);

///sumando todos los elementos
function suma(...numero){
    return numero.reduce((almacenador,num) => almacenador + num,0);

}
console.log(suma(5,8,9,4,2,6,8,4,42));





