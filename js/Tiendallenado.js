
export function llenarTienda(){

    ///creando un arreglo de objetos

let productos = Array (
    
    {foto:"img/pantalon.jpg",nombre:"pantalon",precio:85000,descripcion: "pantalones importados"},
    {foto: 'img/camiseta.jpg',nombre:"camiseta",precio: 32000,descripcion: "camisetas bart,homero,lisa,marge"},
    {foto: 'img/gorra.jpg',nombre:"gorra",precio: 20000,descripcion: "gorras curvas"},
    {foto: 'img/pantaloneta.jpg',nombre:"pantaloneta",precio: 28000,descripcion: "pantaloneta impermeable"},
    {foto: 'img/tenis.jpg',nombre:"tennis",precio: 300000,descripcion: "tenis triple A"},
    {foto: 'img/camibusos.jpg',nombre:"camibusos",precio: 60000,descripcion: "camibusos de algodon"},
    {foto: 'img/chompas.jpg',nombre:"chompas",precio: 85000,descripcion: "chompas ligeras doble faz"},
    {foto: 'img/bolso.jpg',nombre:"morrales",precio: 180000,descripcion: "bolsos"},
    {foto: 'img/termos.jpg',nombre:"termos",precio: 45000,descripcion: "termo termicos"},
    {foto: 'img/bufanda.jpg',nombre:"bufandas",precio: 30000,descripcion: "bufandas de algodon"}

)

//necesito recorrer un arreglo en js


//1-creo una variable para almacenar la base sobre la cual voy a pintar

let fila=document.getElementById("fila")


productos.forEach(function(producto){
    console.log(productos.descripcion)
    console.log(producto.nombre)
    console.log(producto.precio)
    console.log(producto.foto)

    //pintando etiquetas

    //lo primero es crear un div con la clase col

    let columna=document.createElement("div") 
    columna.classList.add("col")

    //div con las clases card h-100

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    //img con la clase card-img-top

    let foto=document.createElement("img")
    foto.classList.add("card-img-top")
    foto.src=producto.foto

    //h2

    let titulo=document.createElement("h2")
    titulo.classList.add("text-center")
    titulo.textContent=producto.nombre

    //p

    let descrip=document.createElement("p")
    descrip.classList.add("text-center")
    descrip.textContent=producto.descripcion

    //h4

    let valor=document.createElement("h4")
    valor.classList.add("text-center")
    valor.textContent=producto.precio

    //boton

    let boton=document.createElement("button")
    boton.setAttribute("type","button")
    boton.classList.add("btn","btn-warning","ex-4","nb-4")
    boton.textContent=("ver producto")


    //padres e hijos
    tarjeta.appendChild(foto)
    tarjeta.appendChild(titulo)
    tarjeta.appendChild(descrip)
    tarjeta.appendChild(valor)
    tarjeta.appendChild(boton)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})


}





