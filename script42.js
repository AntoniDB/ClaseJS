//agregando un obejto personalizado a un array
const objeto1 = {
    id: "1",
    nombre: "arroz",
    precio: "12"
}
const array = [objeto1,{id:"2",nombre:"azucar",precio:"14"}];
array.push({id:"3",nombre:"sal",precio:"10"});
console.log(array);