// funcion calculadora

function calcula(num1, num2, operacion){
    switch(operacion){
        case "+":
            return num1 + num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            return num1 / num2;
            break;
        case "-":
            return num1 - num2;
            break;
        default:
            return 0;
            break;        

    }
}

console.log(calcula(5,6,"*"));