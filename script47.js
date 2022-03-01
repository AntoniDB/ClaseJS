//aplicando los métodos de array en un ejemplo
const productos = [
    {id:1,nombre:"harina",precio:12},
    {id:2,nombre:"arroz",precio:14},
    {id:3,nombre:"avena",precio:5},
    {id:4,nombre:"maizena",precio:10},
    {id:5,nombre:"papa",precio:7},
    {id:6,nombre:"cebolla",precio:9},
]

const buscado = productos.find(el => el.id === 3);
console.log(buscado);

const existe = productos.some(el=> el.nombre === "harina");
console.log(existe);

const filtrar = productos.filter(el => el.precio < 10);
console.log(filtrar);

const mapear = productos.map(el => el.nombre);
console.log(mapear);

const total = productos.reduce((acumulador,el) => acumulador + el.precio, 0);
console.log(total);