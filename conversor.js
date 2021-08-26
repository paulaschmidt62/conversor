function cambiarDolares() {
    let dolarHoy=102.79
    
    let ingresoPesos = document.getElementById("pesos").value
    resultado = ingresoPesos / dolarHoy;
    impuestoPais = ingresoPesos * 0.3;
    retencionGanancia = ingresoPesos * 0.35;
    total = parseInt(ingresoPesos) + parseInt(impuestoPais) + parseInt(retencionGanancia);

    alert('El resultado de la conversion es '+ resultado + ' dolares. El impuesto país es de ' + impuestoPais + ' pesos. Las retenciones por ganancias son de ' + retencionGanancia + ' pesos. Y el total a pagar es de ' + total + ' pesos.');

}