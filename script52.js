/// plantillas literales
let datos = {id: 1, name:"antonio", edad:32};
let plantillas = `ID: ${datos.id}, name: ${datos.name}, edad: ${datos.edad}`;
console.log(plantillas);

//incluir plantillaas creando un elemento 
let conten = document.createElement("div");
conten.innerHTML = `<h3> id: ${datos.id}</h3> <p>name: ${datos.name}</p><b> edad: ${datos.edad}</b>`;
document.body.appendChild(conten);



//crear elemento desde objetos con arrays

const productos = [{id:1, nombre:"Antonio", edad:32},{id:2, nombre:"lucero", edad:30},{id:3, nombre:"fabri", edad:11}];
for(const pro of productos){
    let elediv = document.createElement("div");
    elediv.innerHTML = `<h3>ID: ${pro.id}</h3><p>NOMBRE: ${pro.nombre}<br><b>EDAD: ${pro.edad}</b></p>`;
    document.body.appendChild(elediv);
}


///query selector///

///selecionando etiqueta P dentro de div con id prueba
let prueba = document.querySelector("#prueba p");
// seleccionando por id
let prueba3 = document.querySelector("#prueba");
///seleccionando por clase
let prueba4 = document.querySelector(".prueba2");
///seleccionando con seudoclases por ejemplo cheked de raio button
let prueba5 = document.querySelector(".raio:checked");



