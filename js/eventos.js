let etiquetaboton=document.getElementById("boton")

/*los eventos son acciones que el usuario hace en la pantalla*/

etiquetaboton.addEventListener("click",cambiarFoto)

function cambiarFoto (){

    let titulo2=document.getElementById("titulo2")
    titulo2.textContent="Buenos Dias Señor"
}


let etiquetaimg=document.getElementById("bart")
etiquetaimg.addEventListener ("mouseover", cambiarTitulo )

function cambiarTitulo (){
    let etiquetatitulo=document.getElementById("titulo")
    etiquetatitulo.textContent="Estoy cambiando"
}