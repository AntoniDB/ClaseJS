///asincronismo

console.log("inicia proceso");
setTimeout(() =>{console.log("Mitad de proceso")},2000);
console.log("termina proceso");

//call stack (pila de ejecucion) primero se ejecuta resu y luego mult y despues regresa a resu

function mult(x,y){
    return x*y;
}
function res(x,y){
    return x+y;
}
function resu(x){
    let s = mult(x,x)
    let r = res(x,s);
    console.log(s);
    console.log(r);
}
resu(10);

//set interval (para repetir un proceso indefinidamente definiendo un tiempo con setTimeout)

//setInterval(()=>{console.log("setInterval")},1000);

///clear interval, limpiar intervalo pasando una referencia a clearInterval

let counter = 0;

const interval = setInterval(()=>{
    counter++;
    console.log("Counter",counter);
    
    if(counter>=5){
        clearInterval(interval);
        console.log("Se removio interal");
    }
},1000);

///PROMESAS

const eventofuturo = () => {
    return new Promise((resolve,reject)=>{
        //cuerpo de la promesa
    })
}
console.log(eventofuturo());

///resolve y reject

const eventofu = (res) => {
    return new Promise((resolve,reject)=>{
        if(res === true){
            resolve('promesa resuelta')
        }else{
            reject('promesa rechazada')
        }
    })
}

console.log(eventofu(true));
console.log(eventofu(false));

///agregando setTimeout a la promesa

const eventofuturito = (ho) => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            ho ? resolve('promesa resuelta') : reject('promesa rechazada');
        },2000)
    })
}
console.log(eventofuturito(true));


//then & catch

///funcion que retorna producto de un array coin un delay 

const bd = [
    {id:1, nombre: "Antonio", apellido: "Dios"},{id:2, nombre: "Lucero", apellido: "Sanchez"}
]

//promesa con setTimeout que devuelve el array bd
const pedirNombres = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {resolve(bd)},3000)
    })
}

let productos = [];

const renderNombres = (arr) => {
    //mostrar array
}

pedirNombres()
.then((res) => {
    productos = res;
    renderNombres(productos);
})


