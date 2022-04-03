///FETCH DE ARCHIVO LOCAL
///////FETCH DE ARCHIVO LOCAL SOLO FUNCIONA CON LIVE SERVER PARA TESTEAR

//const list = document.getElementById("listar")

//fetch('./data.json')
//.then((resp) => resp.json())
//.then((dataa)=>{
 //   dataa.forEach((product)=>{
  //      const li = document.createElement("li");
   //     li.innerHTML = `<h4>${product.nombre}</h4><p>${product.precio}</p><p>${product.id}</p>`;
  //      list.append(li);
   // })
//})
//.catch((error)=>{
 //   console.log(error);
//})
const no = document.getElementById("nombre");
const df = document.getElementById("fot");

fetch('https://imsea.herokuapp.com/api/1?q=peru')
//.then((rs)=>console.log(rs))
.then((r)=>r.json())
.then((d)=>{
    const dfd = document.createElement("div");
    dfd.innerHTML = `<img src="${d.results[1]}">`;
})


fetch('https://world.openfoodfacts.org/api/v0/product/737628064502.json')
.then((rsf)=>console.log(rsf))