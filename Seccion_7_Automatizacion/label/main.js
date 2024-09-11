function numeroExtraidoDesdeElemento(elemento){
    let miElemento = document.getElementById(elemento);
    let miTexto= miElemento.value;
    let miNumero= Number(miTexto);

    return miNumero;
}





function calcular(){
    let ventas1, ventas2, ventas3, ventas4, ventas5, ventas6;

    ventas1 = numeroExtraidoDesdeElemento("ventasTienda1");
    ventas2 = numeroExtraidoDesdeElemento("ventasTienda2");
    ventas3 = numeroExtraidoDesdeElemento("ventasTienda3");
    ventas4 = numeroExtraidoDesdeElemento("ventasTienda4");
    ventas5 = numeroExtraidoDesdeElemento("ventasTienda5");
    ventas6 = numeroExtraidoDesdeElemento("ventasTienda6");

    let totalVentas = ventas1+ventas2+ventas3+ventas4+ventas5+ventas6;

    let mensajeSalida = "El total de la venta es : " + totalVentas
    let textoSalida = document.getElementById("parrafoSalida");
    textoSalida.textContent=mensajeSalida;
}