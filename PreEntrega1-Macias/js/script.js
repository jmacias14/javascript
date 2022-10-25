let impuestosBase = 1.65;
let precioSinImp = 0;


function calcularImpuestos() {
    let precioSinImp = document.forms["calculadoraPrecio"]["precioJuego"].value;
    let precioFinal = precioSinImp * impuestosBase
    console.log(precioFinal);
    document.getElementById("precioFinal").innerHTML = '$' + (precioFinal) + '';
    document.getElementById("campoPrecio").style.display = "block";


}

let botonCalcular = document.getElementById("botonCalcular");
botonCalcular.addEventListener('click', event => {
    calcularImpuestos();
});

