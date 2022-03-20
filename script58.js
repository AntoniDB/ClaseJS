///OPERADORES Y CONDICIONALES AVANZADOS
///OPERADOR ++

let num = num++;

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