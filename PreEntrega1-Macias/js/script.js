let impuestosBase = 1.75; // Impuestos estandar de Argentina %75
let precioSinImp = 0;
let impuestoMasDe300 = 1.25; // Si gastastte mas de 300USD %25

function calcularImpuestos() {
    let precioSinImp = document.forms["calculadoraPrecio"]["precioJuego"].value;
    let precioBase = (precioSinImp * impuestosBase).toFixed(2);
    console.log(precioBase);

    var checkMasDe300 = document.getElementById('checkMasDe300');
    if(checkMasDe300.checked){
        var precioFinal = (precioBase * impuestoMasDe300).toFixed(2);
    } else {
        var precioFinal = (precioBase);
    }
    document.getElementById("campoPrecioFinal").innerHTML = '$' + (precioFinal) + '';
    document.getElementById("campoPrecio").style.display = "block";

    
}



let botonCalcular = document.getElementById("botonCalcular");
botonCalcular.addEventListener('click', event => {
    calcularImpuestos();
});

