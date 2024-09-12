function extraerNumeroDesdeElemento(elemento){
    let miElemento = document.getElementById(elemento);
    let miTexto = miElemento.value;
    let miNumero = Number(miTexto);

    return miNumero;
}




function calcular(){
    let ventas1, ventas2, ventas3, ventas4, ventas5, ventas6;

    ventas1 = extraerNumeroDesdeElemento("ventasTienda1");
    ventas2 = extraerNumeroDesdeElemento("ventasTienda2");
    ventas3 = extraerNumeroDesdeElemento("ventasTienda3");
    ventas4 = extraerNumeroDesdeElemento("ventasTienda4");
    ventas5 = extraerNumeroDesdeElemento("ventasTienda5");
    ventas6 = extraerNumeroDesdeElemento("ventasTienda6");

    let ventastotal = ventas1 + ventas2 + ventas3 + ventas4 + ventas5 + ventas6;
    let mensajeVentas = "El total de las ventas es : " + ventastotal;
    let textoVentas = document.getElementById("parrafoSalida");

    textoVentas.textContent=mensajeVentas;

    
}