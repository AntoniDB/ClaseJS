///GET ELEMENT BY ID
let div = document.getElementById("app");
let parrafo = document.getElementById("parrafo1");
console.log(div.innerHTML);
console.log(parrafo.innerHTML);

///GET ELEMENT BY CLASSNAME
let pais = document.getElementsByClassName("paises");
console.log(pais[0].innerHTML);
console.log(pais[1].innerHTML);
console.log(pais[2].innerHTML);
console.log(pais[3].innerHTML);


///GET ELEMENT BY TAG
let fam = document.getElementsByTagName("div")
console.log(fam[1].innerHTML);
console.log(fam[2].innerHTML);
console.log(fam[3].innerHTML);

///RECORRIENDO elementos
let pa = document.getElementsByClassName("paises");
for(const p of pa) {
    console.log(p.innerHTML);
}

let fa = document.getElementsByTagName("div");
for(const f of fa) {
    console.log(f.innerHTML);
}

///cambiando texto de elementos con innetText
let titu = document.getElementById("titulo");
console.log(titu.innerHTML);
titu.innerText = "Hola no. Adios Perros";
console.log(titu.innerHTML);


///agregando elementos a otro elemento mediante getElementById

let contene = document.getElementById("contenedor");
contene.innerHTML = "<h2>Es una etiqueta H2 agregada con JS</h2><p>Es una etiqueta P agragata también con JS</p>";


///agregando elementos a otro elemento mediante class name. agregando clases

let conte = document.getElementById("contenido");
conte.innerHTML = "<h2>Este H2 esta dentro de un DIV y se le agregan clases mediante JS</h2>";
conte.className = "container row";


//añador un elmento al body con append y createElement

let parrafito = document.createElement("p");
parrafito.innerHTML = "<h2>Hola Payasoooo!</h2>";
document.body.append(parrafito);


//eliminado elementos con .remove

let parrafito2 = document.getElementById("parrafo1");
parrafito2.remove();

//elimnando 1 elemento de una clase con su posiciiónm

let clasesita = document.getElementsByClassName("paises");
clasesita[3].remove();

//obtener datos de un elemento con VALUE de un input

let nombrecito = document.getElementById("nombre").value;
let apecito = document.getElementById("apellido").value;
console.log(nombrecito+" JAJA"+apecito);

//modificar datos
//document.getElementById("nombre").value = "Antonito2";
//document.getElementById("apellido").value = "Diosito2";


//crear listas LI dentro de un div padre con un array de

let padre = document.getElementById("personas");
const arrayw = ["pikcahu","charmander","squiterl","bulbasaur","caterprie"];
for(const ar of arrayw){
    let li = document.createElement("li");
    li.innerHTML = ar;
    padre.appendChild(li);

}