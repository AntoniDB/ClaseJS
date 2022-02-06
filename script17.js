let nombre = prompt("ingresar nombre para salir escribe esc");

while (nombre != "esc"){
    switch (nombre){
        case "anto": alert ("Hola soy "+nombre);
        break;
        case "lucero": alert("Hola soy "+nombre);
        break;
        default: alert("quieres eres perro");
        break;
    }
    nombre = prompt("ingresa otro nombre");
}