function sumar(num1,num2){
    let suma = +num1 + +num2;
    return(suma);
}

function mostrarresultado(){
    let elementonumero1 = document.getElementById("numero1");
    let elementonumero2 = document.getElementById("numero2");
    let elementoresultado = document.getElementById("resultado");

    let elementosuma=sumar(elementonumero1.value, elementonumero2.value);

    elementoresultado.textContent=elementosuma;
}