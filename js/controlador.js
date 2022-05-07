import { llenarTienda } from './Tiendallenado.js';
import {ampliarInformacionProducto} from './ampliarinfo.js'

//creo un producto vacio

let producto={}

//llamando a tiendallenado
llenarTienda ()
//referencia al modal
let modalInfo = new bootstrap.Modal(document.getElementById('modalinformacion'))
let modalcompra = new bootstrap.Modal(document.getElementById('resumencompra'))


//rutina para ampliar informacion
let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click",function(evento){
    if(evento.target.classList.contains("btn")){
       producto=ampliarInformacionProducto(evento)
       console.log(producto)
        modalInfo.show()
        
    }
})

   //rutina para añadir un producto al carrito
   let carrito = []
   let botonAgregarCarrito=document.getElementById("botonadd")
   botonAgregarCarrito.addEventListener("click",function(){


    //capturar la cantida y agregarla al producto

    let cantidad=document.getElementById("cantidadProducto").value
    producto.cantidad=cantidad
    


    //agrego el producto al carrito
    carrito.push(producto)

     //pintar capsula en el carrito

     let suma=0
     carrito.forEach(function(producto){
        suma=suma+Number(producto.cantidad)
     })

     console.log(suma)

     let capsula=document.getElementById("capsula")
     capsula.textContent=suma
     capsula.classList.remove("invisible")
     


    console.log(carrito)

    modalInfo.hide()
   })

 
   //rutina para limpiar
   let limpiar=document.getElementById("limpiar")
   limpiar.addEventListener("click",function(){

    carrito=[]
    let capsula=document.getElementById("capsula")
    capsula.classList.add("invisible")

   })

   //rutina para ver el carrito
   let botonVerCarrito=document.getElementById("vercarrito")
   botonVerCarrito.addEventListener("click",function(){

      //recorrer el carro y pintar los productos

      let base=document.getElementById("basecarro")

      base.innerHTML=" "

      carrito.forEach(function(producto){

         let fila=document.createElement("div")
         fila.classList.add("row")

         let columna1=document.createElement("div")
         columna1.classList.add("col-4")

         let columna2=document.createElement("div")
         columna2.classList.add("col-8")

         let foto=document.createElement("img")
         foto.classList.add("w-100", "img-fluid")
         foto.src=producto.foto

         let titulo=document.createElement("h2")
         titulo.classList.add("text-center")
         titulo.textContent=producto.nombre

         let tit=document.createElement("h5")
         tit.classList.add("text-center")
         tit.textContent=("Cantidad:")

         let sub=document.createElement("h5")
         sub.classList.add("text-center")
         sub.textContent=("SubTotal:")

         
    let Total=document.createElement("p")
    Total.classList.add("text-center")
    Total.textContent=producto.precio*producto.cantidad
    
    let cantidades=document.createElement("p")
    cantidades.classList.add("text-center")
    cantidades.textContent=producto.cantidad

    let valor=document.createElement("p")
    valor.classList.add("text-center")
    valor.textContent=producto.precio

         //padres eh hijos
         columna1.appendChild(foto)
         columna2.appendChild(titulo)
         columna2.appendChild (valor)
         columna2.appendChild (tit)
         columna2.appendChild(cantidades)
         columna2.appendChild(sub) 
         columna2.appendChild(Total)
         fila.appendChild(columna1)
         fila.appendChild(columna2)
         base.appendChild(fila)
      })

      modalcompra.show()

   })