let numero = parseInt(prompt("Ingresa un número"));

if(numero > 1000){
    alert("el número ingresado "+numero+"es mayor a 1000");
}else if ((numero >= 10) && (numero <=50)){
    alert ("el numero ingresado "+numero+"está entre 10 y 50");
}else{
    alert ("intenta con otro número");
}