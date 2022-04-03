let tiempo = document.getElementById("tiempo");

fetch('https://goweather.herokuapp.com/weather/trujillo')
.then((resp) => resp.json())
.then((da)=>{
    let ciu = "Trujillo"
    const p = document.createElement("p");
    p.innerHTML = `<u>${ciu}</u>&nbsp;<strong>${da.temperature}</strong>&nbsp;<em>Cielo:&nbsp;${da.description}</em>&nbsp;<em>Viento:&nbsp;${da.wind}</em>`;
    tiempo.appendChild(p);
    
})
.catch((error)=>{
    console.log(error);
})

