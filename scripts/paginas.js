const paginas = Array.from(document.getElementsByClassName('pagina')),
    contenedor_paginas = document.getElementsByClassName('paginas')[0],
    siguiente = document.getElementById('siguiente'),
    regresar = document.getElementById('regresar'),
    enviar = document.getElementById('enviar')

let indice_pagina = 0, //Índice de la página actual
    total_paginas = paginas.length

//Configuración inicial
paginas.forEach((pagina,indice) =>{
    if(indice > 0){
        pagina.style.transform = 'translateX(100vw)'
    }else{
        pagina.style.position = 'relative'
    }
})

//setTimeout(() => { scrolling = false }, tiempoTransicion+300)

siguiente.addEventListener('click',siguiente_pagina )
regresar.addEventListener('click',regresar_pagina )
verificar_aparicion_botones()

function siguiente_pagina(){
    setTimeout(() => { 
        paginas[indice_pagina+1].style.position = 'relative'
    }, 300)

    paginas[indice_pagina].style.transform = 'translateX(-100vw)'
    paginas[indice_pagina+1].style.transform = 'translateX(0px)'

    setTimeout(() => { 
        paginas[indice_pagina].style.position = 'absolute'
        indice_pagina ++
        verificar_aparicion_botones()
    }, 300)
}

function regresar_pagina(){
    setTimeout(() => { 
        paginas[indice_pagina-1].style.position = 'relative'
    }, 300)

    paginas[indice_pagina].style.transform = 'translateX(100vw)'
    paginas[indice_pagina-1].style.transform = 'translateX(0px)'

    setTimeout(() => { 
        paginas[indice_pagina].style.position = 'absolute'
        indice_pagina --
        verificar_aparicion_botones()
    }, 300)
}

//Recursos
function verificar_aparicion_botones(){
    if(indice_pagina == 0) regresar.style.display = 'none'
    else regresar.style.display = 'block'

    if(indice_pagina == total_paginas-1){
        siguiente.style.display = 'none'
        enviar.style.display = 'block'
    }else{
        siguiente.style.display = 'block'
        enviar.style.display = 'none'
    }
}