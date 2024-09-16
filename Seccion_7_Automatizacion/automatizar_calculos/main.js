function crearTiendas(contenedorID, min, cantidadTiendas){ 
    //encontrar contendor por su 
    let elementoContenedor = document.getElementById(contenedorID);
    //bucle para crear las tiendas
    for(let conteoTiendas=1; conteoTiendas<=cantidadTiendas; conteoTiendas++){
     //crear texto label para poder llamar a funcion
     let textoEtiqueta = "Tienda "+ conteoTiendas;
     //crear tiendas con crearârrafotiendas
     let parrafoTienda = crearParrafotienda(textoEtiqueta, min);
     //agregar el parrafo al contendor
     elementoContenedor.appendChild(parrafoTienda);

    }

}


function crearParrafotienda(texoLabel, valorMin){
    //crear las etiquetas de párrafo
    let elementoParrafo = document.createElement("p");
    //crear la etiquet label
    let elementoEtiqueta = document.createElement("label");
    elementoEtiqueta.innerText=texoLabel + ": "

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
    
    let miTexto=elemento.value;
    let miNumero=Number(miTexto);

    return miNumero
}

function calcular(){
    let ventas=[];
    let posicionVentas = 0;
    let elementoVentas = document.getElementById("itemsTiendas");

    for(let item of elementoVentas.children){
        let valorVentas = extraerNumeroDesdeElemento(item.children[1]);
        ventas[posicionVentas]=valorVentas;
        posicionVentas = posicionVentas + 1;
    }
    
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
            if(numero < venta){
                venta = numero;
            }
        }
        return venta;
}
    
