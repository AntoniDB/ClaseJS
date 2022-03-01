//Math() operaciones 

console.log(Math.E);
console.log(Math.PI);

//ramdon()

console.log(Math.random() *10);
console.log(Math.random() *50);
console.log(Math.random() *30+20);

//redondeo para números aleatorios

const generador = () =>{ 
    return Math.round(Math.random() *100)
}
console.log(generador());