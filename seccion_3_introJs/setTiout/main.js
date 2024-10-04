let inputtiempo = document.getElementById("tiempoElejido");
let textoAlerta = document.getElementById("titulo");
let cabecera = document.getElementById("cabecera");
function alarma(){
    setTimeout(tiempopasado, 1000 * inputtiempo.value);
}

function tiempopasado(){
    textoAlerta.textContent="Encendido";
    textoAlerta.style.color="green";
    cabecera.style.color="green"

}