let numero = parseInt(prompt("ingresa tu numero a multiplicar"));
for (let i = 1; i<=10;i++){
    let resultado = numero * i;
    if (resultado == 25){
        alert ("Se encontró el numero "+resultado+" y aqui muere")
        break;
    }
    alert ("no se encontró el resultado, fue "+resultado);
}