
        export function ampliarInformacionProducto(evento){

            let producto={}

            //llenar la info del producto
            producto.foto=evento.target.parentElement.querySelector("img").src
            producto.nombre=evento.target.parentElement.querySelector("h2").textContent
            producto.descripcion=evento.target.parentElement.querySelector("p").textContent
            producto.precio=evento.target.parentElement.querySelector("h4").textContent

        let fotoInfo=document.getElementById("fotoInfo")
        fotoInfo.src=evento.target.parentElement.querySelector("img").src
        let tituloFoto=document.getElementById("nombreInfo")
        tituloFoto.textContent=evento.target.parentElement.querySelector("h2").textContent
        let descripcion=document.getElementById("descripcionInfo")
        descripcion.textContent=evento.target.parentElement.querySelector("p").textContent
        let precio=document.getElementById("precioInfo")
        precio.textContent=evento.target.parentElement.querySelector("h4").textContent

        return producto

        }

     

        

      
    