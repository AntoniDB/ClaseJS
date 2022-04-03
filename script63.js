///ASYNC-AWAIT

let list = document.getElementById("listar");

const pedir = async () => {
    const re = await fetch('https://jsonplaceholder.typicode.com/posts')
    const da = await re.json()
    da.forEach((po)=>{
        const li = document.createElement("li");
        li.innerHTML = `<h4>${po.title}</h4><p>${po.body}</p>`;
        list.appendChild(li);
    })    
}


pedir();