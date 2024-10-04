let inputhora = document.getElementById("tiempoElejido");
let reloj = document.getElementById("reloj");
let sonido = document.getElementById("sonido")
let fecha = document.getElementById("fecha")
let alarmaTimeout;

function alarma(){
    setTimeout(alarmasonido, 1000*inputhora.value);
}

function alarmasonido(){
    reloj.style.color="green";
    sonido.loop = true;
    sonido.play();
}

function comenzarReloj(){
    setInterval(titac, 1000);
}

function titac() {
    let tiempoActual = new Date();  // Asigna el tiempo actual
    let horaActual = tiempoActual.toLocaleTimeString('es-ES'); // Devuelve la fecha en formato local (España)
    let fechaLocal = tiempoActual.toLocaleDateString('es-Es');
    reloj.textContent = horaActual;
    fecha.textContent= fechaLocal;
}

function resetAlarma(){
    clearTimeout(alarmaTimeout);  // Detiene el timeout de la alarma
    sonido.pause();  // Pausa el sonido de la alarma si está sonando
    sonido.currentTime = 0;  // Reinicia el sonido al principio
    reloj.style.color = "black";  // Vuelve a poner el color del reloj al original
    inputhora.value = '';  // Reinicia el valor del input de tiempo
}
