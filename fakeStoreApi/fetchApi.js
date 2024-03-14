fetch('https://fakestoreapi.com/products').then((response)=>{
    // console.log(response)
    return response.json()
}).then((data)=>{
    let card1=''
    data.map((element)=>{
        console.log(element)
        card1 +=`
        <div id="card">
        <h3 id="title">${element.title}</h3>
        <img src=${element.image} alt="" id="image"/>
        <p id="description">${element.description}</p>
        <p id="categories">${element.category}</p>
        <p id="price">${element.price}</p>
    </div>

        
        `
    })
    document.getElementById("cards").innerHTML=card1
})