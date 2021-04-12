const edad = document.getElementById('range_edad'),
    etiqueta_edad = document.getElementById('valor_edad')

const edades_rangos = [
    '15-18',
    '19-25',
    '26-35',
    '35-50',
    '50+'
]

edad.addEventListener('change',mostrar_rango_edades)

function mostrar_rango_edades(){
    etiqueta_edad.innerText = `${edades_rangos[edad.value]} Años`
}