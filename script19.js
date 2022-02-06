let numero = parseInt(prompt("ingresa numero"));
for(let i = 1;i<=10;i++){
    if ((numero >=10) && (numero <=50)){
        alert("numero entre 10 y 50");
        break;
    }else{
        numero = prompt("ingresa otro numero");
    }
}