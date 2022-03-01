//retornar funciones
function mayorQue(n){
    return (m) => m > n;
}

let mayorquediez = mayorQue(10);

console.log(mayorquediez(12));
console.log(mayorquediez(8));

//retornar funciones operaciones

function asignaroperaciones (operacion){
    if (operacion == "suma"){
        return (a,b) => a + b;
    }else if (operacion == "resta"){
        return(a,b) => a - b;
    }
}
let suma = asignaroperaciones("suma");
let resta = asignaroperaciones("resta");

console.log(suma(10,5));
console.log(resta(10,5));

//funciones que reciben parametros y contienen funciones
const arrayR = [1,2,3,4,5];

function porcadauno (array,fn){
    for(const ar of array){
        fn(ar);
    }
}

//funcion que carga el array y un console log
porcadauno(arrayR,console.log);

//funciones diferentes y acciones sobre el array y un console log

let total = 0;

function acumular(num){
    total += num;
}

porcadauno(arrayR,acumular);
console.log(total);

//arrow function

const duplicado = [];

porcadauno(arrayR, (el)=>{
    duplicado.push(el * 2)
})

console.log(duplicado)

//forEach()

arrayR.forEach((num)=>{console.log(num)})

//find()

const cursos = [
    {nombre:"historia",precio:150},
    {nombre:"mate",precio:120},
    {nombre:"geigra",precio:160},
    {nombre:"fisicaPura",precio:180},
    {nombre:"fisicaEleme",precio:110},
    {nombre:"computo",precio:450},
]

const resultado = cursos.find((el) => el.nombre === "historia");
const resultado2 = cursos.find((el) => el.nombre === "lengua");

console.log(resultado);
console.log(resultado2);

//filter() igual que find() pero este busca todos los parámetros que contengan la palabra buscada en

const resultado3 = cursos.filter((el) => el.nombre.includes("fisi"));

console.log(resultado3);

//some igual que find() pero retorna true o false
console.log(cursos.some((el) => el.nombre == "geigra"));
console.log(cursos.some((el) => el.nombre == "ingles"));


//map() crea un nuevo array con los mismos elementos del otro pero eligiendo una propiedad

const nombres = cursos.map((el) => el.nombre);
console.log(nombres);

    //map() para modificar los elementos de una propiedad del array
const actualizado = cursos.map((el)=>{ 
    return{
        nombre: el.nombre,
        precio: el.precio*1.25,
    }
})
console.log(actualizado);

//reduce() devuelve un unico valor sobre las propiedades del array, se puede usar para sumar los elementos de un objeto en la misma propiedades
//acumulador: acumula los resultados sumados
//elemento: contiene los elementos del array
//0 es el segundo parámetro e indica enq ue número inicia el acumulador

const total1 = cursos.map((el)=>el.precio).reduce((acumulador, elemento) => acumulador + elemento, 0);
console.log("El total de precio de todos los cursos es "+total1);
const total2 = arrayR.reduce((acumulador, elemento) => acumulador + elemento,0);
console.log(total2);

const total3 = cursos.reduce((acumulador, el) => acumulador + el.precio,0);
console.log(total3);

//sort() para ordenar números
const numeritos = [5,40,15,90,2,4];
numeritos.sort((a,b) => a - b);
//numeritos.sort((a,b) => b - a);
console.log(numeritos);

//sort() para ordenar string de datos(no entiendo)
const items = [
    { name: 'Pikachu', price: 21 },
    { name: 'Charmander', price: 37 },
    { name: 'Pidgey', price: 45 },
    { name: 'Squirtle', price: 60 }
  ]
items.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    // a es igual a b
    return 0;
})

//

