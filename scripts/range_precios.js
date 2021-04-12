const precio = document.getElementById('range_precios'),
    etiqueta_precios = document.getElementById('valor_precios')

const precios_rangos = [
    '$150 - $199',
    '$200 - $249',
    '$250 - $349',
    '$350 - $449',
    '$450 - $600'
]

precio.addEventListener('change',mostrar_rango_precios)

function mostrar_rango_precios(){
    etiqueta_precios.innerText = `${precios_rangos[precio.value]}`
}