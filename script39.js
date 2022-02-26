//agregando elemento al array

const arrayC = ["sandia","manzana","fresa"];
arrayC.push("pera");
console.log(arrayC);

//agregar elementos al inicio del array

const arrayD = ["taza", "plato","tenedor"];
arrayD.unshift("cuchara");
console.log(arrayD);

//eliminar el primer elemento de un array

const arrayE = ["futbol","basket","voley","golf"];
arrayE.shift();
console.log(arrayE);


//eliminar ultimo elemento de un arrayE

const arrayF = ["marte","venus","tierra","jupiter"];
arrayF.pop();
console.log(arrayF);

//eliminar elementos de un array en cualquier posición

const arrayG = ["peru","bolivia","colombia","chile","venezuela","ecuador","urugay"];
arrayG.splice(3,2);
console.log(arrayG);


//string con método join

const arrayH = ["pedro","maria","jesus","satanas","lucifer"];
console.log(arrayH.join(" y "));

//método concat para concatenar dos arrays distintos

const arrayI = ["chaufa","seviche","huancaina","lomo","causa"];
const arrayJ = ["coca","pepsi","incacola","fanta","sprite"];
const arrayK = arrayI.concat(arrayJ);
console.log(arrayK);

//método slice devuelve un pedazo del array definiendo posiciones

const arrayL = ["sol","satelite","planeta","agujeronegro","galaxia","constelacion"];
const arrayLL = arrayL.slice(2,4);
console.log(arrayLL);

//método indexOf busca un parámetro en el array y devuelve la posición del mismo del

const arrayM = ["rosa","orquidea","clavel","violeta","girasol"];
console.log(arrayM.indexOf("orquidea"));
console.log(arrayM.indexOf("girasol"));
console.log(arrayM.indexOf("nopal"));

//método includes como indexOf busca un parámetro en el array pero devuelve true o false

const arrayN = ["pedro","thomas","ricolas","erick","manuel"];
console.log(arrayN.includes("thomas"));
console.log(arrayN.includes("ricolas"));
console.log(arrayN.includes("marcopolo"));

//método reverse invierte el orden de los parámetros en el array

const arrayO = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
console.log(arrayO.reverse());