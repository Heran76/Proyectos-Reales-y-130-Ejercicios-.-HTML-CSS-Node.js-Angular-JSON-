function extraerNumeroDesdeElemento(elemento){
    let miElemento= document.getElementById(elemento);
    let miTexto=miElemento.value;
    let miNumero=Number(miTexto);

    return miNumero
}

function calcular(){
    let venta=[];
    
    venta[0]=extraerNumeroDesdeElemento("ventasTienda1");
    venta[1]=extraerNumeroDesdeElemento("ventasTienda2");
    venta[2]=extraerNumeroDesdeElemento("ventasTienda3");
    venta[3]=extraerNumeroDesdeElemento("ventasTienda4");
    venta[4]=extraerNumeroDesdeElemento("ventasTienda5");
    venta[5]=extraerNumeroDesdeElemento("ventasTienda6");

    let totalventas = ventasTotal(venta);
    let totalMayor = ventaMayor(venta);
    let totalMenor= ventaMenor(venta)
    let mensaje=document.getElementById("parrafoSalida");
    mensaje.textContent="Las ventas totale son: "+totalventas+" // La venta mayor es "+totalMayor+" // la venta menor es "+totalMenor;
}
function ventasTotal(array){
        let suma = 0;
        for(let venta of array){
            suma = suma + venta;
        }
        return suma;
    }

function ventaMayor(array){
        let mayor = array[0];
        for(let numero of array){
            if(numero > mayor){
                mayor = numero;
            }
        }
        return mayor;
    }

function ventaMenor(array){
        let menor = array[0];
        for(let numero of array){
            if(numero < menor){
                menor = numero;
            }
        }
        return menor;
    }
    
