///funcion que retorna producto de un array coin un delay 

const bd = [
    {id:1, nombre: "Antonio", apellido: "Dios"},{id:2, nombre: "Lucero", apellido: "Sanchez"}
]

//funcion con promesa con setTimeout que devuelve el array bd
const pedirNombres = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {resolve(bd)},3000)
    })
}

let productos = [];

const renderNombres = (arr) => {
    //mostrar array
    console.log(arr);
}

pedirNombres()
.then((res) => {
    productos = res;
    renderNombres(productos);
})


const apellidos = ["dios","bazan","gimenez","rodriguez","sanchez","espinoza"];
const nombre = ["antoni","ulises","lucero","lisbeht"];
let datos = [];

const darnombres = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{resolve(apellidos)},2000)
    })
}

darnombres()
.then((da)=>{
    datos = [...da,...nombre]
    console.log(datos);
})


