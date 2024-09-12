function extraerNumeroDesdeElemento(elemento){
    let miElemento = document.getElementById(elemento);
    let miTexto = miElemento.value;
    let miNumero = Number(miTexto);

    return miNumero;
}




function calcular(){
    let  ventas = [];

    ventas[0] = extraerNumeroDesdeElemento("ventasTienda1");
    ventas[1] = extraerNumeroDesdeElemento("ventasTienda2");
    ventas[2] = extraerNumeroDesdeElemento("ventasTienda3");
    ventas[3] = extraerNumeroDesdeElemento("ventasTienda4");
    ventas[4] = extraerNumeroDesdeElemento("ventasTienda5");
    ventas[5] = extraerNumeroDesdeElemento("ventasTienda6");

    let ventasTotal = sumaTotal(ventas);
    let ventaMayor =  calcularMayor(ventas);
    let ventaMinima= calcularMenor(ventas);
    
    let mensajeVentas = "El total de la venta es : "+ventasTotal+"//"+"La venta mayor es : "+ventaMayor+"// La venta menor es : "+ventaMinima;
    let textoVentas = document.getElementById("parrafoSalida");

    textoVentas.textContent=mensajeVentas;
    
}
function sumaTotal(array){
    let total = 0;
    for(let venta of array){
        total = total + venta;
        
    }
    return total;
}

function calcularMayor(array){
  let maximo = array[0];
  for(let venta of array){
    if(venta > maximo){
        maximo = venta
    }
  }
  return maximo;
}

function calcularMenor(array){
    let minimo = array[0];
    for(let venta of array){
        if(venta < minimo){
            minimo = venta;
        }
    }
    return minimo;
}