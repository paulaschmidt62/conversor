function cambiarDolares() {
    let dolarHoy=102.79
    
    let ingresoPesos = document.getElementById("pesos").value
    resultado = ingresoPesos / dolarHoy;
    impuestoPais = ingresoPesos * 0.3;
    retencionGanancia = ingresoPesos * 0.35;
    total = parseInt(ingresoPesos) + parseInt(impuestoPais) + parseInt(retencionGanancia);

    if(resultado <=0){
        alert('El valor ingresado no es válido');
    }else{
        alert('El resultado de la conversion es '+ Math.round(resultado) + ' dolares. El impuesto país es de ' + impuestoPais + ' pesos. Las retenciones por ganancias son de ' + retencionGanancia + ' pesos. Y el total a pagar es de ' + Math.round(total) + ' pesos.');
    }
}