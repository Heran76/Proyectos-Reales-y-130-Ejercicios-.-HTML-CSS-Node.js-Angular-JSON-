function extraerNumeroDesdeElemento(elemento){
    let miElemento= document.getElementById(elemento);
    let miTexto=miElemento.value;
    let miNumero=Number(miTexto);

    return miNumero
}

function calcular(){
    let venta=[];
    
    ventas[0]=extraerNumeroDesdeElemento("ventasTienda1");
    ventas[1]=extraerNumeroDesdeElemento("ventasTienda2");
    ventas[2]=extraerNumeroDesdeElemento("ventasTienda3");
    ventas[3]=extraerNumeroDesdeElemento("ventasTienda4");
    ventas[4]=extraerNumeroDesdeElemento("ventasTienda5");
    ventas[5]=extraerNumeroDesdeElemento("ventasTienda6");

    let totalventas = ventasTotal(ventas);
    let totalMayor = ventaMayor(ventas);
    let totalMenor= ventaMenor(ventas)
    let mensaje=document.getElementById("parrafoSalida");
    mensaje.textContent="Las ventas totale son: "+totalventas+" // La venta mayor es "+totalMayor+" // la venta menor es "+totalMenor;
}
function ventasTotal(array){
        let suma = 0;
        for(let venta of array){
            suma = suma +venta;
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
        let venta = array[0]
        for(let numero of array){
            if(venta < numero){
                venta = numero;
            }
        }
        return venta;
    }
    
