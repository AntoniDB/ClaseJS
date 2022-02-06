for (let i = 1;i<=10;i++){
    nombre = prompt("ingresa tu nombre en minusculas");
    if(nombre == "lucero"){
        alert("el nombre lucero fue encontrado y la posición es "+i);
        break;
    }
    alert("el nombre es "+nombre +" y la posición fue "+i);
}