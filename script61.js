///PETICIONES

///FETCH
//fetch('https://jsonplaceholder.typicode.com/posts')

//RESPONSE
//fetch('https://jsonplaceholder.typicode.com/posts')
//.then((res)=>res.json())
//.then((dat)=>{
//    ///acceder a datos del objeto
//    console.log(dat[0].title);
//    console.log(dat[1].title);
//})


///API
///crear elemento en el dom con datos de API
const listas = document.getElementById("listar");
fetch('https://jsonplaceholder.typicode.com/posts')
.then((resp)=>resp.json())
.then((da)=>{
    da.forEach((post)=>{
        const li = document.createElement("li");
        li.innerHTML = `<h4>${post.title}</h4><p>${post.body}</p>`;
            listas.append(li);
    })
})




////método POST en el fetch

fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    body: JSON.stringify({
        title: 'coderHouse',
        body: 'Post de prueba',
        userId: 1
    }),
    headers: {'Content-Type': 'application/json; charset=UTF-8'}
})
.then((r)=>r.json())
.then((d)=>console.log(d))



