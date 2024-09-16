function crearParrafotienda(texoLabel, valorMin){
    //crear las etiquetas de párrafo
    let elementoParrafo = document.createElement("p");
    //crear la etiquet label
    let elementoEtiqueta = document.createElement("label");

    //conectar con el input

    elementoEtiqueta.setAttribute("for",texoLabel);

    //crear el input
    let elementoInput = document.createElement("input");
    //establecer elemento input 
    elementoInput.setAttribute("type","number");
    elementoEtiqueta.setAttribute("id",texoLabel);
    elementoInput.setAttribute("min", valorMin);
    elementoInput.setAttribute("value", 0);

    //agregar label e input al parrafo
    elementoParrafo.appendChild(elementoEtiqueta);
    elementoParrafo.appendChild(elementoInput);
    //devolver el párrafo completo
    return elementoParrafo;
}




function extraerNumeroDesdeElemento(elemento){
    let miElemento= document.getElementById(elemento);
    let miTexto=miElemento.value;
    let miNumero=Number(miTexto);

    return miNumero
}

function calcular(){
    let ventas=[];
    
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
    
