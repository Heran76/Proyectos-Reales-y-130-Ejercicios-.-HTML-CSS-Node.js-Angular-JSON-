let elementoAleatorio = document.getElementById("textoAleatorio");

function crearAleatorio(minimo, maximo){
    maximo = maximo + 1;
    let resultado = Math.floor(Math.random() * (maximo - minimo)+minimo);
    elementoAleatorio.textContent = resultado;
}

