let nombre = prompt("Ingresa tu nombre");
let anonac = parseInt(prompt("Ingresa tu año de nacimiento, si eres menor de edad no podrás seguir"));
let calcula = 2022 - anonac;
let cond = "a";
if (calcula <=17){
    cond = "menor";
    alert("Eres "+cond+ " así que chao");
}else{
    cond = "mayor"; 
}
if ((nombre != "") && anonac != ""){
while(cond !="menor"){
    alert("Bien "+nombre+" tienes "+calcula+" años de edad. Puedes continuar");
    for(let i=1;i<=3;i++){
        switch(i){
            case 1 : var papa = parseInt(prompt(nombre+" Que edad tiene tu papá"));
            var calculapapa = 2022 - papa;
            alert("Tu papá nació en el año "+calculapapa);
            break;
            case 2 : var mama = parseInt(prompt(nombre+" Cuantos años tiene tu mamá"));
            var calculamama = 2022 - mama;
            alert("Tu mamá nació en el año "+calculamama);
            break;
            default : let calcultumama = mama - calcula;
            let calcultupapa = papa - calcula;
            let compara = papa - mama;
            if (compara <=10){
                alert("Hola "+nombre+" Tu mamá nacio en el año "+calculamama+", tu papá nació en el año "+calculapapa+ " y te tuvieron a los "+calcultumama+" y "+calcultupapa+" años respectivamente");
            break;    
            }
                alert("Hola "+nombre+" Tu mamá nacio en el año "+calculamama+", tu papá nació en el año "+calculapapa+ " y te tuvieron a los "+calcultumama+" y "+calcultupapa+" años respectivamente entonces tu papá es un roba cunas porque le lleva "+compara+" años a tu mamá, increible :o");
            break;
        }
    }
    alert("Aqui termina, chao");
    break;
}
}else{
    alert("Llena los datos");
}

